import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "@/lib/seo/json-ld";
import { ServiceTemplate, type ServiceTemplateCopy } from "../../components/seo/service-template";
import { ServiceFaqSection } from "../../components/seo/service-faq-section";
import { ContactCtaSection } from "../../components/seo/contact-cta-section";

const title = "AI 自動開發信｜幫你找國外客戶、自動寄信與追蹤｜AXORA";
const description =
  "AXORA AI 自動開發信服務：自動找目標客戶、每封個別撰寫英文開發信、自動追蹤與每日回報，幫不會英文的台灣老闆接到國外生意。";
const path = "/services/ai-outreach" as const;

export const metadata = pageMetadata({ title, description, path });

const zh: ServiceTemplateCopy = {
  label: "AI 自動開發信",
  title: "AI 自動開發信",
  intro:
    "不會英文、沒時間找客戶？AI 每天幫你找國外目標客戶，一封一封寫好開發信寄出，3 天後自動追蹤，有人回信就通知你。",
  features: [
    "依你的產品找目標客戶（國家、產業自己選）",
    "只寄給對方公開的商業信箱",
    "每封針對對方個別撰寫，不是群發廣告",
    "對方沒回，第 3 天自動寄追蹤信",
    "退信、拒收自動排除，不重複打擾",
    "每天回報：寄了幾封、誰回信、建議怎麼回",
  ],
  audiences: [
    "想接國外訂單的台灣工廠、貿易商",
    "不會英文、沒有業務人員的老闆",
    "想開發新市場的品牌與服務業",
    "想穩定增加詢問量的公司",
  ],
  note: {
    text: "我們自己就是用這套方法，每天寄信開發杜拜、新加坡、澳洲等國的客戶。",
    href: "/contact",
    linkLabel: "想試試看？聯絡我們 →",
  },
};

const en: ServiceTemplateCopy = {
  label: "AI Email Outreach",
  title: "AI Email Outreach",
  intro:
    "No time to find new clients? Every day, AI finds businesses that fit your offer, writes a personal email to each one, follows up after 3 days, and tells you when someone replies.",
  features: [
    "Target businesses by country and industry",
    "Only publicly listed business email addresses",
    "Every email written for that specific business",
    "Automatic follow-up after 3 days",
    "Bounces and opt-outs removed automatically",
    "Daily report: emails sent, replies and suggested answers",
  ],
  audiences: [
    "Manufacturers and exporters looking for overseas buyers",
    "Owners without a sales team",
    "Brands entering new markets",
    "Companies that want a steady flow of enquiries",
  ],
  note: {
    text: "We use this exact process ourselves to reach clients in Dubai, Singapore and Australia.",
    href: "/contact",
    linkLabel: "Want to try it? Contact us →",
  },
};

const faqs = [
  {
    question: "這樣算是垃圾信嗎？",
    answer:
      "不是群發廣告。我們只寄給對方網站上公開的商業信箱，每封都針對對方的公司個別撰寫，信裡也會說明「不需要的話回覆 no，就不會再聯絡」。對方說不要，就永久排除。",
  },
  {
    question: "我不會英文也可以嗎？",
    answer:
      "可以。開發信由我們用英文寫好寄出；對方回信時，我們會翻成中文給你看，並附上建議的回覆內容，你確認後再回。",
  },
  {
    question: "一天會寄幾封？",
    answer:
      "依方案而定，一般每天 20～50 封。寧可少寄、寄準，也不亂寄，才不會影響信箱的信用。",
  },
  {
    question: "多久會有效果？",
    answer:
      "開發信通常要累積一段時間，第一週多半是對方點進網站看，回信會在追蹤信寄出後陸續出現。我們每天回報數字，讓你清楚看到進度。",
  },
];

const faqsEn = [
  {
    question: "Is this spam?",
    answer:
      "No. We only email publicly listed business addresses, every email is written for that specific company, and each one explains that a simple “no” means we will not contact them again.",
  },
  {
    question: "How many emails are sent per day?",
    answer:
      "Usually 20–50 per day depending on your plan. We focus on fewer, well-targeted emails to protect your sender reputation.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "In the first week you will usually see recipients visiting your website; replies tend to come after the follow-ups go out. You get a daily report with all the numbers.",
  },
];

export default function AiOutreachPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "AI 自動開發信", description, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "服務項目", path: "/services" },
          { name: "AI 自動開發信", path },
        ])}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <div className="pt-20">
        <ServiceTemplate zh={zh} en={en} />
        <ServiceFaqSection faqs={faqs} faqsEn={faqsEn} />
        <ContactCtaSection />
      </div>
    </>
  );
}
