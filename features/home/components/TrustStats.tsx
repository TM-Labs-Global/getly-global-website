"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import GetAppButton from "@/shared/components/GetAppButton";

export default function TrustStats() {
  const t = useTranslations("home.trust");

  const leftStats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
  ];
  const rightStats = [
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--navy)] text-white pt-20 sm:pt-28 pb-10 lg:pb-0">
      {/* Soft glow behind the headline, Plasma-style centered composition */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[var(--blue)]/15 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center space-y-5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
          <span className="block">{t("headlineLine1")}</span>
          <span className="block">{t("headlineLine2")}</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto font-medium leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="flex justify-center pt-2">
          <GetAppButton size="md" />
        </div>
      </div>

      {/* Phone-in-hand mockup flanked by the trust stats, Plasma-style */}
      <div className="relative max-w-6xl mx-auto px-6 mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:items-end gap-10 lg:gap-6">
        {/* Left stats — desktop only, vertically centered against the taller phone */}
        <div className="hidden lg:flex flex-col items-end text-right gap-12 pr-4 lg:self-center">
          {leftStats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl xl:text-5xl font-black text-[var(--blue)] tracking-tight">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-white/70 mt-1 max-w-[10rem]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Phone mockup — bigger, and bottom-anchored so it sits flush
            against the section's own bottom edge (self-end + section pb-0
            at lg+) instead of floating with empty navy space beneath it. */}
        <div className="relative mx-auto w-[300px] sm:w-[380px] lg:w-[440px] xl:w-[520px] aspect-[1473/2000] lg:self-end">
          <Image
            src="/mockup/hand/travel-finance-app-on-smartphone.png"
            alt="The Getly app dashboard, shown held in a hand on a smartphone"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 440px, (min-width: 640px) 380px, 300px"
          />
        </div>

        {/* Right stats — desktop only, vertically centered against the taller phone */}
        <div className="hidden lg:flex flex-col items-start text-left gap-12 pl-4 lg:self-center">
          {rightStats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl xl:text-5xl font-black text-[var(--blue)] tracking-tight">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-white/70 mt-1 max-w-[10rem]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / tablet — stats collapse into a 2x2 grid below the phone */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:hidden max-w-sm mx-auto pt-2">
          {[...leftStats, ...rightStats].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-black text-[var(--blue)] tracking-tight">{s.value}</div>
              <div className="text-xs font-semibold text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
