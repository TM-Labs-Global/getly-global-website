import FAQTeaser from "@/features/home/components/FAQTeaser";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  return {
    title: `${t("title")} — Getly`,
    description: t("subtitle"),
  };
}

export default function FAQPage() {
  return (
    <div className="pt-24">
      <FAQTeaser />
    </div>
  );
}
