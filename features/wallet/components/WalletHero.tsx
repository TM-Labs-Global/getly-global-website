"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/shared/utils/appLinks";
import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function WalletHero() {
  const t = useTranslations("wallet");

  return (
    <section className="relative w-full h-screen h-[100dvh] min-h-[640px] max-h-[1200px] pt-16 sm:pt-20 lg:pt-0 pb-0 bg-[var(--canvas)] overflow-hidden border-b border-[var(--line)] flex flex-col justify-between lg:justify-center">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--blue)]/8 blur-[120px] pointer-events-none rounded-full" />

      {/* Main Content Container: Header, Subtitle, Badges & CTAs */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-1 lg:flex-none flex flex-col justify-center">
        <div className="lg:max-w-xl xl:max-w-2xl space-y-4 sm:space-y-6 text-left py-2 sm:py-4 lg:py-0">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.08]">
            {t("title")}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--ink-soft)] max-w-lg font-medium leading-relaxed">
            {t("subtitle")}
          </p>

          {/* Quick Benefits Bullet Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-[var(--navy)]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] shadow-flat">
              <CheckCircle2 className="w-4 h-4 text-[var(--blue)] shrink-0" />
              Any Visa or Mastercard
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] shadow-flat">
              <Zap className="w-4 h-4 text-[var(--amber)] shrink-0" />
              Instant USD Balance
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] shadow-flat">
              <ShieldCheck className="w-4 h-4 text-[var(--green)] shrink-0" />
              Zero Declines Abroad
            </span>
          </div>

          {/* App Store Download Badges */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 sm:h-12 w-28 sm:w-36 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/app-stores/app-store.png"
                alt="Download on the App Store"
                fill
                className="object-contain object-left"
                priority
              />
            </a>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-10 sm:h-12 w-28 sm:w-36 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/app-stores/play-store.png"
                alt="Get it on Google Play"
                fill
                className="object-contain object-left"
                priority
              />
            </a>
          </div>

        </div>
      </div>

      {/* Hero Visual: Down at bottom on mobile, extreme right on desktop */}
      <div className="relative lg:absolute lg:right-0 lg:bottom-0 w-full lg:w-[46vw] xl:w-[48vw] max-w-[480px] sm:max-w-[560px] lg:max-w-[780px] xl:max-w-[880px] h-[38vh] sm:h-[42vh] lg:h-[88%] xl:h-[94%] flex items-end justify-center lg:justify-end pointer-events-none mx-auto lg:mx-0 shrink-0">
        <div className="relative w-full h-full">
          <Image
            src="/imagery/standing-on-a-textured-rock.png"
            alt="Getly Global Traveler"
            fill
            className="object-contain object-bottom lg:object-right-bottom drop-shadow-[0_20px_50px_rgba(15,24,76,0.18)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

    </section>
  );
}
