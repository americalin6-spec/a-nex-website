import type { BlogPost } from "./types";

export const seoGuide: BlogPost = {
  id: "4",
  slug: "seo-guide",
  title: "企業 SEO 指南：從架構、內容到技術的實務做法",
  description:
    "從資訊架構、標題層級、內部連結、metadata 到 sitemap 與結構化資料，整理企業網站 SEO 上線前該具備的基礎。",
  coverImage: "/projects/zhongzhi-studio.png",
  category: "SEO",
  tags: ["SEO", "搜尋引擎優化", "結構化資料", "sitemap"],
  keywords: [
    "SEO",
    "搜尋引擎優化",
    "企業官網 SEO",
    "canonical",
    "sitemap",
    "Open Graph",
    "結構化資料",
  ],
  publishedAt: "2026-05-25",
  updatedAt: "2026-07-05",
  author: "AXORA",
  readingTime: 9,
  featured: false,
  content: [
    {
      id: "seo-starts-with-structure",
      heading: "SEO 從網站結構開始",
      paragraphs: [
        "好的 SEO 從網站結構開始：每個核心服務應有獨立落地頁，並有清楚的 H1／H2 層級。使用者能快速找到答案，搜尋引擎也更容易理解頁面主題。",
      ],
    },
    {
      id: "on-page-basics",
      heading: "頁面內容與關鍵字",
      paragraphs: [
        "內容應對應真實搜尋意圖，而不是堆疊關鍵字。品牌名稱要在 title 與正文中一致，描述需清楚說明頁面能解決什麼問題。內部連結則幫助權重與主題關聯在站內流動。",
      ],
    },
    {
      id: "technical-seo",
      heading: "技術 SEO 清單",
      paragraphs: [
        "技術面至少包含 canonical、sitemap、robots、Open Graph、Twitter Card，以及可被索引的正文內容。若有文章系統，應為每篇文章產生獨立 metadata 與結構化資料。",
        "載入速度、行動裝置體驗與 HTTPS 也會影響整體表現，尤其是以諮詢轉換為目標的企業官網。",
      ],
    },
    {
      id: "structured-data",
      heading: "結構化資料的價值",
      paragraphs: [
        "JSON-LD 能協助搜尋引擎理解組織、服務、文章與麵包屑。Blog 文章建議使用 BlogPosting，服務頁可用 Service，案例可用 CreativeWork，讓結果呈現更完整。",
      ],
    },
    {
      id: "measure-and-iterate",
      heading: "衡量與迭代",
      paragraphs: [
        "SEO 不是一次設定就結束。透過 Search Console 觀察索引與查詢表現，再依資料補強內容與內部連結。AXORA 在官網與內容系統建置時，會一併把這些 SEO 基礎納入交付。",
      ],
    },
  ],
};
