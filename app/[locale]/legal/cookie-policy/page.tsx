import { Cookie } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: `${t("cookie.title")} — Getly`,
    description: t("cookie.description"),
  };
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("cookie.title")}
        </h1>
        <p className="text-sm text-[var(--mist)]">{t("lastUpdated")}</p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-8 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--navy)]">{t("cookie.section1Title")}</h2>
          <p>{t("cookie.section1Desc")}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--navy)]">{t("cookie.section2Title")}</h2>
          <p>{t("cookie.section2Desc")}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--navy)]">{t("cookie.section3Title")}</h2>
          <p>{t("cookie.section3Desc")}</p>
        </div>
      </div>
    </div>
  );
}
