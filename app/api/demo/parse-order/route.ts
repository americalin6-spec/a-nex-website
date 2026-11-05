import { NextResponse } from "next/server";
import {
  DEMO_MENU,
  FOOD_OPTIONS,
  ICE_OPTIONS,
  SUGAR_OPTIONS,
  finalizeOrder,
  type ParsedOrder,
} from "@/lib/demo/menu";
import { parseOrderWithRules } from "@/lib/demo/parse-order-rules";

export const runtime = "nodejs";

const MAX_LEN = 200;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > MAX_PER_WINDOW;
}

const SYSTEM_PROMPT = `你是餐廳「好味小館」的 LINE 點餐助理。把客人的一句話拆成訂單，只能使用下面菜單的 id。
菜單（id｜名稱｜別名）：
${DEMO_MENU.map((m) => `${m.id}｜${m.name}｜${m.aliases.join("、")}`).join("\n")}
飲料可用選項：${[...SUGAR_OPTIONS, ...ICE_OPTIONS].join("、")}
餐點可用選項：${FOOD_OPTIONS.join("、")}
規則：
- 中文數字要轉成數字（兩杯=2）。沒講數量就是 1。
- 客人用簡稱、錯字或口語（珍奶、微微=微糖微冰、雞腿飯），請對應到正確的菜單 id。
- 菜單上沒有的東西放進 unknown（用客人原本的說法）。
- pickup：取餐時間，用 24 小時制 HH:MM；沒講就 null。「6點」通常指 18:00。
- note：其他備註（例如分開裝、不用餐具），沒有就 null。
只輸出 JSON：{"items":[{"id":"...","qty":1,"options":["..."]}],"pickup":null,"note":null,"unknown":[]}`;

async function parseWithAI(text: string, apiKey: string): Promise<ParsedOrder | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0,
        response_format: { type: "json_object" },
        max_tokens: 400,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: text },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const content = data.choices?.[0]?.message?.content;
    if (!content) return null;
    const parsed = JSON.parse(content) as {
      items?: { id: string; qty: number; options?: string[] }[];
      pickup?: string | null;
      note?: string | null;
      unknown?: string[];
    };
    const pickup = typeof parsed.pickup === "string" ? parsed.pickup.slice(0, 20) : null;
    const note = typeof parsed.note === "string" ? parsed.note.slice(0, 60) : null;
    const unknown = Array.isArray(parsed.unknown)
      ? parsed.unknown.filter((u) => typeof u === "string").map((u) => u.slice(0, 20))
      : [];
    return finalizeOrder(Array.isArray(parsed.items) ? parsed.items : [], pickup, note, unknown);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "試太多次了，請稍等一分鐘再試。" }, { status: 429 });
  }

  let text = "";
  try {
    const body = (await request.json()) as { text?: unknown };
    text = typeof body.text === "string" ? body.text.trim().slice(0, MAX_LEN) : "";
  } catch {
    return NextResponse.json({ error: "格式錯誤" }, { status: 400 });
  }
  if (!text) return NextResponse.json({ error: "請先輸入想點的東西" }, { status: 400 });

  const apiKey = process.env.OPENAI_API_KEY;
  if (apiKey) {
    const ai = await parseWithAI(text, apiKey);
    if (ai && (ai.items.length > 0 || ai.unknown.length > 0)) {
      return NextResponse.json({ order: ai, engine: "ai" });
    }
  }
  return NextResponse.json({ order: parseOrderWithRules(text), engine: "rules" });
}
