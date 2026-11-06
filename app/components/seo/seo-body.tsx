"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/app/context/language-context";
import { SectionHeader } from "../ui/section-header";
import { Reveal } from "../ui/reveal";
import { LineAddButton } from "../line/line-add-button";
import { WhatsAppButton } from "../contact/whatsapp-button";
import { SEO_FAQS } from "@/app/data/seo-faqs";

const COPY = {
  zh: {
    eyebrow: "網站 SEO 基礎設定",
    title: ["讓客人在 Google", "找得到你的網站"],
    intro:
      "網站做得再漂亮，Google 找不到也沒用。我們做的每個網站，都會把 Google 需要的基礎設定一次做好，不另外收費。",
    bullets: ["每個網站都包含，不另外收費", "幫你提交 Google 收錄，不用自己研究", "講白話，不賣你看不懂的排名方案"],
    searchQuery: "台北 美甲 預約",
    resultTitle: "小美美甲｜台北東區・線上預約",
    resultDesc: "東區美甲工作室，凝膠、手繪、卸甲。線上選時段預約，前一天自動提醒…",
    resultNote: "示意畫面",
    includedLabel: "包含什麼",
    includedTitle: "每個網站都幫你做好這 6 件事",
    included: [
      { icon: "🧭", title: "Google 看得懂的頁面結構", desc: "每一頁都有清楚的標題、說明和層次，Google 才知道你在做什麼生意。" },
      { icon: "🗺️", title: "網站地圖 + 提交收錄", desc: "上線後幫你把網站地圖交給 Google，並送出重要頁面的收錄申請。" },
      { icon: "📱", title: "手機版又快又好用", desc: "大部分客人用手機搜尋。網站在手機上載入快、好操作，Google 也會比較喜歡。" },
      { icon: "🔗", title: "分享時有漂亮的預覽", desc: "把網站貼到 LINE、Facebook、Threads 時，會出現標題和圖片，不是一串網址。" },
      { icon: "📍", title: "Google 商家檔案協助", desc: "教你建立和驗證 Google 商家檔案，讓客人在 Google 地圖上也找得到你。" },
      { icon: "🌏", title: "需要的話做中英雙語", desc: "有外國客人的話，做成中英兩種網址，外國人用英文搜尋也找得到你。" },
    ],
    flowLabel: "Google 怎麼找到你",
    flowTitle: "從網站上線到被搜尋到",
    flow: [
      ["網站上線", "網站做好、放上網路。"],
      ["Google 來看", "我們提交網站地圖，Google 派機器人來讀你的網站。"],
      ["收錄進資料庫", "Google 判斷內容有價值，就會收進搜尋資料庫。"],
      ["客人搜尋到你", "客人搜尋相關的字，你的網站就有機會出現。"],
    ],
    honestLabel: "說清楚",
    honestTitle: "我們不做的事",
    honest: [
      "不保證「排到第一頁」——沒有人能誠實保證",
      "不買假連結、不用作弊手法，避免網站被 Google 懲罰",
      "不賣你看不懂的月費排名方案",
    ],
    honestNote: "我們把基礎做好、把話講清楚，讓你的網站長期穩定地被找到。",
    faqLabel: "常見問題",
    faqTitle: "關於 SEO 的常見問題",
    ctaTitle: "想讓客人找得到你？",
    ctaBody: "告訴我們你是做什麼生意、客人通常怎麼找你，我們免費幫你看看網站可以怎麼做。",
    seeWebDesign: "看網站設計服務 →",
  },
  en: {
    eyebrow: "Website SEO setup",
    title: ["Help customers find", "your website on Google"],
    intro:
      "A beautiful website is useless if Google can’t find it. Every website we build comes with the SEO foundations Google needs — included at no extra cost.",
    bullets: [
      "Included with every website, no extra fee",
      "We submit your site to Google for you",
      "Plain language — no confusing ranking packages",
    ],
    searchQuery: "nail salon taipei booking",
    resultTitle: "Mei Nails | Taipei East District · Book Online",
    resultDesc: "Nail studio in Taipei’s East District — gel, hand-painted art, removal. Pick a time online and get a reminder the day before…",
    resultNote: "Illustration",
    includedLabel: "What’s included",
    includedTitle: "Six things every website gets",
    included: [
      { icon: "🧭", title: "Page structure Google understands", desc: "Clear titles, descriptions and headings on every page, so Google knows what your business does." },
      { icon: "🗺️", title: "Sitemap + indexing requests", desc: "After launch we submit your sitemap to Google and request indexing for your key pages." },
      { icon: "📱", title: "Fast, easy mobile experience", desc: "Most customers search on their phone. A fast, easy mobile site is better for them — and for Google." },
      { icon: "🔗", title: "Beautiful link previews", desc: "When your site is shared on WhatsApp, Facebook or LINE, it shows a title and image instead of a bare link." },
      { icon: "📍", title: "Google Business Profile help", desc: "We help you set up and verify your Google Business Profile so customers find you on Google Maps too." },
      { icon: "🌏", title: "Bilingual sites when you need them", desc: "Have international customers? We build separate Chinese and English URLs so you can be found in both languages." },
    ],
    flowLabel: "How Google finds you",
    flowTitle: "From launch to being found",
    flow: [
      ["Site goes live", "Your website is built and published."],
      ["Google visits", "We submit your sitemap and Google’s crawler reads your site."],
      ["Added to the index", "If Google finds the content useful, it adds your pages to its search index."],
      ["Customers find you", "When people search for related terms, your site can appear."],
    ],
    honestLabel: "To be clear",
    honestTitle: "What we don’t do",
    honest: [
      "We don’t promise “first page on Google” — nobody honestly can",
      "No bought links or tricks that could get your site penalised",
      "No confusing monthly ranking packages",
    ],
    honestNote: "We get the foundations right and explain everything clearly, so your site can be found steadily over the long term.",
    faqLabel: "FAQ",
    faqTitle: "SEO questions we hear often",
    ctaTitle: "Want customers to find you?",
    ctaBody: "Tell us what your business does and how customers usually look for you. We’ll suggest what your website needs, free of charge.",
    seeWebDesign: "See website design →",
  },
};

