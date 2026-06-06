import { generateLineReply } from "../ai/line-reply";
import { getLead, upsertLeadMessage } from "../leads/store";
import { pushToLine, replyToLine } from "./client";
import type { LineWebhookEvent } from "./types";

const WELCOME_ZH =
  "歡迎加入 A-NEX 官方帳號 👋\n\n我們提供 AI、SaaS、CRM 與商業自動化服務。\n請直接傳送您的需求，AI 將即時回覆並記錄至 CRM。";

export async function handleLineEvent(event: LineWebhookEvent): Promise<void> {
  const userId = event.source.userId;
  if (!userId) return;

  if (event.type === "follow") {
    await upsertLeadMessage({
      userId,
      role: "assistant",
      text: "[System] User followed Official Account",
      status: "new",
    });

    if (event.replyToken) {
      await replyToLine(event.replyToken, [
        { type: "text", text: WELCOME_ZH },
      ]);
    } else {
      await pushToLine(userId, [{ type: "text", text: WELCOME_ZH }]);
    }
    return;
  }

  if (event.type !== "message" || event.message?.type !== "text") {
    return;
  }

  const userText = event.message.text?.trim();
  if (!userText || !event.replyToken) return;

  const existing = await getLead(userId);
  const history =
    existing?.messages.map((m) => ({
      role: m.role,
      text: m.text,
    })) ?? [];

  await upsertLeadMessage({
    userId,
    role: "user",
    text: userText,
    status: existing?.status === "qualified" ? "qualified" : "engaged",
  });

  const { reply, isNewLead, summary } = await generateLineReply(
    userText,
    history,
  );

  await replyToLine(event.replyToken, [{ type: "text", text: reply }]);

  await upsertLeadMessage({
    userId,
    role: "assistant",
    text: reply,
    status: isNewLead ? "new" : existing?.status ?? "engaged",
    summary,
  });
}
