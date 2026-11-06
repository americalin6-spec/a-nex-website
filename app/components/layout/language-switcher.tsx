"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../context/language-context";
import { EN_ROUTES, ZH_ROUTES } from "../../i18n-routes";
import type { Locale } from "../../translations";

const OPTIONS = [
  { id: "zh" as Locale, label: "中文" },
  { id: "en" as Locale, label: "EN" },
] as const;

/**
 * Capsule language toggle. Pages with a dedicated English URL switch via a
 * real link (/ ↔ /en, /contact ↔ /en/contact); other pages keep the
 * in-page language toggle.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const pathname = usePathname() ?? "/";
  const activeIndex = locale === "en" ? 1 : 0;

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative inline-grid shrink-0 grid-cols-2 whitespace-nowrap rounded-full border border-[#dedad3] bg-[#ecebe8] p-[2px]"
    >
      {/* Sliding white thumb */}
      <span
        aria-hidden
        className="absolute bottom-[2px] left-[2px] top-[2px] w-[calc(50%-2px)] rounded-full bg-white shadow-[0_1px_3px_rgba(28,26,23,0.14)] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {OPTIONS.map((option) => {
        const active = locale === option.id;
        const className = `relative z-10 flex min-w-[2.75rem] items-center justify-center whitespace-nowrap rounded-full px-2 py-1 text-sm font-semibold leading-5 tracking-wide transition-colors duration-300 ${
          active ? "text-foreground" : "text-[#8f8a82] hover:text-foreground"
        }`;
        const target =
          option.id === "en"
            ? EN_ROUTES[pathname] ?? (ZH_ROUTES[pathname] ? pathname : undefined)
            : ZH_ROUTES[pathname] ?? (EN_ROUTES[pathname] ? pathname : undefined);

        if (target) {
          return (
            <Link
              key={option.id}
              href={target}
              hrefLang={option.id === "en" ? "en" : "zh-TW"}
              aria-current={active ? "true" : undefined}
              onClick={() => setLocale(option.id)}
              className={className}
            >
              {option.label}
            </Link>
          );
        }

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setLocale(option.id)}
            aria-pressed={active}
            className={className}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
