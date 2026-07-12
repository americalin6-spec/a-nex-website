import type { ServiceSlug } from "./relations";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceFaqs: Record<ServiceSlug, ServiceFaq[]> = {
  "ai-crm": [
    {
      question: "AI CRM 跟一般 CRM 差在哪？",
      answer:
        "一般 CRM 多半靠業務手動更新。AXORA 的 AI CRM 可串接 LINE 對話、產生摘要與意圖標籤，並用提醒與銷售階段把跟進節奏固定下來，減少漏單。",
    },
    {
      question: "一定要有 LINE 官方帳號嗎？",
      answer:
        "若客戶主要在 LINE 溝通，建議使用 Official Account + Messaging API，才能穩定同步對話到後台。若尚未開通，我們可一併規劃。",
    },
    {
      question: "多久看得到效果？",
      answer:
        "通常先上線「對話進檔案、階段可視化、跟進提醒」就會改善漏跟。更進階的優先排序，會等實際使用資料累積後再優化。",
    },
  ],
  "ai-customer-service": [
    {
      question: "AI 客服適合先處理哪些問題？",
      answer:
        "適合營業時間、方案說明、預約流程、文件準備這類高重複問題。涉及客訴、價格談判或例外狀況，應保留轉人工。",
    },
    {
      question: "可以同時接網站與 LINE 嗎？",
      answer:
        "可以。我們會先整理統一知識範圍，再依通路輸出回覆，並把進線彙整到同一後台，避免多套答案互相矛盾。",
    },
    {
      question: "如何降低 AI 答錯風險？",
      answer:
        "先限定可回答主題、設定敏感詞攔截，並在低信心時轉人工。上線後依未命中對話持續補知識，而不是一次追求全自動。",
    },
  ],
  "crm-system": [
    {
      question: "我們已經用試算表，一定要上 CRM 嗎？",
      answer:
        "若只有少數人、流程短，試算表可暫用。一旦有多人交接、要看階段卡住點、或需要權限與提醒，CRM 會比試算表穩。",
    },
    {
      question: "銷售階段可以照我們公司流程定嗎？",
      answer:
        "可以。AXORA 會先對齊你們真實成交流程（例如：新名單 → 已聯繫 → 報價 → 協商 → 成交），再設必填欄位與下一步行動。",
    },
    {
      question: "舊名單怎麼搬？",
      answer:
        "可依 Excel／CSV 匯入，並在上線前整理必要欄位（來源、負責人、目前階段）。搬遷範圍會依資料品質一起規劃。",
    },
  ],
  "line-oa": [
    {
      question: "LINE 官方帳號整合會做到什麼程度？",
      answer:
        "依需求可包含歡迎訊息、圖文選單、關鍵字回覆、Webhook、潛客建檔，以及與 CRM／後台同步對話與標籤。",
    },
    {
      question: "個人 LINE 改官方帳號，舊客戶怎麼辦？",
      answer:
        "通常採雙軌過渡：新進線導向官方帳號，舊客戶分批引導加入。具體節奏會依產業與客戶量規劃，避免一次中斷服務。",
    },
    {
      question: "怎麼知道整合有沒有效？",
      answer:
        "建議追蹤進線數、自動回覆命中率、轉人工比例、潛客建立數與跟進完成率，用同一組指標每週檢視。",
    },
  ],
  "saas-development": [
    {
      question: "沒有完整規格也能開始嗎？",
      answer:
        "可以。我們習慣先釐清核心使用者與必做工作流程，做出可上線的 MVP，再依真實使用回饋擴充，而不是一次做大而全。",
    },
    {
      question: "會員、權限、訂閱要一起做嗎？",
      answer:
        "帳號與權限通常是 MVP 必要項；訂閱／金流可依商業模式分期。若第一階段只要內部使用，也能先不做對外收費。",
    },
    {
      question: "上線後如何維護？",
      answer:
        "可依約安排監控、錯誤追蹤與功能迭代，並交付文件與權限交接。維運深度會在提案時寫清楚範圍。",
    },
  ],
  "ai-automation": [
    {
      question: "哪些流程最適合先做自動化？",
      answer:
        "優先選高重複、規則清楚、失敗成本可控的流程：表單分流、標準回覆、到期提醒、資料同步。高風險決策先保留人工。",
    },
    {
      question: "自動化失敗會不會整條流程停擺？",
      answer:
        "設計時會加錯誤通知、重試與人工備援路徑。關鍵步驟失敗時應可改由人員接手，而不是靜默中斷。",
    },
    {
      question: "一定要換掉現有系統嗎？",
      answer:
        "不一定。很多專案先用 API、Webhook 或排程串接現有工具，確認效益後再決定是否深度改造。",
    },
  ],
  "app-development": [
    {
      question: "該做原生還是跨平台？",
      answer:
        "若要快速同時上 iOS／Android、功能以業務流程為主，跨平台通常較有效率。若高度依賴特殊裝置能力，再評估原生。",
    },
    {
      question: "APP 可以接我們現有後台嗎？",
      answer:
        "可以。常見是透過 API 連接既有會員、CRM、訂單或通知系統。若後端不足，也會一併規劃必要 API。",
    },
    {
      question: "上架與測試有包含嗎？",
      answer:
        "可依專案包含測試、送審準備與上架協助。實際是否列入交付，會在報價範圍中明確列出。",
    },
  ],
  "web-design": [
    {
      question: "官網會幫我們做 SEO 嗎？",
      answer:
        "會規劃基礎 SEO：清楚頁面結構、標題層級、canonical、sitemap、Open Graph，以及可被索引的正文。進階內容經營可另案規劃。",
    },
    {
      question: "可以放表單與 LINE 嗎？",
      answer:
        "可以。多數企業官網會同時放諮詢表單與 LINE 官方帳號入口，方便不同客戶習慣轉換。",
    },
    {
      question: "上線後內容誰更新？",
      answer:
        "若需要，可建置內容後台讓行銷自行更新文章或頁面。若初期內容少，也可先由靜態頁面交付，之後再加後台。",
    },
  ],
};

export function getServiceFaqs(slug: ServiceSlug): ServiceFaq[] {
  return serviceFaqs[slug] ?? [];
}
