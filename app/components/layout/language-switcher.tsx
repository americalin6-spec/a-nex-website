"use client";

import { useLanguage } from "../../context/language-context";
import type { Locale } from "../../translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0 border border-border bg-background/40 p-0.5 backdrop-blur-sm">
      {(
        [
          { id: "zh" as Locale, label: "中文" },
          { id: "en" as Locale, label: "EN" },
        ] as const
      ).map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLocale(option.id)}
          className={`px-2.5 py-1 font-mono text-sm font-semibold uppercase tracking-wider transition-all duration-500 ${
            locale === option.id
              ? "bg-foreground text-background"
              : "text-muted hover:text-foreground"
          }`}
          aria-pressed={locale === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
