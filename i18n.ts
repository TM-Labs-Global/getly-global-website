import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "es", "fr", "de", "pt", "zh", "ja", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export interface LocaleOption {
  code: Locale;
  label: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const localeDetails: Record<Locale, LocaleOption> = {
  en: { code: "en", label: "English", nativeName: "English", flag: "US", dir: "ltr" },
  es: { code: "es", label: "Spanish", nativeName: "Español", flag: "ES", dir: "ltr" },
  fr: { code: "fr", label: "French", nativeName: "Français", flag: "FR", dir: "ltr" },
  de: { code: "de", label: "German", nativeName: "Deutsch", flag: "DE", dir: "ltr" },
  pt: { code: "pt", label: "Portuguese", nativeName: "Português", flag: "BR", dir: "ltr" },
  zh: { code: "zh", label: "Chinese (Simplified)", nativeName: "简体中文", flag: "CN", dir: "ltr" },
  ja: { code: "ja", label: "Japanese", nativeName: "日本語", flag: "JP", dir: "ltr" },
  ar: { code: "ar", label: "Arabic", nativeName: "العربية", flag: "AE", dir: "rtl" },
};

function deepMerge(target: any, source: any): any {
  if (!source) return target;
  if (!target) return source;
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else if (source[key] !== undefined) {
      output[key] = source[key];
    }
  }
  return output;
}

async function loadNamespace(namespace: string, locale: string) {
  let enMessages = {};
  try {
    enMessages = (await import(`./shared/i18n/messages/en/${namespace}.json`)).default;
  } catch (e) {
    enMessages = {};
  }

  if (locale === "en") return enMessages;

  let localeMessages = {};
  try {
    localeMessages = (await import(`./shared/i18n/messages/${locale}/${namespace}.json`)).default;
  } catch (e) {
    localeMessages = {};
  }

  return deepMerge(enMessages, localeMessages);
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  const [
    common,
    home,
    wallet,
    cards,
    esim,
    flights,
    hotels,
    insurance,
    visa,
    aiTripPlanner,
    howItWorks,
    coverage,
    security,
    about,
    faq,
    blog,
    press,
    legal,
  ] = await Promise.all([
    loadNamespace("common", locale),
    loadNamespace("home", locale),
    loadNamespace("wallet", locale),
    loadNamespace("cards", locale),
    loadNamespace("esim", locale),
    loadNamespace("flights", locale),
    loadNamespace("hotels", locale),
    loadNamespace("insurance", locale),
    loadNamespace("visa", locale),
    loadNamespace("ai-trip-planner", locale),
    loadNamespace("how-it-works", locale),
    loadNamespace("coverage", locale),
    loadNamespace("security", locale),
    loadNamespace("about", locale),
    loadNamespace("faq", locale),
    loadNamespace("blog", locale),
    loadNamespace("press", locale),
    loadNamespace("legal", locale),
  ]);

  return {
    locale,
    messages: {
      common,
      home,
      wallet,
      cards,
      esim,
      flights,
      hotels,
      insurance,
      visa,
      aiTripPlanner,
      howItWorks,
      coverage,
      security,
      about,
      faq,
      blog,
      press,
      legal,
    },
  };
});
