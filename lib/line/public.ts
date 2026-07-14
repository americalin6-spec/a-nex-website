/** Client-safe LINE URLs (NEXT_PUBLIC_* only) */

export const CONTACT_EMAIL = "americalin6@gmail.com";
export const LINE_OFFICIAL_ID = "@460jxzer";
export const DEFAULT_LINE_ADD_URL = "https://line.me/R/ti/p/@460jxzer";

export function getLineAddFriendUrl(): string {
  return process.env.NEXT_PUBLIC_LINE_ADD_URL || DEFAULT_LINE_ADD_URL;
}

export function getLineOfficialId(): string {
  return LINE_OFFICIAL_ID;
}

export function getContactEmail(): string {
  return CONTACT_EMAIL;
}

export function getLineQrImageUrl(): string {
  return (
    process.env.NEXT_PUBLIC_LINE_QR_IMAGE_URL || "/line-add-qr.png"
  );
}
