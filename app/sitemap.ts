import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/data/blog-posts";
import { projects } from "@/app/data/projects";
import { SITE_URL } from "@/lib/site";
import { hasEnglish, toEnPath } from "@/app/i18n-routes";

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
    "/services/ordering-system",
    "/services/booking-system",
    "/services/gas-delivery-system",
    "/services/seo",
  ] as const;

  const projectPaths = projects.map((project) => `/projects/${project.id}`);
  const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`);

  const zhPaths: string[] = [...staticPaths, ...projectPaths, ...blogPaths];
  const enPaths = zhPaths.filter((p) => hasEnglish(p)).map((p) => toEnPath(p)!);

  return [...zhPaths, ...enPaths].map((path) => {
    const blogPost = blogPosts.find((post) => `/blog/${post.slug}` === path);

    // zh-TW / en / x-default alternates for pages that exist in both languages
    const zhPath = path === "/en" ? "/" : path.startsWith("/en/") ? path.slice(3) : path;
    const alternates = hasEnglish(zhPath)
      ? {
          languages: {
            "zh-TW": `${SITE_URL}${zhPath}`,
            en: `${SITE_URL}${toEnPath(zhPath)}`,
            "x-default": `${SITE_URL}${zhPath}`,
          },
        }
      : undefined;

    return {
      url: `${SITE_URL}${path === "/" ? "/" : path}`,
      ...(alternates ? { alternates } : {}),
      lastModified: blogPost ? new Date(blogPost.updatedAt) : lastModified,
      changeFrequency:
        path === "/" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority:
        path === "/"
          ? 1
          : path === "/en"
            ? 0.9
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
