import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "聯絡 AXORA｜CRM、LINE 串接與 SaaS 開發諮詢",
  description:
    "描述您的產業、需求與時程。AXORA 提供 CRM、LINE 官方帳號串接、SaaS 與網站開發諮詢，1–2 個工作天內回覆。",
  path: "/contact",
});

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
