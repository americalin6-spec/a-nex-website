"use client";

import type { CaseStudyVisual } from "../../data/case-studies";
import { useLanguage } from "../../context/language-context";

const panel = "gradient-border";
const panelInner = "gradient-border-inner p-4";
const inner = "ui-panel-inner";

const KPI_ACCENTS = [
  { card: "dash-card-cyan", change: "text-accent-cyan" },
  { card: "dash-card-blue", change: "text-accent-blue" },
  { card: "dash-card-purple", change: "text-accent-purple" },
  { card: "dash-card-violet", change: "text-accent-violet" },
] as const;

export function KpiCards() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const kpis = isZh
    ? [
        { label: "潛客管理", value: "預覽", change: "潛在客戶管理" },
        { label: "銷售儀表板", value: "預覽", change: "銷售儀表板" },
        { label: "流程自動化", value: "預覽", change: "流程自動化" },
        { label: "數據分析", value: "預覽", change: "數據分析" },
      ]
    : [
        { label: "Lead Management", value: "Preview", change: "Module demo" },
        { label: "Sales Dashboard", value: "Preview", change: "Module demo" },
        { label: "Workflow Automation", value: "Preview", change: "Module demo" },
        { label: "Analytics", value: "Preview", change: "Module demo" },
      ];

  return (
    <div className={panel}>
      <div className={`${panelInner} grid grid-cols-2 gap-3`}>
        <div className="col-span-2 flex items-baseline justify-between gap-2 border-b border-border/60 pb-3">
          <span className="text-label font-mono uppercase tracking-wider text-accent-cyan">
            {isZh ? "系統展示" : "Dashboard Preview"}
          </span>
          <span className="text-caption text-muted">
            {isZh ? "預覽" : "Sample UI"}
          </span>
        </div>
        {kpis.map((k, i) => (
          <div
            key={k.label}
            className={`dash-card ${KPI_ACCENTS[i].card} !p-3`}
          >
            <p className="text-label text-muted">{k.label}</p>
            <p className="stat-value-gradient mt-2 text-xl font-semibold tracking-tight">
              {k.value}
            </p>
            <p className={`mt-1 text-caption ${KPI_ACCENTS[i].change}`}>
              {k.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CrmTablePreview() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const headers = isZh
    ? ["客戶", "狀態", "階段", "跟進"]
    : ["Customer", "Status", "Stage", "Follow-up"];

  const rows = isZh
    ? [
        ["示意 · 客戶 A", "範例", "範例", "—"],
        ["示意 · 客戶 B", "範例", "範例", "—"],
        ["示意 · 客戶 C", "範例", "範例", "—"],
        ["示意 · 客戶 D", "範例", "範例", "—"],
      ]
    : [
        ["Sample · Customer A", "Demo", "Demo", "—"],
        ["Sample · Customer B", "Demo", "Demo", "—"],
        ["Sample · Customer C", "Demo", "Demo", "—"],
        ["Sample · Customer D", "Demo", "Demo", "—"],
      ];

  const statusColor = (status: string) => {
    if (status.includes("成交") || status === "Won")
      return "text-emerald-400/90";
    if (status.includes("待") || status === "Pending")
      return "text-amber-400/90";
    return "text-foreground/80";
  };

  return (
    <div className={panel}>
      <div className={panelInner}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-label font-mono uppercase tracking-wider text-accent-cyan">
            {isZh ? "客戶管理展示" : "CRM Preview"}
          </span>
          <span className="text-caption text-muted">
            {isZh ? "示意資料" : "Sample data"}
          </span>
        </div>
        <div className="overflow-hidden rounded-md border border-border/80">
          <table className="w-full text-left text-caption">
            <thead>
              <tr className="border-b border-border bg-background/50">
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2.5 font-mono text-sm font-medium uppercase tracking-wider text-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row[0]}
                  className="border-b border-border/60 bg-background/50 last:border-0"
                >
                  <td className="px-3 py-2.5 font-medium text-foreground">
                    {row[0]}
                  </td>
                  <td className={`px-3 py-2.5 ${statusColor(row[1])}`}>
                    {row[1]}
                  </td>
                  <td className="px-3 py-2.5 text-muted-light">{row[2]}</td>
                  <td className="px-3 py-2.5 text-muted">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function DashboardMockup() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  return (
    <div className={panel}>
      <div className={`${panelInner} space-y-3`}>
        <div className="flex items-center justify-between">
          <span className="text-label font-mono uppercase tracking-wider text-accent-cyan">
            {isZh ? "營運儀表板" : "Ops Dashboard"}
          </span>
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[72, 48, 86].map((h, i) => (
            <div
              key={i}
              className={`${inner} flex items-end gap-0.5 p-2`}
              style={{ height: 72 }}
            >
              {[40, 65, 45, 80, 55, 90, 70].map((bar, j) => (
                <div
                  key={j}
                  className="glow-bar flex-1 rounded-sm"
                  style={{
                    height: `${(bar * h) / 100}%`,
                    background: `linear-gradient(180deg, rgba(34,211,238,0.55) 0%, #6366f1 100%)`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-caption">
          <div className="dash-card dash-card-cyan !p-3">
            <span className="text-muted">
              {isZh ? "活躍代理" : "Active agents"}
            </span>
            <p className="stat-value-gradient mt-1 text-lg font-semibold">24</p>
          </div>
          <div className="dash-card dash-card-purple !p-3">
            <span className="text-muted">
              {isZh ? "今日自動化" : "Automations today"}
            </span>
            <p className="stat-value-gradient mt-1 text-lg font-semibold">186</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkflowDiagram() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";
  const steps = isZh
    ? ["預約提交", "檔期確認", "開立帳單", "LINE 通知"]
    : ["Booking", "Confirm slot", "Invoice", "LINE notify"];

  const stepColors = [
    "border-accent-cyan/40 bg-accent-cyan/5",
    "border-accent-blue/40 bg-accent-blue/5",
    "border-accent-purple/40 bg-accent-purple/5",
    "border-accent-violet/40 bg-accent-violet/5",
  ];

  return (
    <div className={panel}>
      <div className={panelInner}>
        <p className="text-label mb-4 font-mono uppercase tracking-wider text-accent-blue">
          {isZh ? "工作流程" : "Workflow"}
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
          {steps.map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-2">
              <div
                className={`min-w-0 flex-1 rounded-lg border px-3 py-3 text-center text-caption text-foreground ${stepColors[i]}`}
              >
                {step}
              </div>
              {i < steps.length - 1 && (
                <span className="hidden shrink-0 text-accent-cyan sm:block">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-4 text-caption text-muted">
          {isZh ? "平均處理時間：4.2 分鐘" : "Avg. processing: 4.2 min"}
        </p>
      </div>
    </div>
  );
}

export function AiFlowChart() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const nodes = isZh
    ? [
        { t: "客戶訊息", sub: "LINE", accent: "dash-card-cyan" },
        { t: "智能分析", sub: "意圖", accent: "dash-card-purple" },
        { t: "回覆 / 任務", sub: "客戶管理", accent: "dash-card-violet" },
      ]
    : [
        { t: "Message", sub: "LINE", accent: "dash-card-cyan" },
        { t: "Analytics", sub: "Intent", accent: "dash-card-purple" },
        { t: "Reply / Task", sub: "Customer mgmt", accent: "dash-card-violet" },
      ];

  return (
    <div className={panel}>
      <div className={panelInner}>
        <p className="text-label mb-4 font-mono uppercase tracking-wider text-accent-purple">
          {isZh ? "自動回覆流程" : "Auto-reply Flow"}
        </p>
        <div className="space-y-3">
          {nodes.map((n, i) => (
            <div key={n.t} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-cyan/30 bg-accent-cyan/10 font-mono text-sm text-accent-cyan">
                {i + 1}
              </span>
              <div className={`dash-card ${n.accent} flex-1 !p-3`}>
                <p className="text-body-sm font-medium text-foreground">{n.t}</p>
                <p className="text-caption text-muted">{n.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-accent-purple/30 bg-accent-purple/5 px-3 py-2 text-caption text-muted-light">
          <span className="text-accent-purple">{isZh ? "系統：" : "System: "}</span>
          {isZh
            ? "「已為您安排明日 10:00 的產品說明會，並建立客戶管理跟進任務。」"
            : '"Demo scheduled for tomorrow 10:00 AM. Customer management follow-up task created."'}
        </div>
      </div>
    </div>
  );
}

export function SystemArchitecture() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const layers = isZh
    ? [
        { name: "前端", items: ["Next.js", "管理後台"], accent: "text-accent-cyan" },
        { name: "API", items: ["REST / GraphQL"], accent: "text-accent-blue" },
        { name: "服務", items: ["Auth", "CMS", "客戶管理"], accent: "text-accent-purple" },
        { name: "資料", items: ["PostgreSQL", "Redis"], accent: "text-accent-violet" },
      ]
    : [
        { name: "Frontend", items: ["Next.js", "Admin UI"], accent: "text-accent-cyan" },
        { name: "API", items: ["REST / GraphQL"], accent: "text-accent-blue" },
        { name: "Services", items: ["Auth", "CMS", "Customer mgmt"], accent: "text-accent-purple" },
        { name: "Data", items: ["PostgreSQL", "Redis"], accent: "text-accent-violet" },
      ];

  return (
    <div className={panel}>
      <div className={panelInner}>
        <p className="text-label mb-4 font-mono uppercase tracking-wider text-muted">
          {isZh ? "系統架構" : "Architecture"}
        </p>
        <div className="space-y-2">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className="flex items-center gap-4 rounded-lg border border-border/80 bg-background/60 px-4 py-3"
            >
              <span className={`w-16 shrink-0 font-mono text-caption ${layer.accent}`}>
                {layer.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border/80 bg-surface/60 px-2 py-0.5 text-caption text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisualRenderer({ type }: { type: CaseStudyVisual }) {
  switch (type) {
    case "dashboard":
      return <DashboardMockup />;
    case "crm-table":
      return <CrmTablePreview />;
    case "workflow":
      return <WorkflowDiagram />;
    case "ai-flow":
      return <AiFlowChart />;
    case "kpi":
      return <KpiCards />;
    case "architecture":
      return <SystemArchitecture />;
    default:
      return <DashboardMockup />;
  }
}

export function ProductVisualGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <CrmTablePreview />
      <KpiCards />
      <DashboardMockup />
      <WorkflowDiagram />
      <AiFlowChart />
      <SystemArchitecture />
    </div>
  );
}
