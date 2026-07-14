import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist } from "next/font/google";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import {
  JsonLd,
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo/json-ld";
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
  "AXORA｜AI 客戶管理系統｜CRM 系統｜SaaS 平台開發";
const description =
  "AXORA 提供 AI 客戶管理系統、CRM 系統、LINE 官方帳號串接、SaaS 平台、客製化網站與 APP 開發服務。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: SITE_URL,
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
        url: "/axora-favicon-v2.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    shortcut: "/axora-favicon-v2.png",
    apple: "/axora-favicon-v2.png",
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
      <head>
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
      </head>
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
