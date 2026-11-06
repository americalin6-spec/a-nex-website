import type { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";
import { JsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/projects/project-card";
import { SectionHeader } from "../components/ui/section-header";
import { Reveal } from "../components/ui/reveal";

const title = "AXORA | Custom Websites, Web Apps & AI Automation — Built in Taiwan";
const description =
  "AXORA is a Taiwan-based studio building custom websites, web apps, mobile apps, ordering and booking systems, and AI automation for businesses worldwide. Senior-quality work at Taiwan rates, with clear written communication across time zones.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/en",
    languages: { "zh-Hant": "/", en: "/en", "x-default": "/" },
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
    title: "Business websites",
    desc: "Fast, modern websites that look premium, rank on Google and turn visitors into enquiries. Multilingual on request.",
  },
  {
    title: "Web apps & SaaS",
    desc: "Customer portals, dashboards, booking platforms and subscription products — designed, built and hosted for you.",
  },
  {
    title: "Mobile apps",
    desc: "iOS and Android apps for customers or internal teams, connected to the same back office as your website.",
  },
  {
    title: "Ordering & booking systems",
    desc: "Online ordering, appointment booking and delivery management for restaurants, salons, clinics and local services.",
  },
  {
    title: "AI automation",
    desc: "AI that reads customer messages, answers common questions, turns free-text requests into structured orders and updates your CRM.",
  },
  {
    title: "Chat app integrations",
    desc: "Connect your business to the messaging apps your customers already use, with automatic replies, notifications and lead capture.",
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
      "It depends on the scope. Send us a short description and we will reply with a fixed quote and timeline before any work starts. Asking for a quote is free.",
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
        <section className="hero-glow border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
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
                <Link href="/en/contact" className="btn-primary px-7 py-3">
                  Get a free quote
                </Link>
                <Link href="#work" className="btn-glass px-7 py-3">
                  See our work
                </Link>
              </div>
            </Reveal>
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

        {/* Services */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <SectionHeader label="Services" title="What we build" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <div key={s.title} className="glass-card h-full p-6">
                  <span className="font-serif text-sm tracking-[0.2em] text-accent-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-body-sm text-muted-light">{s.desc}</p>
                </div>
              ))}
            </div>
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
              <div className="mt-8 flex justify-center">
                <Link href="/en/contact" className="btn-primary px-8 py-3.5">
                  Get a free quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
