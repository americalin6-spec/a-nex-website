"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/app/context/language-context";

const LAYERS = [
  {
    z: 200,
    label: "01・客人傳 LINE",
    desc: "「外帶 2 碗牛肉麵，6 點來拿」",
    face: "bg-[#06C755]",
    content: (
      <div className="flex h-full flex-col justify-center gap-2 p-5">
        <span className="self-end rounded-xl rounded-br-sm bg-white/95 px-3 py-1.5 text-[12px] text-[#1c1a17]">外帶 2 碗牛肉麵</span>
        <span className="self-end rounded-xl rounded-br-sm bg-white/95 px-3 py-1.5 text-[12px] text-[#1c1a17]">6 點來拿</span>
      </div>
    ),
  },
  {
    z: 100,
    label: "02・AI 看懂內容",
    desc: "品項、數量、時間自動抓出來",
    face: "bg-gradient-to-br from-[#6d28d9] to-[#2563eb]",
    content: (
      <div className="grid h-full grid-cols-3 content-center gap-2 p-5 text-center text-[11px] font-semibold text-white">
        <span className="rounded-lg bg-white/20 py-2">牛肉麵</span>
        <span className="rounded-lg bg-white/20 py-2">× 2</span>
        <span className="rounded-lg bg-white/20 py-2">18:00</span>
      </div>
    ),
  },
  {
    z: 0,
    label: "03・訂單進後台",
    desc: "老闆手機收到通知，不用再抄單",
    face: "bg-[#1c1a17]",
    content: (
      <div className="flex h-full flex-col justify-center gap-2 p-5 text-[11px] text-white">
        {["王先生・牛肉麵 ×2・18:00", "林小姐・乾麵 ×1・18:30", "陳先生・湯餃 ×3・19:00"].map((r, i) => (
          <span key={r} className={`rounded-md px-3 py-1.5 ${i === 0 ? "bg-[#06C755]/80" : "bg-white/10"}`}>{r}</span>
        ))}
      </div>
    ),
  },
] as const;

const LAYERS_EN = [
  {
    z: 200,
    label: "01 · Customer sends a LINE message",
    desc: "“Two beef noodle soups to go, pick up at 6”",
    face: "bg-[#06C755]",
    content: (
      <div className="flex h-full flex-col justify-center gap-2 p-5">
        <span className="self-end rounded-xl rounded-br-sm bg-white/95 px-3 py-1.5 text-[12px] text-[#1c1a17]">2 beef noodles to go</span>
        <span className="self-end rounded-xl rounded-br-sm bg-white/95 px-3 py-1.5 text-[12px] text-[#1c1a17]">pick up at 6</span>
      </div>
    ),
  },
  {
    z: 100,
    label: "02 · AI understands it",
    desc: "Item, quantity and time picked out automatically",
    face: "bg-gradient-to-br from-[#6d28d9] to-[#2563eb]",
    content: (
      <div className="grid h-full grid-cols-3 content-center gap-2 p-5 text-center text-[11px] font-semibold text-white">
        <span className="rounded-lg bg-white/20 py-2">Beef noodles</span>
        <span className="rounded-lg bg-white/20 py-2">× 2</span>
        <span className="rounded-lg bg-white/20 py-2">18:00</span>
      </div>
    ),
  },
  {
    z: 0,
    label: "03 · Order lands in the back office",
    desc: "The owner gets a notification — no more copying orders",
    face: "bg-[#1c1a17]",
    content: (
      <div className="flex h-full flex-col justify-center gap-2 p-5 text-[11px] text-white">
        {["Mr. Wang · Beef noodles ×2 · 18:00", "Ms. Lin · Dry noodles ×1 · 18:30", "Mr. Chen · Dumplings ×3 · 19:00"].map((r, i) => (
          <span key={r} className={`rounded-md px-3 py-1.5 ${i === 0 ? "bg-[#06C755]/80" : "bg-white/10"}`}>{r}</span>
        ))}
      </div>
    ),
  },
] as const;

/** Isometric 3D stack showing a LINE message turning into an order. */
export function MessageToOrder3D() {
  const { locale } = useLanguage();
  const layers = locale === "en" ? LAYERS_EN : LAYERS;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const spread = useTransform(scrollYProgress, [0.15, 0.5], [0.35, 1]);
  const rotZ = useTransform(scrollYProgress, [0, 1], [-44, -30]);

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="flex h-[400px] items-center justify-center pt-20 sm:h-[500px] sm:pt-24" style={{ perspective: 1400 }}>
        <motion.div
          className="relative h-[200px] w-[260px] sm:h-[230px] sm:w-[300px]"
          style={{ transformStyle: "preserve-3d", rotateX: 58, rotateZ: reduce ? -36 : rotZ }}
        >
          {layers.map((l) => (
            <Layer key={l.label} layer={l} spread={spread} still={!!reduce} />
          ))}

          {/* Glowing packet travelling down through the layers */}
          {!reduce && (
            <motion.span
              aria-hidden
              className="absolute left-1/2 top-1/2 -ml-2 -mt-2 h-4 w-4 rounded-full bg-white shadow-[0_0_24px_8px_rgba(6,199,85,0.8)]"
              animate={{ z: [240, 200, 100, 0, 0], opacity: [0, 1, 1, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.15, 0.5, 0.85, 1] }}
            />
          )}
        </motion.div>
      </div>

      <ol className="space-y-5">
        {layers.map((l) => (
          <li key={l.label} className="glass-card rounded-2xl p-5">
            <p className="text-label font-mono uppercase tracking-[0.15em] text-accent-blue">{l.label}</p>
            <p className="mt-2 text-body text-foreground">{l.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Layer({
  layer,
  spread,
  still,
}: {
  layer: (typeof LAYERS)[number] | (typeof LAYERS_EN)[number];
  spread: MotionValue<number>;
  still: boolean;
}) {
  const z = useTransform(spread, (s) => (still ? layer.z : s * layer.z));
  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden rounded-2xl border border-white/20 shadow-[0_30px_50px_-20px_rgba(28,26,23,0.55)] ${layer.face}`}
      style={{ transformStyle: "preserve-3d", z }}
    >
      {layer.content}
    </motion.div>
  );
}
