import { Newspaper, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "press" });
  return {
    title: `${t("title")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function PressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "press" });

  return (
    <div className="pt-36 pb-24 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <Newspaper className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Press Releases Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-[var(--navy)]">{t("cardTitle")}</h2>
          <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
            {t("cardDesc")}
          </p>
          <a
            href="mailto:press@getly.app"
            className="inline-flex items-center gap-2 bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white font-semibold px-6 py-3 rounded-full text-sm shadow-glow transition-all"
          >
            <span>{t("cardCta")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
