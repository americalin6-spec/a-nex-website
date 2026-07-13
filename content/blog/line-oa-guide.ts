import type { BlogPost } from "./types";

export const lineOaGuide: BlogPost = {
  id: "2",
  slug: "line-oa-guide",
  title: "LINE 官方帳號完整指南：從開通到 CRM 串接",
  description:
    "說明 LINE Official Account、Messaging API、自動回覆與 CRM 整合做法，協助品牌把對話轉成可追蹤潛客。",
  coverImage: "/projects/huaren-tong.png",
  category: "LINE OA",
  tags: ["LINE OA", "Messaging API", "自動回覆", "CRM 串接"],
  keywords: [
    "LINE 官方帳號",
    "LINE OA",
    "Messaging API",
    "LINE CRM",
    "自動回覆",
    "官方帳號串接",
  ],
  publishedAt: "2026-06-20",
  updatedAt: "2026-07-10",
  author: "AXORA",
  readingTime: 9,
  featured: true,
  content: [
    {
      id: "why-line-oa",
      heading: "為什麼品牌需要 LINE 官方帳號？",
      paragraphs: [
        "台灣多數客戶諮詢發生在 LINE。若訊息散落在個人手機，業務很難交接、主管也無法掌握服務品質。官方帳號能把品牌溝通集中，並透過 Messaging API 與後台系統串接。",
      ],
    },
    {
      id: "setup-basics",
      heading: "開通與基礎設定",
      paragraphs: [
        "先完成帳號開通、圖文選單、歡迎訊息與營業時間回覆。接著定義常見問題關鍵字，讓標準詢問能快速分流。高意向對話再轉人工，避免客服與業務權責不清。",
        "技術面需確認 Webhook、權限與訊息事件日誌，確保後續串接 CRM 時資料完整可追溯。",
      ],
    },
    {
      id: "crm-integration",
      heading: "與 CRM 串接的實務做法",
      paragraphs: [
        "透過 Official Account 與 Messaging API，可把進線自動建立潛客，並同步標籤、來源與對話摘要到 CRM。建議在建立潛客時保留原始對話連結或摘要，方便業務接手。",
        "若已有 AI 摘要能力，可在每段對話結束後寫入「意圖、急迫度、下一步建議」，讓主管一眼看出優先順序。",
      ],
    },
    {
      id: "auto-reply-tips",
      heading: "自動回覆最佳實踐",
      paragraphs: [
        "自動回覆的目標是快速回應與正確分流，而不是取代所有人工服務。用選單覆蓋最常見問題，並在無法判斷意圖時清楚提供轉接人工的路徑。",
        "定期檢視未命中關鍵字的對話，是優化自動回覆內容最好的來源。",
      ],
    },
    {
      id: "next-steps",
      heading: "下一步建議",
      paragraphs: [
        "若你的團隊已大量使用 LINE 溝通，卻仍用試算表追蹤名單，優先完成官方帳號集中與 CRM 串接，通常比再增加客服人力更有效。AXORA 可協助規劃 LINE OA 與 AI CRM 整合方案。",
      ],
    },
  ],
};
