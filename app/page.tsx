import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, faqPageJsonLd } from "@/lib/seo/json-ld";
import { HomePage } from "./components/home/home-page";

export const metadata = pageMetadata({
  title: "AXORA｜網站設計、App 開發、訂單與預約系統｜先聊不用錢",
  description:
    "AXORA 幫店家和企業做官方網站、手機 App、線上訂單系統、預約系統與 LINE 自動回覆。不懂電腦也沒關係，用 LINE 說需求就好，免費諮詢報價。",
  path: "/",
});

const homeFaqs = [
  {
    question: "我完全不懂電腦，也可以做網站或系統嗎？",
    answer:
      "可以。你只要告訴我們你的生意怎麼運作、哪裡最麻煩，其他交給我們。做好之後也會一步一步教你怎麼用。",
  },
  {
    question: "做一個網站或系統要多少錢？",
    answer:
      "要看你需要的功能，所以我們會先免費了解你的需求，再給你清楚的報價。先聊不用錢，報價滿意再開始。",
  },
  {
    question: "網站或系統多久可以做好？",
    answer: "簡單的網站比較快，功能多的系統需要比較久。報價時會一起告訴你預計完成的時間。",
  },
  {
    question: "做好之後壞掉或想修改怎麼辦？",
    answer: "直接用 LINE 找我們。主機、網址和日常維護我們都可以幫你處理，你不用自己煩惱。",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <HomePage />
    </>
  );
}
