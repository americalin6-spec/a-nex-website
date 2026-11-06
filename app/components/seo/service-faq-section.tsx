"use client";

import { JsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import type { ServiceFaq } from "@/app/data/service-faqs";
import { useLanguage } from "@/app/context/language-context";

export function ServiceFaqSection({
  faqs: faqsZh,
  faqsEn,
}: {
  faqs: ServiceFaq[];
  faqsEn?: ServiceFaq[];
}) {
  const { locale } = useLanguage();
  const en = locale === "en" && !!faqsEn?.length;
  const faqs = en ? faqsEn! : faqsZh;
  if (faqs.length === 0) return null;

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <section className="section-elevated border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-12">
          <h2 className="section-title text-center">{en ? "Frequently asked questions" : "常見問題"}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-body text-muted-light">
            {en ? "The questions we are asked most often before a project starts." : "導入前最常被問到的問題，協助您快速評估需求。"}
          </p>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="glass-card rounded-xl px-6 py-5"
              >
                <summary className="cursor-pointer list-none text-body font-medium text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-3 text-body text-muted-light">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
