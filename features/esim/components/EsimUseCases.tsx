import Image from "next/image";
import { Sparkles, Wifi, ShieldCheck, Laptop, Plane, Compass } from "lucide-react";

interface UseCase {
  title: string;
  tagline: string;
  badge: string;
  dataPill: string;
  speed: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const USE_CASES: UseCase[] = [
  {
    title: "Weekend Getaways",
    tagline: "Short city trips without daily roaming fees",
    badge: "City Breaks",
    dataPill: "5 GB • 7 Days",
    speed: "5G High Speed",
    description: "Touch down in London, Tokyo, or New York for 48 hours. Land, summon an Uber, navigate Google Maps, and text home immediately.",
    imageSrc: "/imagery/woman-laughing-tropical-hillside-golden-hour.jpg",
    imageAlt: "Traveler enjoying a weekend trip",
  },
  {
    title: "Multi-Country Tours",
    tagline: "Cross borders without swapping SIMs",
    badge: "Regional Passport",
    dataPill: "35 Countries • 1 eSIM",
    speed: "Auto-Switching",
    description: "Hop on a high-speed train from Paris to Amsterdam or drive across borders. Your eSIM smoothly switches to the strongest local network automatically.",
    imageSrc: "/imagery/man-hands-phone-rolling-suitcase-street.png",
    imageAlt: "Traveler exploring multiple destinations with suitcase",
  },
  {
    title: "Digital Nomads & Remote Work",
    tagline: "Reliable hotspot for laptops and tablets",
    badge: "Extended Stays",
    dataPill: "20 GB • Hotspot Active",
    speed: "Low Latency",
    description: "Tether your laptop effortlessly from seaside cafes, airport lounges, or co-working hubs with consistent, low-latency mobile broadband.",
    imageSrc: "/imagery/in-a-users-hand-at-dinner-table.jpeg",
    imageAlt: "Digital nomad connected on laptop and mobile at a restaurant",
  },
];

export default function EsimUseCases() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--canvas)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <Compass className="w-3.5 h-3.5" />
            <span>BUILT FOR EVERY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.12]">
            For when staying connected matters most
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] font-medium max-w-xl mx-auto leading-relaxed">
            From short weekend flights to multi-country expeditions, Getly eSIM gives you instant, dependable internet wherever life takes you.
          </p>
        </div>

        {/* 3 Vertical Photography Cards (Inspiration: Image 3 & Image 5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {USE_CASES.map((uc, idx) => (
            <div
              key={idx}
              className="group relative h-[480px] sm:h-[520px] rounded-3xl overflow-hidden shadow-soft flex flex-col justify-between p-6 sm:p-7 border border-black/5"
            >
              {/* Background Photo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={uc.imageSrc}
                  alt={uc.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Scrim for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              </div>

              {/* Top Tag & Speed Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide">
                  {uc.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold">
                  <Wifi className="w-3 h-3 text-emerald-400" />
                  {uc.speed}
                </span>
              </div>

              {/* Middle Floating Spec Card (Inspiration: Image 3 balance/widget overlays) */}
              <div className="relative z-10 my-auto py-4">
                <div className="inline-block bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl px-5 py-3 shadow-2xl">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    Preloaded Bundle
                  </p>
                  <p className="text-xl font-extrabold text-[var(--navy)] tracking-tight">
                    {uc.dataPill}
                  </p>
                </div>
              </div>

              {/* Bottom Content Cluster */}
              <div className="relative z-10 space-y-2 text-white">
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {uc.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                  {uc.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
