import type { MetadataRoute } from "next";

const baseUrl = "https://axora.tw";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/services/ai-crm` },
    { url: `${baseUrl}/services/ai-customer-service` },
    { url: `${baseUrl}/contact` },
  ];
}
