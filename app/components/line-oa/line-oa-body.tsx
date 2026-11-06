"use client";

import { useLanguage } from "@/app/context/language-context";
import { SectionHeader } from "../ui/section-header";
import { Reveal } from "../ui/reveal";
import { LineAddButton } from "../line/line-add-button";
import { AiOrderDemo } from "../demo/ai-order-demo";
import { LineChatHero } from "./line-chat-hero";
import { IndustryExamples } from "./industry-examples";
import { MessageToOrder3D } from "./message-to-order-3d";

const COPY = {
  zh: {
    eyebrow: "LINE 自動回覆・AI 客服",
    title: ["客人傳 LINE，", "AI 24 小時幫你回"],
    intro:
      "在你原本的 LINE 官方帳號加上 AI：自動回答問題、自動接單接預約、客人資料自動整理。你休息的時候，生意照樣有人顧。",
    bullets: ["半夜、假日的訊息也不漏接", "不用換帳號，客人不用重新加好友", "先聊不用錢，依你的需求免費報價"],
    tryDemo: "親手試試 AI 接單 →",
    demoNote: "示範畫面",
    painsLabel: "你是不是也這樣？",
    painsTitle: "這些麻煩，交給 AI 處理",
    pains: [
      { pain: "半夜、假日客人傳訊息，沒人回", fix: "AI 24 小時自動回覆，客人不用等到隔天。" },
      { pain: "「營業時間？」「怎麼停車？」同樣的問題回一百次", fix: "常見問題 AI 自動回答，你只處理真正需要你的訊息。" },
      { pain: "訂單、預約散在聊天室，要一筆一筆抄", fix: "客人說要什麼，AI 自動整理成訂單／預約清單。" },
      { pain: "回太慢，客人就跑去問別家", fix: "第一時間有回應，客人比較願意留下來下單。" },
    ],
    flowLabel: "背後怎麼運作",
    flowTitle: "一則 LINE 訊息，怎麼變成一筆訂單",
    industryLabel: "各行各業都能用",
    industryTitle: "看看 AI 會怎麼幫你回",
    industryHint: "點選你的行業，看示範對話",
    compareLabel: "差在哪裡",
    compareTitle: "LINE 內建自動回覆 vs AXORA AI 回覆",
    compareCols: ["LINE 內建關鍵字回覆", "AXORA AI 自動回覆"],
    compareRows: [
      ["客人要怎麼問", "要打到剛好的關鍵字才會回", "怎麼問都看得懂"],
      ["能回答的內容", "只能回事先寫好的固定句子", "依你的店家資料，回答各種問題"],
      ["接單／預約", "做不到，還是要人工處理", "自動整理成訂單、排進預約表"],
      ["客人資料", "不會記錄", "自動建檔，方便之後追蹤"],
      ["遇到不會的問題", "回答錯或不回應", "轉給真人，不會亂回"],
    ],
    featuresLabel: "功能",
    featuresTitle: "你會得到什麼",
    features: [
      { title: "AI 看得懂客人在說什麼", desc: "不用客人照關鍵字打字。「今天有開嗎」「幾點關」「現在能去嗎」都能理解並正確回答。" },
      { title: "自動接單、接預約", desc: "客人用聊天的方式下單或預約，AI 幫你整理成清楚的訂單，直接進後台。" },
      { title: "歡迎訊息與圖文選單", desc: "客人一加好友就看到選單：看菜單、預約、問問題，一鍵就能點。" },
      { title: "客人資料自動建檔", desc: "誰問過什麼、買過什麼都會記下來，之後回訪或推播優惠更精準。" },
      { title: "AI 不確定就轉給你", desc: "遇到複雜或敏感的問題，AI 會先告訴客人稍等，並通知你親自回覆。" },
      { title: "用你原本的官方帳號", desc: "不用換帳號、不用重加好友。我們直接幫你現有的 LINE 官方帳號加上 AI。" },
    ],
    stepsLabel: "怎麼開始",
    stepsTitle: "四個步驟就能上線",
    steps: [
      ["聊聊你的生意", "用 LINE 告訴我們你是做什麼的、客人最常問什麼。先聊不用錢。"],
      ["我們幫你設定", "整理你的菜單、價格、營業時間等資料，教 AI 用你的口氣回答。"],
      ["你先試用看看", "上線前先讓你自己傳訊息測試，不滿意的地方我們再調整。"],
      ["正式上線", "接到你的官方帳號就能用，之後要改內容直接用 LINE 跟我們說。"],
    ],
    audienceLabel: "適合對象",
    audienceTitle: "用 LINE 跟客人溝通的店家都適合",
    audiences: ["餐廳・小吃・飲料店", "美髮・美甲・美容", "診所・牙醫", "補習班・才藝教室", "房仲・保險・顧問", "網拍・團購"],
  },
  en: {
    eyebrow: "LINE auto-reply · AI customer service",
    title: ["Customers message on LINE,", "AI replies 24/7"],
    intro:
      "Add AI to your existing LINE Official Account: it answers questions, takes orders and bookings, and keeps customer records organised. Your business keeps running while you rest.",
    bullets: [
      "Never miss a message at night or on weekends",
      "Keep your account — customers don’t need to re-add you",
      "Free consultation and a clear quote for your needs",
    ],
    tryDemo: "Try AI ordering →",
    demoNote: "Demo",
    painsLabel: "Sound familiar?",
    painsTitle: "Let AI handle these headaches",
    pains: [
      { pain: "Customers message at night or on weekends and nobody replies", fix: "AI replies 24/7, so customers never wait until tomorrow." },
      { pain: "“What are your hours?” “Where can I park?” — the same questions a hundred times", fix: "AI answers the common questions; you only handle the messages that need you." },
      { pain: "Orders and bookings are scattered across chats and copied by hand", fix: "Customers say what they want and AI turns it into an order or booking list." },
      { pain: "Reply too slowly and customers ask someone else", fix: "An instant reply keeps customers with you." },
    ],
    flowLabel: "How it works",
    flowTitle: "How one LINE message becomes an order",
    industryLabel: "Works for any business",
    industryTitle: "See how AI would reply for you",
    industryHint: "Pick your industry to see a sample conversation",
    compareLabel: "The difference",
    compareTitle: "LINE’s built-in auto-reply vs AXORA AI",
    compareCols: ["LINE built-in keyword replies", "AXORA AI auto-reply"],
    compareRows: [
      ["How customers ask", "Only replies to exact keywords", "Understands however they ask"],
      ["What it can answer", "Only fixed, pre-written sentences", "Any question, based on your business info"],
      ["Orders / bookings", "Not possible — still manual", "Organised into orders and booking slots"],
      ["Customer records", "Not recorded", "Saved automatically for follow-up"],
      ["Questions it can’t answer", "Wrong answer or no reply", "Hands over to a person — never guesses"],
    ],
    featuresLabel: "Features",
    featuresTitle: "What you get",
    features: [
      { title: "AI that understands customers", desc: "No keywords needed. “Are you open today?”, “What time do you close?”, “Can I come now?” — all understood and answered correctly." },
      { title: "Automatic orders and bookings", desc: "Customers order or book by chatting; AI turns it into a clear order in your back office." },
      { title: "Welcome message & rich menu", desc: "As soon as customers add you they see a menu: view the menu, book, ask a question — one tap each." },
      { title: "Customer records built automatically", desc: "Who asked what and who bought what is saved, so follow-ups and offers are more targeted." },
      { title: "Hands over when unsure", desc: "For complex or sensitive questions, AI asks the customer to wait and notifies you to reply." },
      { title: "Keep your existing account", desc: "No new account, no re-adding friends. We add AI to the LINE Official Account you already have." },
    ],
    stepsLabel: "Getting started",
    stepsTitle: "Live in four steps",
    steps: [
      ["Tell us about your business", "Let us know what you do and what customers ask most. The first chat is free."],
      ["We set it up", "We organise your menu, prices and opening hours and teach the AI to reply in your tone."],
      ["Test it yourself", "Before launch you send test messages; anything you don’t like, we adjust."],
      ["Go live", "It connects to your Official Account. Want changes later? Just message us."],
    ],
    audienceLabel: "Who it’s for",
    audienceTitle: "Any business that talks to customers on LINE",
    audiences: ["Restaurants & drink shops", "Hair, nails & beauty", "Clinics & dentists", "Tutoring & classes", "Real estate & consultants", "Online sellers & group buys"],
  },
};

