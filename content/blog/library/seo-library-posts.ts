import { createArticleFromTemplate } from "../template";
import type { BlogPost } from "../types";

const SITE = "https://www.axora.tw";

export const whatIsAiCrm = createArticleFromTemplate({
  id: "101",
  slug: "what-is-ai-crm",
  category: "AI CRM",
  tags: ["AI", "CRM", "LINE", "OpenAI", "Automation"],
  seoTitle: "AI CRM 是什麼？智慧客戶管理完整說明｜AXORA",
  metaDescription:
    "用白話說明 AI CRM 是什麼、與傳統 CRM 的差異，以及企業如何用 AI 提升跟進、減少漏單並提高成交效率。",
  keywords: [
    "AI CRM",
    "AI CRM 是什麼",
    "智慧客戶管理",
    "AI 客戶管理系統",
    "CRM 系統",
    "潛客管理",
    "銷售漏斗",
    "LINE CRM",
    "成交率",
    "客戶跟進",
    "OpenAI CRM",
    "業務自動化",
  ],
  canonical: "/blog/what-is-ai-crm",
  ogImage: "/projects/ai-crm.png",
  h1: "AI CRM 是什麼？",
  intro:
    "AI CRM 是結合人工智慧能力的客戶關係管理系統。它不只記錄名單與成交階段，還能摘要對話、標註意圖、提醒跟進，並協助業務排出優先順序。對台灣企業來說，AI CRM 常與 LINE 官方帳號、表單進線與銷售漏斗一起導入，目標是減少漏單、縮短回應時間，並讓主管看得到真實的跟進品質。本文用白話說明定義、差異、模組與導入時機，協助你快速判斷是否該升級現有流程。",
  description:
    "用白話說明 AI CRM 是什麼、與傳統 CRM 的差異，以及企業如何用 AI 提升跟進與成交效率。",
  coverImage: "/projects/ai-crm.png",
  publishedAt: "2026-07-08",
  updatedAt: "2026-07-13",
  popularScore: 96,
  featured: false,
  sections: [
    {
      id: "ai-crm-definition",
      heading: "AI CRM 的定義",
      level: 2,
      paragraphs: [
        "傳統 CRM 解決的是「資料放哪裡」；AI CRM 進一步解決「資料怎麼用」。系統仍保有聯絡人、商機、階段與任務，但多了模型輔助：自動產生對話摘要、判斷高意向訊號、建議下一步，甚至依互動頻率排出今日優先名單。",
        "因此，AI CRM 不是另一個聊天機器人，而是把 AI 嵌進客戶管理與成交流程。業務仍負責關係與判斷，AI 負責減少複製貼上與遺漏。若團隊連基本階段管理都尚未建立，建議先補齊 CRM 基礎，再談 AI 能力。",
        "若你還不熟悉 CRM 基本概念，可先閱讀〈CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-crm），再回到本文評估是否升級。",
      ],
    },
    {
      id: "vs-traditional",
      heading: "與傳統 CRM 的差異",
      level: 2,
      paragraphs: [
        "差異主要在三點。第一，資料進入方式：傳統多靠人工登錄；AI CRM 可同步 LINE、表單與郵件脈絡。第二，整理成本：摘要與標籤可半自動產生，減少下班前補資料的負擔。第三，決策支援：系統能提示「誰該先跟」，而不只是靜態報表。",
        "這不代表傳統 CRM 沒有價值。若進線穩定、階段清楚、全員有登錄習慣，再加上 AI，效益會放大；若資料本來就亂，AI 只會更快產出不可信的標籤。治理仍是前提。",
        "若企業同時在評估進銷存或財務系統，也不要把 AI CRM 與 ERP 混為一談。兩者定位不同，詳見〈ERP 與 CRM 差異〉（" +
          SITE +
          "/blog/erp-vs-crm）。",
      ],
    },
    {
      id: "key-modules",
      heading: "常見功能模組",
      level: 3,
      paragraphs: [
        "常見模組包含潛客管理、銷售階段、任務提醒、對話同步，以及與 OpenAI 等 API 的摘要與分類能力。實務上建議先把「進得來、看得見、提醒得出」做穩，再談更進階的成交分數或自動派案。",
        "模組選型應回到產業節奏：高跟進產業重視提醒與摘要；產品型業務可能更看重報價與方案紀錄。先對齊流程，再決定要不要深度客製。",
      ],
    },
    {
      id: "taiwan-context",
      heading: "為什麼台灣企業特別需要",
      level: 2,
      paragraphs: [
        "在台灣，報價、催回、改約與成交確認經常發生在 LINE。若對話留在個人手機，後台只有姓名與電話，主管看不到誰該優先跟進，交接也容易斷層。AI CRM 的價值，正是把真實溝通場景接回客戶檔案。",
        "房仲、保險、教育、顧問與 B2B 服務業，通常能很快感受到「少漏單、交接更順」的差異。當對話、階段與提醒在同一畫面，晨會與週報也會從「憑感覺」變成「看數據」。",
      ],
    },
    {
      id: "when-to-adopt",
      heading: "什麼時候該導入",
      level: 2,
      paragraphs: [
        "若進線量大、跟進常漏、交接困難，或重要對話散落在私人聊天室，就值得評估。導入順序建議：定義階段與責任人 → 串接進線來源 → 建立提醒 → 再加上 AI 摘要與排序。",
        "不要一開始就追求複雜模型；沒有乾淨的進線與階段資料，AI 也難以發揮。可用兩週 POC 驗證：摘要是否省時間、提醒是否真的減少漏單，再決定擴大範圍。",
      ],
    },
    {
      id: "further-reading",
      heading: "延伸閱讀",
      level: 2,
      paragraphs: [
        "建議接續閱讀：〈CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-crm）、〈ERP 與 CRM 差異〉（" +
          SITE +
          "/blog/erp-vs-crm），以及站內〈AI CRM 完整指南〉（" +
          SITE +
          "/blog/ai-crm-guide）。若你準備評估導入，歡迎透過聯絡頁與 AXORA 討論產業與現況。",
      ],
    },
  ],
  faq: [
    {
      question: "AI CRM 一定要很大預算嗎？",
      answer:
        "不一定。可先從核心進線、階段與提醒開始，再擴充 AI 摘要與自動化，依價值分階段投入。",
    },
    {
      question: "會取代業務嗎？",
      answer:
        "不會。AI 負責整理與提示，成交判斷、談判與關係經營仍由人完成。",
    },
    {
      question: "和一般客服機器人一樣嗎？",
      answer:
        "不一樣。AI CRM 著重客戶檔案、銷售階段與成交流程，不只是自動回覆常見問題。",
    },
    {
      question: "需要接 LINE 嗎？",
      answer:
        "台灣多數產業建議接上官方帳號，因為真實溝通常發生在 LINE，接上後資料才完整。",
    },
  ],
  cta: {
    title: "聯絡 AXORA",
    description:
      "想導入 AI CRM 或先釐清適不適合？告訴我們產業與現況，AXORA 協助規劃可行方案。",
  },
});

