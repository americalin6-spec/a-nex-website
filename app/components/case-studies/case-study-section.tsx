"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "../../data/case-studies";
import { useLanguage, useLocalized } from "../../context/language-context";
import { VisualRenderer } from "../visuals/visual-mockups";
import { CaseStudyVisualThumb } from "../visuals/product-visual-library";

export function CaseStudySection({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const { t, locale } = useLanguage();
  const category = useLocalized(study.category);
  const title = useLocalized(study.title);
  const summary = useLocalized(study.summary);
  const problem = useLocalized(study.problem);
  const solution = useLocalized(study.solution);
  const result = useLocalized(study.result);
  const features = study.features.map((f) => f[locale]);

  const labels = t.caseStudies;

  return (
    <motion.article
      id={study.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`grid gap-10 border-t border-border py-16 lg:grid-cols-2 lg:gap-14 lg:py-24 ${
        index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <VisualRenderer type={study.visual} />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
          {category}
        </p>
        <h2 className="section-title mt-4">{title}</h2>
        <p className="mt-4 text-body text-muted-light">{summary}</p>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-label font-mono uppercase tracking-wider text-muted">
              {labels.problem}
            </h3>
            <p className="mt-3 text-body text-muted-light">{problem}</p>
          </div>
          <div>
            <h3 className="text-label font-mono uppercase tracking-wider text-muted">
              {labels.solution}
            </h3>
            <p className="mt-3 text-body text-muted-light">{solution}</p>
          </div>
          <div>
            <h3 className="text-label font-mono uppercase tracking-wider text-muted">
              {labels.features}
            </h3>
            <ul className="mt-3 space-y-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-body text-foreground/90"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-label font-mono uppercase tracking-wider text-muted">
              {labels.result}
            </h3>
            <p className="mt-3 text-body font-medium text-foreground">{result}</p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {study.techTags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-3 py-1.5 font-mono text-sm uppercase tracking-wider text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function CaseStudyPreviewCard({
  study,
  index,
  disableScrollAnimation = false,
}: {
  study: CaseStudy;
  index: number;
  disableScrollAnimation?: boolean;
}) {
  const category = useLocalized(study.category);
  const title = useLocalized(study.title);
  const summary = useLocalized(study.summary);

  return (
    <motion.div
      initial={disableScrollAnimation ? false : { opacity: 0, y: 20 }}
      whileInView={disableScrollAnimation ? undefined : { opacity: 1, y: 0 }}
      viewport={disableScrollAnimation ? undefined : { once: true }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="gradient-border group h-full transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="gradient-border-inner h-full rounded-[inherit] p-8 lg:p-10">
        <CaseStudyVisualThumb type={study.visual} />
        <p className="mt-5 text-label font-mono uppercase tracking-wider text-accent-cyan">
          {category}
        </p>
        <h3 className="mt-4 text-xl font-medium text-foreground lg:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-body text-muted-light">{summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {study.techTags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="font-mono text-sm uppercase tracking-wider text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
