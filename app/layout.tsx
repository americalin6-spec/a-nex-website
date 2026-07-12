import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist } from "next/font/google";
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
const siteUrl = "https://www.axora.tw";
const ogImage = "https://www.axora.tw/icon.png";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AXORA",
  alternateName: "AXORA 智能平台",
  url: siteUrl,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AXORA",
  url: siteUrl,
  logo: ogImage,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "AXORA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteUrl,
    siteName: "AXORA",
    title,
    description,
    images: [
      {
        url: ogImage,
        alt: "AXORA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ui1yOGHIuDFLC3qDkvHtIxwpw-BydSWQ1_0OB4c4MAw",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
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
