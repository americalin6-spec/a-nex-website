import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
import { ServicePageExtras } from "../../components/seo/service-page-extras";

const title = "AI客戶管理系統｜AXORA";
const description =
  "AXORA AI 客戶管理系統：整合 LINE 對話、潛客資料、成交階段與自動跟進提醒，協助業務少漏單、提升成交效率。";
const path = "/services/ai-crm" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

const features = [
  "LINE 對話同步至客戶檔案",
  "OpenAI 對話摘要與意圖標籤",
  "銷售階段／成交管道可視化",
  "跟進提醒與任務分派",
  "潛客匯入與標籤篩選",
];

const audiences = ["房仲業務團隊", "保險業務團隊", "顧問／教練業", "B2B 銷售團隊"];

export default function AiCrmPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "AI客戶管理系統",
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "AI客戶管理系統", path },
        ])}
      />
      <div className="pt-20">
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                AI客戶管理系統
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">AI客戶管理系統</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                把 LINE 對話、潛客與成交階段收進同一後台，讓該跟的名單不再沉底。
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

        <ServicePageExtras serviceSlug="ai-crm" />
      </div>
    </>
  );
}
