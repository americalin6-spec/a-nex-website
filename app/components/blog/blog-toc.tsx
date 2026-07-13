import type { BlogSection } from "@/app/data/blog-posts";

export function BlogTableOfContents({ sections }: { sections: BlogSection[] }) {
  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="文章目錄"
      className="rounded-xl border border-border bg-charcoal/40 p-6"
    >
      <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
        目錄
      </p>
      <ol className="mt-4 space-y-3">
        {sections.map((section, index) => (
          <li
            key={section.id}
            className={section.level === 3 ? "pl-4" : undefined}
          >
            <a
              href={`#${section.id}`}
              className="text-sm text-muted-light transition hover:text-accent-blue"
            >
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
