import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "智能分析與成交管理平台 免費試用｜AXORA",
  description:
    "智能分析、成交追蹤、客戶管理與儀表板。免費試用 30 次分析，立即於 app.axora.tw 開始。",
  path: "/downloads",
});

export default function DownloadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
