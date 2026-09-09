"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Globe,
  CreditCard,
  Wifi,
  Plane,
  Hotel,
  ShieldCheck,
  FileCheck,
  ArrowUpRight,
  Play,
  Pause,
  RotateCw,
} from "lucide-react";

// Compact "accepted wallets" mark — Apple glyph + a plain G for Google,
// both followed by "Pay" — used as a small badge on the Virtual Cards
// tile rather than the two full Apple Pay / Google Pay wordmarks, to stay
// legible at badge size.
function WalletPayMarks({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" role="img" aria-label="Apple">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
      <span className="font-bold text-sm leading-none">G</span>
      <span>Pay</span>
    </span>
  );
}

const AUTOPLAY_MS = 6000;

export default function PillarGrid() {
  const t = useTranslations("home.pillars");

  const pillars = [
    {
      id: "wallet",
      index: "01",
      eyebrow: t("wallet.eyebrow"),
      headlineLine1: t("wallet.headlineLine1"),
      headlineLine2: t("wallet.headlineLine2"),
      desc: t("wallet.desc"),
      cta: t("wallet.cta"),
      link: "/wallet",
      image: "/mockup/lifestyle/man-holding-phone-from-a-top-third-eye-view.png",
      badgeIcon: Globe,
      badgeLabel: t("wallet.badge"),
    },
    {
      id: "cards",
      index: "02",
      eyebrow: t("cards.eyebrow"),
      headlineLine1: t("cards.headlineLine1"),
      headlineLine2: t("cards.headlineLine2"),
      desc: t("cards.desc"),
      cta: t("cards.cta"),
      link: "/cards",
      image: "/mockup/hand/payment-at-terminal-home.png",
      badgeIcon: CreditCard,
      badgeLabel: t("cards.badge"),
    },
    {
      id: "esim",
      index: "03",
      eyebrow: t("esim.eyebrow"),
      headlineLine1: t("esim.headlineLine1"),
      headlineLine2: t("esim.headlineLine2"),
      desc: t("esim.desc"),
      cta: t("esim.cta"),
      link: "/esim",
      image: "/imagery/couple-laughing-phone-outdoors.png",
      badgeIcon: Wifi,
      badgeLabel: t("esim.badge"),
    },
    {
      id: "flights",
      index: "04",
      eyebrow: t("flights.eyebrow"),
      headlineLine1: t("flights.headlineLine1"),
      headlineLine2: t("flights.headlineLine2"),
      desc: t("flights.desc"),
      cta: t("flights.cta"),
      link: "/flights",
      image: "/imagery/woman-airplane-window-seat-phone.png",
      badgeIcon: Plane,
      badgeLabel: t("flights.badge"),
    },
    {
      id: "hotels",
      index: "05",
      eyebrow: t("hotels.eyebrow"),
      headlineLine1: t("hotels.headlineLine1"),
      headlineLine2: t("hotels.headlineLine2"),
      desc: t("hotels.desc"),
      cta: t("hotels.cta"),
      link: "/hotels",
      image: "/imagery/woman-laughing-tropical-hillside-golden-hour.jpg",
      badgeIcon: Hotel,
      badgeLabel: t("hotels.badge"),
    },
    {
      id: "insurance",
      index: "06",
      eyebrow: t("insurance.eyebrow"),
      headlineLine1: t("insurance.headlineLine1"),
      headlineLine2: t("insurance.headlineLine2"),
      desc: t("insurance.desc"),
      cta: t("insurance.cta"),
      link: "/insurance",
      image: "/imagery/woman-phone-call-walking-steps-suitcase-overhead.png",
      badgeIcon: ShieldCheck,
      badgeLabel: t("insurance.badge"),
    },
    {
      id: "visa",
      index: "07",
      eyebrow: t("visa.eyebrow"),
      headlineLine1: t("visa.headlineLine1"),
      headlineLine2: t("visa.headlineLine2"),
      desc: t("visa.desc"),
      cta: t("visa.cta"),
      link: "/visa",
      image: "/imagery/man-hands-phone-rolling-suitcase-street.png",
      badgeIcon: FileCheck,
      badgeLabel: t("visa.badge"),
    },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  // Respect prefers-reduced-motion: don't autoplay for users who've asked
  // to reduce motion (same pattern as the hero video, Hero.tsx).
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsPlaying(!mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsPlaying(!e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Keep the dot-nav in sync with whichever card is actually centered in view
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { root: track, threshold: [0.6] }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll the horizontal track only. Element.scrollIntoView({block:
  // "nearest"}) looks like the right call, but it walks every scrollable
  // ancestor — including the window — and each item here is a full
  // 440-680px-tall card, so whenever autoplay advanced to a card that
  // wasn't fully inside the viewport's vertical bounds, the browser
  // decided the *page* needed to scroll to bring it "into view" and
  // jumped the whole site down to this section. Computing the offset
  // and calling scrollTo directly on the track div only ever touches
  // that one element, so the page itself never moves.
  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    const item = itemRefs.current[i];
    if (track && item) {
      const trackRect = track.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      const targetLeft =
        track.scrollLeft + (itemRect.left - trackRect.left) - (trackRect.width - itemRect.width) / 2;
      track.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
    setActiveIndex(i);
    setHasEnded(false);
  };

  const goNext = () => {
    if (activeIndex === pillars.length - 1) {
      setIsPlaying(false);
      setHasEnded(true);
      return;
    }
    scrollToIndex(activeIndex + 1);
  };

  const restart = () => {
    setIsPlaying(true);
    scrollToIndex(0);
  };

  const pauseOnManualInteraction = () => setIsPlaying(false);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Scroll-snap track */}
      {/* dir="ltr" is forced here regardless of the page's own direction.
          scrollToIndex below drives this track with scrollLeft math built
          from getBoundingClientRect deltas (always physical/left-to-right
          values); scrollLeft itself is NOT physical — browsers give it
          RTL-inverted (often negative) semantics under dir="rtl", so mixing
          the two under Arabic sent every computed target scroll position
          out of range and the track never advanced past the first card,
          i.e. the section looked stuck/not-rendering on locale switch to
          Arabic. Isolating this one scroll container to LTR keeps
          scrollLeft's simple 0-based convention regardless of document
          direction, so the math above is correct in every locale. */}
      <div
        ref={trackRef}
        dir="ltr"
        onPointerDown={pauseOnManualInteraction}
        onWheel={pauseOnManualInteraction}
        className="highlights-track flex overflow-x-auto snap-x snap-mandatory gap-5 px-[4vw] lg:px-[4%] pb-2"
      >
        {pillars.map((p, i) => {
          const BadgeIcon = p.badgeIcon;
          return (
            <article
              key={p.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="snap-center shrink-0 w-[92vw] sm:w-[88vw] lg:w-[92%] max-w-[1520px]"
            >
              <div className="relative rounded-[28px] overflow-hidden h-[440px] sm:h-[520px] md:h-[640px] lg:h-[680px] shadow-soft">
                <Image
                  src={p.image}
                  alt={`${p.eyebrow} — ${p.headlineLine1} ${p.headlineLine2}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1520px, 92vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col justify-end gap-3 sm:gap-4 max-w-md">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    {p.index} · {p.eyebrow}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
                    <span className="block">{p.headlineLine1}</span>
                    <span className="block">{p.headlineLine2}</span>
                  </h3>
                  <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                    {p.desc}
                  </p>
                  <Link
                    href={p.link}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-white w-fit"
                  >
                    <span>{p.cta}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2">
                  {p.id === "cards" && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-semibold text-white">
                      <WalletPayMarks />
                    </div>
                  )}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-semibold text-white">
                    <BadgeIcon className="w-3.5 h-3.5" />
                    <span>{p.badgeLabel}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <ul role="tablist" aria-label="Highlights" className="flex items-center gap-1.5">
          {pillars.map((p, i) => {
            const active = i === activeIndex;
            return (
              <li key={p.id} role="presentation">
                <button
                  role="tab"
                  aria-selected={active}
                  aria-label={`${p.eyebrow}: ${p.headlineLine1} ${p.headlineLine2}`}
                  onClick={() => scrollToIndex(i)}
                  className={`block rounded-full bg-black/10 overflow-hidden transition-all duration-300 ${
                    active ? "w-9 h-1.5" : "w-1.5 h-1.5 hover:bg-black/20"
                  }`}
                >
                  {active && hasEnded && (
                    <span className="block h-full w-full bg-[var(--navy)] rounded-full" />
                  )}
                  {active && !hasEnded && (
                    <span
                      key={activeIndex}
                      onAnimationEnd={() => isPlaying && goNext()}
                      style={{
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationPlayState: isPlaying ? "running" : "paused",
                      }}
                      className="highlights-dot-progress block h-full bg-[var(--navy)] rounded-full"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={hasEnded ? restart : () => setIsPlaying((v) => !v)}
          aria-label={hasEnded ? "Restart highlights" : isPlaying ? "Pause highlights autoplay" : "Play highlights autoplay"}
          className="w-9 h-9 rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[var(--navy)] hover:bg-black/5 transition-colors shrink-0"
        >
          {hasEnded ? (
            <RotateCw className="w-3.5 h-3.5" strokeWidth={2.25} />
          ) : isPlaying ? (
            <Pause className="w-3.5 h-3.5" fill="currentColor" />
          ) : (
            <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />
          )}
        </button>
      </div>
    </section>
  );
}
