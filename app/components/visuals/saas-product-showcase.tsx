"use client";

import { useLanguage } from "../../context/language-context";

const panel = "gradient-border";
const inner = "gradient-border-inner";

export function SaaSProductBento() {
  const { locale } = useLanguage();
  const zh = locale === "zh";

  const top = zh ? "營收與訂閱" : "Revenue & billing";
  const mrr = zh ? "本月 MRR" : "MRR this month";
  const growth = zh ? "較上月" : "vs last month";
  const plans = zh ? "方案" : "Plans";
  const starter = zh ? "入門" : "Starter";
  const pro = zh ? "專業" : "Pro";
  const ent = zh ? "企業" : "Enterprise";
  const api = zh ? "API 金鑰" : "API keys";
  const live = zh ? "正式環境" : "Production";
  const mask = "sk_live_················8f2a";
  const activity = zh ? "審計與活動" : "Audit & activity";
  const team = zh ? "團隊與權限" : "Team & roles";
  const webhooks = zh ? "Webhook 傳遞" : "Webhook deliveries";
  const ok = zh ? "成功" : "OK";
  const retry = zh ? "重試" : "Retry";

  const activities = zh
    ? [
        { t: "管理員 已變更「銷售」角色權限", m: "2 分鐘前" },
        { t: "Stripe 訂閱同步完成", m: "14 分鐘前" },
        { t: "LINE Webhook 簽章驗證通過", m: "1 小時前" },
      ]
    : [
        { t: "Admin updated Sales role permissions", m: "2m ago" },
        { t: "Stripe subscription sync completed", m: "14m ago" },
        { t: "LINE webhook signature verified", m: "1h ago" },
      ];

  const hooks = zh
    ? [
        { id: "evt_8a2…", code: 200, ms: "124ms" },
        { id: "evt_3c1…", code: 200, ms: "98ms" },
        { id: "evt_9f0…", code: 502, ms: "—" },
      ]
    : [
        { id: "evt_8a2…", code: 200, ms: "124ms" },
        { id: "evt_3c1…", code: 200, ms: "98ms" },
        { id: "evt_9f0…", code: 502, ms: "—" },
      ];

  const roles = zh
    ? [
        { n: "陳", r: "Owner", c: "dash-card-cyan" },
        { n: "林", r: "Admin", c: "dash-card-blue" },
        { n: "王", r: "Sales", c: "dash-card-purple" },
      ]
    : [
        { n: "A", r: "Owner", c: "dash-card-cyan" },
        { n: "B", r: "Admin", c: "dash-card-blue" },
        { n: "C", r: "Sales", c: "dash-card-purple" },
      ];

  const bars = [38, 52, 44, 68, 55, 78, 62, 88, 74, 92, 85, 100];

  return (
    <div className={`${panel} rounded-2xl`}>
      <div className={`${inner} rounded-2xl p-4 sm:p-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 font-mono text-xs text-muted">
              {zh ? "客戶租戶 · Production" : "Client tenant · Production"}
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-background/40 px-3 py-1.5">
            <span className="text-caption text-muted">
              {zh ? "工作區" : "Workspace"}
            </span>
            <span className="rounded bg-accent-blue/15 px-2 py-0.5 font-mono text-xs text-accent-blue">
              acme-prod
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-12">
          <div className="ui-panel-inner space-y-4 p-4 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
                  {top}
                </p>
                <p className="stat-value-gradient mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                  NT$ 842K
                </p>
                <p className="mt-1 text-caption text-emerald-400/90">
                  +12.4% {growth}
                </p>
              </div>
              <div className="text-right">
                <p className="text-caption text-muted">{mrr}</p>
                <p className="mt-1 text-xl font-semibold text-foreground">
                  NT$ 286K
                </p>
              </div>
            </div>
            <div className="flex h-36 items-end gap-1.5 sm:h-40">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="glow-bar flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      "linear-gradient(180deg, rgba(34,211,238,0.55) 0%, #6366f1 85%)",
                  }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: zh ? "活躍訂閱" : "Active subs", v: "1,248" },
                { l: zh ? "API 請求" : "API calls", v: "2.4M" },
                { l: zh ? "錯誤率" : "Error rate", v: "0.02%" },
              ].map((x) => (
                <div
                  key={x.l}
                  className="rounded-lg border border-border/60 bg-background/40 px-2 py-2 text-center sm:px-3"
                >
                  <p className="text-[10px] uppercase tracking-wider text-muted">
                    {x.l}
                  </p>
                  <p className="mt-0.5 font-mono text-sm font-medium text-foreground sm:text-base">
                    {x.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5">
            <div className="ui-panel-inner p-4">
              <p className="text-label font-mono uppercase tracking-wider text-accent-purple">
                {plans}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-border/60 p-2 text-center">
                  <p className="text-[10px] text-muted">{starter}</p>
                  <p className="mt-1 font-mono text-sm text-foreground">$49</p>
                </div>
                <div className="rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 p-2 text-center ring-1 ring-accent-cyan/30">
                  <p className="text-[10px] text-accent-cyan">{pro}</p>
                  <p className="mt-1 font-mono text-sm font-semibold text-foreground">
                    $199
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 p-2 text-center">
                  <p className="text-[10px] text-muted">{ent}</p>
                  <p className="mt-1 font-mono text-sm text-foreground">Custom</p>
                </div>
              </div>
            </div>
            <div className="ui-panel-inner flex flex-1 flex-col justify-center p-4">
              <div className="flex items-center justify-between">
                <p className="text-label font-mono uppercase tracking-wider text-accent-blue">
                  {api}
                </p>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                  {live}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2 font-mono text-xs text-muted-light">
                <span className="truncate">{mask}</span>
                <span className="ml-auto shrink-0 rounded bg-surface-elevated px-2 py-0.5 text-[10px] text-muted">
                  {zh ? "複製" : "Copy"}
                </span>
              </div>
            </div>
          </div>

          <div className="ui-panel-inner p-4 lg:col-span-4">
            <p className="text-label font-mono uppercase tracking-wider text-accent-violet">
              {activity}
            </p>
            <ul className="mt-3 space-y-2.5">
              {activities.map((a) => (
                <li
                  key={a.t}
                  className="flex gap-2 border-b border-border/40 pb-2 last:border-0 last:pb-0"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet/80" />
                  <div className="min-w-0 flex-1">
                    <p className="text-caption text-foreground/90">{a.t}</p>
                    <p className="text-[10px] text-muted">{a.m}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ui-panel-inner p-4 lg:col-span-4">
            <p className="text-label font-mono uppercase tracking-wider text-accent-blue">
              {team}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.map((u) => (
                <div
                  key={u.r}
                  className={`dash-card ${u.c} flex items-center gap-2 !p-2.5`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 font-mono text-xs text-foreground">
                    {u.n}
                  </span>
                  <span className="text-caption text-muted-light">{u.r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ui-panel-inner p-4 lg:col-span-4">
            <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
              {webhooks}
            </p>
            <ul className="mt-3 space-y-2">
              {hooks.map((h) => (
                <li
                  key={h.id}
                  className="flex items-center justify-between rounded-md border border-border/50 bg-background/40 px-2.5 py-2 font-mono text-[11px]"
                >
                  <span className="text-muted">{h.id}</span>
                  <span className="flex items-center gap-2">
                    <span
                      className={
                        h.code === 200
                          ? "text-emerald-400/90"
                          : "text-rose-400/90"
                      }
                    >
                      {h.code}
                    </span>
                    <span className="text-muted">{h.ms}</span>
                    {h.code !== 200 && (
                      <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-[10px] text-rose-300">
                        {retry}
                      </span>
                    )}
                    {h.code === 200 && (
                      <span className="text-[10px] text-emerald-400/80">
                        {ok}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SaaSIntegrationsConsole() {
  const { locale } = useLanguage();
  const zh = locale === "zh";

  const title = zh ? "整合與閘道" : "Integrations & gateway";
  const latency = zh ? "閘道延遲 P95" : "Gateway P95";
  const queue = zh ? "背景佇列" : "Job queue";
  const running = zh ? "執行中" : "Running";
  const queued = zh ? "排隊" : "Queued";
  const done = zh ? "今日完成" : "Done today";

  const integrations = [
    { name: "Stripe", status: zh ? "已連線" : "Connected", dot: "bg-emerald-400" },
    { name: "LINE OA", status: zh ? "Webhook 正常" : "Webhook OK", dot: "bg-emerald-400" },
    { name: "OpenAI", status: zh ? "限流保護" : "Rate limited", dot: "bg-amber-400" },
    { name: "PostgreSQL", status: zh ? "複本同步" : "Replica sync", dot: "bg-emerald-400" },
  ];

  const spark = [42, 38, 45, 41, 48, 44, 39, 36, 33, 35, 32, 30];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="glass-card rounded-xl p-5 lg:col-span-2">
        <p className="text-label font-mono uppercase tracking-wider text-accent-blue">
          {title}
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="flex items-center justify-between rounded-lg border border-border/70 bg-background/35 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${int.dot}`} />
                <div>
                  <p className="font-mono text-sm text-foreground">{int.name}</p>
                  <p className="text-[11px] text-muted">{int.status}</p>
                </div>
              </div>
              <span className="rounded border border-border/60 px-2 py-1 font-mono text-[10px] text-muted">
                {zh ? "設定" : "Config"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="gradient-border flex-1 rounded-xl">
          <div className="gradient-border-inner flex h-full flex-col p-4">
            <p className="text-caption text-muted">{latency}</p>
            <p className="stat-value-gradient mt-1 text-2xl font-semibold">142ms</p>
            <div className="mt-4 flex flex-1 items-end gap-0.5">
              {spark.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent-blue/40 to-accent-cyan/60"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="ui-panel-inner p-4">
          <p className="text-label font-mono uppercase tracking-wider text-muted">
            {queue}
          </p>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-caption">
              <span className="text-muted">{running}</span>
              <span className="font-mono text-accent-cyan">3</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-background/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                style={{ width: "38%" }}
              />
            </div>
            <div className="flex justify-between text-caption">
              <span className="text-muted">{queued}</span>
              <span className="font-mono text-foreground">12</span>
            </div>
            <div className="flex justify-between text-caption">
              <span className="text-muted">{done}</span>
              <span className="font-mono text-emerald-400/90">4,821</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
