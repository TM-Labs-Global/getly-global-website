"use client";

import Image from "next/image";
import GetAppButton from "@/shared/components/GetAppButton";

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
  return (
    <section className="relative w-full h-screen min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-[var(--navy)] text-white">
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
