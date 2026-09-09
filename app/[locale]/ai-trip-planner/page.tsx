import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ProductHero from "@/shared/components/ProductHero";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiTripPlanner" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function AITripPlannerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aiTripPlanner" });

  return (
    <>
      <ProductHero
        headlineLine1="Personalized itineraries"
        headlineLine2="& smart travel tips."
        subtitle={t("subtitle")}
        imageSrc="/imagery/man-rooftop-city-skyline-sunset.png"
        imageAlt="Traveler overlooking city skyline planning a journey with Getly AI"
        imagePosition="object-cover object-[center_35%]"
      />

      <div className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Feature Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--navy)]">{t("featuresTitle")}</h2>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
              {t("featuresDesc")}
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                <span>{t("item1")}</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                <span>{t("item2")}</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                <span>{t("item3")}</span>
              </li>
            </ul>
          </div>

          <div className="relative w-full h-[450px] rounded-2xl overflow-hidden bg-[var(--navy)] border border-white/10 flex items-center justify-center p-4">
            <Image
              src="/raw-app-screens/Getly AI/getly-ai-page.png"
              alt="Getly AI Interface"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
}
