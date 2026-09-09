import { ShieldCheck, Lock, EyeOff, Key } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "security" });
  return {
    title: `${t("badge")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function SecurityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "security" });

  const securityFeatures = [
    {
      title: t("card1Title"),
      desc: t("card1Desc"),
      icon: Lock,
    },
    {
      title: t("card2Title"),
      desc: t("card2Desc"),
      icon: EyeOff,
    },
    {
      title: t("card3Title"),
      desc: t("card3Desc"),
      icon: Key,
    },
  ];

  return (
    <div className="pt-36 pb-24 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <ShieldCheck className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--ink-soft)] max-w-2xl mx-auto font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[var(--line)] shadow-soft space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--canvas)] text-[var(--blue)] flex items-center justify-center border border-[var(--line)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)]">{f.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
