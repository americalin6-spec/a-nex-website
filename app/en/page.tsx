import type { Metadata } from "next";
import { hreflangLanguages } from "@/app/i18n-routes";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";
import { JsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/projects/project-card";
import { SectionHeader } from "../components/ui/section-header";
import { Reveal } from "../components/ui/reveal";
import { HeroPhone3D } from "../components/home/hero-phone-3d";
import { WhatsAppButton } from "../components/contact/whatsapp-button";
import { FounderSection } from "../components/about/founder-section";

const title = "AXORA | Custom Websites, Web Apps & AI Automation — Built in Taiwan";
const description =
  "AXORA is a Taiwan-based studio building custom websites, web apps, mobile apps, ordering and booking systems, and AI automation for businesses worldwide. Senior-quality work at Taiwan rates, with clear written communication across time zones.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: hreflangLanguages("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/en",
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

/** English display names for projects whose main name is Chinese. */
const EN_PROJECT_NAMES: Record<string, string> = {
  "line-ai-reply": "AI Auto-Reply for LINE",
};

const reasons = [
  {
    title: "Taiwan rates, not Silicon Valley rates",
    desc: "You get modern, production-grade engineering for a budget that is usually well below what a US or European agency would quote for the same scope.",
  },
  {
    title: "Clear written communication",
    desc: "Everything runs through email and messages: written specs, progress updates and demo links. No need to schedule calls across time zones.",
  },
  {
    title: "You see it before you pay for the rest",
    desc: "We build a working preview first. You review it, request changes, and we continue only when you are happy with the direction.",
  },
  {
    title: "Work while you sleep",
    desc: "Taiwan is ahead of the US and Europe, so feedback you send at the end of your day is often worked on by the time you wake up.",
  },
];

const services = [
  {
    title: "Website + online booking",
    desc: "A premium website where customers book a time themselves, with automatic confirmations and reminders. No more phone scheduling or no-shows.",
    href: "/en/services/booking-system",
  },
  {
    title: "AI auto-reply & ordering",
    desc: "AI understands how customers really write in chat, answers common questions and turns messages into orders — even after hours.",
    href: "/en/services/line-oa",
  },
  {
    title: "AI email outreach",
    desc: "AI finds businesses that fit your offer, writes a personal email to each one, follows up automatically and tells you who replied.",
    href: "/en/services/ai-outreach",
  },
];

const steps = [
  ["Tell us what you need", "Send a short description by email or the form — what your business does and what you want to improve. No formal spec required."],
  ["Get a clear proposal", "We reply in writing with the scope, timeline and a fixed quote, so you know exactly what you are paying for."],
  ["Review a working preview", "You get a live link to click through. Comment on anything; we adjust until it fits."],
  ["Launch & ongoing support", "We deploy, hand over everything you need, and stay available for updates and maintenance."],
] as const;

const faqs = [
  {
    question: "Where is AXORA based?",
    answer:
      "We are based in Taipei, Taiwan, and work with clients remotely. All communication is in writing, so time zones are not a problem.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Business websites start from USD 690 and booking websites from USD 1,490, or you can start for USD 199 with a small monthly plan. See our pricing page for details. Every project gets a fixed quote in writing before any work starts.",
  },
  {
    question: "Do we need to have calls?",
    answer:
      "No. Most projects run entirely by email and messages with written updates and preview links. This keeps decisions documented and easy to review.",
  },
  {
    question: "Who owns the code and the website?",
    answer:
      "You do. Your domain, content and data belong to your business, and we hand over access when the project is delivered.",
  },
  {
    question: "Can you maintain the site after launch?",
    answer:
      "Yes. We can host, monitor and update your website or system after launch, or hand it over to your own team.",
  },
];

export default function EnglishHomePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <div className="pt-20">
        {/* Hero */}
        <section className="hero-glow overflow-hidden border-b border-border py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:px-12">
            <Reveal>
              <p className="text-label uppercase text-accent-blue">
                Websites · Web apps · AI automation · Built in Taiwan
              </p>
              <h1 className="text-display page-title mt-4">
                Premium software for your business, without the agency price tag
              </h1>
              <p className="mt-6 max-w-2xl text-body text-muted-light">
                AXORA is a Taiwan-based studio that designs and builds custom websites, web apps,
                mobile apps and AI automation for businesses around the world. You get a modern,
                reliable product, clear written communication, and pricing that makes sense.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/en/contact" className="btn-primary px-6 py-3">
                  Get a free quote
                </Link>
                <WhatsAppButton className="px-6 py-3" label="WhatsApp" always />
                <Link href="/en/pricing" className="btn-glass px-6 py-3">
                  See pricing
                </Link>
              </div>
            </Reveal>
            <div className="mt-12 flex items-center justify-center lg:mt-0">
              <HeroPhone3D locale="en" />
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="Why AXORA" title="Built for clients who are far away" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title} className="glass-card h-full p-6">
                  <h2 className="text-lg font-bold text-foreground">{r.title}</h2>
                  <p className="mt-2 text-body-sm text-muted-light">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FounderSection />

        {/* Services */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="What we do best" title="Three things, done really well" />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {services.map((s, i) => (
                <Link key={s.title} href={s.href} className="glass-card block h-full p-6 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="font-serif text-sm tracking-[0.2em] text-accent-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-body-sm text-muted-light">{s.desc}</p>
                  <p className="mt-4 text-label text-accent-blue">Learn more →</p>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-body-sm text-muted-light">
              We also build online ordering, memberships, mobile apps and custom systems.{" "}
              <Link href="/en/services" className="font-semibold text-accent-blue underline underline-offset-4">
                See all services →
              </Link>
            </p>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section-elevated scroll-mt-24 py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <SectionHeader label="Selected work" title="Projects we have delivered" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={{ ...project, name: EN_PROJECT_NAMES[project.id] ?? project.name }}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="How it works" title="Four simple steps" />
            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([t, d], i) => (
                <li key={t} className="glass-card p-6">
                  <span className="font-serif text-4xl text-accent-blue">{i + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-body-sm text-muted-light">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-elevated py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <SectionHeader label="FAQ" title="Frequently asked questions" align="center" />
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
              <h2 className="section-title">Tell us about your project</h2>
              <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">
                Send a few lines about your business and what you want to build. We will reply in
                writing with ideas, a timeline and a fixed quote. No obligation.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/en/contact" className="btn-primary px-8 py-3.5">
                  Get a free quote
                </Link>
                <WhatsAppButton className="px-8 py-3.5" always />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
