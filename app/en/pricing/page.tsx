import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";
import { JsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { SectionHeader } from "@/app/components/ui/section-header";
import { Reveal } from "@/app/components/ui/reveal";
import { WhatsAppButton } from "@/app/components/contact/whatsapp-button";

const title = "Pricing | Websites & Booking Systems from USD 690 | AXORA";
const description =
  "Clear, fixed prices for business websites, online booking systems and custom software. Websites from USD 690, booking websites from USD 1,490, or start for USD 199 with a monthly plan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/en/pricing" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en/pricing",
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE] },
};

type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  bestFor: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter Website",
    tagline: "A premium website that brings in enquiries",
    price: "USD 690",
    priceNote: "one-time",
    features: [
      "Up to 5 pages, designed for mobile and desktop",
      "WhatsApp, call and map buttons",
      "Contact form sent straight to your inbox",
      "Basic Google SEO setup",
      "Ready in 7–10 days",
    ],
    bestFor: "Cafés, studios, boutiques and new businesses",
  },
  {
    name: "Booking Website",
    tagline: "Let customers book themselves, 24/7",
    price: "USD 1,490",
    priceNote: "one-time",
    features: [
      "Everything in Starter",
      "Online booking with real-time available slots",
      "Automatic confirmations and reminders",
      "Multiple staff, rooms or services",
      "See every booking on your phone",
    ],
    bestFor: "Clinics, salons, spas, fitness and wellness studios",
    featured: true,
  },
  {
    name: "Custom System",
    tagline: "Built around the way you work",
    price: "From USD 2,900",
    priceNote: "fixed quote before we start",
    features: [
      "Online ordering, memberships or customer management",
      "AI auto-replies and workflow automation",
      "Admin dashboard and reports",
      "Integrations with the tools you already use",
    ],
    bestFor: "Restaurants, retailers and growing teams",
  },
];

const care = [
  { name: "Care Basic", price: "USD 49 / month", desc: "Hosting, security updates, SSL and daily backups." },
  {
    name: "Care Pro",
    price: "USD 99 / month",
    desc: "Everything in Basic, plus small content changes every month and a simple visitor report.",
  },
];

const faqs = [
  {
    question: "Are there any hidden costs?",
    answer:
      "No. You get a fixed quote in writing before any work starts. The only extras are your own domain name (usually about USD 15 per year) and any third-party services you choose to use.",
  },
  {
    question: "How does the USD 199 start plan work?",
    answer:
      "You pay USD 199 to get started, then USD 149 per month for 12 months. Hosting, maintenance and small updates are included during the plan, so you never get a large bill up front.",
  },
  {
    question: "Can I see something before I pay?",
    answer:
      "Yes. We are happy to make a free sample homepage for your business first. You only decide once you have seen it.",
  },
  {
    question: "Who owns the website?",
    answer:
      "You do. Your domain, content and data belong to your business, and we hand over access when the project is delivered.",
  },
  {
    question: "Do we need to have calls?",
    answer:
      "No. Everything runs by email and WhatsApp messages, with written updates and preview links you can click through.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept international bank transfers and PayPal. For one-time projects, payment is usually split: 50% to start and 50% at launch.",
  },
];

function Check() {
  return <span className="mt-0.5 shrink-0 text-accent-blue">✓</span>;
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <div className="pt-20">
        {/* Hero */}
        <section className="hero-glow border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
            <Reveal>
              <p className="text-label uppercase text-accent-blue">Pricing</p>
              <h1 className="text-display page-title mx-auto mt-4 max-w-3xl">
                Simple, fair prices. No surprises.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-body text-muted-light">
                Premium websites and booking systems for a fraction of typical agency prices.
                Fixed quotes in writing, and a free sample homepage before you decide.
              </p>
              <p className="mx-auto mt-6 inline-flex rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-2 text-body-sm font-semibold text-foreground">
                🎁 Launch offer for our first 10 clients: free sample homepage + first month of care free
              </p>
            </Reveal>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
              {plans.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.06} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                      plan.featured
                        ? "border-accent-blue bg-surface shadow-[0_30px_60px_-30px_rgba(31,77,58,0.45)]"
                        : "glass-card border-border"
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute -top-3 left-7 rounded-full bg-accent-blue px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        Most popular
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
                    <p className="mt-1 text-body-sm text-muted-light">{plan.tagline}</p>
                    <p className="mt-6 font-serif text-4xl font-bold text-foreground">{plan.price}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">{plan.priceNote}</p>
                    <ul className="mt-6 flex-1 space-y-2.5 text-body-sm text-muted-light">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <Check />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-xs text-muted">
                      <span className="font-semibold text-foreground">Best for: </span>
                      {plan.bestFor}
                    </p>
                    <Link
                      href="/en/contact"
                      className={`mt-6 px-6 py-3 text-center ${plan.featured ? "btn-primary" : "btn-glass"}`}
                    >
                      Get a free sample
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly start plan */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
            <div className="glass-card grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-12">
              <div>
                <p className="text-label uppercase text-accent-blue">Prefer a small monthly fee?</p>
                <h2 className="section-title mt-3">Start for USD 199</h2>
                <p className="mt-4 text-body text-muted-light">
                  Get a Booking Website without a large upfront cost. Pay USD 199 to start, then
                  USD 149 per month. Hosting, maintenance and small updates are included.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <p className="font-serif text-5xl font-bold text-foreground">USD 199</p>
                <p className="mt-1 text-body-sm text-muted-light">to start</p>
                <p className="mt-4 text-2xl font-bold text-foreground">+ USD 149 / month</p>
                <p className="mt-1 text-xs text-muted">12-month plan · everything included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Care plans */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
            <SectionHeader label="After launch" title="Optional care plans" align="center" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {care.map((c) => (
                <div key={c.name} className="glass-card p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                    <p className="font-semibold text-foreground">{c.price}</p>
                  </div>
                  <p className="mt-2 text-body-sm text-muted-light">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <SectionHeader label="FAQ" title="Questions about pricing" align="center" />
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.question} className="glass-card group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body font-medium text-foreground">
                    <h3 className="text-body font-medium">{f.question}</h3>
                    <span className="text-accent-blue transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-body-sm leading-relaxed text-muted-light">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <div className="glass-card px-8 py-14 text-center lg:px-16">
              <h2 className="section-title">See it before you decide</h2>
              <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">
                Tell us about your business and we will make a free sample homepage for you. No
                obligation, no calls needed.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/en/contact" className="btn-primary px-8 py-3.5">
                  Get a free sample
                </Link>
                <WhatsAppButton className="px-8 py-3.5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
