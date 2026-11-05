"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tilt3D } from "../ui/tilt-3d";

/** One small 3D "device scene" per service (index matches services list order). */

function Screen({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`h-full w-full overflow-hidden rounded-[18px] p-4 ${
        dark ? "bg-[#111014] text-white" : "bg-surface text-foreground"
      }`}
    >
      {children}
    </div>
  );
}

function Row({ a, b, tone = "paid" }: { a: string; b: string; tone?: "paid" | "new" | "ready" }) {
  const toneCls =
    tone === "paid"
      ? "bg-[#06C755]/15 text-[#4ade80]"
      : tone === "new"
        ? "bg-[#2563eb]/20 text-[#93c5fd]"
        : "bg-[#f59e0b]/20 text-[#fcd34d]";
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/[0.07] px-3 py-2 text-[12px]">
      <span className="font-semibold">{a}</span>
      <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${toneCls}`}>{b}</span>
    </div>
  );
}

function scene(index: number) {
  switch (index) {
    case 0: // website
      return (
        <Screen>
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#e4ded4]" />
            <span className="h-2 w-2 rounded-full bg-[#e4ded4]" />
            <span className="h-2 w-2 rounded-full bg-[#e4ded4]" />
          </div>
          <div className="mt-4 rounded-xl bg-[#1f4d3a] p-4 text-[#f7f4ef]">
            <p className="font-serif text-lg font-bold">好味小館</p>
            <p className="mt-1 text-[11px] opacity-80">在地 20 年的家常味道</p>
            <span className="mt-3 inline-block rounded-full bg-[#06C755] px-3 py-1 text-[10px] font-bold">
              加 LINE 訂位
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["招牌菜", "菜單", "交通"].map((t) => (
              <div key={t} className="rounded-lg border border-border bg-background px-2 py-3 text-center text-[11px]">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted">Google 搜尋第 1 頁 ✓</p>
        </Screen>
      );
    case 1: // ordering
      return (
        <Screen dark>
          <p className="text-[11px] opacity-60">今日訂單</p>
          <p className="text-lg font-bold">
            18 筆 · <span className="text-[#4ade80]">NT$9,240</span>
          </p>
          <div className="mt-3 space-y-2">
            <Row a="王先生 紅茶 ×2" b="新訂單" tone="new" />
            <Row a="陳小姐 便當 ×1" b="已付款" />
            <Row a="林太太 珍奶 ×3" b="可取餐" tone="ready" />
          </div>
        </Screen>
      );
    case 2: // booking
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-accent-blue">選擇預約時段</p>
          <p className="mt-1 text-sm font-bold">11 月 6 日（四）</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {["10:00", "11:30", "13:00", "14:00", "15:30", "17:00"].map((t, i) => (
              <div
                key={t}
                className={`rounded-lg py-2 text-center text-[12px] font-semibold ${
                  i === 3
                    ? "bg-[#1f4d3a] text-white"
                    : i === 1
                      ? "bg-background text-muted line-through"
                      : "border border-border bg-background"
                }`}
              >
                {t}
              </div>
            ))}
          </div>
          <p className="mt-3 rounded-lg bg-[#06C755]/10 px-3 py-2 text-[11px] font-semibold text-[#05833c]">
            ✓ 預約成功，前一天自動提醒
          </p>
        </Screen>
      );
    case 3: // members
      return (
        <Screen>
          <div className="rounded-xl bg-gradient-to-br from-[#1f4d3a] to-[#2f6b52] p-4 text-white">
            <p className="text-[10px] tracking-widest opacity-80">MEMBER</p>
            <p className="mt-1 font-serif text-lg font-bold">金卡會員 · 林小姐</p>
            <p className="mt-2 text-[11px] opacity-90">點數 1,280 · 來店 23 次</p>
          </div>
          <div className="mt-3 flex gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`h-5 flex-1 rounded-full ${i < 7 ? "bg-[#8a6d3b]" : "bg-[#e4ded4]"}`}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-muted">再集 3 點換一杯飲料</p>
        </Screen>
      );
    case 4: // LINE OA
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-[#05833c]">LINE 官方帳號</p>
          <div className="mt-3 space-y-2 text-[12px]">
            <p className="ml-auto w-fit rounded-2xl rounded-tr-sm bg-[#06C755] px-3 py-1.5 text-white">
              請問今天有營業嗎？
            </p>
            <p className="w-fit rounded-2xl rounded-tl-sm bg-background px-3 py-1.5">
              有喔！營業到晚上 9 點 😊
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {["我要點餐", "菜單", "預約"].map((t) => (
              <div key={t} className="rounded-lg bg-[#06C755]/10 py-2 text-center text-[11px] font-semibold text-[#05833c]">
                {t}
              </div>
            ))}
          </div>
        </Screen>
      );
    case 5: // app
      return (
        <Screen dark>
          <p className="text-[11px] opacity-60">早安，Chris 👋</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["點餐", "預約", "會員卡", "優惠券"].map((t) => (
              <div key={t} className="rounded-xl bg-white/[0.08] py-4 text-center text-[12px] font-semibold">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-3 rounded-lg bg-[#4ade80]/15 px-3 py-2 text-[11px] text-[#4ade80]">
            🔔 你的訂單已完成，可以取餐囉
          </p>
        </Screen>
      );
    case 6: // AI helper
      return (
        <Screen>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-accent-blue">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#06C755]" /> AI 小幫手
          </p>
          <div className="mt-3 space-y-2 text-[12px]">
            <p className="ml-auto w-fit rounded-2xl rounded-tr-sm bg-background px-3 py-1.5">
              幫我寫中秋節優惠文案
            </p>
            <p className="w-fit rounded-2xl rounded-tl-sm bg-[#1f4d3a] px-3 py-1.5 text-white">
              🌕 中秋限定！買 2 送 1，只到 9/17…
            </p>
          </div>
        </Screen>
      );
    case 7: // automation
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-accent-blue">自動化流程</p>
          <div className="mt-4 flex items-center justify-between text-[11px] font-semibold">
            {["客人填表", "自動整理", "LINE 通知"].map((t, i) => (
              <div key={t} className="flex items-center">
                <span className="rounded-lg border border-border bg-background px-2 py-2">{t}</span>
                {i < 2 && <span className="mx-1 text-accent-blue">→</span>}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-muted">今天自動完成 46 件，省下約 2 小時</p>
        </Screen>
      );
    default: // maintenance
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-accent-blue">網站狀態</p>
          <div className="mt-3 space-y-2 text-[12px]">
            {["網站正常運作", "安全憑證有效", "今日已自動備份"].map((t) => (
              <p key={t} className="flex items-center justify-between rounded-lg bg-background px-3 py-2">
                {t} <span className="text-[#05833c]">✓</span>
              </p>
            ))}
          </div>
        </Screen>
      );
  }
}

export function ServiceVisual3D({ index }: { index: number }) {
  const reduce = useReducedMotion();
  return (
    <Tilt3D max={12} className="mx-auto w-full max-w-[380px]">
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5 + (index % 3), repeat: Infinity, ease: "easeInOut" }}
        className="relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle,rgba(31,77,58,0.16),transparent_70%)] blur-xl" />
        <div
          className="relative rounded-[26px] border border-border bg-[#1c1a17] p-2 shadow-[0_40px_80px_-30px_rgba(28,26,23,0.5)]"
          style={{ transform: "rotateX(6deg) rotateY(-10deg)" }}
        >
          <div className="h-[230px]">{scene(index)}</div>
        </div>
      </motion.div>
    </Tilt3D>
  );
}
