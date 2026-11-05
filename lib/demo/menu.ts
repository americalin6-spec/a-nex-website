/** Demo menu for the "AI 聽懂訂單" try-it section (好味小館). Shared by client + server. */

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  kind: "drink" | "food";
  aliases: string[];
};

export const DEMO_SHOP_NAME = "好味小館";

export const DEMO_MENU: MenuItem[] = [
  { id: "bubble-milk-tea", name: "珍珠奶茶", price: 55, kind: "drink", aliases: ["珍珠奶茶", "珍奶", "波霸奶茶", "波霸"] },
  { id: "milk-tea", name: "奶茶", price: 50, kind: "drink", aliases: ["奶茶"] },
  { id: "black-tea", name: "紅茶", price: 35, kind: "drink", aliases: ["紅茶"] },
  { id: "green-tea", name: "綠茶", price: 35, kind: "drink", aliases: ["綠茶"] },
  { id: "latte", name: "拿鐵", price: 75, kind: "drink", aliases: ["拿鐵", "咖啡拿鐵"] },
  { id: "americano", name: "美式咖啡", price: 60, kind: "drink", aliases: ["美式咖啡", "美式", "黑咖啡"] },
  { id: "chicken-bento", name: "雞腿便當", price: 120, kind: "food", aliases: ["雞腿便當", "雞腿飯", "雞腿"] },
  { id: "pork-bento", name: "排骨便當", price: 110, kind: "food", aliases: ["排骨便當", "排骨飯", "排骨"] },
  { id: "braised-bento", name: "控肉便當", price: 110, kind: "food", aliases: ["控肉便當", "控肉飯", "控肉"] },
  { id: "beef-noodle", name: "牛肉麵", price: 180, kind: "food", aliases: ["紅燒牛肉麵", "牛肉麵", "牛麵"] },
  { id: "braised-rice", name: "滷肉飯", price: 40, kind: "food", aliases: ["魯肉飯", "滷肉飯", "肉燥飯"] },
  { id: "veggie", name: "燙青菜", price: 40, kind: "food", aliases: ["燙青菜", "青菜"] },
];

export const SUGAR_OPTIONS = ["無糖", "微糖", "半糖", "少糖", "全糖"];
export const ICE_OPTIONS = ["去冰", "微冰", "少冰", "正常冰", "常溫", "熱"];
export const FOOD_OPTIONS = ["不要香菜", "不要蔥", "飯少", "飯多", "加辣", "不辣", "加蛋"];

export type ParsedItem = {
  id: string;
  name: string;
  qty: number;
  unitPrice: number;
  options: string[];
};

export type ParsedOrder = {
  items: ParsedItem[];
  pickup: string | null;
  note: string | null;
  unknown: string[];
  total: number;
};

export function menuById(id: string) {
  return DEMO_MENU.find((m) => m.id === id);
}

/** Recompute prices from the menu — never trust prices from the model or client. */
export function finalizeOrder(
  raw: { id: string; qty: number; options?: string[] }[],
  pickup: string | null,
  note: string | null,
  unknown: string[],
): ParsedOrder {
  const merged = new Map<string, ParsedItem>();
  for (const r of raw) {
    const m = menuById(r.id);
    if (!m) continue;
    const qty = Math.max(1, Math.min(50, Math.round(Number(r.qty) || 1)));
    const allowed = m.kind === "drink" ? [...SUGAR_OPTIONS, ...ICE_OPTIONS] : FOOD_OPTIONS;
    const options = (r.options ?? []).filter((o) => allowed.includes(o));
    const key = `${m.id}|${options.join(",")}`;
    const prev = merged.get(key);
    if (prev) prev.qty += qty;
    else merged.set(key, { id: m.id, name: m.name, qty, unitPrice: m.price, options });
  }
  const items = [...merged.values()];
  const total = items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
  return { items, pickup, note, unknown: unknown.slice(0, 3), total };
}
