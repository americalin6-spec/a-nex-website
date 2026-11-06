import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { faqs } from "@/app/data/ai-crm-content";
import { AiCrmBody } from "../../components/seo/ai-crm-body";

const title = "AI CRM 系統開發｜AXORA";
const description =
  "AXORA 打造結合 AI、自動化與客戶管理的智慧 CRM 平台，整合 LINE OA、Lead 管理、Sales Pipeline 與 Dashboard，提升成交率與營運效率。";
const path = "/services/ai-crm" as const;
const serviceName = "AI CRM 系統開發";

export const metadata = pageMetadata({
  title,
  description,
  path,
});

export default function AiCrmPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: serviceName,
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: serviceName, path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />

      <AiCrmBody />
    </>
  );
}
