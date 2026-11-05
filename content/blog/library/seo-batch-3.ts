import { createArticleFromTemplate } from "../template";
import type { BlogPost } from "../types";

const SITE = "https://www.axora.tw";

/* ------------------------------------------------------------------ */
/* 1. 餐廳線上點餐系統                                                 */
/* ------------------------------------------------------------------ */
export const restaurantOnlineOrdering = createArticleFromTemplate({
  id: "301",
  slug: "restaurant-online-ordering-system",
  category: "Website Development",
  tags: ["LINE", "Automation"],
  seoTitle: "餐廳線上點餐系統怎麼選？老闆必看 6 個重點｜AXORA",
  metaDescription:
    "餐廳、飲料店、小吃店想導入線上點餐系統？從手機點餐、線上付款、LINE 通知到營業報表，用白話整理老闆挑選點餐系統必看的 6 個重點與常見問題。",
  keywords: [
    "線上點餐系統",
    "餐廳點餐系統",
    "飲料店點餐系統",
    "手機點餐",
    "QR Code 點餐",
    "LINE 點餐",
    "線上訂單系統",
    "小吃店點餐系統",
  ],
  canonical: "/blog/restaurant-online-ordering-system",
  ogImage: "/og-image-v2.png",
  h1: "餐廳線上點餐系統怎麼選？老闆必看 6 個重點",
  intro:
    "尖峰時間電話一直響、LINE 訊息一直跳、手寫單抄錯又漏單，是很多餐廳和飲料店老闆每天的日常。線上點餐系統可以讓客人自己用手機點餐、付款，訂單自動整理好，你只要照清單出餐。但市面上選擇很多，到底該怎麼挑？這篇用白話整理 6 個重點，幫你少走冤枉路。",
  description:
    "用白話整理餐廳、飲料店挑選線上點餐系統必看的 6 個重點：手機點餐、付款、LINE 通知、報表與費用。",
  coverImage: "/og-image-v2.png",
  publishedAt: "2026-11-05",
  updatedAt: "2026-11-05",
  popularScore: 95,
  featured: true,
  sections: [
    {
      id: "why-online-ordering",
      heading: "為什麼餐廳需要線上點餐系統？",
      level: 2,
      paragraphs: [
        "最直接的好處是「省人力、少出錯」。客人自己選品項、填數量、備註甜度冰塊，訂單內容清清楚楚，不會再因為聽錯、抄錯而重做。尖峰時段也不用專門派一個人接電話。",
        "第二個好處是「看得到數字」。每天賣了多少、哪個品項最熱賣、哪個時段最忙，系統都會自動統計，進貨和排班更好安排。",
      ],
    },
    {
      id: "point-1-easy-for-customers",
      heading: "重點 1：客人用起來要夠簡單",
      level: 2,
      paragraphs: [
        "點餐流程越短越好。最理想的是客人掃 QR Code 或點 LINE 連結，不用下載 App、不用註冊，三十秒內就能完成點餐。步驟太多，客人就會放棄，回頭又打電話給你。",
      ],
    },
    {
      id: "point-2-payment",
      heading: "重點 2：支援你需要的付款方式",
      level: 2,
      paragraphs: [
        "有些店希望客人先付款再出餐，避免做好沒人來拿；有些店則習慣到店付款。挑系統時確認能不能串接信用卡、行動支付，或至少能清楚標示「已付款／未付款」。",
      ],
    },
    {
      id: "point-3-line-notification",
      heading: "重點 3：新訂單要能即時通知",
      level: 2,
      paragraphs: [
        "台灣客人習慣用 LINE，老闆也習慣看 LINE。如果系統能在有新訂單時用 LINE 通知你，或在餐點做好時自動通知客人取餐，會比一直盯著電腦螢幕方便很多。",
      ],
    },
    {
      id: "point-4-menu-management",
      heading: "重點 4：菜單要能自己改",
      level: 2,
      paragraphs: [
        "今天某道菜賣完、下週要換季節菜單、想做限時優惠，最好你自己在手機上就能改，不用每次都找工程師。挑系統時，請對方實際示範一次改菜單的流程。",
      ],
    },
    {
      id: "point-5-reports",
      heading: "重點 5：報表要一眼看得懂",
      level: 2,
      paragraphs: [
        "好的報表不是數字越多越好，而是打開就知道今天賣多少、本月比上月多還是少、哪個品項最好賣。看不懂的報表，最後一定不會去看。",
      ],
    },
    {
      id: "point-6-cost-and-support",
      heading: "重點 6：費用透明、有人幫你顧",
      level: 2,
      paragraphs: [
        "點餐系統常見的收費方式有「一次買斷」和「月租」兩種。買斷前期花費較高，月租則每月固定支出、通常包含主機與維護。不管哪一種，都要事先問清楚：有沒有抽成、之後改功能怎麼算、系統壞掉找誰。",
        "如果你想要符合自己店裡流程的點餐系統，而不是硬套現成的版型，可以參考 AXORA 的線上訂單系統服務（" +
          SITE +
          "/services/ordering-system）。",
      ],
    },
    {
      id: "summary",
      heading: "總結：先從最痛的地方開始",
      level: 2,
      paragraphs: [
        "不用一次做到最完整。先想清楚你現在最痛的是「接單太亂」、「常漏單」還是「不知道賺多少」，從那一塊開始做，用一兩個月看看效果，再慢慢加功能，是最不容易失敗的方式。",
      ],
    },
  ],
  faq: [
    {
      question: "線上點餐系統一定要客人下載 App 嗎？",
      answer:
        "不用。現在大多數點餐系統都可以用手機瀏覽器或 LINE 直接打開，客人掃 QR Code 或點連結就能點餐。",
    },
    {
      question: "小店也適合用線上點餐系統嗎？",
      answer:
        "適合。尤其是外帶比例高、常用 LINE 或電話接單的小店，導入後最能感受到省時間、少出錯的效果。",
    },
    {
      question: "點餐系統可以跟 LINE 官方帳號一起用嗎？",
      answer:
        "可以。可以把點餐連結放在 LINE 官方帳號的圖文選單，客人點一下就能點餐，新訂單也能用 LINE 通知你。",
    },
  ],
  cta: {
    title: "想做自己店裡的點餐系統？先聊聊，不用錢",
    description:
      "加 AXORA 的 LINE 官方帳號 @460jxzer，告訴我們你的店和目前接單方式，我們免費幫你評估怎麼做最省事。",
  },
});

