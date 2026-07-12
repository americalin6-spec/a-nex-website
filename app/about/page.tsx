"use client";

import { useIsIosSafari } from "@/lib/ios-safari";
import Link from "next/link";
import { useLanguage } from "../context/language-context";
import { SectionHeader } from "../components/ui/section-header";
import { KpiCards, CrmTablePreview } from "../components/visuals/visual-mockups";
import { Reveal } from "../components/ui/reveal";

export default function AboutPage() {
  const { t } = useLanguage();
  const iosSafariGpuSafe = useIsIosSafari();

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
              {t.about.label}
            </p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{t.about.headline}</span>
            </h1>
            <p className="mt-6 text-body text-muted-light">{t.about.intro}</p>
            <p className="mt-4 text-body-sm text-muted">{t.about.mission}</p>
            <Link
              href="/contact"
              className="btn-primary mt-8 inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
            >
              {t.common.contactUs}
            </Link>
          </Reveal>
          <Reveal delay={0.15} disableScrollAnimation={iosSafariGpuSafe}>
            <div className="grid gap-4">
              <KpiCards />
              <CrmTablePreview />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.about.whoWeServe.label}
            title={t.about.whoWeServe.label}
            align="center"
          />
          <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-body text-muted-light">
            {t.about.whoWeServe.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent-cyan">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.about.topicsLabel}
            title={t.about.topicsLabel}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {t.about.topics.map((topic) => (
              <span
                key={topic}
                className="glass-card rounded-full px-5 py-2.5 text-label font-mono uppercase tracking-wider text-muted-light"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.about.timelineLabel}
            title={t.about.timelineLabel}
          />
          <ul className="mt-10 list-none space-y-4">
            {t.about.timeline.map((item, i) => (
              <li key={item.year}>
                <Reveal delay={i * 0.06} disableScrollAnimation={iosSafariGpuSafe}>
                  <div className="glass-card grid gap-3 rounded-xl p-6 lg:grid-cols-[120px_1fr] lg:gap-8">
                    <span className="font-mono text-lg text-accent-blue">
                      {item.year}
                    </span>
                    <span className="text-body text-foreground">{item.event}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
