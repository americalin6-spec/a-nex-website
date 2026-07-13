import { aiAgent } from "./ai-agent";
import { aiCrmGuide } from "./ai-crm-guide";
import { getBlogAuthor } from "./authors";
import { seoLibraryPosts } from "./library/seo-library-posts";
import { lineOaGuide } from "./line-oa-guide";
import { seoGuide } from "./seo-guide";
import {
  createArticleFromTemplate,
  estimateReadingTimeMinutes,
} from "./template";
import type { BlogPost } from "./types";
import { websiteDevelopment } from "./website-development";

export type {
  BlogAuthor,
  BlogCategory,
  BlogCta,
  BlogFaqItem,
  BlogPost,
  BlogPostSeo,
  BlogSection,
  BlogTag,
} from "./types";
export { BLOG_CATEGORIES, BLOG_TAGS } from "./types";
export { axoraTeamAuthor, getBlogAuthor, AXORA_TEAM_AUTHOR_ID } from "./authors";
export {
  createArticleFromTemplate,
  estimateReadingTimeMinutes,
  type ArticleTemplateInput,
} from "./template";

export const blogPosts: BlogPost[] = [
  aiCrmGuide,
  lineOaGuide,
  websiteDevelopment,
  seoGuide,
  aiAgent,
  ...seoLibraryPosts,
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

export function getPopularBlogPosts(limit = 3) {
  return [...blogPosts]
    .sort((a, b) => {
      if (b.popularScore !== a.popularScore) {
        return b.popularScore - a.popularScore;
      }
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    })
    .slice(0, limit);
}

export function getReadingTimeMinutes(post: BlogPost) {
  return (
    post.readingTime ||
    estimateReadingTimeMinutes([
      post.title,
      post.intro,
      ...post.content.flatMap((section) => [
        section.heading,
        ...section.paragraphs,
      ]),
      ...post.faq.flatMap((item) => [item.question, item.answer]),
    ])
  );
}

export function getPostAuthor(post: BlogPost) {
  return getBlogAuthor(post.authorId);
}

function sharedTagCount(a: BlogPost, b: BlogPost) {
  const tagSet = new Set(a.tags);
  return b.tags.reduce((count, tag) => count + (tagSet.has(tag) ? 1 : 0), 0);
}

/** Related posts by category + tags overlap; fill with latest if needed. */
export function getRelatedBlogPosts(slug: string, limit = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];

  const ranked = getLatestBlogPosts()
    .filter((post) => post.slug !== slug)
    .map((post) => {
      const categoryScore = post.category === current.category ? 3 : 0;
      const tagScore = sharedTagCount(current, post) * 2;
      return { post, score: categoryScore + tagScore };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (
        new Date(b.post.publishedAt).getTime() -
        new Date(a.post.publishedAt).getTime()
      );
    })
    .map((item) => item.post);

  return ranked.slice(0, limit);
}
