import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function EsimFeatureGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.12]">
            Connectivity built for the borderless
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] font-medium max-w-xl mx-auto leading-relaxed">
            Everything you need to stay online across 180+ countries, managed completely inside the Getly mobile app.
          </p>
        </div>

        {/* 2-Column Feature Card Grid (Inspired by Reference 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Card 1: Instant QR & Digital Profile */}
          <div className="bg-[#f6f8fb] rounded-3xl p-6 sm:p-10 border border-[var(--line)] flex flex-col justify-between overflow-hidden shadow-soft hover:shadow-md transition-all">
            
            {/* Top Device Mockup */}
            <div className="w-full flex items-end justify-center pt-6 min-h-[340px] sm:min-h-[370px]">
              <div className="relative w-[300px] sm:w-[340px] h-[320px] sm:h-[362px] flex items-end justify-center">
                <Image
                  src="/mockup/device/esim/esim-succesfully-purchased.png"
                  alt="eSIM Purchased with QR Code inside phone mockup"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>

            {/* Bottom Content Cluster */}
            <div className="space-y-4 pt-6 border-t border-slate-200/80">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight">
                Install in seconds before you board
              </h3>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-medium">
                Scan a secure QR code or tap auto-install directly inside Getly. Your phone downloads the cellular profile safely so it's ready the moment you land.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)] shadow-flat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue)]" /> Zero paper clips
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)] shadow-flat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue)]" /> Keep primary SIM active
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)] shadow-flat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue)]" /> Instant digital delivery
                </span>
              </div>
            </div>

          </div>

          {/* Card 2: Real-time Usage & Top-ups */}
          <div className="bg-[#f6f8fb] rounded-3xl p-6 sm:p-10 border border-[var(--line)] flex flex-col justify-between overflow-hidden shadow-soft hover:shadow-md transition-all">
            
            {/* Top Device Mockup */}
            <div className="w-full flex items-end justify-center pt-6 min-h-[340px] sm:min-h-[370px]">
              <div className="relative w-[300px] sm:w-[340px] h-[320px] sm:h-[362px] overflow-hidden flex items-start justify-center">
                <div className="relative w-[300px] sm:w-[340px] h-[380px] sm:h-[432px] -mt-1">
                  <Image
                    src="/mockup/device/esim/esim-details.png"
                    alt="eSIM Details and live data remaining inside phone mockup"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-top drop-shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Content Cluster */}
            <div className="space-y-4 pt-6 border-t border-slate-200/80">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight">
                Track data in real time & top up instantly
              </h3>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed font-medium">
                Monitor your remaining gigabytes down to the megabyte. When you are running low on data, top up in a single tap directly from your Getly wallet balance.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)] shadow-flat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Live progress tracking
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)] shadow-flat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Low-balance push alerts
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)] shadow-flat">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 1-tap wallet checkout
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
