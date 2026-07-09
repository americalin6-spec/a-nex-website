"use client";

import { getLineAddFriendUrl, getLineQrImageUrl } from "@/lib/line/public";
import { useLanguage } from "../../context/language-context";
import { LineAddButton } from "./line-add-button";
import { Reveal } from "../ui/reveal";

export function LineQrSection({
  compact = false,
  disableScrollAnimation = false,
}: {
  compact?: boolean;
  disableScrollAnimation?: boolean;
}) {
  const { t } = useLanguage();
  const addUrl = getLineAddFriendUrl();
  const qrUrl = getLineQrImageUrl();

  return (
    <Reveal disableScrollAnimation={disableScrollAnimation}>
      <div
        className={`glass-card rounded-xl ${compact ? "p-6" : "p-8 lg:p-10"}`}
      >
        <p className="text-label font-mono uppercase tracking-[0.2em] text-[#9ef0b5]">
          {t.line.qr.label}
        </p>
        <h3 className="section-title mt-3 text-xl lg:text-2xl">
          {t.line.qr.title}
        </h3>
        <p className="mt-3 text-body text-muted-light">{t.line.qr.description}</p>

        <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="ui-panel-inner flex h-44 w-44 shrink-0 items-center justify-center rounded-xl border border-dashed border-[#06C755]/40 bg-[#06C755]/5 p-3">
            {qrUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={qrUrl}
                alt="LINE QR Code"
                className="h-full w-full object-contain"
              />
            ) : (
              <QrPlaceholder
                title={t.line.qr.placeholderTitle}
                hint={t.line.qr.placeholderHint}
              />
            )}
          </div>
          <div className="space-y-4">
            <p className="text-caption text-muted">{t.line.qr.scanHint}</p>
            <LineAddButton variant="primary" />
            <a
              href={addUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-caption text-accent-blue hover:underline"
            >
              {t.line.qr.linkLabel} →
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function QrPlaceholder({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#9ef0b5]">
        {title}
      </p>
      <p className="text-caption leading-relaxed text-muted-light">{hint}</p>
    </div>
  );
}
