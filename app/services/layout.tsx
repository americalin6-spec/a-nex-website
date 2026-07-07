import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "服務項目｜CRM、LINE 串接、SaaS 與網站開發｜AXORA",
  description:
    "每一項服務皆包含需求分析、設計、開發、測試、部署與文件。可依階段委託或一次交付完整系統。",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
