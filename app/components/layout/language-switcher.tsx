"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "../../context/language-context";
import type { Locale } from "../../translations";

/** Pages that have a dedicated English URL. */
const EN_ROUTES: Record<string, string> = {
  "/": "/en",
  "/contact": "/en/contact",
};
const ZH_ROUTES: Record<string, string> = Object.fromEntries(
  Object.entries(EN_ROUTES).map(([zh, en]) => [en, zh]),
);

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  function choose(next: Locale) {
    setLocale(next);
    const target = next === "en" ? EN_ROUTES[pathname] : ZH_ROUTES[pathname];
    if (target) router.push(target);
  }

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
          onClick={() => choose(option.id)}
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
