"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/language-context";

/** Shown on the (Chinese-only) blog when the interface is in English. */
export function ChineseOnlyNotice() {
  const { locale } = useLanguage();
  if (locale !== "en") return null;
  return (
    <div className="mx-auto mt-24 max-w-[1100px] px-6 lg:px-12">
      <p className="rounded-2xl border border-border bg-surface px-5 py-4 text-body-sm text-muted-light">
        Our articles are currently available in Chinese only.{" "}
        <Link href="/en" className="font-semibold text-foreground underline underline-offset-4">
          Go to the English homepage →
        </Link>
      </p>
    </div>
  );
}
