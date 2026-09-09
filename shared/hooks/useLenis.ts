"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLenis() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Mount once: create the Lenis instance and wire it into GSAP's ticker.
  // This provider lives at the [locale] layout level, which Next.js keeps
  // mounted across a client-side navigation that only changes the dynamic
  // `locale` segment (e.g. switching language via the picker) — so this
  // effect does NOT re-run on that kind of navigation, only on a real
  // mount/unmount of the app shell.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateGSAP = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGSAP);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGSAP);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Re-measure on every route change, including a locale switch. Lenis
  // caches the page's scrollable height at init and only recalculates it
  // on a window resize; GSAP's ScrollTrigger caches its trigger positions
  // the same way. Neither one re-measures on its own when the DOM under a
  // persistent layout swaps in new content at a different height — which
  // is exactly what happens when the language picker does a client-side
  // navigation to a new locale, since translated copy is rarely the same
  // length across languages. With stale measurements, Lenis clamps
  // scrolling to the OLD (often shorter) page height, so sections below
  // that point become unreachable, and any scroll-triggered reveal never
  // fires — both show up as "the page/section isn't fully rendering".
  // Re-measuring right after the new content paints fixes both.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      lenisRef.current?.resize();
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
}
