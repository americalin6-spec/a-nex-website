import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
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

const features = [
  "高重複問題自動回覆",
  "知識範圍與敏感問題控管",
  "低信心自動轉人工",
  "LINE／網站進線彙整",
  "對話紀錄可供後續優化",
];

const audiences = ["電商客服", "預約制服務業", "教育／課程諮詢", "需要延長服務時段的品牌"];

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
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                AI客服系統
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">AI客服系統</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                先自動化常見問題，例外再轉人工——服務不斷線，品質可控。
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

        <ServicePageExtras serviceSlug="ai-customer-service" />
      </div>
    </>
  );
}
