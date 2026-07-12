"use client";

import { useIsIosSafari } from "@/lib/ios-safari";
import { useLanguage } from "../context/language-context";
import { ContactEmailActions, ContactLineActions } from "../components/contact/contact-info-actions";
import { ContactForm } from "../components/contact/contact-form";
import { LineQrSection } from "../components/line/line-qr-section";
import { Reveal } from "../components/ui/reveal";

export default function ContactPage() {
  const { t } = useLanguage();
  const iosSafariGpuSafe = useIsIosSafari();

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative mx-auto max-w-[1400px] px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
        <Reveal disableScrollAnimation={iosSafariGpuSafe}>
          <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
            {t.contact.label}
          </p>
          <h1 className="text-display page-title mt-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h1>
          <p className="text-editorial mt-8 max-w-md text-muted-light">
            {t.contact.subtitle}
          </p>

          <ul className="mt-16 space-y-6 text-label font-mono uppercase tracking-[0.15em]">
            <li>
              <ContactEmailActions />
            </li>
            <li>
              <ContactLineActions />
            </li>
            <li>
              <span className="text-muted">Website</span>
              <a
                href="https://www.axora.tw"
                className="mt-1 block text-foreground transition-opacity hover:opacity-60"
              >
                {t.contact.info.website}
              </a>
            </li>
            <li>
              <span className="text-muted">Location</span>
              <span className="mt-1 block text-foreground">
                {t.contact.info.location}
              </span>
            </li>
            <li>
              <span className="text-muted">Hours</span>
              <span className="mt-1 block text-foreground">
                {t.contact.info.hours}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15} disableScrollAnimation={iosSafariGpuSafe}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="section-elevated border-t border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <LineQrSection disableScrollAnimation={iosSafariGpuSafe} />
        </div>
      </section>
    </div>
  );
}
