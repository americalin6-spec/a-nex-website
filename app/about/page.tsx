"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsIosSafari } from "@/lib/ios-safari";
import { useLanguage } from "../context/language-context";
import { SectionHeader } from "../components/ui/section-header";
import { Reveal } from "../components/ui/reveal";
import { LineAddButton } from "../components/line/line-add-button";

const showcase = [
  { src: "/projects/ashley-english.png", name: "Ashley English", type: "英文教學網站", typeEn: "English teaching website" },
  { src: "/projects/huaren-tong.png", name: "HuarenTong 華人通", nameEn: "HuarenTong", type: "服務平台", typeEn: "Service platform" },
  { src: "/projects/zhongzhi-studio.png", name: "Zhongzhi Studio", type: "品牌官網", typeEn: "Brand website" },
  { src: "/projects/onlymate.png", name: "OnlyMate", type: "AI 網站與 App", typeEn: "AI website & app" },
];

const promisesZh = [
  { title: "用 LINE 溝通", desc: "不用開會、不用視訊，傳訊息就能把事情講清楚。" },
  { title: "講白話", desc: "不講技術名詞，每一步都用你聽得懂的話說明。" },
  { title: "先看樣品", desc: "先做出樣品給你看，滿意再繼續，不滿意就調整。" },
  { title: "上線後有人顧", desc: "主機、網址、維護和小修改，我們幫你處理。" },
];

const promisesEn = [
  { title: "Chat-based", desc: "No meetings or calls needed — everything by message." },
  { title: "Plain language", desc: "No jargon. We explain every step clearly." },
  { title: "Demo first", desc: "See a demo before we go further. Not happy? We adjust." },
  { title: "Ongoing care", desc: "Hosting, domain, maintenance and small changes handled." },
];

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const iosSafariGpuSafe = useIsIosSafari();
  const isZh = locale === "zh";
  const promises = isZh ? promisesZh : promisesEn;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-glow border-b border-border py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-[1fr_1.05fr] lg:px-12">
          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <p className="text-label uppercase text-accent-blue">{t.about.label}</p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{t.about.headline}</span>
            </h1>
            <p className="mt-6 max-w-xl text-body text-muted-light">{t.about.intro}</p>
            <p className="mt-6 max-w-xl border-l-2 border-accent-blue pl-4 font-serif text-lg text-foreground">
              {t.about.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LineAddButton variant="primary" className="px-7 py-3" />
              <Link href="/projects" className="btn-glass px-7 py-3 text-label">
                {isZh ? "看我們的作品" : "See our work"}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} disableScrollAnimation={iosSafariGpuSafe}>
            <div className="grid grid-cols-2 gap-4">
              {showcase.map((item, i) => (
                <Link
                  key={isZh ? item.name : ("nameEn" in item && item.nameEn) || item.name}
                  href="/projects"
                  className={`glass-card group block overflow-hidden p-2 ${
                    i % 2 === 1 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-background-secondary">
                    <Image
                      src={item.src}
                      alt={isZh ? item.name : ("nameEn" in item && item.nameEn) || item.name}
                      fill
                      sizes="(min-width: 1024px) 320px, 45vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-2 pb-1 pt-3">
                    <p className="text-body-sm font-bold text-foreground">{isZh ? item.name : ("nameEn" in item && item.nameEn) || item.name}</p>
                    <p className="text-caption text-muted">{isZh ? item.type : item.typeEn}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Promises */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={isZh ? "我們的做法" : "How we work"}
            title={isZh ? "我們最在意的是：你用得順" : "What matters most: it works for you"}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <div key={p.title} className="glass-card h-full p-6">
                <span className="font-serif text-3xl text-accent-blue">{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-body-sm text-muted-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.about.whoWeServe.label}
            title={t.about.whoWeServe.label}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.about.whoWeServe.items.map((item) => (
              <div key={item} className="glass-card flex items-center gap-4 p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
                  ✓
                </span>
                <span className="text-body text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we're good at */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.about.topicsLabel}
            title={t.about.topicsLabel}
            align="center"
          />
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {t.about.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-body-sm text-foreground"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.about.timelineLabel}
            title={t.about.timelineLabel}
          />
          <ol className="mt-10 border-l border-border">
            {t.about.timeline.map((item) => (
              <li key={item.year} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent-blue bg-background" />
                <p className="font-serif text-2xl text-accent-blue">{item.year}</p>
                <p className="mt-1 text-body text-foreground">{item.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="glass-card px-8 py-14 text-center lg:px-16">
            <h2 className="section-title">{isZh ? "先聊聊，不用錢" : "Let's talk — it's free"}</h2>
            <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">
              {isZh
                ? "告訴我們你是做什麼生意、現在最麻煩的是哪件事，我們免費幫你評估可以怎麼做。"
                : "Tell us about your business and what slows you down. We'll suggest how to simplify it, free of charge."}
            </p>
            <div className="mt-8 flex justify-center">
              <LineAddButton variant="primary" className="px-8 py-3.5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
