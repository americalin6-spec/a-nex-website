"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Order = {
  id: number;
  name: string;
  item: string;
  amount: number;
  status: "new" | "paid" | "ready";
};

const STATUS = {
  zh: { new: "新訂單", paid: "已付款", ready: "可取餐" },
  en: { new: "New", paid: "Paid", ready: "Ready" },
} as const;

const STATUS_STYLE: Record<Order["status"], string> = {
  new: "bg-[#2563eb]/15 text-[#93c5fd]",
  paid: "bg-[#06C755]/15 text-[#4ade80]",
  ready: "bg-[#f59e0b]/15 text-[#fcd34d]",
};

const INCOMING = {
  zh: [
    { name: "王先生", item: "紅茶 ×2 微糖少冰", amount: 90 },
    { name: "陳小姐", item: "雞腿便當 ×1", amount: 120 },
    { name: "林太太", item: "珍奶 ×3 半糖", amount: 165 },
    { name: "張先生", item: "牛肉麵 ×2", amount: 360 },
  ],
  en: [
    { name: "Emma", item: "Black tea ×2", amount: 90 },
    { name: "Lucas", item: "Chicken rice ×1", amount: 120 },
    { name: "Sofia", item: "Bubble tea ×3", amount: 165 },
    { name: "Noah", item: "Beef noodles ×2", amount: 360 },
  ],
};

const BASE_ORDERS = {
  zh: [
    { id: -3, name: "黃小姐", item: "綠茶 ×1", amount: 35, status: "ready" as const },
    { id: -2, name: "李先生", item: "排骨便當 ×2", amount: 220, status: "paid" as const },
    { id: -1, name: "吳小姐", item: "拿鐵 ×1", amount: 75, status: "paid" as const },
  ],
  en: [
    { id: -3, name: "Mia", item: "Green tea ×1", amount: 35, status: "ready" as const },
    { id: -2, name: "Leo", item: "Pork rice ×2", amount: 220, status: "paid" as const },
    { id: -1, name: "Ava", item: "Latte ×1", amount: 75, status: "paid" as const },
  ],
};

