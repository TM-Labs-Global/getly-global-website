"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WalletHowItWorks() {
  const t = useTranslations("wallet.howItWorks");

  const steps = [
    {
      num: t("step1Num"),
      eyebrow: t("step1Eyebrow"),
      title: t("step1Title"),
      desc: t("step1Desc"),
      image: "/3d/identity/kyc-verified.png",
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
      num: t("step2Num"),
      eyebrow: t("step2Eyebrow"),
      title: t("step2Title"),
      desc: t("step2Desc"),
      image: "/3d/card/card-single.png",
      style: {
        background:
          "linear-gradient(140deg, var(--navy) 0%, var(--blue) 130%)",
      },
      borderColor: "border-white/15",
      textColor: "text-white",
      descColor: "text-white/75",
      eyebrowColor: "text-white/70",
      numColor: "text-white/40",
    },
    {
      num: t("step3Num"),
      eyebrow: t("step3Eyebrow"),
      title: t("step3Title"),
      desc: t("step3Desc"),
      image: "/3d/travel/globe-explore.png",
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
  ];

  const cardBase =
    "relative rounded-[28px] overflow-hidden h-[380px] sm:h-[420px] p-8 sm:p-10 flex flex-col justify-between border shadow-[0_0_32px_rgba(15,24,76,0.08)] transition-all duration-300";

  return (
    <section className="py-24 sm:py-32 bg-[var(--canvas)] relative overflow-hidden border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-14">
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

        {/* 3-Step Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <article
              key={s.num}
              className={`${cardBase} ${s.borderColor}`}
              style={s.style}
            >
              {/* Top Row: Light Numeral & Quiet 3D Accent Icon */}
              <div className="flex items-start justify-between w-full">
                <span className={`text-4xl sm:text-5xl font-light tracking-tight tabular ${s.numColor}`}>
                  {s.num}
                </span>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-contain drop-shadow-[0_4px_8px_rgba(15,24,76,0.12)]"
                    sizes="64px"
                  />
                </div>
              </div>

              {/* Bottom Row: Eyebrow, Title & Description */}
              <div className="relative space-y-3 mt-auto">
                <p className={`text-xs font-bold uppercase tracking-widest ${s.eyebrowColor}`}>
                  {s.eyebrow}
                </p>
                <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-[1.2] ${s.textColor}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed ${s.descColor}`}>
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
