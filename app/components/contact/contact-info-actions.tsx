"use client";

import { useState } from "react";
import {
  getContactEmail,
  getLineAddFriendUrl,
  getLineOfficialId,
} from "@/lib/line/public";
import { useLanguage } from "../../context/language-context";

type ContactInfoActionsProps = {
  variant?: "page" | "footer";
};

const copyBtnClass =
  "rounded-lg border border-border bg-surface/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-light transition-colors duration-300 hover:border-accent-blue/40 hover:text-foreground";

const addLineBtnClass =
  "rounded-lg bg-[#06C755] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-all duration-300 hover:brightness-110";

export function ContactEmailActions({ variant = "page" }: ContactInfoActionsProps) {
  const { t } = useLanguage();
  const email = getContactEmail();
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (variant === "footer") {
    return (
      <div className="space-y-2">
        <a
          href={`mailto:${email}`}
          className="block lowercase transition-colors duration-300 hover:text-foreground"
        >
          {email}
        </a>
        <button type="button" onClick={handleCopyEmail} className={copyBtnClass}>
          {copied ? t.contact.actions.copiedEmail : t.contact.actions.copyEmail}
        </button>
      </div>
    );
  }

  return (
    <div>
      <span className="text-label font-mono uppercase tracking-[0.15em] text-muted">
        Email
      </span>
      <a
        href={`mailto:${email}`}
        className="mt-1 block lowercase text-foreground transition-opacity hover:opacity-60"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopyEmail}
        className={`${copyBtnClass} mt-3`}
      >
        {copied ? t.contact.actions.copiedEmail : t.contact.actions.copyEmail}
      </button>
    </div>
  );
}

export function ContactLineActions({ variant = "page" }: ContactInfoActionsProps) {
  const { t } = useLanguage();
  const lineId = getLineOfficialId();
  const lineUrl = getLineAddFriendUrl();
  const [copied, setCopied] = useState(false);

  async function handleCopyLineId() {
    try {
      await navigator.clipboard.writeText(lineId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const lineLabel = `${t.contact.info.lineOfficialLabel}：${lineId}`;

  if (variant === "footer") {
    return (
      <div className="space-y-2">
        <p>{lineLabel}</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={handleCopyLineId} className={copyBtnClass}>
            {copied ? t.contact.actions.copiedLineId : t.contact.actions.copyLineId}
          </button>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={addLineBtnClass}
          >
            {t.contact.actions.addLine}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <span className="text-label font-mono uppercase tracking-[0.15em] text-muted">
        LINE
      </span>
      <p className="mt-1 text-foreground">{lineLabel}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={handleCopyLineId} className={copyBtnClass}>
          {copied ? t.contact.actions.copiedLineId : t.contact.actions.copyLineId}
        </button>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={addLineBtnClass}
        >
          {t.contact.actions.addLine}
        </a>
      </div>
    </div>
  );
}