export function LineOaBody() {
  const { locale } = useLanguage();
  const c = locale === "en" ? COPY.en : COPY.zh;

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
              <a
                href="#try-ai-order"
                className="btn-glass rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
              >
                {c.tryDemo}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <LineChatHero />
            <p className="mt-3 text-center text-xs text-muted">{c.demoNote}</p>
          </Reveal>
        </div>
      </section>

      {/* Pains → fixes */}
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader label={c.painsLabel} title={c.painsTitle} align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {c.pains.map((item, i) => (
              <Reveal key={item.pain} delay={i * 0.05}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <p className="text-body text-muted-light">
                    <span className="mr-2 text-[#c2410c]">✕</span>
                    {item.pain}
                  </p>
                  <p className="mt-3 border-t border-border pt-3 text-body font-medium text-foreground">
                    <span className="mr-2 text-[#06C755]">✓</span>
                    {item.fix}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3D: message → order */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <SectionHeader label={c.flowLabel} title={c.flowTitle} align="center" />
          <div className="mt-10">
            <MessageToOrder3D />
          </div>
        </div>
      </section>

      {/* Industry examples */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader label={c.industryLabel} title={c.industryTitle} align="center" />
          <p className="mx-auto mt-4 max-w-xl text-center text-body-sm text-muted">{c.industryHint}</p>
          <div className="mt-10">
            <IndustryExamples />
          </div>
        </div>
      </section>

      {/* Live demo */}
      <AiOrderDemo />

      {/* Comparison */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <SectionHeader label={c.compareLabel} title={c.compareTitle} align="center" />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-body-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-medium text-muted"></th>
                  <th className="py-3 pr-4 font-semibold text-muted-light">{c.compareCols[0]}</th>
                  <th className="py-3 font-semibold text-foreground">{c.compareCols[1]}</th>
                </tr>
              </thead>
              <tbody>
                {c.compareRows.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-border">
                    <td className="py-4 pr-4 font-medium text-foreground">{k}</td>
                    <td className="py-4 pr-4 text-muted">{a}</td>
                    <td className="py-4 font-medium text-[#1f4d3a]">✓ {b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader label={c.featuresLabel} title={c.featuresTitle} align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <span className="font-serif text-sm tracking-[0.2em] text-accent-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-body-sm leading-relaxed text-muted-light">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader label={c.stepsLabel} title={c.stepsTitle} align="center" />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {c.steps.map(([t, d], i) => (
              <li key={t} className="glass-card rounded-2xl p-6">
                <span className="font-serif text-4xl text-accent-blue">{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-body-sm leading-relaxed text-muted-light">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Audiences */}
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader label={c.audienceLabel} title={c.audienceTitle} align="center" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {c.audiences.map((audience, index) => (
              <Reveal key={audience} delay={index * 0.04}>
                <span className="glass-card rounded-full px-5 py-2.5 text-body-sm text-muted-light">{audience}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
