import { getTranslations } from "next-intl/server";
import HowItWorksAccordion from "@/shared/components/HowItWorksAccordion";

/**
 * Wallet's funding walkthrough, rebuilt on the shared HowItWorksAccordion —
 * same component now used across every product page. Copy is unchanged
 * (wallet.howItWorks.*, a 3-step flow), only the presentation moved from
 * the old static bento grid to the shared accordion.
 */
export default async function WalletHowItWorks() {
  const t = await getTranslations("wallet.howItWorks");

  const steps = [
    {
      key: "step1",
      image: "/how-it-works/wallet/step-1-image.jpeg",
      label: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      key: "step2",
      image: "/how-it-works/wallet/step-2-image.png",
      label: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      key: "step3",
      image: "/how-it-works/wallet/step-3-image.png",
      label: t("step3Title"),
      desc: t("step3Desc"),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
            {t("badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        <HowItWorksAccordion steps={steps} />
      </div>
    </section>
  );
}