/* ------------------------------------------------------------------ */
/* 2. 美髮美甲預約系統                                                 */
/* ------------------------------------------------------------------ */
export const salonBookingSystem = createArticleFromTemplate({
  id: "302",
  slug: "salon-booking-system",
  category: "Website Development",
  tags: ["LINE", "Automation"],
  seoTitle: "美髮、美甲預約系統推薦：不用再接電話排時間｜AXORA",
  metaDescription:
    "美髮、美甲、美容、工作室想用線上預約系統？整理預約系統能解決的問題、必備功能、常見收費方式，以及導入前要先想清楚的事。",
  keywords: [
    "預約系統",
    "線上預約系統",
    "美髮預約系統",
    "美甲預約系統",
    "美容預約系統",
    "工作室預約",
    "LINE 預約",
    "預約排班系統",
  ],
  canonical: "/blog/salon-booking-system",
  ogImage: "/og-image-v2.png",
  h1: "美髮、美甲預約系統推薦：不用再接電話排時間",
  intro:
    "幫客人剪頭髮剪到一半要接電話、做指甲做到一半要回 LINE 排時間，還常常記錯時段讓兩個客人撞在一起。線上預約系統讓客人自己看空檔、自己預約，系統自動提醒，你可以專心服務眼前的客人。這篇整理預約系統能幫你什麼、該有哪些功能，以及導入前要注意的事。",
  description:
    "整理美髮、美甲、美容與工作室導入線上預約系統的好處、必備功能與常見問題。",
  coverImage: "/og-image-v2.png",
  publishedAt: "2026-11-05",
  updatedAt: "2026-11-05",
  popularScore: 94,
  sections: [
    {
      id: "problems",
      heading: "沒有預約系統，常見的 4 個麻煩",
      level: 2,
      paragraphs: [
        "第一，工作一直被打斷：電話和訊息隨時進來，服務客人時很難專心。第二，容易撞期或記錯：靠紙本或腦袋記預約，忙起來就出錯。第三，客人臨時沒來：沒有提醒，空出來的時段就浪費掉。第四，多位設計師的班表很難排：誰哪天休假、誰幾點有空，全部要人工對。",
      ],
    },
    {
      id: "must-have-features",
      heading: "預約系統必備的 5 個功能",
      level: 2,
      paragraphs: [
        "一、客人自己選時段：只顯示還有空的時間，被約走的時段自動關閉，從根本避免撞期。",
        "二、自動提醒：預約前一天或前幾小時自動通知客人，能明顯減少臨時沒來的情況。",
        "三、多人排班：可以分設計師、美甲師或包廂，各自有自己的時段和休假日。",
        "四、LINE 通知：有新預約、取消或改期時，馬上用 LINE 通知你。",
        "五、客人紀錄：每位客人來過幾次、上次做什麼服務、喜好是什麼，下次服務更貼心。",
      ],
    },
    {
      id: "deposit",
      heading: "要不要收訂金？",
      level: 2,
      paragraphs: [
        "如果你的服務時間長、材料成本高，例如染燙、光療、課程，可以考慮在預約時先收訂金，能大幅降低放鳥率。預約系統可以串接線上付款，客人付完訂金才算預約成功。",
      ],
    },
    {
      id: "ready-made-vs-custom",
      heading: "現成預約平台還是自己做？",
      level: 2,
      paragraphs: [
        "現成平台上手快，但常有抽成、版面無法客製、客人資料不在自己手上等問題。自己做的預約系統前期需要花一點費用，但流程可以完全照你的店來設計，客人資料也是你自己的，長期來看更適合想經營品牌和回頭客的店家。",
        "想了解客製預約系統能怎麼做，可以參考 AXORA 的線上預約系統服務（" +
          SITE +
          "/services/booking-system）。",
      ],
    },
  ],
  faq: [
    {
      question: "客人一定要下載 App 才能預約嗎？",
      answer: "不用。客人用手機瀏覽器或 LINE 點連結就能預約，不需要另外下載。",
    },
    {
      question: "預約系統可以避免撞期嗎？",
      answer:
        "可以。客人只能選還有空的時段，被約走的時間會自動關閉，不會再有兩個人約到同一時間。",
    },
    {
      question: "只有我一個人的工作室也需要預約系統嗎？",
      answer:
        "越是一個人顧店，越需要。預約系統等於幫你請了一個 24 小時的助理，你服務客人時，它幫你接預約。",
    },
  ],
  cta: {
    title: "想讓客人自己預約？先聊聊，不用錢",
    description:
      "加 AXORA 的 LINE 官方帳號 @460jxzer，告訴我們你的店和目前怎麼排預約，我們免費幫你評估。",
  },
});

