import type {
  BlogCategory,
  BlogPost,
} from "@/app/data/blog-posts";
import {
  blogPosts,
  getLatestBlogPosts,
} from "@/app/data/blog-posts";
import { getProjectById, type Project } from "@/app/data/projects";

export type ServiceSlug =
  | "ai-crm"
  | "ai-customer-service"
  | "crm-system"
  | "line-oa"
  | "saas-development"
  | "ai-automation"
  | "app-development"
  | "web-design";

export type ServiceLink = {
  slug: ServiceSlug;
  name: string;
  href: `/services/${ServiceSlug}`;
  shortName: string;
};

export const SERVICE_LINKS: ServiceLink[] = [
  {
    slug: "ai-crm",
    name: "AI客戶管理系統",
    shortName: "AI CRM",
    href: "/services/ai-crm",
  },
  {
    slug: "ai-customer-service",
    name: "AI客服系統",
    shortName: "AI客服",
    href: "/services/ai-customer-service",
  },
  {
    slug: "crm-system",
    name: "CRM客戶管理系統",
    shortName: "CRM",
    href: "/services/crm-system",
  },
  {
    slug: "line-oa",
    name: "LINE官方帳號整合",
    shortName: "LINE OA",
    href: "/services/line-oa",
  },
  {
    slug: "saas-development",
    name: "SaaS平台開發",
    shortName: "SaaS",
    href: "/services/saas-development",
  },
  {
    slug: "ai-automation",
    name: "AI自動化系統",
    shortName: "AI自動化",
    href: "/services/ai-automation",
  },
  {
    slug: "app-development",
    name: "APP開發",
    shortName: "APP",
    href: "/services/app-development",
  },
  {
    slug: "web-design",
    name: "網站設計",
    shortName: "Website",
    href: "/services/web-design",
  },
];

const serviceToProjects: Record<ServiceSlug, string[]> = {
  "ai-crm": ["ai-crm", "onlymate", "ashley-english"],
  "ai-customer-service": ["ai-crm", "onlymate", "huaren-tong"],
  "crm-system": ["ai-crm", "ashley-english", "huaren-tong"],
  "line-oa": ["ai-crm", "huaren-tong", "zhongzhi-studio"],
  "saas-development": ["onlymate", "huaren-tong", "ai-crm"],
  "ai-automation": ["ai-crm", "onlymate", "ashley-english"],
  "app-development": ["onlymate", "huaren-tong", "ai-crm"],
  "web-design": ["ashley-english", "zhongzhi-studio", "huaren-tong"],
};

const projectToServices: Record<string, ServiceSlug[]> = {
  "ashley-english": ["web-design", "crm-system", "saas-development"],
  onlymate: ["ai-crm", "ai-automation", "saas-development"],
  "ai-crm": ["ai-crm", "crm-system", "line-oa"],
  "huaren-tong": ["web-design", "line-oa", "saas-development"],
  "zhongzhi-studio": ["web-design", "line-oa", "app-development"],
};

const projectToArticles: Record<string, string[]> = {
  "ashley-english": [
    "corporate-website-seo-structure",
    "custom-web-development-process",
    "saas-mvp-checklist",
  ],
  onlymate: [
    "ai-automation-for-operations",
    "ai-crm-improve-conversion",
    "saas-pricing-and-retention",
  ],
  "ai-crm": [
    "ai-crm-improve-conversion",
    "line-oa-crm-integration",
    "crm-pipeline-for-sme",
  ],
  "huaren-tong": [
    "line-oa-auto-reply-best-practices",
    "custom-web-development-process",
    "saas-mvp-checklist",
  ],
  "zhongzhi-studio": [
    "custom-web-development-process",
    "corporate-website-seo-structure",
    "line-oa-auto-reply-best-practices",
  ],
};

const blogCategoryToServices: Record<BlogCategory, ServiceSlug[]> = {
  AI: ["ai-crm", "ai-automation", "ai-customer-service"],
  CRM: ["crm-system", "ai-crm", "line-oa"],
  "LINE OA": ["line-oa", "ai-crm", "ai-customer-service"],
  網站開發: ["web-design", "saas-development", "app-development"],
  APP: ["app-development", "saas-development", "web-design"],
  SEO: ["web-design", "saas-development", "crm-system"],
  SaaS: ["saas-development", "ai-automation", "web-design"],
};

const blogCategoryToProjects: Record<BlogCategory, string[]> = {
  AI: ["ai-crm", "onlymate", "ashley-english"],
  CRM: ["ai-crm", "ashley-english", "huaren-tong"],
  "LINE OA": ["ai-crm", "huaren-tong", "zhongzhi-studio"],
  網站開發: ["ashley-english", "zhongzhi-studio", "huaren-tong"],
  APP: ["onlymate", "huaren-tong", "ai-crm"],
  SEO: ["ashley-english", "zhongzhi-studio", "huaren-tong"],
  SaaS: ["onlymate", "huaren-tong", "ai-crm"],
};

function resolveProjects(ids: string[], limit = 3): Project[] {
  return ids
    .map((id) => getProjectById(id))
    .filter((project): project is Project => Boolean(project))
    .slice(0, limit);
}

function resolveServices(slugs: ServiceSlug[], limit = 5): ServiceLink[] {
  return slugs
    .map((slug) => SERVICE_LINKS.find((service) => service.slug === slug))
    .filter((service): service is ServiceLink => Boolean(service))
    .slice(0, limit);
}

function resolveArticles(slugs: string[], limit = 3): BlogPost[] {
  return slugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => Boolean(post))
    .slice(0, limit);
}

export function getRelatedProjectsForService(
  slug: ServiceSlug,
  limit = 3,
): Project[] {
  return resolveProjects(serviceToProjects[slug] ?? [], limit);
}

export function getRelatedServicesForProject(
  projectId: string,
  limit = 5,
): ServiceLink[] {
  return resolveServices(projectToServices[projectId] ?? [], limit);
}

export function getRelatedArticlesForProject(
  projectId: string,
  limit = 3,
): BlogPost[] {
  return resolveArticles(projectToArticles[projectId] ?? [], limit);
}

export function getRelatedServicesForBlog(
  category: BlogCategory,
  limit = 4,
): ServiceLink[] {
  return resolveServices(blogCategoryToServices[category] ?? [], limit);
}

export function getRelatedProjectsForBlog(
  category: BlogCategory,
  limit = 3,
): Project[] {
  return resolveProjects(blogCategoryToProjects[category] ?? [], limit);
}

export function getLatestArticles(excludeSlug?: string, limit = 3): BlogPost[] {
  return getLatestBlogPosts()
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit);
}

export function getAdjacentBlogPosts(slug: string) {
  const ordered = getLatestBlogPosts();
  const index = ordered.findIndex((post) => post.slug === slug);
  if (index < 0) {
    return { previous: null, next: null };
  }

  return {
    previous: index < ordered.length - 1 ? ordered[index + 1] : null,
    next: index > 0 ? ordered[index - 1] : null,
  };
}
