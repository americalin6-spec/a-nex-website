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
import { EN_ROUTES, isEnglishPath as isEnPath } from "../i18n-routes";

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
  const isPairedZhPath = !!pathname && pathname in EN_ROUTES;
  const [locale, setLocale] = useState<Locale>(isEnglishPath ? "en" : "zh");

  // The URL decides the language on pages that exist in both languages
  // (also after browser back/forward). Other pages keep the manual toggle.
  useEffect(() => {
    if (isEnglishPath) setLocale("en");
    else if (isPairedZhPath) setLocale("zh");
  }, [isEnglishPath, isPairedZhPath, pathname]);

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
