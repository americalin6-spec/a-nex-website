"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DEMO_MENU, DEMO_SHOP_NAME, DEMO_SHOP_NAME_EN, MENU_EN, OPTION_EN, type ParsedOrder } from "@/lib/demo/menu";
import { useLanguage } from "@/app/context/language-context";
import { LineAddButton } from "../line/line-add-button";
import { WhatsAppButton } from "../contact/whatsapp-button";

type Msg =
  | { id: number; from: "user"; text: string }
  | { id: number; from: "bot"; text: string }
  | { id: number; from: "order"; order: ParsedOrder; engine: string; confirmed: boolean };

type BossOrder = { id: number; no: number; order: ParsedOrder; time: string; status: "new" | "making" | "done" };

const EXAMPLES_EN = [
  "Two black teas light sugar less ice and a chicken bento, pick up at 6",
  "3 bubble teas half sugar no ice, 2 pork chop bentos no cilantro, at 7:30",
  "One beef noodle soup, two braised pork rice and a hot latte",
];

const EXAMPLES = [
  "我要兩杯紅茶微糖少冰、一個雞腿便當，6點來拿",
  "珍奶3杯半糖去冰，排骨便當x2不要香菜，晚上七點半",
  "牛肉麵一碗、滷肉飯兩碗，還有一杯拿鐵熱的",
];

type SpeechResultList = { length: number; [i: number]: { isFinal: boolean; 0: { transcript: string } } };
type SpeechRec = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: { resultIndex: number; results: SpeechResultList }) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  start: () => void;
  stop: () => void;
};
type SpeechCtor = new () => SpeechRec;

