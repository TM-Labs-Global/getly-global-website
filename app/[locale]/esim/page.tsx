import { JsonLd } from "@/shared/components/JsonLd";
import ProductHero from "@/shared/components/ProductHero";
import EsimHowItWorks from "@/features/esim/components/EsimHowItWorks";
import EsimPlanExplorer from "@/features/esim/components/EsimPlanExplorer";
import EsimFeatureGrid from "@/features/esim/components/EsimFeatureGrid";
import EsimUseCases from "@/features/esim/components/EsimUseCases";
import EsimPillars from "@/features/esim/components/EsimPillars";
import EsimCompatibilityFAQ from "@/features/esim/components/EsimCompatibilityFAQ";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "esim" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function EsimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "esim" });
  const tPillar = await getTranslations({ locale, namespace: "home.pillars.esim" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an eSIM and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An eSIM (embedded SIM) is a digital SIM card built directly into your smartphone's hardware. Instead of inserting a physical plastic SIM chip, you simply download and install a digital network profile from the Getly app to connect to local mobile carriers immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Do I lose my primary phone number when using Getly eSIM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your eSIM operates alongside your physical SIM, allowing you to keep your primary number active for WhatsApp and messages.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use personal hotspot and tethering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all Getly eSIM packages support personal hotspot tethering for laptops and companion devices.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      
      {/* 1. Full Screen Hero (100% height template matching Home) */}
      <ProductHero
        headlineLine1={tPillar("headlineLine1")}
        headlineLine2={tPillar("headlineLine2")}
        subtitle={t("subtitle")}
        imageSrc="/imagery/woman-phone-call-walking-steps-suitcase-overhead.png"
        imageAlt="Traveler connected via Getly global eSIM"
        imagePosition="object-cover object-[center_35%]"
      />

      <EsimHowItWorks />

      {/* 2. Interactive Destination Plan Explorer (Inspiration: Image 4) */}
      <EsimPlanExplorer />

      {/* 3. 2-Column Feature Cards with Real Mobile Screens (Inspiration: Image 1) */}
      <EsimFeatureGrid />

      {/* 4. 3 Vertical Photography Cards with Floating Data Widgets (Inspiration: Image 3 & 5) */}
      <EsimUseCases />

      {/* 5. 3 Dark Theme Benefit Pillars with 3D Assets (Inspiration: Image 2) */}
      <EsimPillars />

      {/* 6. Device Compatibility Check & Accordion FAQ */}
      <EsimCompatibilityFAQ />
    </>
  );
}
