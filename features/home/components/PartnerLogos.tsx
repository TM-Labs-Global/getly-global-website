"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PartnerLogos() {
  const t = useTranslations("home.partners");

  const topRow = [
    { name: "Stripe", src: "/partner-logos/Stripe.svg" },
    { name: "Circle", src: "/partner-logos/circle.png" },
    { name: "Flutterwave", src: "/partner-logos/Flutterwave_Logo.png" },
    { name: "African Union", src: "/partner-logos/african-union.png" },
  ];

  const bottomRow = [
    { name: "Incubated at QSTP", src: "/partner-logos/Incubated-at-QSTP-logo.png" },
    { name: "QFC", src: "/partner-logos/QFC-logo.svg" },
    { name: "IATF", src: "/partner-logos/iatf.png" },
    { name: "Industry Partner", src: "/partner-logos/logo-main.svg" },
    { name: "NDPC", src: "/partner-logos/ndpc.jpg", sizeClass: "h-16 w-36 sm:w-44" },
  ];

  return (
    <section className="py-14 bg-white border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6 space-y-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--mist)]">
          {t("backedBy")}
        </p>

        {/* Top Row: 4 Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-90 hover:opacity-100 transition-opacity">
          {topRow.map((p) => (
            <div
              key={p.src}
              className="relative h-11 w-28 sm:w-36 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
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
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-90 hover:opacity-100 transition-opacity pt-2">
          {bottomRow.map((p) => (
            <div
              key={p.src}
              className={`relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 ${
                p.sizeClass || "h-10 w-24 sm:w-32"
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