function getSpeechCtor(): SpeechCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: SpeechCtor; webkitSpeechRecognition?: SpeechCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function nowHHMM() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function AiOrderDemo() {
  const { locale } = useLanguage();
  const en = locale === "en";
  const L = (zh: string, e: string) => (en ? e : zh);
  const shopName = en ? DEMO_SHOP_NAME_EN : DEMO_SHOP_NAME;
  const itemName = (id: string, zhName: string) => (en ? MENU_EN[id]?.name ?? zhName : zhName);
  const optName = (o: string) => (en ? OPTION_EN[o] ?? o : o);
  const examples = en ? EXAMPLES_EN : EXAMPLES;
  const welcome = (isEn: boolean): Msg => ({
    id: 0,
    from: "bot",
    text: isEn
      ? `Welcome to ${DEMO_SHOP_NAME_EN} 👋 Just type what you'd like, e.g. "two black teas light sugar less ice and a chicken bento"`
      : `歡迎光臨${DEMO_SHOP_NAME} 👋 想吃什麼直接打字告訴我，例如「兩杯紅茶微糖少冰、一個雞腿便當」`,
  });
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([welcome(en)]);
  // Restart the conversation when the language changes.
  useEffect(() => {
    setMsgs([welcome(en)]);
    setBoss([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [en]);
  const [loading, setLoading] = useState(false);
  const [boss, setBoss] = useState<BossOrder[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);
  const noRef = useRef(101);
  const [voiceOK, setVoiceOK] = useState(false);
  const [listening, setListening] = useState(false);
  const recRef = useRef<SpeechRec | null>(null);
  const transcriptRef = useRef("");

  useEffect(() => {
    setVoiceOK(getSpeechCtor() !== null);
  }, []);

  function toggleVoice() {
    if (listening) {
      recRef.current?.stop();
      return;
    }
    const Ctor = getSpeechCtor();
    if (!Ctor || loading) return;
    const rec = new Ctor();
    rec.lang = en ? "en-US" : "zh-TW";
    rec.interimResults = true;
    rec.continuous = false;
    transcriptRef.current = "";
    rec.onresult = (e) => {
      let text = "";
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript;
      transcriptRef.current = text;
      setInput(text);
    };
    rec.onerror = (e) => {
      setListening(false);
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        setMsgs((m) => [...m, { id: idRef.current++, from: "bot", text: L("麥克風沒有被允許使用，請在瀏覽器設定允許麥克風，或直接打字點餐喔～", "Microphone access was blocked. Please allow it in your browser settings, or just type your order.") }]);
      }
    };
    rec.onend = () => {
      setListening(false);
      const said = transcriptRef.current.trim();
      if (said) send(said);
    };
    recRef.current = rec;
    setListening(true);
    try {
      rec.start();
    } catch {
      setListening(false);
    }
  }

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || loading) return;
    setInput("");
    setMsgs((m) => [...m, { id: idRef.current++, from: "user", text: t }]);
    setLoading(true);
    try {
      const res = await fetch("/api/demo/parse-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t, lang: en ? "en" : "zh" }),
      });
      const data = (await res.json()) as { order?: ParsedOrder; engine?: string; error?: string };
      await new Promise((r) => setTimeout(r, 500));
      if (!res.ok || !data.order) {
        setMsgs((m) => [...m, { id: idRef.current++, from: "bot", text: data.error ?? L("系統忙碌中，請再試一次。", "The system is busy — please try again.") }]);
      } else if (data.order.items.length === 0) {
        const extra = data.order.unknown.length
          ? en
            ? `Sorry, we don't have "${data.order.unknown.join(", ")}". `
            : `「${data.order.unknown.join("、")}」目前沒有賣喔。`
          : "";
        setMsgs((m) => [
          ...m,
          {
            id: idRef.current++,
            from: "bot",
            text: en
              ? `${extra}I couldn't find anything from our menu — try black tea, bubble tea, chicken bento or beef noodle soup!`
              : `${extra}我沒看到菜單上的餐點耶～可以點點看紅茶、珍奶、雞腿便當、牛肉麵喔！`,
          },
        ]);
      } else {
        setMsgs((m) => [
          ...m,
          { id: idRef.current++, from: "order", order: data.order!, engine: data.engine ?? "rules", confirmed: false },
        ]);
      }
    } catch {
      setMsgs((m) => [...m, { id: idRef.current++, from: "bot", text: L("網路好像不太穩，請再試一次。", "The connection seems unstable — please try again.") }]);
    } finally {
      setLoading(false);
    }
  }

  function confirm(msgId: number, order: ParsedOrder) {
    setMsgs((m) => m.map((x) => (x.id === msgId && x.from === "order" ? { ...x, confirmed: true } : x)));
    const no = noRef.current++;
    const bo: BossOrder = { id: Date.now(), no, order, time: nowHHMM(), status: "new" };
    setBoss((b) => [bo, ...b].slice(0, 5));
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        {
          id: idRef.current++,
          from: "bot",
          text: en
            ? `✅ Order #${no} sent! Total NT$${order.total}${order.pickup ? `, pick up ${order.pickup}` : ""}. We'll message you when it's ready.`
            : `✅ 訂單 #${no} 已送出！共 NT$${order.total}${order.pickup ? `，${order.pickup} 取餐` : ""}。做好會用 LINE 通知你～`,
        },
      ]);
    }, 400);
  }

  function advance(id: number) {
    setBoss((b) =>
      b.map((o) => (o.id === id ? { ...o, status: o.status === "new" ? "making" : "done" } : o)),
    );
    const target = boss.find((o) => o.id === id);
    if (target && target.status === "making") {
      setMsgs((m) => [
        ...m,
        { id: idRef.current++, from: "bot", text: en ? `🔔 Order #${target.no} is ready for pick-up!` : `🔔 訂單 #${target.no} 做好了，可以來取餐囉！` },
      ]);
    }
  }

  const revenue = boss.reduce((s, o) => s + o.order.total, 0);

  return (
    <section id="try-ai-order" className="section-elevated scroll-mt-24 border-y border-border py-16 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-label uppercase text-accent-blue">{L("親手試試看 · AI 智慧接單", "Try it yourself · AI order taking")}</p>
          <h2 className="section-title mt-3">{L("客人用說的、用打的，AI 都幫你變成訂單", "Customers type or speak — AI turns it into an order")}</h2>
          <p className="mt-4 text-body text-muted-light">
            {L(
              "這是我們做的 LINE 接單系統展示。在左邊按 🎤 用講的點餐，或直接打字，AI 會拆出品項、數量、甜度冰塊和取餐時間，自動算好價錢；按確認後，訂單會即時出現在右邊的老闆後台。",
              "This is a demo of the chat ordering system we build. Tap 🎤 on the left to order by voice, or just type. The AI picks out items, quantities, sugar and ice levels and pick-up time, and totals the price. Confirm it and the order appears instantly in the owner's dashboard on the right.",
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* ---------------- customer: LINE chat ---------------- */}
          <div className="glass-card overflow-hidden p-0" style={{ transform: "none" }}>
            <div className="flex items-center justify-between bg-[#2b3a50] px-5 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f4d3a] font-serif text-sm font-bold">
                  {en ? "G" : "好"}
                </span>
                <div>
                  <p className="text-sm font-bold">{shopName}</p>
                  <p className="text-[11px] opacity-70">{L("LINE 官方帳號 · 客人看到的畫面", "Messaging account · what the customer sees")}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMenu((v) => !v)}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold hover:bg-white/25"
              >
                {showMenu ? L("收起菜單", "Hide menu") : L("看菜單", "Menu")}
              </button>
            </div>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden border-b border-border bg-surface"
                >
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 px-5 py-3 text-[13px] sm:grid-cols-3">
                    {DEMO_MENU.map((m) => (
                      <p key={m.id} className="flex justify-between text-muted-light">
                        <span>{itemName(m.id, m.name)}</span>
                        <span className="text-foreground">${m.price}</span>
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={chatRef} className="h-[420px] space-y-3 overflow-y-auto bg-[#8cabd9] px-4 py-4">
              <AnimatePresence initial={false}>
                {msgs.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {m.from === "user" && (
                      <p className="max-w-[80%] rounded-2xl rounded-br-md bg-[#8de055] px-3.5 py-2 text-[14px] text-[#111]">
                        {m.text}
                      </p>
                    )}
                    {m.from === "bot" && (
                      <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-[14px] text-[#111]">
                        {m.text}
                      </p>
                    )}
                    {m.from === "order" && (
                      <div className="w-[88%] max-w-[340px] overflow-hidden rounded-2xl bg-white text-[#111] shadow-sm">
                        <div className="flex items-center justify-between bg-[#1f4d3a] px-4 py-2.5 text-white">
                          <p className="text-[13px] font-bold">{L("請確認您的訂單", "Please confirm your order")}</p>
                          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10.5px]">
                            {m.engine === "ai" ? L("AI 解析", "AI parsed") : L("智慧解析", "Smart parsed")}
                          </span>
                        </div>
                        <div className="divide-y divide-[#eee] px-4">
                          {m.order.items.map((it, i) => (
                            <div key={i} className="flex items-start justify-between py-2.5">
                              <div>
                                <p className="text-[14px] font-semibold">
                                  {itemName(it.id, it.name)} <span className="text-[#1f4d3a]">×{it.qty}</span>
                                </p>
                                {it.options.length > 0 && (
                                  <div className="mt-1 flex flex-wrap gap-1">
                                    {it.options.map((o) => (
                                      <span key={o} className="rounded-full bg-[#f1ede6] px-2 py-0.5 text-[11px] text-[#4a4640]">
                                        {optName(o)}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <p className="text-[14px] font-semibold">${it.qty * it.unitPrice}</p>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-1 bg-[#faf8f4] px-4 py-3 text-[12.5px]">
                          {m.order.pickup && <p>🕕 {L("取餐時間：", "Pick-up: ")}<b>{m.order.pickup}</b></p>}
                          {m.order.note && <p>📝 {L("備註：", "Note: ")}{m.order.note}</p>}
                          {m.order.unknown.length > 0 && (
                            <p className="text-[#b45309]">⚠️ {L("菜單上沒有：", "Not on the menu: ")}{m.order.unknown.join(en ? ", " : "、")}</p>
                          )}
                          <p className="flex justify-between pt-1 text-[15px] font-bold">
                            <span>{L("合計", "Total")}</span>
                            <span className="text-[#1f4d3a]">NT${m.order.total}</span>
                          </p>
                        </div>
                        <div className="px-4 pb-4">
                          {m.confirmed ? (
                            <p className="rounded-xl bg-[#06C755]/10 py-2.5 text-center text-[13px] font-bold text-[#05833c]">
                              ✓ {L("已確認", "Confirmed")}
                            </p>
                          ) : (
                            <button
                              type="button"
                              onClick={() => confirm(m.id, m.order)}
                              className="w-full rounded-xl bg-[#06C755] py-2.5 text-[14px] font-bold text-white hover:brightness-105"
                            >
                              {L("確認訂單", "Confirm order")}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {loading && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-[#9aa]"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border bg-surface p-3">
              <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
                {examples.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => send(e)}
                    disabled={loading}
                    className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] text-muted-light hover:border-accent-blue hover:text-foreground disabled:opacity-50"
                  >
                    {en ? (e.length > 32 ? e.slice(0, 32) + "…" : e) : e.length > 16 ? e.slice(0, 16) + "…" : e}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2"
              >
                {voiceOK && (
                  <button
                    type="button"
                    onClick={toggleVoice}
                    disabled={loading}
                    aria-label={listening ? L("停止錄音", "Stop recording") : L("用講的點餐", "Order by voice")}
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition ${
                      listening ? "bg-[#dc2626]" : "bg-[#1f4d3a] hover:brightness-110"
                    } disabled:opacity-40`}
                  >
                    {listening && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#dc2626]/50" />
                    )}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="relative">
                      <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-2.07A7 7 0 0 0 19 12h-2Z" />
                    </svg>
                  </button>
                )}
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={200}
                  placeholder={listening ? L("正在聽你說…", "Listening…") : voiceOK ? L("打字，或按麥克風用講的…", "Type, or tap the mic to speak…") : L("用平常說話的方式點餐…", "Order the way you normally talk…")}
                  className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-[15px] outline-none focus:border-accent-blue"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="shrink-0 rounded-full bg-[#06C755] px-5 text-[14px] font-bold text-white disabled:opacity-40"
                >
                  {L("送出", "Send")}
                </button>
              </form>
            </div>
          </div>

          {/* ---------------- boss: back office ---------------- */}
          <div className="glass-card flex flex-col p-6" style={{ transform: "none" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-label uppercase text-accent-blue">{L("老闆後台 · 即時", "Owner dashboard · live")}</p>
                <p className="mt-1 text-lg font-bold">{L("今日訂單", "Today’s orders")}</p>
              </div>
              <div className="flex gap-6 text-right">
                <div>
                  <p className="text-caption text-muted">{L("訂單", "Orders")}</p>
                  <p className="font-serif text-2xl text-foreground">{boss.length}</p>
                </div>
                <div>
                  <p className="text-caption text-muted">{L("營業額", "Revenue")}</p>
                  <p className="font-serif text-2xl text-accent-blue">NT${revenue}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1 space-y-3">
              {boss.length === 0 && (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-border text-center text-muted">
                  <p className="text-3xl">🧾</p>
                  <p className="mt-3 text-body-sm">{L("在左邊點餐並按「確認訂單」", "Order on the left and tap “Confirm order”")}</p>
                  <p className="text-body-sm">{L("新訂單會馬上出現在這裡", "New orders appear here instantly")}</p>
                </div>
              )}
              <AnimatePresence initial={false}>
                {boss.map((o) => (
                  <motion.div
                    key={o.id}
                    layout
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className={`rounded-2xl border p-4 ${
                      o.status === "new" ? "border-[#06C755]/60 bg-[#06C755]/[0.06]" : "border-border bg-surface"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-[15px] font-bold">
                        #{o.no} <span className="ml-2 text-caption font-normal text-muted">{en ? `Ordered ${o.time} · via chat` : `${o.time} 下單 · 來自 LINE`}</span>
                      </p>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${
                          o.status === "new"
                            ? "bg-[#2563eb]/10 text-[#1d4ed8]"
                            : o.status === "making"
                              ? "bg-[#f59e0b]/15 text-[#b45309]"
                              : "bg-[#06C755]/15 text-[#05833c]"
                        }`}
                      >
                        {o.status === "new" ? L("新訂單", "New") : o.status === "making" ? L("製作中", "Preparing") : L("已通知取餐", "Customer notified")}
                      </span>
                    </div>
                    <p className="mt-2 text-body-sm text-muted-light">
                      {o.order.items
                        .map((i) =>
                          en
                            ? `${itemName(i.id, i.name)} ×${i.qty}${i.options.length ? ` (${i.options.map(optName).join(", ")})` : ""}`
                            : `${i.name}×${i.qty}${i.options.length ? `（${i.options.join("、")}）` : ""}`,
                        )
                        .join(en ? ", " : "、")}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-body-sm">
                        {o.order.pickup ? (en ? `Pick-up ${o.order.pickup} · ` : `取餐 ${o.order.pickup} · `) : ""}
                        <b>NT${o.order.total}</b>
                      </p>
                      {o.status !== "done" && (
                        <button
                          type="button"
                          onClick={() => advance(o.id)}
                          className="rounded-full bg-foreground px-3.5 py-1.5 text-[12px] font-semibold text-background hover:opacity-90"
                        >
                          {o.status === "new" ? L("開始製作", "Start preparing") : L("做好了，通知客人", "Ready — notify customer")}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-6 rounded-2xl bg-background-secondary p-4">
              <p className="text-body-sm font-semibold">{L("想讓你的店也這樣接單？", "Want orders like this for your business?")}</p>
              <p className="mt-1 text-caption text-muted">{L("接上你自己的 LINE 官方帳號和菜單，客人在 LINE 點餐，你在手機上接單。", "We connect it to your own messaging account and menu — customers order in chat, you receive orders on your phone.")}</p>
              <div className="mt-3">
                {en ? (
                  <WhatsAppButton className="px-6 py-2.5" />
                ) : (
                  <LineAddButton variant="primary" className="px-6 py-2.5" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
