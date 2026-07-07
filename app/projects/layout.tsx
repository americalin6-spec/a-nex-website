import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "案例實績｜AXORA Project Portfolio",
  description:
    "AXORA 專案作品集：涵蓋 AI 平台、CRM、教育、預約、電商、製造儀表板等企業軟體與網站開發案例。",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
