"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
  { href: "/line-ai", key: "lineAi" as const },
  { href: "/projects", key: "projects" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
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
          ? "border-b border-border bg-charcoal/70 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center gap-2 overflow-visible px-4 sm:gap-3 sm:px-6 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-3 lg:gap-x-4 lg:px-12">
        <div className="flex shrink-0 items-center md:justify-self-start">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-70"
          >
            <Image
              src="/axora-logo-transparent.png"
              alt="AXORA"
              width={140}
              height={50}
              className="block h-[38px] w-auto shrink-0 object-contain md:h-[50px]"
              priority
            />
          </Link>
        </div>

        <div className="shrink-0 md:hidden">
          <LanguageSwitcher />
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

        <div className="ml-auto flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 md:col-start-3 md:ml-0 md:gap-3 lg:gap-4">
          <div className="hidden shrink-0 md:block">
            <LanguageSwitcher />
          </div>
          <LineAddButton
            variant="nav"
            className="inline-flex shrink-0 max-md:!px-2 max-md:!py-1.5 max-md:text-xs"
          />
          <Link
            href="/contact"
            className="btn-primary inline-flex shrink-0 rounded-lg px-2 py-1.5 text-xs font-mono font-semibold uppercase leading-none tracking-[0.1em] sm:px-3 sm:py-2 md:px-4 md:py-2.5 md:text-sm md:tracking-[0.12em]"
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
