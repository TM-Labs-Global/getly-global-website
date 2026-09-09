import { Compass } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: `${t("title")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="pt-36 pb-24 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <Compass className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h1>
          <p className="text-xl text-[var(--blue)] font-bold max-w-2xl mx-auto">
            {t("quote")}
          </p>
        </div>

        {/* Mission Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft max-w-4xl mx-auto space-y-6 text-[var(--ink-soft)] leading-relaxed">
          <h2 className="text-2xl font-bold text-[var(--navy)]">{t("whyTitle")}</h2>
          <p>{t("whyP1")}</p>
          <p>{t("whyP2")}</p>
        </div>
      </div>
    </div>
  );
}
