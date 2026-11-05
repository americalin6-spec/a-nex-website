import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "服務項目｜官方網站、訂單系統、預約系統、LINE 官方帳號、App 開發｜AXORA",
  description:
    "AXORA 幫店家和企業做官方網站、訂單與點餐系統、預約系統、會員管理、LINE 官方帳號與手機 App。用 LINE 說需求就好，先聊不用錢。",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
