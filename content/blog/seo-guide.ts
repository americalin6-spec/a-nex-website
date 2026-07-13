import { createArticleFromTemplate } from "./template";

export const seoGuide = createArticleFromTemplate({
  id: "4",
  slug: "seo-guide",
  category: "SEO",
  tags: ["Next.js", "TypeScript", "API"],
  seoTitle: "企業 SEO 指南｜架構、內容與技術實務｜AXORA",
  metaDescription:
    "從資訊架構、標題層級、內部連結、metadata 到 sitemap 與結構化資料，整理企業網站 SEO 上線前該具備的基礎。",
  keywords: [
    "SEO",
    "搜尋引擎優化",
    "企業官網 SEO",
    "canonical",
    "sitemap",
    "Open Graph",
    "結構化資料",
  ],
  canonical: "/blog/seo-guide",
  ogImage: "/projects/zhongzhi-studio.png",
  h1: "企業 SEO 指南：從架構、內容到技術的實務做法",
  intro:
    "SEO 不是堆關鍵字，而是讓使用者與搜尋引擎都能清楚理解你的服務與內容。以下整理企業站最實用的結構、內容與技術清單。",
  coverImage: "/projects/zhongzhi-studio.png",
  publishedAt: "2026-05-25",
  updatedAt: "2026-07-05",
  popularScore: 78,
  featured: false,
  sections: [
    {
      id: "seo-starts-with-structure",
      heading: "SEO 從網站結構開始",
      level: 2,
      paragraphs: [
        "每個核心服務應有獨立落地頁，並有清楚的 H1／H2 層級。使用者能快速找到答案，搜尋引擎也更容易理解主題。",
      ],
    },
    {
      id: "on-page-basics",
      heading: "頁面內容與關鍵字",
      level: 2,
      paragraphs: [
        "內容應對應真實搜尋意圖。品牌名稱在 title 與正文保持一致，內部連結幫助主題關聯在站內流動。",
      ],
    },
    {
      id: "technical-seo",
      heading: "技術 SEO 清單",
      level: 2,
      paragraphs: [
        "至少包含 canonical、sitemap、robots、Open Graph、Twitter Card，以及可被索引的正文。文章系統應為每篇產生獨立 metadata 與結構化資料。",
      ],
    },
    {
      id: "structured-data",
      heading: "結構化資料的價值",
      level: 3,
      paragraphs: [
        "JSON-LD 協助搜尋引擎理解組織、服務、文章與麵包屑。Blog 建議使用 BlogPosting，並可搭配 FAQPage。",
      ],
    },
    {
      id: "measure-and-iterate",
      heading: "衡量與迭代",
      level: 2,
      paragraphs: [
        "透過 Search Console 觀察索引與查詢表現，再依資料補強內容與內部連結。",
      ],
    },
  ],
  faq: [
    {
      question: "新站多久看得到 SEO 效果？",
      answer:
        "視競爭度與內容品質而定。先確保可索引與結構正確，再持續產出對應搜尋意圖的內容。",
    },
    {
      question: "有 Blog 一定比較好嗎？",
      answer:
        "Blog 有助於覆蓋長尾搜尋與建立專業信任，但文章品質與內部連結比發文頻率更重要。",
    },
  ],
  cta: {
    title: "需要 SEO 與內容架構協助？",
    description: "AXORA 可在官網與內容系統建置時，一併把 SEO 基礎納入交付。",
  },
});
