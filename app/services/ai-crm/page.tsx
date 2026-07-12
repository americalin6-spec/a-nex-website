import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { getProjectById } from "../../data/projects";
import { SectionHeader } from "../../components/ui/section-header";
import { Reveal } from "../../components/ui/reveal";
import { ContactCtaSection } from "../../components/seo/contact-cta-section";

const title = "AI CRM 系統開發｜AXORA";
const description =
  "AXORA 打造結合 AI、自動化與客戶管理的智慧 CRM 平台，整合 LINE OA、Lead 管理、Sales Pipeline 與 Dashboard，提升成交率與營運效率。";
const path = "/services/ai-crm" as const;
const serviceName = "AI CRM 系統開發";

const whyAiCrm = [
  {
    title: "AI 自動回覆",
    desc: "處理常見諮詢與初步分流，讓業務把時間花在高意向客戶。",
  },
  {
    title: "AI 客戶分析",
    desc: "依對話與行為整理客戶狀態，協助判斷跟進優先順序。",
  },
  {
    title: "Lead 管理",
    desc: "把官網、LINE、表單與名單匯入收斂到同一潛客池。",
  },
  {
    title: "Sales Pipeline",
    desc: "依你們真實成交流程設定階段，清楚看到卡關與漏斗。",
  },
  {
    title: "Dashboard",
    desc: "掌握進線、跟進、成交與團隊績效，決策不再靠感覺。",
  },
  {
    title: "LINE OA 整合",
    desc: "官方帳號對話同步客戶檔案，交接時不再找不到脈絡。",
  },
  {
    title: "Email Automation",
    desc: "依階段發送提醒、追蹤與通知，減少人工重複寄信。",
  },
  {
    title: "Workflow Automation",
    desc: "把分派、提醒、標籤與狀態更新做成可重複的流程。",
  },
];

const industries = [
  "製造業",
  "建設業",
  "科技公司",
  "教育產業",
  "醫療",
  "電商",
];

const axoraOffers = [
  {
    title: "CRM 客製化",
    desc: "依產業流程設計欄位、階段、權限與報表，而不是硬套範本。",
  },
  {
    title: "AI Agent",
    desc: "導入可輔助回覆、摘要與分派的 AI Agent，提升處理速度。",
  },
  {
    title: "LINE OA",
    desc: "串接 Messaging API，讓進線、標籤與對話進入 CRM。",
  },
  {
    title: "Dashboard",
    desc: "建置管理儀表板，讓主管即時掌握營運與成交狀況。",
  },
  {
    title: "ERP 串接",
    desc: "依需求對接既有 ERP／進銷存，減少重覆建檔。",
  },
  {
    title: "API 串接",
    desc: "串接官網表單、金流、通知或其他內部系統 API。",
  },
  {
    title: "SaaS",
    desc: "若要做成可訂閱產品，可一併規劃多租戶、權限與計費流程。",
  },
];

const processSteps = [
  "需求訪談",
  "規劃",
  "UI",
  "開發",
  "測試",
  "上線",
  "維護",
];

const faqs = [
  {
    question: "AI CRM 跟市面上現成 CRM 差在哪？",
    answer:
      "現成 CRM 多半要業務手動更新。AXORA 的 AI CRM 可依你們流程客製，並串接 LINE OA、AI 摘要、自動分派與提醒，讓系統貼近實際成交現場。",
  },
  {
    question: "一定要先有 LINE 官方帳號嗎？",
    answer:
      "若客戶主要在 LINE 溝通，建議使用 Official Account。尚未開通也可以，我們會先規劃開通與 Messaging API 串接時程。",
  },
  {
    question: "可以沿用我們現有的客戶名單嗎？",
    answer:
      "可以。常見會用 CSV／Excel 匯入，並在上線前整理來源、負責人、目前階段等必要欄位。",
  },
  {
    question: "導入大概需要多久？",
    answer:
      "視流程複雜度與串接範圍而定。多數專案會先上線核心模組（Lead、Pipeline、跟進提醒、必要整合），再分階段擴充 AI 與自動化。",
  },
  {
    question: "AI 會不會取代業務？",
    answer:
      "不會。AI 負責摘要、分流、提醒與重複回覆；報價談判、關係經營與成交判斷仍由業務決定。",
  },
  {
    question: "能否串接我們現有的 ERP 或官網？",
    answer:
      "可以。AXORA 可依 API 文件規劃 ERP、官網表單、通知系統或其他後台串接，減少重覆輸入。",
  },
  {
    question: "資料安全與權限怎麼處理？",
    answer:
      "會依角色設定可見範圍（例如業務只看自己的名單、主管看團隊），並規劃備份與存取控管。細節會在需求訪談後寫進規格。",
  },
  {
    question: "上線後誰負責維護與調整？",
    answer:
      "可依約安排維運、監控與功能迭代。我們也會交付文件與操作說明，方便內部接手日常調整。",
  },
  {
    question: "預算大概怎麼抓？",
    answer:
      "取決於客製深度、整合數量與是否含 AI Agent／Dashboard。建議先約諮詢，確認範圍後再給分階段報價，避免一次做過大。",
  },
];

