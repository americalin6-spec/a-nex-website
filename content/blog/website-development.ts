import { createArticleFromTemplate } from "./template";

export const websiteDevelopment = createArticleFromTemplate({
  id: "3",
  slug: "website-development",
  category: "Website Development",
  tags: ["Next.js", "React", "TypeScript", "API"],
  seoTitle: "企業官網開發指南｜從需求到上線｜AXORA",
  metaDescription:
    "說明企業官方網站與行銷頁面如何規劃資訊架構、設計、開發、SEO 與上線後追蹤，打造可持續成長的數位據點。",
  keywords: [
    "企業官網",
    "網站開發",
    "官方網站建置",
    "Landing Page",
    "響應式網頁",
    "Next.js",
  ],
  canonical: "/blog/website-development",
  ogImage: "/projects/ashley-english.png",
  h1: "企業官網開發指南：從需求到上線的完整流程",
  intro:
    "企業官網不只是形象頁，而是信任、服務說明與諮詢轉換的入口。這篇文章整理從目標定義、資訊架構到上線優化的實務流程。",
  coverImage: "/projects/ashley-english.png",
  publishedAt: "2026-06-08",
  updatedAt: "2026-07-08",
  popularScore: 84,
  featured: true,
  sections: [
    {
      id: "define-goals",
      heading: "先定義網站目標與轉換",
      level: 2,
      paragraphs: [
        "先寫清楚目標使用者、主要轉換與必須整合的系統。常見目標包含品牌信任、服務說明、案例展示與諮詢表單轉換。",
      ],
    },
    {
      id: "information-architecture",
      heading: "資訊架構與關鍵頁面",
      level: 2,
      paragraphs: [
        "確認首頁、服務、案例、關於、聯絡與必要落地頁。每個核心服務建議有獨立頁面與清楚標題層級。",
      ],
    },
    {
      id: "tech-stack",
      heading: "技術選型與維護",
      level: 3,
      paragraphs: [
        "Next.js、React 與 TypeScript 適合需要 SEO、效能與長期維護的企業官網。Analytics、Search Console 與表單通知應在前期納入範圍。",
      ],
    },
    {
      id: "build-and-launch",
      heading: "開發、測試與上線",
      level: 2,
      paragraphs: [
        "前端需兼顧響應式體驗、載入效能與表單可靠度。上線前用真實裝置走完：找到服務 → 閱讀案例 → 送出諮詢。",
      ],
    },
    {
      id: "after-launch",
      heading: "上線後持續優化",
      level: 2,
      paragraphs: [
        "觀察搜尋表現、表單轉換與熱門頁面，再決定下一輪內容與 UX 優化。",
      ],
    },
    {
      id: "axora-approach",
      heading: "AXORA 的交付方式",
      level: 2,
      paragraphs: [
        "AXORA 以一致的品牌設計語言建置企業官網與行銷頁面，並整合 SEO 基礎與分析工具。",
      ],
    },
  ],
  faq: [
    {
      question: "企業官網大概需要多久？",
      answer:
        "視頁面數量與整合範圍而定。資訊架構清楚、素材齊備時，通常比邊設計邊改需求更快上線。",
    },
    {
      question: "需要同時做 SEO 嗎？",
      answer:
        "建議上線前就具備基本結構、metadata、sitemap 與可索引正文，避免上線後才補洞。",
    },
  ],
  cta: {
    title: "規劃企業官網？",
    description: "歡迎告訴我們產業與目標轉換，AXORA 協助規劃官網與落地頁方案。",
  },
});
