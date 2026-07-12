import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  creativeWorkJsonLd,
} from "@/lib/seo/json-ld";
import { getProjectDetail } from "../../data/project-details";
import {
  getAdjacentProjects,
  getProjectById,
  projects,
} from "../../data/projects";
import {
  getRelatedArticlesForProject,
  getRelatedServicesForProject,
} from "../../data/relations";
import { ProjectDetailView } from "../../components/projects/project-detail-view";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return pageMetadata({
      title: "專案｜AXORA",
      description: "AXORA Project Portfolio",
      path: "/projects",
    });
  }

  const base = pageMetadata({
    title: `${project.name}｜Case Study｜AXORA`,
    description: project.overview.zh,
    path: `/projects/${project.id}`,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      ...base.twitter,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  const detail = getProjectDetail(id);

  if (!project || !detail) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.id);
  const path = `/projects/${project.id}` as const;
  const relatedServices = getRelatedServicesForProject(project.id);
  const relatedArticles = getRelatedArticlesForProject(project.id);

  return (
    <>
      <JsonLd
        data={creativeWorkJsonLd({
          name: project.name,
          description: project.overview.zh,
          path,
          image: project.coverImage,
          keywords: [
            project.category,
            project.platform,
            ...project.techTags,
            "AXORA",
            "Case Study",
          ],
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "案例實績", path: "/projects" },
          { name: project.name, path },
        ])}
      />
      <ProjectDetailView
        project={project}
        detail={detail}
        previousProject={previous}
        nextProject={next}
        relatedServices={relatedServices}
        relatedArticles={relatedArticles}
      />
    </>
  );
}
