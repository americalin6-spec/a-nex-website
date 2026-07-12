import type { MetadataRoute } from "next";
import { projects } from "@/app/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/projects",
    "/line-ai",
    "/downloads",
    "/services/ai-crm",
    "/services/ai-customer-service",
    "/services/crm-system",
    "/services/line-oa",
    "/services/saas-development",
    "/services/ai-automation",
    "/services/app-development",
    "/services/web-design",
    ...projects.map((project) => `/projects/${project.id}`),
  ] as const;

  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/services/")
          ? 0.8
          : path.startsWith("/projects/")
            ? 0.7
            : 0.7,
  }));
}
