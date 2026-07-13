import { createArticleFromTemplate } from "./template";

export const lineOaGuide = createArticleFromTemplate({
  id: "2",
  slug: "line-oa-guide",
  category: "LINE OA",
  tags: ["LINE", "CRM", "API", "Automation"],
  seoTitle: "LINE 官方帳號完整指南｜開通到 CRM 串接｜AXORA",
  metaDescription:
    "說明 LINE Official Account、Messaging API、自動回覆與 CRM 整合做法，協助品牌把對話轉成可追蹤潛客。",
  keywords: [
    "LINE 官方帳號",
    "LINE OA",
    "Messaging API",
    "LINE CRM",
    "自動回覆",
    "官方帳號串接",
  ],
  canonical: "/blog/line-oa-guide",
  ogImage: "/projects/huaren-tong.png",
  h1: "LINE 官方帳號完整指南：從開通到 CRM 串接",
  intro:
    "台灣多數客戶諮詢發生在 LINE。官方帳號能把品牌溝通集中，並透過 Messaging API 與 CRM 串接，讓對話變成可追蹤的營運資產。",
  coverImage: "/projects/huaren-tong.png",
  publishedAt: "2026-06-20",
  updatedAt: "2026-07-10",
  popularScore: 92,
  featured: true,
  sections: [
    {
      id: "why-line-oa",
      heading: "為什麼品牌需要 LINE 官方帳號？",
      level: 2,
      paragraphs: [
        "若訊息散落在個人手機，業務很難交接、主管也無法掌握服務品質。官方帳號把進線集中，並為後續自動化與 CRM 整合打下基礎。",
      ],
    },
    {
      id: "setup-basics",
      heading: "開通與基礎設定",
      level: 2,
      paragraphs: [
        "先完成帳號開通、圖文選單、歡迎訊息與營業時間回覆。接著定義常見問題關鍵字，讓標準詢問能快速分流。高意向對話再轉人工。",
      ],
    },
    {
      id: "webhook-notes",
      heading: "Webhook 與訊息事件",
      level: 3,
      paragraphs: [
        "技術面需確認 Webhook、權限與訊息事件日誌，確保後續串接 CRM 時資料完整可追溯。",
      ],
    },
    {
      id: "crm-integration",
      heading: "與 CRM 串接的實務做法",
      level: 2,
      paragraphs: [
        "可把進線自動建立潛客，並同步標籤、來源與對話摘要到 CRM。建議保留摘要與下一步建議，方便業務接手。",
      ],
    },
    {
      id: "auto-reply-tips",
      heading: "自動回覆最佳實踐",
      level: 2,
      paragraphs: [
        "自動回覆的目標是快速回應與正確分流，而不是取代所有人工服務。定期檢視未命中關鍵字的對話，是優化內容最好的來源。",
      ],
    },
    {
      id: "next-steps",
      heading: "下一步建議",
      level: 2,
      paragraphs: [
        "若團隊大量使用 LINE 卻仍用試算表追蹤名單，優先完成官方帳號集中與 CRM 串接，通常比再增加客服人力更有效。",
      ],
    },
  ],
  faq: [
    {
      question: "一定要接 Messaging API 嗎？",
      answer:
        "若只要基本自動回覆，官方後台即可；若要寫入 CRM、做進線歸因或 AI 摘要，建議使用 Messaging API。",
    },
    {
      question: "自動回覆會不會讓客戶反感？",
      answer:
        "關鍵在分流清楚：標準問題快速回答，複雜需求提供轉人工路徑，並標示服務時間。",
    },
  ],
  cta: {
    title: "需要 LINE OA 與 CRM 整合？",
    description: "AXORA 可協助規劃官方帳號、自動回覆與客戶管理串接方案。",
  },
});
