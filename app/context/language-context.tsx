"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale, type TranslationKeys } from "../translations";
import { hasEnglish, isEnglishPath as isEnPath, localizeHref } from "../i18n-routes";
import { useRouter } from "next/navigation";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEnglishPath = isEnPath(pathname);
  // Chinese pages that also have an English URL (/, /contact) are always Chinese.
  const isPairedZhPath = hasEnglish(pathname);
  const [locale, setLocale] = useState<Locale>(isEnglishPath ? "en" : "zh");

  // The URL decides the language on pages that exist in both languages
  // (also after browser back/forward). Other pages keep the manual toggle.
  useEffect(() => {
    if (isEnglishPath) setLocale("en");
    else if (isPairedZhPath) setLocale("zh");
  }, [isEnglishPath, isPairedZhPath, pathname]);

  // While browsing in English, internal links to Chinese pages go to their
  // English twins instead (e.g. /about → /en/about).
  const router = useRouter();
  useEffect(() => {
    if (locale !== "en") return;
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;
      const next = localizeHref(href, "en");
      if (next === href) return;
      e.preventDefault();
      router.push(next);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [locale, router]);

  const t = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useLocalized<T extends { zh: string; en: string }>(text: T) {
  const { locale } = useLanguage();
  return text[locale];
}

/** Pick the Chinese or English value for the current locale. */
export function usePick() {
  const { locale } = useLanguage();
  return function pick<T>(zh: T, en: T): T {
    return locale === "en" ? en : zh;
  };
}
