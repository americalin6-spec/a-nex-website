import { AXORA_TEAM_AUTHOR_ID } from "./authors";
import type {
  BlogCategory,
  BlogCta,
  BlogFaqItem,
  BlogPost,
  BlogSection,
  BlogTag,
} from "./types";

/**
 * Reusable article template for the SEO Content Hub.
 * Maps structured editorial fields into a BlogPost ready for /blog/[slug].
 */
export type ArticleTemplateInput = {
  id: string;
  slug: string;
  category: BlogCategory;
  tags: BlogTag[];
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: `/${string}`;
  ogImage: string;
  /** H1 */
  h1: string;
  /** 前言 */
  intro: string;
  /** Card / list excerpt; defaults to intro */
  description?: string;
  coverImage: string;
  publishedAt: string;
  updatedAt: string;
  popularScore: number;
  featured?: boolean;
  /** H2 / H3 body sections（目錄由此產生） */
  sections: BlogSection[];
  faq: BlogFaqItem[];
  cta: BlogCta;
  authorId?: string;
};

export function estimateReadingTimeMinutes(parts: string[]): number {
  const chars = parts.join("").replace(/\s/g, "").length;
  return Math.max(1, Math.ceil(chars / 300));
}

export function createArticleFromTemplate(
  input: ArticleTemplateInput,
): BlogPost {
  const description = input.description ?? input.intro;
  const readingTime = estimateReadingTimeMinutes([
    input.h1,
    input.intro,
    ...input.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
    ]),
    ...input.faq.flatMap((item) => [item.question, item.answer]),
  ]);

  return {
    id: input.id,
    slug: input.slug,
    title: input.h1,
    description,
    intro: input.intro,
    coverImage: input.coverImage,
    category: input.category,
    tags: input.tags,
    seo: {
      seoTitle: input.seoTitle,
      metaDescription: input.metaDescription,
      keywords: input.keywords,
      canonical: input.canonical,
      ogImage: input.ogImage,
    },
    publishedAt: input.publishedAt,
    updatedAt: input.updatedAt,
    authorId: input.authorId ?? AXORA_TEAM_AUTHOR_ID,
    readingTime,
    popularScore: input.popularScore,
    featured: input.featured,
    content: input.sections,
    faq: input.faq,
    cta: input.cta,
  };
}
