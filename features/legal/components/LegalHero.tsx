import Image from "next/image";

interface LegalHeroProps {
  title: string;
  subtitle: string;
}

/**
 * Shared dark hero for every /legal/* page — styled after Grey's own
 * legal hub (grey.co/legal/terms-of-service): a full-bleed dark band with
 * a big "Legal" headline. Reuses Getly's own navy→blue hero gradient
 * (documented in globals.css as `.bg-gradient-navy-blue`) instead of
 * Grey's near-black treatment, and swaps Grey's tiled logo-mark watermark
 * for one of Getly's own 3D icons (the document glyph, from
 * public/3d/system/document.png) floating on the right — a straight-edged
 * rectangle, no diagonal cut, no eyebrow badge.
 */
export default function LegalHero({ title, subtitle }: LegalHeroProps) {
  return (
    <section className="relative w-full bg-gradient-navy-blue text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-40 sm:pt-52 pb-32 sm:pb-40 relative">
        <div className="max-w-xl space-y-5 relative z-10">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-md">
            {subtitle}
          </p>
        </div>

        {/* Decorative 3D document icon — Getly's own asset, not a stock
            pattern. Hidden below md so it never crowds the copy on mobile. */}
        <div className="hidden md:block absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-[240px] h-[240px] lg:w-[336px] lg:h-[336px] pointer-events-none">
          <Image
            src="/3d/system/document.png"
            alt=""
            aria-hidden="true"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(min-width: 1024px) 336px, 240px"
          />
        </div>
      </div>
    </section>
  );
}
