import type { LocalizedText } from "./case-studies";

export type ProjectDetail = {
  clientRequirements: LocalizedText;
  solution: LocalizedText;
  coreFeatures: LocalizedText[];
  projectResult: LocalizedText;
};

export const projectDetails: Record<string, ProjectDetail> = {
  "ashley-english": {
    clientRequirements: {
      zh: "語言培訓品牌需要現代化官網，集中展示分級課程、師資與諮詢表單，並讓招生團隊能追蹤每一筆潛在學員名單。",
      en: "The language-training brand needed a modern site to showcase tiered courses and faculty, capture inquiries, and let admissions track every prospect lead.",
    },
    solution: {
      zh: "AXORA 以 Next.js 建置響應式官網，整合 Supabase 後台管理課程內容、師資資料與諮詢表單，名單自動匯入追蹤流程。",
      en: "AXORA built a responsive Next.js site with Supabase admin for courses, faculty, and inquiry forms — leads flow straight into a tracking pipeline.",
    },
    coreFeatures: [
      { zh: "分級課程與師資介紹頁面", en: "Tiered course and faculty profile pages" },
      { zh: "線上諮詢表單與名單管理", en: "Online inquiry forms with lead management" },
      { zh: "中英雙語內容切換", en: "Bilingual zh/en content switching" },
      { zh: "SEO 優化與社群預覽設定", en: "SEO optimization and social preview meta" },
      { zh: "Cloudflare CDN 加速與 Vercel 部署", en: "Cloudflare CDN delivery on Vercel" },
    ],
    projectResult: {
      zh: "官網已正式上線，招生團隊可即時查看諮詢名單，品牌對外形象與轉換流程全面升級。",
      en: "Site is live — admissions tracks inquiries in real time with a polished brand presence and conversion flow.",
    },
  },

  onlymate: {
    clientRequirements: {
      zh: "團隊需要 AI 互動平台原型，驗證對話配對邏輯、使用者分群與留存設計，並能在上線前由營運後台調整話術與情境。",
      en: "The team needed an AI interaction prototype to validate matching logic, user segments, and retention — with an ops console to tune playbooks pre-launch.",
    },
    solution: {
      zh: "AXORA 搭建 OpenAI 驅動的對話引擎與分群模組，搭配營運後台管理話術模板、情境分支與 A/B 測試，支援快速迭代驗證。",
      en: "AXORA built an OpenAI-driven conversation engine with segmentation, an ops console for playbook templates, scenario branches, and A/B testing.",
    },
    coreFeatures: [
      { zh: "AI 對話流程與意圖分類引擎", en: "AI conversation flows with intent classification" },
      { zh: "使用者分群與行為標籤", en: "User segmentation and behavioral tagging" },
      { zh: "營運後台話術與情境管理", en: "Ops console for playbook and scenario management" },
      { zh: "留存指標儀表板與漏斗分析", en: "Retention dashboard and funnel analytics" },
      { zh: "A/B 測試框架支援快速迭代", en: "A/B testing framework for rapid iteration" },
    ],
    projectResult: {
      zh: "核心對話引擎與營運後台持續開發中，配對邏輯已通過內部驗證，準備進入封閉測試階段。",
      en: "Core conversation engine and ops console in active build — matching logic validated internally, closed beta next.",
    },
  },

  "ai-crm": {
    clientRequirements: {
      zh: "銷售團隊在 LINE 上處理大量客戶訊息，資料分散各處、跟進容易遺漏，需要統一後台整合對話、潛客與銷售階段管理。",
      en: "Sales handled high LINE volume with scattered data and missed follow-ups — they needed one back office for chats, leads, and pipeline stages.",
    },
    solution: {
      zh: "AXORA 打造 CRM 後台，串接 LINE Messaging API 與 OpenAI，集中客戶檔案、對話摘要、自動分派與銷售管道視覺化管理。",
      en: "AXORA delivered a CRM back office on LINE Messaging API and OpenAI — unified profiles, conversation summaries, routing, and visual pipeline management.",
    },
    coreFeatures: [
      { zh: "LINE 對話同步至客戶檔案", en: "LINE chats synced to customer profiles" },
      { zh: "OpenAI 對話摘要與意圖分類", en: "OpenAI conversation summaries and intent classification" },
      { zh: "銷售管道與成交階段管理", en: "Pipeline and deal stage management" },
      { zh: "跟進提醒與團隊任務分派", en: "Follow-up reminders and team task assignment" },
      { zh: "潛客名單匯入與標籤篩選", en: "Lead import and tag-based filtering" },
    ],
    projectResult: {
      zh: "CRM 系統已完成交付上線，銷售團隊可在單一後台管理 LINE 對話與成交進度，跨工具查資料的情況大幅減少。",
      en: "CRM delivered and live — sales manages LINE conversations and deal progress in one back office, cutting cross-tool lookups.",
    },
  },

  "huaren-tong": {
    clientRequirements: {
      zh: "南加州華人社群需要可信賴的本地專家媒合平台，涵蓋稅務、房地產、移民、房貸、保險與居家服務，並支援城市指南、工作機會與租屋資訊。",
      en: "The Chinese community in Southern California needed a trusted local expert marketplace — tax, real estate, immigration, mortgage, insurance, and home services with city guides, jobs, and rentals.",
    },
    solution: {
      zh: "AXORA 建置華人通平台官網，整合分類搜尋、城市與服務篩選、專家列表與需求發布功能，並串接 LINE 洽詢入口，方便用戶快速找到合適專家。",
      en: "AXORA built the HuarenTong platform with category search, city and service filters, expert listings, request posting, and LINE inquiry integration for faster expert matching.",
    },
    coreFeatures: [
      { zh: "專業服務分類搜尋與城市篩選", en: "Professional service category search with city filters" },
      { zh: "會計、房仲、移民、房貸等專家列表", en: "Expert listings for accounting, real estate, immigration, and mortgage" },
      { zh: "城市指南、工作機會與租屋資訊", en: "City guides, job opportunities, and rental listings" },
      { zh: "需求發布與專家媒合流程", en: "Request posting and expert matching workflow" },
      { zh: "LINE 洽詢整合與中英雙語介面", en: "LINE inquiry integration with bilingual zh/en interface" },
    ],
    projectResult: {
      zh: "華人通平台已正式上線，華人社群可透過分類搜尋快速找到本地專家，一站式服務入口完整就緒。",
      en: "HuarenTong is live — the community finds local experts through category search with a complete one-stop service entry point.",
    },
  },

  "zhongzhi-studio": {
    clientRequirements: {
      zh: "影像製作工作室需要專業品牌官網，呈現動態影像、品牌影片與 VR 體驗服務，並提供作品集展示與 LINE 洽詢入口，強化對外形象。",
      en: "The video production studio needed a professional brand site showcasing motion graphics, brand films, and VR experiences with portfolio display and LINE inquiry.",
    },
    solution: {
      zh: "AXORA 以 Next.js 建置中執影像工作室官網，整合作品集、服務項目、關於我們與聯絡頁面，並嵌入 LINE 洽詢按鈕，讓潛在客戶快速聯繫。",
      en: "AXORA built the Zhongzhi Studio site on Next.js — portfolio, services, about, and contact pages with embedded LINE inquiry for fast client outreach.",
    },
    coreFeatures: [
      { zh: "動態影像與品牌影片作品集展示", en: "Motion graphics and brand film portfolio showcase" },
      { zh: "VR 體驗與視覺製作服務介紹", en: "VR experience and visual production service pages" },
      { zh: "響應式設計與沉浸式 Hero 視覺", en: "Responsive design with immersive hero visuals" },
      { zh: "LINE 洽詢整合與聯絡表單", en: "LINE inquiry integration and contact forms" },
      { zh: "SEO 優化與 Cloudflare 部署", en: "SEO optimization and Cloudflare deployment" },
    ],
    projectResult: {
      zh: "工作室官網已正式上線，品牌對外形象與作品展示完整呈現，客戶可透過 LINE 快速洽詢合作。",
      en: "Studio site is live — brand presence and portfolio fully presented, clients can inquire via LINE quickly.",
    },
  },
};

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}
