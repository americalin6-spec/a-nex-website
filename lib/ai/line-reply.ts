const SERVICE_KEYWORDS =
  /ai|saas|app|website|crm|automation|platform|software|dashboard|系統|自動化|網站|應用|平台|軟體|儀表板/i;

const PRICE_KEYWORDS =
  /price|pricing|cost|budget|quote|how much|費用|價格|報價|預算|多少錢/i;

const CONTACT_KEYWORDS =
  /@[a-z0-9._-]+|email|phone|tel|line id|聯絡|電話|信箱|mail|\d{8,}/i;

const SYSTEM_PROMPT = `You are the AI assistant for A-NEX, a B2B software development company.
A-NEX is hired to build: (1) AI automation & chat systems (2) custom SaaS platforms (3) CRM & sales systems with LINE integration (4) business dashboards (5) corporate websites & web apps (6) workflow & internal ops systems (7) digital transformation consulting.
We do NOT do: events, XR/immersive, entertainment, creative agencies, or personal LINE bots — only Official Account + Messaging API projects.
Keep replies concise (under 280 characters when possible), professional, and in the user's language (Traditional Chinese or English).
You represent the A-NEX LINE Official Account, not a personal account.`;

function fallbackReply(userText: string): string {
  const isZh = /[\u4e00-\u9fff]/.test(userText);

  if (PRICE_KEYWORDS.test(userText)) {
    return isZh
      ? "感謝詢問！請告訴我們：1) 專案類型（AI / SaaS / CRM / 網站等）2) 預算範圍 3) 期望時程，我們將提供合適方案。"
      : "Thanks for asking! Please share: 1) Project type (AI / SaaS / CRM / website, etc.) 2) Budget range 3) Timeline — we'll recommend the right approach.";
  }

  if (SERVICE_KEYWORDS.test(userText)) {
    return isZh
      ? "A-NEX 接受委託開發：AI 自動化、SaaS、CRM（含 LINE）、儀表板、網站/App、工作流程與內部系統。請告訴我您的產業與最想解決的問題？"
      : "A-NEX builds AI automation, SaaS, CRM (incl. LINE), dashboards, websites/apps, workflows, and internal systems. What industry are you in and what problem should we solve first?";
  }

  if (CONTACT_KEYWORDS.test(userText)) {
    return isZh
      ? "已收到您的聯絡資訊，我們的顧問將盡快透過 LINE 與您確認需求。"
      : "We've noted your contact details. Our team will follow up on LINE shortly.";
  }

  return isZh
    ? "您好！我是 A-NEX 企業軟體團隊的 AI 助理。我們協助開發 CRM、LINE 官方帳號 AI、SaaS 與營運系統。請簡述您的需求或產業。"
    : "Hello! I'm A-NEX's AI assistant. We build CRM, LINE Official AI, SaaS, and ops systems for businesses. What do you need help with?";
}

function buildInstruction(userText: string): string {
  if (PRICE_KEYWORDS.test(userText)) {
    return "The user asked about pricing. Ask for project type, budget range, and timeline. Do not invent specific prices.";
  }
  if (CONTACT_KEYWORDS.test(userText)) {
    return "The user shared contact info. Acknowledge it, summarize what they need if clear, and confirm a human will follow up.";
  }
  if (SERVICE_KEYWORDS.test(userText)) {
    return "Explain relevant A-NEX services (AI, SaaS, automation, CRM, apps, websites, dashboards) briefly and ask one focused follow-up.";
  }
  return "Message is unclear. Ask one simple follow-up question about their business software needs.";
}

export async function generateLineReply(
  userText: string,
  history: Array<{ role: "user" | "assistant"; text: string }> = [],
): Promise<{ reply: string; isNewLead: boolean; summary?: string }> {
  const isNewLead = CONTACT_KEYWORDS.test(userText);
  const summary = isNewLead
    ? `Lead contact signal: ${userText.slice(0, 120)}`
    : undefined;

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return { reply: fallbackReply(userText), isNewLead, summary };
  }

  const historyMessages = history.slice(-6).map((m) => ({
    role: m.role === "user" ? ("user" as const) : ("assistant" as const),
    content: m.text,
  }));

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.4,
        max_tokens: 320,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "system",
            content: buildInstruction(userText),
          },
          ...historyMessages,
          { role: "user", content: userText },
        ],
      }),
    });

    if (!res.ok) {
      console.error("[OpenAI] error", await res.text());
      return { reply: fallbackReply(userText), isNewLead, summary };
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return { reply: fallbackReply(userText), isNewLead, summary };
    }

    return { reply, isNewLead, summary };
  } catch (err) {
    console.error("[OpenAI] request failed", err);
    return { reply: fallbackReply(userText), isNewLead, summary };
  }
}
