/** Demo data + parser for the "AI 叫瓦斯" try-it section. Shared by client + server. */

export const GAS_SHOP_NAME = "大明瓦斯行";

export type GasItem = { id: string; name: string; kg: number; price: number };

export const GAS_CATALOG: GasItem[] = [
  { id: "gas-20", name: "桶裝瓦斯 20 公斤", kg: 20, price: 850 },
  { id: "gas-16", name: "桶裝瓦斯 16 公斤", kg: 16, price: 700 },
  { id: "gas-4", name: "桶裝瓦斯 4 公斤", kg: 4, price: 300 },
];

/** The demo "regular customer" the system remembers. */
export const REGULAR = {
  name: "王太太",
  address: "台北市文山區興隆路二段 100 號 5 樓",
  usual: { id: "gas-20", qty: 1 },
  avgDays: 28,
  lastOrder: "10/08",
};

export type GasOrder = {
  items: { id: string; name: string; qty: number; unitPrice: number }[];
  address: string;
  addressFromMemory: boolean;
  time: string | null;
  note: string | null;
  total: number;
};

export function finalizeGas(
  raw: { id: string; qty: number }[],
  address: string | null,
  time: string | null,
  note: string | null,
): GasOrder {
  const merged = new Map<string, number>();
  for (const r of raw) {
    if (!GAS_CATALOG.some((g) => g.id === r.id)) continue;
    const q = Math.max(1, Math.min(10, Math.round(Number(r.qty) || 1)));
    merged.set(r.id, (merged.get(r.id) ?? 0) + q);
  }
  if (merged.size === 0) merged.set(REGULAR.usual.id, REGULAR.usual.qty);
  const items = [...merged.entries()].map(([id, qty]) => {
    const g = GAS_CATALOG.find((x) => x.id === id)!;
    return { id, name: g.name, qty, unitPrice: g.price };
  });
  const cleanAddr = address && address.trim().length >= 6 ? address.trim().slice(0, 60) : null;
  return {
    items,
    address: cleanAddr ?? REGULAR.address,
    addressFromMemory: !cleanAddr,
    time,
    note,
    total: items.reduce((s, i) => s + i.qty * i.unitPrice, 0),
  };
}

const CN: Record<string, number> = { 一: 1, 二: 2, 兩: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
function num(s: string | undefined): number | null {
  if (!s) return null;
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  if (s === "十") return 10;
  if (s.startsWith("十")) return 10 + (CN[s[1]] ?? 0);
  if (s.length === 2 && s[1] === "十") return (CN[s[0]] ?? 0) * 10;
  return CN[s] ?? null;
}
const N = "(\\d{1,2}|[一二兩两三四五六七八九十]{1,2})";

function parseTime(t: string): string | null {
  const s = t.replace(/：/g, ":");
  let m = s.match(/(\d{1,2}):(\d{2})/);
  if (m) return `${m[1].padStart(2, "0")}:${m[2]} 前後`;
  m = s.match(new RegExp(`(早上|上午|中午|下午|晚上)?\\s*${N}\\s*點\\s*(半)?\\s*(前|以前|之前|左右|後|以後)?`));
  if (m) {
    let h = num(m[2]) ?? 0;
    if ((m[1] === "下午" || m[1] === "晚上") && h < 12) h += 12;
    if (!m[1] && h >= 1 && h <= 7) h += 12;
    const mm = m[3] ? "30" : "00";
    const suffix = m[4] && /前/.test(m[4]) ? " 前" : m[4] && /後/.test(m[4]) ? " 後" : "";
    return `${String(h).padStart(2, "0")}:${mm}${suffix}`;
  }
  if (/馬上|現在|趕快|快一點|越快越好|盡快/.test(s)) return "盡快送達";
  if (/明天/.test(s)) return /早上|上午/.test(s) ? "明天上午" : /下午/.test(s) ? "明天下午" : "明天";
  if (/今天/.test(s)) return /下午/.test(s) ? "今天下午" : "今天";
  if (/下午/.test(s)) return "今天下午";
  if (/早上|上午/.test(s)) return "今天上午";
  return null;
}

export function parseGasWithRules(input: string): GasOrder {
  const t = input.replace(/\s+/g, " ").trim();
  const raw: { id: string; qty: number }[] = [];

  // "20公斤兩桶" / "兩桶20公斤" / "20kg x2" / "大的" / "小的"
  const re = new RegExp(`(?:${N}\\s*(?:桶|罐|支|個)\\s*)?(20|16|4|二十|十六|四)\\s*(?:公斤|kg|KG|斤)?(?:的)?\\s*(?:[x×*]\\s*${N}|${N}\\s*(?:桶|罐|支|個))?`, "g");
  for (const m of t.matchAll(re)) {
    const kgRaw = m[2];
    const kg = num(kgRaw) ?? parseInt(kgRaw, 10);
    if (![20, 16, 4].includes(kg)) continue;
    // must look like a gas size mention, not a time/address number
    const around = t.slice(m.index ?? 0, (m.index ?? 0) + m[0].length + 2);
    if (!/(公斤|kg|KG|斤|桶|罐)/.test(around)) continue;
    const qty = num(m[1]) ?? num(m[3]) ?? num(m[4]) ?? 1;
    raw.push({ id: `gas-${kg}`, qty });
  }
  if (raw.length === 0) {
    const big = /大桶|大的/.test(t);
    const small = /小桶|小的/.test(t);
    const q = t.match(new RegExp(`${N}\\s*(?:桶|罐)`));
    if (big || small || q) raw.push({ id: small ? "gas-4" : "gas-20", qty: num(q?.[1]) ?? 1 });
  }

  // address: explicit "…市/區…路/街…號" ; "地址一樣 / 老地方 / 老樣子" → memory
  const addr = t.match(/([一-龥]{2,3}[市縣])?[一-龥]{1,3}[區鄉鎮市][一-龥\d一二三四五六七八九十]{1,12}(?:路|街|大道)[一-龥\d一二三四五六七八九十段巷弄之\-]*\d+\s*號(?:\s*\d+\s*樓)?/);
  const address = addr ? addr[0].replace(/^(?:送到|送去|寄到|到|在|送)/, "") : null;

  const notes: string[] = [];
  if (/檢查|漏氣|聞到|味道/.test(t)) notes.push("請師傅順便檢查管線");
  if (/換.*管|膠管/.test(t)) notes.push("需要換瓦斯管");
  if (/沒人|放門口|管理室|警衛/.test(t)) notes.push("家裡可能沒人，可放管理室");
  if (/打電話|先聯絡/.test(t)) notes.push("到之前先打電話");

  return finalizeGas(raw, address, parseTime(t), notes.length ? notes.join("、") : null);
}

/* ------------------------------------------------------------------ */
/* English layer                                                       */
/* ------------------------------------------------------------------ */

export const GAS_SHOP_NAME_EN = "Daming Gas Delivery";
export const REGULAR_EN = {
  name: "Mrs. Wang",
  address: "5F, No. 100, Sec. 2, Xinglong Rd., Wenshan Dist., Taipei",
};
export const GAS_NAME_EN: Record<string, string> = {
  "gas-20": "Gas cylinder 20 kg",
  "gas-16": "Gas cylinder 16 kg",
  "gas-4": "Gas cylinder 4 kg",
};

const EN_N: Record<string, number> = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6 };
const EN_N_RE = "(\\d{1,2}|a|an|one|two|three|four|five|six)";

