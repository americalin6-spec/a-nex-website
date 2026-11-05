import {
  JsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SectionHeader } from "../ui/section-header";
import { Reveal } from "../ui/reveal";
import { LineAddButton } from "../line/line-add-button";

export type SmallBizLandingData = {
  path: `/${string}`;
  name: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  pains: string[];
  features: { title: string; desc: string }[];
  audiences: string[];
  faqs: { question: string; answer: string }[];
};

export function SmallBizLanding({
  data,
  demo,
}: {
  data: SmallBizLandingData;
  demo?: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: data.name,
          description: data.description,
          path: data.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: data.name, path: data.path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(data.faqs)} />

      <div className="pt-20">
        {/* Hero */}
        <section className="hero-glow border-b border-border py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <Reveal>
              <p className="text-label uppercase text-accent-blue">{data.eyebrow}</p>
              <h1 className="text-display page-title mt-4">{data.headline}</h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">{data.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LineAddButton variant="primary" className="px-7 py-3" />
              </div>
            </Reveal>
          </div>
        </section>

        {demo}

        {/* Pains */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="你是不是也這樣？" title="這些麻煩，交給系統處理" />
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {data.pains.map((pain) => (
                <li key={pain} className="glass-card px-6 py-5 text-body text-foreground">
                  {pain}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="功能" title={`${data.name}可以做到什麼`} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.map((f, i) => (
                <div key={f.title} className="glass-card h-full p-6">
                  <span className="font-serif text-sm tracking-[0.2em] text-accent-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-foreground">{f.title}</h2>
                  <p className="mt-2 text-body-sm text-muted-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="適合誰" title="適合這些店家" align="center" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {data.audiences.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-surface px-5 py-2.5 text-body-sm text-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="合作流程" title="三個步驟，簡單上線" />
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["說需求", "用 LINE 告訴我們你的生意和最麻煩的事，不用寫規格書。"],
                ["看樣品", "我們先做出樣品給你看，滿意再繼續，不滿意就調整。"],
                ["正式上線", "上線後教你怎麼用，有問題直接 LINE 找我們。"],
              ].map(([t, d], i) => (
                <li key={t} className="glass-card p-6">
                  <span className="font-serif text-4xl text-accent-blue">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-body-sm text-muted-light">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <SectionHeader label="常見問題" title={`${data.name}常見問題`} align="center" />
            <div className="mt-10 space-y-3">
              {data.faqs.map((f) => (
                <details key={f.question} className="glass-card group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body font-medium text-foreground">
                    <h3 className="text-body font-medium">{f.question}</h3>
                    <span className="text-accent-blue transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-body-sm leading-relaxed text-muted-light">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <div className="glass-card px-8 py-14 text-center lg:px-16">
              <h2 className="section-title">先聊聊，不用錢</h2>
              <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">
                告訴我們你是做什麼生意、現在最麻煩的是哪件事，我們免費幫你評估可以怎麼做。
              </p>
              <div className="mt-8 flex justify-center">
                <LineAddButton variant="primary" className="px-8 py-3.5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
