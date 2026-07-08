"use client";

import Link from "next/link";
import type { Project } from "../../data/projects";
import type { ProjectDetail } from "../../data/project-details";
import { useLanguage, useLocalized } from "../../context/language-context";
import {
  ProjectCoverImage,
  ProjectGalleryImage,
} from "./project-cover";
import { Reveal } from "../ui/reveal";

type ProjectDetailViewProps = {
  project: Project;
  detail: ProjectDetail;
};

export function ProjectDetailView({ project, detail }: ProjectDetailViewProps) {
  const { t, locale } = useLanguage();
  const labels = t.projects.detail;
  const overview = useLocalized(project.overview);
  const clientRequirements = useLocalized(detail.clientRequirements);
  const solution = useLocalized(detail.solution);
  const projectResult = useLocalized(detail.projectResult);
  const coreFeatures = detail.coreFeatures.map((f) => f[locale]);

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <ProjectCoverImage
              src={project.coverImage}
              alt={project.name}
              className="relative aspect-[21/9] overflow-hidden rounded-b-xl border border-border/60 bg-charcoal"
              priority
            />
          </Reveal>
          <div className="py-10 lg:py-14">
            <Reveal delay={0.05}>
              <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                {project.category}
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">{project.name}</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider text-muted">
                <span className="rounded-full border border-border px-3 py-1">
                  {project.status}
                </span>
                <span className="rounded-full border border-border px-3 py-1">
                  {project.year}
                </span>
                <span className="rounded-full border border-border px-3 py-1">
                  {project.platform}
                </span>
                <span className="rounded-full border border-border px-3 py-1">
                  {project.industry}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.overview}
            </h2>
            <p className="mt-5 max-w-3xl text-body text-muted-light">{overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.clientRequirements}
            </h2>
            <p className="mt-5 max-w-3xl text-body text-muted-light">
              {clientRequirements}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.solution}
            </h2>
            <p className="mt-5 max-w-3xl text-body text-muted-light">{solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.coreFeatures}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {coreFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2 text-body text-muted-light"
                >
                  <span className="text-accent-blue">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.technologyStack}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.techTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.projectGallery}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <ProjectGalleryImage
                  key={n}
                  projectId={project.id}
                  index={n}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.projectResult}
            </h2>
            <p className="mt-5 max-w-3xl text-body font-medium text-foreground">
              {projectResult}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <Link
              href="/projects"
              className="link-underline inline-flex text-label font-mono uppercase tracking-[0.2em] text-accent-blue"
            >
              ← {labels.backToProjects}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
