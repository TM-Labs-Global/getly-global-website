"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/**
 * "Pay friends on Revolut, fast and free" pattern — measured live on
 * Revolut feature pattern: a 2-col row where the text column swaps
 * sides each row (Z-pattern / alternating zig-zag layout), the photo column cross-fades between one
 * image per tab, and a 3-pill tab bar sits right at the bottom edge of the
 * photo (active pill filled dark, inactive pills transparent) rather than
 * as separate page controls. Reproduced with client-side tab state; photo
 * transition uses a simple opacity cross-fade instead of Revolut's own
 * transition library.
 */
const TABS = [
  { key: "topUp", image: "/imagery/making-a-payment-with-iphone-mockup.jpeg" },
  { key: "split", image: "/imagery/couple-laughing-phone-outdoors.png" },
  { key: "payLocally", image: "/imagery/tap-to-pay-restaurant-counter.png" },
] as const;

export default function FlightsTabbedFeature() {
  const t = useTranslations("flights.tabbedFeature");
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--navy)] tracking-tight min-h-[1.2em]">
          {t(`tabs.${TABS[active].key}.title`)}
        </h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-md min-h-[4.5em]">
          {t(`tabs.${TABS[active].key}.desc`)}
        </p>
      </div>

      <div className="relative w-full aspect-[3/4] max-h-[560px] rounded-[32px] overflow-hidden bg-[var(--surface-2)]">
        {TABS.map((tab, i) => (
          <div
            key={tab.key}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={tab.image}
              alt={t(`tabs.${tab.key}.title`)}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        ))}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pt-16 pb-5 px-5">
          <div className="flex items-center gap-2 flex-wrap">
            {TABS.map((tab, i) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  i === active
                    ? "bg-[var(--navy)] text-white"
                    : "bg-white/15 text-white border border-white/25 hover:bg-white/25"
                }`}
              >
                {t(`tabs.${tab.key}.label`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
