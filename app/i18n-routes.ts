/**
 * Chinese ↔ English URL mapping.
 * Every Chinese page /x has an English twin at /en/x, except the blog
 * (articles are Chinese-only for now).
 */

const NO_ENGLISH = [/^\/blog(\/|$)/, /^\/api(\/|$)/, /^\/en(\/|$)/];

export function isEnglishPath(pathname: string | null | undefined) {
  return pathname === "/en" || !!pathname?.startsWith("/en/");
}

/** Does this Chinese path have an English version? */
export function hasEnglish(zhPath: string | null | undefined): zhPath is string {
  return !!zhPath && zhPath.startsWith("/") && !NO_ENGLISH.some((r) => r.test(zhPath));
}

/** /about → /en/about, / → /en. Returns undefined when there is no English page. */
export function toEnPath(zhPath: string): string | undefined {
  if (isEnglishPath(zhPath)) return zhPath;
  const [path, rest = ""] = splitSuffix(zhPath);
  if (!hasEnglish(path)) return undefined;
  return (path === "/" ? "/en" : `/en${path}`) + rest;
}

/** /en/about → /about, /en → /. */
export function toZhPath(enPath: string): string | undefined {
  const [path, rest = ""] = splitSuffix(enPath);
  if (!isEnglishPath(path)) return undefined;
  const zh = path.slice(3);
  return (zh === "" ? "/" : zh) + rest;
}

/** Localise an internal href for the given locale (external links untouched). */
export function localizeHref(href: string, locale: "zh" | "en"): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (locale === "en") return toEnPath(href) ?? href;
  return toZhPath(href) ?? href;
}

/** hreflang alternates for a zh/en page pair (zh-TW is also x-default). */
export function hreflangLanguages(zhPath: string) {
  return { "zh-TW": zhPath, en: toEnPath(zhPath) ?? zhPath, "x-default": zhPath };
}

function splitSuffix(href: string): [string, string?] {
  const i = href.search(/[?#]/);
  return i === -1 ? [href] : [href.slice(0, i), href.slice(i)];
}
