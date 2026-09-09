"use client";

import { useTranslations } from "next-intl";
import { CreditCard, Unlock, Plane, BadgePercent, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WalletBenefitsGrid() {
  const t = useTranslations("wallet.benefits");

  const benefits = [
    {
      title: t("card1Title"),
      desc: t("card1Desc"),
      icon: CreditCard,
      badge: "100% Global Acceptance",
      accentBg: "bg-blue-50 text-[var(--blue)]",
      illustration: (
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {["Airlines", "Hotels", "Uber & Taxis", "App Stores", "Restaurants"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[var(--line)] text-xs font-bold text-[var(--navy)] shadow-flat"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {item}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: t("card2Title"),
      desc: t("card2Desc"),
      icon: Unlock,
      badge: "No Monthly Cap",
      accentBg: "bg-emerald-50 text-emerald-700",
      illustration: (
        <div className="pt-4 flex items-center gap-3">
          <div className="px-3.5 py-2 rounded-xl bg-red-50 border border-red-100 text-xs font-semibold text-red-700 line-through opacity-70">
            Local Bank $20 - $100/mo Cap
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-1.5 shadow-sm">
            <span>Getly USD Freedom</span>
          </div>
        </div>
      ),
    },
    {
      title: t("card3Title"),
      desc: t("card3Desc"),
      icon: Plane,
      badge: "Unified Travel Power",
      accentBg: "bg-amber-50 text-amber-700",
      illustration: (
        <div className="pt-4 grid grid-cols-4 gap-2">
          {[
            { label: "Cards", icon: "/3d/card/card-single.png" },
            { label: "Flights", icon: "/3d/action/send.png" },
            { label: "Hotels", icon: "/3d/protection/insurance.png" },
            { label: "eSIM", icon: "/3d/connectivity/signal.png" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-2 rounded-xl bg-white border border-[var(--line)] flex flex-col items-center justify-center text-center space-y-1"
            >
              <div className="relative w-6 h-6">
                <Image src={s.icon} alt="" fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold text-[var(--navy)]">{s.label}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: t("card4Title"),
      desc: t("card4Desc"),
      icon: BadgePercent,
      badge: "Zero Hidden Markup",
      accentBg: "bg-purple-50 text-purple-700",
      illustration: (
        <div className="pt-4 flex items-center justify-between p-3 rounded-xl bg-white border border-[var(--line)] text-xs font-semibold text-[var(--navy)]">
          <span className="text-[var(--mist)]">Live Interbank Rate</span>
          <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">0% Hidden Fees</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[var(--blue)]">
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* 4 Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--canvas)] rounded-3xl p-8 sm:p-10 border border-[var(--line)] shadow-soft flex flex-col justify-between space-y-6 hover:border-[var(--blue)]/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${b.accentBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-[var(--line)] text-[var(--navy)]">
                      {b.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[var(--navy)] tracking-tight">
                      {b.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>

                {b.illustration}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
