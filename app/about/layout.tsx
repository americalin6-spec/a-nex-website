import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "關於 AXORA｜企業智能分析軟體、客戶管理與自動化開發",
  description:
    "AXORA 服務需要「把營運做成系統」的企業：客戶管理、智能分析平台、儀表板與 SaaS。專注打造符合企業流程的數位系統。",
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
