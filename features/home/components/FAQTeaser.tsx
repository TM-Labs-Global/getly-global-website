"use client";

import { useTranslations } from "next-intl";
import ProductFAQ from "@/shared/components/ProductFAQ";

export default function FAQTeaser() {
  const t = useTranslations("home.faq");

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
  ];

  return (
    <ProductFAQ
      badge={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      viewAllLabel={t("viewAll")}
      items={faqs}
      className="py-32 bg-[var(--surface-2)] border-t border-[var(--line)]"
    />
  );
}
