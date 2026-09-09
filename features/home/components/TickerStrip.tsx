"use client";

import { useTranslations } from "next-intl";

export default function TickerStrip() {
  const t = useTranslations("home");
  const items = [
    "Global Multi-Currency Wallet",
    "Instant Virtual Cards",
    "Global eSIM Data (180+ Countries)",
    "Direct Flight Bookings",
    "AI Trip Planner & Itineraries",
    "Instant Funding Methods",
    "Borderless Travel Companion",
  ];

  return (
    <div className="bg-[var(--blue)] text-white py-4 overflow-hidden border-y border-[var(--blue-600)] shadow-glow">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 shrink-0 px-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-sm font-extrabold uppercase tracking-widest">
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8 shrink-0 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8 text-sm font-extrabold uppercase tracking-widest">
              <span>{item}</span>
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        [dir="rtl"] .animate-marquee {
          animation-direction: reverse;
        }
      `}</style>
    </div>
  );
}
