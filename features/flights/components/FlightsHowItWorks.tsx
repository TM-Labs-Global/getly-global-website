import { getTranslations } from "next-intl/server";
import HowItWorksAccordion from "@/shared/components/HowItWorksAccordion";

/**
 * Flight-specific "how it works" — now built on the shared
 * HowItWorksAccordion (the usetimon.com-style auto-cycling card row)
 * instead of a static bento grid, so this section behaves the same way
 * across every product page that adopts it. Same 4 booking steps and
 * icons as before; each step now also carries a background photo since
 * the accordion is a full-bleed-photo pattern.
 */
export default async function FlightsHowItWorks() {
  const t = await getTranslations("flights.howItWorks");

  const steps = [
    {
      key: "step1",
      image: "/how-it-works/flights/step-1-image.png",
      icon: "/3d/action/search.png",
      label: t("step1.title"),
      desc: t("step1.desc"),
    },
    {
      key: "step2",
      image: "/how-it-works/flights/step-2-image.png",
      icon: "/3d/money/fx-swirl.png",
      label: t("step2.title"),
      desc: t("step2.desc"),
    },
    {
      key: "step3",
      image: "/how-it-works/flights/step-3-image.png",
      icon: "/3d/wallet/wallet-fund.png",
      label: t("step3.title"),
      desc: t("step3.desc"),
    },
    {
      key: "step4",
      image: "/how-it-works/flights/step-4-image.png",
      icon: "/3d/status/verified.png",
      label: t("step4.title"),
      desc: t("step4.desc"),
    },
  ];

  return (
    <div className="space-y-10">
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">
          {t("title")}
        </h2>
        <p className="text-base sm:text-lg text-[var(--ink-soft)] font-medium leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <HowItWorksAccordion steps={steps} />
    </div>
  );
}
