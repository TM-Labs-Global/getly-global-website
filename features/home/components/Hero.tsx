"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import GetAppButton from "@/shared/components/GetAppButton";
import { useViewportHeight } from "@/shared/hooks/useViewportHeight";

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

  // Two layers, on purpose:
  //  1. className="h-svh" — a CSS-only baseline (svh = the SMALLEST the
  //     visible viewport can ever be, i.e. address-bar fully expanded)
  //     that's correct on its own for SSR and the instant before JS runs.
  //  2. An inline style once useViewportHeight() has a real measurement —
  //     inline styles always win over any class-based height, so this is
  //     the actual, adaptive source of truth from then on: it tracks the
  //     live visible area (shrinking for the on-screen keyboard, the
  //     toolbar, etc.) via the visualViewport API and re-measures itself
  //     on every resize/orientation change, rather than depending on a
  //     single static CSS unit.
  // This line has already been silently reverted back to the old,
  // overflowing "h-screen min-h-[100dvh]" more than once by unrelated
  // commits landing on this repo from a stale local branch. The inline
  // style is the belt-and-suspenders fix for exactly that: even if the
  // className regresses again, the measured pixel height still overrides
  // it at runtime, so the hero can't silently go back to overflowing the
  // screen without both layers being removed at once.
  const viewportHeight = useViewportHeight();

  return (
    <section
      className="relative w-full h-svh flex flex-col justify-end overflow-hidden bg-[var(--navy)] text-white"
      style={viewportHeight ? { height: viewportHeight } : undefined}
    >
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
