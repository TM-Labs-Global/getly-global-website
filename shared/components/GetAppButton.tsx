"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL, getStoreLink } from "@/shared/utils/appLinks";

/**
 * Exact structural spec pulled live off getly.app's own production hero button
 * (inspected via computed styles + inline style attributes, since this is the
 * real, already-shipped component the rebuild needs to match — not a redraw
 * from a screenshot). Sizes below scale that spec up/down; "md" values are the
 * live site's own numbers verbatim: 64px icon segments, 56px height, 36px
 * label padding, 17px/700 label, 6px gap, 20px outer radius, 1.5px white/45%
 * border, 26px icons, Getly's existing shadow-glow token.
 */
const SIZES = {
  sm: {
    bar: "h-11",
    icon: "w-12",
    label: "px-6",
    text: "text-sm",
    iconPx: 20,
    radiusL: "rounded-l-md", // --r-md: 12px
    radiusR: "rounded-r-md",
    gap: "gap-1",
    border: "border-[1.5px]",
  },
  md: {
    bar: "h-14",
    icon: "w-16",
    label: "px-9",
    text: "text-[17px]",
    iconPx: 26,
    radiusL: "rounded-l-lg", // --r-lg: 20px — matches the live button exactly
    radiusR: "rounded-r-lg",
    gap: "gap-1.5",
    border: "border-[1.5px]",
  },
  lg: {
    bar: "h-16",
    icon: "w-[72px]",
    label: "px-10",
    text: "text-lg",
    iconPx: 32,
    radiusL: "rounded-l-xl", // --r-xl: 28px
    radiusR: "rounded-r-xl",
    gap: "gap-2",
    border: "border-[1.5px]",
  },
} as const;

interface GetAppButtonProps {
  /** Middle segment label. Defaults to "Get App". */
  label?: string;
  /** Segment size preset. Defaults to "md" (the live getly.app button's own dimensions). */
  size?: keyof typeof SIZES;
  className?: string;
}

/**
 * Three-segment store pill: Google Play glyph — label — Apple glyph, matching
 * the segmented button already live in getly.app's hero (Getly Blue fill,
 * glow shadow, translucent white border, square-cornered middle segment with
 * 20px-radius outer caps on the icon segments). Uses the real store icon
 * assets from /app-stores/ rather than hand-drawn glyphs. The two end
 * segments link straight to their own store; the middle label resolves to
 * the visitor's platform once mounted (falls back to the App Store link
 * during server render, matching getStoreLink's own default).
 */
export default function GetAppButton({ label = "Get App", size = "md", className = "" }: GetAppButtonProps) {
  const [smartLink, setSmartLink] = useState(APP_STORE_URL);

  useEffect(() => {
    setSmartLink(getStoreLink("smart"));
  }, []);

  const s = SIZES[size];
  const borderColor = "border-white/45";

  return (
    <div className={`inline-flex items-stretch ${s.gap} ${className}`}>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className={`flex items-center justify-center ${s.bar} ${s.icon} ${s.border} ${borderColor} ${s.radiusL} bg-[var(--blue)] hover:bg-[var(--blue-600)] shadow-glow transition-colors duration-200 shrink-0`}
      >
        <Image
          src="/app-stores/playstore.png"
          alt=""
          aria-hidden="true"
          width={s.iconPx}
          height={s.iconPx}
          className="object-contain"
        />
      </a>

      <a
        href={smartLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center ${s.bar} ${s.label} ${s.text} border-y-[1.5px] ${borderColor} bg-[var(--blue)] hover:bg-[var(--blue-600)] shadow-glow transition-colors duration-200 text-white font-bold whitespace-nowrap`}
      >
        {label}
      </a>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className={`flex items-center justify-center ${s.bar} ${s.icon} ${s.border} ${borderColor} ${s.radiusR} bg-[var(--blue)] hover:bg-[var(--blue-600)] shadow-glow transition-colors duration-200 shrink-0`}
      >
        <Image
          src="/app-stores/apple-logo.png"
          alt=""
          aria-hidden="true"
          width={s.iconPx}
          height={s.iconPx}
          className="object-contain"
        />
      </a>
    </div>
  );
}
