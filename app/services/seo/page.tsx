import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";
import { SeoBody } from "../../components/seo/seo-body";
import { SEO_FAQS } from "../../data/seo-faqs";

const title = "網站 SEO 基礎設定｜讓客人在 Google 找得到你｜AXORA";
const description =
  "AXORA 做的每個網站都包含 SEO 基礎設定：Google 看得懂的頁面結構、網站地圖與收錄申請、手機優化、Google 商家檔案協助、中英雙語。不保證排名，但把基礎全部做好。";
const path = "/services/seo" as const;

export const metadata = pageMetadata({ title, description, path });

export default function SeoPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "網站 SEO 基礎設定", description, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "網站 SEO 基礎設定", path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(SEO_FAQS.zh)} />
      <div className="pt-20">
        <SeoBody />
      </div>
    </>
  );
}
