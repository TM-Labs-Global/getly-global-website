"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

/**
 * Same full-bleed black carousel structure as the site's other "Get 100%
 * control"-pattern section (measured live on revolut.com/business/cards —
 * see FlightsTrustCluster/CardsProtected for that provenance), but re-themed
 * for the Flights page: the content here is booking visibility (fare
 * comparison, currency, e-ticket timing, baggage alerts), not card controls.
 * Card-freeze/spend-limit content stays on the Cards page (CardsProtected)
 * where it belongs — duplicating it here just because the visual pattern
 * fit was flagged as off-topic and swapped out.
 */
const ITEMS = [
  { key: "item1", icon: "/3d/travel/globe-grid.png" },
  { key: "item2", icon: "/3d/money/fx-swirl.png" },
  { key: "item3", icon: "/3d/system/notification.png" },
  { key: "item4", icon: "/3d/travel/luggage.png" },
] as const;

export default function FlightsFareCarousel() {
  const t = useTranslations("flights.fareCarousel");
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-black text-white px-6 sm:px-10 py-14 sm:py-16">
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-[var(--blue)]/10 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
            {t("badge")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base text-white/70 leading-relaxed max-w-md">
            {t("subtitle")}
          </p>
          <div className="pt-2">
            <Link
              href="/how-it-works"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-colors"
            >
              {t("cta")}
            </Link>
          </div>
        </div>

        <div className="space-y-4 -mx-6 sm:mx-0 px-6 sm:px-0">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {ITEMS.map((c) => (
              <div
                key={c.key}
                className="snap-start shrink-0 w-[240px] sm:w-[270px] h-[340px] sm:h-[380px] rounded-[20px] bg-white/10 border border-white/10 p-6 flex flex-col justify-between"
              >
                <div className="relative w-12 h-12">
                  <Image src={c.icon} alt="" fill className="object-contain" sizes="48px" />
                </div>
                <h3 className="text-lg font-bold leading-snug">{t(`${c.key}`)}</h3>
              </div>
            ))}
          </div>

          <div className="h-[3px] w-full bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(progress, 14)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
