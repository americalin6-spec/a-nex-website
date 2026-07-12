export const BLOG_CATEGORIES = [
  "AI",
  "CRM",
  "LINE OA",
  "網站開發",
  "APP",
  "SEO",
  "SaaS",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readingTime: number;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ai-crm-improve-conversion",
    title: "AI 客戶管理系統如何提升成交率？",
    description:
      "以 AXORA 已交付的 AI CRM 實務為例：LINE 對話、潛客資料與銷售階段如何集中，業務才能少漏單、更快成交。",
    coverImage: "/projects/ai-crm.png",
    category: "AI",
    tags: ["AI CRM", "成交率", "LINE", "客戶管理"],
    publishedAt: "2026-06-02",
    updatedAt: "2026-07-12",
    author: "AXORA",
    readingTime: 8,
    featured: true,
    content: [
      "多數業務團隊不是沒有 CRM，而是 CRM 沒有接上真正發生成交的地方。在台灣，報價、催回、改約、成交確認經常發生在 LINE。若對話留在個人手機，後台只有姓名與電話，主管看不到誰該優先跟、交接時也接不上脈絡。",
      "AXORA 在 AI CRM 專案中把三件事放進同一後台：一是 LINE 官方帳號對話同步到客戶檔案；二是用 OpenAI 產生對話摘要與意圖標籤，減少業務手動整理；三是把銷售階段做成可視化管道，並加上跟進提醒。目標不是再多一個資料庫，而是讓「誰該在今天聯繫」變得清楚。",
      "成交率要提升，通常先解兩個漏單來源。第一是高意向客戶沒人跟：例如已要報價、已約看房／面談，卻因為忙而沉到聊天室底部。第二是交接失真：原承辦請假或離職，下一個人看不到完整對話與階段。CRM 若能同時顯示階段、最近摘要與下一次提醒，這兩類流失會明顯下降。",
      "導入順序也很重要。我們建議先完成「名單進得來、階段看得見、提醒發得出」，再談更進階的成交機率模型。對房仲、保險、顧問這類高跟進產業，先把 LINE 進線變成可追蹤潛客，比一開始追求複雜 AI 分數更有感。等資料累積穩定後，再依互動頻率、回覆速度與階段停留時間優化優先順序。",
      "若你正在評估 AI CRM，可以用三個問題自測：客戶主要溝通是否在 LINE？業務是否仍用試算表記階段？主管能否在五分鐘內指出本週最該跟的十個名單？只要有兩個答案是「是／否不清楚」，就值得把對話、摘要與管道收斂到同一系統。",
    ],
  },
  {
    id: "2",
    slug: "crm-pipeline-for-sme",
    title: "中小企業 CRM 銷售漏斗設計指南",
    description:
      "從潛客、報價、協商到成交，整理一套適合台灣中小企業的 CRM 銷售階段與追蹤指標。",
    coverImage: "/projects/ai-crm.png",
    category: "CRM",
    tags: ["CRM", "銷售漏斗", "中小企業"],
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
    author: "AXORA",
    readingTime: 7,
    featured: true,
    content: [
      "CRM 不是把名片打進系統就結束，關鍵在於銷售階段是否對應真實流程。",
      "建議至少區分：新名單、已聯繫、需求確認、報價中、成交、流失。每個階段設定下一步行動與責任人。",
      "搭配每週檢視「卡住超過 7 天」的商機，就能快速發現漏斗瓶頸。",
    ],
  },
  {
    id: "3",
    slug: "line-oa-crm-integration",
    title: "LINE 官方帳號串接 CRM 的實務做法",
    description:
      "介紹 LINE Official Account、Messaging API 與 CRM 整合後，如何把對話轉成可追蹤的潛客紀錄。",
    coverImage: "/projects/onlymate.png",
    category: "LINE OA",
    tags: ["LINE OA", "Messaging API", "CRM 串接"],
    publishedAt: "2026-05-20",
    updatedAt: "2026-05-22",
    author: "AXORA",
    readingTime: 8,
    featured: true,
    content: [
      "台灣多數客戶諮詢發生在 LINE。若訊息散落在個人手機，業務很難交接與追蹤。",
      "透過 Official Account 與 Messaging API，可把進線自動建立潛客，並同步標籤、來源與對話摘要到 CRM。",
      "建議先定義自動回覆範圍，再把高意向對話轉人工，避免客服與業務權責不清。",
    ],
  },
  {
    id: "4",
    slug: "corporate-website-seo-structure",
    title: "企業官網 SEO 架構怎麼規劃？",
    description:
      "從資訊架構、標題層級、內部連結到技術 SEO，說明企業官網上線前該具備的 SEO 基礎。",
    coverImage: "/projects/ashley-english.png",
    category: "SEO",
    tags: ["SEO", "企業官網", "資訊架構"],
    publishedAt: "2026-05-12",
    updatedAt: "2026-05-15",
    author: "AXORA",
    readingTime: 9,
    content: [
      "好的 SEO 從網站結構開始：每個核心服務應有獨立落地頁，並有清楚的 H1／H2 層級。",
      "技術面至少包含 canonical、sitemap、Open Graph，以及可被索引的正文內容。",
      "內容面則要以使用者搜尋意圖撰寫，而不是堆疊關鍵字。品牌名稱也要在 title 與正文中一致。",
    ],
  },
  {
    id: "5",
    slug: "saas-mvp-checklist",
    title: "SaaS MVP 上線前檢查清單",
    description:
      "協助新創與企業團隊在打造 SaaS 平台時，確認帳號、權限、訂閱、監控與文件是否就緒。",
    coverImage: "/projects/huaren-tong.png",
    category: "SaaS",
    tags: ["SaaS", "MVP", "產品開發"],
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
    author: "AXORA",
    readingTime: 6,
    content: [
      "SaaS MVP 不需要功能齊全，但需要穩定：註冊登入、權限、核心工作流程、錯誤追蹤。",
      "若採訂閱制，至少要有方案切換、帳單狀態與取消流程的基本設計。",
      "上線前用真實角色走一次完整路徑，比再加三個次要功能更有價值。",
    ],
  },
  {
    id: "6",
    slug: "custom-web-development-process",
    title: "客製化網站開發流程：從需求到上線",
    description:
      "說明 AXORA 客製化網站專案如何進行需求分析、設計、開發、測試與部署。",
    coverImage: "/projects/zhongzhi-studio.png",
    category: "網站開發",
    tags: ["網站開發", "專案流程", "Next.js"],
    publishedAt: "2026-04-28",
    updatedAt: "2026-04-30",
    author: "AXORA",
    readingTime: 7,
    content: [
      "客製化網站的成敗取決於需求是否被寫清楚：目標使用者、主要轉換、必備整合。",
      "設計階段先確認資訊架構與關鍵頁面，再進入前端實作與後台串接。",
      "上線後仍需觀察搜尋表現、表單轉換與載入速度，作為下一輪優化依據。",
    ],
  },
  {
    id: "7",
    slug: "app-development-ios-android",
    title: "APP 開發該選原生還是跨平台？",
    description:
      "比較 iOS／Android 原生與跨平台方案，協助企業依預算、時程與功能需求做決策。",
    coverImage: "/projects/onlymate.png",
    category: "APP",
    tags: ["APP 開發", "iOS", "Android"],
    publishedAt: "2026-04-18",
    updatedAt: "2026-04-18",
    author: "AXORA",
    readingTime: 8,
    content: [
      "若高度依賴裝置能力或複雜動畫，原生仍有優勢；若要快速覆蓋雙平台，跨平台更有效率。",
      "決策應看：上線時程、維護人力、離線需求、與既有後端 API 的整合方式。",
      "無論技術選型，產品流程與資料模型都應先於畫面細節確定。",
    ],
  },
  {
    id: "8",
    slug: "ai-automation-for-operations",
    title: "企業流程 AI 自動化從哪裡開始？",
    description:
      "用客服回覆、表單分類、通知提醒為例，說明 AI 自動化導入的優先順序與風險控管。",
    coverImage: "/projects/ai-crm.png",
    category: "AI",
    tags: ["AI 自動化", "流程優化", "營運"],
    publishedAt: "2026-04-10",
    updatedAt: "2026-04-12",
    author: "AXORA",
    readingTime: 6,
    content: [
      "自動化應從「高重複、低風險、規則清楚」的流程開始，例如表單分流與標準回覆。",
      "先建立人工覆核機制，再逐步放寬自動決策範圍，能降低錯誤成本。",
      "成功指標不是「自動化了多少」，而是節省工時與錯誤率是否改善。",
    ],
  },
  {
    id: "9",
    slug: "line-oa-auto-reply-best-practices",
    title: "LINE 官方帳號自動回覆最佳實踐",
    description:
      "整理歡迎訊息、關鍵字選單、營業時間回覆與轉人工機制，幫助品牌維持服務品質。",
    coverImage: "/projects/ashley-english.png",
    category: "LINE OA",
    tags: ["LINE OA", "自動回覆", "客服"],
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-03",
    author: "AXORA",
    readingTime: 5,
    content: [
      "自動回覆的目標是快速回應與正確分流，而不是取代所有人工服務。",
      "建議用選單覆蓋最常見問題，並在無法判斷意圖時清楚提供轉接人工的路徑。",
      "定期檢視未命中關鍵字的對話，是優化自動回覆內容的最好來源。",
    ],
  },
  {
    id: "10",
    slug: "saas-pricing-and-retention",
    title: "SaaS 訂閱定價與留存的基本策略",
    description:
      "從方案分層、試用轉換到續約提醒，說明 SaaS 產品常見的定價與留存設計重點。",
    coverImage: "/projects/huaren-tong.png",
    category: "SaaS",
    tags: ["SaaS", "訂閱", "留存"],
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-26",
    author: "AXORA",
    readingTime: 7,
    content: [
      "定價應對應可感知的價值層級，避免方案差異只是功能數量堆疊。",
      "試用期要讓使用者完成一次核心價值體驗，否則轉換率很難提升。",
      "留存靠持續使用：啟用引導、關鍵事件通知與定期價值回報缺一不可。",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts() {
  return blogPosts.filter((post) => post.featured);
}

export function getLatestBlogPosts() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
