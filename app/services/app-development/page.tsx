import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "APP開發｜iOS與Android應用程式開發｜AXORA";
const description =
  "AXORA APP 開發：依時程與裝置需求規劃 iOS／Android 方案，串接會員、CRM 或既有 API，交付可上架的行動產品。";
const path = "/services/app-development" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const zh: ServiceTemplateCopy = {
  "label": "APP開發",
  "title": "APP開發",
  "intro": "用清楚的產品範圍與 API 整合，做出能上架、能維護的 iOS／Android APP。",
  "features": [
    "iOS／Android 產品規劃與開發",
    "會員登入與個人資料",
    "API 串接既有後台",
    "推播與關鍵流程設計",
    "測試與上架協助（可列入範圍）"
  ],
  "audiences": [
    "需要行動端承接服務的品牌",
    "已有後台要補 APP 的團隊",
    "預約／會員制商業模式",
    "雙平台要同步上線的專案"
  ]
};

const en: ServiceTemplateCopy = {
  "label": "App Development",
  "title": "App Development",
  "intro": "A clear scope and solid API integration — iOS and Android apps that get published and stay easy to maintain.",
  "features": [
    "iOS / Android planning and development",
    "Sign-in and user profiles",
    "API connection to your existing back office",
    "Push notifications and key user flows",
    "Testing and App Store submission support"
  ],
  "audiences": [
    "Brands that need a mobile app for customers",
    "Teams with a back office that need an app",
    "Booking and membership businesses",
    "Projects launching on both platforms"
  ]
};

export default function AppDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "APP開發",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "APP開發", path },
        ])}
      />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />

        <ServicePageExtras serviceSlug="app-development" />
      </div>
    </>
  );
}
