"use client";

import { useTranslations } from "next-intl";
import ProductFAQ from "@/shared/components/ProductFAQ";

export default function WalletFAQ() {
  const t = useTranslations("wallet.faq");

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  return (
    <ProductFAQ
      badge={t("badge")}
      title={t("title")}
      subtitle={t("subtitle")}
      items={faqs}
    />
  );
}
