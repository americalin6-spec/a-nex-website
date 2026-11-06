import type { Metadata } from "next";
import { enPageMetadata } from "@/lib/seo/en-metadata";
import { getProjectById, projects } from "@/app/data/projects";
import Page from "@/app/projects/[id]/page";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  const name = project?.nameEn ?? project?.name ?? "Project";
  return enPageMetadata({
    zhPath: `/projects/${id}`,
    title: `${name} | AXORA Projects`,
    description: project?.overview.en ?? "A project built by AXORA.",
  });
}

export default Page;
