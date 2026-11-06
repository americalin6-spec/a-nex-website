/** WhatsApp contact for international (English-speaking) clients. */

export const WHATSAPP_NUMBER = "886976612412"; // +886 976 612 412, digits only for wa.me
export const WHATSAPP_DISPLAY = "+886 976 612 412";
export const WHATSAPP_GREETING = "Hi AXORA, I'd like a quote for a project.";

export function getWhatsAppUrl(text: string = WHATSAPP_GREETING): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
