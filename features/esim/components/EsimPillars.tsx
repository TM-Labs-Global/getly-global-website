import Image from "next/image";
import { ShieldCheck, MessageSquare, Zap, Check } from "lucide-react";

interface Pillar {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  highlight: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Keep your primary number & WhatsApp",
    desc: "Your Getly eSIM handles all high-speed mobile data, while your physical SIM stays in standby to receive crucial banking 2FA SMS and calls for free.",
    imgSrc: "/3d/connectivity/signal.png",
    imgAlt: "Cellular signal 3D icon",
    highlight: "Dual SIM active",
  },
  {
    title: "Direct Tier-1 carrier speeds",
    desc: "We partner with leading tier-1 telecommunications networks worldwide, giving you genuine local 5G & LTE speeds with zero throttled roaming bottlenecks.",
    imgSrc: "/3d/status/speed.png",
    imgAlt: "High speed speedometer 3D icon",
    highlight: "True local 5G",
  },
  {
    title: "100% prepaid — zero bill shock, ever",
    desc: "No surprise roaming charges on your monthly invoice, no hidden overage fees, and no contracts. You only ever spend the data you explicitly choose.",
    imgSrc: "/3d/security/shield.png",
    imgAlt: "Security protection shield 3D icon",
    highlight: "Zero surprises",
  },
];

export default function EsimPillars() {
  return (
    <section className="py-20 lg:py-28 bg-[#07153d] text-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[var(--blue)]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Why travelers switch from physical SIMs
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-medium max-w-xl mx-auto leading-relaxed">
            Forget hunting for airport kiosks, managing paper clips, and dreading your monthly phone bill when you return home.
          </p>
        </div>

        {/* 3 Pillar Cards (Inspiration: Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-9 border border-white/10 flex flex-col justify-between hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-xl"
            >
              {/* Top 3D Illustration */}
              <div className="w-full flex items-center justify-center py-6 min-h-[200px]">
                <div className="relative w-36 h-36">
                  <Image
                    src={pillar.imgSrc}
                    alt={pillar.imgAlt}
                    fill
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--blue)]/20 text-[var(--blue)] text-xs font-bold border border-[var(--blue)]/30">
                  {pillar.highlight}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
