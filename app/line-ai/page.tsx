"use client";

import { isIosSafari } from "@/lib/ios-safari";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LineAiReplyPreview,
  LineChatPreview,
  LineCrmLeadCard,
  LineWorkflowDiagram,
} from "../components/line/line-ai-demo";
import { LineIdForm } from "../components/line/line-id-form";
import { LineQrSection } from "../components/line/line-qr-section";
import { SectionHeader } from "../components/ui/section-header";
import { LineAiDashboardPreview } from "../components/visuals/product-visual-library";
import { useLanguage } from "../context/language-context";
import { Reveal } from "../components/ui/reveal";

export default function LineAiPage() {
  const { t, locale } = useLanguage();
  const [iosSafariGpuSafe, setIosSafariGpuSafe] = useState(false);

  useEffect(() => {
    setIosSafariGpuSafe(isIosSafari());
  }, []);

  const isZh = locale === "zh";
  const hero = isZh
    ? {
        label: "智能分析與成交管理平台",
        title: "智能分析與成交管理平台",
        subtitle:
          "整合客戶資料、對話紀錄、成交追蹤與自動化管理。\n協助企業提升成交效率，降低漏單風險。",
        primaryCta: "立即免費試用",
        secondaryCta: "預約產品展示",
      }
    : {
        label: "Smart Analytics & Deal Management Platform",
        title: "Smart Analytics & Deal Management Platform",
        subtitle:
          "Unify customer data, conversation history, deal tracking, and automation.\nHelp teams close faster and reduce missed opportunities.",
        primaryCta: "Start free trial",
        secondaryCta: "Book a product demo",
      };

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-[#9ef0b5]">
              {hero.label}
            </p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{hero.title}</span>
            </h1>
            <p className="mt-6 max-w-3xl whitespace-pre-line text-body text-muted-light">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://app.axora.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-lg px-6 py-3 text-label font-mono uppercase tracking-wider"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact"
                className="btn-glass rounded-lg px-6 py-3 text-label font-mono uppercase tracking-wider"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface/20 py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <LineAiDashboardPreview />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] space-y-16 px-6 lg:px-12">
          <LineWorkflowDiagram />

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal disableScrollAnimation={iosSafariGpuSafe}>
              <LineChatPreview />
            </Reveal>
            <Reveal delay={0.08} disableScrollAnimation={iosSafariGpuSafe}>
              <LineAiReplyPreview />
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal disableScrollAnimation={iosSafariGpuSafe}>
              <LineCrmLeadCard />
            </Reveal>
            <Reveal delay={0.08} disableScrollAnimation={iosSafariGpuSafe}>
              <LineQrSection
                compact
                disableScrollAnimation={iosSafariGpuSafe}
              />
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal disableScrollAnimation={iosSafariGpuSafe}>
              <SectionHeader
                disableScrollAnimation={iosSafariGpuSafe}
                label={t.lineAi.form.label}
                title={t.lineAi.form.label}
                description={t.lineAi.form.hint}
              />
            </Reveal>
            <Reveal delay={0.1} disableScrollAnimation={iosSafariGpuSafe}>
              <LineIdForm />
            </Reveal>
          </div>

          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <div className="ui-panel rounded-xl p-8">
              <p className="text-label font-mono uppercase tracking-wider text-accent-blue">
                {t.lineAi.tech.label}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {t.lineAi.tech.items.map((item) => (
                  <li
                    key={item}
                    className="glass-card rounded-full px-4 py-2 text-caption text-muted-light"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
