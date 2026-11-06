import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "AI自動化系統｜企業流程自動化解決方案｜AXORA";
const description =
  "AXORA AI／流程自動化：優先自動化高重複、規則清楚的作業，並設計人工備援，讓效率提升但不犧牲可控性。";
const path = "/services/ai-automation" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const zh: ServiceTemplateCopy = {
  "label": "AI自動化系統",
  "title": "AI自動化系統",
  "intro": "先自動化最耗人力、最容易漏的步驟，並保留人工接手的安全網。",
  "features": [
    "表單分流與標準回覆",
    "到期／跟催自動提醒",
    "系統間資料同步",
    "錯誤通知與重試機制",
    "人工備援接手路徑"
  ],
  "audiences": [
    "營運與客服忙碌的團隊",
    "跨工具手動搬資料的公司",
    "需要降低人工作業成本的部門",
    "已有系統但流程未串起來的企業"
  ]
};

const en: ServiceTemplateCopy = {
  "label": "AI Automation",
  "title": "AI Automation",
  "intro": "Automate the steps that take the most time and are easiest to miss — with a person always able to step in.",
  "features": [
    "Enquiry routing and standard replies",
    "Automatic reminders and follow-ups",
    "Data syncing between systems",
    "Error alerts and automatic retries",
    "Manual fallback when needed"
  ],
  "audiences": [
    "Busy operations and support teams",
    "Companies copying data between tools by hand",
    "Departments cutting manual work",
    "Businesses whose systems aren't connected yet"
  ]
};

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "AI自動化系統",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "AI自動化系統", path },
        ])}
      />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />

        <ServicePageExtras serviceSlug="ai-automation" />
      </div>
    </>
  );
}
