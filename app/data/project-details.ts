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

  "axora-website": {
    clientRequirements: {
      zh: "AXORA 需要企業官網作為品牌對外窗口，完整呈現 AI 與軟體委託服務、案例作品集，並支援中英雙語與 SEO 部署。",
      en: "AXORA needed a corporate site as its public face — AI and software services, portfolio showcase, bilingual content, and production SEO deployment.",
    },
    solution: {
      zh: "AXORA 以 Next.js App Router 建置企業官網，整合案例展示、服務介紹、聯絡表單與 Cloudflare 部署，完成 SEO 與社群預覽設定。",
      en: "Built on Next.js App Router with portfolio, services, contact forms, Cloudflare deployment, and full SEO plus social preview configuration.",
    },
    coreFeatures: [
      { zh: "中英雙語內容與路由切換", en: "Bilingual content with locale routing" },
      { zh: "案例作品集與服務介紹頁面", en: "Portfolio and service showcase pages" },
      { zh: "SEO metadata 與 Open Graph 設定", en: "SEO metadata and Open Graph configuration" },
      { zh: "響應式設計與動態視覺效果", en: "Responsive design with dynamic visual effects" },
      { zh: "Cloudflare 部署與 Vercel 正式環境", en: "Cloudflare and Vercel production deployment" },
    ],
    projectResult: {
      zh: "企業官網已正式上線，作為 AXORA 品牌對外主要入口，SEO 與社群分享預覽均已就緒。",
      en: "Corporate site is live as AXORA's main public entry point — SEO and social sharing previews fully configured.",
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

  "teacher-dashboard": {
    clientRequirements: {
      zh: "教師每週需人工彙整班級出席、作業繳交與學習表現，耗時且容易出錯，需要一站式儀表板整合課務資料。",
      en: "Teachers spent hours manually compiling attendance, assignments, and performance each week — they needed one dashboard for all class operations.",
    },
    solution: {
      zh: "AXORA 開發教師端營運儀表板，整合班級名單、出席紀錄、作業追蹤與 Google 日曆課表，讓教師專注教學而非報表整理。",
      en: "AXORA is building a teacher ops dashboard — rosters, attendance, assignment tracking, and Google Calendar schedules so educators focus on teaching.",
    },
    coreFeatures: [
      { zh: "班級名單與學員檔案管理", en: "Class rosters and student profile management" },
      { zh: "出席紀錄與缺課追蹤", en: "Attendance logging and absence tracking" },
      { zh: "作業指派、繳交與評分", en: "Assignment creation, submission, and grading" },
      { zh: "Google 日曆課表同步", en: "Google Calendar schedule sync" },
      { zh: "學習表現摘要與週報匯出", en: "Learning performance summaries and weekly exports" },
    ],
    projectResult: {
      zh: "儀表板核心模組開發中，班級管理與出席功能已完成原型，預計下一季交付教師端測試版。",
      en: "Core dashboard modules in build — roster and attendance prototypes done, teacher beta targeted next quarter.",
    },
  },

  "student-portal": {
    clientRequirements: {
      zh: "學員與家長無法即時掌握課表、作業與學習進度，資訊仰賴 LINE 群組或紙本通知，需要專屬入口網站集中課務資訊。",
      en: "Students and parents lacked real-time access to schedules, assignments, and progress — relying on LINE groups or paper notices instead of a dedicated portal.",
    },
    solution: {
      zh: "AXORA 規劃學員入口網站架構，涵蓋課表查詢、作業繳交、學習紀錄與通知中心，資料與教師後台即時同步。",
      en: "AXORA designed a student portal architecture — schedules, assignment submission, learning history, and notifications synced live with the teacher back office.",
    },
    coreFeatures: [
      { zh: "個人課表與上課提醒", en: "Personal schedules and class reminders" },
      { zh: "線上作業繳交與批改回饋", en: "Online assignment submission and feedback" },
      { zh: "學習紀錄與成績查詢", en: "Learning history and grade lookup" },
      { zh: "通知中心與公告推播", en: "Notification center and announcement push" },
      { zh: "家長帳號關聯與進度查看", en: "Parent account linking and progress views" },
    ],
    projectResult: {
      zh: "概念方案已完成架構設計與原型規劃，待教師後台上線後即可進入開發階段。",
      en: "Concept architecture and prototype planning complete — ready to build once the teacher dashboard ships.",
    },
  },

  "trial-lesson-booking": {
    clientRequirements: {
      zh: "試聽課預約仰賴顧問人工排課、收款與寄送視訊連結，流程冗長且容易漏單，需要學員自助完成全流程。",
      en: "Trial bookings relied on manual scheduling, payment collection, and video link delivery — slow, error-prone, and needed a self-service flow for learners.",
    },
    solution: {
      zh: "AXORA 建置試聽課預約系統，整合 Google 日曆空檔、Stripe 結帳與視訊會議連結自動寄送，學員選完時段即可完成付款。",
      en: "AXORA is building trial booking with Google Calendar availability, Stripe checkout, and automatic video meeting links — book, pay, and join in one flow.",
    },
    coreFeatures: [
      { zh: "Google 日曆空檔即時查詢", en: "Real-time Google Calendar availability lookup" },
      { zh: "Stripe 線上付款與收據", en: "Stripe online payment and receipts" },
      { zh: "視訊會議連結自動產生與寄送", en: "Automatic video meeting link generation and delivery" },
      { zh: "預約確認與提醒通知", en: "Booking confirmation and reminder notifications" },
      { zh: "顧問後台預約管理與報表", en: "Consultant admin for booking management and reports" },
    ],
    projectResult: {
      zh: "預約流程與 Stripe 金流整合開發中，Google 日曆串接已完成，預計下月進入內部測試。",
      en: "Booking flow and Stripe integration in build — Google Calendar sync done, internal testing targeted next month.",
    },
  },

  "creator-dashboard": {
    clientRequirements: {
      zh: "小型創作團隊缺乏工具掌握訂閱收入、內容表現與受眾互動，對帳與方案管理仰賴試算表，需要專屬營運儀表板。",
      en: "Small creator teams lacked visibility into subscription revenue, content performance, and audience engagement — payouts and plans lived in spreadsheets.",
    },
    solution: {
      zh: "AXORA 設計創作者營運儀表板，聚焦訂閱收入追蹤、內容分析、受眾互動指標與 Stripe 對帳模組，方便團隊掌握變現狀況。",
      en: "AXORA designed a creator ops dashboard — subscription revenue, content analytics, audience engagement, and Stripe reconciliation for monetization visibility.",
    },
    coreFeatures: [
      { zh: "訂閱收入與 MRR 追蹤", en: "Subscription revenue and MRR tracking" },
      { zh: "內容表現與互動率分析", en: "Content performance and engagement rate analytics" },
      { zh: "受眾成長與留存指標", en: "Audience growth and retention metrics" },
      { zh: "方案管理與定價調整", en: "Plan management and pricing adjustments" },
      { zh: "Stripe 對帳與 payout 報表", en: "Stripe reconciliation and payout reports" },
    ],
    projectResult: {
      zh: "概念設計與資料模型已確立，儀表板視覺原型完成，待確認需求後進入開發排程。",
      en: "Concept design and data model locked — dashboard visual prototype done, development queued after requirements sign-off.",
    },
  },

  "ai-membership-platform": {
    clientRequirements: {
      zh: "團隊準備推出訂閱制 AI 產品，需要會員計費、用量控管與多模型 API 額度分級，依方案開放不同服務等級。",
      en: "The team was preparing a subscription AI product — needing billing, usage controls, and tiered multi-model API quotas by plan level.",
    },
    solution: {
      zh: "AXORA 規劃會員制 AI 平台架構，涵蓋 Stripe 訂閱計費、用量監控、多模型路由與方案權限管理，支援彈性擴展新模型。",
      en: "AXORA architected a membership AI platform — Stripe subscriptions, usage monitoring, multi-model routing, and plan-based permissions with room to add models.",
    },
    coreFeatures: [
      { zh: "Stripe 訂閱計費與方案管理", en: "Stripe subscription billing and plan management" },
      { zh: "API 用量監控與額度控管", en: "API usage monitoring and quota enforcement" },
      { zh: "多模型路由與 fallback 策略", en: "Multi-model routing and fallback strategies" },
      { zh: "會員等級與功能權限分級", en: "Membership tiers and feature-level permissions" },
      { zh: "用量報表與成本分析儀表板", en: "Usage reports and cost analysis dashboard" },
    ],
    projectResult: {
      zh: "平台架構與計費模型概念方案已完成，技術選型與 API 設計文件就緒，等待產品方向確認。",
      en: "Platform architecture and billing model concept complete — tech stack and API design docs ready, pending product direction sign-off.",
    },
  },

  "ai-gallery": {
    clientRequirements: {
      zh: "團隊需要展示 AI 生成作品的平台，支援上傳、標籤分類、搜尋與權限分級，可作為內部作品庫或對外 Demo 使用。",
      en: "The team needed a platform to showcase AI-generated work — uploads, tag taxonomy, search, and role-based access as an internal library or public demo.",
    },
    solution: {
      zh: "AXORA 設計 AI 作品展示平台，整合上傳管線、標籤系統、全文搜尋與角色權限，呈現生成流程與策展方式。",
      en: "AXORA designed an AI gallery — upload pipeline, tagging system, full-text search, and role permissions showcasing generation workflows and curation.",
    },
    coreFeatures: [
      { zh: "AI 作品上傳與 metadata 管理", en: "AI artwork upload and metadata management" },
      { zh: "標籤分類與策展集合", en: "Tag taxonomy and curated collections" },
      { zh: "全文搜尋與篩選", en: "Full-text search and filtering" },
      { zh: "角色權限與存取分級", en: "Role-based access and permission tiers" },
      { zh: "生成流程與 prompt 展示", en: "Generation workflow and prompt display" },
    ],
    projectResult: {
      zh: "概念原型與資料結構設計完成，UI 線框已確認，可作為後續正式開發的參考基礎。",
      en: "Concept prototype and data structure designed — UI wireframes approved, ready as the foundation for full build.",
    },
  },

  "sales-dashboard": {
    clientRequirements: {
      zh: "銷售主管需從多份試算表拼湊漏斗、業績目標與團隊表現，無法在單一畫面判斷本季節奏與商機預測。",
      en: "Sales leaders stitched funnel, quota, and team data from multiple spreadsheets — no single view to read the quarter or forecast pipeline.",
    },
    solution: {
      zh: "AXORA 建置銷售儀表板，彙整漏斗轉換、業績達成率、團隊排名與 OpenAI 商機預測，主管可在單一畫面掌握銷售節奏。",
      en: "AXORA built a sales dashboard — funnel conversion, quota attainment, team rankings, and OpenAI pipeline forecasting in one executive view.",
    },
    coreFeatures: [
      { zh: "銷售漏斗與階段轉換分析", en: "Sales funnel and stage conversion analytics" },
      { zh: "業績目標達成率追蹤", en: "Quota attainment tracking" },
      { zh: "團隊表現排名與趨勢", en: "Team performance rankings and trends" },
      { zh: "OpenAI 商機預測與風險提示", en: "OpenAI deal forecasting and risk alerts" },
      { zh: "自訂報表匯出與週期比較", en: "Custom report export and period comparison" },
    ],
    projectResult: {
      zh: "銷售儀表板已正式上線，主管可在單一畫面掌握本季業績節奏，不再依賴多份試算表拼資料。",
      en: "Sales dashboard is live — leaders read quarterly rhythm in one view instead of stitching spreadsheets together.",
    },
  },

  "customer-service-center": {
    clientRequirements: {
      zh: "客服團隊在 LINE 上處理大量客戶訊息，首次回應時間過長、工單追蹤分散，需要統一介面整合接案與結案流程。",
      en: "Support handled high LINE volume with slow first response and scattered ticket tracking — they needed one workspace for intake through closure.",
    },
    solution: {
      zh: "AXORA 開發客服中心系統，整合 LINE 訊息收件、OpenAI 回覆建議、工單分派與結案紀錄，縮短首次回應時間。",
      en: "AXORA is building a service hub — LINE inbox, OpenAI reply suggestions, ticket routing, and closure records to cut first-response time.",
    },
    coreFeatures: [
      { zh: "LINE 訊息統一收件介面", en: "Unified LINE message inbox" },
      { zh: "OpenAI 回覆建議與知識庫匹配", en: "OpenAI reply suggestions with knowledge base matching" },
      { zh: "工單建立、分派與優先級管理", en: "Ticket creation, routing, and priority management" },
      { zh: "首次回應時間與 SLA 追蹤", en: "First response time and SLA tracking" },
      { zh: "結案紀錄與客戶滿意度調查", en: "Closure records and customer satisfaction surveys" },
    ],
    projectResult: {
      zh: "LINE 整合與工單模組開發中，AI 回覆建議原型已完成，預計本季末交付客服團隊試用。",
      en: "LINE integration and ticket modules in build — AI reply prototype done, support team trial targeted end of quarter.",
    },
  },

  "project-management-platform": {
    clientRequirements: {
      zh: "跨部門委外案與內部產品研發並行管理，任務、里程碑與檔案版本分散在通訊軟體與 Email，缺乏統一協作平台。",
      en: "Vendor work and internal product development ran in parallel — tasks, milestones, and file versions scattered across chat and email with no unified platform.",
    },
    solution: {
      zh: "AXORA 規劃企業專案協作 SaaS，涵蓋任務看板、里程碑追蹤、檔案版本控制與團隊留言討論，集中專案進度管理。",
      en: "AXORA designed an enterprise project SaaS — task boards, milestone tracking, file versioning, and team comments for centralized project progress.",
    },
    coreFeatures: [
      { zh: "任務看板與甘特圖視圖", en: "Task boards and Gantt chart views" },
      { zh: "里程碑設定與進度追蹤", en: "Milestone setup and progress tracking" },
      { zh: "檔案版本控制與權限管理", en: "File version control and permission management" },
      { zh: "團隊留言與 @mention 通知", en: "Team comments and @mention notifications" },
      { zh: "跨專案資源分配概覽", en: "Cross-project resource allocation overview" },
    ],
    projectResult: {
      zh: "概念方案與核心功能模組已規劃完成，待確認目標客戶場景後排入開發時程。",
      en: "Concept and core module planning complete — development scheduled after target customer scenarios are confirmed.",
    },
  },

  "restaurant-management-system": {
    clientRequirements: {
      zh: "餐廳櫃台與廚房看到的訂單資訊不一致，點餐、桌位管理與取餐通知仰賴人工口頭傳達，需要統一營運系統。",
      en: "Front-of-house and kitchen saw mismatched orders — ordering, table management, and pickup alerts relied on verbal handoffs instead of one system.",
    },
    solution: {
      zh: "AXORA 開發餐廳營運 Web App，整合菜單管理、桌位配置、點餐流程、Stripe 付款與 LINE 取餐狀態推播。",
      en: "AXORA is building a restaurant ops web app — menus, table layout, ordering flow, Stripe payments, and LINE pickup status push notifications.",
    },
    coreFeatures: [
      { zh: "數位菜單與品項管理", en: "Digital menu and item management" },
      { zh: "桌位配置與訂單關聯", en: "Table layout and order association" },
      { zh: "點餐流程與 Stripe 線上付款", en: "Ordering flow with Stripe online payment" },
      { zh: "廚房出餐看板即時同步", en: "Kitchen display board with real-time sync" },
      { zh: "LINE 取餐狀態推播通知", en: "LINE pickup status push notifications" },
    ],
    projectResult: {
      zh: "菜單與點餐核心流程開發中，Stripe 金流整合已完成，預計下季進入試營運測試。",
      en: "Menu and ordering core flow in build — Stripe integration done, pilot operation targeted next quarter.",
    },
  },

  "hotel-booking-platform": {
    clientRequirements: {
      zh: "旅宿品牌希望自建訂房前台，擺脫 OTA 高佣金，需要房型展示、空房查詢、訂單金流與住房排程的完整架構。",
      en: "A hospitality brand wanted its own booking front-end to escape OTA commissions — needing room showcases, availability, payments, and stay scheduling architecture.",
    },
    solution: {
      zh: "AXORA 規劃飯店訂房平台架構，包含房型展示、即時空房查詢、Stripe 金流、訂單管理與 Google 日曆住房排程。",
      en: "AXORA architected a hotel booking platform — room showcases, real-time availability, Stripe payments, order management, and Google Calendar stay scheduling.",
    },
    coreFeatures: [
      { zh: "房型展示與設施介紹頁面", en: "Room showcase and amenity detail pages" },
      { zh: "即時空房查詢與價格計算", en: "Real-time availability lookup and pricing" },
      { zh: "Stripe 訂房付款與退款", en: "Stripe booking payment and refunds" },
      { zh: "訂單管理與住房排程", en: "Order management and stay scheduling" },
      { zh: "Google 日曆同步與確認通知", en: "Google Calendar sync and confirmation notifications" },
    ],
    projectResult: {
      zh: "訂房平台概念架構與 API 設計已完成，可作為旅宿業自建訂房通道的參考實作方向。",
      en: "Booking platform concept architecture and API design complete — a reference implementation for hospitality direct-booking channels.",
    },
  },

  "healthcare-appointment-system": {
    clientRequirements: {
      zh: "診所櫃台電話掛號量過高，病患無法自行預約科別與醫師時段，視訊問診連結也需人工寄送，流程效率低落。",
      en: "Clinic front desks were overwhelmed with phone bookings — patients couldn't self-schedule departments and physician slots, and televisit links were sent manually.",
    },
    solution: {
      zh: "AXORA 開發醫療預約系統，支援科別掛號、醫師時段管理、視訊問診連結自動產生與預約提醒通知。",
      en: "AXORA is building a healthcare appointment system — department booking, physician slot management, automatic televisit links, and reminder notifications.",
    },
    coreFeatures: [
      { zh: "科別掛號與醫師時段選擇", en: "Department booking and physician slot selection" },
      { zh: "視訊問診連結自動產生", en: "Automatic televisit link generation" },
      { zh: "預約確認與 SMS/Email 提醒", en: "Booking confirmation and SMS/email reminders" },
      { zh: "櫃台後台預約管理與報到", en: "Front-desk admin for booking management and check-in" },
      { zh: "Google 日曆醫師排班同步", en: "Google Calendar physician schedule sync" },
    ],
    projectResult: {
      zh: "掛號流程與時段管理模組開發中，視訊連結整合已完成，預計本季末進入診所試用。",
      en: "Booking flow and slot management in build — televisit link integration done, clinic trial targeted end of quarter.",
    },
  },

  "construction-management-platform": {
    clientRequirements: {
      zh: "工地進度、材料清單與驗收照片分散在通訊軟體群組，監造與承包方無法在同一系統更新，重要資訊容易遺漏。",
      en: "Site progress, material lists, and inspection photos lived in chat groups — owners and contractors couldn't update one system, and critical info got lost.",
    },
    solution: {
      zh: "AXORA 設計工程管理平台，記錄工地進度、材料追蹤、現場照片與驗收項目，監造與承包方在同一系統協作更新。",
      en: "AXORA designed a construction management platform — site progress, material tracking, field photos, and inspection items updated collaboratively in one system.",
    },
    coreFeatures: [
      { zh: "工地進度里程碑追蹤", en: "Site progress milestone tracking" },
      { zh: "材料清單與到貨狀態管理", en: "Material lists and delivery status management" },
      { zh: "現場照片上傳與時間軸", en: "Field photo upload and timeline" },
      { zh: "驗收項目檢核與簽核", en: "Inspection checklist and sign-off" },
      { zh: "監造與承包方權限分級", en: "Owner and contractor role-based permissions" },
    ],
    projectResult: {
      zh: "概念設計與工地資料模型已確立，核心模組線框完成，待確認合作場景後進入開發。",
      en: "Concept design and site data model locked — core module wireframes done, development queued after partner scenario confirmation.",
    },
  },

  "e-commerce-platform": {
    clientRequirements: {
      zh: "零售品牌需要快速上線自有網域電商，涵蓋商品管理、購物車、Stripe 金流、訂單與庫存，縮短從零到開店的時間。",
      en: "Retail brands needed to launch on custom domains fast — catalog, cart, Stripe payments, orders, and inventory to cut time from zero to storefront.",
    },
    solution: {
      zh: "AXORA 交付多租戶電商 SaaS，提供商品目錄、購物車、Stripe 金流、訂單處理與庫存模組，客戶可在自有網域快速上架。",
      en: "AXORA delivered multi-tenant e-commerce SaaS — catalog, cart, Stripe payments, order processing, and inventory modules on custom domains.",
    },
    coreFeatures: [
      { zh: "商品目錄與分類管理", en: "Product catalog and category management" },
      { zh: "購物車與 Stripe 結帳流程", en: "Shopping cart and Stripe checkout flow" },
      { zh: "訂單處理與出貨追蹤", en: "Order processing and shipment tracking" },
      { zh: "庫存管理與低庫存警示", en: "Inventory management and low-stock alerts" },
      { zh: "多租戶自有網域部署", en: "Multi-tenant custom domain deployment" },
    ],
    projectResult: {
      zh: "多租戶電商 SaaS 已完成交付，客戶可在自有網域快速上架，零售品牌導入時間大幅縮短。",
      en: "Multi-tenant e-commerce SaaS delivered — brands launch on custom domains with significantly faster onboarding.",
    },
  },

  "hr-management-system": {
    clientRequirements: {
      zh: "HR 與主管的人事資料分散在各處，出勤請假、薪資結構與招募流程缺乏統一後台，簽核仰賴 Email 往返。",
      en: "HR and manager data was scattered — attendance, leave, compensation, and hiring lacked one back office, with approvals stuck in email threads.",
    },
    solution: {
      zh: "AXORA 規劃人資管理 SaaS，涵蓋員工檔案、出勤請假、薪資結構與招募流程，HR 與主管在同一後台完成簽核。",
      en: "AXORA designed an HR SaaS — employee records, attendance and leave, compensation, and hiring workflows with HR and managers approving in one back office.",
    },
    coreFeatures: [
      { zh: "員工檔案與組織架構管理", en: "Employee records and org structure management" },
      { zh: "出勤紀錄與請假簽核", en: "Attendance logging and leave approval" },
      { zh: "薪資結構與 Stripe 發薪整合", en: "Compensation structure and Stripe payroll integration" },
      { zh: "招募流程與面試排程", en: "Hiring pipeline and interview scheduling" },
      { zh: "主管與 HR 多層簽核流程", en: "Multi-level approval workflows for managers and HR" },
    ],
    projectResult: {
      zh: "人資系統概念規劃與模組架構已完成，待確認目標企業規模後排入開發時程。",
      en: "HR system concept and module architecture complete — development scheduled after target company size is confirmed.",
    },
  },

  "smart-factory-dashboard": {
    clientRequirements: {
      zh: "製造業現場缺乏即時掌握產線稼動、設備狀態與異常狀況的儀表板，管理決策仰賴人工巡檢與紙本紀錄。",
      en: "Shop floors lacked real-time visibility into line utilization, equipment health, and anomalies — decisions relied on manual rounds and paper logs.",
    },
    solution: {
      zh: "AXORA 設計智慧工廠儀表板，彙整產線稼動率、設備狀態監控與異常警示，預留 IoT 資料接入空間方便後續擴充。",
      en: "AXORA designed a smart factory dashboard — line utilization, equipment health monitoring, and anomaly alerts with headroom for IoT data feeds.",
    },
    coreFeatures: [
      { zh: "產線稼動率即時監控", en: "Real-time line utilization monitoring" },
      { zh: "設備狀態與健康度指標", en: "Equipment status and health metrics" },
      { zh: "異常事件警示與通知", en: "Anomaly event alerts and notifications" },
      { zh: "IoT 感測器資料接入接口", en: "IoT sensor data ingestion endpoints" },
      { zh: "歷史趨勢與班次比較報表", en: "Historical trends and shift comparison reports" },
    ],
    projectResult: {
      zh: "智慧工廠儀表板概念方案已完成，IoT 接入架構與視覺原型就緒，待現場資料源確認後進入開發。",
      en: "Smart factory dashboard concept complete — IoT ingestion architecture and visual prototype ready, pending on-site data source confirmation.",
    },
  },
};

export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}
