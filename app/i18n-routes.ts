/** Pages that have a dedicated English URL (zh path → en path). */
export const EN_ROUTES: Record<string, string> = {
  "/": "/en",
  "/contact": "/en/contact",
};

/** Reverse map (en path → zh path). */
export const ZH_ROUTES: Record<string, string> = Object.fromEntries(
  Object.entries(EN_ROUTES).map(([zh, en]) => [en, zh]),
);

export function isEnglishPath(pathname: string | null | undefined) {
  return pathname === "/en" || !!pathname?.startsWith("/en/");
}

/** hreflang alternates for a zh/en page pair (zh-TW is also x-default). */
export function hreflangLanguages(zhPath: string) {
  const enPath = EN_ROUTES[zhPath];
  return { "zh-TW": zhPath, en: enPath, "x-default": zhPath };
}
