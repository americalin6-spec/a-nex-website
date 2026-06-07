"use client";

import Link from "next/link";
import { SectionHeader } from "../components/ui/section-header";
import { Reveal } from "../components/ui/reveal";
import { SaasMetricsStrip } from "../components/visuals/saas-metrics-strip";
import { SaaSProductBento } from "../components/visuals/saas-product-showcase";
import { ProductVisualGrid } from "../components/visuals/visual-mockups";
import { LineWorkAiDownloadMockups } from "../components/visuals/product-visual-library";
import { useLanguage } from "../context/language-context";

const trialHref = "https://app.axora.tw";

export default function DownloadsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-cyan">
              {t.downloads.hero.label}
            </p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{t.downloads.hero.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-body text-muted-light">
              {t.downloads.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={trialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
              >
                {t.downloads.hero.googleCta}
              </Link>
              <Link
                href={trialHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
              >
                {t.downloads.hero.startCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <LineWorkAiDownloadMockups />
        </div>
      </section>

      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            label={t.downloads.features.label}
            title={t.downloads.features.title}
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.downloads.features.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="glass-card h-full rounded-xl p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/15 font-mono text-sm text-accent-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-body font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-muted-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SaasMetricsStrip />
        </div>
      </section>

      <section className="section-violet border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            label={t.downloads.pricing.label}
            title={t.downloads.pricing.title}
            align="center"
          />
          <p className="mx-auto mt-6 max-w-xl text-center text-body font-medium text-accent-cyan">
            {t.downloads.pricing.trialHighlight}
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.downloads.pricing.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.06}>
                <div
                  className={`glass-card flex h-full flex-col rounded-xl p-8 ${
                    plan.name === "Pro"
                      ? "ring-1 ring-accent-cyan/40 shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]"
                      : ""
                  }`}
                >
                  <p className="text-label font-mono uppercase tracking-wider text-muted">
                    {plan.name}
                  </p>
                  <p className="mt-4 flex items-baseline gap-1">
                    <span className="stat-value-gradient text-3xl font-semibold">
                      {plan.price}
                    </span>
                    <span className="text-caption text-muted">{plan.period}</span>
                  </p>
                  <p className="mt-4 flex-1 text-body-sm text-muted-light">
                    {plan.desc}
                  </p>
                  <Link
                    href={trialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex justify-center rounded-lg px-5 py-3 text-center text-label font-mono uppercase tracking-[0.12em] ${
                      plan.name === "Pro" ? "btn-primary" : "btn-glass"
                    }`}
                  >
                    {t.downloads.hero.startCta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            label={t.downloads.visuals.label}
            title={t.downloads.visuals.title}
            description={t.downloads.visuals.subtitle}
            align="center"
          />
          <Reveal className="mt-12">
            <SaaSProductBento />
          </Reveal>
          <div className="mt-10">
            <ProductVisualGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
