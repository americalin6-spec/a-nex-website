export const BLOG_CATEGORIES = [
  "AI",
  "CRM",
  "LINE OA",
  "網站開發",
  "APP",
  "SEO",
  "SaaS",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: BlogCategory;
  tags: string[];
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: number;
  featured?: boolean;
  content: BlogSection[];
};
