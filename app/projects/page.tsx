"use client";

import { projects } from "../data/projects";
import { useLanguage } from "../context/language-context";
import { ProjectCard } from "../components/projects/project-card";
import { Reveal } from "../components/ui/reveal";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
              {t.projects.label}
            </p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{t.projects.title}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-body text-muted-light">
              {t.projects.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
