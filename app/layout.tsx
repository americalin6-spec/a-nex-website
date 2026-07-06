import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist } from "next/font/google";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import { Providers } from "./components/providers";
import { SiteShell } from "./components/layout/site-shell";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-78TN3S61HM";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const title =
  "AXORA｜AI客戶管理系統、CRM系統、SaaS平台開發、網站與APP開發";
const description =
  "AXORA 提供 AI 客戶管理系統、CRM 系統、SaaS 平台開發、AI 自動化流程、LINE 官方帳號串接、網站設計與 APP 開發服務，協助企業提升效率與成交率。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "/",
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ui1yOGHIuDFLC3qDkvHtIxwpw-BydSWQ1_0OB4c4MAw",
  },
  icons: {
    icon: [
      {
        url: "/axora-logo-transparent.png",
        type: "image/png",
      },
    ],
    apple: "/axora-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
      {process.env.NODE_ENV === "production" ? (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      ) : null}
    </html>
  );
}
