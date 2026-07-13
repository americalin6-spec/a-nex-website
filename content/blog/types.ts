export const BLOG_CATEGORIES = [
  "AI CRM",
  "LINE OA",
  "Website Development",
  "SEO",
  "AI Agent",
  "SaaS",
  "CRM",
  "Case Study",
  "FAQ",
  "News",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_TAGS = [
  "AI",
  "CRM",
  "LINE",
  "Next.js",
  "React",
  "TypeScript",
  "Automation",
  "ERP",
  "API",
  "OpenAI",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export type BlogAuthor = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogCta = {
  title: string;
  description: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  /** 2 = H2, 3 = H3 */
  level: 2 | 3;
  paragraphs: string[];
};

export type BlogPostSeo = {
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: `/${string}`;
  ogImage: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  /** Display H1 */
  title: string;
  /** Short summary / card excerpt */
  description: string;
  /** Article intro / 前言 */
  intro: string;
  coverImage: string;
  category: BlogCategory;
  tags: BlogTag[];
  seo: BlogPostSeo;
  publishedAt: string;
  updatedAt: string;
  authorId: string;
  /** Cached reading time; prefer getReadingTimeMinutes() */
  readingTime: number;
  /** Higher = more popular for Popular Posts sorting */
  popularScore: number;
  featured?: boolean;
  content: BlogSection[];
  faq: BlogFaqItem[];
  cta: BlogCta;
};
