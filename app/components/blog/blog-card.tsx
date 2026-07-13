import Image from "next/image";
import Link from "next/link";
import {
  getReadingTimeMinutes,
  type BlogPost,
} from "../../data/blog-posts";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function BlogCard({ post }: { post: BlogPost }) {
  const readingTime = getReadingTimeMinutes(post);

  return (
    <article className="gradient-border group flex h-full flex-col transition-all duration-300 hover:-translate-y-0.5">
      <Link
        href={`/blog/${post.slug}`}
        className="gradient-border-inner flex h-full flex-col overflow-hidden rounded-[inherit]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
            {post.category}
          </p>
          <h2 className="mt-3 text-xl font-medium text-foreground lg:text-2xl">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-body text-muted-light">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{readingTime} 分鐘閱讀</span>
          </div>
          <span className="mt-6 inline-flex w-fit rounded-lg border border-border px-4 py-2 text-label font-mono uppercase tracking-[0.15em] text-muted-light transition group-hover:border-accent-blue group-hover:text-accent-blue">
            閱讀更多
          </span>
        </div>
      </Link>
    </article>
  );
}
