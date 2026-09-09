"use client";

import { useState } from "react";
import Image from "next/image";
import { Wifi, Zap, Check, ArrowRight, Globe, Shield } from "lucide-react";
import { APP_STORE_URL } from "@/shared/utils/appLinks";

type TabKey = "popular" | "regional" | "global";

interface DestinationPlan {
  id: string;
  name: string;
  flagCode: string;
  coverage: string;
  speed: string;
  dataPlans: { size: string; days: number; price: string }[];
  popular?: boolean;
}

const POPULAR_DESTINATIONS: DestinationPlan[] = [
  {
    id: "us",
    name: "United States",
    flagCode: "US",
    coverage: "AT&T / T-Mobile",
    speed: "5G Ultra",
    popular: true,
    dataPlans: [
      { size: "3 GB", days: 7, price: "$8.50" },
      { size: "5 GB", days: 15, price: "$12.00" },
      { size: "10 GB", days: 30, price: "$19.50" },
      { size: "20 GB", days: 30, price: "$32.00" },
    ],
  },
  {
    id: "gb",
    name: "United Kingdom",
    flagCode: "GB",
    coverage: "Vodafone / EE",
    speed: "5G",
    popular: true,
    dataPlans: [
      { size: "3 GB", days: 7, price: "$6.50" },
      { size: "5 GB", days: 15, price: "$10.00" },
      { size: "10 GB", days: 30, price: "$16.00" },
      { size: "20 GB", days: 30, price: "$28.00" },
    ],
  },
  {
    id: "jp",
    name: "Japan",
    flagCode: "JP",
    coverage: "SoftBank / NTT Docomo",
    speed: "5G Ultra",
    popular: true,
    dataPlans: [
      { size: "3 GB", days: 7, price: "$7.50" },
      { size: "5 GB", days: 15, price: "$11.50" },
      { size: "10 GB", days: 30, price: "$18.00" },
      { size: "20 GB", days: 30, price: "$31.00" },
    ],
  },
  {
    id: "tr",
    name: "Turkey",
    flagCode: "TR",
    coverage: "Turkcell / Vodafone",
    speed: "LTE / 5G",
    dataPlans: [
      { size: "3 GB", days: 7, price: "$5.50" },
      { size: "5 GB", days: 15, price: "$8.50" },
      { size: "10 GB", days: 30, price: "$14.00" },
      { size: "20 GB", days: 30, price: "$24.00" },
    ],
  },
  {
    id: "ma",
    name: "Morocco",
    flagCode: "MA",
    coverage: "Maroc Telecom",
    speed: "4G / LTE",
    dataPlans: [
      { size: "3 GB", days: 7, price: "$7.00" },
      { size: "5 GB", days: 15, price: "$11.00" },
      { size: "10 GB", days: 30, price: "$17.50" },
      { size: "20 GB", days: 30, price: "$29.00" },
    ],
  },
  {
    id: "fr",
    name: "France",
    flagCode: "FR",
    coverage: "Orange / SFR",
    speed: "5G",
    dataPlans: [
      { size: "3 GB", days: 7, price: "$6.50" },
      { size: "5 GB", days: 15, price: "$10.00" },
      { size: "10 GB", days: 30, price: "$16.00" },
      { size: "20 GB", days: 30, price: "$27.50" },
    ],
  },
];

const REGIONAL_BUNDLES: DestinationPlan[] = [
  {
    id: "eu",
    name: "Europe (35 Countries)",
    flagCode: "EU",
    coverage: "Vodafone, Orange, Telefónica",
    speed: "5G Seamless Roam",
    popular: true,
    dataPlans: [
      { size: "5 GB", days: 15, price: "$14.00" },
      { size: "10 GB", days: 30, price: "$22.00" },
      { size: "20 GB", days: 30, price: "$36.00" },
      { size: "50 GB", days: 60, price: "$68.00" },
    ],
  },
  {
    id: "asia",
    name: "Asia-Pacific (18 Countries)",
    flagCode: "JP",
    coverage: "Singtel, SoftBank, AIS",
    speed: "5G / LTE",
    popular: true,
    dataPlans: [
      { size: "5 GB", days: 15, price: "$16.00" },
      { size: "10 GB", days: 30, price: "$26.00" },
      { size: "20 GB", days: 30, price: "$42.00" },
    ],
  },
  {
    id: "na",
    name: "North America (USA, Canada, Mexico)",
    flagCode: "US",
    coverage: "AT&T, Telus, Telcel",
    speed: "5G High Speed",
    dataPlans: [
      { size: "5 GB", days: 15, price: "$18.00" },
      { size: "10 GB", days: 30, price: "$29.00" },
      { size: "20 GB", days: 30, price: "$46.00" },
    ],
  },
  {
    id: "mena",
    name: "Middle East & North Africa",
    flagCode: "AE",
    coverage: "Etisalat, STC, Maroc Telecom",
    speed: "4G / 5G",
    dataPlans: [
      { size: "3 GB", days: 7, price: "$12.00" },
      { size: "5 GB", days: 15, price: "$19.00" },
      { size: "10 GB", days: 30, price: "$32.00" },
    ],
  },
];

const GLOBAL_PLANS: DestinationPlan[] = [
  {
    id: "global-140",
    name: "Global Passport (140+ Countries)",
    flagCode: "US",
    coverage: "Global Tier-1 Alliance",
    speed: "5G & LTE Worldwide",
    popular: true,
    dataPlans: [
      { size: "3 GB", days: 15, price: "$24.00" },
      { size: "5 GB", days: 30, price: "$36.00" },
      { size: "10 GB", days: 60, price: "$59.00" },
      { size: "20 GB", days: 90, price: "$98.00" },
    ],
  },
];

