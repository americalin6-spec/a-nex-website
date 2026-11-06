"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tilt3D } from "../ui/tilt-3d";
import { useLanguage } from "@/app/context/language-context";

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

function scene(index: number, en: boolean) {
  const L = (zh: string, e: string) => (en ? e : zh);
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
            <p className="font-serif text-lg font-bold">{L("好味小館", "Good Taste Kitchen")}</p>
            <p className="mt-1 text-[11px] opacity-80">{L("在地 20 年的家常味道", "Home-style cooking for 20 years")}</p>
            <span className="mt-3 inline-block rounded-full bg-[#06C755] px-3 py-1 text-[10px] font-bold">
              {L("加 LINE 訂位", "Book a table")}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {(en ? ["Specials", "Menu", "Directions"] : ["招牌菜", "菜單", "交通"]).map((t) => (
              <div key={t} className="rounded-lg border border-border bg-background px-2 py-3 text-center text-[11px]">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted">{L("Google 搜尋得到 ✓", "Found on Google ✓")}</p>
        </Screen>
      );
    case 1: // ordering
      return (
        <Screen dark>
          <p className="text-[11px] opacity-60">{L("今日訂單", "Today’s orders")}</p>
          <p className="text-lg font-bold">
            {L("18 筆", "18 orders")} · <span className="text-[#4ade80]">NT$9,240</span>
          </p>
          <div className="mt-3 space-y-2">
            <Row a={L("王先生 紅茶 ×2", "Mr. Wang · Black tea ×2")} b={L("新訂單", "New")} tone="new" />
            <Row a={L("陳小姐 便當 ×1", "Ms. Chen · Bento ×1")} b={L("已付款", "Paid")} />
            <Row a={L("林太太 珍奶 ×3", "Mrs. Lin · Bubble tea ×3")} b={L("可取餐", "Ready")} tone="ready" />
          </div>
        </Screen>
      );
    case 2: // booking
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-accent-blue">{L("選擇預約時段", "Choose a time")}</p>
          <p className="mt-1 text-sm font-bold">{L("11 月 6 日（四）", "Thu, Nov 6")}</p>
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
            {L("✓ 預約成功，前一天自動提醒", "✓ Booked — reminder sent the day before")}
          </p>
        </Screen>
      );
    case 3: // members
      return (
        <Screen>
          <div className="rounded-xl bg-gradient-to-br from-[#1f4d3a] to-[#2f6b52] p-4 text-white">
            <p className="text-[10px] tracking-widest opacity-80">MEMBER</p>
            <p className="mt-1 font-serif text-lg font-bold">{L("金卡會員 · 林小姐", "Gold member · Ms. Lin")}</p>
            <p className="mt-2 text-[11px] opacity-90">{L("點數 1,280 · 來店 23 次", "1,280 points · 23 visits")}</p>
          </div>
          <div className="mt-3 flex gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`h-5 flex-1 rounded-full ${i < 7 ? "bg-[#8a6d3b]" : "bg-[#e4ded4]"}`}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-muted">{L("再集 3 點換一杯飲料", "3 more points for a free drink")}</p>
        </Screen>
      );
    case 4: // LINE OA
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-[#05833c]">{L("LINE 官方帳號", "LINE Official Account")}</p>
          <div className="mt-3 space-y-2 text-[12px]">
            <p className="ml-auto w-fit rounded-2xl rounded-tr-sm bg-[#06C755] px-3 py-1.5 text-white">
              {L("請問今天有營業嗎？", "Are you open today?")}
            </p>
            <p className="w-fit rounded-2xl rounded-tl-sm bg-background px-3 py-1.5">
              {L("有喔！營業到晚上 9 點 😊", "Yes! We’re open until 9 pm 😊")}
            </p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-1.5">
            {(en ? ["Order", "Menu", "Book"] : ["我要點餐", "菜單", "預約"]).map((t) => (
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
          <p className="text-[11px] opacity-60">{L("早安，Chris 👋", "Good morning, Chris 👋")}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {(en ? ["Order", "Book", "Member", "Coupons"] : ["點餐", "預約", "會員卡", "優惠券"]).map((t) => (
              <div key={t} className="rounded-xl bg-white/[0.08] py-4 text-center text-[12px] font-semibold">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-3 rounded-lg bg-[#4ade80]/15 px-3 py-2 text-[11px] text-[#4ade80]">
            {L("🔔 你的訂單已完成，可以取餐囉", "🔔 Your order is ready for pick-up")}
          </p>
        </Screen>
      );
    case 6: // AI helper
      return (
        <Screen>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-accent-blue">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#06C755]" /> {L("AI 小幫手", "AI assistant")}
          </p>
          <div className="mt-3 space-y-2 text-[12px]">
            <p className="ml-auto w-fit rounded-2xl rounded-tr-sm bg-background px-3 py-1.5">
              {L("幫我寫中秋節優惠文案", "Write a holiday promo post for me")}
            </p>
            <p className="w-fit rounded-2xl rounded-tl-sm bg-[#1f4d3a] px-3 py-1.5 text-white">
              {L("🌕 中秋限定！買 2 送 1，只到 9/17…", "🎉 Holiday special! Buy 2 get 1 free, until Dec 24…")}
            </p>
          </div>
        </Screen>
      );
    case 7: // automation
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-accent-blue">{L("自動化流程", "Automation")}</p>
          <div className="mt-4 flex items-center justify-between text-[11px] font-semibold">
            {(en ? ["Form sent", "Auto-sorted", "Notified"] : ["客人填表", "自動整理", "LINE 通知"]).map((t, i) => (
              <div key={t} className="flex items-center">
                <span className="rounded-lg border border-border bg-background px-2 py-2">{t}</span>
                {i < 2 && <span className="mx-1 text-accent-blue">→</span>}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-muted">{L("今天自動完成 46 件，省下約 2 小時", "46 tasks done automatically today — about 2 hours saved")}</p>
        </Screen>
      );
    case 100: // SEO basics
      return (
        <Screen>
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] text-muted">
            <span>🔍</span>
            <span>{L("台北 家常菜 訂位", "family restaurant near me")}</span>
          </div>
          <div className="mt-3 rounded-xl border border-border bg-background p-3">
            <p className="text-[10px] text-[#05833c]">goodtaste.tw</p>
            <p className="mt-0.5 text-[13px] font-semibold text-[#1a0dab]">{L("好味小館｜在地 20 年家常菜", "Good Taste Kitchen | Home-style cooking")}</p>
            <p className="mt-1 text-[10.5px] leading-snug text-muted">{L("線上訂位、招牌菜、交通資訊⋯", "Book online, specials, directions…")}</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10.5px]">
            {(en ? ["Search Console", "Sitemap", "Page titles", "Speed check"] : ["Search Console", "Sitemap 地圖", "標題與描述", "速度檢查"]).map((t) => (
              <p key={t} className="flex items-center justify-between rounded-lg bg-background px-2 py-1.5">
                {t} <span className="text-[#05833c]">✓</span>
              </p>
            ))}
          </div>
        </Screen>
      );
    default: // maintenance
      return (
        <Screen>
          <p className="text-[11px] font-semibold text-accent-blue">{L("網站狀態", "Site status")}</p>
          <div className="mt-3 space-y-2 text-[12px]">
            {(en ? ["Website running normally", "SSL certificate valid", "Backed up today"] : ["網站正常運作", "安全憑證有效", "今日已自動備份"]).map((t) => (
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
  const { locale } = useLanguage();
  const en = locale === "en";
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
          <div className="h-[230px]">{scene(index, en)}</div>
        </div>
      </motion.div>
    </Tilt3D>
  );
}
