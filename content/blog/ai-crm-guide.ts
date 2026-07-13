import type { BlogPost } from "./types";

export const aiCrmGuide: BlogPost = {
  id: "1",
  slug: "ai-crm-guide",
  title: "AI CRM 完整指南：如何用智慧客戶管理提升成交",
  description:
    "從 LINE 對話同步、潛客階段到 AI 摘要與跟進提醒，說明企業如何導入 AI CRM，減少漏單並提升成交效率。",
  coverImage: "/projects/ai-crm.png",
  category: "CRM",
  tags: ["AI CRM", "客戶管理", "成交率", "LINE"],
  keywords: [
    "AI CRM",
    "AI 客戶管理系統",
    "CRM 系統",
    "客戶管理",
    "成交率",
    "LINE CRM",
  ],
  publishedAt: "2026-07-01",
  updatedAt: "2026-07-12",
  author: "AXORA",
  readingTime: 10,
  featured: true,
  content: [
    {
      id: "why-ai-crm",
      heading: "為什麼企業需要 AI CRM？",
      paragraphs: [
        "多數業務團隊不是沒有 CRM，而是 CRM 沒有接上真正發生成交的地方。在台灣，報價、催回、改約與成交確認經常發生在 LINE。若對話留在個人手機，後台只有姓名與電話，主管看不到誰該優先跟進，交接時也接不上脈絡。",
        "AI CRM 的價值，是把對話、名單、銷售階段與提醒放進同一系統，再用 AI 幫忙摘要與排序，讓「今天最該聯繫誰」變得清楚。",
      ],
    },
    {
      id: "core-capabilities",
      heading: "AI CRM 的核心能力",
      paragraphs: [
        "第一是進線集中：把 LINE 官方帳號、表單與官網諮詢匯入同一客戶檔案。第二是階段可視化：潛客、報價、協商、成交、流失一目了然。第三是 AI 輔助：自動產生對話摘要、意圖標籤與跟進建議，減少業務手動整理。",
        "對房仲、保險、顧問、教育與 B2B 服務業來說，這三項能力通常比再多一個報表儀表板更有感。",
      ],
    },
    {
      id: "implementation-steps",
      heading: "導入步驟建議",
      paragraphs: [
        "建議先完成「名單進得來、階段看得見、提醒發得出」，再談更進階的成交機率模型。導入初期先定義銷售階段與責任人，再串接 LINE 與通知，最後才優化 AI 規則。",
        "用真實業務走一次完整路徑：進線 → 建檔 → 跟進 → 報價 → 成交。任何卡住的地方，都是系統設計要先解的問題。",
      ],
    },
    {
      id: "common-mistakes",
      heading: "常見失敗原因",
      paragraphs: [
        "一開始就追求複雜 AI 分數、卻沒有穩定進線與階段資料，模型無法落地。其次是沒有人工覆核機制，自動標籤錯誤會讓業務失去信任。最後是系統與日常溝通工具脫節，同事仍把重要對話留在私人聊天室。",
      ],
    },
    {
      id: "how-axora-helps",
      heading: "AXORA 如何協助落地",
      paragraphs: [
        "AXORA 協助企業規劃 AI CRM 架構、LINE 串接、銷售漏斗與提醒流程，並依產業調整欄位與權限。若你正在評估導入，歡迎透過聯絡頁說明產業與現況，我們協助評估可行方案。",
      ],
    },
  ],
};
