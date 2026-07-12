import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "LINE官方帳號整合｜LINE CRM與自動回覆方案｜AXORA";
const description =
  "AXORA LINE 官方帳號整合：歡迎訊息、選單、關鍵字回覆、Webhook，以及潛客／CRM 同步，把聊天變成可追蹤名單。";
const path = "/services/line-oa" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const features = [
  "Official Account／Messaging API 串接",
  "歡迎訊息與圖文選單",
  "關鍵字自動回覆",
  "進線潛客建檔",
  "對話同步至 CRM／後台",
];

const audiences = ["以 LINE 為主溝通的品牌", "房仲／保險／顧問", "需要分流客服與業務的團隊", "要減少個人 LINE 接案的公司"];

export default function LineOaPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "LINE官方帳號整合",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "LINE官方帳號整合", path },
        ])}
      />
      <div className="pt-20">
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                LINE官方帳號整合
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">LINE官方帳號整合</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                把官方帳號從「會回訊息」升級成「進線可追蹤、可交接」。
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

        <ServicePageExtras serviceSlug="line-oa" />
      </div>
    </>
  );
}