export const whatIsCrm = createArticleFromTemplate({
  id: "102",
  slug: "what-is-crm",
  category: "CRM",
  tags: ["CRM", "API", "Automation"],
  seoTitle: "CRM 是什麼？客戶關係管理入門指南｜AXORA",
  metaDescription:
    "解釋 CRM 是什麼、核心模組有哪些，以及中小企業如何用 CRM 把潛客、跟進與成交流程系統化。",
  keywords: [
    "CRM",
    "CRM 是什麼",
    "客戶關係管理",
    "客戶管理系統",
    "潛客管理",
    "銷售管理",
    "客戶資料",
    "跟進提醒",
    "成交管理",
    "中小企業 CRM",
    "CRM 導入",
    "業務系統",
  ],
  canonical: "/blog/what-is-crm",
  ogImage: "/projects/ashley-english.png",
  h1: "CRM 是什麼？",
  intro:
    "CRM（Customer Relationship Management）是客戶關係管理，用來集中管理潛客與客戶資料、互動紀錄、銷售階段與任務。目標是讓團隊用同一套資料協作，而不是各寫各的試算表。好的 CRM 會對應真實銷售流程，並指定責任人與下一步行動，讓成交過程可追蹤、可交接、可改善。對中小企業而言，CRM 往往是數位化最有感、也最該先做穩的一塊。",
  description:
    "解釋 CRM 是什麼、核心模組有哪些，以及中小企業如何用 CRM 把潛客、跟進與成交流程系統化。",
  coverImage: "/projects/ashley-english.png",
  publishedAt: "2026-07-07",
  updatedAt: "2026-07-13",
  popularScore: 94,
  featured: false,
  sections: [
    {
      id: "crm-definition",
      heading: "CRM 的基本定義",
      level: 2,
      paragraphs: [
        "可以把 CRM 想成「顧客旅程的共用記事本＋流程看板」。每一位潛客從哪裡來、談過什麼、目前卡在哪個階段、下次該誰聯繫，都應能在系統中查到。這樣即使業務請假或交接，脈絡也不會消失。",
        "CRM 服務的不只是業務，行銷可用來追蹤來源成效，客服可查看歷史互動，主管則能看到漏斗瓶頸。它是跨角色的營運基礎建設，也是後續導入 AI 或自動化的資料底座。",
      ],
    },
    {
      id: "core-value",
      heading: "CRM 帶來的價值",
      level: 2,
      paragraphs: [
        "價值不只在「存資料」，而在可追蹤、可交接、可分析。當階段定義清楚，團隊就能每週檢視卡住過久的商機；當提醒到位，高意向客戶比較不會沉到聊天室底部。長期下來，成交率與回應速度通常會一起改善。",
        "若再把 AI 摘要與優先排序加上去，就會走向 AI CRM。想了解差異與適用時機，可閱讀〈AI CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-ai-crm）。先把 CRM 用起來，再加 AI，成功率通常更高。",
      ],
    },
    {
      id: "crm-modules",
      heading: "核心模組一次看懂",
      level: 3,
      paragraphs: [
        "常見模組包含聯絡人／公司、商機或案件、活動紀錄、任務提醒、報表與權限。進階則會串接官網表單、LINE 官方帳號或 Email。模組不必一次齊全，先覆蓋你們真正在跑的流程即可。",
        "欄位設計宜精簡：只留會影響跟進決策的資訊。欄位愈多，愈容易沒人填，最後系統變成空殼。",
      ],
    },
    {
      id: "crm-vs-erp",
      heading: "CRM 和 ERP 不要混用",
      level: 2,
      paragraphs: [
        "CRM 面向客戶與成交；ERP 面向進銷存、財務與內部資源。用 ERP 硬做銷售跟進，或用 CRM 硬做庫存帳務，通常都會卡住。完整比較請看〈ERP 與 CRM 差異〉（" +
          SITE +
          "/blog/erp-vs-crm）。",
        "實務上很多企業會兩者並存：CRM 管成交前，ERP 管成交後。關鍵是主資料與同步規則要先談清楚。",
      ],
    },
    {
      id: "sme-start",
      heading: "中小企業如何開始",
      level: 2,
      paragraphs: [
        "先定義必要欄位與階段（例如：新名單、已聯繫、需求確認、報價、成交、流失），再要求全員把關鍵互動記進系統。流程穩定後，再評估升級到 AI CRM，或與官網、LINE、ERP 串接。",
        "導入失敗常見原因是欄位過多、沒人維護，以及系統與真實溝通管道脫節。從精簡開始，配上每週檢視機制，反而更容易養成使用習慣，也比較快看到管理效益。",
      ],
    },
    {
      id: "further-reading",
      heading: "延伸閱讀",
      level: 2,
      paragraphs: [
        "延伸閱讀：〈AI CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-ai-crm）、〈ERP 與 CRM 差異〉（" +
          SITE +
          "/blog/erp-vs-crm）。若需要依產業客製流程，歡迎聯絡 AXORA。",
      ],
    },
  ],
  faq: [
    {
      question: "CRM 跟 Excel 差在哪？",
      answer:
        "Excel 難多人即時協作、權限控管與提醒；CRM 更適合持續跟進、交接與階段管理。",
    },
    {
      question: "小團隊也需要嗎？",
      answer:
        "只要有重複進線與多人交接，通常就值得導入，越早建立資料越有複利。",
    },
    {
      question: "CRM 一定要客製嗎？",
      answer:
        "流程特殊才需要深度客製。多數團隊可先用標準階段跑起來，再依痛點調整。",
    },
    {
      question: "導入失敗常見原因？",
      answer:
        "欄位過多、沒有責任人維護，以及系統沒接上 LINE 或表單等真實進線來源。",
    },
  ],
  cta: {
    title: "聯絡 AXORA",
    description:
      "正在評估 CRM 或不知從何開始？告訴我們產業與痛點，AXORA 協助規劃導入順序。",
  },
});

