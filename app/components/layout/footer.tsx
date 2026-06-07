"use client";

import Link from "next/link";
import {
  ContactEmailActions,
  ContactLineActions,
} from "../contact/contact-info-actions";
import { LineAddButton } from "../line/line-add-button";
import { useLanguage } from "../../context/language-context";

const footerNav = [
  { href: "/services", key: "platform" as const },
  { href: "/line-ai", key: "lineAi" as const },
  { href: "/work", key: "solutions" as const },
  { href: "/services", key: "services" as const },
  { href: "/about", key: "about" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-charcoal/50 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-label font-mono tracking-[0.35em] text-foreground">
              AXORA
            </p>
            <p className="mt-2 text-label font-mono uppercase tracking-[0.15em] text-muted">
              {t.footer.tagline}
            </p>
            <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-muted">
              {t.footer.description}
            </p>
            <div className="mt-6">
              <LineAddButton variant="outline" />
            </div>
          </div>

          <div>
            <p className="text-label font-mono uppercase tracking-[0.15em] text-muted">
              {t.footer.navigation}
            </p>
            <ul className="mt-5 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-base font-light text-muted-light transition-colors duration-300 hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label font-mono uppercase tracking-[0.15em] text-muted">
              {t.footer.contact}
            </p>
            <ul className="mt-5 space-y-4 text-base font-light text-muted-light">
              <li>
                <ContactEmailActions variant="footer" />
              </li>
              <li>
                <ContactLineActions variant="footer" />
              </li>
              <li>
                <a
                  href="https://www.axora.tw"
                  className="transition-colors duration-300 hover:text-foreground"
                >
                  {t.contact.info.website}
                </a>
              </li>
              <li>{t.contact.info.location}</li>
              <li>{t.contact.info.hours}</li>
            </ul>
          </div>
        </div>

        <div className="editorial-line mt-12" />

        <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-label font-mono text-muted">
            © {new Date().getFullYear()} AXORA. {t.footer.rights}
          </p>
          <p className="text-label font-mono text-muted/60">
            {t.footer.keywords}
          </p>
        </div>
      </div>
    </footer>
  );
}
