import type { BlogPost } from "./types";

export const websiteDevelopment: BlogPost = {
  id: "3",
  slug: "website-development",
  title: "企業官網開發指南：從需求到上線的完整流程",
  description:
    "說明企業官方網站與行銷頁面如何規劃資訊架構、設計、開發、SEO 與上線後追蹤，打造可持續成長的數位據點。",
  coverImage: "/projects/ashley-english.png",
  category: "網站開發",
  tags: ["網站開發", "企業官網", "Landing Page", "Next.js"],
  keywords: [
    "企業官網",
    "網站開發",
    "官方網站建置",
    "Landing Page",
    "響應式網頁",
    "Next.js",
  ],
  publishedAt: "2026-06-08",
  updatedAt: "2026-07-08",
  author: "AXORA",
  readingTime: 8,
  featured: true,
  content: [
    {
      id: "define-goals",
      heading: "先定義網站目標與轉換",
      paragraphs: [
        "客製化網站的成敗取決於需求是否被寫清楚：目標使用者是誰、主要轉換是什麼、必須整合哪些系統。企業官網常見目標包含品牌信任、服務說明、案例展示與諮詢表單轉換。",
      ],
    },
    {
      id: "information-architecture",
      heading: "資訊架構與關鍵頁面",
      paragraphs: [
        "設計階段先確認資訊架構：首頁、服務、案例、關於、聯絡，以及必要的落地頁。每個核心服務建議有獨立頁面，並有清楚的標題層級與內部連結，方便使用者與搜尋引擎理解內容。",
      ],
    },
    {
      id: "build-and-launch",
      heading: "開發、測試與上線",
      paragraphs: [
        "前端實作應兼顧響應式體驗、載入效能與表單可靠度。若需多語系、Analytics、Search Console 或後台內容更新，應在開發前期納入範圍，避免上線後才補洞。",
        "上線前用真實裝置與角色走一次完整路徑：找到服務 → 閱讀案例 → 送出諮詢。任何斷點都會直接影響轉換。",
      ],
    },
    {
      id: "after-launch",
      heading: "上線後持續優化",
      paragraphs: [
        "上線不是結束。需觀察搜尋表現、表單轉換、熱門頁面與載入速度，再決定下一輪內容與 UX 優化。搭配 Google Analytics 與 Search Console，能更快找出值得投資的頁面。",
      ],
    },
    {
      id: "axora-approach",
      heading: "AXORA 的交付方式",
      paragraphs: [
        "AXORA 以品牌一致的設計語言建置企業官網與行銷頁面，並整合 SEO 基礎與分析工具。若你正在規劃改版或全新官網，歡迎聯絡我們討論需求。",
      ],
    },
  ],
};
