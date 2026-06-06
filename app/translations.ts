export type Locale = "zh" | "en";

export const translations = {
  zh: {
    meta: {
      title: "AXORA | 企業智能分析軟體、客戶管理與自動化開發",
      description:
        "AXORA 為企業開發智能分析系統、SaaS 平台、客戶管理、商業自動化、LINE 官方帳號整合、網站、應用程式、儀表板與內部營運系統。從需求到上線，一站式交付。",
    },
    nav: {
      platform: "服務總覽",
      solutions: "案例",
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
        headline: "我們為企業打造智能分析、客戶管理與自動化流程",
        subtitle:
          "AXORA 是 B2B 軟體團隊，接受委託開發：智能分析與成交管理平台、客戶管理、SaaS 平台、營運儀表板、網站與內部後台。從需求訪談、設計、開發到上線與維護，由同一團隊負責。",
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
        title: "我們接受的委託類型",
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
    services: {
      label: "服務項目",
      title: "我們為企業提供的開發服務",
      subtitle:
        "每一項服務皆包含需求分析、設計、開發、測試、部署與文件。可依階段委託或一次交付完整系統。",
      idealForLabel: "適合",
      deliverablesLabel: "典型交付項目",
      items: [
        {
          num: "01",
          title: "自動化流程",
          desc: "為企業建置對話管理、意圖辨識與自動化流程，取代重複客服與資料處理。",
          idealFor: "客服量大、需 24/7 回覆、或需自動整理訊息的團隊",
          deliverables: [
            "OpenAI / 規則式回覆引擎",
            "意圖分類與話術設計",
            "Webhook 與現有系統串接",
            "對話紀錄與成效報表",
          ],
        },
        {
          num: "02",
          title: "SaaS 平台開發",
          desc: "從 0 到 1 打造可訂閱、可多租戶的 SaaS 產品，含後台、計費與 API。",
          idealFor: "有新產品點子、或要把內部工具產品化的公司",
          deliverables: [
            "多租戶架構與權限",
            "訂閱 / 方案 / 用量計費",
            "管理後台與客戶入口",
            "REST / GraphQL API",
          ],
        },
        {
          num: "03",
          title: "應用程式開發",
          desc: "Web App 或行動裝置適配介面，支援會員、訂單、預約等業務場景。",
          idealFor: "需要客戶自助服務或業務員外勤使用的場景",
          deliverables: [
            "響應式 Web App",
            "登入、角色與權限",
            "即時通知與狀態更新",
            "與客戶管理 / 金流串接",
          ],
        },
        {
          num: "04",
          title: "網站開發",
          desc: "企業官網、產品落地頁與 SEO 友善的內容站，可附 CMS 後台。",
          idealFor: "需要專業對外形象與可自行更新內容的企業",
          deliverables: [
            "品牌官網與多語系",
            "CMS 內容管理",
            "表單與名單收集",
            "效能與 SEO 優化",
          ],
        },
        {
          num: "05",
          title: "客戶管理開發",
          desc: "依您的銷售流程客製客戶管理：客戶、管道、任務、報表與 LINE 整合。",
          idealFor: "銷售線索分散在 LINE / Excel、易漏跟的團隊",
          deliverables: [
            "客戶檔案與互動紀錄",
            "銷售階段與預測",
            "跟進任務與提醒",
            "LINE / 表單 / Email 匯入",
          ],
        },
        {
          num: "06",
          title: "儀表板系統",
          desc: "整合多來源資料，以圖表呈現營收、轉換、營運與團隊績效。",
          idealFor: "管理層需即時掌握 KPI、不需手動整理報表",
          deliverables: [
            "可配置 KPI 面板",
            "趨勢、漏斗、對比圖",
            "異常告警通知",
            "報表匯出與排程",
          ],
        },
        {
          num: "07",
          title: "工作流程平台",
          desc: "把跨部門流程數位化：申請、審批、狀態追蹤與自動通知。",
          idealFor: "依賴紙本或聊天室協調的內部流程",
          deliverables: [
            "可視化流程設計",
            "審批節點與權限",
            "SLA 與逾時提醒",
            "與客戶管理 / 庫存串接",
          ],
        },
        {
          num: "08",
          title: "內部商業系統",
          desc: "排程、庫存、訂單、對帳等內部營運系統，取代 Excel 與人工對點。",
          idealFor: "營運複雜、需專屬後台的中小型企業",
          deliverables: [
            "排程與資源管理",
            "庫存與訂單模組",
            "對帳與報表",
            "角色權限與稽核",
          ],
        },
        {
          num: "09",
          title: "智能分析與成交管理平台",
          desc: "官方帳號、Messaging API、自動回覆與客戶管理潛客一條龍建置。",
          idealFor: "台灣市場、主要溝通管道為 LINE 的企業",
          deliverables: [
            "Official Account 設定",
            "Webhook + 簽章驗證",
            "自動回覆與話術",
            "客戶管理潛客與標籤",
          ],
        },
        {
          num: "10",
          title: "數位轉型顧問",
          desc: "盤點現有工具與流程，規劃分階段系統上線路線圖與預算。",
          idealFor: "想導入系統但不確定從何處著手的決策者",
          deliverables: [
            "現況與痛點診斷",
            "系統藍圖與優先順序",
            "時程與預算估算",
            "供應商 / 內部協作建議",
          ],
        },
      ],
    },
    about: {
      label: "關於 AXORA",
      headline: "專注企業智能分析軟體、客戶管理與自動化的開發團隊",
      intro:
        "AXORA 服務需要「把營運做成系統」的企業：銷售團隊要客戶管理、客服要 智能分析平台、管理層要儀表板、新創要 SaaS。AXORA 專注打造智能分析系統、自動化平台、客戶管理、Dashboard 與企業數位解決方案。",
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
    services: {
      label: "Services",
      title: "Development Services for Businesses",
      subtitle:
        "Every service includes discovery, design, development, QA, deployment, and documentation. Phased or full delivery available.",
      idealForLabel: "Best for",
      deliverablesLabel: "Typical deliverables",
      items: [
        {
          num: "01",
          title: "Automation Workflows",
          desc: "Dialogue management, intent detection, and process automation to replace repetitive support and data work.",
          idealFor: "High message volume, 24/7 coverage needs, or manual triage bottlenecks",
          deliverables: [
            "OpenAI / rules-based reply engine",
            "Intent design & playbooks",
            "Webhooks & system integrations",
            "Conversation logs & analytics",
          ],
        },
        {
          num: "02",
          title: "SaaS Development",
          desc: "Build subscription-ready, multi-tenant SaaS from scratch — admin, billing, and APIs included.",
          idealFor: "New product ideas or internal tools going product",
          deliverables: [
            "Multi-tenant architecture & RBAC",
            "Plans, billing, and usage metering",
            "Admin console & customer portal",
            "REST / GraphQL APIs",
          ],
        },
        {
          num: "03",
          title: "App Development",
          desc: "Web apps with mobile-friendly UX for members, orders, bookings, and field teams.",
          idealFor: "Self-service customers or staff working outside the office",
          deliverables: [
            "Responsive web application",
            "Auth, roles, and permissions",
            "Real-time status & notifications",
            "Customer management / payment integrations",
          ],
        },
        {
          num: "04",
          title: "Website Development",
          desc: "Corporate and product sites with CMS — fast, SEO-ready, and easy for your team to update.",
          idealFor: "Companies needing a professional public presence",
          deliverables: [
            "Brand site & multilingual pages",
            "CMS for content updates",
            "Lead forms & list capture",
            "Performance & SEO tuning",
          ],
        },
        {
          num: "05",
          title: "Customer Management Development",
          desc: "Customer management tailored to your sales motion — accounts, pipelines, tasks, reports, and LINE.",
          idealFor: "Leads scattered across LINE / spreadsheets with missed follow-ups",
          deliverables: [
            "Customer profiles & activity history",
            "Deal stages & forecasting",
            "Follow-up tasks & alerts",
            "LINE / forms / email import",
          ],
        },
        {
          num: "06",
          title: "Dashboard Systems",
          desc: "Unify data sources into live charts for revenue, conversion, ops, and team performance.",
          idealFor: "Leaders who need KPIs without manual spreadsheet work",
          deliverables: [
            "Configurable KPI boards",
            "Trend, funnel, and comparison charts",
            "Exception alerts",
            "Export & scheduled reports",
          ],
        },
        {
          num: "07",
          title: "Workflow Platforms",
          desc: "Digitize cross-team flows — requests, approvals, status tracking, and auto notifications.",
          idealFor: "Processes still coordinated on paper or chat threads",
          deliverables: [
            "Visual workflow builder",
            "Approval nodes & permissions",
            "SLA & overdue alerts",
            "Customer management / inventory hooks",
          ],
        },
        {
          num: "08",
          title: "Internal Business Systems",
          desc: "Scheduling, inventory, orders, and reconciliation — replacing Excel and manual checks.",
          idealFor: "Ops-heavy SMBs needing a dedicated back office",
          deliverables: [
            "Scheduling & resource management",
            "Inventory & order modules",
            "Reconciliation & reporting",
            "RBAC & audit trails",
          ],
        },
        {
          num: "09",
          title: "Smart Analytics & Deal Management Platform",
          desc: "Official Account, Messaging API, Auto-replies, and Customer management leads — end-to-end delivery.",
          idealFor: "Taiwan-market brands where LINE is the main channel",
          deliverables: [
            "Official Account setup",
            "Webhook + signature verification",
            "Auto-replies & scripts",
            "Customer management leads & tagging",
          ],
        },
        {
          num: "10",
          title: "Digital Transformation",
          desc: "Assess tools and processes, then roadmap phased system rollouts and budgets.",
          idealFor: "Decision-makers unsure where to start with software",
          deliverables: [
            "Current-state & pain assessment",
            "System blueprint & priorities",
            "Timeline & budget estimate",
            "Vendor / internal team guidance",
          ],
        },
      ],
    },
    about: {
      label: "About AXORA",
      headline: "A Team Focused on Business Analytics Software, Customer Management & Automation",
      intro:
        "We serve companies that need operational systems: sales teams need Customer Management, support needs Analytics Platform, leadership needs dashboards, and startups need SaaS. AXORA focuses on analytics systems, SaaS platforms, Customer Management, business automation, websites and apps, dashboard systems, enterprise software, and digital services.",
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
