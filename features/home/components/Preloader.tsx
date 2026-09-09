"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

// useLayoutEffect warns ("does nothing on the server") when it runs during
// SSR, because there's no DOM to lay anything out yet — React's own
// recommended workaround is to fall back to useEffect there and only use
// the real layout effect once running in a browser. Used below so a
// returning visitor's "already seen it" dismissal happens before the
// browser paints, instead of as a visible flash after.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Preloader() {
  // No "mounted" gate: this component renders its full preloader markup
  // by default on every render, server-rendered HTML included. The
  // previous version started as `mounted = false` (rendering null) and
  // only flipped true inside a useEffect — but a useEffect never runs
  // during SSR and only runs on the client AFTER the browser has already
  // painted the initial HTML. That left a real gap, from first paint
  // until hydration's effect fired, where the preloader render was
  // `null` and the actual homepage (Hero included) was sitting there
  // fully visible and unmasked. How long that gap lasted depended on
  // hydration speed — network, device, JS bundle size — which is exactly
  // why the flash only showed up "sometimes" rather than every time.
  // isDismissed is the only gate now, and it starts false so the very
  // first paint (server and client) always shows the preloader.
  const [showRing, setShowRing] = useState(false);
  const [isFolding, setIsFolding] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useIsomorphicLayoutEffect(() => {
    // Check if user already saw the preloader in this session. This can
    // only run on the client (sessionStorage doesn't exist during SSR),
    // so a returning visitor within the same session still sees the
    // preloader for a moment before this dismisses it — but as a layout
    // effect it fires before the browser paints, so in practice that's
    // an unnoticeable flash rather than the whole raw homepage showing
    // through, and it never touches first-time visitors at all (this
    // branch simply doesn't run for them).
    try {
      if (sessionStorage.getItem("getly_preloader_seen")) {
        setIsDismissed(true);
        return;
      }
    } catch {
      // Fallback for private browsing mode
    }

    document.body.style.overflow = "hidden";

    // Play background video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback if blocked
      });
    }

    // Phase 1: Fade in the 3D ring at ~4s into the 10s Earth sunrise video
    // (was 2.2s/4.8s — stretched out so the preloader gets noticeably more
    // screen time: more of the video plays solo before the ring appears,
    // and the ring itself now holds for ~4s instead of ~2.6s before the
    // fold-up starts. Still finishes with time to spare inside the video's
    // 10s length, so it's never caught folding away over a frozen last
    // frame.)
    const ringTimer = setTimeout(() => {
      setShowRing(true);
    }, 4000);

    // Phase 2: Trigger upward fold curtain reveal at ~8s
    const foldTimer = setTimeout(() => {
      triggerFoldUp();
    }, 8000);

    return () => {
      clearTimeout(ringTimer);
      clearTimeout(foldTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const triggerFoldUp = () => {
    setIsFolding(true);
    document.body.style.overflow = "";

    try {
      sessionStorage.setItem("getly_preloader_seen", "true");
    } catch {}

    // Complete dismissal after fold-up transition finishes
    setTimeout(() => {
      setIsDismissed(true);
    }, 1000);
  };

  if (isDismissed) return null;

  return (
    <div
      onClick={triggerFoldUp}
      className={`fixed inset-0 z-[99999] bg-[#020617] flex items-center justify-center overflow-hidden cursor-pointer select-none transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isFolding ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{ willChange: "transform" }}
      aria-label="Site preloader, click to skip"
    >
      {/* Cinematic Earth Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        src="/hero/preloader.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-90 scale-105"
      />

      {/* Atmospheric Vignette & Deep Space Lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]/80 pointer-events-none" />

      {/* Unobtrusive Skip Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          triggerFoldUp();
        }}
        className="absolute top-6 right-6 z-30 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-105"
      >
        Skip
      </button>

      {/* Centered 3D Ring with Soft Ambient Glow */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center transition-all duration-1000 ease-out transform ${
          showRing
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-8 pointer-events-none"
        }`}
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[var(--blue)]/35 blur-3xl pointer-events-none animate-pulse" />

        {/* 3D Ring Asset */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56">
          <Image
            src="/3d/brand/mark-ring-diamond.png"
            alt="Getly"
            fill
            priority
            className="object-contain drop-shadow-[0_0_60px_rgba(0,105,255,0.7)] animate-float-gentle"
          />
        </div>
      </div>

      {/* Bottom Progress Indicator Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden z-20">
        <div
          className="h-full bg-gradient-to-r from-[var(--blue)] via-cyan-400 to-[var(--blue)] transition-all ease-linear"
          style={{
            width: isFolding ? "100%" : showRing ? "85%" : "45%",
            // Kept in lockstep with ringTimer/foldTimer above: 0→45% over
            // the first 4s, 45%→85% over the next 4s (landing on 85%
            // exactly as the 8s fold-up trigger fires), then a quick
            // 100% snap once folding starts.
            transitionDuration: isFolding ? "300ms" : showRing ? "4000ms" : "4000ms",
          }}
        />
      </div>
    </div>
  );
}
