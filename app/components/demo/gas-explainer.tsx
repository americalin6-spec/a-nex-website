import { SectionHeader } from "../ui/section-header";

const HISTORY = [
  { date: "8/10", label: "叫一桶" },
  { date: "9/07", label: "叫一桶" },
  { date: "10/05", label: "叫一桶" },
];

const PHASES = [
  {
    when: "第 1 天",
    color: "bg-[#c2502a]",
    title: "把客人拉進來、把資料放進去",
    points: [
      "每個瓦斯桶貼 QR Code，師傅送到時順便請客人掃",
      "老闆的客戶簿子拍照給我們，我們幫你輸入",
    ],
  },
  {
    when: "第 1 個月",
    color: "bg-accent-purple",
    title: "馬上有感：不用再抄地址",
    points: [
      "LINE 叫的、電話叫的，都記進系統",
      "老客人說「地址一樣」，就自動帶出地址",
    ],
  },
  {
    when: "2～3 個月後",
    color: "bg-accent-blue",
    title: "系統越來越懂你的客人",
    points: [
      "大部分客人都叫過 2 次以上",
      "「快用完提醒」開始準，急單變少",
    ],
  },
];

export function GasExplainer() {
  return (
    <>
      {/* How the system knows who is running low */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader
            label="用量提醒"
            title="系統怎麼知道誰快用完？"
            description="不用裝感應器。系統記下每位客人叫瓦斯的日期，算出他大概多久用完一桶，快到的時候先用 LINE 問他。"
          />
          <div className="glass-card mt-10 p-6 sm:p-10">
            <ol className="relative grid grid-cols-4 gap-2">
              <span
                aria-hidden
                className="absolute left-[12.5%] right-[12.5%] top-6 h-1 rounded-full bg-border sm:top-7"
              />
              {HISTORY.map((h) => (
                <li key={h.date} className="relative text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue text-xl sm:h-14 sm:w-14 sm:text-2xl">
                    🔥
                  </span>
                  <p className="mt-3 text-base font-bold text-foreground sm:text-xl">{h.date}</p>
                  <p className="text-xs text-muted-light sm:text-sm">{h.label}</p>
                </li>
              ))}
              <li className="relative text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c2502a] text-xl sm:h-14 sm:w-14 sm:text-2xl">
                  💬
                </span>
                <p className="mt-3 text-base font-bold text-[#c2502a] sm:text-xl">10/30</p>
                <p className="text-xs text-muted-light sm:text-sm">先 LINE 問客人</p>
              </li>
            </ol>
            <div className="mt-8 rounded-2xl bg-[#e7f0ea] px-5 py-4 text-body text-foreground sm:px-7">
              王太太大約 <strong className="text-accent-blue">28 天</strong>用完一桶，快到的前幾天，系統先問：
              <strong className="text-accent-blue">「瓦斯差不多快用完了，要幫你排禮拜四送嗎？」</strong>
            </div>
            <p className="mt-4 text-body-sm text-muted-light">
              ※ 是用過去紀錄推算的。冬天用得比較快，系統會跟著調整；客人說「還有，不用」就不送，不會亂派車。
            </p>
          </div>
        </div>
      </section>

      {/* How a brand-new LINE account gets started */}
      <section className="section-elevated py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <SectionHeader
            label="怎麼開始"
            title="新開的 LINE，一筆資料都沒有怎麼辦？"
            description="沒關係，大部分瓦斯行都是從零開始。照下面三個階段，系統會慢慢認識你的客人。"
          />
          <ol className="mt-10 space-y-4">
            {PHASES.map((p) => (
              <li key={p.when} className="glass-card flex flex-col gap-4 p-5 sm:flex-row sm:items-stretch sm:p-6">
                <span
                  className={`${p.color} flex shrink-0 items-center justify-center rounded-2xl px-5 py-3 text-lg font-bold text-white sm:w-36`}
                >
                  {p.when}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <ul className="mt-2 space-y-1 text-body-sm text-muted-light">
                    {p.points.map((pt) => (
                      <li key={pt}>・{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
