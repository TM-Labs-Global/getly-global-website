import { Mail, Calendar, CheckCircle2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: `${t("privacy.title")} — Getly`,
    description: t("privacy.description"),
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("privacy.title")}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--blue)]/10 text-xs font-bold text-[var(--blue)] border border-[var(--blue)]/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t("privacy.effectiveDate")}</span>
          </span>
          <span className="text-sm text-[var(--mist)]">{t("privacy.lastUpdated")}</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-10 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s1.title")}
            </h2>
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s1.s1_1Title")}
              </h3>
              <p>{t("privacy.s1.p1")}</p>
              <p>{t("privacy.s1.p2")}</p>
              <p>{t("privacy.s1.p3")}</p>
            </div>
            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s1.s1_2Title")}
              </h3>
              <p>{t("privacy.s1.p4")}</p>
              <p>{t("privacy.s1.p5")}</p>
              <p>{t("privacy.s1.p6")}</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s2.title")}
            </h2>
            <p>{t("privacy.s2.intro")}</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>{t("privacy.s2.b1")}</li>
              <li>{t("privacy.s2.b2")}</li>
              <li>{t("privacy.s2.b3")}</li>
              <li>{t("privacy.s2.b4")}</li>
              <li>{t("privacy.s2.b5")}</li>
              <li>{t("privacy.s2.b6")}</li>
            </ul>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s2.s2_1Title")}
              </h3>
              <p>{t("privacy.s2.p1")}</p>
              <p>{t("privacy.s2.p2")}</p>
              <p>{t("privacy.s2.p3")}</p>
              <p>{t("privacy.s2.p4")}</p>
              <p>{t("privacy.s2.p5")}</p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s2.s2_2Title")}
              </h3>
              <p>{t("privacy.s2.p6")}</p>
              <p>{t("privacy.s2.p7")}</p>
              <p>{t("privacy.s2.p8")}</p>
              <p>{t("privacy.s2.p9")}</p>
              <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
                <li>{t("privacy.s2.i1")}</li>
                <li>{t("privacy.s2.i2")}</li>
                <li>{t("privacy.s2.i3")}</li>
                <li>{t("privacy.s2.i4")}</li>
                <li>{t("privacy.s2.i5")}</li>
                <li>{t("privacy.s2.i6")}</li>
                <li>{t("privacy.s2.i7")}</li>
                <li>{t("privacy.s2.i8")}</li>
                <li>{t("privacy.s2.i9")}</li>
                <li>{t("privacy.s2.i10")}</li>
              </ol>
              <p>{t("privacy.s2.p10")}</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s3.title")}
            </h2>
            <p>{t("privacy.s3.intro")}</p>
            <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>{t("privacy.s3.l1")}</li>
              <li>{t("privacy.s3.l2")}</li>
              <li>{t("privacy.s3.l3")}</li>
              <li>{t("privacy.s3.l4")}</li>
              <li>{t("privacy.s3.l5")}</li>
            </ol>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s3.s3_1Title")}
              </h3>
              <p>{t("privacy.s3.rIntro")}</p>
              <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
                <li>{t("privacy.s3.r1")}</li>
                <li>{t("privacy.s3.r2")}</li>
                <li>{t("privacy.s3.r3")}</li>
                <li>{t("privacy.s3.r4")}</li>
                <li>{t("privacy.s3.r5")}</li>
                <li>{t("privacy.s3.r6")}</li>
                <li>{t("privacy.s3.r7")}</li>
                <li>{t("privacy.s3.r8")}</li>
              </ol>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s3.s3_2Title")}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("privacy.s3.req1")}</li>
                <li>{t("privacy.s3.req2")}</li>
                <li>{t("privacy.s3.req3")}</li>
                <li>{t("privacy.s3.req4")}</li>
                <li>{t("privacy.s3.req5")}</li>
                <li>{t("privacy.s3.req6")}</li>
                <li>{t("privacy.s3.req7")}</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s3.s3_3Title")}
              </h3>
              <p>{t("privacy.s3.acc1")}</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>{t("privacy.s3.accB1")}</li>
                <li>{t("privacy.s3.accB2")}</li>
                <li>{t("privacy.s3.accB3")}</li>
                <li>{t("privacy.s3.accB4")}</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s3.s3_4Title")}
              </h3>
              <p>{t("privacy.s3.sec1")}</p>
              <p>{t("privacy.s3.sec2")}</p>
              <p>{t("privacy.s3.sec3")}</p>
              <p>{t("privacy.s3.sec4")}</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s4.title")}
            </h2>

            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s4.s4_1Title")}
              </h3>
              <p>{t("privacy.s4.dpoIntro")}</p>
              <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
                <li>{t("privacy.s4.d1")}</li>
                <li>{t("privacy.s4.d2")}</li>
                <li>{t("privacy.s4.d3")}</li>
                <li>{t("privacy.s4.d4")}</li>
                <li>{t("privacy.s4.d5")}</li>
                <li>{t("privacy.s4.d6")}</li>
                <li>{t("privacy.s4.d7")}</li>
              </ol>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s4.s4_2Title")}
              </h3>
              <p>{t("privacy.s4.empIntro")}</p>
              <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
                <li>{t("privacy.s4.e1")}</li>
                <li>{t("privacy.s4.e2")}</li>
                <li>{t("privacy.s4.e3")}</li>
                <li>{t("privacy.s4.e4")}</li>
                <li>{t("privacy.s4.e5")}</li>
                <li>{t("privacy.s4.e6")}</li>
                <li>{t("privacy.s4.e7")}</li>
                <li>{t("privacy.s4.e8")}</li>
              </ol>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s4.s4_3Title")}
              </h3>
              <p>{t("privacy.s4.tp1")}</p>
              <p>{t("privacy.s4.tp2")}</p>
              <p>{t("privacy.s4.tp3")}</p>
              <p>{t("privacy.s4.tp4")}</p>
              <p>{t("privacy.s4.tp5")}</p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s4.s4_4Title")}
              </h3>
              <p>{t("privacy.s4.cIntro")}</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>{t("privacy.s4.c1")}</li>
                <li>{t("privacy.s4.c2")}</li>
                <li>{t("privacy.s4.c3")}</li>
                <li>{t("privacy.s4.c4")}</li>
                <li>{t("privacy.s4.c5")}</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">
                {t("privacy.s4.s4_5Title")}
              </h3>
              <p>{t("privacy.s4.uIntro")}</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>{t("privacy.s4.u1")}</li>
                <li>{t("privacy.s4.u2")}</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s5.title")}
            </h2>
            <p>{t("privacy.s5.p1")}</p>
            <p>{t("privacy.s5.p2")}</p>
            <p>{t("privacy.s5.p3")}</p>
            <p>{t("privacy.s5.p4")}</p>
            <div className="space-y-2 pt-2">
              <p className="font-semibold text-[var(--navy)]">{t("privacy.s5.recIntro")}</p>
              <ol className="list-decimal pl-6 space-y-1 text-xs sm:text-sm">
                <li>{t("privacy.s5.rec1")}</li>
                <li>{t("privacy.s5.rec2")}</li>
                <li>{t("privacy.s5.rec3")}</li>
              </ol>
            </div>
            <div className="space-y-2 pt-2">
              <p className="font-semibold text-[var(--navy)]">{t("privacy.s5.liabIntro")}</p>
              <ol className="list-decimal pl-6 space-y-1 text-xs sm:text-sm">
                <li>{t("privacy.s5.liab1")}</li>
                <li>{t("privacy.s5.liab2")}</li>
                <li>{t("privacy.s5.liab3")}</li>
                <li>{t("privacy.s5.liab4")}</li>
              </ol>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s6.title")}
            </h2>
            <p>{t("privacy.s6.p1")}</p>
            <p>{t("privacy.s6.p2")}</p>
            <p>{t("privacy.s6.p3")}</p>
            <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>{t("privacy.s6.t1")}</li>
              <li>{t("privacy.s6.t2")}</li>
              <li>{t("privacy.s6.t3")}</li>
              <li>{t("privacy.s6.t4")}</li>
            </ol>
            <p>{t("privacy.s6.p4")}</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s7.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>{t("privacy.s7.b1")}</li>
              <li>{t("privacy.s7.b2")}</li>
              <li>{t("privacy.s7.b3")}</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s8.title")}
            </h2>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>{t("privacy.s8.b1")}</li>
              <li>{t("privacy.s8.b2")}</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s9.title")}
            </h2>
            <p>{t("privacy.s9.p1")}</p>
            <ol className="list-decimal pl-6 space-y-1.5 text-xs sm:text-sm">
              <li>{t("privacy.s9.s1")}</li>
              <li>{t("privacy.s9.s2")}</li>
            </ol>
            <p>{t("privacy.s9.p2")}</p>
            <p>{t("privacy.s9.p3")}</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s10.title")}
            </h2>
            <p className="p-5 rounded-2xl bg-[var(--canvas)] border border-[var(--line)]">
              {t("privacy.s10.p1")}
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">
              {t("privacy.s11.title")}
            </h2>
            <p>{t("privacy.s11.p1")}</p>
          </section>

          {/* DPO Contact Card */}
          <div className="p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--line)] space-y-2">
            <h3 className="text-base font-bold text-[var(--navy)] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[var(--blue)]" />
              <span>{t("privacy.dpoCardTitle")}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)]">
              {t("privacy.dpoCardDesc")}
            </p>
            <a
              href="mailto:hello@getly.app"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--blue)] hover:underline"
            >
              <span>hello@getly.app</span>
            </a>
          </div>

          {/* Effective Date Footer */}
          <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between text-xs text-[var(--mist)]">
            <span>{t("privacy.s11.date")}</span>
            <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t("privacy.ndpaBadge")}</span>
            </span>
          </div>
        </div>
    </div>
  );
}
