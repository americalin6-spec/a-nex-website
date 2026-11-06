import {
  DEMO_MENU,
  FOOD_OPTIONS,
  ICE_OPTIONS,
  SUGAR_OPTIONS,
  MENU_EN,
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
  const segments = text.replace(/[呃嗯欸啊阿哦喔]+/g, "").split(/[，,、。；;\n]|還有|然後|再來|另外|跟|和|加上/).filter((s) => s.trim());
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

    // 3) spoken corrections: "啊不對，三杯" / "改成三杯" → fix the previous item's quantity
    if (hits.length === 0 && raw.length > 0) {
      const corr = seg.match(new RegExp(`(?:不對|改成|改為|更正|應該是|改)\\s*(?:是|要)?\\s*${NUM}\\s*(?:杯|個|份|碗|盒|顆|瓶|罐|包)`));
      if (corr) {
        raw[raw.length - 1].qty = parseNumber(corr[1]) ?? raw[raw.length - 1].qty;
        continue;
      }
    }

    // 4) things that look like food but are not on the menu
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

/* ------------------------------------------------------------------ */
/* English orders: "two black teas light sugar less ice and a chicken  */
/* bento, pick up at 6"                                                */
/* ------------------------------------------------------------------ */

const EN_NUM: Record<string, number> = {
  a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, couple: 2,
};
const EN_NUM_RE = "(\\d{1,2}|a|an|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)";
const EN_UNIT = "(?:\\s+(?:cups?|glass(?:es)?|bowls?|boxes|box|plates?|orders?\\s+of|servings?\\s+of|pieces?))?";

const EN_ALIASES = Object.entries(MENU_EN)
  .flatMap(([id, v]) => v.aliases.map((alias) => ({ alias, id, kind: DEMO_MENU.find((m) => m.id === id)!.kind })))
  .sort((a, b) => b.alias.length - a.alias.length);

const EN_DRINK_OPTS: [RegExp, string][] = [
  [/\b(no|zero|0%)\s*sugar|sugar[- ]?free|unsweetened/, "無糖"],
  [/\b(light|30%|less than half)\s*sugar|\blightly sweet/, "微糖"],
  [/\b(half|50%)\s*sugar|half sweet/, "半糖"],
  [/\b(less|70%)\s*sugar|less sweet/, "少糖"],
  [/\b(full|regular|normal|100%)\s*sugar/, "全糖"],
  [/\bno\s*ice|without ice|ice[- ]?free/, "去冰"],
  [/\blight\s*ice|a little ice/, "微冰"],
  [/\bless\s*ice/, "少冰"],
  [/\b(regular|normal|full)\s*ice/, "正常冰"],
  [/\broom\s*temp(erature)?/, "常溫"],
  [/\b(hot|warm)\b/, "熱"],
];
const EN_FOOD_OPTS: [RegExp, string][] = [
  [/\bno\s*(cilantro|coriander)/, "不要香菜"],
  [/\bno\s*(green onions?|scallions?|spring onions?)/, "不要蔥"],
  [/\bless\s*rice/, "飯少"],
  [/\b(more|extra)\s*rice/, "飯多"],
  [/\b(not|no|non)[- ]?spicy|without (chili|spice)/, "不辣"],
  [/\b(extra\s*)?spicy\b/, "加辣"],
  [/\b(add|extra|with)\s*(an?\s*)?egg/, "加蛋"],
];

function enOptions(segment: string, kind: "drink" | "food"): string[] {
  const out: string[] = [];
  const list = kind === "drink" ? EN_DRINK_OPTS : EN_FOOD_OPTS;
  for (const [re, opt] of list) if (re.test(segment)) out.push(opt);
  if (out.includes("不辣") && out.includes("加辣")) out.splice(out.indexOf("加辣"), 1);
  const uniq = [...new Set(out)];
  if (kind === "food") return uniq;
  const sugar = uniq.find((o) => SUGAR_OPTIONS.includes(o));
  const ice = uniq.find((o) => ICE_OPTIONS.includes(o));
  return [sugar, ice].filter(Boolean) as string[];
}

function enPickup(text: string): string | null {
  let m = text.match(/\b(\d{1,2}):(\d{2})\s*(am|pm)?/);
  if (m) {
    let h = parseInt(m[1], 10);
    if (m[3] === "pm" && h < 12) h += 12;
    else if (!m[3] && h >= 1 && h <= 9) h += 12;
    return `${String(h).padStart(2, "0")}:${m[2]}`;
  }
  m = text.match(/\b(?:at|by|around|for)\s+(\d{1,2})\s*(am|pm|o'?clock)?\b|\b(\d{1,2})\s*(am|pm)\b/);
  if (m) {
    let h = parseInt(m[1] ?? m[3], 10);
    const ap = m[2] ?? m[4];
    if (ap === "pm" && h < 12) h += 12;
    else if (ap !== "am" && h >= 1 && h <= 9) h += 12;
    return `${String(h).padStart(2, "0")}:00`;
  }
  m = text.match(/\bin\s+(\d{1,2})\s*(?:min|minutes)/);
  if (m) return `${m[1]} min`;
  if (/\bhalf an hour\b/.test(text)) return "30 min";
  if (/\b(asap|right now|now|as soon as possible)\b/.test(text)) return "ASAP";
  return null;
}

/** Rule-based parser for English orders (used when no AI key is configured). */
export function parseOrderEnglish(input: string): ParsedOrder {
  const text = " " + input.toLowerCase().replace(/\s+/g, " ").trim() + " ";
  const segments = text.split(/[,.;!\n]| and | plus | also | then /).filter((s) => s.trim());
  const raw: { id: string; qty: number; options: string[] }[] = [];
  const unknown: string[] = [];

  for (const seg of segments) {
    let masked = seg;
    const hits: { pos: number; len: number; id: string; kind: "drink" | "food" }[] = [];
    for (const { alias, id, kind } of EN_ALIASES) {
      const re = new RegExp(`\\b${alias.replace(/ /g, "\\s+")}s?\\b`);
      let m = masked.match(re);
      while (m && m.index !== undefined) {
        hits.push({ pos: m.index, len: m[0].length, id, kind });
        masked = masked.slice(0, m.index) + "_".repeat(m[0].length) + masked.slice(m.index + m[0].length);
        m = masked.match(re);
      }
    }
    hits.sort((a, b) => a.pos - b.pos);

    hits.forEach((h, k) => {
      const prevEnd = k > 0 ? hits[k - 1].pos + hits[k - 1].len : 0;
      const nextStart = k < hits.length - 1 ? hits[k + 1].pos : seg.length;
      const before = seg.slice(prevEnd, h.pos);
      const after = seg.slice(h.pos + h.len, nextStart);
      let qty = 1;
      const mb = before.match(new RegExp(`\\b${EN_NUM_RE}${EN_UNIT}\\s*(?:\\w+\\s+)?$`));
      const ma = after.match(new RegExp(`^\\s*(?:[x×*]\\s*(\\d{1,2})|\\(\\s*(\\d{1,2})\\s*\\))`));
      if (mb) qty = /^\d+$/.test(mb[1]) ? parseInt(mb[1], 10) : EN_NUM[mb[1]] ?? 1;
      else if (ma) qty = parseInt(ma[1] ?? ma[2], 10) || 1;
      raw.push({ id: h.id, qty, options: enOptions(after + " " + before, h.kind) });
    });

    if (hits.length === 0) {
      const m = seg.match(/\b(pizza|burgers?|fries|sandwich(?:es)?|pasta|salad|sushi|ramen|tacos?|steak|cola|coke|juice|cake|hot ?dog)\b/);
      if (m) unknown.push(m[1]);
    }
  }

  return finalizeOrder(raw, enPickup(text), null, [...new Set(unknown)]);
}
