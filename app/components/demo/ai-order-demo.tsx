"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DEMO_MENU, DEMO_SHOP_NAME, type ParsedOrder } from "@/lib/demo/menu";
import { LineAddButton } from "../line/line-add-button";

type Msg =
  | { id: number; from: "user"; text: string }
  | { id: number; from: "bot"; text: string }
  | { id: number; from: "order"; order: ParsedOrder; engine: string; confirmed: boolean };

type BossOrder = { id: number; no: number; order: ParsedOrder; time: string; status: "new" | "making" | "done" };

const EXAMPLES = [
  "我要兩杯紅茶微糖少冰、一個雞腿便當，6點來拿",
  "珍奶3杯半糖去冰，排骨便當x2不要香菜，晚上七點半",
  "牛肉麵一碗、滷肉飯兩碗，還有一杯拿鐵熱的",
];

function nowHHMM() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function AiOrderDemo() {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { id: 0, from: "bot", text: `歡迎光臨${DEMO_SHOP_NAME} 👋 想吃什麼直接打字告訴我，例如「兩杯紅茶微糖少冰、一個雞腿便當」` },
  ]);
  const [loading, setLoading] = useState(false);
  const [boss, setBoss] = useState<BossOrder[]>([]);
  const [showMenu, setShowMenu] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(1);
  const noRef = useRef(101);

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
        body: JSON.stringify({ text: t }),
      });
      const data = (await res.json()) as { order?: ParsedOrder; engine?: string; error?: string };
      await new Promise((r) => setTimeout(r, 500));
      if (!res.ok || !data.order) {
        setMsgs((m) => [...m, { id: idRef.current++, from: "bot", text: data.error ?? "系統忙碌中，請再試一次。" }]);
      } else if (data.order.items.length === 0) {
        const extra = data.order.unknown.length ? `「${data.order.unknown.join("、")}」目前沒有賣喔。` : "";
        setMsgs((m) => [
          ...m,
          { id: idRef.current++, from: "bot", text: `${extra}我沒看到菜單上的餐點耶～可以點點看紅茶、珍奶、雞腿便當、牛肉麵喔！` },
        ]);
      } else {
        setMsgs((m) => [
          ...m,
          { id: idRef.current++, from: "order", order: data.order!, engine: data.engine ?? "rules", confirmed: false },
        ]);
      }
    } catch {
      setMsgs((m) => [...m, { id: idRef.current++, from: "bot", text: "網路好像不太穩，請再試一次。" }]);
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
          text: `✅ 訂單 #${no} 已送出！共 NT$${order.total}${order.pickup ? `，${order.pickup} 取餐` : ""}。做好會用 LINE 通知你～`,
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
        { id: idRef.current++, from: "bot", text: `🔔 訂單 #${target.no} 做好了，可以來取餐囉！` },
      ]);
    }
  }

  const revenue = boss.reduce((s, o) => s + o.order.total, 0);

  return (
    <section id="try-ai-order" className="section-elevated scroll-mt-24 border-y border-border py-16 lg:py-24">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-label uppercase text-accent-blue">親手試試看 · AI 智慧接單</p>
          <h2 className="section-title mt-3">客人隨便打一句話，AI 幫你變成訂單</h2>
          <p className="mt-4 text-body text-muted-light">
            這是我們做的 LINE 接單系統展示。在左邊用平常說話的方式點餐，AI 會拆出品項、數量、甜度冰塊和取餐時間，自動算好價錢；按確認後，訂單會即時出現在右邊的老闆後台。
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          {/* ---------------- customer: LINE chat ---------------- */}
          <div className="glass-card overflow-hidden p-0" style={{ transform: "none" }}>
            <div className="flex items-center justify-between bg-[#2b3a50] px-5 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f4d3a] font-serif text-sm font-bold">
                  好
                </span>
                <div>
                  <p className="text-sm font-bold">{DEMO_SHOP_NAME}</p>
                  <p className="text-[11px] opacity-70">LINE 官方帳號 · 客人看到的畫面</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMenu((v) => !v)}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold hover:bg-white/25"
              >
                {showMenu ? "收起菜單" : "看菜單"}
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
                        <span>{m.name}</span>
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
                          <p className="text-[13px] font-bold">請確認您的訂單</p>
                          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10.5px]">
                            {m.engine === "ai" ? "AI 解析" : "智慧解析"}
                          </span>
                        </div>
                        <div className="divide-y divide-[#eee] px-4">
                          {m.order.items.map((it, i) => (
                            <div key={i} className="flex items-start justify-between py-2.5">
                              <div>
                                <p className="text-[14px] font-semibold">
                                  {it.name} <span className="text-[#1f4d3a]">×{it.qty}</span>
                                </p>
                                {it.options.length > 0 && (
                                  <div className="mt-1 flex flex-wrap gap-1">
                                    {it.options.map((o) => (
                                      <span key={o} className="rounded-full bg-[#f1ede6] px-2 py-0.5 text-[11px] text-[#4a4640]">
                                        {o}
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
                          {m.order.pickup && <p>🕕 取餐時間：<b>{m.order.pickup}</b></p>}
                          {m.order.note && <p>📝 備註：{m.order.note}</p>}
                          {m.order.unknown.length > 0 && (
                            <p className="text-[#b45309]">⚠️ 菜單上沒有：{m.order.unknown.join("、")}</p>
                          )}
                          <p className="flex justify-between pt-1 text-[15px] font-bold">
                            <span>合計</span>
                            <span className="text-[#1f4d3a]">NT${m.order.total}</span>
                          </p>
                        </div>
                        <div className="px-4 pb-4">
                          {m.confirmed ? (
                            <p className="rounded-xl bg-[#06C755]/10 py-2.5 text-center text-[13px] font-bold text-[#05833c]">
                              ✓ 已確認
                            </p>
                          ) : (
                            <button
                              type="button"
                              onClick={() => confirm(m.id, m.order)}
                              className="w-full rounded-xl bg-[#06C755] py-2.5 text-[14px] font-bold text-white hover:brightness-105"
                            >
                              確認訂單
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
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={200}
                  placeholder="用平常說話的方式點餐…"
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

          {/* ---------------- boss: back office ---------------- */}
          <div className="glass-card flex flex-col p-6" style={{ transform: "none" }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-label uppercase text-accent-blue">老闆後台 · 即時</p>
                <p className="mt-1 text-lg font-bold">今日訂單</p>
              </div>
              <div className="flex gap-6 text-right">
                <div>
                  <p className="text-caption text-muted">訂單</p>
                  <p className="font-serif text-2xl text-foreground">{boss.length}</p>
                </div>
                <div>
                  <p className="text-caption text-muted">營業額</p>
                  <p className="font-serif text-2xl text-accent-blue">NT${revenue}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1 space-y-3">
              {boss.length === 0 && (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-border text-center text-muted">
                  <p className="text-3xl">🧾</p>
                  <p className="mt-3 text-body-sm">在左邊點餐並按「確認訂單」</p>
                  <p className="text-body-sm">新訂單會馬上出現在這裡</p>
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
                        #{o.no} <span className="ml-2 text-caption font-normal text-muted">{o.time} 下單 · 來自 LINE</span>
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
                        {o.status === "new" ? "新訂單" : o.status === "making" ? "製作中" : "已通知取餐"}
                      </span>
                    </div>
                    <p className="mt-2 text-body-sm text-muted-light">
                      {o.order.items.map((i) => `${i.name}×${i.qty}${i.options.length ? `（${i.options.join("、")}）` : ""}`).join("、")}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-body-sm">
                        {o.order.pickup ? `取餐 ${o.order.pickup} · ` : ""}
                        <b>NT${o.order.total}</b>
                      </p>
                      {o.status !== "done" && (
                        <button
                          type="button"
                          onClick={() => advance(o.id)}
                          className="rounded-full bg-foreground px-3.5 py-1.5 text-[12px] font-semibold text-background hover:opacity-90"
                        >
                          {o.status === "new" ? "開始製作" : "做好了，通知客人"}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-6 rounded-2xl bg-background-secondary p-4">
              <p className="text-body-sm font-semibold">想讓你的店也這樣接單？</p>
              <p className="mt-1 text-caption text-muted">接上你自己的 LINE 官方帳號和菜單，客人在 LINE 點餐，你在手機上接單。</p>
              <div className="mt-3">
                <LineAddButton variant="primary" className="px-6 py-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
