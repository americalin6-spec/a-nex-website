"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "../../data/projects";
import { useLanguage, useLocalized } from "../../context/language-context";
import { Reveal } from "../ui/reveal";

function ProjectCover({ project }: { project: Project }) {
  const [imageReady, setImageReady] = useState(false);

  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-accent-blue/20" />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-500 ${
          imageReady ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-foreground/90">
          Project Showcase
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.45em] text-muted/45">
          AXORA
        </span>
      </div>
      <Image
        src={project.coverImage}
        alt=""
        fill
        className={`object-cover transition-opacity duration-500 ${
          imageReady ? "opacity-100" : "opacity-0"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        onLoad={() => setImageReady(true)}
        onError={() => setImageReady(false)}
      />
    </div>
  );
}

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
          <ProjectCover project={project} />

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
