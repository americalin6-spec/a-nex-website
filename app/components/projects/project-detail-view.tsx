"use client";

import Link from "next/link";
import type { Project } from "../../data/projects";
import type { ProjectDetail } from "../../data/project-details";
import type { BlogPost } from "../../data/blog-posts";
import type { ServiceLink } from "../../data/relations";
import { useLanguage, useLocalized } from "../../context/language-context";
import { ProjectCoverImage } from "./project-cover";
import { Reveal } from "../ui/reveal";
import { ContactCtaSection } from "../seo/contact-cta-section";
import {
  RelatedArticlesSection,
  RelatedServicesSection,
} from "../seo/related-sections";

type ProjectDetailViewProps = {
  project: Project;
  detail: ProjectDetail;
  previousProject: Project | null;
  nextProject: Project | null;
  relatedServices: ServiceLink[];
  relatedArticles: BlogPost[];
};

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    // spark / AI
    <path
      key="a"
      d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
    />,
    // checklist
    <path
      key="b"
      d="M9 11l2 2 4-4M5 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
    />,
    // layers
    <path
      key="c"
      d="M12 3 3 8l9 5 9-5-9-5ZM3 14l9 5 9-5M3 10l9 5 9-5"
    />,
    // chat
    <path
      key="d"
      d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1.1-4.2A8 8 0 1 1 21 12Z"
    />,
    // chart
    <path
      key="e"
      d="M4 19V5M4 19h16M8 16V10M12 16V7M16 16v-4"
    />,
  ];

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-charcoal/60 text-accent-blue">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {icons[index % icons.length]}
      </svg>
    </span>
  );
}

export function ProjectDetailView({
  project,
  detail,
  previousProject,
  nextProject,
  relatedServices,
  relatedArticles,
}: ProjectDetailViewProps) {
  const { t, locale } = useLanguage();
  const labels = t.projects.detail;
  const overview = useLocalized(project.overview);
  const background = useLocalized(detail.background);
  const clientRequirements = useLocalized(detail.clientRequirements);
  const solution = useLocalized(detail.solution);
  const projectResult = useLocalized(detail.projectResult);
  const coreFeatures = detail.coreFeatures.map((f) => f[locale]);
  const results = detail.results.map((r) => r[locale]);
  const galleryImages =
    detail.galleryImages.length > 0
      ? detail.galleryImages
      : [project.coverImage];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-glow mesh-accent relative border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <ProjectCoverImage
              src={project.coverImage}
              alt={`${project.name} — AXORA Case Study`}
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
              <p className="mt-6 max-w-3xl text-body text-muted-light">
                {overview}
              </p>
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

      {/* Project Overview */}
      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.overview}
            </h2>
            <p className="mt-5 max-w-3xl text-body text-muted-light">
              {background}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Client Challenge */}
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

      {/* Solution */}
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

      {/* Key Features */}
      <section className="section-elevated border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.coreFeatures}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {coreFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="glass-card flex items-start gap-4 rounded-xl px-5 py-4"
                >
                  <FeatureIcon index={index} />
                  <span className="text-body text-muted-light">{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Technology Stack */}
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

      {/* Results */}
      <section className="section-elevated border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.projectResult}
            </h2>
            <p className="mt-5 max-w-3xl text-body font-medium text-foreground">
              {projectResult}
            </p>
            <h3 className="mt-10 text-label font-mono uppercase tracking-[0.2em] text-accent-cyan">
              {labels.results}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {results.map((result) => (
                <li
                  key={result}
                  className="flex gap-2 text-body text-muted-light"
                >
                  <span className="text-accent-blue">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-b border-border py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <h2 className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">
              {labels.projectGallery}
            </h2>
            <div
              className={`mt-8 grid gap-4 ${
                galleryImages.length > 1
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "max-w-4xl"
              }`}
            >
              {galleryImages.map((src, index) => (
                <ProjectCoverImage
                  key={`${src}-${index}`}
                  src={src}
                  alt={`${project.name} 專案展示圖 ${index + 1}`}
                  showFallback={false}
                  className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border/60 bg-charcoal"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServicesSection services={relatedServices} />

      {/* Related Articles */}
      <RelatedArticlesSection articles={relatedArticles} />

      {/* CTA */}
      <ContactCtaSection
        title={labels.startProject}
        description={
          locale === "zh"
            ? "告訴我們您的產業與需求，AXORA 協助規劃可行方案。"
            : "Tell us your industry and goals — AXORA will help shape a practical plan."
        }
      />

      {/* Prev / Next + back */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.id}`}
                  className="glass-card group rounded-xl p-6 transition hover:border-border-hover"
                >
                  <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
                    ← {labels.previousProject}
                  </p>
                  <p className="mt-3 text-xl font-medium text-foreground group-hover:text-accent-blue">
                    {previousProject.name}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="glass-card group rounded-xl p-6 text-right transition hover:border-border-hover md:justify-self-end"
                >
                  <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
                    {labels.nextProject} →
                  </p>
                  <p className="mt-3 text-xl font-medium text-foreground group-hover:text-accent-blue">
                    {nextProject.name}
                  </p>
                </Link>
              ) : null}
            </div>

            <Link
              href="/projects"
              className="link-underline mt-10 inline-flex text-label font-mono uppercase tracking-[0.2em] text-accent-blue"
            >
              ← {labels.backToProjects}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
