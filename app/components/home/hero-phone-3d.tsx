"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getLineAddFriendUrl } from "@/lib/line/config";
import { getWhatsAppUrl } from "@/lib/whatsapp";

/* ------------------------------------------------------------------ */
/*  Owner's point of view: you're holding your shop's phone.           */
/*  1. Messages keep piling up (unread 0 → 12, phone buzzes)           */
/*  2. You switch on "AI booking assistant"                            */
/*  3. Every message is answered and becomes a booking that flies      */
/*     into your calendar (unread 12 → 0)                              */
/*  4. Calm: "focus on your customers, AI handles bookings"            */
/* ------------------------------------------------------------------ */

type Msg = {
  name: string;
  text: string;
  unread: number;
  booked: string;
  tag: string;
  day: number; // 0 Mon … 5 Sat
  period: number; // 0 morning · 1 afternoon · 2 evening
  color: string;
};

const COPY = {
  zh: {
    tab: "聊天",
    unreadLabel: (n: number) => (n > 0 ? `${n} 則未讀` : "全部處理完 ✓"),
    times: ["剛剛", "1 分鐘", "2 分鐘", "3 分鐘", "5 分鐘", "8 分鐘"],
    ai: "AI 預約小幫手",
    aiOff: "關閉",
    aiOn: "已開啟",
    replied: "AI 已回覆・已預約",
    calendar: "本週預約",
    unit: "筆",
    days: ["一", "二", "三", "四", "五", "六"],
    periods: ["早", "午", "晚"],
    captionBusy: "一邊做客人，一邊回私訊？😵‍💫",
    captionSwitch: "交給 AI 吧 👉",
    captionWork: "AI 正在幫你回覆、排預約…",
    captionCalm: "你專心做客人，預約交給 AI ✨",
    toastTitle: (n: number) => `剛剛自動接了 ${n} 筆預約`,
    toastSub: "前一天會自動提醒客人",
    industries: [
      { label: "美甲美睫", shop: "Nail Room 美甲美睫", msgs: [
      { name: "林小姐", text: "在嗎？週六下午可以做凝膠嗎 🙏", unread: 2, booked: "週六 15:30 凝膠", tag: "凝膠", day: 5, period: 1, color: "#d9789a" },
      { name: "Yuki", text: "美睫還有位子嗎？", unread: 1, booked: "週二 11:00 美睫", tag: "美睫", day: 1, period: 0, color: "#8b6fc9" },
      { name: "陳小姐", text: "多少錢？要怎麼預約？", unread: 3, booked: "週四 19:00 手部保養", tag: "保養", day: 3, period: 2, color: "#3f8f66" },
      { name: "Amy", text: "可以改到下週三嗎？", unread: 1, booked: "週三 14:00 改期完成", tag: "改期", day: 2, period: 1, color: "#3b7fc4" },
      { name: "王太太", text: "今天晚上還有空嗎？", unread: 2, booked: "週一 20:00 卸甲", tag: "卸甲", day: 0, period: 2, color: "#b08a4a" },
      { name: "小柔", text: "想跟朋友一起做，2 位 😊", unread: 3, booked: "週六 11:00 凝膠 ×2", tag: "2 位", day: 5, period: 0, color: "#e07a5f" },
    ] },
      {
        label: "美髮",
        shop: "Hair Studio 髮廊",
        msgs: [
          { name: "林小姐", text: "週六下午可以染髮嗎？🙏", unread: 2, booked: "週六 14:00 染髮", tag: "染髮", day: 5, period: 1, color: "#d9789a" },
          { name: "Yuki", text: "想燙捲，大概要多久？", unread: 1, booked: "週二 10:30 燙髮", tag: "燙髮", day: 1, period: 0, color: "#8b6fc9" },
          { name: "陳先生", text: "護髮多少錢？可以預約嗎？", unread: 3, booked: "週四 18:00 護髮", tag: "護髮", day: 3, period: 2, color: "#3f8f66" },
          { name: "Amy", text: "可以改到週三嗎？", unread: 1, booked: "週三 15:00 改期完成", tag: "改期", day: 2, period: 1, color: "#3b7fc4" },
          { name: "王先生", text: "今天晚上還能剪嗎？", unread: 2, booked: "週一 19:30 剪髮", tag: "剪髮", day: 0, period: 2, color: "#b08a4a" },
          { name: "小柔", text: "母女兩位可以一起剪嗎？😊", unread: 3, booked: "週六 11:00 剪髮 ×2", tag: "2 位", day: 5, period: 0, color: "#e07a5f" },
        ],
      },
      {
        label: "皮拉提斯・瑜珈",
        shop: "Core 皮拉提斯",
        msgs: [
          { name: "林小姐", text: "想約一堂體驗課 🙋‍♀️", unread: 2, booked: "週六 15:00 體驗課", tag: "體驗", day: 5, period: 1, color: "#d9789a" },
          { name: "Yuki", text: "器械課早上還有位子嗎？", unread: 1, booked: "週二 10:00 器械課", tag: "器械", day: 1, period: 0, color: "#8b6fc9" },
          { name: "陳小姐", text: "團體課怎麼收費？", unread: 3, booked: "週四 20:00 團體課", tag: "團課", day: 3, period: 2, color: "#3f8f66" },
          { name: "Amy", text: "這週可以改到週三嗎？", unread: 1, booked: "週三 14:00 改期完成", tag: "改期", day: 2, period: 1, color: "#3b7fc4" },
          { name: "王小姐", text: "有晚上的私人教練課嗎？", unread: 2, booked: "週一 19:00 私人教練", tag: "私教", day: 0, period: 2, color: "#b08a4a" },
          { name: "小柔", text: "兩個人可以一起上嗎？😊", unread: 3, booked: "週六 11:00 雙人課", tag: "雙人", day: 5, period: 0, color: "#e07a5f" },
        ],
      },
      {
        label: "診所",
        shop: "微笑牙醫診所",
        msgs: [
          { name: "林小姐", text: "週六下午可以洗牙嗎？", unread: 2, booked: "週六 15:00 洗牙", tag: "洗牙", day: 5, period: 1, color: "#d9789a" },
          { name: "陳先生", text: "明天早上有門診嗎？", unread: 1, booked: "週二 09:30 初診", tag: "初診", day: 1, period: 0, color: "#8b6fc9" },
          { name: "王太太", text: "想預約回診，要帶健保卡嗎？", unread: 3, booked: "週四 19:00 回診", tag: "回診", day: 3, period: 2, color: "#3f8f66" },
          { name: "Amy", text: "可以改到週三下午嗎？", unread: 1, booked: "週三 14:30 改期完成", tag: "改期", day: 2, period: 1, color: "#3b7fc4" },
          { name: "李先生", text: "晚上有看診嗎？", unread: 2, booked: "週一 19:30 看診", tag: "夜診", day: 0, period: 2, color: "#b08a4a" },
          { name: "小柔媽媽", text: "孩子可以塗氟嗎？😊", unread: 3, booked: "週六 11:00 兒童塗氟", tag: "塗氟", day: 5, period: 0, color: "#e07a5f" },
        ],
      },
    ] as { label: string; shop: string; msgs: Msg[] }[],
    tryTitle: "輸入你的店名，看看你的店用起來長怎樣 👇",
    tryPlaceholder: "例如：小美美甲",
    tryButton: "看我的店 ▶",
    tapHint: "換你按按看 👇 打開 AI",
    captionCalmFor: (name: string) => `${name}，你專心做客人，預約交給 AI ✨`,
    cta: "想要這個？加 LINE，免費幫你做一個真的 →",
  },
  en: {
    tab: "Chats",
    unreadLabel: (n: number) => (n > 0 ? `${n} unread` : "All handled ✓"),
    times: ["now", "1m", "2m", "3m", "5m", "8m"],
    ai: "AI booking assistant",
    aiOff: "Off",
    aiOn: "On",
    replied: "AI replied · booked",
    calendar: "This week",
    unit: "bookings",
    days: ["M", "T", "W", "T", "F", "S"],
    periods: ["AM", "PM", "Eve"],
    captionBusy: "Doing nails AND answering DMs? 😵‍💫",
    captionSwitch: "Let AI handle it 👉",
    captionWork: "AI is replying and booking…",
    captionCalm: "You focus on clients. AI does the bookings ✨",
    toastTitle: (n: number) => `${n} bookings taken automatically`,
    toastSub: "Clients get a reminder the day before",
    industries: [
      { label: "Nails & lashes", shop: "Nail Room", msgs: [
      { name: "Emma", text: "Hi! Any gel slots Saturday afternoon? 🙏", unread: 2, booked: "Sat 3:30 PM · Gel", tag: "Gel", day: 5, period: 1, color: "#d9789a" },
      { name: "Yuki", text: "Do you have lash appointments?", unread: 1, booked: "Tue 11:00 AM · Lashes", tag: "Lashes", day: 1, period: 0, color: "#8b6fc9" },
      { name: "Sofia", text: "How much? How do I book?", unread: 3, booked: "Thu 7:00 PM · Manicure", tag: "Mani", day: 3, period: 2, color: "#3f8f66" },
      { name: "Amy", text: "Can I move to next Wednesday?", unread: 1, booked: "Wed 2:00 PM · Rescheduled", tag: "Moved", day: 2, period: 1, color: "#3b7fc4" },
      { name: "Grace", text: "Anything free tonight?", unread: 2, booked: "Mon 8:00 PM · Removal", tag: "Removal", day: 0, period: 2, color: "#b08a4a" },
      { name: "Chloe", text: "Booking for 2 friends 😊", unread: 3, booked: "Sat 11:00 AM · Gel ×2", tag: "×2", day: 5, period: 0, color: "#e07a5f" },
    ] },
      {
        label: "Hair salon",
        shop: "Hair Studio",
        msgs: [
          { name: "Emma", text: "Can I get colour on Saturday afternoon? 🙏", unread: 2, booked: "Sat 2:00 PM · Colour", tag: "Colour", day: 5, period: 1, color: "#d9789a" },
          { name: "Yuki", text: "How long does a perm take?", unread: 1, booked: "Tue 10:30 AM · Perm", tag: "Perm", day: 1, period: 0, color: "#8b6fc9" },
          { name: "Leo", text: "How much is a treatment?", unread: 3, booked: "Thu 6:00 PM · Treatment", tag: "Care", day: 3, period: 2, color: "#3f8f66" },
          { name: "Amy", text: "Can I move to Wednesday?", unread: 1, booked: "Wed 3:00 PM · Rescheduled", tag: "Moved", day: 2, period: 1, color: "#3b7fc4" },
          { name: "Noah", text: "Any haircut slots tonight?", unread: 2, booked: "Mon 7:30 PM · Haircut", tag: "Cut", day: 0, period: 2, color: "#b08a4a" },
          { name: "Chloe", text: "Mum and me together? 😊", unread: 3, booked: "Sat 11:00 AM · Cut ×2", tag: "×2", day: 5, period: 0, color: "#e07a5f" },
        ],
      },
      {
        label: "Pilates & yoga",
        shop: "Core Pilates",
        msgs: [
          { name: "Emma", text: "I'd love to try a class 🙋‍♀️", unread: 2, booked: "Sat 3:00 PM · Trial", tag: "Trial", day: 5, period: 1, color: "#d9789a" },
          { name: "Yuki", text: "Any reformer spots in the morning?", unread: 1, booked: "Tue 10:00 AM · Reformer", tag: "Reformer", day: 1, period: 0, color: "#8b6fc9" },
          { name: "Sofia", text: "How much are group classes?", unread: 3, booked: "Thu 8:00 PM · Group", tag: "Group", day: 3, period: 2, color: "#3f8f66" },
          { name: "Amy", text: "Can I switch to Wednesday?", unread: 1, booked: "Wed 2:00 PM · Rescheduled", tag: "Moved", day: 2, period: 1, color: "#3b7fc4" },
          { name: "Grace", text: "Evening private sessions?", unread: 2, booked: "Mon 7:00 PM · Private", tag: "1:1", day: 0, period: 2, color: "#b08a4a" },
          { name: "Chloe", text: "Can two of us come together? 😊", unread: 3, booked: "Sat 11:00 AM · Duo class", tag: "Duo", day: 5, period: 0, color: "#e07a5f" },
        ],
      },
      {
        label: "Clinic",
        shop: "Smile Dental",
        msgs: [
          { name: "Emma", text: "Cleaning on Saturday afternoon?", unread: 2, booked: "Sat 3:00 PM · Cleaning", tag: "Clean", day: 5, period: 1, color: "#d9789a" },
          { name: "Lucas", text: "Any appointments tomorrow morning?", unread: 1, booked: "Tue 9:30 AM · New patient", tag: "New", day: 1, period: 0, color: "#8b6fc9" },
          { name: "Grace", text: "I need a follow-up visit", unread: 3, booked: "Thu 7:00 PM · Follow-up", tag: "Follow-up", day: 3, period: 2, color: "#3f8f66" },
          { name: "Amy", text: "Can I move to Wednesday afternoon?", unread: 1, booked: "Wed 2:30 PM · Rescheduled", tag: "Moved", day: 2, period: 1, color: "#3b7fc4" },
          { name: "Noah", text: "Are you open in the evening?", unread: 2, booked: "Mon 7:30 PM · Check-up", tag: "Evening", day: 0, period: 2, color: "#b08a4a" },
          { name: "Chloe", text: "Fluoride for my kid? 😊", unread: 3, booked: "Sat 11:00 AM · Kids fluoride", tag: "Kids", day: 5, period: 0, color: "#e07a5f" },
        ],
      },
    ] as { label: string; shop: string; msgs: Msg[] }[],
    tryTitle: "Type your business name and see it in action 👇",
    tryPlaceholder: "e.g. Bella Nails",
    tryButton: "Show my shop ▶",
    tapHint: "Your turn 👇 switch on the AI",
    captionCalmFor: (name: string) => `${name}: you focus on clients, AI does the bookings ✨`,
    cta: "Want this for your business? Chat on WhatsApp →",
  },
};

