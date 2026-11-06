import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { hreflangLanguages } from "@/app/i18n-routes";

const baseMetadata = pageMetadata({
  title: "聯絡 AXORA｜免費諮詢網站、App、訂單與預約系統",
  description:
    "加 LINE 或填表單，告訴我們你的生意和需求，AXORA 免費幫你評估網站、App、訂單、預約與會員系統怎麼做。",
  path: "/contact",
});

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: "/contact",
    languages: hreflangLanguages("/contact"),
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "聯絡我們", path: "/contact" },
        ])}
      />
      {children}
    </>
  );
}
