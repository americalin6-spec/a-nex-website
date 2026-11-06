import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "網站設計｜企業官網與客製化網站開發｜AXORA";
const description =
  "AXORA 網站設計與開發：企業官網、形象站與客製頁面，含響應式版面、基礎 SEO，以及表單／LINE 轉換入口。";
const path = "/services/web-design" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const zh: ServiceTemplateCopy = {
  "label": "網站設計",
  "title": "網站設計",
  "intro": "官網不只好看，還要讓潛在客戶找得到服務、留得下名單。",
  "features": [
    "企業官網資訊架構",
    "響應式頁面設計與開發",
    "基礎 SEO（標題、sitemap、OG）",
    "諮詢表單／LINE 入口",
    "內容後台（依需求建置）"
  ],
  "audiences": [
    "需要專業形象官網的品牌",
    "服務型／工作室產業",
    "要承接諮詢名單的公司",
    "準備重做舊站的中小企業"
  ],
  "note": {
    "text": "每個網站都包含基礎 SEO 設定，讓 Google 找得到你。",
    "href": "/services/seo",
    "linkLabel": "看包含什麼 →"
  }
};

const en: ServiceTemplateCopy = {
  "label": "Website Design",
  "title": "Website Design",
  "intro": "A website should do more than look good — it should help customers find your services and get in touch.",
  "features": [
    "Clear site structure for your business",
    "Responsive design that works on every device",
    "Basic SEO (titles, sitemap, social previews)",
    "Contact form and chat buttons",
    "Content editor (if you need one)"
  ],
  "audiences": [
    "Brands that need a professional website",
    "Service businesses and studios",
    "Companies that want more enquiries",
    "Businesses replacing an outdated site"
  ],
  "note": {
    "text": "Every website includes basic SEO setup so Google can find you.",
    "href": "/services/seo",
    "linkLabel": "See what's included →"
  }
};

export default function WebDesignPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "網站設計",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "網站設計", path },
        ])}
      />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />

        <ServicePageExtras serviceSlug="web-design" />
      </div>
    </>
  );
}
