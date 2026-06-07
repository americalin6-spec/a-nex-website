"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "../../context/language-context";

export function LineIdForm() {
  const { t } = useLanguage();
  const [lineId, setLineId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!lineId.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/line/reference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineId: lineId.trim() }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 lg:p-8">
      <label className="block">
        <span className="text-label font-mono uppercase tracking-wider text-muted">
          {t.lineAi.form.label}
        </span>
        <input
          type="text"
          value={lineId}
          onChange={(e) => setLineId(e.target.value)}
          placeholder={t.lineAi.form.placeholder}
          className="mt-2 w-full rounded-lg border border-border bg-surface/50 px-4 py-3 text-base text-foreground outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/30"
        />
      </label>
      <p className="mt-3 text-caption leading-relaxed text-muted-light">
        {t.lineAi.form.hint}
      </p>
      <button
        type="submit"
        disabled={status === "loading" || !lineId.trim()}
        className="btn-glass mt-6 rounded-lg px-6 py-3 text-label font-mono uppercase tracking-wider disabled:opacity-50"
      >
        {t.lineAi.form.submit}
      </button>
      {status === "done" && (
        <p className="mt-4 text-caption text-emerald-400/90">
          {t.lineAi.form.success}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-caption text-red-400/90">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
