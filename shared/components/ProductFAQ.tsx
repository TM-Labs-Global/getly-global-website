"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChevronDown, ArrowUpRight, HelpCircle } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export interface ProductFAQProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
  viewAllLabel?: string;
  viewAllHref?: string;
  className?: string;
}

export default function ProductFAQ({
  badge,
  title,
  subtitle,
  items,
  viewAllLabel,
  viewAllHref = "/faq",
  className = "py-24 sm:py-32 bg-[var(--surface-2)] border-t border-[var(--line)]",
}: ProductFAQProps) {
  const tHome = useTranslations("home.faq");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const badgeText = badge || tHome("badge");
  const subtitleText = subtitle !== undefined ? subtitle : tHome("subtitle");
  const viewAllText = viewAllLabel || tHome("viewAll");

  return (
    <section className={className}>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] bg-white px-4 py-1.5 rounded-full border border-[var(--line)] shadow-flat inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{badgeText}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
            {title}
          </h2>
          {subtitleText && (
            <p className="text-base text-[var(--ink-soft)] font-medium">
              {subtitleText}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[var(--line)] shadow-flat overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-[var(--navy)] text-base sm:text-lg hover:text-[var(--blue)] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[var(--blue)] transition-transform duration-300 ${
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
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--blue)] hover:underline"
          >
            <span>{viewAllText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
