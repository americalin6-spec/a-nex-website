"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/language-context";

const KPI_CARDS = [
  "dash-card-cyan",
  "dash-card-blue",
  "dash-card-purple",
  "dash-card-violet",
] as const;

export function HeroPlatform() {
  const { locale } = useLanguage();
  const isZh = locale === "zh";

  const nav = isZh
    ? ["總覽", "客戶管理", "自動化", "分析"]
    : ["Overview", "Customer Mgmt", "Automation", "Analytics"];

  const pipeline = isZh
    ? [
        { name: "陳先生", value: "NT$ 280K" },
        { name: "林小姐", value: "NT$ 120K" },
        { name: "王科技", value: "NT$ 540K" },
      ]
    : [
        { name: "Mr. Chen", value: "$28K" },
        { name: "Ms. Lin", value: "$12K" },
        { name: "Wang Tech", value: "$54K" },
      ];

  const kpis = [
    {
      l: isZh ? "轉換率" : "Conversion",
      v: "24.6%",
      c: "+3.2%",
    },
    {
      l: isZh ? "進行交易" : "Active deals",
      v: "86",
      c: isZh ? "12 新增" : "12 new",
    },
    {
      l: isZh ? "自動化" : "Automations",
      v: "3,420",
      c: isZh ? "本週" : "week",
    },
    {
      l: isZh ? "自動回覆" : "Auto-replies",
      v: "98%",
      c: isZh ? "準確率" : "accuracy",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-2xl bg-gradient-to-br from-accent-cyan/25 via-accent-blue/15 to-accent-purple/25 blur-3xl" />

      <div className="gradient-border relative">
        <div className="gradient-border-inner overflow-hidden rounded-xl">
          <div className="flex items-center gap-2 border-b border-border/80 bg-surface-elevated/90 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 font-mono text-xs text-muted">
              AXORA Platform
            </span>
            <span className="ml-auto flex items-center gap-1.5 text-caption text-emerald-400/90">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              {isZh ? "即時同步" : "Live"}
            </span>
          </div>

          <div className="grid lg:grid-cols-[140px_1fr]">
            <div className="hidden border-r border-border/80 bg-background/50 p-3 lg:block">
              {nav.map((item, i) => (
                <motion.div
                  key={item}
                  className={`mb-1 rounded-md px-3 py-2 text-caption ${
                    i === 0
                      ? "bg-accent-blue/15 text-accent-blue"
                      : "text-muted hover:bg-surface/60"
                  }`}
                >
                  {item}
                </motion.div>
              ))}
              <div className="dash-card dash-card-cyan mt-6 !p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted">
                  {isZh ? "本月潛客" : "Leads"}
                </p>
                <p className="stat-value-gradient mt-1 text-xl font-semibold">
                  1,284
                </p>
                <p className="mt-0.5 text-xs text-accent-cyan">+18%</p>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {kpis.map((k, i) => (
                  <div
                    key={k.l}
                    className={`dash-card ${KPI_CARDS[i]} !p-3`}
                  >
                    <p className="text-[10px] text-muted">{k.l}</p>
                    <p className="stat-value-gradient mt-1 text-lg font-semibold">
                      {k.v}
                    </p>
                    <p className="text-[10px] text-accent-cyan">{k.c}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-5">
                <div className="ui-panel-inner col-span-3 p-3">
                  <p className="text-caption text-muted">
                    {isZh ? "營收趨勢" : "Revenue trend"}
                  </p>
                  <div className="mt-3 flex h-24 items-end gap-1">
                    {[35, 52, 48, 70, 58, 85, 72, 90, 78, 95, 88, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="glow-bar flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background:
                              "linear-gradient(180deg, rgba(34,211,238,0.5) 0%, #6366f1 100%)",
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>
                <div className="dash-card dash-card-purple col-span-2 !p-3">
                  <p className="text-caption text-muted">
                    {isZh ? "銷售管道" : "Pipeline"}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {pipeline.map((d) => (
                      <li
                        key={d.name}
                        className="flex items-center justify-between text-caption"
                      >
                        <span className="text-foreground/90">{d.name}</span>
                        <span className="text-accent-purple">{d.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ui-panel-inner mt-3 overflow-hidden">
                <table className="w-full text-caption">
                  <thead>
                    <tr className="border-b border-border text-left text-[10px] uppercase tracking-wider text-muted">
                      <th className="px-3 py-2">
                        {isZh ? "客戶" : "Customer"}
                      </th>
                      <th className="px-3 py-2">
                        {isZh ? "狀態" : "Status"}
                      </th>
                      <th className="px-3 py-2">
                        {isZh ? "跟進" : "Follow-up"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(isZh
                      ? [
                          ["張設計", "待回覆", "今日 16:00"],
                          ["李氏企業", "進行中", "明日 10:00"],
                        ]
                      : [
                          ["Zhang Design", "Pending", "Today 4pm"],
                          ["Li Corp", "Active", "Tomorrow 10am"],
                        ]
                    ).map((row) => (
                      <tr key={row[0]} className="border-b border-border/50">
                        <td className="px-3 py-2 text-foreground">{row[0]}</td>
                        <td className="px-3 py-2 text-amber-400/90">
                          {row[1]}
                        </td>
                        <td className="px-3 py-2 text-muted">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
