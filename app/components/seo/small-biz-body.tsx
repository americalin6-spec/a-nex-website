"use client";

import { useLanguage } from "@/app/context/language-context";
import { SectionHeader } from "../ui/section-header";
import { Reveal } from "../ui/reveal";
import { LineAddButton } from "../line/line-add-button";
import { WhatsAppButton } from "../contact/whatsapp-button";
import type { SmallBizLandingData } from "./small-biz-landing";

type Copy = Omit<SmallBizLandingData, "path" | "description">;

export function SmallBizBody({
  data,
  dataEn,
  demo,
}: {
  data: Copy;
  dataEn?: Copy;
  demo?: React.ReactNode;
}) {
  const { locale } = useLanguage();
  const en = locale === "en" && !!dataEn;
  const d = en ? dataEn! : data;

  return (
      <div className="pt-20">
        {/* Hero */}
        <section className="hero-glow border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label uppercase text-accent-blue">{d.eyebrow}</p>
              <h1 className="text-display page-title mt-4">{d.headline}</h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LineAddButton variant="primary" className="px-7 py-3" />
                <WhatsAppButton variant="primary" className="px-7 py-3" />
              </div>
            </Reveal>
          </div>
        </section>

        {demo}

        {/* Pains */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label={en ? "Sound familiar?" : "你是不是也這樣？"} title={en ? "Let the system handle these headaches" : "這些麻煩，交給系統處理"} />
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {d.pains.map((pain) => (
                <li key={pain} className="glass-card px-6 py-5 text-body text-foreground">
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label={en ? "Features" : "功能"} title={en ? `What the ${d.name} can do` : `${d.name}可以做到什麼`} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {d.features.map((f, i) => (
                <div key={f.title} className="glass-card h-full p-6">
                  <span className="font-serif text-sm tracking-[0.2em] text-accent-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-foreground">{f.title}</h2>
                  <p className="mt-2 text-body-sm text-muted-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label={en ? "Who it’s for" : "適合誰"} title={en ? "Great for these businesses" : "適合這些店家"} align="center" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {d.audiences.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-surface px-5 py-2.5 text-body-sm text-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label={en ? "How it works" : "合作流程"} title={en ? "Three simple steps" : "三個步驟，簡單上線"} />
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {(en
                ? [
                    ["Tell us what you need", "Message us about your business and what slows you down. No formal spec needed."],
                    ["Review a preview", "We build a working preview first. Continue only when you are happy; otherwise we adjust."],
                    ["Go live", "We launch, show you how to use it, and stay available on chat for any questions."],
                  ]
                : [
                    ["說需求", "用 LINE 告訴我們你的生意和最麻煩的事，不用寫規格書。"],
                    ["看樣品", "我們先做出樣品給你看，滿意再繼續，不滿意就調整。"],
                    ["正式上線", "上線後教你怎麼用，有問題直接 LINE 找我們。"],
                  ]
              ).map(([t, d], i) => (
                <li key={t} className="glass-card p-6">
                  <span className="font-serif text-4xl text-accent-blue">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-body-sm text-muted-light">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <SectionHeader label={en ? "FAQ" : "常見問題"} title={en ? "Frequently asked questions" : `${d.name}常見問題`} align="center" />
            <div className="mt-10 space-y-3">
              {d.faqs.map((f) => (
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
              <h2 className="section-title">{en ? "Let’s talk — it’s free" : "先聊聊，不用錢"}</h2>
              <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">
                {en
                  ? "Tell us what your business does and what takes up most of your time. We will suggest how to simplify it, free of charge."
                  : "告訴我們你是做什麼生意、現在最麻煩的是哪件事，我們免費幫你評估可以怎麼做。"}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <LineAddButton variant="primary" className="px-8 py-3.5" />
                <WhatsAppButton variant="primary" className="px-8 py-3.5" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
