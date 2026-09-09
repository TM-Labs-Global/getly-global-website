import { getTranslations } from "next-intl/server";
import HowItWorksAccordion from "@/shared/components/HowItWorksAccordion";

/**
 * Home's "How Getly Works" section, rebuilt on the shared
 * HowItWorksAccordion — the same numbered, reveal-fill accordion now used
 * across every product page. Replaces the old static 4-card bento grid;
 * copy is unchanged (home.howItWorks.*), only the presentation moved to
 * the shared component.
 */
export default async function HowItWorks() {
  const t = await getTranslations("home.howItWorks");

  const steps = [
    {
      key: "step1",
      image: "/how-it-works/home/step-1-image.jpeg",
      label: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      key: "step2",
      image: "/how-it-works/home/step-2-image.png",
      label: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      key: "step3",
      image: "/how-it-works/home/step-3-image.png",
      label: t("step3Title"),
      desc: t("step3Desc"),
    },
    {
      key: "step4",
      image: "/how-it-works/home/step-4-image.jpg",
      label: t("step4Title"),
      desc: t("step4Desc"),
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
            {t("badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        <HowItWorksAccordion steps={steps} />
      </div>
    </section>
  );
}
