import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
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

const features = [
  "iOS／Android 產品規劃與開發",
  "會員登入與個人資料",
  "API 串接既有後台",
  "推播與關鍵流程設計",
  "測試與上架協助（可列入範圍）",
];

const audiences = ["需要行動端承接服務的品牌", "已有後台要補 APP 的團隊", "預約／會員制商業模式", "雙平台要同步上線的專案"];

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
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                APP開發
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">APP開發</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                用清楚的產品範圍與 API 整合，做出能上架、能維護的 iOS／Android APP。
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader label="功能特色" title="功能特色" align="center" />
            <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature} delay={index * 0.04}>
                  <li className="glass-card flex items-center gap-3 rounded-xl px-6 py-4 text-body text-foreground">
                    <span className="text-accent-blue">✓</span>
                    <span>{feature}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader label="適合對象" title="適合對象" align="center" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {audiences.map((audience, index) => (
                <Reveal key={audience} delay={index * 0.04}>
                  <span className="glass-card rounded-full px-5 py-2.5 text-label font-mono uppercase tracking-wider text-muted-light">
                    {audience}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ServicePageExtras serviceSlug="app-development" />
      </div>
    </>
  );
}
