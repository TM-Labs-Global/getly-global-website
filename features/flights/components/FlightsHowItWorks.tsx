import Image from "next/image";
import { getTranslations } from "next-intl/server";

/**
 * Flight-specific "how it works" — same bento-grid visual language as the
 * homepage's HowItWorks.tsx (numbered card, quiet 3D icon, eyebrow +
 * title + desc), but with its own 4 steps for the booking flow. Fills
 * the IA doc's "how it works" gap on the Flights page.
 */
export default async function FlightsHowItWorks() {
  const t = await getTranslations("flights.howItWorks");

  const steps = [
    {
      num: "01",
      key: "step1",
      image: "/3d/action/search.png",
      style: {
        background:
          "linear-gradient(160deg, color-mix(in srgb, var(--blue) 7%, transparent) 0%, white 62%)",
      },
      borderColor: "border-[var(--line)]",
      textColor: "text-[var(--navy)]",
      descColor: "text-[var(--ink-soft)]",
      eyebrowColor: "text-[var(--blue)]",
      numColor: "text-[var(--navy)]/30",
    },
    {
      num: "02",
      key: "step2",
      image: "/3d/money/fx-swirl.png",
      style: {
        background:
          "linear-gradient(160deg, color-mix(in srgb, var(--lemon) 14%, transparent) 0%, white 62%)",
      },
      borderColor: "border-[var(--line)]",
      textColor: "text-[var(--navy)]",
      descColor: "text-[var(--navy)]/70",
      eyebrowColor: "text-[var(--navy)]/70",
      numColor: "text-[var(--navy)]/30",
    },
    {
      num: "03",
      key: "step3",
      image: "/3d/wallet/wallet-fund.png",
      style: {
        background: "linear-gradient(140deg, var(--navy) 0%, var(--blue) 130%)",
      },
      borderColor: "border-white/15",
      textColor: "text-white",
      descColor: "text-white/75",
      eyebrowColor: "text-white/70",
      numColor: "text-white/40",
    },
    {
      num: "04",
      key: "step4",
      image: "/3d/status/verified.png",
      style: {
        background:
          "linear-gradient(160deg, color-mix(in srgb, var(--navy) 5%, transparent) 0%, white 62%)",
      },
      borderColor: "border-[var(--line)]",
      textColor: "text-[var(--navy)]",
      descColor: "text-[var(--ink-soft)]",
      eyebrowColor: "text-[var(--blue)]",
      numColor: "text-[var(--navy)]/30",
    },
  ] as const;

  const cardBase =
    "relative rounded-[28px] overflow-hidden h-[360px] sm:h-[400px] p-8 sm:p-10 flex flex-col justify-between border shadow-[0_0_32px_rgba(15,24,76,0.08)]";

  return (
    <div className="space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {steps.map((s) => (
          <article key={s.num} className={`${cardBase} ${s.borderColor}`} style={s.style}>
            <div className="flex items-start justify-between w-full">
              <span className={`text-4xl sm:text-5xl font-light tracking-tight ${s.numColor}`}>
                {s.num}
              </span>
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <Image src={s.image} alt="" fill className="object-contain" sizes="56px" />
              </div>
            </div>

            <div className="space-y-2.5 max-w-sm mt-auto">
              <p className={`text-xs font-bold uppercase tracking-widest ${s.eyebrowColor}`}>
                {t(`${s.key}.eyebrow`)}
              </p>
              <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-[1.15] ${s.textColor}`}>
                {t(`${s.key}.title`)}
              </h3>
              <p className={`text-sm leading-relaxed ${s.descColor}`}>
                {t(`${s.key}.desc`)}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
