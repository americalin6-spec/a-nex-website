"use client";

import { isIosSafari } from "@/lib/ios-safari";
import Link from "next/link";
import { useEffect, useState } from "react";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { caseStudies } from "../data/case-studies";
import { projects } from "../data/projects";
import { useLanguage } from "../context/language-context";
import { ProjectCard } from "../components/projects/project-card";
import {
  CaseStudySection,
  CaseStudyPreviewCard,
} from "../components/case-studies/case-study-section";
import { Reveal } from "../components/ui/reveal";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const [iosSafariGpuSafe, setIosSafariGpuSafe] = useState(false);

  useEffect(() => {
    setIosSafariGpuSafe(isIosSafari());
  }, []);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "案例實績", path: "/projects" },
        ])}
      />
      <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal disableScrollAnimation={iosSafariGpuSafe}>
            <h1 className="text-display page-title">
              <span className="gradient-text">{t.projects.label}</span>
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
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                disableScrollAnimation={iosSafariGpuSafe}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-12 lg:pb-20">
        {caseStudies.map((study, i) => (
          <CaseStudySection
            key={study.id}
            study={study}
            index={i}
            disableScrollAnimation={iosSafariGpuSafe}
          />
        ))}
      </section>

      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
            {t.solutions.gridLabel}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Link key={study.id} href={`#${study.id}`}>
                <CaseStudyPreviewCard
                  study={study}
                  index={i}
                  disableScrollAnimation={iosSafariGpuSafe}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
