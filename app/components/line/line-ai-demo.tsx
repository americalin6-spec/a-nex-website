"use client";

import { useLanguage } from "../../context/language-context";

export function LineWorkflowDiagram() {
  const { t } = useLanguage();
  const steps = t.lineAi.workflow.steps;

  return (
    <div className="ui-panel p-6">
      <p className="text-label font-mono uppercase tracking-wider text-accent-blue">
        {t.lineAi.workflow.label}
      </p>
      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-2">
            <div className="glass-card flex min-h-[72px] flex-1 flex-col justify-center rounded-lg px-4 py-3 text-center">
              <span className="font-mono text-[10px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-caption text-foreground">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden shrink-0 text-muted lg:block">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LineChatPreview() {
  const { t } = useLanguage();
  const messages = t.lineAi.demo.chat;

  return (
    <div className="ui-panel overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border bg-[#06C755]/15 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[#06C755]" />
        <span className="text-caption font-medium text-foreground">
          {t.lineAi.demo.chatTitle}
        </span>
      </div>
      <div className="space-y-3 p-4">
        {messages.map((msg) => (
          <div
            key={msg.text}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-caption ${
                msg.from === "user"
                  ? "bg-[#06C755] text-white"
                  : "ui-panel-inner text-foreground"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LineAiReplyPreview() {
  const { t } = useLanguage();

  return (
    <div className="ui-panel p-5">
      <p className="text-label font-mono uppercase tracking-wider text-accent-purple">
        {t.lineAi.demo.aiLabel}
      </p>
      <div className="ui-panel-inner mt-4 rounded-lg border border-accent-purple/30 bg-accent-purple/5 p-4">
        <p className="text-caption text-muted">{t.lineAi.demo.aiMeta}</p>
        <p className="mt-2 text-body-sm text-foreground">
          {t.lineAi.demo.aiReply}
        </p>
      </div>
      <ul className="mt-4 space-y-1.5 text-caption text-muted">
        {t.lineAi.demo.aiBullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-accent-blue">•</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LineCrmLeadCard() {
  const { t } = useLanguage();
  const lead = t.lineAi.demo.lead;

  return (
    <div className="ui-panel p-5">
      <p className="text-label font-mono uppercase tracking-wider text-muted">
        {t.lineAi.demo.crmLabel}
      </p>
      <div className="glass-card mt-4 rounded-lg p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-foreground">{lead.name}</p>
            <p className="text-caption text-muted">{lead.source}</p>
          </div>
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-emerald-400">
            {lead.status}
          </span>
        </div>
        <p className="mt-3 text-body-sm text-muted-light">{lead.note}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-caption">
          <div className="ui-panel-inner rounded px-3 py-2">
            <span className="text-muted">{lead.interestLabel}</span>
            <p className="mt-0.5 text-foreground">{lead.interest}</p>
          </div>
          <div className="ui-panel-inner rounded px-3 py-2">
            <span className="text-muted">{lead.timeLabel}</span>
            <p className="mt-0.5 text-foreground">{lead.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
