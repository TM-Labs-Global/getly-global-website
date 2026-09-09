"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Instagram, Linkedin } from "lucide-react";
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

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/get.getly/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Getly on Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/hellogetly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Getly on Twitter / X"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://ng.linkedin.com/company/getlyapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Getly on LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-4 h-4" />
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

        {/* Regulatory Notice & Contact Information */}
        <div className="pt-8 sm:pt-10 pb-6 sm:pb-8 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-xs text-white/60 leading-relaxed max-w-4xl">
            <p>
              Getly Limited, a subsidiary of Takeout Media Ltd, is a technology company working in partnership with licensed financial institutions. We are registered as Money Lending Agents under the High Court of Nigeria and audited for compliance with the Nigeria Data Protection Regulation (NDPR). Registered address: 36 Sokode Crescent, Wuse Zone 5, Abuja, Nigeria. Email:{" "}
              <a
                href="mailto:hello@getly.app"
                className="text-white/85 hover:text-white underline decoration-white/30 hover:decoration-white transition-colors"
              >
                hello@getly.app
              </a>
              ,
            </p>
            <p>
              Phone: NG –{" "}
              <a
                href="tel:+2348131296333"
                className="text-white/85 hover:text-white transition-colors"
              >
                +234 813 129 6333
              </a>
              , QA –{" "}
              <a
                href="tel:+97450690946"
                className="text-white/85 hover:text-white transition-colors"
              >
                +974 5069 0946
              </a>
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-2.5">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white p-1">
              <Image
                src="/partner-logos/getly-ndp-batch.png"
                alt="NDP Act Compliance Audit 2025"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[11px] text-white/70 leading-tight">
              <p className="font-bold text-white">NDPR Audited</p>
              <p className="text-white/50">Statutory Filing 2025</p>
            </div>
          </div>
        </div>

        {/* Copyright Bar & Language Selector */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>©2025 Getly Technologies Limited. All rights reserved.</p>
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
