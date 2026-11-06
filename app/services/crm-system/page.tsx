import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "CRM客戶管理系統｜客戶管理與業務追蹤平台｜AXORA";
const description =
  "AXORA CRM：依你們真實成交流程設定階段、負責人與提醒，讓商機可追、交接可接，不再只靠試算表。";
const path = "/services/crm-system" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const zh: ServiceTemplateCopy = {
  "label": "CRM客戶管理系統",
  "title": "CRM客戶管理系統",
  "intro": "把成交流程寫進系統：誰負責、卡在哪、下一步是什麼，一次看清。",
  "features": [
    "依公司流程客製銷售階段",
    "商機負責人與狀態追蹤",
    "跟進提醒與逾時警示",
    "名單匯入與欄位整理",
    "成交與漏斗基礎報表"
  ],
  "audiences": [
    "多人協作的業務部",
    "開始標準化流程的中小企業",
    "需要權限分層的團隊",
    "準備汰換試算表的公司"
  ]
};

const en: ServiceTemplateCopy = {
  "label": "CRM System",
  "title": "CRM System",
  "intro": "Put your sales process into one system: who owns each deal, where it is stuck, and what happens next.",
  "features": [
    "Sales stages that match your process",
    "Deal owners and status tracking",
    "Follow-up reminders and overdue alerts",
    "Contact import and data clean-up",
    "Win rates and pipeline reports"
  ],
  "audiences": [
    "Sales teams working together",
    "Small businesses standardising their process",
    "Teams that need permission levels",
    "Companies outgrowing spreadsheets"
  ]
};

export default function CrmSystemPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "CRM客戶管理系統",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "CRM客戶管理系統", path },
        ])}
      />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />

        <ServicePageExtras serviceSlug="crm-system" />
      </div>
    </>
  );
}
