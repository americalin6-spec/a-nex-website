import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "關於 AXORA｜把複雜的事變簡單的網站與系統開發團隊",
  description:
    "AXORA 幫店家和企業做網站、App 和系統。用白話溝通、用 LINE 討論、先看樣品再決定，讓不懂電腦的老闆也能輕鬆擁有自己的系統。",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "關於 AXORA", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
