"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";


/**
 * "Everything you need in one app" — comparison build (Option B).
 *
 * A static 2x2 bento grid, each tile its own on-brand colour (light blue,
 * navy, light neutral, amber) with a small custom graphic standing in for
 * the pillar instead of a photo — modeled on a reference layout the user
 * supplied. Same four pillars and per-pillar copy as PillarGrid.tsx
 * (Option A), just a different visual treatment; kept side-by-side on the
 * home page purely for comparison, not wired into navigation.
 */

export default function PillarGridIcons() {
  const t = useTranslations("home.pillars");
  const tHeader = useTranslations("home.pillarsIcons");

  const cardBase =
    "relative rounded-[28px] overflow-hidden h-[420px] sm:h-[460px] lg:h-[500px] p-8 sm:p-10 flex flex-col justify-end shadow-soft";
  const ctaBase =
    "group inline-flex items-center gap-1.5 text-sm font-bold w-fit";
  const arrow = (
    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  );

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--navy)]/8 text-[var(--navy)]/60 text-xs font-bold uppercase tracking-widest mb-6">
          Option B — 3D icons (comparison)
        </span>

        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] mb-3">
          {tHeader("eyebrow")}
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
          <span className="block text-[var(--navy)]">{tHeader("headlineLine1")}</span>
          <span className="block text-[var(--navy)]/35">{tHeader("headlineLine2")}</span>
        </h2>
        <p className="max-w-xl text-lg text-[var(--ink-soft)] font-medium mb-14">
          {tHeader("subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* 01 · Wallet — light blue, a stack of gradient discs */}
          <article
            className={cardBase}
            style={{ background: "color-mix(in srgb, var(--blue) 10%, white)" }}
          >
            <div className="absolute right-8 sm:right-12 top-10 sm:top-14 w-36 h-36 sm:w-44 sm:h-44">
              <Image
                src="/3d/wallet/wallet-clasp.png"
                alt=""
                fill
                className="object-contain drop-shadow-[0_18px_30px_rgba(15,24,76,0.22)]"
                sizes="176px"
              />
            </div>

            <div className="relative space-y-3 sm:space-y-4 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
                01 · {t("wallet.eyebrow")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.15]">
                <span className="block">{t("wallet.headlineLine1")}</span>
                <span className="block">{t("wallet.headlineLine2")}</span>
              </h3>
              <p className="text-[var(--ink-soft)] text-sm sm:text-base leading-relaxed">
                {t("wallet.desc")}
              </p>
              <Link href="/wallet" className={`${ctaBase} text-[var(--blue)]`}>
                <span>{t("wallet.cta")}</span>
                {arrow}
              </Link>
            </div>
          </article>

          {/* 02 · Cards — navy, a tilted gradient card mockup */}
          <article className={`${cardBase} bg-[var(--navy)]`}>
            <div className="absolute right-8 sm:right-12 top-10 sm:top-14 w-36 h-36 sm:w-44 sm:h-44">
              <Image
                src="/3d/card/card-single.png"
                alt=""
                fill
                className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.4)]"
                sizes="176px"
              />
            </div>

            <div className="relative space-y-3 sm:space-y-4 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                02 · {t("cards.eyebrow")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-[1.15]">
                <span className="block">{t("cards.headlineLine1")}</span>
                <span className="block">{t("cards.headlineLine2")}</span>
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                {t("cards.desc")}
              </p>
              <Link href="/cards" className={`${ctaBase} text-white`}>
                <span>{t("cards.cta")}</span>
                {arrow}
              </Link>
            </div>
          </article>

          {/* 03 · eSIM — light neutral, an eSIM card outline + signal waves */}
          <article
            className={cardBase}
            style={{ background: "color-mix(in srgb, var(--navy) 4%, white)" }}
          >
            <div className="absolute right-8 sm:right-12 top-10 sm:top-14 w-36 h-36 sm:w-44 sm:h-44">
              <Image
                src="/3d/connectivity/signal.png"
                alt=""
                fill
                className="object-contain drop-shadow-[0_18px_30px_rgba(15,24,76,0.16)]"
                sizes="176px"
              />
            </div>

            <div className="relative space-y-3 sm:space-y-4 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
                03 · {t("esim.eyebrow")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.15]">
                <span className="block">{t("esim.headlineLine1")}</span>
                <span className="block">{t("esim.headlineLine2")}</span>
              </h3>
              <p className="text-[var(--ink-soft)] text-sm sm:text-base leading-relaxed">
                {t("esim.desc")}
              </p>
              <Link href="/esim" className={`${ctaBase} text-[var(--blue)]`}>
                <span>{t("esim.cta")}</span>
                {arrow}
              </Link>
            </div>
          </article>

          {/* 04 · Flights — Getly Electric Lemon, a plane + route */}
          <article className={cardBase} style={{ background: "var(--lemon)" }}>
            <div className="absolute right-8 sm:right-12 top-10 sm:top-14 flex flex-col items-end gap-1">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                <Image
                  src="/3d/travel/globe-explore.png"
                  alt=""
                  fill
                  className="object-contain drop-shadow-[0_18px_30px_rgba(15,24,76,0.2)]"
                  sizes="176px"
                />
              </div>
              <span className="text-[10px] sm:text-xs font-extrabold tracking-wide text-[var(--navy)]/75">
                LAG → PAR
              </span>
            </div>

            <div className="relative space-y-3 sm:space-y-4 max-w-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--navy)]/70">
                04 · {t("flights.eyebrow")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.15]">
                <span className="block">{t("flights.headlineLine1")}</span>
                <span className="block">{t("flights.headlineLine2")}</span>
              </h3>
              <p className="text-[var(--navy)]/70 text-sm sm:text-base leading-relaxed">
                {t("flights.desc")}
              </p>
              <Link href="/flights" className={`${ctaBase} text-[var(--navy)]`}>
                <span>{t("flights.cta")}</span>
                {arrow}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
