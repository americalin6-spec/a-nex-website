import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "SaaS平台開發｜雲端系統與訂閱制平台開發｜AXORA";
const description =
  "AXORA SaaS 開發：從核心工作流程、帳號權限到可上線 MVP，協助企業打造雲端產品，再依使用回饋擴充訂閱與後台。";
const path = "/services/saas-development" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const zh: ServiceTemplateCopy = {
  "label": "SaaS平台開發",
  "title": "SaaS平台開發",
  "intro": "先做出能上線的核心流程，再擴充會員、訂閱與營運後台。",
  "features": [
    "核心工作流程 MVP",
    "帳號／角色權限",
    "營運後台與資料模型",
    "訂閱與帳單流程（可分期）",
    "部署、監控與文件交付"
  ],
  "audiences": [
    "新創產品團隊",
    "要產品化內部流程的企業",
    "既有服務轉訂閱制",
    "需要客製雲端後台的公司"
  ]
};

const en: ServiceTemplateCopy = {
  "label": "SaaS Development",
  "title": "SaaS Development",
  "intro": "Launch the core workflow first, then add accounts, subscriptions and an admin back office.",
  "features": [
    "MVP of the core workflow",
    "Accounts, roles and permissions",
    "Admin back office and data model",
    "Subscriptions and billing (can come later)",
    "Deployment, monitoring and documentation"
  ],
  "audiences": [
    "Start-up product teams",
    "Companies turning internal processes into products",
    "Services moving to subscriptions",
    "Businesses that need a custom cloud platform"
  ]
};

export default function SaasDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "SaaS平台開發",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "SaaS平台開發", path },
        ])}
      />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />

        <ServicePageExtras serviceSlug="saas-development" />
      </div>
    </>
  );
}
