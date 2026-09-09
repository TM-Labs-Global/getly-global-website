"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the CURRENT, ACTUAL visible viewport height in pixels — kept in
 * sync live via the visualViewport API where the browser supports it
 * (visualViewport.height is the one number that genuinely reflects what's
 * on screen right now: it shrinks when a mobile browser's address-bar
 * toolbar is showing, and shrinks further when the on-screen keyboard
 * opens; window.innerHeight and CSS's own vh/dvh/svh units are all one
 * step further removed from that and have each shown their own browser-
 * specific quirks). Falls back to window.innerHeight, then to
 * document.documentElement.clientHeight, for browsers without
 * visualViewport.
 *
 * Returns undefined on the server and for the very first render before
 * any client measurement has happened — callers should keep a CSS-based
 * fallback (e.g. className="h-svh") for that brief window rather than
 * leaving height completely unset, and apply this value as an inline
 * style once it's available. An inline style always wins over any
 * class-based height, so once this hook has a number, the section is
 * pinned to the real visible area regardless of what height utility
 * class ends up on it — this is the deciding, adaptive source of truth,
 * with the CSS class only covering the gap before JS has run.
 */
export function useViewportHeight() {
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const measure = () => {
      const vv = window.visualViewport;
      setHeight(vv?.height ?? window.innerHeight ?? document.documentElement.clientHeight);
    };

    measure();

    const vv = window.visualViewport;
    vv?.addEventListener("resize", measure);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      vv?.removeEventListener("resize", measure);
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, []);

  return height;
}
