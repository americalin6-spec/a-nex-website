"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GAS_SHOP_NAME, REGULAR, type GasOrder } from "@/lib/demo/gas";
import { LineAddButton } from "../line/line-add-button";

type Msg =
  | { id: number; from: "user" | "bot"; text: string }
  | { id: number; from: "order"; order: GasOrder; engine: string; confirmed: boolean };

type NewMsg =
  | { from: "user" | "bot"; text: string }
  | { from: "order"; order: GasOrder; engine: string; confirmed: boolean };

type Stage = "idle" | "received" | "delivering" | "delivered";

const EXAMPLES = [
  "老闆，20公斤的送一桶，地址一樣，下午三點前",
  "瓦斯快沒了，老樣子幫我送，越快越好",
  "我要兩桶16公斤的，送到台北市大安區復興南路一段200號3樓，到之前先打電話",
];

// route on the mini map (viewBox 0 0 320 200)
const ROUTE = [
  { x: 40, y: 165 },
  { x: 40, y: 120 },
  { x: 130, y: 120 },
  { x: 130, y: 60 },
  { x: 230, y: 60 },
  { x: 230, y: 40 },
  { x: 280, y: 40 },
];

type SpeechRec = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((e: { results: { length: number; [i: number]: { 0: { transcript: string } } } }) => void) | null;
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

