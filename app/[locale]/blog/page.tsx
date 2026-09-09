import { BookOpen, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("title")} — Getly`,
    description: t("subtitle"),
  };
}

const ARTICLES = [
  {
    slug: "traveling-without-physical-sims",
    title: "How eSIM Technology is Changing International Travel",
    excerpt: "Say goodbye to airport SIM kiosks and expensive roaming charges with instant digital profiles.",
    date: "Sep 2, 2026",
    category: "Connectivity",
  },
  {
    slug: "multi-currency-wallet-guide",
    title: "Managing Travel Budgets Across Currencies",
    excerpt: "How to hold, spend, and cash out funds without losing money to hidden exchange markups.",
    date: "Aug 28, 2026",
    category: "Finance & Travel",
  },
  {
    slug: "virtual-cards-for-digital-nomads",
    title: "Why Virtual Travel Cards Are Safer for Online Bookings",
    excerpt: "Protect your primary card details while making reservations, buying flights, and subscribing to travel services.",
    date: "Aug 15, 2026",
    category: "Security",
  },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <div className="pt-36 pb-24 bg-[var(--canvas)]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <BookOpen className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((a) => (
            <article
              key={a.slug}
              className="bg-white rounded-3xl p-8 border border-[var(--line)] shadow-soft hover:shadow-glow transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-[var(--blue)]">
                  <span>{a.category}</span>
                  <span className="text-[var(--mist)]">{a.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[var(--navy)] leading-snug">{a.title}</h2>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{a.excerpt}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--line)] flex items-center gap-1.5 text-sm font-bold text-[var(--blue)]">
                <span>{t("readStory")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
