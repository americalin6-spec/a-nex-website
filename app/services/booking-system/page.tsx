import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  SmallBizLanding,
  type SmallBizLandingData,
} from "../../components/seo/small-biz-landing";

const path = "/services/booking-system" as const;
const title = "線上預約系統｜美髮、美甲、課程、工作室預約系統開發｜AXORA";
const description =
  "AXORA 幫店家做線上預約系統：客人自己選時段，自動提醒，不再撞期、不再漏約。適合美髮、美甲、美容、課程、診所與工作室，免費諮詢報價。";

export const metadata = pageMetadata({ title, description, path });

const data: SmallBizLandingData = {
  path,
  name: "線上預約系統",
  description,
  eyebrow: "線上預約系統 · 預約排程 · 自動提醒",
  headline: "客人自己預約，不再撞期漏約",
  intro:
    "不用再一直接電話、回訊息排時間。客人用手機就能看到空檔、自己預約，系統自動提醒你和客人。不懂電腦也沒關係，用 LINE 跟我們說需求就好。",
  pains: [
    "一直接電話、回訊息排時間，做事一直被打斷",
    "時間記錯、兩個客人約到同一個時段",
    "客人臨時沒來，空出來的時段浪費掉",
    "不同設計師、老師的班表很難安排",
  ],
  features: [
    { title: "線上選時段", desc: "客人看得到可以預約的時間，自己選、自己約。" },
    { title: "自動提醒", desc: "預約前自動通知客人，減少臨時沒來。" },
    { title: "多人排班", desc: "可以分設計師、老師或包廂，各自有自己的時段。" },
    { title: "LINE 通知", desc: "有新預約或取消時，馬上用 LINE 通知你。" },
    { title: "預約紀錄", desc: "每位客人來過幾次、做過什麼服務，都記得清清楚楚。" },
    { title: "營業報表", desc: "每天、每月的預約數和營業額，一眼就看懂。" },
  ],
  audiences: ["美髮、美甲", "美容、按摩", "課程、教室", "診所、諮詢", "攝影、工作室", "場地、包廂租借"],
  faqs: [
    {
      question: "線上預約系統可以避免撞期嗎？",
      answer: "可以。客人只能選還有空的時段，被約走的時間會自動關閉，不會再有兩個人約到同一時間。",
    },
    {
      question: "做一個預約系統要多少錢？",
      answer:
        "要看你需要的功能，例如幾位人員排班、要不要線上付訂金。我們會先免費了解你的需求，再給你清楚的報價，先聊不用錢。",
    },
    {
      question: "客人一定要下載 App 才能預約嗎？",
      answer: "不用。客人用手機瀏覽器或 LINE 點連結就能預約，不需要另外下載。",
    },
    {
      question: "可以讓客人從 LINE 官方帳號預約嗎？",
      answer: "可以。我們可以把預約按鈕放進 LINE 官方帳號，客人點一下就能預約，預約成功也會用 LINE 通知。",
    },
  ],
};

export default function BookingSystemPage() {
  return <SmallBizLanding data={data} />;
}
