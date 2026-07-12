import type { LocalizedText } from "./case-studies";

export type ProjectStatus = "Completed" | "In Development" | "Concept";

export type ProjectYear = "2026" | "2025" | "Concept";

export type ProjectPlatform =
  | "Web"
  | "Web App"
  | "SaaS"
  | "AI Platform"
  | "CRM"
  | "Dashboard"
  | "LINE"
  | "Mobile";

export type ProjectIndustry =
  | "Education"
  | "AI"
  | "Healthcare"
  | "Restaurant"
  | "Construction"
  | "Retail"
  | "CRM"
  | "Enterprise";

/** Canonical tag order for portfolio display */
export const PROJECT_TECH_TAG_ORDER = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "OpenAI",
  "Stripe",
  "Google APIs",
  "LINE API",
  "Cloudflare",
  "Vercel",
] as const;

export type ProjectTechTag = (typeof PROJECT_TECH_TAG_ORDER)[number];

export type Project = {
  id: string;
  name: string;
  category: string;
  industry: ProjectIndustry;
  status: ProjectStatus;
  year: ProjectYear;
  platform: ProjectPlatform;
  coverImage: string;
  overview: LocalizedText;
  techTags: ProjectTechTag[];
};

export const projects: Project[] = [
  {
    id: "ashley-english",
    name: "Ashley English",
    category: "Education",
    industry: "Education",
    status: "Completed",
    year: "2025",
    platform: "Web",
    coverImage: "/projects/ashley-english.png",
    overview: {
      zh: "為 Ashley English 建置語言培訓官網：分級課程、師資介紹、諮詢表單與招生名單後台，讓潛在學員與招生顧問在同一套系統完成轉換與追蹤。",
      en: "Built the Ashley English training site: tiered courses, faculty pages, inquiry forms, and admissions lead admin so prospects and advisors convert and track in one system.",
    },
    techTags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "onlymate",
    name: "OnlyMate",
    category: "AI Platform",
    industry: "AI",
    status: "In Development",
    year: "2026",
    platform: "AI Platform",
    coverImage: "/projects/onlymate.png",
    overview: {
      zh: "OnlyMate AI 互動平台（開發中）：對話流程、使用者分群與營運後台話術管理，讓團隊在上線前就能驗證配對邏輯與留存設計。",
      en: "OnlyMate AI interaction platform (in development): conversation flows, user segments, and ops playbook admin so the team can validate matching and retention before launch.",
    },
    techTags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    id: "ai-crm",
    name: "AI CRM",
    category: "CRM",
    industry: "CRM",
    status: "Completed",
    year: "2025",
    platform: "CRM",
    coverImage: "/projects/ai-crm.png",
    overview: {
      zh: "已交付的 AI CRM：串接 LINE 官方帳號與 OpenAI，把潛客、對話摘要與銷售階段放進同一後台，減少業務跨工具查資料與漏跟。",
      en: "Delivered AI CRM connecting LINE Official Account and OpenAI — leads, conversation summaries, and pipeline stages in one back office so sales stops hopping tools and missing follow-ups.",
    },
    techTags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "LINE API",
      "Vercel",
    ],
  },
  {
    id: "huaren-tong",
    name: "HuarenTong",
    category: "Platform",
    industry: "Enterprise",
    status: "Completed",
    year: "2025",
    platform: "Web",
    coverImage: "/projects/huaren-tong.png",
    overview: {
      zh: "華人通：南加州華人社群一站式專業服務平台，整合會計、房仲、移民、房貸、保險與居家服務搜尋，並支援城市指南、工作與租屋資訊。",
      en: "HuarenTong: a one-stop professional services platform for the Southern California Chinese community — accountants, agents, immigration, mortgage, insurance, and home services with city guides, jobs, and rentals.",
    },
    techTags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "LINE API",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "zhongzhi-studio",
    name: "Zhongzhi Studio",
    category: "Corporate Website",
    industry: "Enterprise",
    status: "Completed",
    year: "2025",
    platform: "Web",
    coverImage: "/projects/zhongzhi-studio.png",
    overview: {
      zh: "中執影像工作室品牌官網：呈現動態影像、品牌影片與 VR 作品，整合作品集、服務介紹與 LINE 洽詢，強化對外專業形象。",
      en: "Zhongzhi Studio brand site: motion graphics, brand films, and VR work with portfolio, services, and LINE inquiry to strengthen the studio's professional presence.",
    },
    techTags: [
      "Next.js",
      "React",
      "TypeScript",
      "Cloudflare",
      "Vercel",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getAdjacentProjects(id: string) {
  const index = projects.findIndex((project) => project.id === id);
  if (index < 0) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
