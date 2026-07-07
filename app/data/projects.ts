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
      zh: "受託為語言教學品牌打造企業官網與課程展示系統，涵蓋分級課程、師資介紹、諮詢表單與後台名單管理，協助招生團隊集中追蹤潛在學員並縮短回覆時間。",
      en: "Delivered a language-school brand site and course showcase — level-based programs, faculty pages, inquiry forms, and a lead admin workspace so admissions can track prospects and respond faster.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
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
      zh: "正在開發的 AI 互動平台，整合對話引擎、使用者分群與後台話術管理，支援產品團隊驗證配對邏輯、留存流程與多情境回覆策略，作為後續商業化的技術基礎。",
      en: "AI interaction platform in active development — conversational engine, user segments, and admin playbooks to validate matching logic, retention flows, and multi-scenario replies before commercial rollout.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Vercel",
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
      zh: "AXORA 企業官網已上線，呈現 AI 與軟體開發服務、作品集導覽與中英雙語內容，並完成 SEO 結構、Open Graph 與效能優化，作為品牌對外與客戶洽詢的主要入口。",
      en: "AXORA corporate site in production — AI and software services, portfolio navigation, bilingual content, plus SEO structure, Open Graph, and performance tuning as the primary brand and inquiry entry point.",
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
      zh: "已交付的 AI 客戶管理系統，串接 OpenAI 與 LINE 官方帳號，集中潛客資料、對話摘要與銷售階段管理，讓業務與客服在同一後台完成指派、跟進與結案紀錄。",
      en: "Delivered AI customer management connecting OpenAI and LINE Official Account — lead records, conversation summaries, and pipeline stages in one back office for sales follow-up and case closure.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "LINE API",
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
      zh: "教育機構教師營運儀表板開發中，整合班級名單、出席紀錄、作業進度與學習表現摘要，並串接日曆檢視課表，減少教師每週行政整理與向家長回報的負擔。",
      en: "Teacher operations dashboard in build — class rosters, attendance, assignment progress, learning summaries, and calendar views to cut weekly admin and parent reporting overhead.",
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
      zh: "學員入口 Web App 概念規劃，預計提供課表查詢、作業繳交、學習紀錄與通知中心，讓學生與家長能隨時掌握課務進度，並與教師後台資料即時同步。",
      en: "Concept-stage student web app — schedules, assignment submission, learning history, and a notification hub so learners and parents stay aligned with teacher back-office data.",
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
      zh: "試聽課預約 Web App 開發中，串接 Google 日曆與視訊會議 API，完成時段選擇、Stripe 線上結帳與自動寄送會議連結，降低招生顧問人工排課與確認成本。",
      en: "Trial lesson booking web app in build — Google calendar and video APIs, slot selection, Stripe checkout, and automated meeting links to reduce manual scheduling for admissions teams.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Google APIs",
      "Vercel",
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
      zh: "創作者營運儀表板概念設計，規劃訂閱收入追蹤、內容表現分析、粉絲互動指標與方案管理模組，協助創作者與營運團隊掌握變現數據並完成收款對帳。",
      en: "Concept creator dashboard — subscription revenue, content analytics, audience engagement metrics, and plan management so creators and ops teams can track monetization and reconcile payouts.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Cloudflare",
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
      zh: "會員制 AI SaaS 平台概念，整合訂閱計費、用量控管與多模型對話服務，依方案分級開放 API 額度與進階工具，作為 B2C 或 B2B 訂閱產品的架構藍圖。",
      en: "Concept membership AI SaaS — subscription billing, usage controls, and multi-model conversations with tiered API quotas and tools as an architecture blueprint for B2C or B2B subscription products.",
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
      zh: "AI 生成內容展示平台概念，支援作品上傳、標籤分類、搜尋瀏覽與權限分級，可作為團隊內部作品庫或對外 Demo 站，展示生成流程與策展能力。",
      en: "Concept AI content gallery — uploads, tagging, search, and role-based access as an internal asset library or public demo showcasing generation workflows and curation.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Cloudflare",
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
      zh: "已上線的銷售管理儀表板，即時呈現漏斗轉換、業績目標達成率、團隊排行與商機預測圖表，協助業務主管在單一畫面掌握成交節奏並調整資源配置。",
      en: "Production sales dashboard — live funnel conversion, quota attainment, team rankings, and pipeline forecasting so revenue leaders adjust resources from a single view.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "OpenAI",
      "Vercel",
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
      zh: "客服中心系統開發中，整合 LINE 官方帳號訊息、AI 輔助回覆建議與工單狀態追蹤，讓客服人員在統一介面處理對話、指派案件並記錄結案原因。",
      en: "Customer service hub in build — LINE Official messaging, AI-assisted reply suggestions, and ticket tracking in one workspace for assignment, resolution, and closure notes.",
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
      zh: "企業專案協作 SaaS 概念，涵蓋任務分派、里程碑追蹤、檔案版本與跨部門留言，適合委外專案與內部產品開發團隊，建立可稽核的交付進度與責任歸屬。",
      en: "Concept enterprise project SaaS — task assignment, milestones, file versions, and cross-team comments for vendor and internal delivery with auditable progress and ownership.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Google APIs",
      "Vercel",
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
      zh: "餐廳營運 Web App 開發中，整合菜單管理、桌位狀態、點餐流程與 Stripe 線上付款，並可透過 LINE 通知取餐狀態，讓櫃台與廚房資訊即時同步。",
      en: "Restaurant operations web app in build — menus, table status, order flow, Stripe payments, and optional LINE pickup notifications keeping front-of-house and kitchen aligned.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Stripe",
      "LINE API",
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
      zh: "飯店訂房 Web App 概念，支援房型展示、即時空房查詢、訂單與金流處理，並串接 Google 日曆管理住房與清潔排程，作為旅宿業數位訂房的前端架構參考。",
      en: "Concept hotel booking web app — room showcases, live availability, orders and payments, plus Google calendar-driven stay and housekeeping schedules as a hospitality booking reference architecture.",
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
      zh: "醫療預約 Web App 開發中，提供科別掛號、醫師時段選擇、視訊問診連結與自動提醒通知，減少櫃台電話登記與人工確認，提升病患自助預約比例。",
      en: "Healthcare appointment web app in build — department booking, physician slots, televisit links, and automated reminders to raise self-service scheduling and ease front-desk load.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google APIs",
      "Cloudflare",
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
      zh: "工程專案管理 SaaS 概念，追蹤工地進度、材料清單、施工照片與驗收紀錄，方便監造單位與承包商在同一平台協作，降低 Excel 與通訊軟體分散管理風險。",
      en: "Concept construction project SaaS — site progress, materials, site photos, and inspection logs so owners and contractors collaborate without spreadsheet and chat fragmentation.",
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
      zh: "已交付的多租戶電商 SaaS，含商品目錄、購物車、Stripe 金流、訂單管理與庫存同步，支援品牌自有網域部署，可作為零售客戶快速上線的標準化基底。",
      en: "Delivered multi-tenant e-commerce SaaS — catalog, cart, Stripe payments, orders, and inventory sync on custom domains as a standardized retail launch foundation.",
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
      zh: "人資管理 SaaS 概念，涵蓋員工資料、出勤請假、薪資結構與招募流程模組，讓 HR 與部門主管在同一後台審批與查閱，建立可擴充的企業內部人事作業流程。",
      en: "Concept HR SaaS — employee records, attendance and leave, compensation structures, and hiring workflows so HR and managers approve and review from one expandable back office.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Google APIs",
      "Stripe",
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
      zh: "智慧工廠營運儀表板概念，彙整產線稼動、設備健康狀態、異常告警與產能趨勢圖表，協助製造端管理者即時掌握現場狀況並支援後續 IoT 資料串接擴充。",
      en: "Concept smart factory dashboard — line utilization, equipment health, anomaly alerts, and capacity trends with room to extend into IoT data feeds for shop-floor leaders.",
    },
    techTags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "OpenAI",
      "Cloudflare",
    ],
  },
];
