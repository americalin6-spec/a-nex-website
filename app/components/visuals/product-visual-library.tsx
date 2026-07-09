"use client";

import type { ReactNode } from "react";
import type { CaseStudyVisual } from "../../data/case-studies";
import { useLanguage } from "../../context/language-context";
import { HeroPlatform } from "./hero-platform";

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/80 bg-background/90 shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-surface-elevated/80 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
        <div className="ml-2 flex-1 rounded bg-background/80 px-2 py-0.5 font-mono text-xs text-muted">
          app.example.com
        </div>
      </div>
      {children}
    </div>
  );
}

function PhoneBezel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[1.25rem] border border-border/80 bg-charcoal p-1.5 shadow-xl">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
        <div className="h-1 w-10 rounded-full bg-border/80 mx-auto my-1.5" />
        {children}
      </div>
    </div>
  );
}

/** Layered app + browser frames behind main hero dashboard (lg+) */
export function HeroVisualCluster() {
  return null;
  return (
    <div className="relative lg:min-h-[480px]">
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute bottom-4 left-0 w-[34%] max-w-[170px] -rotate-6 opacity-90">
          <PhoneBezel>
            <div className="space-y-1.5 p-2">
              <div className="h-1.5 w-12 rounded bg-accent-blue/40" />
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex gap-1.5 rounded border border-border/40 bg-surface/50 p-1.5"
                >
                  <div className="h-6 w-6 shrink-0 rounded bg-accent-cyan/20" />
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="h-1 w-full rounded bg-border/80" />
                    <div className="h-1 w-2/3 rounded bg-border/50" />
                  </div>
                </div>
              ))}
            </div>
          </PhoneBezel>
        </div>
        <div className="absolute right-0 top-6 w-[52%] max-w-[280px] rotate-[5deg] opacity-95">
          <BrowserChrome>
            <div className="space-y-2 p-2.5">
              <div className="h-2 w-3/5 rounded bg-gradient-to-r from-accent-blue/30 to-accent-purple/30" />
              <div className="grid grid-cols-3 gap-1">
                {[40, 65, 50, 80, 45, 70].map((h, i) => (
                  <div
                    key={i}
                    className="flex items-end gap-0.5"
                    style={{ height: 48 }}
                  >
                    <div
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent-cyan/40 to-accent-blue/60"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-1">
                <div className="h-6 flex-1 rounded border border-border/50 bg-background/60" />
                <div className="h-6 flex-1 rounded border border-border/50 bg-background/60" />
              </div>
            </div>
          </BrowserChrome>
        </div>
      </div>
      <div className="relative z-10">
        <HeroPlatform />
      </div>
    </div>
  );
}

type CardKey = "website" | "app" | "crm" | "dashboard" | "automation";

export function PlatformServiceVisualCards() {
  return null;
  const { locale } = useLanguage();
  const zh = locale === "zh";

  const cards: { key: CardKey; title: string }[] = [
    { key: "website", title: zh ? "企業網站" : "Corporate site" },
    { key: "app", title: zh ? "Web / App" : "Web / App" },
    { key: "crm", title: zh ? "客戶管理" : "Customer mgmt" },
    { key: "dashboard", title: zh ? "儀表板" : "Dashboard" },
    { key: "automation", title: zh ? "自動化流程" : "Automation" },
  ];

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {cards.map(({ key, title }, i) => (
        <div key={key} className="gradient-border rounded-xl">
          <div className="gradient-border-inner p-3">
            <p className="text-xs font-mono uppercase tracking-wider text-accent-cyan">
              {title}
            </p>
            <div className="mt-2">
              {key === "website" && (
                <BrowserChrome>
                  <div className="space-y-1.5 p-2">
                    <div className="h-1.5 w-4/5 rounded bg-foreground/10" />
                    <div className="h-1 w-full rounded bg-border/60" />
                    <div className="h-1 w-3/5 rounded bg-border/40" />
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      <div className="h-10 rounded border border-border/40 bg-accent-blue/5" />
                      <div className="h-10 rounded border border-border/40 bg-accent-purple/5" />
                    </div>
                  </div>
                </BrowserChrome>
              )}
              {key === "app" && (
                <PhoneBezel>
                  <div className="p-2 space-y-1">
                    <div className="flex gap-1">
                      <div className="h-6 flex-1 rounded bg-accent-blue/15" />
                      <div className="h-6 w-6 rounded bg-accent-cyan/20" />
                    </div>
                    <div className="h-16 rounded border border-border/40 bg-surface/40" />
                  </div>
                </PhoneBezel>
              )}
              {key === "crm" && (
                <div className="overflow-hidden rounded-md border border-border/60">
                  <div className="grid grid-cols-3 gap-px bg-border/40 text-xs">
                    <div className="bg-surface-elevated/90 px-1 py-1 text-muted">
                      {zh ? "客戶" : "Acct"}
                    </div>
                    <div className="bg-surface-elevated/90 px-1 py-1 text-muted">
                      {zh ? "階段" : "Stage"}
                    </div>
                    <div className="bg-surface-elevated/90 px-1 py-1 text-muted">
                      {zh ? "跟進" : "Next"}
                    </div>
                    {[1, 2].map((r) => (
                      <div
                        key={r}
                        className="col-span-3 grid grid-cols-3 gap-px bg-border/30"
                      >
                        <div className="bg-background/80 px-1 py-1.5 text-foreground/90">
                          ···
                        </div>
                        <div className="bg-background/80 px-1 py-1.5 text-accent-cyan">
                          {zh ? "洽談" : "Deal"}
                        </div>
                        <div className="bg-background/80 px-1 py-1.5 text-muted">—</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {key === "dashboard" && (
                <div className="rounded-md border border-border/60 bg-background/50 p-2">
                  <div className="flex h-14 items-end gap-0.5">
                    {[35, 55, 42, 70, 48, 88, 62].map((h, j) => (
                      <div
                        key={j}
                        className="glow-bar flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            "linear-gradient(180deg, rgba(34,211,238,0.45) 0%, #6366f1 100%)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {key === "automation" && (
                <div className="flex items-center gap-1 rounded-md border border-border/60 bg-background/50 px-2 py-3">
                  {[zh ? "表單" : "Form", zh ? "審批" : "OK", zh ? "通知" : "Push"].map(
                    (s, j) => (
                      <div key={s} className="flex flex-1 items-center gap-0.5">
                        <div className="min-w-0 flex-1 rounded border border-accent-purple/30 bg-accent-purple/10 px-1 py-1.5 text-center text-xs text-muted-light">
                          {s}
                        </div>
                        {j < 2 && (
                          <span className="text-xs text-accent-cyan">→</span>
                        )}
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function LineWorkAiDownloadMockups() {
  return null;
  const { locale } = useLanguage();
  const zh = locale === "zh";

  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-2">
      <div className="gradient-border rounded-xl">
        <div className="gradient-border-inner p-5">
          <p className="text-label font-mono uppercase tracking-wider text-muted">
            {zh ? "登入" : "Sign in"}
          </p>
          <p className="mt-1 text-caption text-muted-light">
            {zh ? "智能分析與成交管理平台" : "Smart Analytics & Deal Management Platform"} · {zh ? "試用環境" : "Trial"}
          </p>
          <div className="mt-4 rounded-lg border border-border/60 bg-background/60 p-4">
            <div className="mx-auto max-w-[220px] space-y-3">
              <div className="h-9 rounded-md border border-border bg-background/80" />
              <div className="h-9 rounded-md border border-border bg-background/80" />
              <div className="flex items-center justify-center gap-2 rounded-md border border-border/80 bg-surface/60 py-2.5 font-mono text-xs text-muted-light">
                <span className="h-3 w-3 rounded-sm bg-foreground/80" />
                Continue with Google
              </div>
              <div className="h-8 rounded-md bg-gradient-to-r from-accent-blue to-accent-indigo opacity-90" />
            </div>
          </div>
        </div>
      </div>

      <div className="gradient-border rounded-xl">
        <div className="gradient-border-inner p-5">
          <p className="text-label font-mono uppercase tracking-wider text-muted">
            {zh ? "試用儀表板" : "Trial dashboard"}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="dash-card dash-card-cyan !p-2">
              <p className="text-sm text-muted">{zh ? "剩餘分析" : "Analyses left"}</p>
              <p className="stat-value-gradient text-lg font-semibold">30</p>
              <p className="text-sm text-muted">{zh ? "次" : "uses"}</p>
            </div>
            <div className="dash-card dash-card-purple !p-2">
              <p className="text-sm text-muted">{zh ? "訊息量" : "Messages"}</p>
              <p className="stat-value-gradient text-lg font-semibold">1.2k</p>
            </div>
          </div>
          <div className="mt-3 flex h-20 items-end gap-0.5 rounded-md border border-border/50 bg-background/40 p-2">
            {[30, 45, 38, 60, 55, 75, 68, 90, 82].map((h, i) => (
              <div
                key={i}
                className="glow-bar flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background:
                    "linear-gradient(180deg, rgba(167,139,250,0.5) 0%, #4d9fff 100%)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="gradient-border rounded-xl">
        <div className="gradient-border-inner p-5">
          <p className="text-label font-mono uppercase tracking-wider text-muted">
            {zh ? "客戶管理" : "Customer mgmt"} · {zh ? "名單" : "Leads"}
          </p>
          <div className="mt-3 overflow-hidden rounded-md border border-border/60 text-sm">
            <div className="grid grid-cols-4 border-b border-border/50 bg-surface-elevated/80 px-1.5 py-1 text-muted">
              <span>{zh ? "客戶" : "Lead"}</span>
              <span>LINE</span>
              <span>{zh ? "階段" : "Stage"}</span>
              <span>{zh ? "更新" : "Upd"}</span>
            </div>
            {(zh
              ? [
                  ["陳**", "OA", "新", "2m"],
                  ["林**", "OA", "跟進", "1h"],
                ]
              : [
                  ["Chen", "OA", "New", "2m"],
                  ["Lin", "OA", "Prog", "1h"],
                ]
            ).map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-4 border-b border-border/30 bg-background/50 px-1.5 py-1.5 last:border-0"
              >
                {row.map((c) => (
                  <span key={c} className="truncate text-muted-light">
                    {c}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="gradient-border rounded-xl">
        <div className="gradient-border-inner p-5">
          <p className="text-label font-mono uppercase tracking-wider text-muted">
            {zh ? "自動回覆" : "Auto-reply"}
          </p>
          <div className="mt-3 space-y-2 rounded-lg border border-border/50 bg-background/50 p-3">
            <div className="rounded-md bg-surface/60 px-2 py-1.5 text-sm text-muted-light">
              {zh ? "使用者：報價與導入時程？" : "User: pricing & timeline?"}
            </div>
            <div className="rounded-md border border-accent-cyan/25 bg-accent-cyan/10 px-2 py-1.5 text-sm text-foreground/90">
              {zh
                ? "系統：已記錄需求，顧問將於 24h 內回覆。"
                : "System: logged — consultant replies within 24h."}
            </div>
            <div className="flex gap-1 text-xs text-muted">
              <span className="rounded bg-accent-purple/15 px-1.5 py-0.5">
                intent: quote
              </span>
              <span className="rounded bg-accent-blue/15 px-1.5 py-0.5">
                {zh ? "客戶管理同步" : "Customer sync"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LineAiDashboardPreview() {
  return null;
  const { locale } = useLanguage();
  const zh = locale === "zh";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass-card rounded-xl p-5">
        <p className="text-label font-mono uppercase tracking-wider text-accent-blue">
          {zh ? "分析儀表板" : "Analytics dashboard"}
        </p>
        <div className="mt-4 flex h-32 items-end gap-1">
          {[25, 40, 35, 55, 48, 72, 60, 85, 78, 92, 88, 100].map((h, i) => (
            <div
              key={i}
              className="glow-bar flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  "linear-gradient(180deg, rgba(77,159,255,0.5) 0%, #6366f1 100%)",
              }}
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            { l: zh ? "回覆率" : "Reply", v: "98%" },
            { l: zh ? "潛客" : "Leads", v: "142" },
            { l: zh ? "自動化" : "Auto", v: "24" },
          ].map((x) => (
            <div
              key={x.l}
              className="rounded border border-border/50 bg-background/40 py-2"
            >
              <p className="text-sm text-muted">{x.l}</p>
              <p className="font-mono text-sm text-accent-cyan">{x.v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card rounded-xl p-5">
        <p className="text-label font-mono uppercase tracking-wider text-accent-purple">
          {zh ? "管理後台" : "Admin panel"}
        </p>
        <div className="mt-4 space-y-2">
          {[
            zh ? "租戶與方案" : "Tenants & plans",
            zh ? "Webhook 日誌" : "Webhook logs",
            zh ? "API 金鑰" : "API keys",
          ].map((row) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-md border border-border/50 bg-background/40 px-3 py-2 text-caption text-muted-light"
            >
              <span>{row}</span>
              <span className="text-accent-cyan">→</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyVisualThumb({ type }: { type: CaseStudyVisual }) {
  return null;
  return (
    <div className="relative h-36 overflow-hidden rounded-lg border border-border/60 bg-background/40">
      <div className="absolute inset-0 p-2">
        {type === "dashboard" && (
          <div className="flex h-full flex-col gap-1">
            <div className="h-1.5 w-1/3 rounded bg-accent-blue/30" />
            <div className="flex flex-1 items-end gap-0.5">
              {[40, 55, 48, 70, 60, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-cyan/40 to-accent-blue/50"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        )}
        {type === "crm-table" && (
          <div className="grid h-full grid-rows-4 gap-px bg-border/40 text-sm">
            <div className="grid grid-cols-3 bg-surface-elevated/90 px-1 py-0.5 text-muted">
              <span>A</span>
              <span>B</span>
              <span>C</span>
            </div>
            {[1, 2, 3].map((r) => (
              <div
                key={r}
                className="grid grid-cols-3 bg-background/70 px-1 py-0.5 text-muted-light"
              >
                <span>···</span>
                <span>··</span>
                <span>·</span>
              </div>
            ))}
          </div>
        )}
        {type === "workflow" && (
          <div className="flex h-full items-center justify-center gap-1 px-1">
            {["1", "2", "3", "4"].map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div className="rounded border border-accent-cyan/30 bg-accent-cyan/10 px-1.5 py-1 text-xs text-muted-light">
                  {s}
                </div>
                {i < 3 && <span className="text-accent-cyan">→</span>}
              </div>
            ))}
          </div>
        )}
        {type === "ai-flow" && (
          <div className="flex h-full flex-col justify-center gap-1.5 px-2">
            <div className="h-6 rounded border border-border/50 bg-surface/50" />
            <div className="h-6 rounded border border-accent-purple/30 bg-accent-purple/10" />
            <div className="h-6 rounded border border-border/50 bg-surface/50" />
          </div>
        )}
        {type === "kpi" && (
          <div className="grid h-full grid-cols-2 gap-1 p-1">
            <div className="rounded border border-accent-cyan/30 bg-accent-cyan/10 p-1" />
            <div className="rounded border border-accent-purple/30 bg-accent-purple/10 p-1" />
            <div className="rounded border border-accent-blue/30 bg-accent-blue/10 p-1" />
            <div className="rounded border border-accent-violet/30 bg-accent-violet/10 p-1" />
          </div>
        )}
        {type === "architecture" && (
          <div className="flex h-full flex-col justify-center gap-1 px-1">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-5 rounded border border-border/50 bg-background/60"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
