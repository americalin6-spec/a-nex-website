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

export const metadata: Metadata = {
  title: "AXORA | Smart Analytics & Business Management",
  description:
    "AXORA builds smart analytics platforms, customer management, automation workflows, SaaS, apps, websites, and scalable business software.",
  verification: {
    google: "ui1yOGHIuDFLC3qDkvHtIxwpw-BydSWQ1_0OB4c4MAw",
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
