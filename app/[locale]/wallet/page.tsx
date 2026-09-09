import { getTranslations } from "next-intl/server";
import { JsonLd } from "@/shared/components/JsonLd";
import WalletHero from "@/features/wallet/components/WalletHero";
import WalletAppDemo from "@/features/wallet/components/WalletAppDemo";
import WalletBenefitsGrid from "@/features/wallet/components/WalletBenefitsGrid";
import WalletSecurity from "@/features/wallet/components/WalletSecurity";
import WalletFAQ from "@/features/wallet/components/WalletFAQ";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "wallet" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function WalletPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "wallet" });

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
      {
        "@type": "Question",
        name: t("faq.q3"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a3"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q4"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a4"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q5"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a5"),
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <main className="min-h-screen">
        <WalletHero />
        <WalletAppDemo />
        <WalletBenefitsGrid />
        <WalletSecurity />
        <WalletFAQ />
      </main>
    </>
  );
}
