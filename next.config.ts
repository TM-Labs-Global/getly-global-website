import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/compliance",
        destination: "/legal/complaints",
        permanent: true,
      },
      {
        source: "/legal/compliance",
        destination: "/legal/complaints",
        permanent: true,
      },
      {
        source: "/complaints",
        destination: "/legal/complaints",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
