import { handleLineEvent } from "@/lib/line/handlers";
import { getLineChannelSecret } from "@/lib/line/config";
import { verifyLineSignature } from "@/lib/line/signature";
import type { LineWebhookBody } from "@/lib/line/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const channelSecret = getLineChannelSecret();
  if (!channelSecret) {
    console.error("[LINE Webhook] LINE_CHANNEL_SECRET is not set");
    return new Response("Server misconfigured", { status: 500 });
  }

  const signature = request.headers.get("x-line-signature");
  const body = await request.text();

  if (!verifyLineSignature(body, signature, channelSecret)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let payload: LineWebhookBody;
  try {
    payload = JSON.parse(body) as LineWebhookBody;
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const events = payload.events ?? [];

  // Process asynchronously; LINE requires a fast 200 response
  void Promise.all(events.map((event) => handleLineEvent(event))).catch(
    (err) => {
      console.error("[LINE Webhook] Event processing error:", err);
    },
  );

  return new Response("OK", { status: 200 });
}
