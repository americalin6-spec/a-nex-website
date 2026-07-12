import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/data/blog-posts";
import { projects } from "@/app/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/projects",
    "/blog",
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
  ] as const;

  const projectPaths = projects.map((project) => `/projects/${project.id}`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPaths, ...projectPaths, ...blogPaths].map((path) => {
    const blogPost = blogPosts.find((post) => `/blog/${post.slug}` === path);

    return {
      url: `${SITE_URL}${path === "/" ? "/" : path}`,
      lastModified: blogPost ? new Date(blogPost.updatedAt) : lastModified,
      changeFrequency:
        path === "/" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === "/"
          ? 1
          : path === "/blog"
            ? 0.85
            : path.startsWith("/blog/")
              ? 0.75
              : path.startsWith("/services/")
                ? 0.8
                : 0.7,
    };
  });
}
