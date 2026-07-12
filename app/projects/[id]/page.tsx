import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { getProjectDetail } from "../../data/project-details";
import { getProjectById, projects } from "../../data/projects";
import { ProjectDetailView } from "../../components/projects/project-detail-view";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) {
    return pageMetadata({
      title: "專案｜AXORA",
      description: "AXORA Project Portfolio",
      path: "/projects",
    });
  }

  return pageMetadata({
    title: `${project.name}｜AXORA Project Portfolio`,
    description: project.overview.zh,
    path: `/projects/${project.id}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  const detail = getProjectDetail(id);

  if (!project || !detail) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "案例實績", path: "/projects" },
          { name: project.name, path: `/projects/${project.id}` },
        ])}
      />
      <ProjectDetailView project={project} detail={detail} />
    </>
  );
}