export function GasOrderDemo() {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 0, from: "bot", text: `${REGULAR.name}您好 👋 要叫瓦斯直接說就可以，例如「20 公斤一桶，地址一樣」` },
  ]);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");
  const [active, setActive] = useState<GasOrder | null>(null);
  const [eta, setEta] = useState(12);
  const [voiceOK, setVoiceOK] = useState(false);
  const [listening, setListening] = useState(false);
  const recRef = useRef<SpeechRec | null>(null);
  const said = useRef("");
  const chatRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);

  useEffect(() => {
    setVoiceOK(getSpeechCtor() !== null);
  }, []);
  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading]);

  const push = (m: NewMsg) =>
    setMsgs((prev) => [...prev, { ...m, id: idRef.current++ } as Msg]);

  async function send(text: string) {
    const t = text.trim();
    if (!t || loading) return;
    setInput("");
    push({ from: "user", text: t });
    setLoading(true);
    try {
      const res = await fetch("/api/demo/parse-gas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: t }),
      });
      const data = (await res.json()) as { order?: GasOrder; engine?: string; leak?: boolean; error?: string };
      await new Promise((r) => setTimeout(r, 450));
      if (!res.ok || !data.order) {
        push({ from: "bot", text: data.error ?? "系統忙碌中，請再試一次。" });
        return;
      }
      if (data.leak) {
        push({
          from: "bot",
          text: "⚠️ 安全提醒：如果聞到瓦斯味，請先關掉瓦斯開關、打開窗戶，不要開關電器或點火，我們會請師傅順便檢查。",
        });
      }
      push({ from: "order", order: data.order, engine: data.engine ?? "rules", confirmed: false });
    } catch {
      push({ from: "bot", text: "網路好像不太穩，請再試一次。" });
    } finally {
      setLoading(false);
    }
  }

  function confirm(msgId: number, order: GasOrder) {
    setMsgs((m) => m.map((x) => (x.id === msgId && x.from === "order" ? { ...x, confirmed: true } : x)));
    setActive(order);
    setStage("received");
    setEta(12);
    setTimeout(() => push({ from: "bot", text: `✅ 已收到！共 NT$${order.total}，${order.time ?? "會盡快"}幫您送到。` }), 400);
  }

  function dispatch() {
    if (stage !== "received") return;
    setStage("delivering");
    push({ from: "bot", text: "🛵 師傅阿明已出發，大約 12 分鐘到，可以在地圖上看他的位置～" });
    let n = 12;
    const iv = setInterval(() => {
      n -= 1;
      setEta(n);
      if (n <= 0) {
        clearInterval(iv);
        setStage("delivered");
        push({ from: "bot", text: "🔔 瓦斯送到了！師傅已幫您裝好並檢查管線 ✓ 謝謝您～" });
      }
    }, 450);
  }

  function reset() {
    setStage("idle");
    setActive(null);
  }

  function toggleVoice() {
    if (listening) {
      recRef.current?.stop();
      return;
    }
    const Ctor = getSpeechCtor();
    if (!Ctor || loading) return;
    const rec = new Ctor();
    rec.lang = "zh-TW";
    rec.interimResults = true;
    rec.continuous = false;
    said.current = "";
    rec.onresult = (e) => {
      let s = "";
      for (let i = 0; i < e.results.length; i++) s += e.results[i][0].transcript;
      said.current = s;
      setInput(s);
    };
    rec.onerror = (e) => {
      setListening(false);
      if (e.error === "not-allowed" || e.error === "service-not-allowed")
        push({ from: "bot", text: "麥克風沒有被允許使用，請在瀏覽器設定允許，或直接打字喔～" });
    };
    rec.onend = () => {
      setListening(false);
      if (said.current.trim()) send(said.current);
    };
    recRef.current = rec;
    setListening(true);
    try {
      rec.start();
    } catch {
      setListening(false);
    }
  }

  const truckKeys = {
    x: ROUTE.map((p) => p.x),
    y: ROUTE.map((p) => p.y),
  };

  return (
    <section id="try-gas" className="scroll-mt-24 border-b border-border py-16 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-label uppercase text-accent-blue">親手試試看 · AI 叫瓦斯</p>
          <h2 className="section-title mt-3">長輩用講的叫瓦斯，系統自動派車</h2>
          <p className="mt-4 text-body text-muted-light">
            這是我們做的瓦斯行 LINE 叫瓦斯系統展示。客人說「地址一樣」「老樣子」，AI 會自動帶出常客資料；老闆按一下派車，地圖上就看得到師傅送到哪了。
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* ---------------- customer LINE ---------------- */}
          <div className="glass-card overflow-hidden p-0" style={{ transform: "none" }}>
            <div className="flex items-center justify-between bg-[#2b3a50] px-5 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c2410c] text-base">🔥</span>
                <div>
                  <p className="text-sm font-bold">{GAS_SHOP_NAME}</p>
                  <p className="text-[11px] opacity-70">LINE 官方帳號 · 客人看到的畫面</p>
                </div>
              </div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold">
                常客 · {REGULAR.name} · 已記住地址
              </span>
            </div>

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
                      <p className="max-w-[80%] rounded-2xl rounded-br-md bg-[#8de055] px-3.5 py-2 text-[14px] text-[#111]">{m.text}</p>
                    )}
                    {m.from === "bot" && (
                      <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-[14px] text-[#111]">{m.text}</p>
                    )}
                    {m.from === "order" && (
                      <div className="w-[88%] max-w-[340px] overflow-hidden rounded-2xl bg-white text-[#111] shadow-sm">
                        <div className="flex items-center justify-between bg-[#c2410c] px-4 py-2.5 text-white">
                          <p className="text-[13px] font-bold">請確認叫瓦斯內容</p>
                          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10.5px]">
                            {m.engine === "ai" ? "AI 解析" : "智慧解析"}
                          </span>
                        </div>
                        <div className="divide-y divide-[#eee] px-4">
                          {m.order.items.map((it) => (
                            <div key={it.id} className="flex justify-between py-2.5 text-[14px]">
                              <span className="font-semibold">
                                {it.name} <span className="text-[#c2410c]">×{it.qty}</span>
                              </span>
                              <span className="font-semibold">${it.qty * it.unitPrice}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-1 bg-[#faf8f4] px-4 py-3 text-[12.5px]">
                          <p>
                            📍 {m.order.address}
                            {m.order.addressFromMemory && (
                              <span className="ml-1 rounded-full bg-[#1f4d3a]/10 px-1.5 py-0.5 text-[10.5px] text-[#1f4d3a]">
                                已記住的地址
                              </span>
                            )}
                          </p>
                          {m.order.time && <p>🕒 送達時間：<b>{m.order.time}</b></p>}
                          {m.order.note && <p>📝 {m.order.note}</p>}
                          <p className="flex justify-between pt-1 text-[15px] font-bold">
                            <span>合計（示範價格）</span>
                            <span className="text-[#c2410c]">NT${m.order.total}</span>
                          </p>
                        </div>
                        <div className="px-4 pb-4">
                          {m.confirmed ? (
                            <p className="rounded-xl bg-[#06C755]/10 py-2.5 text-center text-[13px] font-bold text-[#05833c]">✓ 已確認</p>
                          ) : (
                            <button
                              type="button"
                              onClick={() => confirm(m.id, m.order)}
                              className="w-full rounded-xl bg-[#06C755] py-2.5 text-[14px] font-bold text-white hover:brightness-105"
                            >
                              確認叫瓦斯
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
                {EXAMPLES.map((e) => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => send(e)}
                    disabled={loading}
                    className="shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] text-muted-light hover:border-accent-blue hover:text-foreground disabled:opacity-50"
                  >
                    {e.length > 16 ? e.slice(0, 16) + "…" : e}
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
                    aria-label={listening ? "停止錄音" : "用講的叫瓦斯"}
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${
                      listening ? "bg-[#dc2626]" : "bg-[#c2410c] hover:brightness-110"
                    } disabled:opacity-40`}
                  >
                    {listening && <span className="absolute inset-0 animate-ping rounded-full bg-[#dc2626]/50" />}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="relative">
                      <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-2.07A7 7 0 0 0 19 12h-2Z" />
                    </svg>
                  </button>
                )}
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={200}
                  placeholder={listening ? "正在聽你說…" : "打字，或按麥克風用講的…"}
                  className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-[15px] outline-none focus:border-accent-blue"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="shrink-0 rounded-full bg-[#06C755] px-5 text-[14px] font-bold text-white disabled:opacity-40"
                >
                  送出
                </button>
              </form>
            </div>
          </div>

          {/* ---------------- boss: dispatch board ---------------- */}
          <div className="glass-card flex flex-col p-6" style={{ transform: "none" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-label uppercase text-accent-blue">瓦斯行後台 · 派送看板</p>
                <p className="mt-1 text-lg font-bold">
                  {stage === "idle" && "等待新訂單"}
                  {stage === "received" && "新訂單！請派車"}
                  {stage === "delivering" && `配送中 · 約 ${eta} 分鐘到`}
                  {stage === "delivered" && "已送達 ✓"}
                </p>
              </div>
              <div className="flex gap-1.5">
                {(["received", "delivering", "delivered"] as Stage[]).map((s, i) => {
                  const order = ["idle", "received", "delivering", "delivered"];
                  const on = order.indexOf(stage) >= i + 1;
                  return <span key={s} className={`h-2 w-8 rounded-full ${on ? "bg-[#06C755]" : "bg-[#e4ded4]"}`} />;
                })}
              </div>
            </div>

            {/* mini map */}
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-border bg-[#eef1ea]">
              <svg viewBox="0 0 320 200" className="block h-auto w-full">
                {[30, 75, 120, 165].map((y) => (
                  <rect key={`h${y}`} x="0" y={y - 6} width="320" height="12" fill="#fff" />
                ))}
                {[40, 130, 230, 280].map((x) => (
                  <rect key={`v${x}`} x={x - 6} y="0" width="12" height="200" fill="#fff" />
                ))}
                <rect x="150" y="85" width="60" height="25" rx="4" fill="#d6e4cf" />
                <rect x="55" y="15" width="60" height="45" rx="4" fill="#d6e4cf" />
                <polyline
                  points={ROUTE.map((p) => `${p.x},${p.y}`).join(" ")}
                  fill="none"
                  stroke={stage === "idle" ? "transparent" : "#c2410c"}
                  strokeWidth="4"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                />
                {/* shop */}
                <g transform="translate(40 165)">
                  <circle r="11" fill="#1f4d3a" />
                  <text y="4" textAnchor="middle" fontSize="11" fill="#fff">店</text>
                </g>
                {/* customer */}
                <g transform="translate(280 40)">
                  <circle r="13" fill={stage === "delivered" ? "#06C755" : "#c2410c"} opacity="0.2">
                    <animate attributeName="r" values="11;18;11" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="10" fill={stage === "delivered" ? "#06C755" : "#c2410c"} />
                  <text y="4" textAnchor="middle" fontSize="10" fill="#fff">家</text>
                </g>
                {/* truck */}
                {stage !== "idle" && (
                  <motion.g
                    initial={{ x: ROUTE[0].x, y: ROUTE[0].y }}
                    animate={
                      stage === "delivering"
                        ? { x: truckKeys.x, y: truckKeys.y }
                        : stage === "delivered"
                          ? { x: ROUTE[ROUTE.length - 1].x, y: ROUTE[ROUTE.length - 1].y }
                          : { x: ROUTE[0].x, y: ROUTE[0].y }
                    }
                    transition={{ duration: stage === "delivering" ? 5.4 : 0.3, ease: "linear" }}
                  >
                    <circle r="12" fill="#fff" stroke="#c2410c" strokeWidth="2" />
                    <text y="5" textAnchor="middle" fontSize="13">🛵</text>
                  </motion.g>
                )}
              </svg>
              <div className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-2 py-1 text-[11px] text-muted">示意地圖</div>
            </div>

            {/* active order */}
            <div className="mt-4 min-h-[118px] rounded-2xl border border-border bg-surface p-4">
              {!active ? (
                <p className="py-6 text-center text-body-sm text-muted">在左邊叫瓦斯並按「確認」，訂單會出現在這裡</p>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[15px] font-bold">
                        {REGULAR.name} · {active.items.map((i) => `${i.name.replace("桶裝瓦斯 ", "")}×${i.qty}`).join("、")}
                      </p>
                      <p className="mt-1 text-caption text-muted">📍 {active.address}</p>
                      {active.note && <p className="text-caption text-muted">📝 {active.note}</p>}
                    </div>
                    <p className="shrink-0 font-serif text-xl text-accent-blue">NT${active.total}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-caption text-muted">師傅：阿明 · 機車</p>
                    {stage === "received" && (
                      <button
                        type="button"
                        onClick={dispatch}
                        className="rounded-full bg-[#c2410c] px-4 py-1.5 text-[13px] font-bold text-white hover:brightness-110"
                      >
                        🛵 派車出發
                      </button>
                    )}
                    {stage === "delivered" && (
                      <button
                        type="button"
                        onClick={reset}
                        className="rounded-full border border-border px-4 py-1.5 text-[13px] font-semibold hover:border-foreground"
                      >
                        再試一次
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* smart reminder */}
            <div className="mt-4 rounded-2xl bg-[#c2410c]/[0.07] p-4">
              <p className="text-body-sm font-bold">🧠 智慧提醒</p>
              <p className="mt-1 text-caption text-muted-light">
                {REGULAR.name}平均每 {REGULAR.avgDays} 天叫一次瓦斯（上次 {REGULAR.lastOrder}）。系統會在快用完前 3 天，自動用 LINE 問她要不要送新的一桶。
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e4ded4]">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#f59e0b] to-[#c2410c]" />
              </div>
              <p className="mt-1 text-right text-[11px] text-muted">預估已用 86%</p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <a href="/services/gas-delivery-system" className="text-caption text-accent-blue underline-offset-4 hover:underline">
                想讓你的瓦斯行也這樣接單？看瓦斯行系統 →
              </a>
              <LineAddButton variant="primary" className="px-5 py-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
