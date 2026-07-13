import { aiAgent } from "./ai-agent";
import { aiCrmGuide } from "./ai-crm-guide";
import { lineOaGuide } from "./line-oa-guide";
import { seoGuide } from "./seo-guide";
import { websiteDevelopment } from "./website-development";
import type { BlogPost } from "./types";

export type {
  BlogCategory,
  BlogPost,
  BlogSection,
} from "./types";
export { BLOG_CATEGORIES } from "./types";

export const blogPosts: BlogPost[] = [
  aiCrmGuide,
  lineOaGuide,
  websiteDevelopment,
  seoGuide,
  aiAgent,
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts() {
  return blogPosts.filter((post) => post.featured);
}

export function getLatestBlogPosts() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];

  const sameCategory = getLatestBlogPosts().filter(
    (post) => post.slug !== slug && post.category === current.category,
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const extras = getLatestBlogPosts().filter(
    (post) =>
      post.slug !== slug &&
      !sameCategory.some((item) => item.slug === post.slug),
  );

  return [...sameCategory, ...extras].slice(0, limit);
}
