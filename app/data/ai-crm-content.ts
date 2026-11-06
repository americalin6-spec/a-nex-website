export const whyAiCrm = [
  {
    title: "AI 自動回覆",
    desc: "處理常見諮詢與初步分流，讓業務把時間花在高意向客戶。",
  },
  {
    title: "AI 客戶分析",
    desc: "依對話與行為整理客戶狀態，協助判斷跟進優先順序。",
  },
  {
    title: "Lead 管理",
    desc: "把官網、LINE、表單與名單匯入收斂到同一潛客池。",
  },
  {
    title: "Sales Pipeline",
    desc: "依你們真實成交流程設定階段，清楚看到卡關與漏斗。",
  },
  {
    title: "Dashboard",
    desc: "掌握進線、跟進、成交與團隊績效，決策不再靠感覺。",
  },
  {
    title: "LINE OA 整合",
    desc: "官方帳號對話同步客戶檔案，交接時不再找不到脈絡。",
  },
  {
    title: "Email Automation",
    desc: "依階段發送提醒、追蹤與通知，減少人工重複寄信。",
  },
  {
    title: "Workflow Automation",
    desc: "把分派、提醒、標籤與狀態更新做成可重複的流程。",
  },
];

export const industries = [
  "製造業",
  "建設業",
  "科技公司",
  "教育產業",
  "醫療",
  "電商",
];

export const axoraOffers = [
  {
    title: "CRM 客製化",
    desc: "依產業流程設計欄位、階段、權限與報表，而不是硬套範本。",
  },
  {
    title: "AI Agent",
    desc: "導入可輔助回覆、摘要與分派的 AI Agent，提升處理速度。",
  },
  {
    title: "LINE OA",
    desc: "串接 Messaging API，讓進線、標籤與對話進入 CRM。",
  },
  {
    title: "Dashboard",
    desc: "建置管理儀表板，讓主管即時掌握營運與成交狀況。",
  },
  {
    title: "ERP 串接",
    desc: "依需求對接既有 ERP／進銷存，減少重覆建檔。",
  },
  {
    title: "API 串接",
    desc: "串接官網表單、金流、通知或其他內部系統 API。",
  },
  {
    title: "SaaS",
    desc: "若要做成可訂閱產品，可一併規劃多租戶、權限與計費流程。",
  },
];

export const processSteps = [
  "需求訪談",
  "規劃",
  "UI",
  "開發",
  "測試",
  "上線",
  "維護",
];

export const faqs = [
  {
    question: "AI CRM 跟市面上現成 CRM 差在哪？",
    answer:
      "現成 CRM 多半要業務手動更新。AXORA 的 AI CRM 可依你們流程客製，並串接 LINE OA、AI 摘要、自動分派與提醒，讓系統貼近實際成交現場。",
  },
  {
    question: "一定要先有 LINE 官方帳號嗎？",
    answer:
      "若客戶主要在 LINE 溝通，建議使用 Official Account。尚未開通也可以，我們會先規劃開通與 Messaging API 串接時程。",
  },
  {
    question: "可以沿用我們現有的客戶名單嗎？",
    answer:
      "可以。常見會用 CSV／Excel 匯入，並在上線前整理來源、負責人、目前階段等必要欄位。",
  },
  {
    question: "導入大概需要多久？",
    answer:
      "視流程複雜度與串接範圍而定。多數專案會先上線核心模組（Lead、Pipeline、跟進提醒、必要整合），再分階段擴充 AI 與自動化。",
  },
  {
    question: "AI 會不會取代業務？",
    answer:
      "不會。AI 負責摘要、分流、提醒與重複回覆；報價談判、關係經營與成交判斷仍由業務決定。",
  },
  {
    question: "能否串接我們現有的 ERP 或官網？",
    answer:
      "可以。AXORA 可依 API 文件規劃 ERP、官網表單、通知系統或其他後台串接，減少重覆輸入。",
  },
  {
    question: "資料安全與權限怎麼處理？",
    answer:
      "會依角色設定可見範圍（例如業務只看自己的名單、主管看團隊），並規劃備份與存取控管。細節會在需求訪談後寫進規格。",
  },
  {
    question: "上線後誰負責維護與調整？",
    answer:
      "可依約安排維運、監控與功能迭代。我們也會交付文件與操作說明，方便內部接手日常調整。",
  },
  {
    question: "預算大概怎麼抓？",
    answer:
      "取決於客製深度、整合數量與是否含 AI Agent／Dashboard。建議先約諮詢，確認範圍後再給分階段報價，避免一次做過大。",
  },
];

