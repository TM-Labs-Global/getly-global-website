import ProductHero from "@/shared/components/ProductHero";
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

          {/* Quick FAQ Strip */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-6 !mt-16">
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
