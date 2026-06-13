import Link from "next/link";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";

export const metadata = pageMetadata({
  title: "SaaS平台開發｜雲端系統與訂閱制平台開發｜A-NEX",
  description:
    "A-NEX 提供 SaaS 平台開發服務，協助企業打造雲端系統、會員平台、訂閱制服務與客製化管理系統。",
  path: "/services/saas-development",
});

const features = [
  "SaaS平台開發",
  "會員系統",
  "訂閱制管理",
  "雲端資料管理",
  "客製化後台系統",
];

const audiences = ["房仲", "保險業", "顧問公司", "中小企業"];

export default function SaasDevelopmentPage() {
  return (
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
              打造專屬雲端平台與訂閱制系統，加速企業數位轉型
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

      <section className="section-violet py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
          <Reveal>
            <h2 className="section-title">聯絡我們</h2>
            <Link
              href="/contact"
              className="btn-primary mt-8 inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
            >
              前往聯絡頁
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
