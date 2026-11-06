"use client";

import { useState } from "react";
import { useLanguage } from "@/app/context/language-context";

const INDUSTRIES_EN = [
  {
    id: "food",
    label: "Restaurants",
    chat: [
      ["Are you open today?", "Yes! 11:00–21:00 today. We’re closed on Mondays."],
      ["Can I order takeaway?", "Of course! Tell me what you’d like and when you’ll pick it up, and I’ll create the order."],
    ],
    result: "Orders are organised into a list automatically — no more copying them from chats.",
  },
  {
    id: "beauty",
    label: "Hair & nails",
    chat: [
      ["Any slots on Saturday afternoon?", "Saturday 14:00 and 16:30 are free. Which one shall I book for you?"],
      ["How much is a haircut?", "From NT$600 for women and NT$400 for men, wash included."],
    ],
    result: "Bookings go straight into your schedule, and customers get a reminder the day before — fewer no-shows.",
  },
  {
    id: "clinic",
    label: "Clinics",
    chat: [
      ["Are you open this evening?", "Yes, evening clinic is 18:00–21:00. Walk in or book online."],
      ["What should I bring?", "Please bring your health insurance card. First visit? Arrive 10 minutes early."],
    ],
    result: "Common questions are answered automatically, so the front desk isn’t stuck on the phone.",
  },
  {
    id: "school",
    label: "Tutoring & classes",
    chat: [
      ["What math classes do you have for grade 8?", "Tuesday and Thursday at 7 pm — you can also book a free trial lesson."],
      ["How much are the fees?", "12 lessons per term. Shall I ask a teacher to contact you with details?"],
    ],
    result: "Parents’ details are saved automatically, so teachers see who wants a trial and who needs a call.",
  },
  {
    id: "realty",
    label: "Real estate",
    chat: [
      ["Any two-bedroom rentals in Xinyi?", "We have 3 right now. What’s your budget? I’ll narrow it down."],
      ["Under NT$30,000", "2 match. Would you like to book a viewing this week?"],
    ],
    result: "Late-night enquiries are never missed — the next morning you see each client’s needs, neatly organised.",
  },
] as const;

const INDUSTRIES = [
  {
    id: "food",
    label: "餐飲小吃",
    chat: [
      ["今天有開嗎？", "有喔！今天 11:00–21:00，週一公休。"],
      ["可以外帶嗎？", "可以！直接告訴我要點什麼和幾點來拿，我幫你建立訂單。"],
    ],
    result: "訂單自動整理成清單，不用再一則一則對 LINE 抄單。",
  },
  {
    id: "beauty",
    label: "美髮美甲",
    chat: [
      ["週六下午還有位子嗎？", "週六 14:00 和 16:30 還有空，要幫你預約哪一個？"],
      ["剪髮多少錢？", "女生剪髮 NT$600 起，男生 NT$400，含洗髮喔。"],
    ],
    result: "自動排進預約表，前一天還會提醒客人，減少放鳥。",
  },
  {
    id: "clinic",
    label: "診所",
    chat: [
      ["今天晚上有看診嗎？", "今晚 18:00–21:00 有門診，現場掛號或線上預約都可以。"],
      ["要帶什麼？", "請攜帶健保卡，初診請提早 10 分鐘到填資料。"],
    ],
    result: "常見問題自動回答，櫃台不用一直接電話、回訊息。",
  },
  {
    id: "school",
    label: "補習班・才藝",
    chat: [
      ["國二數學有什麼班？", "有週二、週四晚上 7 點的班，也可以先預約免費試聽。"],
      ["學費怎麼算？", "一期 12 堂，詳細費用我請老師跟你聯絡好嗎？"],
    ],
    result: "家長資料自動建檔，老師一眼看到誰要試聽、誰要回電。",
  },
  {
    id: "realty",
    label: "房仲・顧問",
    chat: [
      ["信義區有兩房的租屋嗎？", "目前有 3 間，預算大概多少呢？我幫你篩選。"],
      ["預算 3 萬內", "符合的有 2 間，要約這週看屋嗎？"],
    ],
    result: "半夜進來的詢問也不漏接，隔天直接看到整理好的客戶需求。",
  },
] as const;

export function IndustryExamples() {
  const { locale } = useLanguage();
  const en = locale === "en";
  const list = en ? INDUSTRIES_EN : INDUSTRIES;
  const [active, setActive] = useState<string>(INDUSTRIES[0].id);
  const item = list.find((x) => x.id === active) ?? list[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist">
        {list.map((x) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={x.id === active}
            onClick={() => setActive(x.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
              x.id === active
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-surface/60 text-muted-light hover:text-foreground"
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl items-center gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-3 rounded-2xl bg-[#8fa9c9]/40 p-5">
          {item.chat.map(([q, a]) => (
            <div key={q} className="flex flex-col gap-2">
              <p className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-[#06C755] px-4 py-2 text-sm text-white">
                {q}
              </p>
              <p className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-white px-4 py-2 text-sm text-[#1c1a17] shadow-sm">
                {a}
              </p>
            </div>
          ))}
        </div>
        <div className="glass-card rounded-2xl p-6">
          <p className="text-label font-mono uppercase tracking-[0.2em] text-accent-blue">{en ? "What AI does for you" : "AI 幫你做的事"}</p>
          <p className="mt-3 text-body leading-relaxed text-foreground">{item.result}</p>
        </div>
      </div>
    </div>
  );
}
