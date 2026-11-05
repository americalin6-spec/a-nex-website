import {
  DEMO_MENU,
  FOOD_OPTIONS,
  ICE_OPTIONS,
  SUGAR_OPTIONS,
  finalizeOrder,
  type ParsedOrder,
} from "./menu";

const CN_DIGIT: Record<string, number> = {
  零: 0, 一: 1, 二: 2, 兩: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10,
};

/** "2" / "兩" / "十二" / "二十" → number */
export function parseNumber(s: string): number | null {
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  if (!s) return null;
  if (s === "十") return 10;
  if (s.startsWith("十")) return 10 + (CN_DIGIT[s[1]] ?? 0);
  if (s.length === 2 && s[1] === "十") return (CN_DIGIT[s[0]] ?? 0) * 10;
  if (s.length === 3 && s[1] === "十") return (CN_DIGIT[s[0]] ?? 0) * 10 + (CN_DIGIT[s[2]] ?? 0);
  return CN_DIGIT[s] ?? null;
}

const NUM = "(\\d{1,2}|[一二兩两三四五六七八九十]{1,3})";
const UNIT = "(?:杯|個|份|碗|盒|顆|瓶|罐|包)?";

// Longest alias first so "珍珠奶茶" wins over "奶茶".
const ALIASES = DEMO_MENU.flatMap((m) => m.aliases.map((a) => ({ alias: a, id: m.id, kind: m.kind })))
  .sort((a, b) => b.alias.length - a.alias.length);

const ICE_NORMALIZE: Record<string, string> = { 冰塊正常: "正常冰", 正常: "正常冰", 溫: "常溫", 熱的: "熱" };
const SUGAR_NORMALIZE: Record<string, string> = { 甜度正常: "全糖", 不加糖: "無糖", 一分糖: "微糖", 二分糖: "微糖", 三分糖: "微糖", 五分糖: "半糖", 七分糖: "少糖" };

function findOptions(segment: string, kind: "drink" | "food"): string[] {
  const out: string[] = [];
  if (kind === "drink") {
    for (const [k, v] of Object.entries(SUGAR_NORMALIZE)) if (segment.includes(k)) out.push(v);
    for (const s of SUGAR_OPTIONS) if (segment.includes(s)) out.push(s);
    for (const [k, v] of Object.entries(ICE_NORMALIZE)) if (segment.includes(k)) out.push(v);
    for (const s of ICE_OPTIONS) if (segment.includes(s)) out.push(s);
    // "微糖微冰" style shorthand
    if (/微微/.test(segment)) out.push("微糖", "微冰");
  } else {
    for (const s of FOOD_OPTIONS) if (segment.includes(s)) out.push(s);
    if (/不要香菜|香菜不要/.test(segment)) out.push("不要香菜");
    if (/不要蔥|蔥不要/.test(segment)) out.push("不要蔥");
    if (/飯少一點|少飯/.test(segment)) out.push("飯少");
  }
  // keep one sugar + one ice max
  const uniq = [...new Set(out)];
  const sugar = uniq.find((o) => SUGAR_OPTIONS.includes(o));
  const ice = uniq.find((o) => ICE_OPTIONS.includes(o));
  const food = uniq.filter((o) => FOOD_OPTIONS.includes(o));
  return [sugar, ice, ...food].filter(Boolean) as string[];
}

function findPickup(text: string): string | null {
  const t = text.replace(/：/g, ":");
  let m = t.match(/(\d{1,2}):(\d{2})/);
  if (m) return `${m[1].padStart(2, "0")}:${m[2]}`;
  m = t.match(new RegExp(`(早上|上午|中午|下午|晚上)?${NUM}\\s*點\\s*(半|${NUM}\\s*分?)?`));
  if (m) {
    let h = parseNumber(m[2]) ?? 0;
    const part = m[1];
    if ((part === "下午" || part === "晚上") && h < 12) h += 12;
    if (!part && h >= 1 && h <= 9) h += 12; // "6 點來拿" → evening is the common case
    let min = 0;
    if (m[3] === "半") min = 30;
    else if (m[4]) min = parseNumber(m[4]) ?? 0;
    return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
  }
  m = t.match(new RegExp(`${NUM}\\s*分鐘後`));
  if (m) return `${parseNumber(m[1])} 分鐘後`;
  if (/半小時後|半個小時/.test(t)) return "30 分鐘後";
  if (/馬上|現在|盡快/.test(t)) return "盡快";
  return null;
}

export function parseOrderWithRules(input: string): ParsedOrder {
  const text = input.replace(/\s+/g, " ").trim();
  const segments = text.split(/[，,、。；;\n]|還有|然後|再來|另外|跟|和|加上/).filter((s) => s.trim());
  const raw: { id: string; qty: number; options: string[] }[] = [];
  const unknown: string[] = [];

  for (const seg of segments) {
    // 1) locate every menu item in this segment (longest alias first, no overlaps)
    let masked = seg;
    const hits: { pos: number; len: number; id: string; kind: "drink" | "food" }[] = [];
    for (const { alias, id, kind } of ALIASES) {
      let idx = masked.indexOf(alias);
      while (idx >= 0) {
        hits.push({ pos: idx, len: alias.length, id, kind });
        masked = masked.slice(0, idx) + "＿".repeat(alias.length) + masked.slice(idx + alias.length);
        idx = masked.indexOf(alias);
      }
    }
    hits.sort((a, b) => a.pos - b.pos);

    // 2) quantity + options from each item's own neighbourhood
    hits.forEach((h, k) => {
      const prevEnd = k > 0 ? hits[k - 1].pos + hits[k - 1].len : 0;
      const nextStart = k < hits.length - 1 ? hits[k + 1].pos : seg.length;
      const before = seg.slice(Math.max(prevEnd, h.pos - 5), h.pos);
      const after = seg.slice(h.pos + h.len, nextStart);
      let qty = 1;
      const mb = before.match(new RegExp(`${NUM}\\s*${UNIT}\\s*$`));
      const ma = after.match(new RegExp(`^.{0,5}?(?:[x×*＊]\\s*${NUM}|${NUM}\\s*(?:杯|個|份|碗|盒|顆|瓶|罐|包))`));
      if (mb) qty = parseNumber(mb[1]) ?? 1;
      else if (ma) qty = parseNumber(ma[1] ?? ma[2]) ?? 1;
      raw.push({ id: h.id, qty, options: findOptions(after, h.kind) });
    });

    // 3) things that look like food but are not on the menu
    if (hits.length === 0) {
      const cleaned = seg
        .replace(/我要|我想要|請給我|幫我|麻煩|謝謝|來拿|外帶|內用|取餐/g, "")
        .replace(new RegExp(`^\\s*${NUM}?\\s*(?:杯|個|份|碗|盒|顆|瓶|罐|包)?`), "")
        .trim();
      const looksLikeFood = /(茶|咖啡|飯|麵|便當|湯|餅|蛋|汁|飲|堡|排|煎|炸|粥|餃|鍋|雞|魚|肉|麵包|蛋糕)/.test(cleaned);
      if (looksLikeFood && cleaned.length >= 2 && cleaned.length <= 10) unknown.push(cleaned);
    }
  }

  const noteMatch = text.match(/(不要[^，,。\s]{1,6}|飯少一點|少飯|加辣|分開裝|餐具不用|不用餐具)/g);
  const note = noteMatch ? [...new Set(noteMatch)].join("、") : null;

  return finalizeOrder(raw, findPickup(text), note, unknown);
}
