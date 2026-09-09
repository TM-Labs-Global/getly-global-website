import Image from "next/image";
import { ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { APP_STORE_URL } from "@/shared/utils/appLinks";
import { JsonLd } from "@/shared/components/JsonLd";
import ProductHero from "@/shared/components/ProductHero";
import ProductFAQ from "@/shared/components/ProductFAQ";
import InsuranceHowItWorks from "@/features/insurance/components/InsuranceHowItWorks";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insurance" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function InsurancePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insurance" });
  const tPillar = await getTranslations({ locale, namespace: "home.pillars.insurance" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t("faq.q1"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a1"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q2"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a2"),
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <ProductHero
        headlineLine1={tPillar("headlineLine1")}
        headlineLine2={tPillar("headlineLine2")}
        subtitle={t("subtitle")}
        imageSrc="/imagery/couple-laughing-phone-outdoors.png"
        imageAlt="Couple traveling with peace of mind using Getly travel protection"
        imagePosition="object-cover object-[center_25%]"
      />

      <div className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          <InsuranceHowItWorks />

          {/* Feature Split & 3D Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--navy)]">{t("features.title")}</h2>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                {t("features.desc")}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                  <span>{t("features.item1")}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                  <span>{t("features.item2")}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                  <span>{t("features.item3")}</span>
                </li>
              </ul>
            </div>

            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-[#07153d] border border-white/10 flex items-center justify-center p-8 shadow-inner">
              <div className="relative w-64 h-64">
                <Image
                  src="/3d/protection/insurance.png"
                  alt="Getly Travel Insurance Shield"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,105,255,0.35)]"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">{t("visual.tag")}</p>
                  <p className="text-sm font-bold">{t("visual.title")}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[var(--blue)] text-white text-xs font-bold shadow-glow">
                  {t("visual.badge")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductFAQ
        title={t("faq.title")}
        items={[
          { q: t("faq.q1"), a: t("faq.a1") },
          { q: t("faq.q2"), a: t("faq.a2") },
        ]}
      />
    </>
  );
}
