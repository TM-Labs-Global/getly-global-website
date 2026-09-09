"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { DollarSign, CreditCard, List, CheckCircle } from "lucide-react";
import { APP_STORE_URL } from "@/shared/utils/appLinks";

const SCREENS = [
  {
    src: "/raw-app-screens/Add Money.png",
    icon: DollarSign,
    label: "Enter Amount",
    caption:
      "Open Getly and tap Add Money. Type in any USD amount you want to add to your wallet.",
  },
  {
    src: "/raw-app-screens/Add Money 3.png",
    icon: CreditCard,
    label: "Select Payment Method",
    caption:
      "Choose how you'd like to pay. Select \"Via Card\" — any domestic Visa or Mastercard works.",
  },
  {
    src: "/raw-app-screens/Add Money 4.png",
    icon: List,
    label: "Review & Confirm",
    caption:
      "See the exact breakdown — amount, processing fee, and total charged in your local currency.",
  },
  {
    src: "/raw-app-screens/Add money Success.jpg",
    icon: CheckCircle,
    label: "Wallet Funded!",
    caption:
      "Your USD balance is credited instantly. Use it for cards, flights, hotels, and eSIM abroad.",
  },
];

const INTERVAL_MS = 5400;

export default function WalletAppDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ── Auto-advance ── */
  useEffect(() => {
    if (paused) return;

    setProgress(0);
    const start = performance.now();

    const raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - start;
      const pct = Math.min((elapsed / INTERVAL_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setActive((s) => (s + 1) % SCREENS.length);
      }
    });

    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setProgress(0);
    setPaused(false);
  }, []);

  return (
    <section
      className="py-20 sm:py-28 bg-white border-b border-[var(--line)] overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50/50 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 xl:gap-32 justify-between">

          {/* ── LEFT: heading + step list ── */}
          <div className="flex flex-col gap-8 w-full lg:max-w-[520px]">

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', whiteSpace: 'nowrap' }}>
                See exactly what you pay<br />
                <span className="text-[var(--blue)]">in your local currency</span>
              </h2>
              <p className="text-base text-[var(--ink-soft)] font-medium">
                Fund with any domestic Visa or Mastercard — USD hits your wallet instantly.
              </p>
            </div>

            {/* Step items */}
            <div className="flex flex-col gap-1.5">
              {SCREENS.map((screen, i) => {
                const Icon = screen.icon;
                const isActive = i === active;

                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`flex flex-col gap-2 w-full text-left px-5 py-5 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-slate-50 border border-slate-200"
                        : "hover:bg-slate-50/50 border border-transparent"
                    }`}
                  >
                    {/* Title row */}
                    <div className="flex items-center gap-3">
                      <Icon className="w-[22px] h-[22px] shrink-0 text-[var(--navy)]" />
                      <span
                        className={`text-lg font-bold transition-colors duration-200 ${
                          isActive ? "text-[var(--navy)]" : "text-slate-400"
                        }`}
                      >
                        {screen.label}
                      </span>
                    </div>

                    {/* Expanded caption + progress bar when active */}
                    {isActive && (
                      <div className="pl-[34px] space-y-4">
                        <p className="text-base text-[var(--ink-soft)] leading-relaxed">
                          {screen.caption}
                        </p>
                        {/* Progress bar */}
                        <div className="h-[2px] w-full bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[var(--blue)] rounded-full transition-none"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--navy)] hover:bg-[var(--blue)] text-white text-sm font-bold transition-all duration-200 shadow-md"
            >
              Download Getly — Fund in minutes
            </a>
          </div>

          {/* ── RIGHT: iPhone frame — hidden on mobile ── */}
          <div className="relative shrink-0 justify-center hidden lg:flex">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-[56px] bg-blue-400/10 blur-2xl scale-105 pointer-events-none" />

            {/* Phone chassis */}
            <div
              className="relative rounded-[52px] bg-[#111827] border-[9px] border-[#1f2937] shadow-[0_48px_120px_rgba(0,0,0,0.38)]"
              style={{ width: 296, height: 608 }}
            >
              {/* Dynamic island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

              {/* Physical buttons */}
              <div className="absolute -left-[4px] top-24 w-[4px] h-7 bg-[#374151] rounded-l-full" />
              <div className="absolute -left-[4px] top-36 w-[4px] h-10 bg-[#374151] rounded-l-full" />
              <div className="absolute -left-[4px] top-48 w-[4px] h-10 bg-[#374151] rounded-l-full" />
              <div className="absolute -right-[4px] top-32 w-[4px] h-14 bg-[#374151] rounded-r-full" />

              {/* Home indicator */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-[5px] bg-white/25 rounded-full z-20" />

              {/* Screen */}
              <div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#dce9f9]">
                {SCREENS.map((screen, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-500 ease-in-out"
                    style={{
                      transform: `translateX(${(i - active) * 100}%)`,
                      opacity: i === active ? 1 : 0.6,
                    }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.label}
                      fill
                      className="object-cover object-top"
                      sizes="296px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators below phone */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-5 h-2 bg-[var(--blue)]"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Step ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