export function HeroPhone3D({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const isZh = locale === "zh";
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  /* ---------- mouse-follow 3D tilt ---------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-26, -6]), { stiffness: 80, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [14, 2]), { stiffness: 80, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  /* ---------- order story loop ---------- */
  const [orders, setOrders] = useState<Order[]>(BASE_ORDERS[locale]);
  const [bubble, setBubble] = useState<string | null>(null);
  const [revenue, setRevenue] = useState(8460);
  const [count, setCount] = useState(12);
  const step = useRef(0);

  useEffect(() => {
    setOrders(BASE_ORDERS[locale]);
  }, [locale]);

  useEffect(() => {
    if (reduce) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      const src = INCOMING[locale][step.current % INCOMING[locale].length];
      const id = Date.now();
      step.current += 1;
      // 1. LINE message arrives
      setBubble(isZh ? `我要 ${src.item}` : `Order: ${src.item}`);
      // 2. order appears in the list
      timers.push(
        setTimeout(() => {
          setOrders((prev) => [{ id, ...src, status: "new" as const }, ...prev].slice(0, 5));
          setCount((c) => c + 1);
        }, 1400),
      );
      // 3. bubble leaves
      timers.push(setTimeout(() => setBubble(null), 2600));
      // 4. paid → revenue up
      timers.push(
        setTimeout(() => {
          setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: "paid" } : o)));
          setRevenue((r) => r + src.amount);
        }, 3600),
      );
    };
    run();
    const loop = setInterval(run, 6000);
    return () => {
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [locale, isZh, reduce]);

  const statusText = STATUS[locale];

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-center justify-center sm:h-[600px]"
      style={{ perspective: 1400 }}
    >
      {/* soft glow + floor shadow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(31,77,58,0.22),transparent_65%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-6 left-1/2 h-8 w-64 -translate-x-1/2 rounded-[50%] bg-[rgba(28,26,23,0.18)] blur-xl" />

      <motion.div
        style={{ rotateY: reduce ? -16 : rotY, rotateX: reduce ? 8 : rotX, transformStyle: "preserve-3d" }}
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* ---------- phone ---------- */}
        <div
          className="relative h-[480px] w-[240px] rounded-[44px] bg-[#1c1a17] p-[10px] shadow-[0_50px_100px_-30px_rgba(28,26,23,0.55),inset_0_0_0_1.5px_rgba(255,255,255,0.08)] sm:h-[540px] sm:w-[270px]"
          style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
        >
          {/* side thickness */}
          <div
            className="absolute inset-y-6 -right-[6px] w-[8px] rounded-r-xl bg-gradient-to-b from-[#3a3631] to-[#141210]"
            style={{ transform: "rotateY(90deg) translateZ(4px)", transformOrigin: "left" }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-[#111014]">
            <div className="mx-auto mt-2.5 h-6 w-24 rounded-full bg-black" />
            <div className="px-4 pt-4">
              <p className="text-[11px] tracking-wider text-white/50">
                {isZh ? "今日訂單" : "Today"}
              </p>
              <p className="mt-1 text-[22px] font-bold text-white">
                <motion.span key={count} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }}>
                  {count}
                </motion.span>{" "}
                {isZh ? "筆" : "orders"} ·{" "}
                <motion.span
                  key={revenue}
                  initial={{ color: "#4ade80" }}
                  animate={{ color: "#ffffff" }}
                  transition={{ duration: 1.2 }}
                >
                  NT${revenue.toLocaleString()}
                </motion.span>
              </p>
              {/* mini chart */}
              <div className="mt-3 flex h-12 items-end gap-1.5">
                {[35, 55, 40, 70, 50, 85, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#1f4d3a] to-[#4ade80]/70"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.6 }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-2 px-3">
              <AnimatePresence initial={false}>
                {orders.map((o) => (
                  <motion.div
                    key={o.id}
                    layout
                    initial={{ opacity: 0, y: -16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className={`flex items-center justify-between rounded-2xl px-3 py-2.5 ${
                      o.status === "new" ? "bg-[#1f4d3a]/60 ring-1 ring-[#4ade80]/40" : "bg-white/[0.06]"
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-white">{o.name}</p>
                      <p className="truncate text-[11px] text-white/50">{o.item}</p>
                    </div>
                    <motion.span
                      key={o.status}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${STATUS_STYLE[o.status]}`}
                    >
                      {statusText[o.status]}
                    </motion.span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* screen glare */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
          </div>
        </div>

        {/* ---------- floating LINE message (in front) ---------- */}
        <AnimatePresence>
          {bubble && (
            <motion.div
              key={bubble}
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="absolute -left-12 top-16 w-[170px] sm:w-[200px] rounded-2xl border border-border bg-surface p-3 shadow-[0_24px_50px_-20px_rgba(28,26,23,0.45)] sm:-left-36"
              style={{ z: 90 }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#06C755] text-[10px] font-bold text-white">
                  L
                </span>
                <span className="text-[11px] font-semibold text-muted">LINE</span>
              </div>
              <p className="mt-2 rounded-xl rounded-tl-sm bg-[#06C755]/10 px-3 py-2 text-[13px] font-medium text-foreground">
                {bubble}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- floating booking card (in front, right) ---------- */}
        <motion.div
          className="absolute -right-10 bottom-20 w-[165px] sm:w-[190px] rounded-2xl border border-border bg-surface p-3 shadow-[0_24px_50px_-20px_rgba(28,26,23,0.45)] sm:-right-32"
          style={{ z: 130 }}
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <p className="text-[11px] font-semibold tracking-wider text-accent-blue">
            {isZh ? "新預約" : "New booking"}
          </p>
          <p className="mt-1 text-[14px] font-bold text-foreground">
            {isZh ? "明天 14:00 · 剪髮" : "Tomorrow 2 PM · Haircut"}
          </p>
          <p className="mt-0.5 text-[11.5px] text-muted">
            {isZh ? "已自動提醒客人 ✓" : "Reminder sent ✓"}
          </p>
        </motion.div>

        {/* ---------- floating AI chip (behind, top) ---------- */}
        <motion.div
          className="absolute -left-8 -top-10 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 shadow-lg backdrop-blur"
          style={{ z: 50 }}
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06C755] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06C755]" />
          </span>
          <span className="text-[11.5px] font-semibold text-foreground">
            {isZh ? "AI 自動整理訂單中" : "AI organizing orders"}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
