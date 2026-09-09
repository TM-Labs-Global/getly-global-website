import { getTranslations } from "next-intl/server";
import HowItWorksAccordion from "@/shared/components/HowItWorksAccordion";

/**
 * Visa's "approved in minutes" flow on the shared HowItWorksAccordion —
 * same numbered, reveal-fill component now used across every product page.
 * Copy lives at visa.howItWorks.*.
 */
export default async function VisaHowItWorks() {
  const t = await getTranslations("visa.howItWorks");

  const steps = [
    {
      key: "step1",
      image: "/imagery/holding-smartphone-mockup-on-the-street.jpeg",
      label: t("step1.title"),
      desc: t("step1.desc"),
    },
    {
      key: "step2",
      image: "/imagery/in-a-users-hand-at-dinner-table.jpeg",
      label: t("step2.title"),
      desc: t("step2.desc"),
    },
    {
      key: "step3",
      image: "/imagery/woman-phone-call-walking-steps-suitcase-overhead.png",
      label: t("step3.title"),
      desc: t("step3.desc"),
    },
    {
      key: "step4",
      image: "/imagery/woman-airplane-window-seat-phone.png",
      label: t("step4.title"),
      desc: t("step4.desc"),
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-10">
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">{t("badge")}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">{t("title")}</h2>
        <p className="text-base sm:text-lg text-[var(--ink-soft)] font-medium leading-relaxed">{t("subtitle")}</p>
      </div>
      <HowItWorksAccordion steps={steps} />
    </div>
  );
}
