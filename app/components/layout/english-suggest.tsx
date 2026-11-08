"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isEnglishPath, toEnPath } from "../../i18n-routes";

const KEY = "axora-en-suggest-dismissed";

/**
 * Small prompt for visitors whose browser language is not Chinese,
 * offering the English site. Never redirects automatically.
 */
export function EnglishSuggest() {
  const pathname = usePathname() ?? "/";
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isEnglishPath(pathname) || !toEnPath(pathname)) {
      setShow(false);
      return;
    }
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(KEY) === "1";
    } catch {}
    const langs = (navigator.languages?.length ? navigator.languages : [navigator.language]).filter(Boolean);
    const prefersChinese = langs.some((l) => l.toLowerCase().startsWith("zh"));
    setShow(!dismissed && langs.length > 0 && !prefersChinese);
  }, [pathname]);

  if (!show) return null;
  const target = toEnPath(pathname) ?? "/en";

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
      <div className="flex max-w-md items-center gap-3 rounded-full border border-border bg-surface/95 py-2 pl-4 pr-2 text-sm text-foreground shadow-[0_20px_40px_-20px_rgba(28,26,23,0.45)] backdrop-blur">
        <span aria-hidden>🌐</span>
        <span className="leading-snug">Looks like you prefer English.</span>
        <Link
          href={target}
          hrefLang="en"
          onClick={dismiss}
          className="shrink-0 rounded-full bg-accent-blue px-3 py-1.5 font-semibold text-white"
        >
          English site →
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="shrink-0 rounded-full px-2 py-1 text-muted hover:text-foreground"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
