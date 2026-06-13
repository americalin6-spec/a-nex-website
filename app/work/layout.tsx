import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "案例｜CRM、LINE 客戶管理與 SaaS 交付成果｜AXORA",
  description:
    "涵蓋 LINE 客戶管理、房地產銷售 CRM、租賃營運自動化、成交追蹤、管理儀表板與官網後台等代表性專案。",
  path: "/work",
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
