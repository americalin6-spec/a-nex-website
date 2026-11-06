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

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEnglishPath = pathname === "/en" || pathname?.startsWith("/en/");
  const [locale, setLocale] = useState<Locale>(isEnglishPath ? "en" : "zh");

  // English URLs (/en, /en/...) always show the English interface.
  useEffect(() => {
    if (isEnglishPath) setLocale("en");
  }, [isEnglishPath]);

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
