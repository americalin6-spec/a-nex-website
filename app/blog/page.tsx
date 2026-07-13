import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/page-metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { getLatestBlogPosts } from "../data/blog-posts";
import { BlogIndex } from "../components/blog/blog-index";

export const metadata: Metadata = pageMetadata({
  title: "AXORA Blog｜AI、CRM、LINE OA、SaaS 與網站開發知識",
  description:
    "AXORA 部落格：分享 AI 客戶管理、CRM、LINE 官方帳號、SaaS、網站與 APP 開發實務，協助企業提升數位營運效率。",
  path: "/blog",
});

export default function BlogPage() {
  const latestPosts = getLatestBlogPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "首頁", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <BlogIndex posts={latestPosts} />
    </>
  );
}