const caseStudyCards = [
  {
    href: "/projects/ai-crm",
    projectId: "ai-crm",
    title: "AI CRM",
    label: "Case Study",
    description:
      "已交付的 CRM：串接 LINE 與 OpenAI，把潛客、對話摘要與銷售階段集中在同一後台。",
  },
  {
    href: "/line-ai",
    projectId: null,
    title: "LINE AI",
    label: "Product",
    coverImage: "/projects/ai-crm.png",
    description:
      "智能分析與成交管理平台：LINE Official Account、自動回覆與客戶管理潛客紀錄。",
  },
  {
    href: "/projects/onlymate",
    projectId: "onlymate",
    title: "OnlyMate",
    label: "Case Study",
    description:
      "AI 互動平台：對話流程、使用者分群與營運後台話術管理，驗證配對與留存設計。",
  },
] as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

export default function AiCrmPage() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: serviceName,
          description,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: serviceName, path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />

      <div className="pt-20">
        {/* Hero */}
        <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
                AI CRM
              </p>
              <h1 className="text-display page-title mt-4">
                <span className="gradient-text">AI CRM 系統開發</span>
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                打造結合 AI、自動化與客戶管理的智慧 CRM
                平台，提升成交率與營運效率。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
                >
                  立即預約諮詢
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex rounded-lg border border-border px-7 py-3 text-label font-mono uppercase tracking-[0.15em] text-muted-light transition hover:border-border-hover hover:text-foreground"
                >
                  查看成功案例
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why AI CRM */}
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Why AI CRM"
              title="為什麼企業需要 AI CRM"
              description="把回覆、分析、名單、管道、儀表板與自動化放進同一套系統，減少漏單與跨工具切換。"
              align="center"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {whyAiCrm.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <li className="glass-card h-full rounded-xl px-6 py-5">
                    <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                      {item.title}
                    </p>
                    <p className="mt-3 text-body text-muted-light">{item.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Industries */}
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Industries"
              title="適合哪些企業"
              description="只要客戶溝通頻繁、跟進節奏關鍵，就適合導入 AI CRM。"
              align="center"
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <Reveal key={industry} delay={index * 0.03}>
                  <span className="glass-card rounded-full px-5 py-2.5 text-label font-mono uppercase tracking-wider text-muted-light">
                    {industry}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AXORA can provide */}
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Capabilities"
              title="AXORA 可以提供"
              description="從 CRM 客製到 AI、LINE、Dashboard 與系統串接，依階段交付。"
              align="center"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {axoraOffers.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.03}>
                  <li className="glass-card h-full rounded-xl px-6 py-5">
                    <p className="text-xl font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-3 text-body text-muted-light">{item.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Process"
              title="開發流程"
              description="從訪談到維護，每個階段都有明確交付，降低專案風險。"
              align="center"
            />
            <ol className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3">
              {processSteps.map((step, index) => (
                <li key={step} className="flex w-full flex-col items-center gap-3">
                  <Reveal delay={index * 0.03} className="w-full">
                    <span className="glass-card flex w-full justify-center rounded-xl px-5 py-3 text-label font-mono uppercase tracking-wider text-foreground">
                      {step}
                    </span>
                  </Reveal>
                  {index < processSteps.length - 1 ? (
                    <span className="text-accent-blue" aria-hidden>
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <SectionHeader
              label="FAQ"
              title="常見問題"
              description="以下是企業在評估 AI CRM 時最常問的問題。"
              align="center"
            />
            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.02}>
                  <details className="glass-card rounded-xl px-6 py-5">
                    <summary className="cursor-pointer list-none text-body font-medium text-foreground">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-body text-muted-light">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader
              label="Case Studies"
              title="成功案例"
              description="先看 AXORA 已交付與進行中的相關專案。"
              align="center"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {caseStudyCards.map((card, index) => {
                const project = card.projectId
                  ? getProjectById(card.projectId)
                  : null;
                const coverImage =
                  project?.coverImage ??
                  ("coverImage" in card ? card.coverImage : "/og-image.png");

                return (
                  <Reveal key={card.href} delay={index * 0.04}>
                    <Link
                      href={card.href}
                      className="gradient-border group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="gradient-border-inner flex h-full flex-col overflow-hidden rounded-[inherit]">
                        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal">
                          <Image
                            src={coverImage}
                            alt={`${card.title} — AXORA`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                            {card.label}
                          </p>
                          <h3 className="mt-3 text-xl font-medium text-foreground">
                            {card.title}
                          </h3>
                          <p className="mt-3 flex-1 text-body text-muted-light">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <ContactCtaSection
          title="開始您的 AI CRM 專案"
          description="告訴我們產業、現有工具與最想解決的漏單問題，AXORA 協助規劃可行方案。"
        />
      </div>
    </>
  );
}
