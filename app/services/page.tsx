"use client";

import { motion } from "framer-motion";
import { isIosSafari } from "@/lib/ios-safari";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/language-context";
import { SectionHeader } from "../components/ui/section-header";
import { VisualRenderer } from "../components/visuals/visual-mockups";
import {
  SaaSIntegrationsConsole,
  SaaSProductBento,
} from "../components/visuals/saas-product-showcase";
import { PlatformServiceVisualCards } from "../components/visuals/product-visual-library";
import type { CaseStudyVisual } from "../data/case-studies";
import { Reveal } from "../components/ui/reveal";

const serviceVisuals: CaseStudyVisual[] = [
  "ai-flow",
  "dashboard",
  "crm-table",
  "dashboard",
  "crm-table",
  "kpi",
  "workflow",
  "architecture",
  "ai-flow",
  "dashboard",
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const [iosSafariGpuSafe, setIosSafariGpuSafe] = useState(false);

  useEffect(() => {
    setIosSafariGpuSafe(isIosSafari());
  }, []);

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
              {t.services.label}
            </p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{t.services.title}</span>
            </h1>
            <p className="text-editorial mt-6 max-w-xl text-muted-light">
              {t.services.subtitle}
            </p>
          </Reveal>
          <Reveal
            disableScrollAnimation={iosSafariGpuSafe}
            delay={0.08}
            className="mt-12"
          >
            <PlatformServiceVisualCards />
          </Reveal>
        </div>
      </section>

      <section className="section-violet border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] space-y-10 px-6 lg:px-12">
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.home.productSurface.label}
            title={t.home.productSurface.title}
            description={t.home.productSurface.subtitle}
          />
          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <SaaSProductBento />
          </Reveal>
          <SectionHeader
            disableScrollAnimation={iosSafariGpuSafe}
            label={t.home.adminConsole.label}
            title={t.home.adminConsole.title}
            description={t.home.adminConsole.subtitle}
          />
          <Reveal disableScrollAnimation={iosSafariGpuSafe} delay={0.08}>
            <SaaSIntegrationsConsole />
          </Reveal>
        </div>
      </section>

      <section>
        {t.services.items.map((service, index) => {
          const rowClassName = `border-b border-border ${
            index % 2 === 0 ? "section-elevated" : ""
          }`;
          const rowContent = (
            <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 lg:grid-cols-[100px_1fr_1.1fr] lg:gap-12 lg:px-12 lg:py-18">
              <p className="font-mono text-4xl font-light text-accent-blue/50 lg:text-5xl">
                {service.num}
              </p>
              <div>
                <h2 className="section-title">{service.title}</h2>
                <p className="text-editorial mt-5 max-w-lg text-muted-light">
                  {service.desc}
                </p>
                <p className="mt-4 text-body-sm text-muted-light">
                  <span className="font-mono text-label uppercase tracking-wider text-accent-cyan">
                    {t.services.idealForLabel}:{" "}
                  </span>
                  {service.idealFor}
                </p>
                <p className="mt-6 text-label font-mono uppercase tracking-wider text-muted">
                  {t.services.deliverablesLabel}
                </p>
                <ul className="mt-3 space-y-2 text-body-sm text-muted-light">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent-blue">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal disableScrollAnimation={iosSafariGpuSafe} delay={0.1}>
                <VisualRenderer
                  type={serviceVisuals[index] ?? "dashboard"}
                />
              </Reveal>
            </div>
          );

          if (iosSafariGpuSafe) {
            return (
              <article key={service.num} className={rowClassName}>
                {rowContent}
              </article>
            );
          }

          return (
            <motion.article
              key={service.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={rowClassName}
            >
              {rowContent}
            </motion.article>
          );
        })}
      </section>
    </div>
  );
}
