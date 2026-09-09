"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getFlagUrl } from "@/shared/utils/flags";
import { Search, Globe, CheckCircle2 } from "lucide-react";

const ALL_COUNTRIES = [
  { code: "US", name: "United States", region: "Americas" },
  { code: "GB", name: "United Kingdom", region: "Europe" },
  { code: "CA", name: "Canada", region: "Americas" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "FR", name: "France", region: "Europe" },
  { code: "AE", name: "United Arab Emirates", region: "Middle East" },
  { code: "JP", name: "Japan", region: "Asia" },
  { code: "SG", name: "Singapore", region: "Asia" },
  { code: "NG", name: "Nigeria", region: "Africa" },
  { code: "BR", name: "Brazil", region: "Americas" },
  { code: "AU", name: "Australia", region: "Oceania" },
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "IN", name: "India", region: "Asia" },
  { code: "IT", name: "Italy", region: "Europe" },
  { code: "ES", name: "Spain", region: "Europe" },
  { code: "MX", name: "Mexico", region: "Americas" },
  { code: "KE", name: "Kenya", region: "Africa" },
  { code: "KR", name: "South Korea", region: "Asia" },
  { code: "TH", name: "Thailand", region: "Asia" },
  { code: "NL", name: "Netherlands", region: "Europe" },
];

export default function CoveragePage() {
  const t = useTranslations("coverage");
  const [query, setQuery] = useState("");

  const filtered = ALL_COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.code.toLowerCase().includes(query.toLowerCase()) ||
      c.region.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pt-36 pb-24 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <Globe className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-[var(--mist)] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-[var(--line-strong)] text-[var(--navy)] font-medium text-sm shadow-flat focus:outline-none focus:ring-2 focus:ring-[var(--blue)]"
          />
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((c) => (
            <div
              key={c.code}
              className="p-4 rounded-2xl bg-white border border-[var(--line)] shadow-flat flex items-center justify-between hover:shadow-soft transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-5 rounded overflow-hidden shadow-sm shrink-0">
                  <Image
                    src={getFlagUrl(c.code, 24)}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--navy)]">{c.name}</div>
                  <div className="text-xs text-[var(--mist)]">{c.region}</div>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[var(--green)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
