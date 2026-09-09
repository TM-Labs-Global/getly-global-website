import { JsonLd } from "@/shared/components/JsonLd";
import ProductHero from "@/shared/components/ProductHero";
import FlightsHowItWorks from "@/features/flights/components/FlightsHowItWorks";
import FlightsPhotoFeature from "@/features/flights/components/FlightsPhotoFeature";
import FlightsTrustCluster from "@/features/flights/components/FlightsTrustCluster";
import FlightsTabbedFeature from "@/features/flights/components/FlightsTabbedFeature";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "flights" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function FlightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "flights" });
  const tPillar = await getTranslations({ locale, namespace: "home.pillars.flights" });

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
        imageSrc="/imagery/woman-airplane-window-seat-phone.png"
        imageAlt="Traveler booking flights on airplane with Getly"
        imagePosition="object-cover object-[center_30%]"
      />

      <div className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6 space-y-20 sm:space-y-24">
          <FlightsHowItWorks />

          <FlightsPhotoFeature />

          <FlightsTrustCluster />

          <FlightsTabbedFeature />

          {/* Quick FAQ Strip */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-6">
            <h3 className="text-2xl font-bold text-[var(--navy)]">{t("faq.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[var(--navy)]">{t("faq.q1")}</h4>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  {t("faq.a1")}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[var(--navy)]">{t("faq.q2")}</h4>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                  {t("faq.a2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
