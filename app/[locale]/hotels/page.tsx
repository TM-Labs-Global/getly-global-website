import Image from "next/image";
import { Hotel, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { APP_STORE_URL } from "@/shared/utils/appLinks";
import { JsonLd } from "@/shared/components/JsonLd";
import ProductHero from "@/shared/components/ProductHero";
import ProductFAQ from "@/shared/components/ProductFAQ";
import HotelsHowItWorks from "@/features/hotels/components/HotelsHowItWorks";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hotels" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function HotelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hotels" });
  const tPillar = await getTranslations({ locale, namespace: "home.pillars.hotels" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t("faq.q1"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a1"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q2"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a2"),
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <ProductHero
        headlineLine1={tPillar("headlineLine1")}
        headlineLine2={tPillar("headlineLine2")}
        subtitle={t("subtitle")}
        imageSrc="/imagery/woman-in-the-lounge-setting.jpeg"
        imageAlt="Travelers in a luxury boutique hotel lounge with Getly"
        imagePosition="object-cover object-[center_40%]"
      />

      <div className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          <HotelsHowItWorks />

          {/* Feature Split & Photography Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 border border-[var(--line)] shadow-soft">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--navy)]">{t("features.title")}</h2>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                {t("features.desc")}
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                  <span>{t("features.item1")}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                  <span>{t("features.item2")}</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-semibold text-[var(--navy)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)] shrink-0 mt-0.5" />
                  <span>{t("features.item3")}</span>
                </li>
              </ul>
            </div>

            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-[var(--canvas)] border border-[var(--line)] shadow-inner">
              <Image
                src="/imagery/woman-laughing-tropical-hillside-golden-hour.jpg"
                alt="Getly Hotel Stays"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/80">{t("visual.tag")}</p>
                  <p className="text-base font-extrabold">{t("visual.title")}</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold">
                  {t("visual.badge")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductFAQ
        title={t("faq.title")}
        items={[
          { q: t("faq.q1"), a: t("faq.a1") },
          { q: t("faq.q2"), a: t("faq.a2") },
        ]}
      />
    </>
  );
}
