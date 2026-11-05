import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  SmallBizLanding,
  type SmallBizLandingData,
} from "../../components/seo/small-biz-landing";
import { AiOrderDemo } from "../../components/demo/ai-order-demo";

const path = "/services/ordering-system" as const;
const title = "線上訂單系統｜餐廳點餐、團購、LINE 接單系統開發｜AXORA";
const description =
  "AXORA 幫店家做線上訂單系統：客人自己點餐、下單、付款，訂單自動整理，不用再一筆一筆對 LINE。適合餐飲、團購、外送、批發，免費諮詢報價。";

export const metadata = pageMetadata({ title, description, path });

const data: SmallBizLandingData = {
  path,
  name: "線上訂單系統",
  description,
  eyebrow: "線上訂單系統 · 點餐系統 · 團購接單",
  headline: "客人自己下單，你只要看手機",
  intro:
    "不用再一筆一筆對 LINE、抄訂單、對帳到半夜。客人用手機就能點餐、下單、付款，所有訂單自動整理成一張清單。不懂電腦也沒關係，用 LINE 跟我們說需求就好。",
  pains: [
    "每天晚上對 LINE 訂單、對帳到半夜",
    "訂單抄錯、漏單，客人來抱怨",
    "團購結單要一個一個私訊算錢",
    "不知道哪個商品賣最好、這個月賺多少",
  ],
  features: [
    { title: "線上點餐、下單", desc: "客人用手機選商品、填數量，30 秒完成下單。" },
    { title: "線上付款", desc: "可串接信用卡、轉帳等付款方式，自動標示是否付款。" },
    { title: "訂單自動整理", desc: "新訂單、待出貨、已完成一目了然，不再漏單。" },
    { title: "LINE 通知", desc: "有新訂單時通知你，也可以自動通知客人訂單狀態。" },
    { title: "營業報表", desc: "每天、每月營業額和熱賣商品，打開手機就看得到。" },
    { title: "客人資料", desc: "記住每位客人買過什麼，方便做回購和優惠。" },
  ],
  audiences: ["餐廳、小吃店", "飲料店、甜點店", "團購主", "外送、宅配", "批發、叫貨", "直播拍賣"],
  faqs: [
    {
      question: "線上訂單系統跟用 LINE 接單有什麼不同？",
      answer:
        "用 LINE 接單要自己一則一則看訊息、抄訂單、對帳；線上訂單系統讓客人自己填好下單，訂單和付款狀態自動整理，你只要照清單出貨。",
    },
    {
      question: "做一個線上訂單系統要多少錢？",
      answer:
        "要看你需要的功能，例如要不要線上付款、會員、報表。我們會先免費了解你的需求，再給你清楚的報價，先聊不用錢。",
    },
    {
      question: "我不懂電腦，可以自己管理訂單嗎？",
      answer: "可以。後台設計得像手機 App 一樣簡單，上線時也會一步一步教你怎麼用。",
    },
    {
      question: "可以跟 LINE 官方帳號一起用嗎？",
      answer: "可以。我們可以把訂單連結放在 LINE 官方帳號裡，客人點一下就能下單，新訂單也能用 LINE 通知你。",
    },
  ],
};

export default function OrderingSystemPage() {
  return <SmallBizLanding data={data} demo={<AiOrderDemo />} />;
}
