import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/site";

type ArticleMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
  image?: string;
  publishedAt: string;
  updatedAt: string;
  authors?: string[];
  tags?: string[];
};

export function articleMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  publishedAt,
  updatedAt,
  authors = [SITE_NAME],
  tags = [],
}: ArticleMetadataInput): Metadata {
  return {
    title,
    description,
    authors: authors.map((name) => ({ name })),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      locale: "zh_TW",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      authors,
      tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
