"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BLOG_CATEGORIES,
  type BlogCategory,
  type BlogPost,
} from "../../data/blog-posts";
import { BlogCard } from "./blog-card";

type BlogIndexProps = {
  posts: BlogPost[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <article className="gradient-border group transition-all duration-300 hover:-translate-y-0.5">
      <Link
        href={`/blog/${post.slug}`}
        className="gradient-border-inner grid overflow-hidden rounded-[inherit] lg:grid-cols-[1.15fr_1fr]"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-charcoal lg:aspect-auto lg:min-h-[360px] lg:border-b-0 lg:border-r">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>

        <div className="flex flex-col justify-center p-6 lg:p-10 xl:p-12">
          <p className="text-label font-mono uppercase tracking-wider text-accent-cyan">
            {post.category}
          </p>
          <h2 className="mt-3 text-2xl font-medium text-foreground lg:text-4xl">
            {post.title}
          </h2>
          <p className="mt-4 text-body text-muted-light lg:text-lg">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingTime} 分鐘閱讀</span>
          </div>
          <span className="btn-primary mt-8 inline-flex w-fit rounded-lg px-6 py-3 text-label font-mono uppercase tracking-[0.15em]">
            閱讀更多
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BlogIndex({ posts }: BlogIndexProps) {
  const [category, setCategory] = useState<BlogCategory | "全部">("全部");

  const filteredPosts =
    category === "全部"
      ? posts
      : posts.filter((post) => post.category === category);

  const featuredPost = filteredPosts[0] ?? null;
  const latestPosts = filteredPosts.slice(1, 4);
  const allPosts = filteredPosts;

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-8 lg:py-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
            AXORA Blog
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
            <span className="gradient-text">知識與實務洞察</span>
          </h1>
          <p className="mt-3 max-w-2xl text-body text-muted-light">
            關於 AI 客戶管理、CRM、LINE 官方帳號、SaaS、網站與 APP
            開發的實務文章，協助企業做出更好的數位決策。
          </p>
        </div>
      </section>

      <section className="border-b border-border py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 lg:px-12">
          <label className="block max-w-xl">
            <span className="text-label font-mono uppercase tracking-[0.2em] text-muted">
              搜尋文章
            </span>
            <input
              type="search"
              readOnly
              placeholder="輸入關鍵字，例如 CRM、LINE、SEO…"
              aria-label="搜尋文章（即將開放）"
              className="mt-3 w-full rounded-xl border border-border bg-charcoal/60 px-4 py-3 text-body text-foreground outline-none transition focus:border-accent-blue"
            />
          </label>

          <div>
            <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
              分類
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(["全部", ...BLOG_CATEGORIES] as const).map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                      active
                        ? "border-accent-blue bg-accent-blue/15 text-accent-blue"
                        : "border-border text-muted-light hover:border-border-hover"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {featuredPost ? (
        <section className="section-elevated border-b border-border py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <h2 className="section-title">精選文章</h2>
            <p className="mt-3 max-w-2xl text-body text-muted-light">
              Featured Article — 本週優先閱讀的重點文章。
            </p>
            <div className="mt-8">
              <FeaturedArticle post={featuredPost} />
            </div>
          </div>
        </section>
      ) : null}

      {latestPosts.length > 0 ? (
        <section className="border-b border-border py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <h2 className="section-title">最新文章</h2>
            <p className="mt-3 max-w-2xl text-body text-muted-light">
              緊接精選之後，近期更新的文章。
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-12 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <h2 className="section-title">全部文章</h2>
          <p className="mt-3 max-w-2xl text-body text-muted-light">
            {category === "全部"
              ? "依發布時間排序的全部文章。"
              : `找到 ${allPosts.length} 篇文章。`}
          </p>
          {allPosts.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {allPosts.map((post) => (
                <BlogCard key={`all-${post.id}`} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-body text-muted-light">
              此分類尚無文章，請選擇其他分類。
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
