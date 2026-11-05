"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Status = "new" | "paid" | "ready";
type Order = { id: number; name: string; item: string; amount: number; status: Status };

const COPY = {
  zh: {
    today: "今日訂單",
    unit: "筆",
    status: { new: "新訂單", paid: "已付款", ready: "可取餐" } as Record<Status, string>,
    lineApp: "LINE",
    now: "現在",
    booking: "新預約",
    bookingText: "明天 14:00 · 剪髮",
    bookingSub: "已自動提醒客人 ✓",
    ai: "AI 自動整理訂單中",
    paidToast: "收款成功",
    calendar: "本週預約",
    days: ["一", "二", "三", "四", "五"],
    incoming: [
      { name: "王先生", item: "紅茶 ×2 微糖少冰", amount: 90 },
      { name: "陳小姐", item: "雞腿便當 ×1", amount: 120 },
      { name: "林太太", item: "珍奶 ×3 半糖", amount: 165 },
      { name: "張先生", item: "牛肉麵 ×2", amount: 360 },
    ],
    base: [
      { id: -3, name: "黃小姐", item: "綠茶 ×1", amount: 35, status: "ready" as Status },
      { id: -2, name: "李先生", item: "排骨便當 ×2", amount: 220, status: "paid" as Status },
      { id: -1, name: "吳小姐", item: "拿鐵 ×1", amount: 75, status: "paid" as Status },
    ],
    msg: (item: string) => `我要 ${item}`,
  },
  en: {
    today: "Today",
    unit: "orders",
    status: { new: "New", paid: "Paid", ready: "Ready" } as Record<Status, string>,
    lineApp: "LINE",
    now: "now",
    booking: "New booking",
    bookingText: "Tomorrow 2 PM · Haircut",
    bookingSub: "Reminder sent ✓",
    ai: "AI organizing orders",
    paidToast: "Payment received",
    calendar: "This week",
    days: ["M", "T", "W", "T", "F"],
    incoming: [
      { name: "Emma", item: "Black tea ×2", amount: 90 },
      { name: "Lucas", item: "Chicken rice ×1", amount: 120 },
      { name: "Sofia", item: "Bubble tea ×3", amount: 165 },
      { name: "Noah", item: "Beef noodles ×2", amount: 360 },
    ],
    base: [
      { id: -3, name: "Mia", item: "Green tea ×1", amount: 35, status: "ready" as Status },
      { id: -2, name: "Leo", item: "Pork rice ×2", amount: 220, status: "paid" as Status },
      { id: -1, name: "Ava", item: "Latte ×1", amount: 75, status: "paid" as Status },
    ],
    msg: (item: string) => item,
  },
};

const STATUS_STYLE: Record<Status, string> = {
  new: "bg-[#2563eb]/20 text-[#93c5fd]",
  paid: "bg-[#06C755]/18 text-[#4ade80]",
  ready: "bg-[#f59e0b]/18 text-[#fcd34d]",
};

/** Parallax helper: layer moves `depth` px with the mouse. */
function useParallax(mx: MotionValue<number>, my: MotionValue<number>, depth: number) {
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-depth, depth]), { stiffness: 70, damping: 16 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-depth * 0.6, depth * 0.6]), {
    stiffness: 70,
    damping: 16,
  });
  return { x, y };
}

