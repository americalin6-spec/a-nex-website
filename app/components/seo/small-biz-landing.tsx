import {
  JsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { SmallBizBody } from "./small-biz-body";

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
  dataEn,
  demo,
}: {
  data: SmallBizLandingData;
  /** English copy; shown when the interface is in English. */
  dataEn?: Omit<SmallBizLandingData, "path" | "description">;
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

      <SmallBizBody data={data} dataEn={dataEn} demo={demo} />
    </>
  );
}