/* ------------------------------------------------------------------ */
/* 3. LINE 官方帳號接單                                                */
/* ------------------------------------------------------------------ */
export const lineOfficialAccountOrders = createArticleFromTemplate({
  id: "303",
  slug: "line-official-account-orders",
  category: "LINE OA",
  tags: ["LINE", "Automation"],
  seoTitle: "LINE 官方帳號怎麼接單？小店老闆完整教學｜AXORA",
  metaDescription:
    "用 LINE 官方帳號接單卻越接越亂？教你用歡迎訊息、圖文選單、自動回覆和線上訂單系統，把 LINE 變成不漏單的接單工具。",
  keywords: [
    "LINE 官方帳號接單",
    "LINE 接單",
    "LINE 官方帳號教學",
    "LINE 自動回覆",
    "圖文選單",
    "LINE 訂單系統",
    "LINE 團購接單",
  ],
  canonical: "/blog/line-official-account-orders",
  ogImage: "/og-image-v2.png",
  h1: "LINE 官方帳號怎麼接單？小店老闆完整教學",
  intro:
    "台灣的客人最習慣用 LINE 聯絡店家，所以很多老闆都用 LINE 接單。但訂單一多，訊息就被洗掉、漏回、抄錯，晚上還要一則一則對帳。其實只要把 LINE 官方帳號設定好，再搭配簡單的訂單系統，就能讓 LINE 變成幫你接單的小幫手。這篇從最基本的設定開始，一步一步教你。",
  description:
    "教小店老闆用 LINE 官方帳號的歡迎訊息、圖文選單、自動回覆與訂單系統，把 LINE 變成不漏單的接單工具。",
  coverImage: "/og-image-v2.png",
  publishedAt: "2026-11-05",
  updatedAt: "2026-11-05",
  popularScore: 93,
  sections: [
    {
      id: "step-1-welcome",
      heading: "第 1 步：設定加好友歡迎訊息",
      level: 2,
      paragraphs: [
        "客人加你好友時，第一則訊息就要告訴他「你賣什麼、怎麼下單、多久會回覆」。這樣客人不用一直問基本問題，你也少回很多重複訊息。",
      ],
    },
    {
      id: "step-2-rich-menu",
      heading: "第 2 步：做一個好用的圖文選單",
      level: 2,
      paragraphs: [
        "圖文選單就是聊天室下方那排大按鈕。最常見的配置是「我要下單」、「菜單／商品」、「營業時間」、「聯絡我們」。把最重要的「我要下單」放在最大的位置，客人一眼就知道要按哪裡。",
      ],
    },
    {
      id: "step-3-auto-reply",
      heading: "第 3 步：常見問題用自動回覆",
      level: 2,
      paragraphs: [
        "營業時間、地址、運費、付款方式這類問題，可以設定關鍵字自動回覆。客人打「運費」，系統就自動回答，下班時間也不會漏掉客人。",
      ],
    },
    {
      id: "step-4-order-link",
      heading: "第 4 步：用訂單連結取代聊天下單",
      level: 2,
      paragraphs: [
        "這是最關鍵的一步。與其讓客人在聊天室裡打「我要兩杯紅茶微糖少冰」，不如在圖文選單放一個訂單連結，讓客人自己填好品項、數量、取貨時間。訂單會自動整理成清單，不會再被聊天訊息洗掉。",
        "如果想要一個連到 LINE 的線上訂單系統，可以參考 AXORA 的線上訂單系統（" +
          SITE +
          "/services/ordering-system）。",
      ],
    },
    {
      id: "step-5-notifications",
      heading: "第 5 步：讓系統自動通知",
      level: 2,
      paragraphs: [
        "訂單系統接上 LINE 後，可以做到「有新訂單通知老闆」、「訂單完成通知客人取貨」。客人不用一直問「好了沒」，你也不用一個一個回覆。",
      ],
    },
    {
      id: "common-mistakes",
      heading: "老闆最常犯的 3 個錯誤",
      level: 2,
      paragraphs: [
        "一、用私人 LINE 接單：工作和生活混在一起，客人資料也難整理，建議一定要用 LINE 官方帳號。二、自動回覆設太多：客人問什麼都跳罐頭訊息，反而覺得不被重視。三、沒有固定下單格式：每個客人用不同方式下單，最後還是要人工整理。",
      ],
    },
  ],
  faq: [
    {
      question: "LINE 官方帳號要錢嗎？",
      answer:
        "LINE 官方帳號有免費方案，一對一聊天不用錢；如果要大量群發訊息，才需要依則數選擇付費方案。實際方案與價格請以 LINE 官方公告為準。",
    },
    {
      question: "用私人 LINE 接單有什麼問題？",
      answer:
        "工作和私人訊息混在一起容易漏回，也無法設定自動回覆和圖文選單，客人資料更難整理，建議改用 LINE 官方帳號。",
    },
    {
      question: "不懂電腦可以自己設定 LINE 官方帳號嗎？",
      answer:
        "基本設定可以用手機 App 完成。如果想要接訂單系統、自動通知這類進階功能，可以請 AXORA 幫你一次設定好。",
    },
  ],
  cta: {
    title: "想讓 LINE 幫你接單？先聊聊，不用錢",
    description:
      "加 AXORA 的 LINE 官方帳號 @460jxzer，我們免費幫你看看現在的 LINE 可以怎麼設定得更好用。",
  },
});

