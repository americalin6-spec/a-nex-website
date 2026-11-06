"use client";

import { useLanguage } from "@/app/context/language-context";
import { SectionHeader } from "../ui/section-header";
import { Reveal } from "../ui/reveal";
import Link from "next/link";
import { localizeHref } from "@/app/i18n-routes";

export type ServiceTemplateCopy = {
  label: string;
  title: string;
  intro: string;
  features: string[];
  audiences: string[];
  /** Optional line under the features list linking to a related page. */
  note?: { text: string; href: string; linkLabel: string };
};

/** Bilingual body of the simple service pages (hero, features, audiences). */
export function ServiceTemplate({ zh, en }: { zh: ServiceTemplateCopy; en: ServiceTemplateCopy }) {
  const { locale } = useLanguage();
  const c = locale === "en" ? en : zh;
  const isEn = locale === "en";

  return (
    <>
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">{c.label}</p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{c.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-body text-muted-light">{c.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            label={isEn ? "Features" : "功能特色"}
            title={isEn ? "What's included" : "功能特色"}
            align="center"
          />
          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {c.features.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.04}>
                <li className="glass-card flex items-center gap-3 rounded-xl px-6 py-4 text-body text-foreground">
                  <span className="text-accent-blue">✓</span>
                  <span>{feature}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          {c.note && (
            <p className="mx-auto mt-8 max-w-3xl text-center text-body-sm text-muted-light">
              {c.note.text}{" "}
              <Link
                href={localizeHref(c.note.href, locale)}
                className="font-semibold text-accent-blue underline underline-offset-4 hover:opacity-80"
              >
                {c.note.linkLabel}
              </Link>
            </p>
          )}
        </div>
      </section>

      <section className="border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <SectionHeader
            label={isEn ? "Who it's for" : "適合對象"}
            title={isEn ? "Who it's for" : "適合對象"}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {c.audiences.map((audience, index) => (
              <Reveal key={audience} delay={index * 0.04}>
                <span className="glass-card rounded-full px-5 py-2.5 text-label font-mono uppercase tracking-wider text-muted-light">
                  {audience}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
