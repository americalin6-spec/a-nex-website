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
    "website-development",
    "seo-guide",
    "line-oa-guide",
  ],
  onlymate: ["ai-agent", "ai-crm-guide", "website-development"],
  "ai-crm": ["ai-crm-guide", "line-oa-guide", "ai-agent"],
  "huaren-tong": [
    "line-oa-guide",
    "website-development",
    "seo-guide",
  ],
  "zhongzhi-studio": [
    "website-development",
    "seo-guide",
    "line-oa-guide",
  ],
};

const blogCategoryToServices: Record<BlogCategory, ServiceSlug[]> = {
  "AI CRM": ["ai-crm", "crm-system", "line-oa"],
  "LINE OA": ["line-oa", "ai-crm", "ai-customer-service"],
  "Website Development": ["web-design", "saas-development", "app-development"],
  SEO: ["web-design", "saas-development", "crm-system"],
  "AI Agent": ["ai-automation", "ai-crm", "ai-customer-service"],
  SaaS: ["saas-development", "ai-automation", "web-design"],
  CRM: ["crm-system", "ai-crm", "line-oa"],
  "Case Study": ["web-design", "ai-crm", "saas-development"],
  FAQ: ["web-design", "ai-crm", "line-oa"],
  News: ["web-design", "saas-development", "ai-crm"],
};

const blogCategoryToProjects: Record<BlogCategory, string[]> = {
  "AI CRM": ["ai-crm", "onlymate", "ashley-english"],
  "LINE OA": ["ai-crm", "huaren-tong", "zhongzhi-studio"],
  "Website Development": ["ashley-english", "zhongzhi-studio", "huaren-tong"],
  SEO: ["ashley-english", "zhongzhi-studio", "huaren-tong"],
  "AI Agent": ["ai-crm", "onlymate", "ashley-english"],
  SaaS: ["onlymate", "huaren-tong", "ai-crm"],
  CRM: ["ai-crm", "ashley-english", "huaren-tong"],
  "Case Study": ["ashley-english", "ai-crm", "huaren-tong"],
  FAQ: ["ashley-english", "zhongzhi-studio", "huaren-tong"],
  News: ["ashley-english", "ai-crm", "onlymate"],
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
