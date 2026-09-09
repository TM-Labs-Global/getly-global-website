import { getTranslations } from "next-intl/server";
import HowItWorksAccordion from "@/shared/components/HowItWorksAccordion";

/**
 * Insurance's "covered in minutes" flow on the shared HowItWorksAccordion —
 * same numbered, reveal-fill component now used across every product page.
 * Copy lives at insurance.howItWorks.*.
 */
export default async function InsuranceHowItWorks() {
  const t = await getTranslations("insurance.howItWorks");

  const steps = [
    {
      key: "step1",
      image: "/imagery/standing-on-a-textured-rock.png",
      label: t("step1.title"),
      desc: t("step1.desc"),
    },
    {
      key: "step2",
      image: "/imagery/held-by-a-user-outdoors-in-the-sun.jpeg",
      label: t("step2.title"),
      desc: t("step2.desc"),
    },
    {
      key: "step3",
      image: "/imagery/man-rooftop-city-skyline-sunset.png",
      label: t("step3.title"),
      desc: t("step3.desc"),
    },
    {
      key: "step4",
      image: "/imagery/mockuuups-man-hand-holding-an-iphone-13-mockup.jpeg",
      label: t("step4.title"),
      desc: t("step4.desc"),
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">{t("badge")}</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--navy)] tracking-tight">{t("title")}</h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed">{t("subtitle")}</p>
      </div>
      <HowItWorksAccordion steps={steps} />
    </div>
  );
}
