"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredCaseStudies } from "../../data/case-studies";
import { useLanguage } from "../../context/language-context";
import { CaseStudyPreviewCard } from "../case-studies/case-study-section";
import { SectionHeader } from "../ui/section-header";
import {
  PlatformServiceVisualCards,
} from "../visuals/product-visual-library";
import { SaasMetricsStrip } from "../visuals/saas-metrics-strip";
import { ProductVisualGrid } from "../visuals/visual-mockups";
import {
  SaaSIntegrationsConsole,
  SaaSProductBento,
} from "../visuals/saas-product-showcase";
import { Reveal } from "../ui/reveal";

const techStack = [
  "Next.js",
  "PostgreSQL",
  "LINE API",
  "OpenAI",
  "Redis",
  "TypeScript",
];

// TEMP: disable whileInView scroll animations for iPhone Safari crash test
const DISABLE_HOME_SCROLL_ANIM = true;

export function HomePage() {
  const { t, locale } = useLanguage();
  const isZh = locale === "zh";

  const stats = isZh
    ? [
        { v: "120+", l: "交付專案" },
        { v: "98%", l: "客戶滿意度" },
        { v: "3.2×", l: "跟進效率" },
        { v: "24/7", l: "自動化流程" },
      ]
    : [
        { v: "120+", l: "Projects delivered" },
        { v: "98%", l: "Client satisfaction" },
        { v: "3.2×", l: "Follow-up efficiency" },
        { v: "24/7", l: "Automation workflows" },
      ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[95vh] overflow-hidden border-b border-border lg:min-h-screen">
        {null /* TEMP: HeroShowcaseBackground disabled for iPhone Safari test */}

        <div className="relative mx-auto flex min-h-[95vh] max-w-[1400px] items-center px-6 py-20 lg:min-h-screen lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-center lg:max-w-xl lg:pr-4 xl:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue"
            >
              客製化網站 · AI 智能分析 · 自動化流程
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display mt-5 text-4xl sm:text-5xl lg:mt-6 lg:text-6xl"
            >
              <span className="gradient-text">{t.home.hero.headline}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 max-w-xl text-body leading-relaxed text-muted-light lg:mt-6"
            >
              {t.home.hero.subtitle}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 max-w-xl space-y-2.5 text-body-sm text-muted-light lg:mt-6"
            >
              {t.home.hero.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
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
              <Link
                href="/services"
                className="btn-primary rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
              >
                {t.common.explorePlatform}
              </Link>
              <Link
                href="/contact"
                className="btn-glass rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
              >
                {t.common.contactUs}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-2 lg:mt-10"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface/80 px-3 py-1 text-caption text-muted-light"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 flex items-center justify-center lg:mt-0">
            {null /* TEMP: HeroPortfolioShowcase disabled for iPhone Safari test */}
          </div>
        </div>
      </section>

      {/* Platform metrics */}
      <section className="section-elevated border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SaasMetricsStrip disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface/20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={s.l} delay={i * 0.05}>
              <div className="bg-background-secondary/80 px-6 py-8 text-center backdrop-blur-sm lg:py-10">
                <p className="stat-value-gradient text-3xl font-semibold tracking-tight lg:text-4xl">
                  {s.v}
                </p>
                <p className="mt-2 text-caption text-muted">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SaaS product surface — bento UI */}
      <section className="section-violet border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.productSurface.label}
            title={t.home.productSurface.title}
            description={t.home.productSurface.subtitle}
          />
          <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} className="mt-12">
            <SaaSProductBento />
          </Reveal>
        </div>
      </section>

      {/* Integrations & gateway console */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.adminConsole.label}
            title={t.home.adminConsole.title}
            description={t.home.adminConsole.subtitle}
          />
          <div className="mt-12">
            <SaaSIntegrationsConsole />
          </div>
        </div>
      </section>

      {/* What We Build — bento */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.whatWeBuild.label}
            title={t.home.whatWeBuild.title}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.whatWeBuild.items.map((item, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={item.title} delay={i * 0.04}>
                <div className="glass-card group rounded-xl p-6 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-blue/15 font-mono text-sm text-accent-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-body font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-body-sm text-muted-light">
                    {item.desc}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-accent-blue/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.digitalServices.label}
            title={t.home.digitalServices.title}
            description={t.home.digitalServices.description}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {t.home.digitalServices.cards.map((card, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={card.title} delay={i * 0.06}>
                <div className="glass-card flex flex-col rounded-xl p-8 lg:flex-row lg:gap-8 lg:p-10">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-body text-muted-light">{card.desc}</p>
                    <ul className="mt-4 space-y-1.5 text-body-sm text-muted">
                      {card.deliverables.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="text-accent-cyan">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ui-panel-inner mt-6 flex h-28 flex-1 items-end gap-1 p-4 lg:mt-0 lg:max-w-[200px]">
                    {[40, 70, 55, 90, 65].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm bg-gradient-to-t from-accent-purple/30 to-accent-blue"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.howWeWork.label}
            title={t.home.howWeWork.title}
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.howWeWork.steps.map((step, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={step.title} delay={i * 0.05}>
                <div className="gradient-border h-full">
                  <div className="gradient-border-inner h-full p-6">
                    <span className="font-mono text-base text-accent-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-body font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-body-sm text-muted-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product UI */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.productPreview.label}
            title={t.home.productPreview.title}
            description={t.home.productPreview.subtitle}
            align="center"
          />
          <div className="mt-12">
            <ProductVisualGrid />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.caseStudies.label}
            title={t.home.caseStudies.title}
            description={t.home.caseStudies.subtitle}
            action={
              <Link
                href="/work"
                className="link-underline text-label font-mono uppercase tracking-[0.2em] text-muted-light"
              >
                {t.common.viewAll} →
              </Link>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {featuredCaseStudies.map((study, i) => (
              <Link key={study.id} href={`/work#${study.id}`}>
                <CaseStudyPreviewCard
                  study={study}
                  index={i}
                  disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform bento */}
      <section id="platform" className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.platform.label}
            title={t.home.platform.title}
            description={t.home.platform.description}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.platform.features.map((feature, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={feature} delay={i * 0.03}>
                <div className="glass-card flex items-center gap-3 rounded-xl px-5 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 text-sm text-accent-blue">
                    ✓
                  </span>
                  <span className="text-body-sm text-foreground">{feature}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <PlatformServiceVisualCards />
          <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} className="mt-10">
            <Link
              href="/work"
              className="link-underline text-label font-mono uppercase tracking-[0.2em] text-accent-blue"
            >
              {t.common.viewAll} →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}
            label={t.home.services.label}
            title={t.home.services.title}
            action={
              <Link
                href="/services"
                className="link-underline text-label font-mono uppercase tracking-[0.2em] text-muted-light"
              >
                {t.common.learnMore} →
              </Link>
            }
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.services.items.map((item, i) => (
              <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM} key={item} delay={(i % 6) * 0.03}>
                <div className="ui-panel flex items-center gap-3 rounded-lg px-5 py-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  <span className="text-body-sm text-foreground">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal disableScrollAnimation={DISABLE_HOME_SCROLL_ANIM}>
            <div className="glass-card relative overflow-hidden rounded-2xl px-8 py-16 text-center lg:px-16">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10" />
              <h2 className="section-title relative">{t.home.cta.title}</h2>
              <p className="relative mx-auto mt-4 max-w-xl text-body text-muted-light">
                {t.home.cta.body}
              </p>
              <Link
                href="/contact"
                className="btn-primary relative mt-8 inline-flex rounded-lg px-10 py-4 text-label font-mono uppercase tracking-[0.15em]"
              >
                {t.common.contactUs}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
