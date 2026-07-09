"use client";

import { useLanguage } from "../../context/language-context";
import { Reveal } from "../ui/reveal";

const ACCENTS = [
  "dash-card-cyan",
  "dash-card-blue",
  "dash-card-purple",
  "dash-card-violet",
] as const;

const BAR_GRADIENTS = [
  "linear-gradient(180deg, #22d3ee 0%, #3b82f6 100%)",
  "linear-gradient(180deg, #4d9fff 0%, #6366f1 100%)",
  "linear-gradient(180deg, #a78bfa 0%, #8b5cf6 100%)",
  "linear-gradient(180deg, #8b5cf6 0%, #6366f1 100%)",
];

const BAR_GLOWS = [
  "0 0 12px rgba(34,211,238,0.45)",
  "0 0 12px rgba(77,159,255,0.45)",
  "0 0 12px rgba(167,139,250,0.45)",
  "0 0 12px rgba(139,92,246,0.45)",
];

export function SaasMetricsStrip({
  disableScrollAnimation = false,
}: {
  disableScrollAnimation?: boolean;
}) {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const metrics = isZh
    ? [
        { label: "活躍 SaaS 租戶", value: "48", sub: "+6 本月", bars: [55, 72, 48, 90, 68] },
        { label: "客戶管理同步", value: "12.4K", sub: "今日", bars: [40, 85, 60, 75, 95] },
        { label: "自動化流程執行", value: "3,420", sub: "本週", bars: [70, 50, 88, 65, 82] },
        { label: "平台 API 請求", value: "890K", sub: "99.9% 正常", bars: [60, 78, 92, 55, 88] },
      ]
    : [
        { label: "Active SaaS tenants", value: "48", sub: "+6 this month", bars: [55, 72, 48, 90, 68] },
        { label: "Customer sync events", value: "12.4K", sub: "today", bars: [40, 85, 60, 75, 95] },
        { label: "Automation runs", value: "3,420", sub: "this week", bars: [70, 50, 88, 65, 82] },
        { label: "Platform API calls", value: "890K", sub: "99.9% healthy", bars: [60, 78, 92, 55, 88] },
      ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.05} disableScrollAnimation={disableScrollAnimation}>
          <div className={`dash-card ${ACCENTS[i % ACCENTS.length]} h-full`}>
            <p className="text-caption text-muted">{m.label}</p>
            <p className="stat-value-gradient mt-2 text-2xl font-semibold tracking-tight">
              {m.value}
            </p>
            <p className="mt-0.5 text-caption text-accent-cyan">{m.sub}</p>
            <div className="mt-4 flex h-14 items-end gap-1">
              {m.bars.map((h, j) => (
                <div
                  key={j}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: BAR_GRADIENTS[i],
                    boxShadow: BAR_GLOWS[i],
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
