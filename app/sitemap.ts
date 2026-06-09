import type { MetadataRoute } from "next";

const baseUrl = "https://axora.tw";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/services/ai-crm` },
    { url: `${baseUrl}/services/ai-customer-service` },
    { url: `${baseUrl}/services/crm-system` },
    { url: `${baseUrl}/services/line-oa` },
    { url: `${baseUrl}/services/saas-development` },
    { url: `${baseUrl}/services/ai-automation` },
    { url: `${baseUrl}/services/app-development` },
    { url: `${baseUrl}/contact` },
  ];
}