export const caseStudyCards = [
  {
    href: "/projects/ai-crm",
    projectId: "ai-crm",
    title: "AI CRM",
    label: "Case Study",
    description:
      "已交付的 CRM：串接 LINE 與 OpenAI，把潛客、對話摘要與銷售階段集中在同一後台。",
  },
  {
    href: "/line-ai",
    projectId: null,
    title: "LINE AI",
    label: "Product",
    coverImage: "/projects/ai-crm.png",
    description:
      "智能分析與成交管理平台：LINE Official Account、自動回覆與客戶管理潛客紀錄。",
  },
  {
    href: "/projects/onlymate",
    projectId: "onlymate",
    title: "OnlyMate",
    label: "Case Study",
    description:
      "AI 互動平台：對話流程、使用者分群與營運後台話術管理，驗證配對與留存設計。",
  },
] as const;


/* ---------------- English ---------------- */

export const whyAiCrmEn = [
  { title: "AI auto-reply", desc: "Handles common enquiries and first-level triage, so sales can focus on high-intent customers." },
  { title: "AI customer insights", desc: "Summarises each customer’s status from conversations and activity to help prioritise follow-ups." },
  { title: "Lead management", desc: "Website, chat, forms and imported lists flow into one lead pool." },
  { title: "Sales pipeline", desc: "Stages that match your real sales process, so you can see where deals get stuck." },
  { title: "Dashboard", desc: "Track enquiries, follow-ups, wins and team performance — decisions based on data, not gut feel." },
  { title: "Chat app integration", desc: "LINE or WhatsApp conversations sync to the customer record, so context is never lost in a handover." },
  { title: "Email automation", desc: "Reminders, follow-ups and notifications sent by stage, with less manual emailing." },
  { title: "Workflow automation", desc: "Assignment, reminders, tags and status updates turned into repeatable workflows." },
];

export const industriesEn = ["Manufacturing", "Construction", "Technology", "Education", "Healthcare", "E-commerce"];

export const axoraOffersEn = [
  { title: "Custom CRM", desc: "Fields, stages, permissions and reports designed around your industry — not a forced template." },
  { title: "AI agents", desc: "AI agents that help draft replies, summarise and assign work, so your team moves faster." },
  { title: "Messaging integration", desc: "Connect LINE (Messaging API) or WhatsApp so enquiries, tags and conversations flow into the CRM." },
  { title: "Dashboards", desc: "Management dashboards that show operations and sales in real time." },
  { title: "ERP integration", desc: "Connect your existing ERP or inventory system to avoid entering data twice." },
  { title: "API integration", desc: "Connect website forms, payments, notifications or other internal systems." },
  { title: "SaaS", desc: "Turning it into a subscription product? We can plan multi-tenancy, permissions and billing too." },
];

export const processStepsEn = ["Discovery", "Planning", "UI design", "Development", "Testing", "Launch", "Maintenance"];

export const faqsEn = [
  { question: "How is an AI CRM different from off-the-shelf CRMs?", answer: "Off-the-shelf CRMs mostly rely on manual updates. AXORA’s AI CRM is built around your process and connects chat apps, AI summaries, automatic assignment and reminders, so it fits how you actually sell." },
  { question: "Do we need a LINE Official Account first?", answer: "Only if your customers mainly use LINE. If not, we can connect WhatsApp, email or web forms instead — or plan the LINE setup with you." },
  { question: "Can we keep our existing customer list?", answer: "Yes. We usually import from CSV or Excel and clean up key fields such as source, owner and current stage before launch." },
  { question: "How long does it take?", answer: "It depends on the process and integrations. Most projects launch the core first (leads, pipeline, reminders, key integrations), then add AI and automation in phases." },
  { question: "Will AI replace our sales team?", answer: "No. AI handles summaries, triage, reminders and repetitive replies; negotiation, relationships and closing stay with your team." },
  { question: "Can it connect to our ERP or website?", answer: "Yes. Based on the API documentation, we can connect your ERP, website forms, notification systems or other back offices." },
  { question: "How are data security and permissions handled?", answer: "Visibility is set by role (e.g. reps see their own leads, managers see the team), with backups and access control planned in. Details go into the spec after discovery." },
  { question: "Who maintains it after launch?", answer: "We can provide maintenance, monitoring and improvements, plus documentation so your team can handle day-to-day changes." },
  { question: "How should we budget?", answer: "It depends on how custom it is, the number of integrations and whether you need AI agents or dashboards. We recommend a consultation first, then a phased quote." },
];

export const caseStudyCardsEn = [
  { href: "/projects/ai-crm", projectId: "ai-crm", title: "AI CRM", label: "Case study", description: "A delivered CRM connecting LINE and OpenAI, bringing leads, conversation summaries and sales stages into one back office." },
  { href: "/line-ai", projectId: null, title: "LINE AI", label: "Product", coverImage: "/projects/ai-crm.png", description: "A smart analytics and sales platform: LINE Official Account, auto-replies and lead records." },
  { href: "/projects/onlymate", projectId: "onlymate", title: "OnlyMate", label: "Case study", description: "An AI interaction platform: conversation flows, user segments and an admin back office for scripts." },
] as const;
