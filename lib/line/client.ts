import { getLineChannelAccessToken } from "./config";

type ReplyMessage = { type: "text"; text: string };

export async function replyToLine(
  replyToken: string,
  messages: ReplyMessage[],
): Promise<void> {
  const token = getLineChannelAccessToken();
  if (!token) {
    console.error("[LINE] Missing LINE_CHANNEL_ACCESS_TOKEN");
    return;
  }

  const res = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ replyToken, messages }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[LINE] Reply failed:", res.status, err);
  }
}

export async function pushToLine(
  userId: string,
  messages: ReplyMessage[],
): Promise<void> {
  const token = getLineChannelAccessToken();
  if (!token) return;

  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ to: userId, messages }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[LINE] Push failed:", res.status, err);
  }
}