function SearchMock({ c }: { c: (typeof COPY)["zh"] }) {
  const reduce = useReducedMotion();
  return (
    <div className="mx-auto w-full max-w-[460px]" style={{ perspective: 1200 }}>
      <motion.div
        initial={false}
        animate={reduce ? undefined : { rotateX: [6, 3, 6], rotateY: [-10, -6, -10], y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-3xl border border-border bg-surface p-5 shadow-[0_40px_80px_-30px_rgba(28,26,23,0.45)]"
      >
        <div className="flex items-center gap-3 rounded-full border border-border px-4 py-2.5 shadow-sm">
          <span className="text-sm font-bold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <span className="truncate text-sm text-foreground">{c.searchQuery}</span>
          <span className="ml-auto text-muted">🔍</span>
        </div>
        <div className="mt-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border-2 border-[#06C755]/60 bg-[#06C755]/[0.05] p-4"
          >
            <p className="text-[11px] text-muted">www.your-shop.tw</p>
            <p className="mt-1 text-[15px] font-semibold text-[#1a0dab]">{c.resultTitle}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-muted-light">{c.resultDesc}</p>
          </motion.div>
          {[0, 1].map((i) => (
            <div key={i} className="space-y-2 px-1 opacity-60">
              <div className="h-2.5 w-28 rounded bg-border" />
              <div className="h-3.5 w-3/4 rounded bg-border" />
              <div className="h-2.5 w-full rounded bg-border/70" />
            </div>
          ))}
        </div>
      </motion.div>
      <p className="mt-3 text-center text-xs text-muted">{c.resultNote}</p>
    </div>
  );
}

export function SeoBody() {
  const { locale } = useLanguage();
  const en = locale === "en";
  const c = en ? COPY.en : COPY.zh;
  const faqs = en ? SEO_FAQS.en : SEO_FAQS.zh;

  return (
    <>
      {/* Hero */}
      <section className="section-glow mesh-accent relative overflow-hidden border-b border-border py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-12">
          <Reveal>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">{c.eyebrow}</p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">
                {c.title[0]}
                <br />
                {c.title[1]}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-body leading-relaxed text-muted-light">{c.intro}</p>
            <ul className="mt-6 space-y-2.5 text-body-sm text-foreground">
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-[#06C755]">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <LineAddButton variant="primary" className="px-7 py-3" />
              <WhatsAppButton className="px-7 py-3" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SearchMock c={c} />
          </Reveal>
        </div>
      </section>

      {/* Included */}
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader label={c.includedLabel} title={c.includedTitle} align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.included.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <span className="text-2xl" aria-hidden>
                    {f.icon}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-muted-light">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader label={c.flowLabel} title={c.flowTitle} align="center" />
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {c.flow.map(([t, d], i) => (
              <li key={t} className="glass-card relative rounded-2xl p-6">
                <span className="font-serif text-4xl text-accent-blue">{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-light">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Honest */}
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[800px] px-6 lg:px-12">
          <SectionHeader label={c.honestLabel} title={c.honestTitle} align="center" />
          <ul className="mt-10 space-y-3">
            {c.honest.map((h) => (
              <li key={h} className="glass-card flex gap-3 rounded-xl px-6 py-4 text-body text-foreground">
                <span className="text-[#c2410c]">✕</span>
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-body text-muted-light">{c.honestNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12">
          <SectionHeader label={c.faqLabel} title={c.faqTitle} align="center" />
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="glass-card group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body font-medium text-foreground">
                  <h3 className="text-body font-medium">{f.question}</h3>
                  <span className="text-accent-blue transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-light">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="glass-card px-8 py-14 text-center lg:px-16">
            <h2 className="section-title">{c.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">{c.ctaBody}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LineAddButton variant="primary" className="px-8 py-3.5" />
              <WhatsAppButton className="px-8 py-3.5" />
            </div>
            <Link href="/services/web-design" className="mt-6 inline-block text-body-sm text-accent-blue underline-offset-4 hover:underline">
              {c.seeWebDesign}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
