import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";
import { hreflangLanguages, toEnPath } from "@/app/i18n-routes";

/** Metadata for the English twin (/en/x) of a Chinese page (/x). */
export function enPageMetadata({
  zhPath,
  title,
  description,
}: {
  zhPath: string;
  title: string;
  description: string;
}): Metadata {
  const url = toEnPath(zhPath) ?? "/en";
  return {
    title,
    description,
    alternates: { canonical: url, languages: hreflangLanguages(zhPath) },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE] },
  };
}

export const EN_META: Record<string, { title: string; description: string }> = {
  "/about": {
    title: "About AXORA | A Taiwan-Based Studio That Makes Complex Things Simple",
    description:
      "AXORA is a small Taiwan-based team building websites, apps and business systems for clients worldwide, with clear written communication and fair pricing.",
  },
  "/services": {
    title: "Services | Websites, Apps, Ordering & Booking Systems, AI Automation | AXORA",
    description:
      "Everything AXORA builds: business websites, web apps & SaaS, mobile apps, ordering and booking systems, CRM, LINE integration and AI automation.",
  },
  "/projects": {
    title: "Projects | Websites, Apps & Systems We Have Built | AXORA",
    description: "Selected work by AXORA: websites, platforms, apps and business systems delivered for real clients.",
  },
  "/downloads": {
    title: "Downloads | AXORA",
    description: "Download AXORA brochures and resources.",
  },
  "/line-ai": {
    title: "AI Auto-Reply for LINE | AXORA",
    description: "Add AI to your LINE Official Account: answer customers 24/7, take orders and bookings automatically.",
  },
  "/services/web-design": {
    title: "Website Design & Development | AXORA",
    description: "Business websites that look premium, load fast, rank on Google and turn visitors into enquiries.",
  },
  "/services/app-development": {
    title: "Mobile App Development (iOS & Android) | AXORA",
    description: "Custom iOS and Android apps for your customers or your team, connected to the same back office as your website.",
  },
  "/services/saas-development": {
    title: "Web App & SaaS Development | AXORA",
    description: "Customer portals, dashboards, booking platforms and subscription products — designed, built and hosted for you.",
  },
  "/services/crm-system": {
    title: "Custom CRM System Development | AXORA",
    description: "A CRM built around how your team actually works: customers, leads, follow-ups and reports in one place.",
  },
  "/services/ai-crm": {
    title: "AI CRM | Customer Management With Built-In AI | AXORA",
    description: "A CRM with AI that organises conversations, scores leads, drafts follow-ups and keeps customer records up to date.",
  },
  "/services/ai-customer-service": {
    title: "AI Customer Service | 24/7 Automatic Replies | AXORA",
    description: "AI customer service that answers common questions instantly, hands complex ones to your team, and logs everything.",
  },
  "/services/ai-automation": {
    title: "AI Automation for Business Workflows | AXORA",
    description: "Automate repetitive work with AI: sorting enquiries, turning messages into orders, reminders and data syncing.",
  },
  "/services/line-oa": {
    title: "LINE Auto-Reply & AI Customer Service | AXORA",
    description:
      "Add AI to your LINE Official Account: answer customers 24/7, take orders and bookings automatically and keep customer records organised.",
  },
  "/services/ordering-system": {
    title: "Online Ordering System for Restaurants & Shops | AXORA",
    description: "Customers order from their phone, orders arrive organised, and you see sales at a glance. Free consultation.",
  },
  "/services/booking-system": {
    title: "Online Booking System for Salons, Studios & Clinics | AXORA",
    description: "Customers pick a time slot themselves, reminders go out automatically, no more double bookings or no-shows.",
  },
  "/services/seo": {
    title: "Website SEO Setup | Help Customers Find You on Google | AXORA",
    description:
      "Every AXORA website includes the SEO foundations: page structure Google understands, sitemap and indexing requests, mobile optimisation, Google Business Profile help and bilingual sites. No ranking promises — just the basics done right.",
  },
  "/services/gas-delivery-system": {
    title: "Ordering & Delivery System for Gas Delivery Shops | AXORA",
    description: "Take gas cylinder orders over LINE, dispatch drivers, track customers and get refill reminders automatically.",
  },
};
