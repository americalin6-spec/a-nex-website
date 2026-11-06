"use client";

import Link from "next/link";
import { usePick } from "@/app/context/language-context";

export function ContactCtaSection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const pick = usePick();
  const t = title ?? pick("開始您的專案", "Start your project");
  const d =
    description ??
    pick(
      "告訴我們您的產業與需求，AXORA 協助規劃可行方案並安排諮詢。",
      "Tell us about your business and what you need. We will suggest a practical plan and send a clear quote.",
    );
  const btn =
    "inline-flex rounded-lg border border-border px-7 py-3 text-label font-mono uppercase tracking-[0.15em] text-muted-light transition hover:border-border-hover hover:text-foreground";

  return (
    <section className="section-violet border-b border-border py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        <h2 className="section-title">{t}</h2>
        <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">{d}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="btn-primary inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
          >
            {pick("開始您的專案", "Get a free quote")}
          </Link>
          <Link href="/contact" className={btn}>
            {pick("立即預約諮詢", "Book a consultation")}
          </Link>
          <Link href="/contact" className={btn}>
            {pick("聯絡 AXORA", "Contact AXORA")}
          </Link>
        </div>
      </div>
    </section>
  );
}
