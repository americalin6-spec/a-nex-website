"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/language-context";
import { LineAddButton } from "../line/line-add-button";
import { LanguageSwitcher } from "./language-switcher";

const navItems = [
  { href: "/about", key: "about" as const },
  { href: "/services", key: "platform" as const },
  { href: "/line-ai", key: "lineAi" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mounted]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href.startsWith("/#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-border bg-charcoal/70 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid h-16 max-w-[1400px] grid-cols-[1fr_auto] items-center gap-x-3 px-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-4 lg:px-12">
        <div className="flex min-w-0 items-center justify-self-start">
          <Link
            href="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-70"
          >
            <Image
              src="/axora-logo-transparent.png"
              alt="AXORA"
              width={50}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
          </Link>
        </div>

        <ul className="hidden items-center gap-x-9 lg:gap-x-10 md:flex md:justify-self-center">
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`whitespace-nowrap text-sm font-mono font-semibold uppercase leading-none tracking-[0.14em] antialiased transition-colors duration-300 ${
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

        <div className="flex min-w-0 items-center justify-end justify-self-end gap-3 sm:gap-4 md:col-start-3">
          <LanguageSwitcher />
          <LineAddButton variant="nav" className="hidden sm:inline-flex" />
          <Link
            href="/contact"
            className="btn-primary hidden rounded-lg px-4 py-2.5 text-sm font-mono font-semibold uppercase leading-none tracking-[0.12em] md:inline-block"
          >
            {t.nav.contact}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
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
            className="overflow-hidden border-t border-border md:hidden"
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
