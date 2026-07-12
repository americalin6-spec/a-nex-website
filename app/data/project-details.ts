import type { LocalizedText } from "./case-studies";

export type ProjectDetail = {
  /** Extended background for the Overview section */
  background: LocalizedText;
  clientRequirements: LocalizedText;
  solution: LocalizedText;
  coreFeatures: LocalizedText[];
  results: LocalizedText[];
  projectResult: LocalizedText;
  galleryImages: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "ashley-english": {
    background: {
      zh: "Ashley English 是語言培訓品牌，對外需要同時呈現分級課程、師資專業與諮詢入口。招生顧問每天處理大量潛在學員詢問，卻缺少統一的官網與名單後台，導致課程資訊更新慢、諮詢紀錄分散。",
      en: "Ashley English is a language-training brand that needed one place for tiered courses, faculty credibility, and inquiry intake. Admissions handled high prospect volume without a unified site and lead admin, so content updates lagged and inquiry records stayed scattered.",
    },
    clientRequirements: {
      zh: "客戶要求：一、現代化響應式官網；二、可清楚展示分級課程與師資；三、諮詢表單可直接進入招生追蹤；四、支援中英內容；五、上線後行銷／招生團隊能自行更新內容。",
      en: "Requirements: a modern responsive site; clear tiered course and faculty pages; inquiry forms that feed admissions tracking; bilingual content; and self-serve content updates for marketing and admissions after launch.",
    },
    solution: {
      zh: "AXORA 以 Next.js + TypeScript 建置官網，並用 Supabase／PostgreSQL 管理課程、師資與諮詢名單。表單送出後寫入後台追蹤流程，部署於 Vercel，並透過 Cloudflare 加速與基礎 SEO／社群預覽設定完成上線。",
      en: "AXORA built the site on Next.js and TypeScript, with Supabase/PostgreSQL for courses, faculty, and inquiry leads. Form submissions enter an admissions tracking flow, deployed on Vercel with Cloudflare delivery plus foundational SEO and social previews.",
    },
    coreFeatures: [
      { zh: "分級課程頁與師資介紹，對應招生實際話術", en: "Tiered course and faculty pages aligned to admissions messaging" },
      { zh: "線上諮詢表單寫入後台名單，避免訊息散落", en: "Inquiry forms that write into lead admin instead of scattered chats" },
      { zh: "中英雙語內容切換，服務不同學員族群", en: "Bilingual zh/en content for different learner segments" },
      { zh: "基礎 SEO 與 Open Graph，利於分享與索引", en: "Foundational SEO and Open Graph for sharing and indexing" },
      { zh: "Vercel 部署 + Cloudflare CDN，穩定對外服務", en: "Vercel deploy with Cloudflare CDN for stable public delivery" },
    ],
    results: [
      { zh: "招生諮詢改由官網統一收集，減少漏接", en: "Admissions inquiries collected in one place with fewer missed leads" },
      { zh: "課程與師資可由後台更新，不用每次改版", en: "Courses and faculty updateable without a full redesign each time" },
      { zh: "品牌對外形象與轉換路徑一次到位", en: "Brand presence and conversion path delivered together" },
      { zh: "專案已完成並正式上線營運", en: "Project completed and live in production" },
    ],
    projectResult: {
      zh: "Ashley English 官網已上線。招生團隊可在後台查看諮詢名單，對外以統一品牌頁面承接潛在學員，課程與師資資訊也能持續更新。",
      en: "The Ashley English site is live. Admissions reviews inquiry leads in admin, prospects land on a consistent brand site, and course/faculty content can keep evolving.",
    },
    galleryImages: ["/projects/ashley-english.png"],
  },

  onlymate: {
    background: {
      zh: "OnlyMate 是 AI 互動／配對產品，團隊需要在正式上線前反覆驗證對話流程、使用者分群與留存假設。若把話術與情境寫死在程式裡，每次調整都要重部署，營運無法快速實驗。",
      en: "OnlyMate is an AI interaction/matching product. Before launch the team needed to validate conversation flows, segments, and retention hypotheses. Hard-coding playbooks forced redeploys for every change and blocked fast ops experiments.",
    },
    clientRequirements: {
      zh: "需要可調的對話引擎與營運後台：能設定話術模板、情境分支、使用者分群，並觀察留存與漏斗；同時保留 A/B 測試空間，讓產品與營運在封閉測試前就能迭代。",
      en: "They needed a tunable conversation engine and ops console: playbook templates, scenario branches, user segments, retention/funnel visibility, and room for A/B tests so product and ops could iterate before closed beta.",
    },
    solution: {
      zh: "AXORA 以 Next.js／TypeScript／Supabase 建置平台骨架，串接 OpenAI 作為對話與意圖處理核心，並提供營運後台管理話術、分群與情境。部署於 Vercel，搭配 Cloudflare，方便持續發版驗證。",
      en: "AXORA built the platform skeleton on Next.js, TypeScript, and Supabase, with OpenAI powering conversation and intent handling, plus an ops console for playbooks, segments, and scenarios — deployed on Vercel with Cloudflare for continuous release cycles.",
    },
    coreFeatures: [
      { zh: "OpenAI 驅動的對話流程與意圖分類", en: "OpenAI-driven conversation flows with intent classification" },
      { zh: "使用者分群與行為標籤，支援營運切客群", en: "User segments and behavioral tags for ops targeting" },
      { zh: "話術／情境後台，調整不必每次改程式", en: "Playbook/scenario admin without code changes for every tweak" },
      { zh: "留存與漏斗儀表板，觀察關鍵轉換", en: "Retention and funnel dashboards for key conversion steps" },
      { zh: "A/B 測試框架，支援封閉測試前實驗", en: "A/B testing framework for pre-beta experiments" },
    ],
    results: [
      { zh: "配對與對話核心邏輯已完成內部驗證", en: "Core matching and conversation logic validated internally" },
      { zh: "營運可在後台調整話術，縮短實驗週期", en: "Ops can tune playbooks in-admin and shorten experiment cycles" },
      { zh: "留存觀察儀表板已就緒，可進入封閉測試準備", en: "Retention dashboards ready for closed-beta preparation" },
      { zh: "專案狀態：開發中，持續迭代中", en: "Status: in active development with ongoing iteration" },
    ],
    projectResult: {
      zh: "OnlyMate 核心對話引擎與營運後台仍在開發迭代。配對邏輯已通過內部驗證，下一步朝封閉測試推進，讓產品假設能用真實使用數據校正。",
      en: "OnlyMate’s conversation engine and ops console remain in active build. Matching logic passed internal validation; the next step is closed beta so product assumptions can be corrected with real usage data.",
    },
    galleryImages: ["/projects/onlymate.png"],
  },

  "ai-crm": {
    background: {
      zh: "客戶的銷售溝通高度集中在 LINE：報價、跟催、成交進度都在對話裡發生。問題是資料散落在多人手機與試算表，交接時找不到完整脈絡，高意向客戶也容易因為沒人跟進而流失。",
      en: "Sales conversations lived on LINE — quotes, follow-ups, and deal progress all happened in chat. Data was split across phones and spreadsheets, handoffs lost context, and high-intent leads slipped when nobody followed up.",
    },
    clientRequirements: {
      zh: "要有統一 CRM 後台：LINE 對話能對應客戶檔案、可用 AI 產生對話摘要、銷售階段可視覺化、能設定跟進提醒與任務分派，並支援名單匯入與標籤篩選。",
      en: "They needed one CRM back office: LINE threads mapped to profiles, AI conversation summaries, a visible pipeline, follow-up reminders and task assignment, plus lead import and tag filters.",
    },
    solution: {
      zh: "AXORA 交付 AI CRM：前端與後台以 Next.js／React／TypeScript 建置，資料層使用 Supabase／PostgreSQL，串接 LINE Messaging API 與 OpenAI，完成對話同步、摘要、管道管理與提醒，並部署於 Vercel。",
      en: "AXORA delivered AI CRM on Next.js, React, and TypeScript with Supabase/PostgreSQL, integrating LINE Messaging API and OpenAI for chat sync, summaries, pipeline management, and reminders — deployed on Vercel.",
    },
    coreFeatures: [
      { zh: "LINE 對話同步至客戶檔案，減少跨工具查詢", en: "LINE chats synced to profiles to cut cross-tool lookups" },
      { zh: "OpenAI 對話摘要與意圖分類，縮短整理時間", en: "OpenAI summaries and intent labels to cut manual note time" },
      { zh: "銷售管道／成交階段可視化管理", en: "Visual pipeline and deal-stage management" },
      { zh: "跟進提醒與團隊任務分派", en: "Follow-up reminders and team task assignment" },
      { zh: "潛客匯入、標籤篩選與名單作業", en: "Lead import, tag filters, and list operations" },
    ],
    results: [
      { zh: "LINE 與潛客資料集中在同一後台", en: "LINE and lead data centralized in one back office" },
      { zh: "自動摘要降低人工整理對話成本", en: "Auto summaries reduced manual conversation cleanup" },
      { zh: "成交階段清楚可見，管理與交接更順", en: "Clear deal stages improved management and handoffs" },
      { zh: "跟進提醒降低高意向名單漏跟", en: "Reminders reduced missed follow-ups on high-intent leads" },
    ],
    projectResult: {
      zh: "AI CRM 已完成交付並上線。銷售可在單一後台查看 LINE 對話、摘要與成交進度，不必再在聊天軟體與試算表之間來回切換。",
      en: "AI CRM is delivered and live. Sales reviews LINE threads, summaries, and deal progress in one back office instead of hopping between chat apps and spreadsheets.",
    },
    galleryImages: ["/projects/ai-crm.png"],
  },

  "huaren-tong": {
    background: {
      zh: "華人通面向南加州華人社群，目標是把稅務、房仲、移民、房貸、保險、居家服務等在地專業，集中成可搜尋的一站式入口。過去資訊多靠社團轉傳與口耳相傳，媒合效率低、信任成本高。",
      en: "HuarenTong serves the Southern California Chinese community by concentrating local experts — tax, real estate, immigration, mortgage, insurance, home services — into a searchable one-stop entry. Before, referrals lived in group posts and word of mouth, so matching was slow and trust was hard to establish.",
    },
    clientRequirements: {
      zh: "平台需支援服務分類與城市篩選、專家列表、需求發布／媒合，以及城市指南、工作與租屋資訊；同時提供 LINE 洽詢與中英介面，降低使用門檻。",
      en: "The platform needed category and city filters, expert listings, request posting/matching, plus city guides, jobs, and rentals — with LINE inquiry and a bilingual interface to lower the barrier to use.",
    },
    solution: {
      zh: "AXORA 以 Next.js／TypeScript 建置華人通，後端資料使用 Supabase／PostgreSQL，整合分類搜尋、專家列表、需求流程與 LINE 洽詢，部署於 Vercel 並搭配 Cloudflare。",
      en: "AXORA built HuarenTong on Next.js and TypeScript with Supabase/PostgreSQL, shipping category search, expert listings, request workflows, and LINE inquiry — deployed on Vercel with Cloudflare.",
    },
    coreFeatures: [
      { zh: "專業服務分類搜尋＋城市篩選", en: "Professional category search with city filters" },
      { zh: "會計／房仲／移民／房貸等專家列表", en: "Expert listings across accounting, real estate, immigration, mortgage, and more" },
      { zh: "城市指南、工作機會與租屋資訊入口", en: "City guides, jobs, and rental entry points" },
      { zh: "需求發布與專家媒合流程", en: "Request posting and expert matching workflow" },
      { zh: "LINE 洽詢＋中英雙語介面", en: "LINE inquiry with bilingual zh/en UI" },
    ],
    results: [
      { zh: "社群有了可搜尋的一站式專家入口", en: "The community gained a searchable one-stop expert entry point" },
      { zh: "分類與城市篩選縮短找服務時間", en: "Category and city filters shortened time-to-find services" },
      { zh: "LINE 洽詢讓聯繫路徑更短", en: "LINE inquiry shortened the contact path" },
      { zh: "平台已正式上線服務使用者", en: "Platform launched and serving users" },
    ],
    projectResult: {
      zh: "華人通已上線。使用者可依分類與城市找到在地專家，並透過 LINE 快速洽詢；平台同時承接城市指南與生活資訊，成為社群常用入口。",
      en: "HuarenTong is live. Users find local experts by category and city, inquire via LINE, and also use city guides and lifestyle listings as a community entry point.",
    },
    galleryImages: ["/projects/huaren-tong.png"],
  },

  "zhongzhi-studio": {
    background: {
      zh: "中執影像工作室專注動態影像、品牌影片與 VR 體驗。對外需要能承載作品質感的品牌官網，讓潛在客戶快速理解服務範圍，並用最短路徑發起合作洽詢。",
      en: "Zhongzhi Studio focuses on motion graphics, brand films, and VR experiences. They needed a brand site that could carry portfolio craft, clarify services quickly, and give prospects the shortest path to inquire about collaboration.",
    },
    clientRequirements: {
      zh: "官網需呈現作品集、服務項目、關於工作室與聯絡方式；視覺要能支撐沉浸式品牌感受；並嵌入 LINE 洽詢，方便台灣客戶即時聯繫。",
      en: "The site needed portfolio, services, about, and contact pages; visuals strong enough for an immersive brand feel; and embedded LINE inquiry for fast contact with Taiwan-based clients.",
    },
    solution: {
      zh: "AXORA 以 Next.js／TypeScript 建置中執官網，規劃作品集與服務頁結構、響應式版面與沉浸式 Hero，並嵌入 LINE 洽詢與聯絡表單；部署搭配 Cloudflare，完成基礎 SEO。",
      en: "AXORA built the Zhongzhi site on Next.js and TypeScript with portfolio/service structure, responsive layout, immersive hero, LINE inquiry, and contact forms — deployed with Cloudflare and foundational SEO.",
    },
    coreFeatures: [
      { zh: "動態影像／品牌影片作品集展示", en: "Motion and brand-film portfolio showcase" },
      { zh: "VR 與視覺製作服務介紹頁", en: "VR and visual production service pages" },
      { zh: "響應式設計與沉浸式 Hero", en: "Responsive design with immersive hero" },
      { zh: "LINE 洽詢與聯絡表單雙入口", en: "Dual intake via LINE inquiry and contact form" },
      { zh: "基礎 SEO 與 Cloudflare 部署", en: "Foundational SEO with Cloudflare deployment" },
    ],
    results: [
      { zh: "作品與服務內容可完整對外呈現", en: "Portfolio and services fully presentable externally" },
      { zh: "潛在客戶可用 LINE 快速發起洽詢", en: "Prospects can start inquiries quickly via LINE" },
      { zh: "品牌官網形象與專業可信度提升", en: "Brand site improved professional credibility" },
      { zh: "專案完成並正式上線", en: "Project completed and launched" },
    ],
    projectResult: {
      zh: "中執影像工作室官網已上線。作品集與服務頁完整對外，客戶可透過 LINE 或表單洽詢合作，品牌對外溝通有了穩定據點。",
      en: "The Zhongzhi Studio site is live. Portfolio and services are public, clients can inquire via LINE or form, and the brand has a stable external home.",
    },
    galleryImages: ["/projects/zhongzhi-studio.png"],
  },
};

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}
