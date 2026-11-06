"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";
import type { BlogPost } from "@/app/data/blog-posts";
import type { ServiceLink } from "@/app/data/relations";
import { useLanguage } from "@/app/context/language-context";

export function RelatedProjectsSection({
  projects,
  title,
}: {
  projects: Project[];
  title?: string;
}) {
  const { locale } = useLanguage();
  const en = locale === "en";
  if (projects.length === 0) return null;

  return (
    <section className="border-b border-border py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <h2 className="section-title">{title ?? (en ? "Related projects" : "相關案例")}</h2>
        <p className="mt-4 max-w-2xl text-body text-muted-light">
          {en
            ? "See how AXORA has used similar technology and processes to deliver real systems."
            : "看看 AXORA 如何用相近的技術與流程，協助企業落地系統。"}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="gradient-border group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="gradient-border-inner flex h-full flex-col overflow-hidden rounded-[inherit]">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal">
                  <Image
                    src={project.coverImage}
                    alt={`${en ? project.nameEn ?? project.name : project.name} — AXORA`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-foreground">
                    {en ? project.nameEn ?? project.name : project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-body text-muted-light">
                    {en ? project.overview.en : project.overview.zh}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedServicesSection({
  services,
  title,
}: {
  services: ServiceLink[];
  title?: string;
}) {
  const { locale } = useLanguage();
  const en = locale === "en";
  if (services.length === 0) return null;

  return (
    <section className="section-elevated border-b border-border py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <h2 className="section-title">{title ?? (en ? "Related services" : "相關服務")}</h2>
        <p className="mt-4 max-w-2xl text-body text-muted-light">
          {en ? "You may also need these AXORA services." : "依此主題延伸，您可能也需要這些 AXORA 服務。"}
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="glass-card inline-flex rounded-full px-5 py-2.5 text-label font-mono uppercase tracking-wider text-muted-light transition hover:text-foreground"
              >
                {en ? service.shortNameEn : service.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RelatedArticlesSection({
  articles,
  title = "相關文章",
}: {
  articles: BlogPost[];
  title?: string;
}) {
  const { locale } = useLanguage();
  // The blog is Chinese-only, so related articles are hidden on English pages.
  if (articles.length === 0 || locale === "en") return null;

  return (
    <section className="border-b border-border py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <h2 className="section-title">{title}</h2>
        <p className="mt-4 max-w-2xl text-body text-muted-light">
          延伸閱讀 AXORA Blog，了解實務做法與導入重點。
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="gradient-border group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="gradient-border-inner flex h-full flex-col overflow-hidden rounded-[inherit]">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                    {article.category}
                  </p>
                  <h3 className="mt-3 text-xl font-medium text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-body text-muted-light">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
