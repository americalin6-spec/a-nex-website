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
import { useLanguage } from "@/app/context/language-context";

type Msg = { from: "user" | "bot" | "system"; text: string };

const SCRIPT_EN: Msg[] = [
  { from: "user", text: "Are you open today?" },
  { from: "bot", text: "Yes! We’re open until 9 pm today 😊\nTakeaway or a table?" },
  { from: "user", text: "Two beef noodle soups to go, pick up at 6" },
  { from: "bot", text: "Got it!\nBeef noodle soup ×2 · pick up 18:00\nTotal NT$360, pay at the counter ✓" },
  { from: "system", text: "📋 Order created automatically" },
];

const SCRIPT: Msg[] = [
  { from: "user", text: "請問今天有開嗎？" },
  { from: "bot", text: "有喔！今天營業到晚上 9 點 😊\n要外帶還是訂位呢？" },
  { from: "user", text: "外帶 2 碗牛肉麵，6 點來拿" },
  { from: "bot", text: "收到！\n牛肉麵 ×2・18:00 取餐\n共 NT$360，到店付款即可 ✓" },
  { from: "system", text: "📋 已自動建立訂單" },
];

/** Floating 3D cards around the phone; `at` = script step when it appears. */
const CARDS_EN = [
  { at: 2, z: 70, pos: { left: -96, top: 110 }, icon: "🌙", title: "2:13 am", body: "AI replied automatically", tone: "light" },
  { at: 4, z: 120, pos: { right: -110, top: 250 }, icon: "📋", title: "New order", body: "Beef noodles ×2 · 18:00", tone: "green" },
  { at: 5, z: 40, pos: { left: -104, top: 440 }, icon: "👤", title: "Customer saved", body: "Mr. Wang · first visit", tone: "light" },
] as const;

const CARDS = [
  { at: 2, z: 70, pos: { left: -96, top: 110 }, icon: "🌙", title: "凌晨 2:13", body: "AI 已自動回覆", tone: "light" },
  { at: 4, z: 120, pos: { right: -110, top: 250 }, icon: "📋", title: "新訂單", body: "牛肉麵 ×2・18:00", tone: "green" },
  { at: 5, z: 40, pos: { left: -104, top: 440 }, icon: "👤", title: "客人已建檔", body: "王先生・第 1 次來店", tone: "light" },
] as const;

/** 3D LINE phone: tilts with the mouse, chat plays, cards float out in depth. */
export function LineChatHero() {
  const { locale } = useLanguage();
  const en = locale === "en";
  const script = en ? SCRIPT_EN : SCRIPT;
  const cards = en ? CARDS_EN : CARDS;
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(1);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-26, 4]), { stiffness: 70, damping: 16 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [14, -2]), { stiffness: 70, damping: 16 });

  useEffect(() => {
    if (reduce) {
      setShown(SCRIPT.length);
      return;
    }
    const id = window.setInterval(() => {
      setShown((n) => (n >= SCRIPT.length + 3 ? 1 : n + 1));
    }, 1700);
    return () => window.clearInterval(id);
  }, [reduce]);

  // Idle sway when the mouse isn't over it.
  useEffect(() => {
    if (reduce) return;
    let t = 0;
    let raf = 0;
    let hovering = false;
    const el = wrap.current;
    const enter = () => (hovering = true);
    const leave = () => (hovering = false);
    el?.addEventListener("pointerenter", enter);
    el?.addEventListener("pointerleave", leave);
    const loop = () => {
      t += 0.012;
      if (!hovering) {
        mx.set(Math.sin(t) * 0.25);
        my.set(Math.cos(t * 0.8) * 0.15);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      el?.removeEventListener("pointerenter", enter);
      el?.removeEventListener("pointerleave", leave);
    };
  }, [reduce, mx, my]);

  function onMove(e: React.PointerEvent) {
    if (reduce || e.pointerType !== "mouse" || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  const visible = script.slice(0, Math.min(shown, script.length));

  return (
    <div
      ref={wrap}
      onPointerMove={onMove}
      className="relative mx-auto flex w-full max-w-[520px] justify-center py-6 max-sm:-my-16 max-sm:scale-[0.72]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateY: rotY, rotateX: rotX, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Glow under the phone */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06C755]/30 blur-3xl"
          style={{ transform: "translateZ(-120px)" }}
        />

        {/* Phone */}
        <div
          className="relative w-[290px] overflow-hidden rounded-[2.4rem] border-[7px] border-[#1c1a17] bg-[#8fa9c9] shadow-[0_40px_80px_-30px_rgba(28,26,23,0.6)] sm:w-[310px]"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="flex items-center gap-3 bg-[#1c1a17] px-4 pb-3 pt-4 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06C755] text-xs font-bold">{en ? "BN" : "店"}</span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{en ? "Demo Beef Noodle Shop" : "示範牛肉麵店"}</p>
              <p className="text-[11px] text-white/60">{en ? "LINE Official Account · AI replying" : "LINE 官方帳號・AI 自動回覆中"}</p>
            </div>
          </div>
          <div className="flex h-[380px] flex-col justify-end gap-2.5 px-3 py-4">
            <AnimatePresence initial={false}>
              {visible.map((m, i) =>
                m.from === "system" ? (
                  <motion.p
                    key={`${i}-${m.text}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="self-center rounded-full bg-black/25 px-3 py-1 text-[11px] text-white"
                  >
                    {m.text}
                  </motion.p>
                ) : (
                  <motion.div
                    key={`${i}-${m.text}`}
                    initial={{ opacity: 0, y: 14, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-[13px] leading-snug shadow-sm ${
                      m.from === "user"
                        ? "self-end rounded-br-md bg-[#06C755] text-white"
                        : "self-start rounded-bl-md bg-white text-[#1c1a17]"
                    }`}
                  >
                    {m.text}
                  </motion.div>
                ),
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Floating cards at different depths */}
        {cards.map((c, i) => {
          const on = reduce || shown >= c.at;
          return (
            <motion.div
              key={c.title}
              className="pointer-events-none absolute"
              style={{ transformStyle: "preserve-3d", ...c.pos }}
              initial={false}
              animate={{ opacity: on ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={false}
                animate={
                  on
                    ? { z: c.z, scale: 1, y: reduce ? 0 : [0, -8, 0] }
                    : { z: c.z - 80, scale: 0.7, y: 0 }
                }
                transition={{
                  z: { type: "spring", stiffness: 120, damping: 14 },
                  scale: { type: "spring", stiffness: 160, damping: 14 },
                  y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                }}
                className={`whitespace-nowrap rounded-2xl px-4 py-3 shadow-[0_18px_40px_-16px_rgba(28,26,23,0.45)] ${
                  c.tone === "green" ? "bg-[#1f4d3a] text-white" : "bg-white text-[#1c1a17]"
                }`}
              >
                <p className={`text-[11px] font-semibold ${c.tone === "green" ? "text-white/70" : "text-[#6f6a62]"}`}>
                  {c.icon} {c.title}
                </p>
                <p className="mt-0.5 text-sm font-bold">{c.body}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
