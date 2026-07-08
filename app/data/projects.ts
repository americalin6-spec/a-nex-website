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
    coverImage: "/projects/ashley-english.jpg",
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
    coverImage: "/projects/onlymate.jpg",
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
    id: "axora-website",
    name: "AXORA Website",
    category: "Corporate Website",
    industry: "Enterprise",
    status: "Completed",
    year: "2026",
    platform: "Web",
    coverImage: "/projects/axora-website.jpg",
    overview: {
      zh: "AXORA 企業官網，完整呈現 AI 與軟體委託服務、案例作品集與中英雙語內容，並完成 SEO、社群預覽與正式環境部署，作為品牌對外主要窗口。",
      en: "AXORA corporate site in production — AI and software services, portfolio, bilingual content, SEO and social previews, deployed as the main public entry point.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare",
      "Vercel",
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
    coverImage: "/projects/ai-crm.jpg",
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
    id: "teacher-dashboard",
    name: "Teacher Dashboard",
    category: "Education",
    industry: "Education",
    status: "In Development",
    year: "2026",
    platform: "Dashboard",
    coverImage: "/projects/teacher-dashboard.jpg",
    overview: {
      zh: "教師端營運儀表板開發中，整理班級名單、出席、作業與學習表現，並串接課表日曆，讓教師把時間花在教學而非每週人工彙整報表。",
      en: "Teacher operations dashboard in build — rosters, attendance, assignments, learning summaries, and calendar views so educators spend less time on weekly admin reports.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google APIs",
      "Vercel",
    ],
  },
  {
    id: "student-portal",
    name: "Student Portal",
    category: "Education",
    industry: "Education",
    status: "Concept",
    year: "Concept",
    platform: "Web App",
    coverImage: "/projects/student-portal.jpg",
    overview: {
      zh: "學員入口網站的概念方案，規劃課表、作業繳交、學習紀錄與通知中心，讓學生與家長隨時掌握課務，資料與教師後台保持同步。",
      en: "Concept student portal — schedules, assignment submission, learning history, and notifications so learners and parents stay current while syncing with teacher back-office data.",
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
    id: "trial-lesson-booking",
    name: "Trial Lesson Booking",
    category: "Booking",
    industry: "Education",
    status: "In Development",
    year: "2026",
    platform: "Web App",
    coverImage: "/projects/trial-lesson-booking.jpg",
    overview: {
      zh: "試聽課預約系統開發中，結合 Google 日曆、視訊會議與 Stripe 付款，學員選完時段即可完成結帳並收到會議連結，減少顧問人工排課。",
      en: "Trial lesson booking in build — Google calendar, video meetings, and Stripe checkout so learners book, pay, and receive meeting links without manual scheduling.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Google APIs",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    id: "creator-dashboard",
    name: "Creator Dashboard",
    category: "Creator Platform",
    industry: "Enterprise",
    status: "Concept",
    year: "Concept",
    platform: "Dashboard",
    coverImage: "/projects/creator-dashboard.jpg",
    overview: {
      zh: "創作者營運儀表板的概念設計，聚焦訂閱收入、內容表現與受眾互動，並保留方案管理與對帳模組，方便小型創作團隊掌握變現狀況。",
      en: "Concept creator dashboard focused on subscription revenue, content performance, and audience engagement — plans and payout reconciliation for small creator teams.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "ai-membership-platform",
    name: "AI Membership Platform",
    category: "Membership",
    industry: "AI",
    status: "Concept",
    year: "Concept",
    platform: "SaaS",
    coverImage: "/projects/ai-membership-platform.jpg",
    overview: {
      zh: "會員制 AI 平台的架構規劃，涵蓋訂閱計費、用量控管與多模型服務，依方案開放不同 API 額度，適合準備推出訂閱制 AI 產品的團隊參考。",
      en: "Concept membership AI platform — subscription billing, usage controls, and multi-model access with tiered API quotas for teams preparing a subscription AI product.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
      "Vercel",
    ],
  },
  {
    id: "ai-gallery",
    name: "AI Gallery",
    category: "AI Platform",
    industry: "AI",
    status: "Concept",
    year: "Concept",
    platform: "AI Platform",
    coverImage: "/projects/ai-gallery.jpg",
    overview: {
      zh: "AI 作品展示平台的概念原型，支援上傳、標籤、搜尋與權限分級，可作為內部作品庫或對外 Demo，呈現生成流程與策展方式。",
      en: "Concept AI gallery — uploads, tags, search, and role-based access as an internal library or public demo of generation workflows and curation.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "sales-dashboard",
    name: "Sales Dashboard",
    category: "CRM",
    industry: "CRM",
    status: "Completed",
    year: "2025",
    platform: "Dashboard",
    coverImage: "/projects/sales-dashboard.jpg",
    overview: {
      zh: "銷售儀表板已上線，彙整漏斗、業績目標、團隊表現與商機預測，主管可在單一畫面判斷本季節奏，不必再從多份試算表拼資料。",
      en: "Production sales dashboard — funnel, quota attainment, team performance, and pipeline forecasting in one view so leaders read the quarter without stitching spreadsheets.",
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
    id: "customer-service-center",
    name: "Customer Service Center",
    category: "CRM",
    industry: "CRM",
    status: "In Development",
    year: "2026",
    platform: "LINE",
    coverImage: "/projects/customer-service-center.jpg",
    overview: {
      zh: "客服中心系統開發中，整合 LINE 訊息、AI 回覆建議與工單追蹤，客服在同一介面接案、結案並留下紀錄，縮短首次回應時間。",
      en: "Customer service hub in build — LINE messaging, AI reply suggestions, and ticket tracking in one workspace for faster first response and documented closure.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "LINE API",
      "Cloudflare",
    ],
  },
  {
    id: "project-management-platform",
    name: "Project Management Platform",
    category: "Business",
    industry: "Enterprise",
    status: "Concept",
    year: "Concept",
    platform: "SaaS",
    coverImage: "/projects/project-management-platform.jpg",
    overview: {
      zh: "企業專案協作平台的概念方案，涵蓋任務、里程碑、檔案版本與留言討論，適合跨部門委外案與內部產品研發並行管理。",
      en: "Concept project collaboration SaaS — tasks, milestones, file versions, and team comments for vendor work and internal product development in parallel.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Google APIs",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    id: "restaurant-management-system",
    name: "Restaurant Management System",
    category: "Restaurant",
    industry: "Restaurant",
    status: "In Development",
    year: "2026",
    platform: "Web App",
    coverImage: "/projects/restaurant-management-system.jpg",
    overview: {
      zh: "餐廳營運系統開發中，處理菜單、桌位、點餐與線上付款，並可透過 LINE 推送取餐狀態，讓櫃台與廚房看到的訂單資訊一致。",
      en: "Restaurant operations web app in build — menus, tables, ordering, Stripe payments, and LINE pickup updates so front-of-house and kitchen see the same orders.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "LINE API",
      "Vercel",
    ],
  },
  {
    id: "hotel-booking-platform",
    name: "Hotel Booking Platform",
    category: "Hospitality",
    industry: "Retail",
    status: "Concept",
    year: "Concept",
    platform: "Web App",
    coverImage: "/projects/hotel-booking-platform.jpg",
    overview: {
      zh: "飯店訂房平台的概念架構，包含房型展示、空房查詢、訂單金流與住房排程，作為旅宿業自建訂房前台時的參考實作方向。",
      en: "Concept hotel booking architecture — room showcases, availability, payments, and stay scheduling as a reference front-end for hospitality brands building their own channel.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Google APIs",
      "Vercel",
    ],
  },
  {
    id: "healthcare-appointment-system",
    name: "Healthcare Appointment System",
    category: "Healthcare",
    industry: "Healthcare",
    status: "In Development",
    year: "2026",
    platform: "Web App",
    coverImage: "/projects/healthcare-appointment-system.jpg",
    overview: {
      zh: "醫療預約系統開發中，支援科別掛號、醫師時段、視訊問診與提醒通知，讓病患可自行完成預約，櫃台電話量得以下降。",
      en: "Healthcare appointment system in build — department booking, physician slots, televisit links, and reminders so patients self-schedule and front-desk phone load drops.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google APIs",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "construction-management-platform",
    name: "Construction Management Platform",
    category: "Construction",
    industry: "Construction",
    status: "Concept",
    year: "Concept",
    platform: "SaaS",
    coverImage: "/projects/construction-management-platform.jpg",
    overview: {
      zh: "工程管理平台的概念設計，記錄工地進度、材料、照片與驗收項目，監造與承包方在同一系統更新，減少通訊軟體散落的重要資訊。",
      en: "Concept construction management platform — site progress, materials, photos, and inspection items updated by owners and contractors in one system instead of scattered chat threads.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Cloudflare",
      "Vercel",
    ],
  },
  {
    id: "e-commerce-platform",
    name: "E-Commerce Platform",
    category: "E-Commerce",
    industry: "Retail",
    status: "Completed",
    year: "2025",
    platform: "SaaS",
    coverImage: "/projects/e-commerce-platform.jpg",
    overview: {
      zh: "多租戶電商 SaaS 已交付，提供商品、購物車、Stripe 金流、訂單與庫存模組，客戶可在自有網域快速上架，縮短零售品牌導入時間。",
      en: "Delivered multi-tenant e-commerce SaaS — catalog, cart, Stripe payments, orders, and inventory on custom domains so retail brands launch faster.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    id: "hr-management-system",
    name: "HR Management System",
    category: "HR",
    industry: "Enterprise",
    status: "Concept",
    year: "Concept",
    platform: "SaaS",
    coverImage: "/projects/hr-management-system.jpg",
    overview: {
      zh: "人資管理系統的概念規劃，涵蓋員工檔案、出勤請假、薪資結構與招募流程，HR 與主管在同一後台簽核，避免人事資料分散各處。",
      en: "Concept HR SaaS — employee records, attendance and leave, compensation, and hiring workflows with HR and managers approving from one back office.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Google APIs",
      "Stripe",
      "Cloudflare",
    ],
  },
  {
    id: "smart-factory-dashboard",
    name: "Smart Factory Dashboard",
    category: "Manufacturing",
    industry: "Enterprise",
    status: "Concept",
    year: "Concept",
    platform: "Dashboard",
    coverImage: "/projects/smart-factory-dashboard.jpg",
    overview: {
      zh: "智慧工廠儀表板的概念方案，彙整產線稼動、設備狀態與異常警示，為製造業現場管理預留 IoT 資料接入空間，方便後續擴充。",
      en: "Concept smart factory dashboard — line utilization, equipment health, and anomaly alerts with headroom for IoT feeds as shop-floor visibility expands.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "OpenAI",
      "Cloudflare",
      "Vercel",
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
