import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
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

const features = [
  "核心工作流程 MVP",
  "帳號／角色權限",
  "營運後台與資料模型",
  "訂閱與帳單流程（可分期）",
  "部署、監控與文件交付",
];

const audiences = ["新創產品團隊", "要產品化內部流程的企業", "既有服務轉訂閱制", "需要客製雲端後台的公司"];

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
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                SaaS平台開發
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">SaaS平台開發</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                先做出能上線的核心流程，再擴充會員、訂閱與營運後台。
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

        <ServicePageExtras serviceSlug="saas-development" />
      </div>
    </>
  );
}
