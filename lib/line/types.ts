export type LineWebhookEvent = {
  type: string;
  timestamp: number;
  source: {
    type: string;
    userId?: string;
  };
  replyToken?: string;
  message?: {
    type: string;
    id: string;
    text?: string;
  };
};

export type LineWebhookBody = {
  destination: string;
  events: LineWebhookEvent[];
};

export type LeadStatus = "new" | "engaged" | "qualified";

export type LeadRecord = {
  userId: string;
  status: LeadStatus;
  messages: Array<{
    role: "user" | "assistant";
    text: string;
    timestamp: string;
  }>;
  createdAt: string;
  updatedAt: string;
  lineIdReference?: string;
  summary?: string;
};
