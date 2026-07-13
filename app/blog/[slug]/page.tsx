import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articleMetadata } from "@/lib/seo/article-metadata";
import {
  JsonLd,
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo/json-ld";
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "../../data/blog-posts";
import {
  getAdjacentBlogPosts,
  getRelatedProjectsForBlog,
  getRelatedServicesForBlog,
} from "../../data/relations";
import { BlogTableOfContents } from "../../components/blog/blog-toc";
import { ContactCtaSection } from "../../components/seo/contact-cta-section";
import {
  RelatedArticlesSection,
  RelatedProjectsSection,
  RelatedServicesSection,
} from "../../components/seo/related-sections";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return articleMetadata({
      title: "文章不存在｜AXORA Blog",
      description: "找不到指定的 AXORA Blog 文章。",
      path: "/blog",
      publishedAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    });
  }

  return articleMetadata({
    title: `${post.title}｜AXORA Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    authors: [post.author],
    tags: post.tags,
    keywords: post.keywords,
  });
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}` as const;
  const { previous, next } = getAdjacentBlogPosts(post.slug);
  const relatedServices = getRelatedServicesForBlog(post.category);
  const relatedProjects = getRelatedProjectsForBlog(post.category);
  const relatedPosts = getRelatedBlogPosts(post.slug, 3);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path,
          image: post.coverImage,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          author: post.author,
          keywords: post.keywords,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ])}
      />

      <article className="pt-20">
        <header className="section-glow mesh-accent relative border-b border-border py-16 lg:py-20">
          <div className="mx-auto max-w-[900px] px-6 lg:px-12">
            <p className="text-label font-mono uppercase tracking-[0.3em] text-accent-blue">
              {post.category}
            </p>
            <h1 className="text-display page-title mt-4">
              <span className="gradient-text">{post.title}</span>
            </h1>
            <p className="mt-6 text-body text-muted-light">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
              <span>{post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readingTime} 分鐘閱讀</span>
            </div>
          </div>
        </header>

        <div className="border-b border-border py-10">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-charcoal">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <BlogTableOfContents sections={post.content} />
            </aside>

            <div>
              <div className="space-y-12">
                {post.content.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-2xl font-medium text-foreground lg:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5 text-body text-muted-light">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <ul className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-14 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
                {previous ? (
                  <Link
                    href={`/blog/${previous.slug}`}
                    className="glass-card group rounded-xl p-6 transition hover:border-border-hover"
                  >
                    <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
                      ← 上一篇
                    </p>
                    <p className="mt-3 text-lg font-medium text-foreground group-hover:text-accent-blue">
                      {previous.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="glass-card group rounded-xl p-6 text-right transition hover:border-border-hover"
                  >
                    <p className="text-label font-mono uppercase tracking-[0.2em] text-muted">
                      下一篇 →
                    </p>
                    <p className="mt-3 text-lg font-medium text-foreground group-hover:text-accent-blue">
                      {next.title}
                    </p>
                  </Link>
                ) : null}
              </div>

              <Link
                href="/blog"
                className="link-underline mt-10 inline-flex text-label font-mono uppercase tracking-[0.2em] text-accent-blue"
              >
                ← 返回 Blog
              </Link>
            </div>
          </div>
        </div>
      </article>

      <RelatedArticlesSection articles={relatedPosts} title="相關文章" />
      <RelatedServicesSection services={relatedServices} />
      <RelatedProjectsSection projects={relatedProjects} />
      <ContactCtaSection
        title="聯絡 AXORA"
        description="若這篇文章對你有幫助，歡迎告訴我們你的產業與需求，AXORA 協助規劃可行方案。"
      />
    </>
  );
}
