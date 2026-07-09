import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/platform",
        destination: "/line-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
