import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "AI自動化系統｜企業流程自動化解決方案｜AXORA";
const description =
  "AXORA AI／流程自動化：優先自動化高重複、規則清楚的作業，並設計人工備援，讓效率提升但不犧牲可控性。";
const path = "/services/ai-automation" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const features = [
  "表單分流與標準回覆",
  "到期／跟催自動提醒",
  "系統間資料同步",
  "錯誤通知與重試機制",
  "人工備援接手路徑",
];

const audiences = ["營運與客服忙碌的團隊", "跨工具手動搬資料的公司", "需要降低人工作業成本的部門", "已有系統但流程未串起來的企業"];

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "AI自動化系統",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "AI自動化系統", path },
        ])}
      />
      <div className="pt-20">
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                AI自動化系統
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">AI自動化系統</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                先自動化最耗人力、最容易漏的步驟，並保留人工接手的安全網。
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

        <ServicePageExtras serviceSlug="ai-automation" />
      </div>
    </>
  );
}
