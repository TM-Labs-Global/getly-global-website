import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://getly.app";

  const routes = [
    "",
    "/wallet",
    "/cards",
    "/esim",
    "/flights",
    "/hotels",
    "/insurance",
    "/visa",
    "/ai-trip-planner",
    "/how-it-works",
    "/coverage",
    "/security",
    "/about",
    "/faq",
    "/blog",
    "/press",
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/cookie-policy",
    "/legal/aml-policy",
    "/legal/complaints",
  ];

  return routes.map((route) => {
    // Generate hreflang language alternates for all supported locales
    const languages: Record<string, string> = {};
    locales.forEach((loc) => {
      const prefix = loc === defaultLocale ? "" : `/${loc}`;
      languages[loc] = `${baseUrl}${prefix}${route}`;
    });
    languages["x-default"] = `${baseUrl}${route}`;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority:
        route === ""
          ? 1.0
          : route.startsWith("/wallet") || route.startsWith("/cards") || route.startsWith("/hotels")
          ? 0.9
          : 0.7,
      alternates: {
        languages,
      },
    };
  });
}
