import { NextResponse } from "next/server";
import { GAS_CATALOG, REGULAR, finalizeGas, parseGasWithRules, type GasOrder } from "@/lib/demo/gas";

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

const SYSTEM_PROMPT = `你是「大明瓦斯行」的 LINE 叫瓦斯助理。把客人的一句話整理成叫瓦斯的訂單。
可以送的規格（id｜名稱）：
${GAS_CATALOG.map((g) => `${g.id}｜${g.name}`).join("\n")}
這位客人是常客「${REGULAR.name}」，平常都叫 ${REGULAR.usual.id} ${REGULAR.usual.qty} 桶，地址：${REGULAR.address}
規則：
- 「大的」通常是 gas-20，「小的」是 gas-4。客人說「老樣子」「一樣」或沒講規格，就用平常叫的。
- 中文數字要轉成數字。沒講數量就是 1。
- address：只有客人講了新地址才填（完整地址字串），講「地址一樣」「老地方」或沒講就填 null。
- time：希望送達的時間，例如「15:00 前」「明天上午」「盡快送達」，沒講就 null。
- note：其他交代，例如「先打電話」「放管理室」「順便檢查管線」，沒有就 null。
只輸出 JSON：{"items":[{"id":"gas-20","qty":1}],"address":null,"time":null,"note":null}`;

async function parseWithAI(text: string, apiKey: string): Promise<GasOrder | null> {
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
        max_tokens: 300,
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
    const p = JSON.parse(content) as {
      items?: { id: string; qty: number }[];
      address?: string | null;
      time?: string | null;
      note?: string | null;
    };
    return finalizeGas(
      Array.isArray(p.items) ? p.items : [],
      typeof p.address === "string" ? p.address : null,
      typeof p.time === "string" ? p.time.slice(0, 20) : null,
      typeof p.note === "string" ? p.note.slice(0, 60) : null,
    );
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
  if (!text) return NextResponse.json({ error: "請先說要叫什麼瓦斯" }, { status: 400 });

  const leak = /聞到|漏氣|瓦斯味|怪味/.test(text);
  const apiKey = process.env.OPENAI_API_KEY;
  if (apiKey) {
    const ai = await parseWithAI(text, apiKey);
    if (ai) return NextResponse.json({ order: ai, engine: "ai", leak });
  }
  return NextResponse.json({ order: parseGasWithRules(text), engine: "rules", leak });
}
