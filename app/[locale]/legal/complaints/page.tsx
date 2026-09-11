import { Mail, MessageSquare } from "lucide-react";
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
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
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

        {/* Dedicated Email Submission Card */}
        <div className="p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-[var(--navy)]">{t("complaints.emailCardTitle")}</h3>
            <p className="text-sm text-[var(--mist)]">
              {t("complaints.emailCardDesc")}
            </p>
          </div>
          <a
            href="mailto:hello@getly.app"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--blue)] text-white font-semibold text-sm hover:opacity-90 transition-opacity shrink-0 shadow-sm"
          >
            <Mail className="w-4 h-4" />
            hello@getly.app
          </a>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-bold text-[var(--navy)]">{t("complaints.section3Title")}</h2>
          <p>{t("complaints.section3Desc")}</p>
        </div>
      </div>
    </div>
  );
}
