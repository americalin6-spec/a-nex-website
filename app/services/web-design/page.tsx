import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
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

const features = [
  "企業官網資訊架構",
  "響應式頁面設計與開發",
  "基礎 SEO（標題、sitemap、OG）",
  "諮詢表單／LINE 入口",
  "內容後台（依需求建置）",
];

const audiences = ["需要專業形象官網的品牌", "服務型／工作室產業", "要承接諮詢名單的公司", "準備重做舊站的中小企業"];

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
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                網站設計
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">網站設計</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                官網不只好看，還要讓潛在客戶找得到服務、留得下名單。
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

        <ServicePageExtras serviceSlug="web-design" />
      </div>
    </>
  );
}
