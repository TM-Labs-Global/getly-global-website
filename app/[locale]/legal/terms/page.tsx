import { Mail, FileText } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: `${t("terms.title")} — Getly`,
    description: t("terms.description"),
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("terms.title")}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--blue)]/10 text-xs font-bold text-[var(--blue)] border border-[var(--blue)]/20">
            <FileText className="w-3.5 h-3.5" />
            <span>{t("terms.version")}</span>
          </span>
          <span className="text-sm text-[var(--mist)]">{t("lastUpdated")}</span>
        </div>
      </div>

      {/* Terms Content Container */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-10 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
          {/* 1. Position */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.position.title")}
            </h2>
            <p>{t("terms.position.p1")}</p>
          </section>

          {/* 2. Access */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.access.title")}
            </h2>
            <p>{t("terms.access.p1")}</p>
          </section>

          {/* 3. Eligibility */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.eligibility.title")}
            </h2>
            <p>{t("terms.eligibility.p1")}</p>
          </section>

          {/* 4. Alerts and Notifications */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.alerts.title")}
            </h2>
            <p>{t("terms.alerts.p1")}</p>
          </section>

          {/* 5. Permitted and Prohibited Use */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.permitted.title")}
            </h2>
            <p>{t("terms.permitted.p1")}</p>
            <p>{t("terms.permitted.p2")}</p>
            <p>{t("terms.permitted.p3")}</p>
            <p>{t("terms.permitted.p4")}</p>
            <p>{t("terms.permitted.p5")}</p>
          </section>

          {/* 6. Disclaimer of Warranties */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.disclaimer.title")}
            </h2>
            <p>{t("terms.disclaimer.p1")}</p>
            <p>{t("terms.disclaimer.p2")}</p>
            <p>{t("terms.disclaimer.p3")}</p>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.liability.title")}
            </h2>
            <p>{t("terms.liability.p1")}</p>
          </section>

          {/* 8. Ownership and Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.ownership.title")}
            </h2>
            <p>{t("terms.ownership.p1")}</p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
              <li>{t("terms.ownership.bullet1")}</li>
              <li>{t("terms.ownership.bullet2")}</li>
              <li>{t("terms.ownership.bullet3")}</li>
              <li>{t("terms.ownership.bullet4")}</li>
              <li>{t("terms.ownership.bullet5")}</li>
            </ul>
          </section>

          {/* 9. Termination */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.termination.title")}
            </h2>
            <p>{t("terms.termination.p1")}</p>
          </section>

          {/* 10. Linked Sites */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.linkedSites.title")}
            </h2>
            <p>{t("terms.linkedSites.p1")}</p>
          </section>

          {/* 11. Notices */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.notices.title")}
            </h2>
            <p>{t("terms.notices.p1")}</p>
          </section>

          {/* 12. Amendment */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.amendment.title")}
            </h2>
            <p>{t("terms.amendment.p1")}</p>
          </section>

          {/* 13. Severability */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.severability.title")}
            </h2>
            <p>{t("terms.severability.p1")}</p>
          </section>

          {/* 14. Applicable Law and Jurisdiction */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("terms.governingLaw.title")}
            </h2>
            <p>{t("terms.governingLaw.p1")}</p>
          </section>

          {/* 15. For Inquiries */}
          <section className="space-y-3 p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-[var(--navy)] flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--blue)]" />
                <span>{t("terms.inquiries.title")}</span>
              </h2>
              <p>{t("terms.inquiries.p1")}</p>
            </div>
            <a
              href="mailto:hello@getly.app"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--blue)] text-white font-semibold text-sm hover:opacity-90 transition-opacity shrink-0 w-fit"
            >
              <Mail className="w-4 h-4" />
              hello@getly.app
            </a>
          </section>

          {/* 16. Acceptance */}
          <section className="pt-4 border-t border-[var(--line)] text-xs sm:text-sm text-[var(--mist)] space-y-2">
            <h3 className="font-bold uppercase tracking-wider text-[var(--navy)]">
              {t("terms.acceptance.title")}
            </h3>
            <p>{t("terms.acceptance.p1")}</p>
          </section>
        </div>
    </div>
  );
}
