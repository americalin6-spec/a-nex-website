import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/line/public";

export const runtime = "nodejs";

const SUBJECT = "AXORA 官網新詢問";
const DEFAULT_FROM = "AXORA 官網 <onboarding@resend.dev>";

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
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "郵件服務尚未設定，請稍後再試或改用 LINE 聯絡" },
      { status: 503 },
    );
  }

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

  const text = buildEmailBody({
    name,
    company: body.company?.trim() ?? "",
    email,
    phone: body.phone?.trim() ?? "",
    projectType: body.projectType?.trim() ?? "",
    message,
    submittedAt,
  });

  try {
    const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: SUBJECT,
      text,
    });

    if (error) {
      const resendError = error as {
        message?: string;
        name?: string;
        statusCode?: number;
      };
      console.error("[api/contact] Resend error:", {
        raw: JSON.stringify(error),
        message: resendError.message,
        name: resendError.name,
        statusCode: resendError.statusCode,
      });
      return NextResponse.json(
        { ok: false, error: "送出失敗，請稍後再試或改用 LINE 聯絡" },
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