export default function EsimPlanExplorer() {
  const [activeTab, setActiveTab] = useState<TabKey>("popular");
  const [selectedDestId, setSelectedDestId] = useState<string>("us");

  const plans =
    activeTab === "popular"
      ? POPULAR_DESTINATIONS
      : activeTab === "regional"
      ? REGIONAL_BUNDLES
      : GLOBAL_PLANS;

  const currentPlan = plans.find((p) => p.id === selectedDestId) || plans[0];

  return (
    <section className="py-20 lg:py-28 bg-[var(--canvas)] border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <Wifi className="w-3.5 h-3.5" />
            <span>INSTANT DESTINATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.12]">
            Pick your destination. Land connected.
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] font-medium max-w-xl mx-auto leading-relaxed">
            Choose from flexible local, regional, or worldwide packages. High-speed 5G data activated in under 60 seconds.
          </p>

          {/* Tab Switcher (Inspiration: Image 4 Pill Switcher) */}
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[var(--line)] shadow-flat gap-1 mt-4">
            <button
              onClick={() => {
                setActiveTab("popular");
                setSelectedDestId(POPULAR_DESTINATIONS[0].id);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "popular"
                  ? "bg-[var(--navy)] text-white shadow-sm"
                  : "text-[var(--ink-soft)] hover:text-[var(--navy)]"
              }`}
            >
              Popular Destinations
            </button>
            <button
              onClick={() => {
                setActiveTab("regional");
                setSelectedDestId(REGIONAL_BUNDLES[0].id);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "regional"
                  ? "bg-[var(--navy)] text-white shadow-sm"
                  : "text-[var(--ink-soft)] hover:text-[var(--navy)]"
              }`}
            >
              Regional Bundles
            </button>
            <button
              onClick={() => {
                setActiveTab("global");
                setSelectedDestId(GLOBAL_PLANS[0].id);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "global"
                  ? "bg-[var(--navy)] text-white shadow-sm"
                  : "text-[var(--ink-soft)] hover:text-[var(--navy)]"
              }`}
            >
              Global Passport
            </button>
          </div>
        </div>

        {/* 2-Column Content Layout: Selector Cards on Left, Plan Detail Box on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Destination List Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {plans.map((dest) => {
              const isSelected = dest.id === currentPlan.id;
              const minPrice = dest.dataPlans[0].price;

              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestId(dest.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[var(--blue)] shadow-md ring-2 ring-[var(--blue)]/10"
                      : "bg-white border-[var(--line)] hover:border-[var(--blue)]/40 hover:shadow-flat"
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center font-bold text-xs">
                        {dest.flagCode === "EU" ? (
                          <Globe className="w-4 h-4 text-[var(--blue)]" />
                        ) : (
                          <Image
                            src={`/flags/24/${dest.flagCode}.png`}
                            alt={dest.name}
                            width={24}
                            height={16}
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[var(--navy)] flex items-center gap-1.5">
                          {dest.name}
                        </h3>
                        <p className="text-xs text-[var(--ink-soft)] font-medium">
                          {dest.coverage}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {dest.speed}
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between w-full text-xs">
                    <span className="text-[var(--ink-soft)]">From <strong className="text-[var(--navy)] text-sm">{minPrice}</strong></span>
                    <span className={`font-bold flex items-center gap-1 ${isSelected ? "text-[var(--blue)]" : "text-slate-400"}`}>
                      {isSelected ? "Selected" : "View plans"} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Selected Plan Display */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[var(--line)] shadow-soft sticky top-28">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--line)]">
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center font-bold text-sm shadow-sm">
                  {currentPlan.flagCode === "EU" ? (
                    <Globe className="w-6 h-6 text-[var(--blue)]" />
                  ) : (
                    <Image
                      src={`/flags/24/${currentPlan.flagCode}.png`}
                      alt={currentPlan.name}
                      width={28}
                      height={19}
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-[var(--navy)]">
                    {currentPlan.name}
                  </h3>
                  <p className="text-xs text-[var(--ink-soft)] font-medium flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Network: {currentPlan.coverage}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[var(--blue)]">
                  <Zap className="w-3 h-3" /> {currentPlan.speed}
                </span>
              </div>
            </div>

            {/* Available Package Rows */}
            <div className="space-y-3 py-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Choose Data Allowance
              </p>

              {currentPlan.dataPlans.map((dp, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 hover:border-[var(--blue)]/40 hover:bg-blue-50/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[var(--blue)] font-extrabold text-xs flex items-center justify-center">
                      {dp.size.split(" ")[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--navy)]">{dp.size}</p>
                      <p className="text-xs text-[var(--ink-soft)] font-medium">Valid for {dp.days} days</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-base font-extrabold text-[var(--navy)]">{dp.price}</p>
                    <p className="text-[11px] text-emerald-600 font-semibold">Instant active</p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-app Guarantee & CTA */}
            <div className="pt-4 border-t border-[var(--line)] space-y-4">
              <div className="flex items-center justify-between text-xs text-[var(--ink-soft)] font-medium">
                <span className="flex items-center gap-1 text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> Hotspot / Tethering supported
                </span>
                <span className="flex items-center gap-1 text-slate-600">
                  <Shield className="w-3.5 h-3.5 text-[var(--blue)]" /> Keep WhatsApp number
                </span>
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white font-bold py-3.5 px-6 rounded-2xl shadow-glow transition-all"
              >
                <span>Get eSIM for {currentPlan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