/* ------------------------------------------------------------------ */
/* 4. 做網站要多少錢                                                   */
/* ------------------------------------------------------------------ */
export const websiteCostGuide = createArticleFromTemplate({
  id: "304",
  slug: "website-cost-guide",
  category: "Website Development",
  tags: ["Automation"],
  seoTitle: "做一個網站要多少錢？小店家架站費用與選擇指南｜AXORA",
  metaDescription:
    "做網站要多少錢？整理一頁式網站、形象官網、購物網站與客製系統的常見價格區間，以及影響費用的因素和避免踩雷的 5 個問題。",
  keywords: [
    "做網站多少錢",
    "架設網站費用",
    "網站設計價格",
    "形象網站費用",
    "一頁式網站價格",
    "網站製作報價",
    "小店架站",
  ],
  canonical: "/blog/website-cost-guide",
  ogImage: "/og-image-v2.png",
  h1: "做一個網站要多少錢？小店家架站費用與選擇指南",
  intro:
    "「做一個網站要多少錢？」是老闆最常問的問題。答案從幾千塊到幾十萬都有，差別在於你要的是什麼樣的網站。這篇整理市場上常見的網站類型和價格區間，說明哪些因素會影響費用，以及找人做網站前一定要問清楚的 5 個問題。",
  description:
    "整理一頁式網站、形象官網、購物網站與客製系統的常見價格區間，以及找人做網站前要問清楚的 5 個問題。",
  coverImage: "/og-image-v2.png",
  publishedAt: "2026-11-05",
  updatedAt: "2026-11-05",
  popularScore: 96,
  sections: [
    {
      id: "price-ranges",
      heading: "常見網站類型與價格區間",
      level: 2,
      paragraphs: [
        "以下是台灣市場上常見的參考區間，實際價格會依功能和接案者不同而有差異：一頁式網站約 NT$1 萬～5 萬，適合單一商品或活動宣傳；套版形象官網約 NT$2 萬～5 萬，適合想要基本介紹的店家；客製化形象官網多半 NT$10 萬起；購物網站若使用開店平台約 NT$1 萬～3 萬起，客製化購物網站則常見 NT$30 萬起。",
        "訂單、預約、會員這類系統，因為需要後台和資料處理，費用通常比單純的介紹網站高，會依功能多寡報價。",
      ],
    },
    {
      id: "cost-factors",
      heading: "哪些因素會影響網站費用？",
      level: 2,
      paragraphs: [
        "第一是頁數和內容量：頁面越多、文案和圖片越多，製作時間越長。第二是設計方式：套版較便宜，客製設計較貴。第三是功能：會員登入、線上付款、預約、後台管理都會增加費用。第四是多語系：中英文雙語等於內容要做兩份。第五是後續維護：主機、網址、安全憑證和修改，每年也是一筆費用。",
      ],
    },
    {
      id: "buyout-vs-monthly",
      heading: "一次買斷還是月租比較好？",
      level: 2,
      paragraphs: [
        "一次買斷前期花費較高，但網站是你的；月租前期負擔小，通常包含主機、維護和小修改，適合預算有限、不想自己管技術的小店。選擇時，記得問清楚合約期限、到期後網站和資料歸誰。",
      ],
    },
    {
      id: "five-questions",
      heading: "找人做網站前，一定要問的 5 個問題",
      level: 2,
      paragraphs: [
        "一、報價包含哪些內容？設計、文案、圖片、主機、網址分別有沒有算進去。",
        "二、可以修改幾次？避免做到一半才發現改一次就要加錢。",
        "三、網站做好後，網址和主機是誰的名字？最好登記在你自己名下，或合約寫清楚。",
        "四、之後要改內容怎麼辦？能不能自己改，還是每次都要付費請人改。",
        "五、有沒有做基本 SEO？網站做好卻沒人搜得到，等於白做。",
      ],
    },
    {
      id: "how-to-save",
      heading: "預算有限怎麼辦？",
      level: 2,
      paragraphs: [
        "先從最需要的功能開始。例如先做一個好看、搜得到的介紹網站，再加上 LINE 加好友按鈕，讓客人能聯絡你；等生意穩定了，再加訂單或預約系統。分階段做，比一次花大錢更安全。",
        "AXORA 可以依你的預算和需求，建議最適合的做法，先聊不用錢。服務內容可以參考 AXORA 服務項目（" +
          SITE +
          "/services）。",
      ],
    },
  ],
  faq: [
    {
      question: "做一個網站大概要多久？",
      answer:
        "簡單的一頁式或形象網站，通常幾週內可以完成；有訂單、預約或會員功能的系統需要比較久，報價時應該一起告訴你預計時程。",
    },
    {
      question: "網站做好之後每年還要花錢嗎？",
      answer:
        "通常需要主機和網址的費用，若有維護服務也會另外計算。找人做網站前，記得問清楚每年的固定支出。",
    },
    {
      question: "我自己用免費架站平台做可以嗎？",
      answer:
        "可以，適合預算很少、只需要簡單介紹的情況。但如果你需要客製功能、想要更好的 SEO 或專業形象，請專業團隊做會比較省時。",
    },
  ],
  cta: {
    title: "想知道你的網站要多少錢？免費幫你評估",
    description:
      "加 AXORA 的 LINE 官方帳號 @460jxzer，告訴我們你想做什麼網站，我們給你清楚的報價和建議，先聊不用錢。",
  },
});

export const seoBatch3Posts: BlogPost[] = [
  restaurantOnlineOrdering,
  salonBookingSystem,
  lineOfficialAccountOrders,
  websiteCostGuide,
];
