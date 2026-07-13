import type { BlogPost } from "./types";

export const aiAgent: BlogPost = {
  id: "5",
  slug: "ai-agent",
  title: "AI Agent 是什麼？企業如何導入智慧代理提升營運",
  description:
    "解釋 AI Agent 與一般聊天機器人的差異，並說明企業可從客服、知識庫與流程自動化開始導入的實務路徑。",
  coverImage: "/projects/onlymate.png",
  category: "AI",
  tags: ["AI Agent", "AI 自動化", "智慧客服", "流程自動化"],
  keywords: [
    "AI Agent",
    "AI 代理",
    "AI 自動化",
    "智慧客服",
    "AI 工作流程",
    "企業 AI 導入",
  ],
  publishedAt: "2026-05-10",
  updatedAt: "2026-07-01",
  author: "AXORA",
  readingTime: 8,
  featured: false,
  content: [
    {
      id: "what-is-ai-agent",
      heading: "AI Agent 與聊天機器人的差異",
      paragraphs: [
        "一般聊天機器人多半停留在問答；AI Agent 則能依目標規劃步驟、呼叫工具、查詢資料，並在規則允許範圍內完成任務。對企業而言，重點不是「會聊天」，而是「能把重複工作做完」。",
      ],
    },
    {
      id: "good-starting-points",
      heading: "適合先導入的場景",
      paragraphs: [
        "自動化應從高重複、低風險、規則清楚的流程開始，例如客服標準回覆、表單分類、知識庫查詢與內部通知。先建立人工覆核機制，再逐步放寬自動決策範圍，能降低錯誤成本。",
      ],
    },
    {
      id: "data-and-tools",
      heading: "資料、工具與權限",
      paragraphs: [
        "Agent 需要可信任的知識來源與明確工具邊界：能讀哪些文件、能寫入哪些系統、什麼情況必須轉人工。權限設計與稽核紀錄，比模型本身更常決定專案能否上線。",
      ],
    },
    {
      id: "success-metrics",
      heading: "如何衡量成效",
      paragraphs: [
        "成功指標不是「自動化了多少」，而是節省工時、回應速度、錯誤率與轉換是否改善。建議先選一個可量化的流程做 POC，再用數據決定擴充範圍。",
      ],
    },
    {
      id: "work-with-axora",
      heading: "與 AXORA 合作導入",
      paragraphs: [
        "AXORA 協助企業把 AI 嵌入客服、知識查詢與營運流程，串接 OpenAI 與既有系統，建立可維運的 Agent 與自動化能力。若你正在評估 AI Agent，歡迎聯絡我們討論可行起點。",
      ],
    },
  ],
};
