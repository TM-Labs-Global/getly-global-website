"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * Card Editions — two infinite marquee rows (Optics finishes, Landmark
 * destinations). Each tile is rendered as an actual card face — the
 * design art full-bleed on a rounded card, the Getly wordmark and Visa
 * mark layered into the bottom corners — rather than a matted product
 * shot, so the row reads the way a real card wall does.
 *
 * Modeled on revolut.com/cards' "Special-edition collections" (a dense
 * row of card art), rebuilt as two rows auto-scrolling in opposite
 * directions — Optics drifts right, Landmark drifts left — using the
 * .animate-marquee / .animate-marquee-reverse utilities already defined
 * in globals.css for the homepage ticker and footer logo wall, so this
 * section doesn't invent a second marquee mechanism.
 */

const OPTICS = [
  { key: "aurora", label: "Aurora", file: "Aurora.png" },
  { key: "chrome", label: "Chrome", file: "Chrome.png" },
  { key: "frost", label: "Frost", file: "Frost.png" },
  { key: "lemon", label: "Lemon", file: "Lemon.png" },
  { key: "midnight", label: "Midnight", file: "Midnight.png" },
  { key: "prism", label: "Prism", file: "Prism.png" },
  { key: "signature", label: "Signature", file: "Signature.png" },
] as const;

const LANDMARKS = [
  { key: "abuja", label: "Abuja", file: "Abuja.png" },
  { key: "accra", label: "Accra", file: "Accra.png" },
  { key: "amsterdam", label: "Amsterdam", file: "Amsterdam.png" },
  { key: "barcelona", label: "Barcelona", file: "Barcelona.png" },
  { key: "beijing", label: "Beijing", file: "Beijing.png" },
  { key: "berlin", label: "Berlin", file: "Berlin.png" },
  { key: "cancun", label: "Cancún", file: "Cancún.png" },
  { key: "capetown", label: "Cape Town", file: "Cape Town.png" },
  { key: "doha", label: "Doha", file: "Doha.png" },
  { key: "dubai", label: "Dubai", file: "Dubai.png" },
  { key: "halong", label: "Ha Long", file: "Ha Long.png" },
  { key: "kualalumpur", label: "Kuala Lumpur", file: "Kuala Lumpur.png" },
  { key: "nairobi", label: "Nairobi", file: "Nairobi.png" },
  { key: "newyork", label: "New York", file: "New york.png" },
  { key: "paris", label: "Paris", file: "Paris.png" },
  { key: "rio", label: "Rio", file: "Rio.png" },
  { key: "sanfrancisco", label: "San Francisco", file: "San Francisco.png" },
  { key: "sydney", label: "Sydney", file: "Sydney.png" },
  { key: "tokyo", label: "Tokyo", file: "Tokyo.png" },
  { key: "toronto", label: "Toronto", file: "Toronto.png" },
  { key: "egypt", label: "Egypt", file: "egypt.png" },
  { key: "rome", label: "Rome", file: "rome.png" },
] as const;

type Edition = { key: string; label: string; file: string };

function opticsSrc(file: string) {
  return `/getly-cards-edition/optics/${encodeURIComponent(file)}`;
}

function landmarkSrc(file: string) {
  return `/getly-cards-edition/landmark/${encodeURIComponent(file)}`;
}

function CardFace({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative shrink-0 w-[300px] sm:w-[380px] lg:w-[460px] aspect-[1576/998] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/10 shadow-soft">
      <Image
        src={src}
        alt={`Getly virtual card — ${label} edition`}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 460px, (min-width: 640px) 380px, 300px"
      />

      {/* Bottom-weighted wash so the Getly + Visa marks stay legible on
          every design — the lighter finishes (Lemon, Frost) especially. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

      <p className="absolute top-5 left-6 sm:top-6 sm:left-7 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
        {label}
      </p>

      <Image
        src="/brand/getly-logo.svg"
        alt="Getly"
        width={125}
        height={71}
        className="absolute bottom-5 left-6 sm:bottom-6 sm:left-7 h-7 sm:h-8 w-auto opacity-95"
      />
      <Image
        src="/partner-logos/visa-logo.png"
        alt="Visa"
        width={60}
        height={20}
        className="absolute bottom-5 right-6 sm:bottom-6 sm:right-7 h-5 sm:h-6 w-auto opacity-95"
      />
    </div>
  );
}

function MarqueeRow({
  items,
  srcFn,
  reverse = false,
  repeat = 2,
}: {
  items: readonly Edition[];
  srcFn: (file: string) => string;
  reverse?: boolean;
  repeat?: number;
}) {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[var(--canvas)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[var(--canvas)] to-transparent z-10 pointer-events-none" />

      <div
        className={`${reverse ? "animate-marquee-reverse" : "animate-marquee"} gap-5 sm:gap-6 px-6 py-2 hover:[animation-play-state:paused]`}
      >
        {Array.from({ length: repeat }).map((_, iter) => (
          <div
            key={iter}
            className="flex gap-5 sm:gap-6 shrink-0"
            {...(iter > 0 ? { "aria-hidden": true } : {})}
          >
            {items.map((item) => (
              <CardFace key={`${iter}-${item.key}`} src={srcFn(item.file)} label={item.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CardEditions() {
  const t = useTranslations("cards.editions");

  return (
    <div className="space-y-10 pt-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="space-y-5">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--mist)] px-1">
          {t("opticsLabel")}
        </h3>
        <MarqueeRow items={OPTICS} srcFn={opticsSrc} repeat={4} />
      </div>

      <div className="space-y-5">
        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--mist)] px-1">
          {t("landmarkLabel")}
        </h3>
        <MarqueeRow items={LANDMARKS} srcFn={landmarkSrc} reverse repeat={2} />
      </div>
    </div>
  );
}
