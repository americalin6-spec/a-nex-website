import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "AI客服系統｜智能客服解決方案｜AXORA";
const description =
  "AXORA AI 客服：先處理高重複問題，並在需要時轉人工；可整合 LINE 與網站進線，讓服務與成交機會同時被接住。";
const path = "/services/ai-customer-service" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const zh: ServiceTemplateCopy = {
  "label": "AI客服系統",
  "title": "AI客服系統",
  "intro": "先自動化常見問題，例外再轉人工——服務不斷線，品質可控。",
  "features": [
    "高重複問題自動回覆",
    "知識範圍與敏感問題控管",
    "低信心自動轉人工",
    "LINE／網站進線彙整",
    "對話紀錄可供後續優化"
  ],
  "audiences": [
    "電商客服",
    "預約制服務業",
    "教育／課程諮詢",
    "需要延長服務時段的品牌"
  ]
};

const en: ServiceTemplateCopy = {
  "label": "AI Customer Service",
  "title": "AI Customer Service",
  "intro": "Automate the common questions and hand the exceptions to a person — always available, always under control.",
  "features": [
    "Automatic replies to repetitive questions",
    "Controlled topics and sensitive-question handling",
    "Hands over to a person when unsure",
    "Messages from chat apps and website in one place",
    "Conversation history to keep improving"
  ],
  "audiences": [
    "E-commerce support teams",
    "Booking-based service businesses",
    "Education and course enquiries",
    "Brands that want longer service hours"
  ]
};

export default function AiCustomerServicePage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "AI客服系統",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "AI客服系統", path },
        ])}
      />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />

        <ServicePageExtras serviceSlug="ai-customer-service" />
      </div>
    </>
  );
}
