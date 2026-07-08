export type Locale = "zh" | "en";

export const translations = {
  zh: {
    meta: {
      title: "AXORA | 企業智能分析軟體、客戶管理與自動化開發",
      description:
        "AXORA 為企業開發智能分析系統、SaaS 平台、客戶管理、商業自動化、LINE 官方帳號整合、網站、應用程式、儀表板與內部營運系統。從需求到上線，一站式交付。",
    },
    nav: {
      platform: "服務項目",
      solutions: "案例",
      projects: "案例實績",
      services: "服務項目",
      lineAi: "智能分析平台",
      downloads: "免費下載",
      about: "關於",
      contact: "聯絡",
    },
    line: {
      addLine: "加入 LINE 洽詢",
      qr: {
        label: "LINE Official Account · @460jxzer",
        title: "掃描加入官方帳號，立即測試 自動回覆",
        description:
          "加入 AXORA LINE 官方帳號後傳送訊息，即可體驗自動回覆；對話內容可同步寫入客戶管理潛客紀錄，與我們為客戶建置的系統相同。",
        scanHint: "使用 LINE 掃描 QR Code，或點擊下方按鈕加入好友",
        linkLabel: "開啟 LINE 加入連結",
        placeholderTitle: "LINE QR Code",
        placeholderHint: "掃描 QR Code 加入官方帳號",
      },
    },
    lineAi: {
      meta: {
        title: "智能分析與成交管理平台 | AXORA",
        description:
          "為企業建置 LINE Official Account + Messaging API + 自動回覆 +客戶管理潛客紀錄。非個人帳號機器人。",
      },
      label: "智能分析與成交管理平台",
      title: "智能分析與成交管理平台",
      subtitle:
        "我們為企業串接 LINE Messaging API 與 Webhook：訪客從網站加入官方帳號 → 傳訊息 → 依意圖自動回覆 → 潛客寫入客戶管理。適用於客服、預約、報價詢問與銷售跟進。",
      workflow: {
        label: "實際運作流程",
        steps: [
          "網站訪客",
          "點擊加入 LINE",
          "成為官方帳號好友",
          "傳送第一則訊息",
          "即時自動回覆",
          "客戶管理建立潛客",
        ],
      },
      demo: {
        chatTitle: "AXORA Official · LINE",
        chat: [
          { from: "user", text: "你好，我想了解客戶管理 和 LINE 自動回覆怎麼做？" },
          {
            from: "bot",
            text: "您好！我們可為您建置：① LINE 官方帳號串接 ② 意圖回覆 ③客戶管理潛客與跟進。請問您的產業與目前是用 Excel 還是已有客戶管理？",
          },
          { from: "user", text: "電商，現在都用 LINE 私訊，沒有系統" },
        ],
        aiLabel: "自動回覆",
        aiMeta: "OpenAI · LINE Messaging API · Webhook",
        aiReply:
          "了解。建議方案：LINE 客戶管理 + 成交追蹤劇本 + 銷售管道。請提供每月訊息量與期望上線時間，我們將安排顧問說明報價與時程。",
        aiBullets: [
          "辨識詢價、預約、聯絡方式等意圖",
          "以 replyToken 在數秒內回覆",
          "對話摘要與狀態寫入客戶管理",
        ],
        crmLabel: "客戶管理 · 潛客",
        lead: {
          name: "LINE User · U4f2…8a",
          source: "LINE Official Account",
          status: "新潛客",
          note: "電商 · 詢問智能分析與成交管理平台，待顧問回電",
          interestLabel: "需求",
          interest: "智能分析與成交管理平台",
          timeLabel: "更新",
          time: "剛剛",
        },
      },
      form: {
        label: "您的 LINE ID（選填）",
        placeholder: "your-line-id",
        hint:
          "此欄位僅供您在網站留下參考。正式流程：加入我們的 LINE 官方帳號並傳送訊息，即會觸發與客戶專案相同的 自動化流程 +客戶管理 流程。",
        submit: "儲存參考 ID",
        success: "已記錄。請加入官方帳號並傳送訊息，以體驗完整 自動回覆與客戶管理紀錄。",
      },
      tech: {
        label: "我們實作與交付的技術",
        items: [
          "LINE Official Account",
          "Messaging API",
          "Webhook 簽章驗證",
          "OpenAI 意圖引擎",
          "客戶管理潛客儲存",
        ],
      },
    },
    downloads: {
      meta: {
        title: "智能分析與成交管理平台 免費試用 | AXORA",
        description:
          "智能分析與成交管理平台：智能分析、成交追蹤、客戶管理與儀表板。免費試用 30 次分析，立即於 app.axora.tw 開始。",
      },
      hero: {
        label: "智能分析與成交管理平台",
        title: "智能分析與成交管理平台",
        subtitle: "免費試用 30 次分析。",
        googleCta: "Continue with Google",
        startCta: "立即免費試用",
      },
      features: {
        label: "Product",
        title: "產品功能",
        items: [
          {
            title: "LINE 官方帳號整合",
            desc: "Messaging API、Webhook 與官方帳號完整串接。",
          },
          {
            title: "自動回覆",
            desc: "意圖辨識與即時回覆，降低客服負擔。",
          },
          {
            title: "客戶管理潛客追蹤",
            desc: "對話寫入潛客名單，來源與狀態一目了然。",
          },
          {
            title: "客戶工作流程",
            desc: "自訂流程、審批與自動化任務。",
          },
          {
            title: "儀表板分析",
            desc: "KPI、漏斗與團隊績效即時檢視。",
          },
          {
            title: "自動化流程",
            desc: "觸發式訊息、任務與跨系統串接。",
          },
          {
            title: "客戶跟進",
            desc: "提醒、任務分派與銷售管道。",
          },
          {
            title: "名單管理",
            desc: "分群、標籤與轉換追蹤。",
          },
        ],
      },
      pricing: {
        label: "Pricing",
        title: "方案與試用",
        trialHighlight: "免費試用 30 次分析",
        plans: [
          {
            name: "Starter",
            price: "NT$ 1,200",
            period: "/ 月",
            desc: "小團隊入門，核心客戶管理與 自動回覆。",
          },
          {
            name: "Pro",
            price: "NT$ 3,800",
            period: "/ 月",
            desc: "完整工作流程、儀表板與自動化。",
          },
          {
            name: "Business",
            price: "洽詢",
            period: "",
            desc: "進階權限、SLA 與專屬支援。",
          },
        ],
      },
      visuals: {
        label: "Console",
        title: "產品介面預覽",
        subtitle: "客戶管理、分析卡片、工作流程與 KPI — 與正式環境相同的元件風格。",
      },
    },
    common: {
      explorePlatform: "查看服務",
      contactUs: "預約諮詢",
      viewAll: "查看全部案例",
      learnMore: "了解服務細節",
      sendMessage: "送出諮詢",
      projectType: "想委託的項目",
    },
    home: {
      hero: {
        label: "企業軟體開發 · 智能分析 · 自動化流程",
        headline: "AI客戶管理系統、CRM系統與SaaS平台開發",
        subtitle:
          "AXORA 提供 AI 客戶管理系統、CRM 系統、SaaS 平台開發、AI 自動化系統、LINE 官方帳號串接、客製化網站開發與 APP 開發服務，協助企業提升效率與成交率。",
        bullets: [
          "客製客戶管理、銷售管道與跟進提醒",
          "LINE 官方帳號 + 自動回覆 + 成交追蹤 + 潛客紀錄",
          "SaaS 平台、訂閱與多租戶後台",
          "網站、Web App、商業儀表板與工作流程自動化",
        ],
        scroll: "Scroll",
      },
      whatWeBuild: {
        label: "我們做什麼",
        title: "八類企業軟體與數位服務",
        items: [
          {
            title: "智能分析系統",
            desc: "對話代理、意圖辨識、自動回覆與營運決策輔助。",
          },
          {
            title: "SaaS 平台",
            desc: "多租戶、訂閱計費、權限與可擴展 API 架構。",
          },
          {
            title: "商業自動化",
            desc: "減少重複輸入，串接表單、通知、審批與第三方工具。",
          },
          {
            title: "客戶管理系統",
            desc: "客戶檔案、銷售階段、跟進任務與團隊協作。",
          },
          {
            title: "應用程式與網站",
            desc: "企業官網、產品站、會員與內部使用介面。",
          },
          {
            title: "工作流程平台",
            desc: "跨部門流程、狀態機與 24/7 自動執行。",
          },
          {
            title: "儀表板系統",
            desc: "KPI、漏斗、營收與異常即時監控。",
          },
          {
            title: "數位轉型顧問",
            desc: "現況評估、系統藍圖、分階段上線規劃。",
          },
        ],
      },
      digitalServices: {
        label: "核心服務",
        title: "企業最常委託的四項服務",
        description:
          "以下為我們最常交付的專案類型。每一項都包含需求釐清、UI/UX、後端 API、資料庫、測試與上線支援。",
        cards: [
          {
            title: "自動化流程與業務管理",
            desc: "用自動化流程取代重複人工：客服回覆、資料整理、通知與審批。",
            deliverables: [
              "對話規則與意圖辨識",
              "Webhook / API 串接",
              "營運後台與執行紀錄",
            ],
          },
          {
            title: "客戶管理與銷售系統",
            desc: "把 LINE、表單與電話線索集中管理，讓銷售不漏跟。",
            deliverables: [
              "客戶與交易管道",
              "跟進任務與提醒",
              "LINE / Email 整合",
            ],
          },
          {
            title: "儀表板與數據平台",
            desc: "管理層與營運團隊一眼看懂 KPI、漏斗與異常。",
            deliverables: [
              "即時圖表與報表",
              "多來源資料整合",
              "權限分級檢視",
            ],
          },
          {
            title: "網站與應用開發",
            desc: "對外品牌官網或對內營運系統，皆採現代技術棧交付。",
            deliverables: [
              "響應式企業網站",
              "CMS 內容後台",
              "會員 / 訂單 / 預約模組",
            ],
          },
        ],
      },
      howWeWork: {
        label: "合作方式",
        title: "從洽談到上線，流程透明",
        steps: [
          {
            title: "需求訪談",
            desc: "了解業務流程、痛點、現有工具與預算時程。",
          },
          {
            title: "方案與報價",
            desc: "提供功能範圍、里程碑、技術架構與報價。",
          },
          {
            title: "設計與開發",
            desc: "原型確認後進行前後端開發與第三方串接。",
          },
          {
            title: "上線與維護",
            desc: "部署、教育訓練、監控與後續功能迭代。",
          },
        ],
      },
      platform: {
        label: "平台能力",
        title: "我們在專案中常建置的模組",
        description:
          "可依需求單獨委託或組合成完整平台 — 不必一次買斷所有功能。",
        features: [
          "智能客服與意圖回覆",
          "客戶管理與銷售儀表板",
          "工作流程與審批",
          "客戶與訂單資料庫",
          "LINE Official 整合",
          "營收與轉換分析",
          "內部排程與庫存",
          "團隊權限管理",
        ],
      },
      services: {
        label: "完整服務清單",
        title: "服務項目",
        items: [
          "自動化流程與對話系統",
          "SaaS 平台開發",
          "Web / 行動應用開發",
          "企業網站與 CMS",
          "客戶管理與銷售系統",
          "商業儀表板",
          "工作流程與營運自動化",
          "內部商業系統（排程、庫存等）",
          "LINE 官方帳號 + 客戶管理 + 成交追蹤",
          "數位轉型與系統顧問",
        ],
      },
      cta: {
        title: "告訴我們您想解決的營運問題",
        body: "無論是客戶管理、LINE 自動回覆、SaaS 或內部後台 — 留下需求，我們將在 1–2 個工作天內回覆並安排訪談。",
      },
      caseStudies: {
        label: "交付案例",
        title: "我們實際做過的系統",
        subtitle:
          "以下為代表性專案：問題、我們建置的系統、功能與可量化成果。皆為智能分析、客戶管理、自動化流程或平台類型。",
      },
      productPreview: {
        label: "系統預覽",
        title: "您將得到的介面類型",
        subtitle:
          "客戶管理列表、營運儀表板、工作流程、自動回覆流程與系統架構 — 與我們交付給客戶的元件相同。",
      },
      productSurface: {
        label: "SaaS 產品介面",
        title: "租戶後台、訂閱與營運儀表板",
        subtitle:
          "多租戶工作區、MRR 走勢、方案計費、API 金鑰、審計紀錄與 Webhook 狀態 — 典型 B2B SaaS 管理畫面。",
      },
      adminConsole: {
        label: "整合監控",
        title: "第三方服務與閘道總覽",
        subtitle:
          "金流、LINE、智能分析與資料庫連線狀態，加上 API 延遲與背景佇列 — 與我們為客戶建置的營運控制台一致。",
      },
    },
    caseStudies: {
      problem: "客戶痛點",
      solution: "我們建置的系統",
      features: "交付功能",
      result: "成果",
    },
    solutions: {
      label: "案例",
      title: "客戶案例與交付成果",
      subtitle:
        "涵蓋 LINE 客戶管理、房地產銷售、租賃營運自動化、成交追蹤、管理儀表板與官網後台 — 可依產業參考類似做法。",
      gridLabel: "案例一覽",
    },
    projects: {
      label: "案例實績",
      title: "AXORA Project Portfolio",
      subtitle:
        "展示 AXORA 在 AI、CRM、SaaS、企業系統、網站開發與數位轉型的代表性專案與解決方案。",
      viewProject: "查看專案",
      detail: {
        overview: "專案概述",
        clientRequirements: "客戶需求",
        solution: "解決方案",
        coreFeatures: "核心功能",
        technologyStack: "技術架構",
        projectGallery: "專案展示",
        projectResult: "專案成果",
        backToProjects: "返回案例實績",
      },
    },
    services: {
      label: "服務項目",
      title: "我們為企業提供的開發服務",
      subtitle:
        "涵蓋 AI 系統、客製網站、CRM、LINE 整合、API 串接與自動化流程。每項服務含需求釐清、設計開發、上線部署與技術文件。",
      idealForLabel: "適合",
      deliverablesLabel: "功能重點",
      items: [
        {
          num: "01",
          title: "品牌設計（Branding）",
          desc: "為企業建立一致的品牌識別，從 Logo、視覺規範到數位触点素材，讓對外形象與後續系統、網站開發有統一的設計基礎。",
          idealFor: "新品牌成立、重塑識別，或準備同步更新官網與系統界面的企業",
          deliverables: [
            "Logo Design",
            "Brand Identity",
            "Brand Guideline",
            "名片設計",
            "Favicon",
            "社群視覺設計",
          ],
        },
        {
          num: "02",
          title: "官方網站（Website）",
          desc: "建置企業官網與 Landing Page，整合 SEO、Analytics 與 Search Console，作為品牌對外窗口與潛在客戶洽詢入口。",
          idealFor: "需要專業對外形象、多語系內容或產品落地頁的 B2B 與成長型企業",
          deliverables: [
            "Corporate Website",
            "Landing Page",
            "Responsive Web Design (RWD)",
            "Multi-language Website",
            "SEO",
            "Google Analytics",
            "Google Search Console",
          ],
        },
        {
          num: "03",
          title: "客製化系統（Business System）",
          desc: "依營運流程開發 CRM、ERP、預約、會員與訂單等後台系統，取代 Excel 與分散工具，讓團隊在同一平台協作。",
          idealFor: "營運流程已超出試算表負荷、需要專屬後台與權限管理的組織",
          deliverables: [
            "CRM",
            "ERP",
            "Dashboard",
            "Admin System",
            "Booking System",
            "Membership System",
            "Order Management",
            "Permission Management",
          ],
        },
        {
          num: "04",
          title: "AI 解決方案（AI Solutions）",
          desc: "將 AI 嵌入客服、知識查詢與文件處理流程，串接 OpenAI 與企業資料，建立可維運的對話、代理與自動化能力。",
          idealFor: "客服量大、內部文件多，或希望用 AI 加速決策與內容產出的團隊",
          deliverables: [
            "AI Chatbot",
            "AI Agent",
            "AI Knowledge Base",
            "AI Workflow",
            "AI Document Analysis",
            "AI Content Generation",
          ],
        },
        {
          num: "05",
          title: "LINE 官方帳號整合",
          desc: "完成 LINE OA 設定、Messaging API 與 LIFF 串接，建立 Rich Menu、自動回覆與 CRM 同步，把 LINE 變成可管理的客戶通道。",
          idealFor: "以 LINE 為主要客戶接觸管道、需將訊息轉為商機與工單的台灣企業",
          deliverables: [
            "LINE OA",
            "LINE Login",
            "LINE Messaging API",
            "LINE LIFF",
            "Rich Menu",
            "CRM Integration",
            "Auto Reply",
          ],
        },
        {
          num: "06",
          title: "API Integration",
          desc: "串接 OpenAI、Google、Stripe、Supabase 等第三方服務，建立穩定 API 層、錯誤重試與資料同步，支援產品擴充。",
          idealFor: "已有系統需對接金流、排程、AI 或外部資料源的開發團隊",
          deliverables: [
            "OpenAI API",
            "Google Calendar API",
            "Google Meet API",
            "Stripe",
            "Supabase",
            "PostgreSQL",
            "Cloudflare",
            "Third-party API",
          ],
        },
        {
          num: "07",
          title: "Workflow Automation",
          desc: "把表單、審批、通知與報表等重複流程自動化，串接 Email、LINE 與內部系統，減少人工轉檔與漏單風險。",
          idealFor: "跨部門仍靠 Email 或通訊軟體協調、希望標準化處理的營運團隊",
          deliverables: [
            "Email Notification",
            "LINE Notification",
            "Workflow Automation",
            "Scheduled Jobs",
            "Report Automation",
            "Data Synchronization",
          ],
        },
        {
          num: "08",
          title: "Maintenance",
          desc: "提供系統上線後的維護、效能優化與功能迭代，含伺服器、SSL 與備份管理，確保企業系統穩定運作。",
          idealFor: "已上線系統需持續修復、擴充功能或優化效能的企業",
          deliverables: [
            "System Maintenance",
            "Bug Fix",
            "Feature Enhancement",
            "Performance Optimization",
            "Server Management",
            "SSL",
            "Backup",
          ],
        },
        {
          num: "09",
          title: "Digital Transformation Consulting",
          desc: "協助企業盤點現況、規劃系統藍圖與 AI 導入路線，提供架構設計、專案管理與教育訓練，降低數位轉型不確定性。",
          idealFor: "決策者想導入 AI 或系統化營運，但不確定優先順序與預算的組織",
          deliverables: [
            "System Planning",
            "AI Consulting",
            "Architecture Design",
            "Technical Consulting",
            "Project Management",
            "Staff Training",
          ],
        },
      ],
    },
    about: {
      label: "企業 AI 與軟體開發",
      headline: "從需求到上線，為企業打造可運作的數位系統",
      intro:
        "AXORA 接受企業委託，開發 AI 對話與代理系統、客製化網站與 SaaS、CRM 與營運後台、LINE 官方帳號串接、第三方 API 整合、雲端部署，以及 AI 自動化流程。我們依實際業務設計架構與介面，交付可維護、可擴充的系統，而非套版網站。",
      mission:
        "讓每一家成長中的企業，都能擁有符合自己流程的數位系統，而不是將就現成套件。",
      whoWeServe: {
        label: "我們常合作的客戶",
        items: [
          "銷售驅動型公司（房仲、B2B、電商）",
          "營運密集產業（租賃、預約、服務業）",
          "需要 LINE 整合的台灣品牌",
          "想把內部流程產品化的新創團隊",
        ],
      },
      topicsLabel: "技術與領域",
      topics: [
        "對話管理與自動化流程",
        "SaaS 多租戶",
        "客戶管理與銷售",
        "LINE Official API",
        "Next.js 全端",
        "PostgreSQL",
        "儀表板與分析",
        "企業內部系統",
      ],
      timelineLabel: "發展歷程",
      timeline: [
        { year: "2024", event: "成立 AXORA，以 自動化流程與 SaaS 開發為核心服務" },
        { year: "2025", event: "標準化 LINE 客戶管理 + 成交追蹤 模組，縮短企業導入時程" },
        { year: "2026", event: "擴充儀表板與內部營運系統委託案例" },
      ],
    },
    contact: {
      label: "聯絡我們",
      title: "描述您的需求，我們協助規劃方案",
      subtitle:
        "請告訴我們：產業、想解決的問題、是否需 LINE /客戶管理 / 上線時程。我們將回覆可行範圍與下一步。",
      info: {
        email: "axora.office.tw@gmail.com",
        website: "www.axora.tw",
        lineOfficial: "@460jxzer",
        lineOfficialLabel: "LINE 官方帳號",
        location: "Taiwan",
        hours: "週一至週五 · 10:00–18:00",
      },
      actions: {
        copyEmail: "複製 Email",
        copiedEmail: "已複製 Email",
        copyLineId: "複製 ID",
        copiedLineId: "已複製 LINE ID",
        addLine: "加入 LINE",
      },
      form: {
        name: "姓名",
        company: "公司",
        email: "電子郵件",
        phone: "電話",
        projectType: "想委託的項目",
        message: "需求說明",
        namePlaceholder: "您的姓名",
        companyPlaceholder: "公司名稱",
        emailPlaceholder: "you@company.com",
        phonePlaceholder: "+886",
        messagePlaceholder:
          "例：我們用 LINE 接客戶，希望有客戶管理 + 自動回覆，預計 Q3 上線…",
        projectTypes: [
          "自動化流程",
          "SaaS 平台",
          "客戶管理系統",
          "儀表板 / 數據平台",
          "網站 / 應用程式",
          "LINE 官方帳號 + 成交追蹤",
          "內部營運系統",
          "數位轉型顧問",
          "其他",
        ],
        submit: "送出諮詢",
        consent: "送出即表示您同意 AXORA 就專案內容與您聯繫。",
      },
      success: {
        title: "已收到您的諮詢",
        message: "感謝來信，我們將在 1–2 個工作天內回覆。",
      },
    },
    footer: {
      tagline: "企業智能分析軟體 ·客戶管理 · 自動化開發",
      description:
        "我們為企業開發智能分析系統、SaaS、客戶管理、LINE 整合、網站、應用與儀表板。",
      navigation: "導覽",
      contact: "聯絡",
      rights: "版權所有",
      keywords: "SaaS ·客戶管理 · 自動化 · Automation · Software",
    },
  },
  en: {
    meta: {
      title: "AXORA | Business Analytics Software, Customer Management & Automation",
      description:
        "AXORA builds analytics systems, SaaS platforms, Customer Management, business automation, LINE Official Account integration, websites, apps, dashboards, and internal ops software — from discovery to launch.",
    },
    nav: {
      platform: "Overview",
      solutions: "Work",
      projects: "Projects",
      services: "Services",
      lineAi: "Analytics Platform",
      downloads: "Free Download",
      about: "About",
      contact: "Contact",
    },
    line: {
      addLine: "Chat on LINE",
      qr: {
        label: "LINE Official Account · @460jxzer",
        title: "Scan to add us — test Auto-replies instantly",
        description:
          "Add our LINE Official Account and send a message to try Auto-replies. Conversations can sync to Customer Management — the same stack we build for clients.",
        scanHint: "Scan with LINE or tap the button below",
        linkLabel: "Open LINE add-friend link",
        placeholderTitle: "LINE QR Code",
        placeholderHint: "Scan the QR code to add our Official Account",
      },
    },
    lineAi: {
      meta: {
        title: "Smart Analytics & Deal Management Platform | AXORA",
        description:
          "We build LINE Official Account + Messaging API + Auto-reply + Customer management lead capture for businesses — not personal-account bots.",
      },
      label: "Smart Analytics & Deal Management Platform",
      title: "Smart Analytics & Deal Management Platform",
      subtitle:
        "We integrate LINE Messaging API and webhooks for clients: visitor adds your Official Account → sends a message → Auto-replies by intent → lead saved in Customer Management. Ideal for support, booking, quotes, and sales follow-up.",
      workflow: {
        label: "How it works",
        steps: [
          "Website visitor",
          "Clicks Add LINE",
          "Becomes Official Account friend",
          "Sends first message",
          "Auto-replies instantly",
          "Customer Management creates lead",
        ],
      },
      demo: {
        chatTitle: "AXORA Official · LINE",
        chat: [
          { from: "user", text: "Hi — how do you set up Customer Management with LINE auto-reply?" },
          {
            from: "bot",
            text: "We can deliver: ① LINE Official integration ② Intent replies ③ Customer management leads & follow-up. What industry are you in, and do you use Excel or an existing customer management today?",
          },
          { from: "user", text: "E-commerce — all inquiries come through LINE DMs, no system" },
        ],
        aiLabel: "Auto Reply",
        aiMeta: "OpenAI · LINE Messaging API · Webhook",
        aiReply:
          "Understood. Recommended: LINE Customer Management + Deal tracking flows + sales pipeline. Share monthly message volume and target launch date — we'll schedule a consult for scope and quote.",
        aiBullets: [
          "Detects pricing, booking, and contact intent",
          "Replies in seconds via replyToken",
          "Logs summary and status to Customer Management",
        ],
        crmLabel: "Customer Management Lead",
        lead: {
          name: "LINE User · U4f2…8a",
          source: "LINE Official Account",
          status: "New Lead",
          note: "E-commerce · asked about Smart Analytics & Deal Management Platform — awaiting consult",
          interestLabel: "Need",
          interest: "Smart Analytics & Deal Management Platform",
          timeLabel: "Updated",
          time: "Just now",
        },
      },
      form: {
        label: "Your LINE ID (optional)",
        placeholder: "your-line-id",
        hint:
          "For your reference on this site only. Full flow: add our Official Account and send a message to trigger the same Automation + Customer Management pipeline we ship to clients.",
        submit: "Save reference ID",
        success:
          "Saved. Add our Official Account and send a message to experience Auto-replies and Customer management logging.",
      },
      tech: {
        label: "What we implement",
        items: [
          "LINE Official Account",
          "Messaging API",
          "Webhook signature verify",
          "OpenIntent replies",
          "Customer management lead store",
        ],
      },
    },
    downloads: {
      meta: {
        title: "Smart Analytics & Deal Management Platform | AXORA",
        description:
          "Smart analytics, deal tracking, Customer Management, and dashboards. Start with 30 free analyses at app.axora.tw.",
      },
      hero: {
        label: "Smart Analytics & Deal Management Platform",
        title: "Smart Analytics & Deal Management Platform",
        subtitle: "30 free analyses — start your trial today.",
        googleCta: "Continue with Google",
        startCta: "Start free trial",
      },
      features: {
        label: "Product",
        title: "Product capabilities",
        items: [
          {
            title: "LINE Official Account",
            desc: "Messaging API, webhooks, and full OA integration.",
          },
          {
            title: "Auto-reply",
            desc: "Intent detection and instant replies to reduce load.",
          },
          {
            title: "Customer management lead tracking",
            desc: "Conversations synced to leads with source and status.",
          },
          {
            title: "Customer workflows",
            desc: "Custom flows, approvals, and automated tasks.",
          },
          {
            title: "Dashboard analytics",
            desc: "KPIs, funnels, and team performance in real time.",
          },
          {
            title: "Automation workflows",
            desc: "Triggered messages, tasks, and cross-system hooks.",
          },
          {
            title: "Customer follow-up",
            desc: "Reminders, assignments, and pipeline stages.",
          },
          {
            title: "Lead management",
            desc: "Segments, tags, and conversion tracking.",
          },
        ],
      },
      pricing: {
        label: "Pricing",
        title: "Plans & trial",
        trialHighlight: "30 free analyses",
        plans: [
          {
            name: "Starter",
            price: "$49",
            period: "/ mo",
            desc: "Small teams — core Customer Management and Auto-replies.",
          },
          {
            name: "Pro",
            price: "$199",
            period: "/ mo",
            desc: "Full workflows, dashboards, and automation.",
          },
          {
            name: "Business",
            price: "Custom",
            period: "",
            desc: "Advanced roles, SLA, and dedicated support.",
          },
        ],
      },
      visuals: {
        label: "Console",
        title: "Product UI preview",
        subtitle: "Customer Management, analytics cards, workflows, and KPIs — same component style as production.",
      },
    },
    common: {
      explorePlatform: "View Services",
      contactUs: "Book a Consult",
      viewAll: "View All Case Studies",
      learnMore: "Service Details",
      sendMessage: "Send Inquiry",
      projectType: "Service Needed",
    },
    home: {
      hero: {
        label: "Business Software · Analytics · Automation",
        headline: "We Build Analytics Software, Customer Management & Automation for Your Business",
        subtitle:
          "AXORA is a B2B software team for hire: LINE Smart Support support, customer management, SaaS platforms, ops dashboards, websites, and internal admin systems — from discovery through launch and maintenance.",
        bullets: [
          "Custom customer management, pipelines, and follow-up automation",
          "LINE Official Account + Auto-replies + lead capture",
          "SaaS platforms, billing, and multi-tenant admin",
          "Websites, web apps, dashboards, and workflow automation",
        ],
        scroll: "Scroll",
      },
      whatWeBuild: {
        label: "What We Do",
        title: "Eight Categories of Business Software",
        items: [
          {
            title: "Analytics Systems",
            desc: "Conversational agents, intent detection, auto-replies, and ops assistance.",
          },
          {
            title: "SaaS Platforms",
            desc: "Multi-tenant architecture, subscriptions, permissions, and scalable APIs.",
          },
          {
            title: "Business Automation",
            desc: "Less manual entry — connect forms, notifications, approvals, and tools.",
          },
          {
            title: "Customer Management Systems",
            desc: "Customer records, deal stages, tasks, and team collaboration.",
          },
          {
            title: "Apps & Websites",
            desc: "Corporate sites, product pages, member portals, and internal UIs.",
          },
          {
            title: "Workflow Platforms",
            desc: "Cross-team processes, state machines, and 24/7 execution.",
          },
          {
            title: "Dashboard Systems",
            desc: "KPIs, funnels, revenue, and anomaly monitoring in real time.",
          },
          {
            title: "Digital Advisory",
            desc: "Current-state assessment, system blueprint, phased rollout planning.",
          },
        ],
      },
      digitalServices: {
        label: "Core Services",
        title: "Four Services Clients Request Most",
        description:
          "Each engagement includes discovery, UX, backend APIs, database, QA, and launch support.",
        cards: [
          {
            title: "Automation & Business Management",
            desc: "Replace repetitive work with automation workflows — support, data handling, alerts, approvals.",
            deliverables: [
              "Dialogue rules & intent detection",
              "Webhook / API integrations",
              "Ops console & run logs",
            ],
          },
          {
            title: "Customer Management & Sales Systems",
            desc: "Centralize LINE, forms, and phone leads so sales never miss a follow-up.",
            deliverables: [
              "Accounts & deal pipelines",
              "Tasks & reminders",
              "LINE / email integrations",
            ],
          },
          {
            title: "Dashboards & Data Platforms",
            desc: "Give leadership and ops one view of KPIs, funnels, and exceptions.",
            deliverables: [
              "Live charts & reports",
              "Multi-source data sync",
              "Role-based access",
            ],
          },
          {
            title: "Websites & App Development",
            desc: "Public brand sites or internal ops tools — modern stack, maintainable code.",
            deliverables: [
              "Responsive corporate sites",
              "CMS content admin",
              "Member / order / booking modules",
            ],
          },
        ],
      },
      howWeWork: {
        label: "How We Work",
        title: "Clear Steps from First Call to Launch",
        steps: [
          {
            title: "Discovery",
            desc: "Understand your process, pain points, existing tools, budget, and timeline.",
          },
          {
            title: "Scope & Quote",
            desc: "Feature list, milestones, architecture, and fixed or phased pricing.",
          },
          {
            title: "Design & Build",
            desc: "Prototype sign-off, then frontend, backend, and third-party integrations.",
          },
          {
            title: "Launch & Care",
            desc: "Deployment, training, monitoring, and iterative improvements.",
          },
        ],
      },
      platform: {
        label: "Platform Modules",
        title: "Modules We Often Ship in Projects",
        description:
          "Commission individually or combine into one platform — no need to buy everything at once.",
        features: [
          "Smart support & intent replies",
          "Customer Management & sales dashboards",
          "Workflows & approvals",
          "Customer & order database",
          "LINE Official integration",
          "Revenue & conversion analytics",
          "Scheduling & inventory",
          "Team permissions",
        ],
      },
      services: {
        label: "Full Service List",
        title: "Engagement Types We Accept",
        items: [
          "Automation workflows & conversational systems",
          "SaaS platform development",
          "Web & mobile app development",
          "Corporate websites & CMS",
          "Customer Management & sales systems",
          "Business dashboards",
          "Workflow & ops automation",
          "Internal business systems",
          "LINE Official + Customer Management + Deal Tracking",
          "Digital transformation advisory",
        ],
      },
      cta: {
        title: "Tell Us the Operations Problem You Need Solved",
        body: "Customer management, LINE automation, SaaS, or internal admin — we reply within 1–2 business days to schedule a discovery call.",
      },
      caseStudies: {
        label: "Case Studies",
        title: "Systems We've Delivered",
        subtitle:
          "Representative projects: the pain, what we built, features shipped, and measurable outcomes — all Customer Management, automation, or platform work.",
      },
      productPreview: {
        label: "UI Preview",
        title: "What Your System Can Look Like",
        subtitle:
          "Customer management tables, ops dashboards, workflows, Automation flows, and architecture — components we ship in production.",
      },
      productSurface: {
        label: "SaaS Product UI",
        title: "Tenant Console, Plans & Revenue",
        subtitle:
          "Multi-tenant workspace, MRR trend, subscription tiers, API keys, audit trail, and webhook delivery status — a typical B2B SaaS admin surface.",
      },
      adminConsole: {
        label: "Integrations",
        title: "Connected Services & Gateway Health",
        subtitle:
          "Payments, LINE, Analytics, and database link status with API latency and job queues — the same ops console patterns we ship for clients.",
      },
    },
    caseStudies: {
      problem: "Client Pain Point",
      solution: "What We Built",
      features: "Delivered Features",
      result: "Outcome",
    },
    solutions: {
      label: "Work",
      title: "Client Projects & Outcomes",
      subtitle:
        "LINE Customer Management, real estate sales, rental ops automation, Deal tracking, executive dashboards, and corporate site + admin — browse by industry.",
      gridLabel: "All Cases",
    },
    projects: {
      label: "Projects",
      title: "AXORA Project Portfolio",
      subtitle:
        "Selected software, AI, CRM, SaaS and enterprise digital transformation projects developed by AXORA.",
      viewProject: "View Project",
      detail: {
        overview: "Project Overview",
        clientRequirements: "Client Requirements",
        solution: "Solution",
        coreFeatures: "Core Features",
        technologyStack: "Technology Stack",
        projectGallery: "Project Gallery",
        projectResult: "Project Result",
        backToProjects: "Back to Projects",
      },
    },
    services: {
      label: "Services",
      title: "Development Services for Businesses",
      subtitle:
        "Six practice areas: AI systems, custom websites, CRM, LINE integration, API connectivity, and automation. Each engagement covers discovery, build, launch, and documentation.",
      idealForLabel: "Best for",
      deliverablesLabel: "Key capabilities",
      items: [
        {
          num: "01",
          title: "Branding",
          desc: "Consistent brand identity for enterprises — logo, visual guidelines, and digital touchpoint assets so websites and systems share one design foundation.",
          idealFor: "New brands, rebrands, or companies aligning their site and product UI with a refreshed identity",
          deliverables: [
            "Logo Design",
            "Brand Identity",
            "Brand Guideline",
            "Business Card Design",
            "Favicon",
            "Social Media Visual Design",
          ],
        },
        {
          num: "02",
          title: "Website",
          desc: "Corporate sites and landing pages with SEO, Analytics, and Search Console — your public entry point for brand presence and inbound inquiries.",
          idealFor: "B2B and growth-stage companies needing a professional public face, multilingual content, or product landing pages",
          deliverables: [
            "Corporate Website",
            "Landing Page",
            "Responsive Web Design (RWD)",
            "Multi-language Website",
            "SEO",
            "Google Analytics",
            "Google Search Console",
          ],
        },
        {
          num: "03",
          title: "Business System",
          desc: "Custom CRM, ERP, booking, membership, and order back offices shaped to how you operate — replacing spreadsheets and scattered tools with one platform.",
          idealFor: "Organizations outgrowing spreadsheets who need dedicated admin, permissions, and operational workflows",
          deliverables: [
            "CRM",
            "ERP",
            "Dashboard",
            "Admin System",
            "Booking System",
            "Membership System",
            "Order Management",
            "Permission Management",
          ],
        },
        {
          num: "04",
          title: "AI Solutions",
          desc: "Embed AI in support, knowledge lookup, and document workflows — OpenAI connected to your data with maintainable chat, agent, and automation capabilities.",
          idealFor: "Teams with heavy support volume, large internal document sets, or AI-assisted decision and content needs",
          deliverables: [
            "AI Chatbot",
            "AI Agent",
            "AI Knowledge Base",
            "AI Workflow",
            "AI Document Analysis",
            "AI Content Generation",
          ],
        },
        {
          num: "05",
          title: "LINE Official Account Integration",
          desc: "LINE OA setup, Messaging API, LIFF, Rich Menu, auto-replies, and CRM sync — turn LINE into a manageable customer channel, not a chat inbox.",
          idealFor: "Taiwan businesses where LINE is the main customer touchpoint and messages should become leads and tickets",
          deliverables: [
            "LINE OA",
            "LINE Login",
            "LINE Messaging API",
            "LINE LIFF",
            "Rich Menu",
            "CRM Integration",
            "Auto Reply",
          ],
        },
        {
          num: "06",
          title: "API Integration",
          desc: "Wire OpenAI, Google, Stripe, Supabase, and other services with stable API layers, retries, and data sync to support product expansion.",
          idealFor: "Product teams connecting payments, scheduling, AI, or external data into existing systems",
          deliverables: [
            "OpenAI API",
            "Google Calendar API",
            "Google Meet API",
            "Stripe",
            "Supabase",
            "PostgreSQL",
            "Cloudflare",
            "Third-party API",
          ],
        },
        {
          num: "07",
          title: "Workflow Automation",
          desc: "Automate forms, approvals, notifications, and reports across Email, LINE, and internal systems — less manual forwarding and fewer dropped tasks.",
          idealFor: "Ops teams still coordinating through email or chat who need standardized processing and alerts",
          deliverables: [
            "Email Notification",
            "LINE Notification",
            "Workflow Automation",
            "Scheduled Jobs",
            "Report Automation",
            "Data Synchronization",
          ],
        },
        {
          num: "08",
          title: "Maintenance",
          desc: "Post-launch maintenance, performance tuning, and feature iteration — servers, SSL, and backups so enterprise systems stay reliable in production.",
          idealFor: "Companies with live systems that need ongoing fixes, enhancements, or performance work",
          deliverables: [
            "System Maintenance",
            "Bug Fix",
            "Feature Enhancement",
            "Performance Optimization",
            "Server Management",
            "SSL",
            "Backup",
          ],
        },
        {
          num: "09",
          title: "Digital Transformation Consulting",
          desc: "Assess current state, roadmap systems and AI adoption, and deliver architecture design, project management, and training to reduce transformation uncertainty.",
          idealFor: "Decision-makers exploring AI or operational software but unsure about priorities, scope, and budget",
          deliverables: [
            "System Planning",
            "AI Consulting",
            "Architecture Design",
            "Technical Consulting",
            "Project Management",
            "Staff Training",
          ],
        },
      ],
    },
    about: {
      label: "Enterprise AI & Software",
      headline: "We build production-ready systems from discovery through launch",
      intro:
        "AXORA takes on client engagements for AI chat and agent systems, custom websites and SaaS, CRM and operations back offices, LINE Official Account integration, third-party APIs, cloud deployment, and AI-driven automation. We design around how your team actually works — maintainable, extensible software, not template sites.",
      mission:
        "Every growing company deserves software that matches how they operate — not the other way around.",
      whoWeServe: {
        label: "Who We Work With",
        items: [
          "Sales-driven firms (real estate, B2B, e-commerce)",
          "Ops-heavy businesses (rental, booking, services)",
          "Taiwan brands requiring LINE integration",
          "Teams productizing internal workflows",
        ],
      },
      topicsLabel: "Tech & Domains",
      topics: [
        "Dialogue & automation workflows",
        "Multi-tenant SaaS",
        "Customer Management & sales",
        "LINE Official API",
        "Next.js full-stack",
        "PostgreSQL",
        "Dashboards & analytics",
        "Internal enterprise systems",
      ],
      timelineLabel: "Timeline",
      timeline: [
        { year: "2024", event: "AXORA founded — Automation workflows and SaaS as core services" },
        { year: "2025", event: "Standardized LINE customer management + deal tracking modules for faster client rollout" },
        { year: "2026", event: "Expanded dashboard and internal ops system engagements" },
      ],
    },
    contact: {
      label: "Contact",
      title: "Describe Your Need — We'll Propose a Plan",
      subtitle:
        "Share your industry, the problem to solve, whether you need LINE / Customer Management, and your target launch. We'll reply with scope and next steps.",
      info: {
        email: "axora.office.tw@gmail.com",
        website: "www.axora.tw",
        lineOfficial: "@460jxzer",
        lineOfficialLabel: "LINE Official Account",
        location: "Taiwan",
        hours: "Mon–Fri · 10:00–18:00",
      },
      actions: {
        copyEmail: "Copy Email",
        copiedEmail: "Email copied",
        copyLineId: "Copy ID",
        copiedLineId: "LINE ID copied",
        addLine: "Add on LINE",
      },
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        projectType: "Service Needed",
        message: "Requirements",
        namePlaceholder: "Your name",
        companyPlaceholder: "Company name",
        emailPlaceholder: "you@company.com",
        phonePlaceholder: "+886",
        messagePlaceholder:
          "e.g. We handle leads on LINE and need Customer Management + Auto-reply, targeting Q3 launch…",
        projectTypes: [
          "Automation Workflows",
          "SaaS Platform",
          "Customer Management System",
          "Dashboard / Data Platform",
          "Website / App",
          "LINE Official + Deal Tracking",
          "Internal Ops System",
          "Digital Transformation",
          "Other",
        ],
        submit: "Send Inquiry",
        consent: "By submitting, you agree to be contacted about your project.",
      },
      success: {
        title: "Inquiry received",
        message: "Thank you — we will respond within 1–2 business days.",
      },
    },
    footer: {
      tagline: "Business Analytics Software · Customer Management · Automation",
      description:
        "We build analytics systems, SaaS, Customer Management, LINE integration, websites, apps, and dashboards for companies.",
      navigation: "Navigation",
      contact: "Contact",
      rights: "All rights reserved",
      keywords: "Analytics · SaaS · Customer Management · Automation · Software",
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Locale];
