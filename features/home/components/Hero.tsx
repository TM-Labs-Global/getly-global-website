"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import GetAppButton from "@/shared/components/GetAppButton";

export default function Hero() {
  const t = useTranslations("home.hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  const handleVideoCanPlay = () => {
    setVideoReady(true);
  };

  return (
    <section className="relative w-full h-screen min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-[var(--navy)] text-white">
      {/* 1. Full-Bleed Video Background (Desktop / Tablet) */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoCanPlay}
          className={`hidden md:block absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/hero/hero-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* 2. Desktop Poster Image Fallback (Buffer frame while video loads / Permanent frame for reduced motion) */}
      <div
        className={`hidden md:block absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${
          videoReady && !reducedMotion ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Image
          src="/hero/hero-image.jpg"
          alt="Getly Global Traveler"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 3. Mobile Hero Image (Purpose-built for mobile viewports) */}
      <div className="block md:hidden absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero/mobile-image.png"
          alt="Getly Global Traveler"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 4. Legibility gradient — bottom-anchored only, like Apple's product-page hero.
          Transparent through the top/middle so the video reads clearly; darkens
          only behind the text block at the bottom-left. */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* 5. Bottom-left content cluster — headline, subhead, CTAs. Same
          max-w-7xl/px-6 grid as the rest of the page; the narrow
          max-w-xl column inside it keeps the text block itself compact so
          the video's subject on the right stays visible. */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-8 md:pb-14 lg:pb-16">
        <div className="max-w-xl space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">{t("headlineLine2")}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-medium max-w-md">
            {t("subhead")}
          </p>

          {/* CTA — segmented Get App pill (Play / label / Apple) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <GetAppButton size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
