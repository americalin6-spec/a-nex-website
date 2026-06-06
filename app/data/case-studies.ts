export type LocalizedText = { zh: string; en: string };

export type CaseStudyVisual =
  | "dashboard"
  | "crm-table"
  | "workflow"
  | "ai-flow"
  | "kpi"
  | "architecture";

export type CaseStudy = {
  id: string;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  features: LocalizedText[];
  result: LocalizedText;
  techTags: string[];
  visual: CaseStudyVisual;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "line-crm",
    category: { zh: "LINE · 客戶管理", en: "LINE · Customer Management" },
    title: {
      zh: "LINE 客戶管理系統",
      en: "LINE Customer Management System",
    },
    summary: {
      zh: "整合 LINE 的客戶管理，自動化客戶對話、銷售管道與團隊跟進。",
      en: "LINE-integrated customer management automating conversations, pipelines, and team follow-ups.",
    },
    problem: {
      zh: "銷售團隊在 LINE 上處理大量訊息，客戶資料分散、跟進容易遺漏，無法即時掌握成交狀態。",
      en: "Sales teams handled high LINE message volume with scattered data, missed follow-ups, and no real-time deal visibility.",
    },
    solution: {
      zh: "打造統一客戶管理後台，串接 LINE Messaging API，集中客戶紀錄、自動分派與自動回覆建議。",
      en: "Built a unified customer management backend on LINE Messaging API with centralized records, routing, and auto-reply assistance.",
    },
    features: [
      { zh: "LINE 對話同步至客戶檔案", en: "LINE chats synced to customer profiles" },
      { zh: "自動回覆與意圖分類", en: "Auto-reply and intent classification" },
      { zh: "銷售管道與成交階段管理", en: "Pipeline and deal stage management" },
      { zh: "跟進提醒與團隊任務分派", en: "Follow-up reminders and team assignment" },
    ],
    result: {
      zh: "客戶回覆時間縮短 62%，月成交率提升 28%，跟進遺漏率下降 74%。",
      en: "62% faster response time, 28% higher monthly close rate, 74% fewer missed follow-ups.",
    },
    techTags: ["Next.js", "LINE API", "PostgreSQL", "OpenAI", "Redis"],
    visual: "crm-table",
  },
  {
    id: "real-estate-crm",
    category: { zh: "房地產 · 客戶管理", en: "Real Estate · Customer Management" },
    title: { zh: "房地產銷售客戶管理", en: "Real Estate Sales Customer Management" },
    summary: {
      zh: "為房仲團隊打造的物件、客戶、帶看與成交管理系統。",
      en: "Property, client, viewing, and deal management for real estate sales teams.",
    },
    problem: {
      zh: "物件與客戶資料存在 Excel 與通訊軟體中，帶看排程與議價進度難以追蹤。",
      en: "Property and client data lived in spreadsheets and chat apps; viewings and negotiations were hard to track.",
    },
    solution: {
      zh: "建立房地產專用客戶管理，整合物件庫、客戶需求配對、帶看行程與議價紀錄。",
      en: "Delivered real-estate customer management with inventory, requirement matching, viewing schedules, and negotiation logs.",
    },
    features: [
      { zh: "物件庫與客戶需求配對", en: "Inventory and requirement matching" },
      { zh: "帶看行程與提醒", en: "Viewing schedule and reminders" },
      { zh: "議價與成交階段追蹤", en: "Negotiation and closing stage tracking" },
      { zh: "團隊業績儀表板", en: "Team performance dashboard" },
    ],
    result: {
      zh: "帶看轉換率提升 35%，資料輸入時間減少 50%，管理層可即時查看團隊漏斗。",
      en: "35% higher viewing conversion, 50% less data entry time, real-time team funnel for management.",
    },
    techTags: ["React", "Node.js", "PostgreSQL", "Dashboard", "Customer Mgmt"],
    visual: "kpi",
  },
  {
    id: "studio-rental",
    category: { zh: "營運自動化", en: "Operations Automation" },
    title: {
      zh: "場地租賃營運自動化系統",
      en: "Venue Rental Operations Automation",
    },
    summary: {
      zh: "預約、排程、帳務與通知全流程自動化。",
      en: "End-to-end automation for booking, scheduling, billing, and notifications.",
    },
    problem: {
      zh: "人工處理預約與檔期，常發生重複預約、帳單錯誤與客戶通知延遲。",
      en: "Manual booking caused double bookings, billing errors, and delayed customer notifications.",
    },
    solution: {
      zh: "開發租賃管理後台與自動化工作流，串接行事曆、金流與 LINE 通知。",
      en: "Built rental admin and workflow automation connecting calendar, payments, and LINE alerts.",
    },
    features: [
      { zh: "線上預約與檔期管理", en: "Online booking and availability" },
      { zh: "自動開立帳單與收款提醒", en: "Auto invoicing and payment reminders" },
      { zh: "LINE 預約確認通知", en: "LINE booking confirmations" },
      { zh: "營運報表與使用率分析", en: "Operations reports and utilization" },
    ],
    result: {
      zh: "人工處理時間減少 70%，重複預約降至接近零，月營收可視化追蹤。",
      en: "70% less manual processing, near-zero double bookings, monthly revenue tracking.",
    },
    techTags: ["Workflow", "LINE", "Stripe", "PostgreSQL", "Automation"],
    visual: "workflow",
  },
  {
    id: "ai-followup",
    category: { zh: "自動化流程", en: "Automation Workflows" },
    title: { zh: "客戶跟進與成交追蹤系統", en: "Customer Follow-up & Deal Tracking System" },
    summary: {
      zh: "24/7 自動化執行潛客培育、成交追蹤與轉換推進。",
      en: "24/7 automated lead nurturing, deal tracking, and conversion.",
    },
    problem: {
      zh: "潛在客戶跟進依賴人工，下班後無人回覆，培育流程不一致。",
      en: "Lead follow-up relied on staff; no after-hours coverage and inconsistent nurturing.",
    },
    solution: {
      zh: "部署成交追蹤引擎，依客戶行為觸發訊息、任務與銷售提醒。",
      en: "Deployed deal tracking engine triggering messages, tasks, and sales alerts by behavior.",
    },
    features: [
      { zh: "行為觸發自動跟進", en: "Behavior-triggered follow-ups" },
      { zh: "對話摘要寫入客戶管理", en: "Conversation summaries to customer management" },
      { zh: "多階段培育劇本", en: "Multi-stage nurture sequences" },
      { zh: "轉換率與回覆分析", en: "Conversion and reply analytics" },
    ],
    result: {
      zh: "月潛客跟進量提升 3.2 倍，轉換率提升 24%，非上班時間回覆覆蓋 100%。",
      en: "3.2× monthly nurture volume, 24% higher conversion, 100% after-hours coverage.",
    },
    techTags: ["OpenAI", "LINE", "Customer Mgmt", "Webhooks", "Analytics"],
    visual: "ai-flow",
  },
  {
    id: "dashboard",
    category: { zh: "儀表板平台", en: "Dashboard Platform" },
    title: { zh: "商業儀表板平台", en: "Business Dashboard Platform" },
    summary: {
      zh: "統一營運指標、自動化任務與團隊管理的指揮中心。",
      en: "Command center for ops metrics, automation tasks, and team management.",
    },
    problem: {
      zh: "數據分散在多套工具，管理層無法即時掌握營運與自動化執行狀態。",
      en: "Data scattered across tools; leadership lacked real-time ops and automation visibility.",
    },
    solution: {
      zh: "打造可配置儀表板，整合客戶管理、工作流與分析 API，集中 KPI 與告警。",
      en: "Built configurable dashboards integrating customer management, workflow, and analytics APIs with KPIs and alerts.",
    },
    features: [
      { zh: "即時 KPI 與趨勢圖", en: "Real-time KPIs and trends" },
      { zh: "自動化任務監控", en: "Automation task monitoring" },
      { zh: "團隊績效與漏斗", en: "Team performance and funnels" },
      { zh: "自訂報表匯出", en: "Custom report export" },
    ],
    result: {
      zh: "決策會議準備時間減少 45%，異常事件平均 8 分鐘內告警。",
      en: "45% less prep time for reviews, anomalies alerted within 8 minutes on average.",
    },
    techTags: ["Next.js", "PostgreSQL", "Charts", "API", "SaaS"],
    visual: "dashboard",
  },
  {
    id: "website-backend",
    category: { zh: "平台開發", en: "Platform Development" },
    title: {
      zh: "網站與後台管理系統",
      en: "Website + Backend Management System",
    },
    summary: {
      zh: "企業官網、內容管理與內部營運後台一體化交付。",
      en: "Corporate site, CMS, and internal operations backend in one delivery.",
    },
    problem: {
      zh: "官網與後台分開維護，內容更新慢、權限管理混亂、系統無法擴展。",
      en: "Website and admin maintained separately; slow updates, messy permissions, poor scalability.",
    },
    solution: {
      zh: "以 Next.js 全端架構交付官網、CMS 與角色權限後台，API 支援未來模組擴充。",
      en: "Delivered Next.js full-stack site, CMS, and role-based admin with APIs for future modules.",
    },
    features: [
      { zh: "內容管理與多語系", en: "CMS and multilingual support" },
      { zh: "角色權限與審計日誌", en: "RBAC and audit logs" },
      { zh: "模組化 API 架構", en: "Modular API architecture" },
      { zh: "效能與 SEO 優化", en: "Performance and SEO optimization" },
    ],
    result: {
      zh: "內容上線時間從數天縮短至數小時，系統可支援 3 倍業務模組擴充。",
      en: "Content publish time cut from days to hours; 3× module expansion capacity.",
    },
    techTags: ["Next.js", "TypeScript", "PostgreSQL", "CMS", "API"],
    visual: "architecture",
  },
];

export const featuredCaseStudies = caseStudies.slice(0, 3);
