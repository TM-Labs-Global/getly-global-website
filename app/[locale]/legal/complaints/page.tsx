import { ShieldCheck, MessageSquare } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: `${t("complaints.title")} — Getly`,
    description: t("complaints.description"),
  };
}

export default async function ComplaintsPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <div className="pt-36 pb-24 bg-[var(--canvas)]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <MessageSquare className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("complaints.title")}
          </h1>
          <p className="text-sm text-[var(--mist)]">{t("lastUpdated")}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-8 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--navy)]">{t("complaints.section1Title")}</h2>
            <p>{t("complaints.section1Desc")}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--navy)]">{t("complaints.section2Title")}</h2>
            <p>{t("complaints.section2Desc")}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-[var(--navy)]">{t("complaints.section3Title")}</h2>
            <p>{t("complaints.section3Desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
