"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../context/language-context";
import { SectionHeader } from "../ui/section-header";
import {
  HeroPortfolioShowcase,
  HeroShowcaseBackground,
} from "./hero-portfolio-showcase";
import { Reveal } from "../ui/reveal";
import { LineAddButton } from "../line/line-add-button";
import { LineQrSection } from "../line/line-qr-section";

// TEMP: disable whileInView scroll animations for iPhone Safari crash test
const DISABLE_HOME_SCROLL_ANIM = true;

const content = {
  zh: {
    hero: {
      label: "網站 · App · 訂單系統 · 預約系統",
      headline: "複雜的事，交給我們",
      subtitle:
        "你只要用 LINE 說出想要什麼，我們幫你做成網站、App 或系統。不懂電腦也沒關係，我們講白話，不講術語。",
      bullets: [
        "客人自己線上下單、預約，不用再一筆一筆對 LINE",
        "訂單、客人資料、營業額，打開手機就看得到",
        "先聊不用錢，依你的需求免費報價",
      ],
      secondary: "看看我們能做什麼",
    },
    pains: {
      label: "老闆常見的麻煩",
      title: "這些事，你是不是也每天在處理？",
      items: [
        {
          pain: "每天晚上對 LINE 訂單、對帳到半夜",
          fix: "線上訂單系統：客人自己下單付款，訂單自動整理好",
        },
        {
          pain: "客人打電話預約，常常記錯時間或撞期",
          fix: "預約系統：客人自己選時段，自動提醒，不會再撞期",
        },
        {
          pain: "沒有網站，客人搜尋不到你，看起來不夠專業",
          fix: "官方網站：手機、電腦都好看，Google 搜得到",
        },
        {
          pain: "老客人資料散在各地，想做優惠回購找不到人",
          fix: "會員系統：客人資料集中管理，一鍵發優惠通知",
        },
      ],
    },
    services: {
      label: "我們可以幫你做",
      title: "從一個網站，到整套系統都可以",
      items: [
        {
          title: "官方網站",
          href: "/services/web-design",
          desc: "介紹你的店、商品和服務，讓客人一搜就找到你。",
          fit: "適合：所有想讓客人更信任你的店家",
        },
        {
          title: "線上訂單系統",
          href: "/services/ordering-system",
          desc: "客人自己點餐、下單、付款，訂單自動整理成清單。",
          fit: "適合：餐飲、團購、送貨、批發",
        },
        {
          title: "預約系統",
          href: "/services/booking-system",
          desc: "客人自己選時間，自動通知你和客人，不再漏約。",
          fit: "適合：美髮、美甲、教室、診所、工作室",
        },
        {
          title: "會員與集點系統",
          href: "/contact",
          desc: "記住每位客人買過什麼，集點、優惠券讓客人一直回來。",
          fit: "適合：想做回頭客生意的店家",
        },
        {
          title: "LINE 自動回覆",
          href: "/services/line-oa",
          desc: "客人常問的問題自動回答，下班時間也不會漏掉客人。",
          fit: "適合：每天被 LINE 訊息淹沒的老闆",
        },
        {
          title: "手機 App",
          href: "/services/app-development",
          desc: "把你的服務做成 App，讓客人隨時打開就能用。",
          fit: "適合：有固定客群、想做品牌的店家",
        },
      ],
    },
    steps: {
      label: "合作流程",
      title: "三個步驟，簡單上線",
      items: [
        { title: "說需求", desc: "用 LINE 告訴我們你的生意和最麻煩的事，不用寫規格書。" },
        { title: "看樣品", desc: "我們先做出樣品給你看，滿意再繼續，不滿意就調整。" },
        { title: "正式上線", desc: "上線後教你怎麼用，有問題直接 LINE 找我們。" },
      ],
    },
    why: {
      label: "為什麼找我們",
      title: "我們最在意的是：你用得順",
      items: [
        { title: "用 LINE 溝通", desc: "不用開會、不用視訊，傳訊息就能把事情講清楚。" },
        { title: "講白話", desc: "不講技術名詞，我們用你聽得懂的話說明每一步。" },
        { title: "先看再決定", desc: "做之前先講清楚費用和時程，看過樣品再往下走。" },
        { title: "上線後有人顧", desc: "主機、網址、維護和小修改，我們幫你處理。" },
      ],
    },
    faq: {
      label: "常見問題",
      title: "老闆最常問的問題",
      items: [
        {
          q: "我完全不懂電腦，也可以做嗎？",
          a: "可以。你只要告訴我們你的生意怎麼運作、哪裡最麻煩，其他交給我們。做好之後也會一步一步教你怎麼用。",
        },
        {
          q: "做一個網站或系統要多少錢？",
          a: "要看你需要的功能，所以我們會先免費了解你的需求，再給你清楚的報價。先聊不用錢，報價滿意再開始。",
        },
        {
          q: "多久可以做好？",
          a: "簡單的網站比較快，功能多的系統需要比較久。報價時會一起告訴你預計完成的時間。",
        },
        {
          q: "做好之後壞掉或想改怎麼辦？",
          a: "直接用 LINE 找我們。主機、網址和日常維護我們都可以幫你處理，你不用自己煩惱。",
        },
      ],
    },
    business: {
      title: "公司或企業客戶？",
      body: "我們也做客戶管理（CRM）、AI 客服、SaaS 平台與內部營運系統。",
      link: "查看企業服務",
    },
    cta: {
      title: "先聊聊，不用錢",
      body: "告訴我們你是做什麼生意、現在最麻煩的是哪件事，我們會免費幫你評估可以怎麼做。",
    },
  },
  en: {
    hero: {
      label: "Websites · Apps · Ordering · Booking",
      headline: "We make the complicated simple",
      subtitle:
        "Just tell us what you need over LINE or email. We turn it into a website, app or system that works for your business — no tech knowledge needed.",
      bullets: [
        "Customers order and book on their own — no more manual messages",
        "See orders, customers and sales right from your phone",
        "Free consultation and a clear quote before we start",
      ],
      secondary: "See what we build",
    },
    pains: {
      label: "Sound familiar?",
      title: "Problems business owners deal with every day",
      items: [
        {
          pain: "Taking orders by hand in chat apps until midnight",
          fix: "Online ordering: customers order and pay, orders are organized for you",
        },
        {
          pain: "Phone bookings get mixed up or double-booked",
          fix: "Booking system: customers pick a time, reminders go out automatically",
        },
        {
          pain: "No website, so customers can't find or trust you",
          fix: "Business website: looks great on any device and shows up on Google",
        },
        {
          pain: "Customer info is scattered, so repeat sales are hard",
          fix: "Membership system: all customers in one place, send offers in one tap",
        },
      ],
    },
    services: {
      label: "What we build",
      title: "From a simple website to a complete system",
      items: [
        { title: "Business website",
          href: "/services/web-design", desc: "Show your shop, products and services so customers can find you.", fit: "For: any business that wants to look trustworthy" },
        { title: "Online ordering",
          href: "/services/ordering-system", desc: "Customers order and pay online; orders arrive as a clean list.", fit: "For: food, group buying, delivery, wholesale" },
        { title: "Booking system",
          href: "/services/booking-system", desc: "Customers choose a time; you both get reminders automatically.", fit: "For: salons, studios, classes, clinics" },
        { title: "Membership & points",
          href: "/contact", desc: "Remember every customer and bring them back with rewards.", fit: "For: businesses built on repeat customers" },
        { title: "LINE auto-replies",
          href: "/services/line-oa", desc: "Common questions answered automatically, even after hours.", fit: "For: owners flooded with chat messages" },
        { title: "Mobile app",
          href: "/services/app-development", desc: "Turn your service into an app customers can open anytime.", fit: "For: brands with a loyal customer base" },
      ],
    },
    steps: {
      label: "How it works",
      title: "Three simple steps",
      items: [
        { title: "Tell us", desc: "Message us about your business and what slows you down. No spec documents needed." },
        { title: "See a demo", desc: "We build a demo first. Happy? We continue. If not, we adjust." },
        { title: "Go live", desc: "We launch it, show you how to use it, and stay a message away." },
      ],
    },
    why: {
      label: "Why AXORA",
      title: "What matters most: it works for you",
      items: [
        { title: "Chat-based", desc: "No meetings or calls needed — everything by message." },
        { title: "Plain language", desc: "No jargon. We explain every step clearly." },
        { title: "See before you decide", desc: "Clear price and timeline up front, demo before we go further." },
        { title: "Ongoing care", desc: "Hosting, domain, maintenance and small changes handled for you." },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Common questions",
      items: [
        { q: "I'm not technical. Can you still help?", a: "Yes. Tell us how your business works and what's frustrating; we handle the rest and show you how to use it." },
        { q: "How much does it cost?", a: "It depends on the features you need. We'll learn about your business for free and send a clear quote before any work starts." },
        { q: "How long does it take?", a: "Simple websites are faster; larger systems take longer. We'll include an estimated timeline with your quote." },
        { q: "What if something breaks or I want changes?", a: "Just message us. We can take care of hosting, domain and ongoing maintenance." },
      ],
    },
    business: {
      title: "A larger company?",
      body: "We also build CRM systems, AI customer service, SaaS platforms and internal operations tools.",
      link: "View business services",
    },
    cta: {
      title: "Let's talk — it's free",
      body: "Tell us about your business and the task that takes up most of your time. We'll suggest how to simplify it, free of charge.",
    },
  },
};

export function HomePage() {
  const { locale } = useLanguage();
  const c = locale === "zh" ? content.zh : content.en;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden border-b border-border lg:min-h-screen">
        <HeroShowcaseBackground />

        <div className="relative mx-auto flex min-h-[90vh] max-w-[1400px] items-center px-6 py-20 lg:min-h-screen lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-center lg:max-w-xl lg:pr-4 xl:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue"
            >
              {c.hero.label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display mt-5 text-4xl sm:text-5xl lg:mt-6 lg:text-6xl"
            >
              <span className="gradient-text">{c.hero.headline}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 max-w-xl text-body leading-relaxed text-muted-light lg:mt-6"
            >
              {c.hero.subtitle}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 max-w-xl space-y-2.5 text-body-sm text-foreground lg:mt-6"
            >
              {c.hero.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#06C755]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-7 flex flex-wrap gap-3 lg:mt-8"
            >
              <LineAddButton variant="primary" className="px-7 py-3" />
              <a
                href="#services"
                className="btn-glass rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
              >
                {c.hero.secondary}
              </a>
            </motion.div>
          </div>

          <div className="mt-12 hidden items-center justify-center lg:mt-0 lg:flex">
            <HeroPortfolioShowcase />
          </div>
        </div>
      </section>

      {/* Pain points → solutions */}
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={c.pains.label}
            title={c.pains.title}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {c.pains.items.map((item, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={item.pain} delay={i * 0.04}>
                <div className="glass-card h-full rounded-xl p-6">
                  <p className="text-body font-medium text-foreground">😩 {item.pain}</p>
                  <div className="my-4 h-px w-full bg-gradient-to-r from-accent-blue/40 to-transparent" />
                  <p className="text-body-sm text-muted-light">
                    <span className="mr-1 text-[#06C755]">→</span>
                    {item.fix}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={c.services.label}
            title={c.services.title}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((item, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={item.title} delay={i * 0.04}>
                <Link href={item.href} className="glass-card group block h-full rounded-xl p-6 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/15 font-mono text-sm text-accent-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-body-sm text-muted-light">{item.desc}</p>
                  <p className="mt-4 text-caption text-muted">{item.fit}</p>
                  <p className="mt-4 text-label text-accent-blue">{locale === "zh" ? "了解更多 →" : "Learn more →"}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={c.steps.label}
            title={c.steps.title}
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {c.steps.items.map((step, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={step.title} delay={i * 0.05}>
                <div className="gradient-border h-full">
                  <div className="gradient-border-inner h-full p-8 text-center">
                    <span className="font-mono text-3xl text-accent-blue">{i + 1}</span>
                    <h3 className="mt-3 text-lg font-medium text-foreground">{step.title}</h3>
                    <p className="mt-2 text-body-sm text-muted-light">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={c.why.label}
            title={c.why.title}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.why.items.map((item, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={item.title} delay={i * 0.04}>
                <div className="glass-card flex h-full flex-col rounded-xl p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#06C755]/15 text-sm text-[#06C755]">
                    ✓
                  </span>
                  <p className="mt-4 text-body font-medium text-foreground">{item.title}</p>
                  <p className="mt-2 text-body-sm text-muted-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={c.faq.label}
            title={c.faq.title}
            align="center"
          />
          <div className="mt-10 space-y-3">
            {c.faq.items.map((item) => (
              <details key={item.q} className="glass-card group rounded-xl px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body font-medium text-foreground">
                  {item.q}
                  <span className="text-accent-blue transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-light">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-2 lg:px-12">
          <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}>
            <div className="glass-card relative flex h-full flex-col justify-center overflow-hidden rounded-2xl px-8 py-12 lg:px-12">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#06C755]/10 via-transparent to-accent-blue/10" />
              <h2 className="section-title relative">{c.cta.title}</h2>
              <p className="relative mt-4 max-w-xl text-body text-muted-light">{c.cta.body}</p>
              <div className="relative mt-8">
                <LineAddButton variant="primary" className="px-8 py-3.5" />
              </div>
            </div>
          </Reveal>
          <LineQrSection compact disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} />
        </div>
      </section>

      {/* Business clients */}
      <section className="border-t border-border py-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center lg:px-12">
          <div>
            <p className="text-body font-medium text-foreground">{c.business.title}</p>
            <p className="mt-1 text-body-sm text-muted-light">{c.business.body}</p>
          </div>
          <Link
            href="/services"
            className="link-underline text-label font-mono uppercase tracking-[0.2em] text-accent-blue"
          >
            {c.business.link} →
          </Link>
        </div>
      </section>
    </>
  );
}