export function HeroPhone3D({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const c = COPY[locale];
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  /* ---------------- mouse → 3D ---------------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-30, -8]), { stiffness: 70, damping: 16 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, 2]), { stiffness: 70, damping: 16 });
  const glareX = useTransform(mx, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(my, [-0.5, 0.5], [0, 60]);
  const glare = useMotionTemplate`radial-gradient(120% 70% at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 55%)`;

  const front = useParallax(mx, my, 34);
  const front2 = useParallax(mx, my, 24);
  const back = useParallax(mx, my, -14);

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== "mouse" || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  /* ---------------- order story ---------------- */
  const [orders, setOrders] = useState<Order[]>(c.base);
  const [banner, setBanner] = useState<{ name: string; text: string } | null>(null);
  const [toast, setToast] = useState<number | null>(null);
  const [count, setCount] = useState(12);
  const revenue = useMotionValue(8460);
  const revenueText = useTransform(revenue, (v) => `NT$${Math.round(v).toLocaleString()}`);
  const step = useRef(0);

  useEffect(() => {
    setOrders(COPY[locale].base);
  }, [locale]);

  useEffect(() => {
    if (reduce) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      const list = COPY[locale].incoming;
      const src = list[step.current % list.length];
      const id = Date.now();
      step.current += 1;
      // 1 · iOS-style LINE notification slides down
      setBanner({ name: src.name, text: COPY[locale].msg(src.item) });
      // 2 · becomes an order
      timers.push(
        setTimeout(() => {
          setBanner(null);
          setOrders((prev) => [{ id, ...src, status: "new" as Status }, ...prev].slice(0, 4));
          setCount((n) => n + 1);
        }, 2000),
      );
      // 3 · paid → revenue rolls up
      timers.push(
        setTimeout(() => {
          setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: "paid" } : o)));
          setToast(src.amount);
          animate(revenue, revenue.get() + src.amount, { duration: 1.2, ease: "easeOut" });
        }, 3600),
      );
      timers.push(setTimeout(() => setToast(null), 5200));
    };
    const first = setTimeout(run, 900);
    const loop = setInterval(run, 6500);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [locale, reduce, revenue]);

  return (
    <div
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto flex h-[560px] w-full max-w-[600px] items-center justify-center sm:h-[640px]"
      style={{ perspective: 1600 }}
    >
      {/* ---------- stage light ---------- */}
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_200deg,rgba(31,77,58,0.28),rgba(138,109,59,0.18),rgba(6,199,85,0.16),rgba(31,77,58,0.28))] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 h-10 w-[300px] -translate-x-1/2 rounded-[50%] bg-[rgba(28,26,23,0.22)] blur-2xl" />

      {/* ---------- back layer: tablet with booking calendar ---------- */}
      <motion.div
        style={{ x: back.x, y: back.y }}
        className="absolute left-[-10%] top-[20%] hidden lg:block"
      >
        <div
          className="w-[220px] rounded-[22px] bg-gradient-to-br from-[#e9e4dc] to-[#d6cfc4] p-[7px] shadow-[0_30px_60px_-30px_rgba(28,26,23,0.45)]"
          style={{ transform: "rotateY(28deg) rotateX(8deg) rotateZ(-4deg)", opacity: 0.92 }}
        >
          <div className="rounded-[16px] bg-surface p-4">
            <p className="text-[10px] font-bold tracking-[0.18em] text-accent-blue">{c.calendar}</p>
            <div className="mt-3 grid grid-cols-5 gap-1.5 text-center">
              {c.days.map((d, i) => (
                <div key={`${d}-${i}`} className="space-y-1.5">
                  <p className="text-[10px] text-muted">{d}</p>
                  {[0, 1, 2].map((r) => {
                    const on = (i + r) % 3 !== 1;
                    return (
                      <div
                        key={r}
                        className={`h-5 rounded-md ${
                          on ? (r === 1 && i === 3 ? "bg-[#06C755]" : "bg-[#1f4d3a]/80") : "bg-[#efebe4]"
                        }`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------- phone ---------- */}
      <motion.div
        initial={reduce ? false : { rotateY: -70, rotateX: 18, y: 30 }}
        animate={{ rotateY: 0, rotateX: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 14, delay: 0.15 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10"
      >
        <motion.div
          style={{ rotateY: reduce ? -18 : rotY, rotateX: reduce ? 6 : rotX, transformStyle: "preserve-3d" }}
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* titanium frame */}
          <div className="relative rounded-[52px] bg-[linear-gradient(145deg,#8f877c_0%,#3d3833_22%,#1c1a17_50%,#4a443d_78%,#a39a8d_100%)] p-[3px] shadow-[0_60px_120px_-40px_rgba(28,26,23,0.65),0_20px_40px_-20px_rgba(28,26,23,0.35)]">
            {/* side buttons */}
            <span className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l bg-[#6f685f]" />
            <span className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-[#6f685f]" />
            <span className="absolute -left-[3px] top-[226px] h-14 w-[3px] rounded-l bg-[#6f685f]" />
            <span className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r bg-[#6f685f]" />

            {/* bezel + screen */}
            <div className="relative h-[500px] w-[248px] overflow-hidden rounded-[49px] bg-black p-[9px] sm:h-[556px] sm:w-[274px]">
              <div className="relative h-full w-full overflow-hidden rounded-[41px] bg-[radial-gradient(120%_60%_at_50%_0%,#1f2a24_0%,#0e0f10_55%)]">
                {/* status bar */}
                <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-white">
                  <span>9:41</span>
                  <span className="opacity-80">● ● ▮</span>
                </div>
                {/* dynamic island */}
                <div className="absolute left-1/2 top-2.5 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black">
                  <span className="absolute right-3 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#1a2433] ring-1 ring-[#2b3a50]" />
                </div>

                {/* iOS-style LINE notification */}
                <AnimatePresence>
                  {banner && (
                    <motion.div
                      key={banner.text}
                      initial={{ y: -90, opacity: 0, scale: 0.95 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 40, opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="absolute inset-x-2.5 top-11 z-20 rounded-[20px] bg-white/[0.14] p-3 shadow-xl ring-1 ring-white/10 backdrop-blur-xl"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-[#06C755] text-[11px] font-black text-white">
                          LINE
                        </span>
                        <div className="min-w-0 flex-1 text-white">
                          <div className="flex justify-between text-[10.5px] opacity-70">
                            <span>{c.lineApp}</span>
                            <span>{c.now}</span>
                          </div>
                          <p className="truncate text-[12.5px] font-semibold">{banner.name}</p>
                          <p className="truncate text-[12px] opacity-90">{banner.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* dashboard header */}
                <div className="px-5 pt-8">
                  <p className="text-[11px] tracking-wider text-white/55">{c.today}</p>
                  <p className="mt-1 text-[23px] font-bold leading-tight text-white">
                    {count} {c.unit} · <motion.span className="text-[#bdf5cf]">{revenueText}</motion.span>
                  </p>
                  <div className="mt-3 flex h-12 items-end gap-1.5">
                    {[32, 50, 38, 66, 48, 82, 60].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-[4px] bg-gradient-to-t from-[#1f4d3a] to-[#4ade80]"
                        initial={{ height: "8%" }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.6 + i * 0.07, type: "spring", stiffness: 120, damping: 14 }}
                      />
                    ))}
                  </div>
                </div>

                {/* order list */}
                <div className="mt-4 space-y-2 px-3.5">
                  <AnimatePresence initial={false}>
                    {orders.map((o) => (
                      <motion.div
                        key={o.id}
                        layout
                        initial={{ opacity: 0, y: -18, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                        className={`relative flex items-center justify-between overflow-hidden rounded-2xl px-3 py-2.5 ${
                          o.status === "new"
                            ? "bg-[#1f4d3a]/70 ring-1 ring-[#4ade80]/50"
                            : "bg-white/[0.06]"
                        }`}
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[12.5px] font-semibold text-white">{o.name}</p>
                          <p className="truncate text-[11px] text-white/50">{o.item}</p>
                        </div>
                        <motion.span
                          key={o.status}
                          initial={{ scale: 0.6, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 18 }}
                          className={`ml-2 shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${STATUS_STYLE[o.status]}`}
                        >
                          {c.status[o.status]}
                        </motion.span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* home indicator */}
                <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" />
                {/* moving glare */}
                <motion.div className="pointer-events-none absolute inset-0" style={{ background: glare }} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ---------- front layer: floating cards (parallax) ---------- */}
      <motion.div
        style={{ x: front.x, y: front.y }}
        className="absolute bottom-[14%] right-[-2%] z-20 sm:right-[0%]"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="w-[175px] rounded-2xl border border-border bg-surface/95 p-3.5 shadow-[0_30px_60px_-24px_rgba(28,26,23,0.5)] backdrop-blur sm:w-[200px]"
        >
          <p className="text-[11px] font-bold tracking-wider text-accent-blue">{c.booking}</p>
          <p className="mt-1 text-[14.5px] font-bold text-foreground">{c.bookingText}</p>
          <p className="mt-0.5 text-[11.5px] text-muted">{c.bookingSub}</p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: front2.x, y: front2.y }}
        className="absolute left-[4%] top-[6%] z-20 sm:left-[18%]"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 rounded-full border border-border bg-surface/95 px-3.5 py-2 shadow-[0_16px_40px_-18px_rgba(28,26,23,0.45)] backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06C755] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06C755]" />
          </span>
          <span className="text-[12px] font-semibold text-foreground">{c.ai}</span>
        </motion.div>
      </motion.div>

      {/* payment toast */}
      <AnimatePresence>
        {toast !== null && (
          <motion.div
            key={toast + "-" + count}
            style={{ x: front.x, y: front.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute left-[0%] top-[46%] z-30 sm:left-[6%]"
          >
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-3.5 py-2.5 shadow-[0_24px_50px_-20px_rgba(28,26,23,0.5)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#06C755] text-[13px] font-black text-white">
                ✓
              </span>
              <div>
                <p className="text-[11px] text-muted">{c.paidToast}</p>
                <p className="text-[14px] font-bold text-foreground">+NT${toast}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
