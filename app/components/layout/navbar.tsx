"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsClient } from "@/lib/ios-safari";
import { useLanguage } from "../../context/language-context";
import { LineAddButton } from "../line/line-add-button";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  { href: "/about", key: "about" as const },
  { href: "/services", key: "platform" as const },
  { href: "/services/line-oa", key: "lineAi" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const { t, locale } = useLanguage();
  // English nav labels are longer, so the inline menu needs a wider screen.
  const wideNav = locale === "en";
  const mounted = useIsClient();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/90 shadow-[0_8px_24px_-16px_rgba(28,26,23,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center gap-2 overflow-visible px-4 sm:gap-3 sm:px-6 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-x-3 lg:gap-x-4 lg:px-12">
        <div className="flex shrink-0 items-center md:justify-self-start">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-70"
          >
            <span className="font-serif text-lg font-bold tracking-[0.24em] text-foreground md:text-xl lg:text-2xl lg:tracking-[0.32em]">
              AXORA
            </span>
          </Link>
        </div>


        <ul className={`hidden items-center gap-x-3 lg:gap-x-6 2xl:gap-x-10 md:justify-self-center ${wideNav ? "xl:flex" : "md:flex"}`}>
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`whitespace-nowrap text-sm font-mono font-semibold uppercase leading-none tracking-[0.06em] lg:tracking-[0.14em] antialiased transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-light/85 hover:text-foreground"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 md:col-start-3 md:ml-0 md:gap-3 lg:gap-4">
          <div className={`hidden shrink-0 ${wideNav ? "xl:block" : "md:block"}`}>
            <LanguageSwitcher />
          </div>
          <LineAddButton
            variant="nav"
            className="inline-flex shrink-0 max-md:!px-2 max-md:!py-1.5 max-md:text-xs"
          />
          <Link
            href="/contact"
            className={`btn-primary hidden shrink-0 rounded-lg px-2 py-1.5 text-xs md:inline-flex md:max-lg:hidden! font-mono font-semibold uppercase leading-none tracking-[0.1em] sm:px-3 sm:py-2 md:px-4 md:py-2.5 md:text-sm md:tracking-[0.12em] ${wideNav ? "max-md:hidden!" : ""}`}
          >
            {t.nav.contact}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 ${wideNav ? "xl:hidden" : "md:hidden"}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`h-px w-4 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`overflow-hidden border-t border-border ${wideNav ? "xl:hidden" : "md:hidden"}`}
          >
            <ul className="space-y-0 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-mono font-semibold uppercase leading-snug tracking-[0.14em] text-muted-light/90 antialiased transition-colors hover:text-foreground"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
              <li className="py-3">
                <LanguageSwitcher />
              </li>
              <li className="pt-2">
                <LineAddButton variant="primary" className="w-full" />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
