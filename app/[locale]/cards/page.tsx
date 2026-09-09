import ProductHero from "@/shared/components/ProductHero";
import ProductFAQ from "@/shared/components/ProductFAQ";
import { JsonLd } from "@/shared/components/JsonLd";
import CardEditions from "@/features/cards/components/CardEditions";
import CardsProtected from "@/features/cards/components/CardsProtected";
import CardCapabilities from "@/features/cards/components/CardCapabilities";
import CardsHowItWorks from "@/features/cards/components/CardsHowItWorks";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cards" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function CardsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cards" });
  const tPillar = await getTranslations({ locale, namespace: "home.pillars.cards" });

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
        imageSrc="/imagery/merchant-apple-pay-contactless-payment-mockup.jpeg"
        imageAlt="Tapping a phone to pay contactless with Apple Pay at a merchant terminal"
      />

      <div className="pt-16 pb-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {/* Capabilities grid — grey.co/cards-style 2x2 panel grid, placed
              right after the hero. Placeholder mockups per the user's
              request. The older alternating "Feature panels" section that
              covered this same ground has been removed. */}
          <CardCapabilities />

          <CardsHowItWorks />

          <CardEditions />

          <CardsProtected />
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
