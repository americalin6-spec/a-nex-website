import { createHmac, timingSafeEqual } from "crypto";

export function verifyLineSignature(
  body: string,
  signature: string | null,
  channelSecret: string,
): boolean {
  if (!signature) return false;

  const hash = createHmac("sha256", channelSecret)
    .update(body)
    .digest("base64");

  try {
    const a = Buffer.from(hash);
    const b = Buffer.from(signature);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
