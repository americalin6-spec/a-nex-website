"use client";

import { motion } from "framer-motion";
import { useIsIosSafari } from "@/lib/ios-safari";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { useLanguage } from "../context/language-context";
import { SectionHeader } from "../components/ui/section-header";
import { ServiceVisual3D } from "../components/visuals/service-visual-3d";
import { PlatformServiceVisualCards } from "../components/visuals/product-visual-library";
import { Reveal } from "../components/ui/reveal";
import Link from "next/link";
import { localizeHref } from "../i18n-routes";

const SEO_ITEM = {
  zh: {
    title: "網站 SEO 基礎設定",
    desc: "網站做好之後，幫你把 Google 需要的基本設定都做好：送出網站地圖、設定標題和描述、檢查速度，讓 Google 更容易找到、看懂你的網站。我們不保證排名，但會把該做的基本功做到位。",
    idealFor: "新做好的網站，或網站上線很久卻在 Google 找不到的店家和公司",
    deliverables: [
      "Google Search Console 設定",
      "網站地圖（Sitemap）送出",
      "每頁標題與描述",
      "速度與手機版檢查",
      "Google 商家資訊建議",
    ],
    linkLabel: "看 SEO 設定包含什麼 →",
  },
  en: {
    title: "SEO Basics",
    desc: "Once your site is built, we set up the essentials Google needs: sitemap submission, page titles and descriptions, and speed checks, so Google can find and understand your site. We don't promise rankings, but we get the fundamentals right.",
    idealFor: "New websites, or sites that have been live for a while but can't be found on Google",
    deliverables: [
      "Google Search Console setup",
      "Sitemap submission",
      "Page titles and descriptions",
      "Speed and mobile checks",
      "Google Business Profile tips",
    ],
    linkLabel: "See what SEO setup includes →",
  },
};


export default function ServicesPage() {
  const { t, locale } = useLanguage();
  const iosSafariGpuSafe = useIsIosSafari();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
        ])}
      />
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

      <section>
        {(() => {
          type Row = {
            title: string;
            desc: string;
            idealFor: string;
            deliverables: readonly string[];
            visual: number;
            link?: { href: string; label: string };
          };
          const base: Row[] = t.services.items.map((s, i) => ({
            title: s.title,
            desc: s.desc,
            idealFor: s.idealFor,
            deliverables: s.deliverables,
            visual: i,
          }));
          const seo = SEO_ITEM[locale === "en" ? "en" : "zh"];
          const seoRow: Row = {
            title: seo.title,
            desc: seo.desc,
            idealFor: seo.idealFor,
            deliverables: seo.deliverables,
            visual: 100,
            link: { href: localizeHref("/services/seo", locale), label: seo.linkLabel },
          };
          const websiteIdx = base.findIndex((r) => r.title === "官方網站" || r.title === "Website");
          base.splice(websiteIdx >= 0 ? websiteIdx + 1 : 1, 0, seoRow);
          return base;
        })().map((service, index) => {
          const num = String(index + 1).padStart(2, "0");
          const rowClassName = `border-b border-border ${
            index % 2 === 0 ? "section-elevated" : ""
          }`;
          const rowContent = (
            <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 lg:grid-cols-[100px_1fr_1.1fr] lg:gap-12 lg:px-12 lg:py-18">
              <p className="font-mono text-4xl font-light text-accent-blue/50 lg:text-5xl">
                {num}
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
                {service.link && (
                  <Link
                    href={service.link.href}
                    className="mt-6 inline-flex items-center rounded-full border border-border bg-surface px-5 py-2.5 text-body-sm font-semibold text-foreground transition hover:border-accent-blue hover:text-accent-blue"
                  >
                    {service.link.label}
                  </Link>
                )}
              </div>
              <Reveal disableScrollAnimation={iosSafariGpuSafe} delay={0.1}>
                <ServiceVisual3D index={service.visual} />
              </Reveal>
            </div>
          );

          if (iosSafariGpuSafe) {
            return (
              <article key={num} className={rowClassName}>
                {rowContent}
              </article>
            );
          }

          return (
            <motion.article
              key={num}
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
    </>
  );
}
