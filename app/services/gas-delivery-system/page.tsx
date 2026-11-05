import { pageMetadata } from "@/lib/seo/page-metadata";
import {
  SmallBizLanding,
  type SmallBizLandingData,
} from "../../components/seo/small-biz-landing";
import { GasOrderDemo } from "../../components/demo/gas-order-demo";

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
  ],
};

export default function GasDeliverySystemPage() {
  return <SmallBizLanding data={data} demo={<GasOrderDemo />} />;
}
