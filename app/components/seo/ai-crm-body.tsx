"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/language-context";
import { getProjectById } from "@/app/data/projects";
import {
  axoraOffers,
  axoraOffersEn,
  caseStudyCards,
  caseStudyCardsEn,
  faqs,
  faqsEn,
  industries,
  industriesEn,
  processSteps,
  processStepsEn,
  whyAiCrm,
  whyAiCrmEn,
} from "@/app/data/ai-crm-content";
import { SectionHeader } from "../ui/section-header";
import { Reveal } from "../ui/reveal";
import { ContactCtaSection } from "./contact-cta-section";

export function AiCrmBody() {
  const { locale } = useLanguage();
  const en = locale === "en";
  const T = (zh: string, e: string) => (en ? e : zh);
  const steps: readonly string[] = en ? processStepsEn : processSteps;

  return (
      <div className="pt-20">
        {/* Hero */}
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                AI CRM
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">{T("AI CRM 系統開發", "AI CRM Development")}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                {T(
                  "打造結合 AI、自動化與客戶管理的智慧 CRM 平台，提升成交率與營運效率。",
                  "A smart CRM that combines AI, automation and customer management — to win more deals and run more efficiently.",
                )}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
                >
                  {T("立即預約諮詢", "Book a consultation")}
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex rounded-lg border border-border px-7 py-3 text-label font-mono uppercase tracking-[0.15em] text-muted-light transition hover:border-border-hover hover:text-foreground"
                >
                  {T("查看成功案例", "See our work")}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why AI CRM */}
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Why AI CRM"
              title={T("為什麼企業需要 AI CRM", "Why businesses need an AI CRM")}
              description={T(
                "把回覆、分析、名單、管道、儀表板與自動化放進同一套系統，減少漏單與跨工具切換。",
                "Replies, insights, leads, pipeline, dashboards and automation in one system — fewer lost deals and less switching between tools.",
              )}
              align="center"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {(en ? whyAiCrmEn : whyAiCrm).map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <li className="glass-card h-full rounded-xl px-6 py-5">
                    <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                      {item.title}
                    </p>
                    <p className="mt-3 text-body text-muted-light">{item.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Industries */}
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Industries"
              title={T("適合哪些企業", "Who it’s for")}
              description={T(
                "只要客戶溝通頻繁、跟進節奏關鍵，就適合導入 AI CRM。",
                "Any business with frequent customer conversations where follow-up timing matters.",
              )}
              align="center"
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {(en ? industriesEn : industries).map((industry, index) => (
                <Reveal key={industry} delay={index * 0.03}>
                  <span className="glass-card rounded-full px-5 py-2.5 text-label font-mono uppercase tracking-wider text-muted-light">
                    {industry}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AXORA can provide */}
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Capabilities"
              title={T("AXORA 可以提供", "What AXORA delivers")}
              description={T(
                "從 CRM 客製到 AI、LINE、Dashboard 與系統串接，依階段交付。",
                "From a custom CRM to AI, messaging, dashboards and integrations — delivered in phases.",
              )}
              align="center"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(en ? axoraOffersEn : axoraOffers).map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <li className="glass-card h-full rounded-xl px-6 py-5">
                    <p className="text-xl font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-3 text-body text-muted-light">{item.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Process"
              title={T("開發流程", "Our process")}
              description={T(
                "從訪談到維護，每個階段都有明確交付，降低專案風險。",
                "From discovery to maintenance, every stage has clear deliverables to reduce project risk.",
              )}
              align="center"
            />
            <ol className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3">
              {steps.map((step, index) => (
                <li key={step} className="flex w-full flex-col items-center gap-3">
                  <Reveal delay={index * 0.03} className="w-full">
                    <span className="glass-card flex w-full justify-center rounded-xl px-5 py-3 text-label font-mono uppercase tracking-wider text-foreground">
                      {step}
                    </span>
                  </Reveal>
                  {index < steps.length - 1 ? (
                    <span className="text-accent-blue" aria-hidden>
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <SectionHeader
              label="FAQ"
              title={T("常見問題", "Frequently asked questions")}
              description={T("以下是企業在評估 AI CRM 時最常問的問題。", "The questions businesses ask most when evaluating an AI CRM.")}
              align="center"
            />
            <div className="mt-10 space-y-4">
              {(en ? faqsEn : faqs).map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.02}>
                  <details className="glass-card rounded-xl px-6 py-5">
                    <summary className="cursor-pointer list-none text-body font-medium text-foreground">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-body text-muted-light">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Case Studies"
              title={T("成功案例", "Case studies")}
              description={T("先看 AXORA 已交付與進行中的相關專案。", "Related projects AXORA has delivered or is building.")}
              align="center"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {(en ? caseStudyCardsEn : caseStudyCards).map((card, index) => {
                const project = card.projectId
                  ? getProjectById(card.projectId)
                  : null;
                const coverImage =
                  project?.coverImage ??
                  ("coverImage" in card ? card.coverImage : "/og-image.png");

                return (
                  <Reveal key={card.href} delay={index * 0.04}>
                    <Link
                      href={card.href}
                      className="gradient-border group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="gradient-border-inner flex h-full flex-col overflow-hidden rounded-[inherit]">
                        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal">
                          <Image
                            src={coverImage}
                            alt={`${card.title} — AXORA`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                            {card.label}
                          </p>
                          <h3 className="mt-3 text-xl font-medium text-foreground">
                            {card.title}
                          </h3>
                          <p className="mt-3 flex-1 text-body text-muted-light">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <ContactCtaSection
          title={T("開始您的 AI CRM 專案", "Start your AI CRM project")}
          description={T(
            "告訴我們產業、現有工具與最想解決的漏單問題，AXORA 協助規劃可行方案。",
            "Tell us your industry, current tools and where deals slip through — AXORA will help plan a practical solution.",
          )}
        />
      </div>
  );
}
