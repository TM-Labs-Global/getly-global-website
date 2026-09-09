"use client";

import Image from "next/image";
import GetAppButton from "@/shared/components/GetAppButton";
import { useViewportHeight } from "@/shared/hooks/useViewportHeight";

interface ProductHeroProps {
  headlineLine1: string;
  headlineLine2: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
}

export default function ProductHero({
  headlineLine1,
  headlineLine2,
  subtitle,
  imageSrc,
  imageAlt,
  imagePosition = "object-cover object-center",
}: ProductHeroProps) {
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
      {/* 1. Full-Bleed Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={imagePosition}
        />
      </div>

      {/* 2. Legibility gradient — bottom-anchored only, matching Home Hero */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* 3. Bottom-left content cluster */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-8 md:pb-14 lg:pb-16">
        <div className="max-w-xl space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            <span className="block">{headlineLine1}</span>
            <span className="block">{headlineLine2}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-medium max-w-md">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <GetAppButton size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
