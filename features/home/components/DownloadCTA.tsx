"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/shared/utils/appLinks";

export default function DownloadCTA() {
  const t = useTranslations("home.download");

  return (
    <section className="relative overflow-hidden bg-[var(--blue)] text-white py-24 sm:py-32 text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/80">
          {t("eyebrow")}
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
          <span className="block">{t("headlineLine1")}</span>
          <span className="block">{t("headlineLine2")}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto font-medium leading-relaxed">
          {t("subtitle")}
        </p>

        {/* Store Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-14 sm:h-16 w-44 sm:w-52 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/app-stores/app-store.png"
              alt="Download on the App Store"
              fill
              className="object-contain"
            />
          </a>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-14 sm:h-16 w-44 sm:w-52 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/app-stores/play-store.png"
              alt="Get it on Google Play"
              fill
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
