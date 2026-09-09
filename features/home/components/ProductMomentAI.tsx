"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

/**
 * "Getly AI Companion" — restructured after Revolut's "Ask, and AIR makes
 * it happen" section: a centered headline/subtitle/CTA stack, then one big
 * phone mockup beneath it, instead of the previous two-column layout.
 *
 * Revolut sells the moment with a looping video that steps the phone's
 * screen through a short conversation. We don't have video for this, so
 * it's simulated with three of the user's own pre-rendered device
 * mockups (idle chat -> mid-conversation -> recommendation), stepped
 * through in sequence on hover/focus rather than a single two-state swap.
 */

const AI_STATES = [
  { src: "/mockup/device/getly-ai-chat.png", alt: "Getly AI chat" },
  { src: "/mockup/device/getly-ai-chat-interface-1.png", alt: "Getly AI planning a trip to Morocco" },
  { src: "/mockup/device/getly-ai-chat-recommendation.png", alt: "Getly AI recommending a trip" },
];

const STEP_DELAY_MS = 900;

export default function ProductMomentAI() {
  const t = useTranslations("home.ai");
  const [step, setStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  // Step through idle -> mid-conversation -> recommendation while hovered
  // or focused, holding on the last frame; resets to idle once the
  // pointer/focus leaves.
  const startSequence = () => {
    clearTimers();
    AI_STATES.forEach((_, i) => {
      if (i === 0) return;
      timers.current.push(setTimeout(() => setStep(i), STEP_DELAY_MS * i));
    });
  };

  const resetSequence = () => {
    clearTimers();
    setStep(0);
  };

  useEffect(() => clearTimers, []);

  return (
    <section className="pt-32 bg-[var(--navy)] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--blue)]/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
          {t("title")}
        </h2>

        <p className="text-lg text-white/80 leading-relaxed font-medium max-w-xl mx-auto">
          {t("subtitle")}
        </p>

        <div className="pt-2">
          <Link
            href="/ai-trip-planner"
            className="inline-flex items-center gap-2 bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white font-semibold px-8 py-4 rounded-full shadow-glow transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{t("cta")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Phone mockup — the user's own pre-rendered device mockups, used
          as-is (no CSS phone frame on top). All three share the same
          pixel dimensions, so each swap lines up exactly with no gap. */}
      <div className="relative z-10 mt-16 sm:mt-20 mx-auto w-[300px] sm:w-[440px] lg:w-[600px]">
        <div
          className="relative w-full overflow-hidden shadow-2xl"
          style={{ aspectRatio: "1042 / 1070" }}
          onMouseEnter={startSequence}
          onMouseLeave={resetSequence}
          onFocus={startSequence}
          onBlur={resetSequence}
        >
          {AI_STATES.map((state, i) => (
            <Image
              key={state.src}
              src={state.src}
              alt={state.alt}
              fill
              className={`object-cover absolute inset-0 transition-opacity duration-500 ease-out ${
                i === step ? "opacity-100" : "opacity-0"
              }`}
              sizes="600px"
            />
          ))}

          {/* Focusable overlay so the sequence is keyboard-reachable too */}
          <button
            type="button"
            className="absolute inset-0 z-10 cursor-default"
            aria-label={t("hoverHint")}
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
}
