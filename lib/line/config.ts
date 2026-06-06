export function getLineChannelSecret(): string | undefined {
  return process.env.LINE_CHANNEL_SECRET;
}

export function getLineChannelAccessToken(): string | undefined {
  return process.env.LINE_CHANNEL_ACCESS_TOKEN;
}

export function getLineAddFriendUrl(): string {
  return (
    process.env.NEXT_PUBLIC_LINE_ADD_URL ||
    process.env.LINE_ADD_FRIEND_URL ||
    "https://line.me/R/ti/p/@460jxzer"
  );
}

export function getLineQrImageUrl(): string | undefined {
  return process.env.NEXT_PUBLIC_LINE_QR_IMAGE_URL;
}

export function isLineConfigured(): boolean {
  return Boolean(
    getLineChannelSecret() && getLineChannelAccessToken(),
  );
}
