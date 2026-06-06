import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/line/public";

export const runtime = "nodejs";

const SUBJECT = "AXORA 官網新詢問";

type ContactBody = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

function buildEmailBody(fields: {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  submittedAt: string;
}): string {
  return [
    `姓名：${fields.name}`,
    `公司：${fields.company || "—"}`,
    `電子郵件：${fields.email}`,
    `電話：${fields.phone || "—"}`,
    `想委託的項目：${fields.projectType || "—"}`,
    `需求說明：${fields.message}`,
    `送出時間：${fields.submittedAt}`,
  ].join("\n");
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name) {
    return NextResponse.json({ ok: false, error: "請填寫姓名" }, { status: 400 });
  }
  if (!email) {
    return NextResponse.json({ ok: false, error: "請填寫電子郵件" }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ ok: false, error: "請填寫需求說明" }, { status: 400 });
  }

  const submittedAt = new Date().toLocaleString("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const company = body.company?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";

  const text = buildEmailBody({
    name,
    company,
    email,
    phone,
    projectType,
    message,
    submittedAt,
  });

  const formData = new FormData();
  formData.append("_subject", SUBJECT);
  formData.append("_captcha", "false");
  formData.append("_replyto", email);
  formData.append("message", text);

  try {
    const res = await fetch(`https://formsubmit.co/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("[api/contact] FormSubmit error:", res.status, errorText);
      return NextResponse.json(
        { ok: false, error: `FormSubmit 錯誤 ${res.status}: ${errorText}` },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] send failed:", err);
    return NextResponse.json(
      { ok: false, error: "送出失敗，請稍後再試或改用 LINE 聯絡" },
      { status: 500 },
    );
  }
}
