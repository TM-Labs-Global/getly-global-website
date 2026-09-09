"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Reusable "how it works" accordion — the interaction pattern studied
 * live on usetimon.com's homepage "experience" section (id="global"):
 * a row of N full-height photo cards where one is expanded at a time.
 * Measured there at 1440px via getBoundingClientRect/matchMedia polling:
 * a 1200px-wide, 4-card row with 24px gaps, collapsed cards at 235px,
 * the active card at 423px (a ~1:1.8 ratio), 32px corner radius, auto-
 * advancing sequentially with roughly a 7-8s hold and a ~700-900ms width
 * transition. Reproduced here with an 850ms flex-grow transition on a
 * symmetric ease-in-out curve (rather than Tailwind's default ease-out,
 * which snaps open fast then coasts) for a rounder, less mechanical open
 * — with the collapsed/expanded label crossfades slowed and re-timed to
 * match, so the text doesn't finish swapping well before the card has
 * finished resizing. Uses flex-grow (1 vs ~1.8) rather than
 * fixed pixel widths so it stays responsive, and built as a generic,
 * data-driven component so every product page can supply its own steps
 * instead of duplicating this markup per page (this replaces the old
 * per-page bento-grid "how it works" components like FlightsHowItWorks).
 *
 * Each card always shows a numbered badge (1, 2, 3…) and its label, so the
 * row reads as an ordered sequence of steps rather than a generic feature
 * grid. The label reads vertically (bottom-to-top) while collapsed — via `writing-mode:
 * vertical-rl` + a 180° flip, the standard CSS way to get that "spine
 * label" look without a transform that would also rotate the box model —
 * and un-rotates to a normal horizontal headline + description once
 * expanded. Autoplay pauses for prefers-reduced-motion, matching the
 * same pattern already used by PillarGrid.tsx and Hero.tsx on this site.
 *
 * Reveal fill: on usetimon.com every collapsed card is hidden behind a
 * flat, opaque brand-colour fill — no photo is visible underneath — and
 * only the active card's fill peels back to reveal the real photo. That
 * reveal is deliberately delayed: Timon's own CSS (read straight from its
 * stylesheet) runs card-expand + title-float-up first (0.3s–1.3s), then
 * description-show (1.3s–2.3s), and only THEN starts the fill's reveal
 * animation (2.3s–3.9s, i.e. after the card has already finished growing
 * and its copy has already appeared). Closing is the mirror image: the
 * fill snaps back to fully opaque immediately, before the card contracts.
 * Reproduced here as a solid `var(--blue)` layer whose own opacity
 * animates 1→0 on activation (delayed, slow) and 0→1 on deactivation
 * (immediate, fast) — an opacity-based stand-in for Timon's inset
 * box-shadow trick that's simpler and more Tailwind-idiomatic while
 * producing the same "fill, then peel back to the photo" experience.
 */
export interface HowItWorksStep {
  key: string;
  image: string;
  /** No longer rendered — the badge now shows the step's position (1, 2, 3…)
   *  instead of an icon — kept optional so existing callers that still pass
   *  an icon path don't need to change. */
  icon?: string;
  label: string;
  desc: string;
}

interface HowItWorksAccordionProps {
  steps: HowItWorksStep[];
  intervalMs?: number;
}

export default function HowItWorksAccordion({
  steps,
  intervalMs = 6000,
}: HowItWorksAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutoplay(!mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setAutoplay(!e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!autoplay || steps.length < 2) return;
    timerRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, autoplay, intervalMs, steps.length]);

  const selectStep = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <>
      {/* Desktop / tablet: animated accordion row */}
      <div className="hidden md:flex gap-5 h-[460px] lg:h-[560px] xl:h-[620px]">
        {steps.map((step, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={step.key}
              type="button"
              onClick={() => selectStep(i)}
              aria-label={step.label}
              aria-current={isActive}
              className="relative overflow-hidden rounded-[32px] text-left shrink-0 grow transition-[flex-grow] duration-[850ms] ease-[cubic-bezier(0.65,0,0.35,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--blue)] focus-visible:outline-offset-2"
              style={{ flexGrow: isActive ? 1.8 : 1, flexBasis: 0 }}
            >
              <Image
                src={step.image}
                alt={step.label}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 60vw"
              />

              {/* Reveal fill: opaque brand-blue by default, peels back
                  (opacity 1→0) only on the active card, and only after
                  the card has finished expanding and its copy has
                  already appeared. Re-covers instantly, with no delay,
                  as soon as the card stops being active. */}
              <div
                className={`absolute inset-0 bg-[var(--blue)] transition-opacity ease-out ${
                  isActive
                    ? "opacity-0 duration-[900ms] delay-[850ms]"
                    : "opacity-100 duration-500 delay-0"
                }`}
              />

              {/* Bottom scrim for text legibility over the revealed photo —
                  fades in alongside the fill's reveal, not before it. */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity ease-out ${
                  isActive
                    ? "opacity-100 duration-700 delay-[850ms]"
                    : "opacity-0 duration-300 delay-0"
                }`}
              />

              {/* Step-number badge */}
              <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white/95 shadow-md flex items-center justify-center">
                <span className="text-2xl font-extrabold text-[var(--navy)] tabular-nums leading-none">
                  {i + 1}
                </span>
              </div>

              {/* Collapsed: vertical label — sized up so it reads clearly
                  as a headline in its own right before the card opens,
                  not a caption; fade is slowed to ~match the card's
                  850ms resize instead of snapping out well before it. */}
              <div
                className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-500 ease-out ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <span className="[writing-mode:vertical-rl] rotate-180 text-white text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
                  {step.label}
                </span>
              </div>

              {/* Expanded: horizontal label + description */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 lg:p-8 gap-2 max-w-md transition-opacity duration-500 delay-200 ease-out ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-[1.15]">
                  {step.label}
                </h3>
                <p className="text-sm lg:text-base text-white/85 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: static stacked cards, no animation */}
      <div className="md:hidden space-y-5">
        {steps.map((step, i) => (
          <div
            key={step.key}
            className="relative overflow-hidden rounded-[28px] h-[320px]"
          >
            <Image
              src={step.image}
              alt={step.label}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white/95 shadow-md flex items-center justify-center">
              <span className="text-xl font-extrabold text-[var(--navy)] tabular-nums leading-none">
                {i + 1}
              </span>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
              <h3 className="text-xl font-extrabold text-white tracking-tight leading-[1.15]">
                {step.label}
              </h3>
              <p className="text-sm text-white/85 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
