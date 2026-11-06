"use client";

import { WHATSAPP_DISPLAY, getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "../../context/language-context";

type WhatsAppButtonProps = {
  variant?: "primary" | "outline";
  className?: string;
  label?: string;
  /** Kept for compatibility; the button now shows in every language. */
  always?: boolean;
};

/** "Chat on WhatsApp" button — for international clients, shown in both languages. */
export function WhatsAppButton({
  variant = "primary",
  className = "",
  label,
}: WhatsAppButtonProps) {
  const { locale } = useLanguage();
  const text = label ?? (locale === "en" ? "Chat on WhatsApp" : "WhatsApp");

  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-sm uppercase tracking-[0.15em] transition-all duration-300";
  const variants = {
    primary:
      "rounded-full bg-[#25D366] px-5 py-2.5 font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,211,102,0.7)] hover:brightness-105",
    outline:
      "rounded-lg border border-[#25D366]/50 bg-[#25D366]/10 px-5 py-2.5 text-[#128C4B] hover:bg-[#25D366]/20",
  };

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <ChatIcon />
      {text}
    </a>
  );
}

/** WhatsApp row for the contact page / footer contact list. */
export function ContactWhatsAppActions({ variant = "page" }: { variant?: "page" | "footer" }) {
  const { locale } = useLanguage();
  const cta = locale === "en" ? "Chat on WhatsApp" : "用 WhatsApp 聯絡";

  const btn =
    "inline-block rounded-lg bg-[#25D366] px-3 py-1.5 font-mono text-sm uppercase tracking-[0.12em] text-white transition-all duration-300 hover:brightness-110";

  if (variant === "footer") {
    return (
      <div className="space-y-2">
        <p>WhatsApp: {WHATSAPP_DISPLAY}</p>
        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={btn}>
          {cta}
        </a>
      </div>
    );
  }

  return (
    <div>
      <span className="text-label font-mono uppercase tracking-[0.15em] text-muted">WhatsApp</span>
      <p className="mt-1 text-base text-foreground">{WHATSAPP_DISPLAY}</p>
      <div className="mt-3">
        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={btn}>
          {cta}
        </a>
      </div>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  );
}
