import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "智能分析與成交管理平台｜AXORA",
  description:
    "為企業建置 LINE Official Account + Messaging API + 自動回覆 + 客戶管理潛客紀錄。適用客服、預約、報價詢問與銷售跟進。",
  path: "/line-ai",
});

export default function LineAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "智能分析與成交管理平台", path: "/line-ai" },
        ])}
      />
      {children}
    </>
  );
}