const PREFILLED = ["0-0", "1-1", "2-0", "3-0", "4-0", "4-1", "4-2", "3-1"];

// timeline (ms from cycle start)
const ARRIVE = [300, 900, 1400, 1850, 2250, 2650]; // messages pile up
const T_TOGGLE_SHOW = 3500;
const T_AUTO_TAP = 4300; // when the visitor isn't playing, the "owner" taps by themself
const T_WAIT_TAP = 9000; // when the visitor is playing, wait this long for their tap
const RESOLVE_GAP = 650;
const CALM_HOLD = 3800;

type Stage = "busy" | "switch" | "work" | "calm";

function useParallax(mx: MotionValue<number>, my: MotionValue<number>, depth: number) {
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-depth, depth]), { stiffness: 70, damping: 16 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-depth * 0.6, depth * 0.6]), { stiffness: 70, damping: 16 });
  return { x, y };
}

export function HeroPhone3D({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const c = COPY[locale];
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slotRefs = useRef<Record<string, HTMLDivElement | null>>({});

  /* ---------------- mouse → 3D ---------------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 6]), { stiffness: 70, damping: 16 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [22, 12]), { stiffness: 70, damping: 16 });
  const glareX = useTransform(mx, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(my, [-0.5, 0.5], [0, 60]);
  const glare = useMotionTemplate`radial-gradient(120% 70% at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 55%)`;
  const front = useParallax(mx, my, 28);
  const front2 = useParallax(mx, my, 18);
  const back = useParallax(mx, my, -16);

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

  /* ---------------- story state ---------------- */
  const [industry, setIndustry] = useState(0);
  const [pendingIndustry, setPendingIndustry] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [customName, setCustomName] = useState("");
  const [runKey, setRunKey] = useState(0);
  const personal = customName !== "";
  const ind = c.industries[industry] ?? c.industries[0];
  const msgsNow = ind.msgs;
  const shopName = personal ? customName : ind.shop;
  const turnOnRef = useRef<(() => void) | null>(null);
  const n = msgsNow.length;
  const [cycle, setCycle] = useState(0);
  const [arrived, setArrived] = useState(reduce ? n : 0); // how many messages are in the list
  const [resolved, setResolved] = useState(reduce ? n : 0); // how many have been handled by AI
  const [stage, setStage] = useState<Stage>(reduce ? "calm" : "busy");
  const [toggleShown, setToggleShown] = useState(!!reduce);
  const [tap, setTap] = useState(false);
  const [aiOn, setAiOn] = useState(!!reduce);
  const [buzz, setBuzz] = useState(0);
  const [flights, setFlights] = useState<
    { id: string; fx: number; fy: number; tx: number; ty: number; label: string; color: string }[]
  >([]);
  const [filled, setFilled] = useState<Record<string, string>>(
    reduce ? Object.fromEntries(COPY[locale].industries[0].msgs.map((m) => [`${m.day}-${m.period}`, m.color])) : {},
  );

  const unread = msgsNow.slice(0, arrived).reduce((s, m, i) => s + (i < resolved ? 0 : m.unread), 0);
  const unreadText = unread > 0 ? c.unreadLabel(unread) : resolved >= n ? c.unreadLabel(0) : "";
  const bookingCount = 17 + Object.keys(filled).length;

  useEffect(() => {
    if (reduce) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (t: number, fn: () => void) => timers.push(setTimeout(fn, t));
    const msgs = (COPY[locale].industries[industry] ?? COPY[locale].industries[0]).msgs;
    let on = false;

    const resolveAll = () => {
      msgs.forEach((m, k) => {
        at(700 + RESOLVE_GAP * k, () => {
          const key = `${m.day}-${m.period}`;
          const wrap = wrapRef.current?.getBoundingClientRect();
          const from = rowRefs.current[k]?.getBoundingClientRect();
          const to = slotRefs.current[key]?.getBoundingClientRect();
          setResolved(k + 1);
          if (wrap && from && to) {
            const id = `${k}-${Date.now()}`;
            setFlights((f) => [
              ...f,
              {
                id,
                fx: from.left - wrap.left + from.width * 0.72,
                fy: from.top - wrap.top + from.height / 2,
                tx: to.left - wrap.left + to.width / 2,
                ty: to.top - wrap.top + to.height / 2,
                label: m.tag,
                color: m.color,
              },
            ]);
            at(800, () => {
              setFlights((f) => f.filter((x) => x.id !== id));
              setFilled((prev) => ({ ...prev, [key]: m.color }));
            });
          } else {
            setFilled((prev) => ({ ...prev, [key]: m.color }));
          }
        });
      });
      at(700 + RESOLVE_GAP * msgs.length + 500, () => {
        setStage("calm");
        at(CALM_HOLD, run);
      });
    };

    const turnOn = () => {
      if (on) return;
      on = true;
      setTap(true);
      at(300, () => {
        setAiOn(true);
        setStage("work");
      });
      at(800, () => setTap(false));
      resolveAll();
    };

    function run() {
      on = false;
      setCycle((x) => x + 1);
      setArrived(0);
      setResolved(0);
      setStage("busy");
      setToggleShown(false);
      setTap(false);
      setAiOn(false);
      setFlights([]);
      setFilled({});

      ARRIVE.forEach((t, i) =>
        at(t, () => {
          setArrived(i + 1);
          setBuzz((b) => b + 1);
        }),
      );
      at(T_TOGGLE_SHOW, () => {
        setStage("switch");
        setToggleShown(true);
        turnOnRef.current = turnOn;
      });
      at(personal ? T_WAIT_TAP : T_AUTO_TAP, turnOn);
    }

    at(personal ? 200 : 500, run);
    return () => {
      timers.forEach(clearTimeout);
      turnOnRef.current = null;
    };
  }, [locale, reduce, industry, personal, runKey]);

  function onTry(e: React.FormEvent) {
    e.preventDefault();
    const name = nameInput.trim().slice(0, 16) || c.industries[pendingIndustry].shop;
    setIndustry(pendingIndustry);
    setCustomName(name);
    setRunKey((k) => k + 1);
    // Close the phone keyboard and bring the demo phone into view
    // (on mobile the phone sits above the form, out of sight).
    (document.activeElement as HTMLElement | null)?.blur?.();
    setTimeout(() => {
      const el = wrapRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    }, 250);
  }

  const caption =
    stage === "busy"
      ? c.captionBusy
      : stage === "switch"
        ? personal
          ? c.tapHint
          : c.captionSwitch
        : stage === "work"
          ? c.captionWork
          : personal
            ? c.captionCalmFor(shopName)
            : c.captionCalm;

  // newest message on top
  const visible = msgsNow
    .map((m, i) => ({ m, i }))
    .slice(0, arrived)
    .reverse();

  return (
    <div className="mx-auto w-full max-w-[600px]">
    <div
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto flex h-[730px] w-full max-w-[600px] items-start justify-center pt-12 sm:h-[640px] sm:items-center sm:pt-0"
      style={{ perspective: 1400 }}
    >
      {/* ---------- blurred shop in the background (owner's view) ---------- */}
      <motion.div style={{ x: back.x, y: back.y }} className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-[44%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          animate={{
            background:
              stage === "calm"
                ? "radial-gradient(circle, rgba(6,199,85,0.30), rgba(31,77,58,0.16) 55%, transparent 75%)"
                : stage === "busy" || stage === "switch"
                  ? "radial-gradient(circle, rgba(217,120,154,0.30), rgba(176,138,74,0.16) 55%, transparent 75%)"
                  : "radial-gradient(circle, rgba(63,143,102,0.28), rgba(176,138,74,0.14) 55%, transparent 75%)",
          }}
          transition={{ duration: 1.2 }}
        />
        {/* bokeh lights */}
        {[
          { l: "8%", t: "18%", s: 70, c: "rgba(255,214,170,0.55)" },
          { l: "78%", t: "12%", s: 90, c: "rgba(255,190,200,0.45)" },
          { l: "86%", t: "52%", s: 60, c: "rgba(255,230,190,0.5)" },
          { l: "4%", t: "62%", s: 80, c: "rgba(190,220,200,0.45)" },
          { l: "60%", t: "4%", s: 46, c: "rgba(255,240,210,0.6)" },
        ].map((b, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full blur-xl"
            style={{ left: b.l, top: b.t, width: b.s, height: b.s, background: b.c }}
            animate={reduce ? undefined : { opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* table edge */}
        <div className="absolute bottom-0 left-[-10%] right-[-10%] h-[22%] rounded-t-[50%] bg-gradient-to-t from-[rgba(176,138,74,0.20)] to-transparent blur-md" />
      </motion.div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 h-10 w-[280px] -translate-x-1/2 rounded-[50%] bg-[rgba(28,26,23,0.22)] blur-2xl" />

      {/* ---------- the phone in your hand ---------- */}
      <motion.div
        initial={reduce ? false : { rotateX: 50, y: 80, opacity: 0 }}
        animate={{ rotateX: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.1 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10 mt-6"
      >
        <motion.div
          style={{ rotateY: reduce ? -4 : rotY, rotateX: reduce ? 16 : rotX, transformStyle: "preserve-3d" }}
        >
          {/* buzz on every new message */}
          <motion.div
            key={buzz}
            animate={reduce || stage !== "busy" ? undefined : { x: [0, -4, 4, -3, 3, 0], rotate: [0, -1, 1, -0.6, 0.6, 0] }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative rounded-[52px] bg-[linear-gradient(145deg,#8f877c_0%,#3d3833_22%,#1c1a17_50%,#4a443d_78%,#a39a8d_100%)] p-[3px] shadow-[0_60px_120px_-40px_rgba(28,26,23,0.7),0_20px_40px_-20px_rgba(28,26,23,0.35)]">
              <span className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l bg-[#6f685f]" />
              <span className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-[#6f685f]" />
              <span className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r bg-[#6f685f]" />

              <div className="relative h-[500px] w-[248px] overflow-hidden rounded-[49px] bg-black p-[9px] sm:h-[556px] sm:w-[274px]">
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[41px] bg-white">
                  {/* status bar */}
                  <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-[#1c1a17]">
                    <span>9:41</span>
                    <span className="opacity-70">● ● ▮</span>
                  </div>
                  <div className="absolute left-1/2 top-2.5 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

                  {/* inbox header */}
                  <div className="px-4 pb-2 pt-5">
                    <div className="flex items-center gap-2">
                      {locale === "zh" ? (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#06C755] text-[10px] font-black text-white">
                          LINE
                        </span>
                      ) : (
                        // WhatsApp-style chat icon for international visitors
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white">
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 4 3.5 1.5.6 2 .7 2.8.6.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
                          </svg>
                        </span>
                      )}
                      <p className="truncate text-[13px] font-bold text-[#1c1a17]">{shopName}</p>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between">
                      <p className="text-[17px] font-bold text-[#1c1a17]">{c.tab}</p>
                      {unreadText && (
                      <motion.span
                        key={unreadText}
                        initial={{ scale: 1.35 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 18 }}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                          unread > 0 ? "bg-[#ef4444] text-white" : "bg-[#06C755]/15 text-[#06a548]"
                        }`}
                      >
                        {unreadText}
                      </motion.span>
                      )}
                    </div>
                  </div>

                  {/* chat list */}
                  <div className="relative flex-1 overflow-hidden px-2">
                    <AnimatePresence initial={false}>
                      {visible.map(({ m, i }, pos) => {
                        const done = i < resolved;
                        return (
                          <motion.div
                            key={`${cycle}-${i}`}
                            ref={(el) => {
                              rowRefs.current[i] = el;
                            }}
                            layout
                            initial={{ opacity: 0, y: -24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: "spring", stiffness: 420, damping: 30 }}
                            className={`flex items-center gap-2.5 rounded-xl px-2 py-1.5 ${pos === 0 && !done && stage === "busy" ? "bg-[#fff4f4]" : ""}`}
                          >
                            <span
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                              style={{ background: m.color }}
                            >
                              {m.name.slice(0, 1)}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-baseline justify-between gap-1">
                                <p className="truncate text-[12px] font-bold text-[#1c1a17]">{m.name}</p>
                                <p className="shrink-0 text-[9.5px] text-[#9a958c]">{c.times[arrived - 1 - i] ?? ""}</p>
                              </div>
                              <AnimatePresence mode="wait" initial={false}>
                                {done ? (
                                  <motion.p
                                    key="done"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="truncate text-[11px] font-semibold text-[#06a548]"
                                  >
                                    ✓ {m.booked}
                                  </motion.p>
                                ) : (
                                  <motion.p key="ask" exit={{ opacity: 0, y: -6 }} className="truncate text-[11px] text-[#6f6a62]">
                                    {m.text}
                                  </motion.p>
                                )}
                              </AnimatePresence>
                            </div>
                            <AnimatePresence>
                              {!done && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex h-[18px] min-w-[18px] shrink-0 items-center justify-center rounded-full bg-[#ef4444] px-1 text-[10px] font-bold text-white"
                                >
                                  {m.unread}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {/* AI switch */}
                  <AnimatePresence>
                    {toggleShown && (
                      <motion.button
                        type="button"
                        onClick={() => turnOnRef.current?.()}
                        disabled={aiOn}
                        aria-label={c.ai}
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        whileTap={aiOn ? undefined : { scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        className={`relative mx-2.5 mb-6 flex items-center justify-between rounded-2xl px-3 py-2.5 text-left shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)] ${aiOn ? "cursor-default" : "cursor-pointer"}`}
                        style={{ background: aiOn ? "#1f4d3a" : "#1c1a17" }}
                      >
                        {!aiOn && personal && (
                          <motion.span
                            className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-[#06C755]"
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.1, repeat: Infinity }}
                          />
                        )}
                        <div>
                          <p className="text-[12px] font-bold text-white">🤖 {c.ai}</p>
                          <p className={`text-[10px] ${aiOn ? "text-[#bdf5cf]" : "text-white/55"}`}>{aiOn ? c.aiOn : c.aiOff}</p>
                        </div>
                        <span
                          className={`relative h-[24px] w-[42px] rounded-full transition-colors duration-300 ${aiOn ? "bg-[#06C755]" : "bg-white/25"}`}
                        >
                          <motion.span
                            className="absolute top-[2px] h-[20px] w-[20px] rounded-full bg-white shadow"
                            animate={{ left: aiOn ? 20 : 2 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                          {/* your thumb tapping */}
                          <AnimatePresence>
                            {tap && (
                              <motion.span
                                className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 bg-white/30"
                                initial={{ scale: 1.6, opacity: 0 }}
                                animate={{ scale: [1.6, 0.8, 1.2], opacity: [0, 1, 0] }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                              />
                            )}
                          </AnimatePresence>
                        </span>
                        {aiOn && !reduce && (
                          <motion.span
                            className="pointer-events-none absolute inset-0 rounded-2xl"
                            initial={{ boxShadow: "0 0 0 0 rgba(6,199,85,0.6)" }}
                            animate={{ boxShadow: "0 0 0 14px rgba(6,199,85,0)" }}
                            transition={{ duration: 0.9 }}
                          />
                        )}
                      </motion.button>
                    )}
                  </AnimatePresence>

                  <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-black/25" />
                  <motion.div className="pointer-events-none absolute inset-0" style={{ background: glare }} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ---------- caption (what the owner feels) ---------- */}
      <motion.div style={{ x: front2.x, y: front2.y }} className="absolute left-[0%] top-[3%] z-20 sm:left-[6%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={caption}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className={`max-w-[290px] rounded-2xl border px-4 py-2.5 text-[13.5px] font-bold shadow-[0_16px_40px_-18px_rgba(28,26,23,0.45)] backdrop-blur ${
              stage === "calm"
                ? "border-[#06C755]/30 bg-[#effaf3]/95 text-[#1f4d3a]"
                : stage === "busy"
                  ? "border-[#ef4444]/25 bg-[#fff5f5]/95 text-[#9b2c1c]"
                  : "border-border bg-surface/95 text-foreground"
            }`}
          >
            {caption}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ---------- shop calendar ---------- */}
      <motion.div style={{ x: front.x, y: front.y }} className="absolute bottom-[1%] right-[2%] z-20 sm:bottom-[8%] sm:right-[-4%]">
        <motion.div
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="w-[176px] rounded-2xl border border-border bg-surface/95 p-3 shadow-[0_30px_60px_-24px_rgba(28,26,23,0.5)] backdrop-blur sm:w-[210px] sm:p-3.5"
        >
          <div className="flex items-baseline justify-between">
            <p className="text-[10.5px] font-bold tracking-[0.16em] text-accent-blue">{c.calendar}</p>
            <p className="text-[12px] font-bold text-foreground">
              <motion.span key={bookingCount} initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block">
                {bookingCount}
              </motion.span>{" "}
              <span className="text-[10px] font-medium text-muted">{c.unit}</span>
            </p>
          </div>
          <div className="mt-2.5 grid grid-cols-[auto_repeat(6,1fr)] gap-1 text-center">
            <span />
            {c.days.map((d, i) => (
              <span key={`${d}-${i}`} className="text-[9.5px] text-muted">
                {d}
              </span>
            ))}
            {c.periods.map((p, r) => (
              <div key={p} className="contents">
                <span className="pr-0.5 text-right text-[9px] leading-[18px] text-muted">{p}</span>
                {c.days.map((_, d) => {
                  const k = `${d}-${r}`;
                  const color = filled[k];
                  const pre = PREFILLED.includes(k);
                  return (
                    <div
                      key={k}
                      ref={(el) => {
                        slotRefs.current[k] = el;
                      }}
                      className="relative h-[18px] rounded-[5px] transition-colors duration-300"
                      style={{ background: color ? color : pre ? "rgba(31,77,58,0.5)" : "#efebe4" }}
                    >
                      {color && !reduce && (
                        <motion.span
                          key={`${cycle}-${k}`}
                          className="absolute inset-0 rounded-[5px]"
                          style={{ boxShadow: `0 0 0 2px ${color}` }}
                          initial={{ opacity: 1, scale: 1 }}
                          animate={{ opacity: 0, scale: 2.2 }}
                          transition={{ duration: 0.8 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ---------- bookings flying from your inbox into the calendar ---------- */}
      <AnimatePresence>
        {flights.map((f) => (
          <motion.div
            key={f.id}
            className="pointer-events-none absolute left-0 top-0 z-40"
            initial={{ x: f.fx, y: f.fy, scale: 0.9, opacity: 1 }}
            animate={{
              x: [f.fx, (f.fx + f.tx) / 2 + 40, f.tx],
              y: [f.fy, Math.min(f.fy, f.ty) - 50, f.ty],
              scale: [0.9, 1.1, 0.45],
            }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <div
              className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow-[0_12px_26px_-8px_rgba(0,0,0,0.45)]"
              style={{ background: f.color }}
            >
              📅 {f.label}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ---------- calm toast ---------- */}
      <AnimatePresence>
        {stage === "calm" && !reduce && (
          <motion.div
            key={`calm-${cycle}`}
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="absolute left-[-2%] top-[42%] z-30 sm:left-[0%]"
          >
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-3.5 py-2.5 shadow-[0_24px_50px_-20px_rgba(28,26,23,0.5)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06C755] text-[14px] font-black text-white">✓</span>
              <div>
                <p className="text-[12.5px] font-bold text-foreground">{c.toastTitle(n)}</p>
                <p className="text-[11px] text-muted">🔔 {c.toastSub}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* ---------- try it with your own shop ---------- */}
    <form
      onSubmit={onTry}
      className="relative z-20 mx-auto -mt-2 w-full max-w-[460px] rounded-2xl border border-border bg-surface/95 p-4 shadow-[0_24px_50px_-28px_rgba(28,26,23,0.45)] backdrop-blur"
    >
      <p className="text-[13.5px] font-bold text-foreground">{c.tryTitle}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {c.industries.map((it, i) => (
          <button
            key={it.label}
            type="button"
            onClick={() => setPendingIndustry(i)}
            className={`rounded-full border px-3 py-1 text-[12px] font-semibold transition-colors ${
              pendingIndustry === i
                ? "border-[#1f4d3a] bg-[#1f4d3a] text-white"
                : "border-border bg-background text-muted-light hover:border-[#1f4d3a]/50"
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          maxLength={16}
          placeholder={c.tryPlaceholder}
          aria-label={c.tryPlaceholder}
          className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-[14px] text-foreground outline-none focus:border-[#1f4d3a]"
        />
        <button type="submit" className="btn-primary shrink-0 px-4 py-2.5 text-[13px]">
          {c.tryButton}
        </button>
      </div>
      <AnimatePresence>
        {personal && stage === "calm" && (
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            href={
              locale === "zh"
                ? getLineAddFriendUrl()
                : getWhatsAppUrl(`Hi AXORA, I tried the booking demo for "${shopName}" on your website. I'd like one for my business.`)
            }
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-xl bg-[#06C755] px-4 py-3 text-center text-[13.5px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(6,199,85,0.8)] hover:opacity-90"
          >
            {c.cta}
          </motion.a>
        )}
      </AnimatePresence>
    </form>
    </div>
  );
}
