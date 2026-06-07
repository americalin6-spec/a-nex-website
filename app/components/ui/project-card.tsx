"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "../../data/projects";
import { useLanguage, useLocalized } from "../../context/language-context";

type ProjectCardProps = {
  project: Project;
  index?: number;
  size?: "default" | "large";
};

export function ProjectCard({
  project,
  index = 0,
  size = "default",
}: ProjectCardProps) {
  const { t } = useLanguage();
  const category = useLocalized(project.category);
  const title = useLocalized(project.title);
  const description = useLocalized(project.description);

  const heightClass =
    size === "large"
      ? "min-h-[420px] lg:min-h-[520px]"
      : project.layout === "tall"
        ? "min-h-[480px]"
        : project.layout === "wide"
          ? "min-h-[360px] lg:min-h-[400px]"
          : "min-h-[380px]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden ${heightClass}`}
    >
      <Link href="/work" className="block h-full">
        <div className="project-visual relative h-full w-full overflow-hidden border border-border bg-charcoal transition-colors duration-700 group-hover:border-border-hover">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at ${30 + index * 15}% ${40 + index * 10}%, rgba(192,200,212,0.08) 0%, transparent 60%)`,
            }}
            whileHover={{ scale: 1.05, opacity: 0.5 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-muted">
              {category}
            </p>
            <h3
              className={`text-display text-white ${size === "large" ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"}`}
            >
              {title}
            </h3>
            <p className="mt-3 max-w-md text-base font-light leading-relaxed text-muted-light opacity-0 transition-all duration-700 group-hover:opacity-100">
              {description}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted transition-colors duration-500 group-hover:text-foreground">
              {t.common.learnMore}
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
