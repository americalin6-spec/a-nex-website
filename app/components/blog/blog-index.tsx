"use client";

import { useMemo, useState } from "react";
import {
  BLOG_CATEGORIES,
  type BlogCategory,
  type BlogPost,
} from "../../data/blog-posts";
import { BlogCard } from "./blog-card";

type BlogIndexProps = {
  latestPosts: BlogPost[];
  featuredPosts: BlogPost[];
};

export function BlogIndex({ latestPosts, featuredPosts }: BlogIndexProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategory | "全部">("全部");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return latestPosts.filter((post) => {
      const matchCategory =
        category === "全部" ? true : post.category === category;
      const matchQuery =
        normalized.length === 0 ||
        post.title.toLowerCase().includes(normalized) ||
        post.description.toLowerCase().includes(normalized) ||
        post.tags.some((tag) => tag.toLowerCase().includes(normalized));

      return matchCategory && matchQuery;
    });
  }, [category, latestPosts, query]);

  return (
    <div className="pt-20">
      <section className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
            AXORA Blog
          </p>
          <h1 className="text-display page-title mt-4">
            <span className="gradient-text">知識與實務洞察</span>
          </h1>
          <p className="mt-6 max-w-2xl text-body text-muted-light">
            關於 AI 客戶管理、CRM、LINE 官方帳號、SaaS、網站與 APP
            開發的實務文章，協助企業做出更好的數位決策。
          </p>
        </div>
      </section>

      <section className="border-b border-border py-10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 lg:px-12">
          <label className="block max-w-xl">
            <span className="text-label font-mono uppercase tracking-[0.2em] text-muted">
              搜尋文章
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="輸入關鍵字，例如 CRM、LINE、SEO…"
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

      {featuredPosts.length > 0 && category === "全部" && query.trim() === "" ? (
        <section className="section-elevated border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <h2 className="section-title">精選文章</h2>
            <p className="mt-4 max-w-2xl text-body text-muted-light">
              先讀這幾篇，快速掌握 AXORA 最常協助企業解決的主題。
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <h2 className="section-title">最新文章</h2>
          <p className="mt-4 max-w-2xl text-body text-muted-light">
            {category === "全部" && query.trim() === ""
              ? "依發布時間排序的全部文章。"
              : `找到 ${filteredPosts.length} 篇文章。`}
          </p>
          {filteredPosts.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-body text-muted-light">
              沒有符合條件的文章，請調整搜尋或分類。
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
