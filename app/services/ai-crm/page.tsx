import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";

export const metadata: Metadata = {
  title: "AI客戶管理系統｜AXORA",
  description:
    "AI客戶管理系統，整合CRM客戶管理、成交分析、自動追蹤提醒與LINE官方帳號串接，協助企業提升成交率。",
};

const features = [
  "客戶資料管理",
  "AI客戶分析",
  "成交機率預測",
  "自動跟進提醒",
  "LINE訊息整合",
];

const audiences = ["房仲", "保險業", "顧問公司", "中小企業"];

export default function AiCrmPage() {
  return (
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
              提升成交率、減少客戶流失、強化業務追蹤
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
