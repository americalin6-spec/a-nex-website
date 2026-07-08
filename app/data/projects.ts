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
      zh: "為語言培訓品牌建置官網與課程展示系統，整合師資介紹、分級課程與諮詢表單，並連動後台名單管理，協助招生團隊追蹤每一位潛在學員。",
      en: "Built a language-training brand site with course showcases, faculty pages, and inquiry forms tied to a lead admin — admissions tracks every prospect in one place.",
    },
    techTags: [
      "Next.js",
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
      zh: "AI 互動平台開發中，以對話流程與使用者分群為核心，搭配營運後台調整話術與情境，讓團隊在上線前就能驗證配對邏輯與留存設計。",
      en: "AI interaction platform in active development — conversation flows, user segments, and an ops console to tune playbooks before launch and validate retention design.",
    },
    techTags: [
      "Next.js",
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
      zh: "已完成交付的 CRM 系統，串接 OpenAI 與 LINE 官方帳號，將潛客資料、對話摘要與銷售階段集中在同一後台，減少業務跨工具查資料的情況。",
      en: "Delivered CRM connecting OpenAI and LINE Official Account — leads, conversation summaries, and pipeline stages in one back office so sales stops hopping between tools.",
    },
    techTags: [
      "Next.js",
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
      zh: "為南加州華人社群打造的一站式專業服務平台，整合會計、房仲、移民、房貸、保險與居家服務等分類搜尋，並支援城市指南、工作機會與租屋資訊查詢。",
      en: "Built a one-stop professional services platform for the Chinese community in Southern California — search accountants, agents, immigration, mortgage, insurance, and home services with city guides and listings.",
    },
    techTags: [
      "Next.js",
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
      zh: "為影像製作工作室建置品牌官網，呈現動態影像、品牌影片與 VR 體驗服務，整合作品集展示、服務介紹與 LINE 洽詢入口，強化對外專業形象。",
      en: "Built a brand site for a video production studio — motion graphics, brand films, and VR experiences with portfolio showcase, service pages, and LINE inquiry integration.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Cloudflare",
      "Vercel",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
