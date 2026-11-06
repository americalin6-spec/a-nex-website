import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";
import ContactPage from "../../contact/page";

const title = "Contact AXORA | Get a Free Quote for Your Website or App";
const description =
  "Tell AXORA about your website, web app, mobile app or AI automation project. We reply in writing with a scope, timeline and fixed quote. Free, no obligation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/contact",
    languages: { "zh-Hant": "/contact", en: "/en/contact", "x-default": "/contact" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en/contact",
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
};

export default function EnglishContactPage() {
  return <ContactPage />;
}
