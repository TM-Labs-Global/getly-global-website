import { getTranslations } from "next-intl/server";
import HowItWorksAccordion from "@/shared/components/HowItWorksAccordion";

/**
 * eSIM's "get connected" flow on the shared HowItWorksAccordion — same
 * numbered, reveal-fill component now used across every product page.
 * Copy lives at esim.howItWorks.*.
 */
export default async function EsimHowItWorks() {
  const t = await getTranslations("esim.howItWorks");

  const steps = [
    {
      key: "step1",
      image: "/how-it-works/esim/step-1-image.png",
      label: t("step1.title"),
      desc: t("step1.desc"),
    },
    {
      key: "step2",
      image: "/how-it-works/esim/step-2-image.png",
      label: t("step2.title"),
      desc: t("step2.desc"),
    },
    {
      key: "step3",
      image: "/how-it-works/esim/step-3-image.png",
      label: t("step3.title"),
      desc: t("step3.desc"),
    },
    {
      key: "step4",
      image: "/how-it-works/esim/step-4-image.png",
      label: t("step4.title"),
      desc: t("step4.desc"),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">{t("badge")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">{t("title")}</h2>
          <p className="text-base sm:text-lg text-[var(--ink-soft)] font-medium leading-relaxed">{t("subtitle")}</p>
        </div>
        <HowItWorksAccordion steps={steps} />
      </div>
    </section>
  );
}
