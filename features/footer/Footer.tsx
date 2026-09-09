"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/shared/utils/appLinks";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("common.footer");
  const tNav = useTranslations("common.nav");

  const marqueeItems = [
    { type: "icon", src: "/3d/travel/planet-ring.png", alt: "Saturn Planet" },
    { type: "icon", src: "/3d/action/send.png", alt: "Paper Plane" },
    { type: "icon", src: "/3d/brand/mark-ring-diamond.png", alt: "Glow Token" },
    { type: "icon", src: "/3d/protection/insurance.png", alt: "Insurance Shield" },
    { type: "icon", src: "/3d/travel/passport.png", alt: "Passport Visa" },
    { type: "logo", src: "/brand/getly-logo.svg", alt: "Getly Logo" },
  ];

  return (
    <footer className="bg-[#07153d] text-white pt-16 sm:pt-20 pb-4 border-t border-white/10 relative overflow-hidden">
      {/* Soft Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--blue)]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 sm:pb-14 border-b border-white/10">
          {/* Brand Info & Slogan */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-32 sm:w-36 h-9 sm:h-10">
                <Image
                  src="/brand/getly-logo.svg"
                  alt="Getly"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm max-w-sm leading-relaxed">
              {t("tagline")}
            </p>

            {/* Store Download Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-10 w-32 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/app-stores/app-store.png"
                  alt="Download on the App Store"
                  fill
                  className="object-contain object-left"
                />
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-10 w-32 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/app-stores/play-store.png"
                  alt="Get it on Google Play"
                  fill
                  className="object-contain object-left"
                />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">{t("product")}</h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/wallet" className="hover:text-white transition-colors">
                  {tNav("wallet")}
                </Link>
              </li>
              <li>
                <Link href="/cards" className="hover:text-white transition-colors">
                  {tNav("cards")}
                </Link>
              </li>
              <li>
                <Link href="/esim" className="hover:text-white transition-colors">
                  {tNav("esim")}
                </Link>
              </li>
              <li>
                <Link href="/flights" className="hover:text-white transition-colors">
                  {tNav("flights")}
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-white transition-colors">
                  {tNav("hotels")}
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-white transition-colors">
                  {tNav("insurance")}
                </Link>
              </li>
              <li>
                <Link href="/visa" className="hover:text-white transition-colors">
                  {tNav("visa")}
                </Link>
              </li>
              <li>
                <Link href="/ai-trip-planner" className="hover:text-white transition-colors">
                  {tNav("aiTripPlanner")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">{t("company")}</h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="hover:text-white transition-colors">
                  {tNav("coverage")}
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  {tNav("security")}
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white transition-colors">
                  {t("press")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">{t("support")}</h4>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar & Language Selector */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Getly. {t("rights")}</p>
          <div className="flex items-center gap-4">
            <LanguageSwitcher isDark={true} />
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-center sm:text-right text-white/70">{t("superAppSubtitle")}</p>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Giant 3D Icons & Logo Watermark Marquee */}
      <div className="pt-6 sm:pt-8 pb-4 overflow-hidden relative select-none w-full">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#07153d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#07153d] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee items-center gap-1 sm:gap-2 md:gap-3 hover:[animation-play-state:paused]">
          {[1, 2].map((iteration) => (
            <div
              key={iteration}
              className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0"
            >
              {marqueeItems.map((item, idx) => (
                <div
                  key={`${iteration}-${idx}`}
                  className={`group relative shrink-0 flex items-center justify-center h-36 sm:h-52 md:h-72 lg:h-[340px] opacity-15 hover:opacity-100 transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    item.type === "logo" ? "aspect-[125/71]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-contain transition-all duration-500 ${
                      item.type === "icon"
                        ? "drop-shadow-none group-hover:drop-shadow-[0_20px_40px_rgba(0,105,255,0.4)]"
                        : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
