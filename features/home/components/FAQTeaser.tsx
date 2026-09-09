"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronDown, ArrowUpRight, HelpCircle } from "lucide-react";

export default function FAQTeaser() {
  const t = useTranslations("home.faq");

  const faqs = [
    {
      q: t("q1"),
      a: t("a1"),
    },
    {
      q: t("q2"),
      a: t("a2"),
    },
    {
      q: t("q3"),
      a: t("a3"),
    },
    {
      q: t("q4"),
      a: t("a4"),
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-32 bg-[var(--surface-2)] border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] bg-white px-4 py-1.5 rounded-full border border-[var(--line)] shadow-flat inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[var(--line)] shadow-flat overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-[var(--navy)] text-base sm:text-lg hover:text-[var(--blue)] transition-colors"
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--blue)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[var(--ink-soft)] leading-relaxed border-t border-[var(--line)]/50 pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View Full FAQ Link */}
        <div className="text-center pt-4">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--blue)] hover:underline"
          >
            <span>{t("viewAll")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