export const erpVsCrm = createArticleFromTemplate({
  id: "103",
  slug: "erp-vs-crm",
  category: "CRM",
  tags: ["CRM", "ERP", "API"],
  seoTitle: "ERP 與 CRM 差異｜何時該用哪個系統｜AXORA",
  metaDescription:
    "比較 ERP 與 CRM 的定位、適用場景與整合方式，協助企業避免把兩個系統的問題混在一起，選對導入順序。",
  keywords: [
    "ERP",
    "CRM",
    "ERP 與 CRM 差異",
    "企業資源規劃",
    "客戶關係管理",
    "系統整合",
    "進銷存",
    "銷售管理",
    "ERP CRM 整合",
    "數位轉型",
    "營運系統",
    "業務系統",
  ],
  canonical: "/blog/erp-vs-crm",
  ogImage: "/projects/huaren-tong.png",
  h1: "ERP 與 CRM 差異",
  intro:
    "CRM 面向客戶與成交：管名單、商機、互動與服務。ERP 面向內部資源：進銷存、財務、採購、製造與人資等營運流程。簡單說，CRM 回答「客戶進度如何」；ERP 回答「貨、帳、產能與成本如何」。選錯系統，常會變成用錯誤工具硬解問題，專案時程與成本都會膨脹。本文協助你快速對齊差異、導入順序與整合原則。",
  description:
    "比較 ERP 與 CRM 的定位、適用場景與整合方式，協助企業避免把兩個系統的問題混在一起。",
  coverImage: "/projects/huaren-tong.png",
  publishedAt: "2026-07-06",
  updatedAt: "2026-07-13",
  popularScore: 80,
  featured: false,
  sections: [
    {
      id: "positioning",
      heading: "兩者定位不同",
      level: 2,
      paragraphs: [
        "CRM 的核心物件是顧客與商機；ERP 的核心物件是物料、訂單、會計分錄與資源排程。使用者角色也不同：CRM 主要是業務、行銷與客服；ERP 多是營運、倉儲、財務與生管。把兩個問題塞進同一套系統，介面與權限往往會變得難以維護。",
        "若你的痛點是漏單、跟進混亂、無法掌握成交漏斗，請先理解 CRM：〈CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-crm）。若還要讓跟進更智慧，再看〈AI CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-ai-crm）。",
      ],
    },
    {
      id: "when-crm",
      heading: "什麼時候先上 CRM",
      level: 2,
      paragraphs: [
        "當成長瓶頸在「找不到人跟、跟了沒紀錄、成交過程不透明」時，CRM 優先。即使庫存系統還能撐，客戶端混亂也會直接影響營收與口碑。",
        "CRM 穩定後，再把成交訂單同步到 ERP 或進銷存，通常比一次上全套更可控，也比較容易在短期內驗證投資回報。",
      ],
    },
    {
      id: "when-erp",
      heading: "什麼時候先上 ERP",
      level: 3,
      paragraphs: [
        "若痛點是庫存不准、帳務對不上、採購與生產排程混亂，ERP（或至少進銷存＋財務）應優先。此時硬用 CRM 記庫存，只會讓業務系統變得臃腫難用，業務也不願登打。",
        "製造、批發與多倉物流型企業，通常會更早碰到 ERP 需求；純服務型、高跟進產業則多半先 CRM。",
      ],
    },
    {
      id: "integration",
      heading: "兩者如何整合",
      level: 2,
      paragraphs: [
        "成熟做法是：CRM 負責成交前；成交後把客戶、品項、金額等必要欄位同步到 ERP 產生訂單或應收。整合前要定義主資料（客戶代號、商品代號）與「以誰為準」，避免兩邊各改各的。",
        "API 串接、人工匯出匯入或中介層都可以，重點是資料治理與例外處理，而不是技術炫技。先畫資料流，再談介面與時程。",
      ],
    },
    {
      id: "decision",
      heading: "決策建議",
      level: 2,
      paragraphs: [
        "不要用 ERP 硬做銷售跟進，也不要用 CRM 硬做進銷存。先寫下最痛的三個問題，對應到「客戶／成交」或「貨／帳／產能」，再決定導入順序與預算分配。",
        "中小企業常見錯誤是一次上太多模組，資料還沒治理好就全面切換。分階段、可驗證，才走得遠；每一階段都應有明確成功指標，例如漏單率下降或帳料一致率提升。",
      ],
    },
    {
      id: "further-reading",
      heading: "延伸閱讀",
      level: 2,
      paragraphs: [
        "延伸閱讀：〈CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-crm）、〈AI CRM 是什麼？〉（" +
          SITE +
          "/blog/what-is-ai-crm）。若需要協助盤點系統邊界與導入順序，歡迎聯絡 AXORA。",
      ],
    },
  ],
  faq: [
    {
      question: "可以只做一個系統嗎？",
      answer:
        "可以，取決於痛點。成長期常先 CRM；營運與帳務複雜度高再上 ERP。",
    },
    {
      question: "ERP 一定比較貴嗎？",
      answer:
        "範圍通常更大、導入更長，總成本往往較高，但不代表小公司永遠不需要。",
    },
    {
      question: "AI 比較適合加在哪？",
      answer:
        "銷售摘要與優先排序多落在 CRM／AI CRM；預測補貨等可能落在 ERP 周邊分析。",
    },
    {
      question: "中小企業常見錯誤？",
      answer:
        "一次上太多模組、沒有主資料規範，以及用錯誤系統硬解另一類問題。",
    },
  ],
  cta: {
    title: "聯絡 AXORA",
    description:
      "不確定該先上 CRM 還是 ERP？告訴我們流程痛點，AXORA 協助釐清邊界與優先順序。",
  },
});

export const seoLibraryPosts: BlogPost[] = [
  whatIsAiCrm,
  whatIsCrm,
  erpVsCrm,
];
