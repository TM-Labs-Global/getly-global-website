"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getFlagUrl } from "@/shared/utils/flags";
import { ArrowUpRight } from "lucide-react";

/**
 * Coverage summary — was a static 12-country grid; now a two-row,
 * opposite-direction infinite marquee (same .animate-marquee /
 * .animate-marquee-reverse utilities used by CardEditions and the
 * homepage ticker) so the section actually reads as "180+ destinations"
 * rather than a fixed dozen. Also adds a short feature strip so the
 * section communicates the *why* behind the coverage, not just the map.
 */

const ROW_A: { code: string; name: string }[] = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "NL", name: "Netherlands" },
  { code: "PT", name: "Portugal" },
  { code: "IE", name: "Ireland" },
  { code: "BE", name: "Belgium" },
  { code: "CH", name: "Switzerland" },
  { code: "AT", name: "Austria" },
  { code: "SE", name: "Sweden" },
  { code: "NO", name: "Norway" },
  { code: "DK", name: "Denmark" },
  { code: "FI", name: "Finland" },
  { code: "PL", name: "Poland" },
  { code: "GR", name: "Greece" },
  { code: "CZ", name: "Czechia" },
  { code: "TR", name: "Türkiye" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "QA", name: "Qatar" },
  { code: "IL", name: "Israel" },
  { code: "EG", name: "Egypt" },
  { code: "HU", name: "Hungary" },
  { code: "RO", name: "Romania" },
  { code: "BG", name: "Bulgaria" },
  { code: "HR", name: "Croatia" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "LT", name: "Lithuania" },
  { code: "LV", name: "Latvia" },
  { code: "EE", name: "Estonia" },
  { code: "IS", name: "Iceland" },
  { code: "LU", name: "Luxembourg" },
  { code: "MT", name: "Malta" },
  { code: "CY", name: "Cyprus" },
  { code: "KW", name: "Kuwait" },
  { code: "BH", name: "Bahrain" },
  { code: "OM", name: "Oman" },
  { code: "JO", name: "Jordan" },
  { code: "MA", name: "Morocco" },
  { code: "TN", name: "Tunisia" },
];

const ROW_B: { code: string; name: string }[] = [
  { code: "NG", name: "Nigeria" },
  { code: "ZA", name: "South Africa" },
  { code: "GH", name: "Ghana" },
  { code: "KE", name: "Kenya" },
  { code: "TZ", name: "Tanzania" },
  { code: "ET", name: "Ethiopia" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "CN", name: "China" },
  { code: "HK", name: "Hong Kong" },
  { code: "SG", name: "Singapore" },
  { code: "MY", name: "Malaysia" },
  { code: "TH", name: "Thailand" },
  { code: "VN", name: "Vietnam" },
  { code: "PH", name: "Philippines" },
  { code: "ID", name: "Indonesia" },
  { code: "IN", name: "India" },
  { code: "PK", name: "Pakistan" },
  { code: "AU", name: "Australia" },
  { code: "NZ", name: "New Zealand" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "AR", name: "Argentina" },
  { code: "CO", name: "Colombia" },
  { code: "CL", name: "Chile" },
  { code: "PE", name: "Peru" },
  { code: "EC", name: "Ecuador" },
  { code: "UY", name: "Uruguay" },
  { code: "CR", name: "Costa Rica" },
  { code: "PA", name: "Panama" },
  { code: "TW", name: "Taiwan" },
  { code: "BD", name: "Bangladesh" },
  { code: "LK", name: "Sri Lanka" },
  { code: "NP", name: "Nepal" },
  { code: "SN", name: "Senegal" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "UG", name: "Uganda" },
  { code: "RW", name: "Rwanda" },
  { code: "ZM", name: "Zambia" },
  { code: "FJ", name: "Fiji" },
  { code: "DO", name: "Dominican Republic" },
  { code: "JM", name: "Jamaica" },
];

function CountryChip({ code, name }: { code: string; name: string }) {
  return (
    <div className="flex items-center gap-4 px-8 py-5 rounded-full bg-white border border-[var(--line)] shadow-flat shrink-0 whitespace-nowrap">
      <span className="relative w-12 h-8 rounded-[5px] overflow-hidden shadow-sm shrink-0">
        <Image src={getFlagUrl(code, 64)} alt="" fill className="object-cover" />
      </span>
      <span className="text-lg sm:text-xl font-bold text-[var(--navy)]">{name}</span>
    </div>
  );
}

function CountryMarqueeRow({
  items,
  reverse = false,
}: {
  items: { code: string; name: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[var(--canvas)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[var(--canvas)] to-transparent z-10 pointer-events-none" />

      <div
        className={`${reverse ? "animate-marquee-reverse" : "animate-marquee"} gap-5 px-6 py-1 [animation-duration:65s]! hover:[animation-play-state:paused]`}
      >
        {[0, 1].map((iter) => (
          <div
            key={iter}
            className="flex gap-5 shrink-0"
            {...(iter > 0 ? { "aria-hidden": true } : {})}
          >
            {items.map((c) => (
              <CountryChip key={`${iter}-${c.code}`} code={c.code} name={c.name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoverageTeaser() {
  const t = useTranslations("home.coverage");

  return (
    <section className="py-24 sm:py-28 bg-[var(--canvas)] relative border-t border-[var(--line)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] bg-[var(--surface)] px-4 py-1.5 rounded-full border border-[var(--line)] shadow-flat">
            {t("badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Country flag marquee — two rows drifting in opposite directions.
          Bigger chips now that the feature strip is gone, so the flags
          themselves carry the section rather than sharing it with a
          separate "why" block. */}
      <div className="space-y-6 py-2 mt-14">
        <CountryMarqueeRow items={ROW_A} />
        <CountryMarqueeRow items={ROW_B} reverse />
      </div>

      {/* CTA to Full Coverage Page */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center pt-10">
          <Link
            href="/coverage"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--navy)] text-white text-sm font-semibold hover:bg-[var(--blue)] transition-all shadow-md group"
          >
            <span>{t("viewAll")}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
