"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PartnerLogos() {
  const t = useTranslations("home.partners");

  const topRow = [
    { name: "Stripe", src: "/partner-logos/Stripe.svg" },
    { name: "Circle", src: "/partner-logos/circle.png" },
    { name: "Bitnob", src: "/partner-logos/bitnob-logo.webp", sizeClass: "h-7 w-24 sm:h-8 sm:w-28 md:w-36" },
    { name: "Flutterwave", src: "/partner-logos/Flutterwave_Logo.png" },
    { name: "African Union", src: "/partner-logos/african-union.png" },
  ];

  const bottomRow = [
    { name: "Incubated at QSTP", src: "/partner-logos/Incubated-at-QSTP-logo.png" },
    { name: "QFC", src: "/partner-logos/QFC-logo.svg" },
    { name: "IATF", src: "/partner-logos/iatf.png" },
    { name: "Industry Partner", src: "/partner-logos/logo-main.svg" },
    { name: "NDPC", src: "/partner-logos/ndpc.jpg", sizeClass: "h-11 w-24 sm:h-14 sm:w-32 md:w-40" },
    { name: "NDP Act Compliance Audit", src: "/partner-logos/getly-ndp-batch.png", sizeClass: "h-11 w-11 sm:h-14 sm:w-16" },
  ];

  return (
    <section className="py-14 bg-white border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6 space-y-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--mist)]">
          {t("backedBy")}
        </p>

        {/* Top Row: 4 Logos — tighter tiles and a bigger row gap than
            column gap on mobile, so wrapped rows get real breathing room
            instead of sitting almost flush against each other; steps back
            up to the original sizing/spacing from sm/md. */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-9 sm:gap-x-8 sm:gap-y-8 md:gap-x-12 opacity-90 hover:opacity-100 transition-opacity">
          {topRow.map((p) => (
            <div
              key={p.src}
              className="relative h-9 w-20 sm:h-11 sm:w-28 md:w-36 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={p.src}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row: 5 Logos (NDPC comes last with custom larger size) */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 sm:gap-x-8 md:gap-x-10 opacity-90 hover:opacity-100 transition-opacity pt-2">
          {bottomRow.map((p) => (
            <div
              key={p.src}
              className={`relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 ${
                p.sizeClass || "h-8 w-20 sm:h-10 sm:w-24 md:w-32"
              }`}
            >
              <Image
                src={p.src}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
