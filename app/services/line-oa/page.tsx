import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  JsonLd,
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/seo/json-ld";
import { ServicePageExtras } from "../../components/seo/service-page-extras";
import { LineOaBody } from "../../components/line-oa/line-oa-body";

const title = "LINE 自動回覆・AI 客服｜24 小時自動回訊息、接單、接預約｜AXORA";
const description =
  "在你的 LINE 官方帳號加上 AI 自動回覆：24 小時回答客人問題、自動接單接預約、客人資料自動建檔。不用換帳號，先聊不用錢。";
const path = "/services/line-oa" as const;

export const metadata = pageMetadata({
  title,
  description,
  path,
});

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
        <LineOaBody />

        <ServicePageExtras serviceSlug="line-oa" />
      </div>
    </>
  );
}
