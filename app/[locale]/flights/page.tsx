import { JsonLd } from "@/shared/components/JsonLd";
import ProductHero from "@/shared/components/ProductHero";
import ProductFAQ from "@/shared/components/ProductFAQ";
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
