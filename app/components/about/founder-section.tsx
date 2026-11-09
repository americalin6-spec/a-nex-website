"use client";

import Image from "next/image";
import { useLanguage } from "@/app/context/language-context";
import { WhatsAppButton } from "../contact/whatsapp-button";
import { LineAddButton } from "../line/line-add-button";

const COPY = {
  zh: {
    label: "認識我",
    title: "你好，我是 Chris",
    body: [
      "我曾在美國和歐洲工作，也做過俄羅斯、白俄羅斯的外貿。這些年看到很多老闆，每天被訂單、預約、回訊息這些重複的雜事綁住。",
      "所以我做了 AXORA：用網站、系統和 AI，把複雜的事變簡單。你不用懂技術，用 LINE 跟我說需求就好，我會用白話跟你討論，先做樣品給你看。",
    ],
    sign: "— Chris，AXORA",
  },
  en: {
    label: "Meet Chris",
    title: "Hi, I'm Chris",
    body: [
      "I've worked in the US and Europe and spent years in export trade with Russia and Belarus. Along the way I saw how much time business owners lose to repetitive work — orders, bookings and endless messages.",
      "That's why I started AXORA: websites, booking systems and AI that make complicated things simple. You don't need to be technical. Message me on WhatsApp or email, and I'll reply in plain language and show you a sample first.",
    ],
    sign: "— Chris, AXORA",
  },
};

/** Founder photo + short personal intro, bilingual. */
export function FounderSection() {
  const { locale } = useLanguage();
  const en = locale === "en";
  const c = en ? COPY.en : COPY.zh;

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-14 lg:px-12">
        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-border bg-background-secondary shadow-[0_30px_60px_-30px_rgba(28,26,23,0.45)]">
          <Image
            src="/chris.jpg"
            alt="Chris, AXORA"
            width={800}
            height={1000}
            sizes="(min-width: 768px) 320px, 80vw"
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <p className="text-label uppercase text-accent-blue">{c.label}</p>
          <h2 className="section-title mt-3">{c.title}</h2>
          {c.body.map((p) => (
            <p key={p} className="mt-5 text-body leading-relaxed text-muted-light">
              {p}
            </p>
          ))}
          <p className="mt-6 font-serif text-lg text-foreground">{c.sign}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {en ? <WhatsAppButton className="px-6 py-3" /> : <LineAddButton variant="primary" className="px-6 py-3" />}
          </div>
        </div>
      </div>
    </section>
  );
}
