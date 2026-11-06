import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  SmallBizLanding,
  type SmallBizLandingData,
} from "../../components/seo/small-biz-landing";
import { GasOrderDemo } from "../../components/demo/gas-order-demo";
import { GasExplainer } from "../../components/demo/gas-explainer";

const path = "/services/gas-delivery-system" as const;
const title = "瓦斯行叫瓦斯系統｜LINE 叫瓦斯、派送管理、客戶自動提醒｜AXORA";
const description =
  "AXORA 幫瓦斯行做 LINE 叫瓦斯系統：客人用打字或講的叫瓦斯，系統記住常客地址、自動派車、送達通知，還能預估用量提前提醒客人。不用再一直接電話抄地址，免費諮詢報價。";

export const metadata = pageMetadata({ title, description, path });

const data: SmallBizLandingData = {
  path,
  name: "瓦斯行叫瓦斯系統",
  description,
  eyebrow: "瓦斯行系統 · LINE 叫瓦斯 · 派送管理",
  headline: "客人在 LINE 說一聲，瓦斯就送到",
  intro:
    "不用再一直接電話、抄地址、記誰家要幾公斤。客人用 LINE 打字或直接講「20 公斤一桶，地址一樣」，系統自動整理好訂單，老闆按一下就能派車，送到後自動用 LINE 通知客人。長輩不會打字也能用講的叫瓦斯。",
  pains: [
    "電話一直響，忙的時候根本接不完",
    "每次都要問地址、抄地址，還常常抄錯",
    "不知道師傅送到哪了，客人一直打來問",
    "老客人瓦斯快沒了才急著叫，尖峰時間送不完",
  ],
  features: [
    { title: "LINE 叫瓦斯", desc: "客人在 LINE 打字或講語音就能叫瓦斯，不用再打電話。" },
    { title: "記住常客", desc: "說「地址一樣」「老樣子」，系統自動帶出地址和平常叫的規格。" },
    { title: "一鍵派車", desc: "訂單整理好直接派給師傅，誰送哪一單清清楚楚。" },
    { title: "送達通知", desc: "送到後自動用 LINE 通知客人，不用再一通一通回電。" },
    { title: "用量提醒", desc: "依每位客人叫瓦斯的週期，快用完前先用 LINE 提醒，生意更穩定。" },
    { title: "營業報表", desc: "每天送了幾桶、哪個規格最多、哪一區最忙，一眼就看懂。" },
  ],
  audiences: ["桶裝瓦斯行", "瓦斯分裝場", "桶裝水、米、飲水機配送", "各種到府配送的店家"],
  faqs: [
    {
      question: "年紀大的客人不會用 LINE 打字怎麼辦？",
      answer:
        "可以直接用講的。客人按住麥克風說「20 公斤一桶，地址一樣」，系統就會聽懂並整理成訂單。也可以保留電話叫瓦斯，兩種方式一起用。",
    },
    {
      question: "叫瓦斯系統要多少錢？",
      answer:
        "要看你需要的功能，例如師傅人數、要不要派送地圖、用量提醒。我們會先免費了解你的瓦斯行怎麼運作，再給你清楚的報價，先聊不用錢。",
    },
    {
      question: "可以用我們瓦斯行自己的 LINE 官方帳號嗎？",
      answer:
        "可以。系統會接上你們自己的 LINE 官方帳號，客人加你們好友就能叫瓦斯，所有客人資料也都是你們自己的。",
    },
    {
      question: "客人說聞到瓦斯味怎麼辦？",
      answer:
        "系統偵測到「聞到瓦斯味」「漏氣」這類字眼時，會先自動回覆安全提醒（關開關、開窗、不要點火），並把訂單標示為需要優先處理。",
    },
    {
      question: "系統怎麼知道哪位客人瓦斯快用完？",
      answer:
        "系統會記下每位客人每次叫瓦斯的日期，算出他大概多久用完一桶，快到的前幾天先用 LINE 問客人要不要送。是用紀錄推算的，不用裝感應器；客人說不用就不送。",
    },
    {
      question: "新開的 LINE 官方帳號沒有客人資料，要怎麼開始？",
      answer:
        "可以把你原本的客戶簿子或 Excel 交給我們幫忙輸入，再在瓦斯桶貼 QR Code 讓客人加好友。第一個月就不用再抄地址，大約兩三個月後，用量提醒就會越來越準。",
    },
  ],
};

const dataEn: Omit<SmallBizLandingData, "path" | "description"> = {
  "name": "gas delivery ordering system",
  "eyebrow": "Gas delivery · Order by chat · Dispatch management",
  "headline": "Customers message once — the gas arrives",
  "intro": "No more answering calls, writing down addresses and remembering who needs which size. Customers simply type or say “one 20 kg cylinder, same address” in a chat app, the system turns it into an order, you dispatch a driver with one tap, and the customer is notified on delivery. Older customers can just speak instead of typing.",
  "pains": [
    "The phone never stops ringing at busy times",
    "Asking for and writing down addresses every time — often wrongly",
    "Not knowing where the driver is, so customers keep calling",
    "Regular customers run out suddenly and peak hours get overloaded"
  ],
  "features": [
    {
      "title": "Order by chat",
      "desc": "Customers order by text or voice message instead of phoning."
    },
    {
      "title": "Remembers regulars",
      "desc": "“Same address” or “the usual” fills in the address and usual size automatically."
    },
    {
      "title": "One-tap dispatch",
      "desc": "Assign each order to a driver and see who is delivering what."
    },
    {
      "title": "Delivery notifications",
      "desc": "Customers are notified automatically when their gas arrives."
    },
    {
      "title": "Refill reminders",
      "desc": "Based on each customer’s ordering cycle, remind them before they run out."
    },
    {
      "title": "Reports",
      "desc": "Cylinders delivered per day, popular sizes and busiest areas at a glance."
    }
  ],
  "audiences": [
    "Gas cylinder delivery shops",
    "Gas filling stations",
    "Water, rice and water-dispenser delivery",
    "Any home-delivery business"
  ],
  "faqs": [
    {
      "question": "What about older customers who can’t type?",
      "answer": "They can just speak. Holding the microphone and saying “one 20 kg cylinder, same address” is enough for the system to understand. Phone orders can stay too — both work together."
    },
    {
      "question": "How much does the system cost?",
      "answer": "It depends on features such as the number of drivers, a delivery map or refill reminders. We learn how your shop works first and send a clear quote. Asking is free."
    },
    {
      "question": "Can we use our own business messaging account?",
      "answer": "Yes. The system connects to your own LINE Official Account, so all customer data stays yours."
    },
    {
      "question": "What if a customer says they smell gas?",
      "answer": "When the system detects words like “smell gas” or “leak”, it immediately replies with safety instructions (turn off the valve, open windows, no flames) and flags the order as urgent."
    },
    {
      "question": "How does it know who is about to run out?",
      "answer": "It records each customer’s order dates, estimates how long a cylinder lasts them, and asks a few days before whether they want a delivery. No sensors needed, and customers can always say no."
    },
    {
      "question": "We have a new account with no customer data. How do we start?",
      "answer": "Give us your existing customer book or spreadsheet to import, and put a QR code on your cylinders so customers can add you. Addresses stop needing to be written down from the first month, and reminders get more accurate after two or three months."
    }
  ]
};

export default function GasDeliverySystemPage() {
  return (
    <SmallBizLanding
      data={data}
      dataEn={dataEn}
      demo={
        <>
          <GasOrderDemo />
          <GasExplainer />
        </>
      }
    />
  );
}
