"use client";

import Link from "next/link";
import type { Project } from "../../data/projects";
import { useLanguage, useLocalized } from "../../context/language-context";
import { Reveal } from "../ui/reveal";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t } = useLanguage();
  const overview = useLocalized(project.overview);

  return (
    <Reveal delay={index * 0.04}>
      <article className="gradient-border group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5">
        <div className="gradient-border-inner flex h-full flex-col overflow-hidden rounded-[inherit]">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-background/80">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/15 via-background to-accent-purple/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
                {project.category}
              </span>
              <span className="text-label font-mono uppercase tracking-wider text-muted">
                Placeholder
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6 lg:p-8">
            <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
              {project.category}
            </p>
            <h2 className="mt-3 text-xl font-medium text-foreground lg:text-2xl">
              {project.name}
            </h2>
            <p className="mt-3 flex-1 text-body text-muted-light">{overview}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="link-underline mt-6 inline-flex w-fit text-label font-mono uppercase tracking-[0.2em] text-accent-blue"
            >
              {t.projects.viewProject} →
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
