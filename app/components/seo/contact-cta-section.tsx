import Link from "next/link";

export function ContactCtaSection({
  title = "開始您的專案",
  description = "告訴我們您的產業與需求，AXORA 協助規劃可行方案並安排諮詢。",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-violet border-b border-border py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        <h2 className="section-title">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-body text-muted-light">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="btn-primary inline-flex rounded-lg px-7 py-3 text-label font-mono uppercase tracking-[0.15em]"
          >
            開始您的專案
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-lg border border-border px-7 py-3 text-label font-mono uppercase tracking-[0.15em] text-muted-light transition hover:border-border-hover hover:text-foreground"
          >
            立即預約諮詢
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-lg border border-border px-7 py-3 text-label font-mono uppercase tracking-[0.15em] text-muted-light transition hover:border-border-hover hover:text-foreground"
          >
            聯絡 AXORA
          </Link>
        </div>
      </div>
    </section>
  );
}