function enGasTime(s: string): string | null {
  let m = s.match(/\b(before|by|after|around|at)?\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);
  if (!m) m = s.match(/\b(before|by|after|around|at)\s+(\d{1,2})(?::(\d{2}))?\b()/);
  if (m) {
    let h = parseInt(m[2], 10);
    if (m[4] === "pm" && h < 12) h += 12;
    else if (!m[4] && h >= 1 && h <= 7) h += 12;
    const t = `${String(h).padStart(2, "0")}:${m[3] ?? "00"}`;
    return m[1] === "before" || m[1] === "by" ? `before ${t}` : m[1] === "after" ? `after ${t}` : t;
  }
  if (/\b(asap|right now|now|as soon as possible|quickly|hurry|urgent)\b/.test(s)) return "ASAP";
  if (/\btomorrow\b/.test(s)) return /morning/.test(s) ? "tomorrow morning" : /afternoon/.test(s) ? "tomorrow afternoon" : "tomorrow";
  if (/\bthis afternoon\b|\bafternoon\b/.test(s)) return "this afternoon";
  if (/\bthis morning\b|\bmorning\b/.test(s)) return "this morning";
  if (/\btoday\b/.test(s)) return "today";
  return null;
}

/** Rule-based parser for English gas orders. */
export function parseGasEnglish(input: string): GasOrder {
  const t = " " + input.toLowerCase().replace(/\s+/g, " ").trim() + " ";
  const raw: { id: string; qty: number }[] = [];

  const re = new RegExp(
    `(?:\\b${EN_N_RE}\\s*(?:x\\s*)?(?:cylinders?|tanks?|bottles?)?\\s*(?:of\\s*)?)?\\b(20|16|4)\\s*(?:-\\s*)?(?:kg|kgs|kilo|kilos|kilograms?)\\b(?:\\s*(?:cylinders?|tanks?|bottles?))?(?:\\s*[x×*]\\s*(\\d{1,2}))?`,
    "g",
  );
  for (const m of t.matchAll(re)) {
    const kg = parseInt(m[2], 10);
    const q = m[1] ? (/^\d+$/.test(m[1]) ? parseInt(m[1], 10) : EN_N[m[1]]) : m[3] ? parseInt(m[3], 10) : 1;
    raw.push({ id: `gas-${kg}`, qty: q ?? 1 });
  }
  if (raw.length === 0) {
    const big = /\b(big|large)\b/.test(t);
    const small = /\bsmall\b/.test(t);
    const q = t.match(new RegExp(`\\b${EN_N_RE}\\s*(?:cylinders?|tanks?|bottles?)`));
    if (big || small || q) {
      raw.push({ id: small ? "gas-4" : "gas-20", qty: q ? (/^\d+$/.test(q[1]) ? parseInt(q[1], 10) : EN_N[q[1]] ?? 1) : 1 });
    }
  }

  // "to 200 Fuxing S Rd Sec 1, 3F" style addresses
  const addr = input.match(
    /\b(?:deliver to|send to|to|address(?: is)?:?)\s+((?:\d+\s*f,?\s*)?(?:no\.?\s*)?\d+[^]*?\b(?:road|rd|street|st|avenue|ave|lane|ln|blvd|boulevard)\b.*?)(?=,\s*(?:call|please|before|by|after|asap|thanks)\b|[!?]|$)/i,
  );
  const address = addr && !/same address/i.test(addr[1]) ? addr[1].trim() : null;

  const notes: string[] = [];
  if (/\b(check|inspect|leak|smell)\b/.test(t)) notes.push("Please check the gas line");
  if (/\b(hose|pipe)\b/.test(t)) notes.push("Needs a new gas hose");
  if (/\b(no one|nobody|not home|leave it|front desk|reception|concierge)\b/.test(t)) notes.push("May not be home — leave at the front desk");
  if (/\b(call|phone) (me )?(first|before)\b/.test(t)) notes.push("Call before arriving");

  return finalizeGas(raw, address, enGasTime(t), notes.length ? notes.join("; ") : null);
}
