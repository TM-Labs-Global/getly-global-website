import {
  Headphones,
  MessageCircle,
  LifeBuoy,
  ShieldAlert,
  Handshake,
  Megaphone,
  Scale,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/features/contact/components/ContactForm";
import ProductFAQ from "@/shared/components/ProductFAQ";
import ProductHero from "@/shared/components/ProductHero";
import GetAppButton from "@/shared/components/GetAppButton";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: `${t("metaTitle")} — Getly`,
    description: t("subtitle"),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      {/* Hero — full-bleed photo + dark legibility gradient, consistent
          with Getly pillar pages and modern travel super app standards */}
      <ProductHero
        badge={t("badge")}
        headlineLine1={t("heroLine1")}
        headlineLine2={t("heroLine2")}
        subtitle={t("subtitle")}
        imageSrc="/imagery/contact-getly.png"
        imageAlt="Getly user smiling while using her smartphone at a café table"
        imagePosition="object-cover object-[65%_center] md:object-center"
      />

      <div className="pt-16 sm:pt-24 pb-24 bg-[var(--canvas)] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section eyebrow */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--line)] text-xs font-bold uppercase tracking-wider text-[var(--blue)] shadow-flat">
            <Headphones className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
        </div>

        {/* Primary paths: chat + help centre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[var(--line)] shadow-soft flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--blue)]/10 text-[var(--blue)] flex items-center justify-center shadow-flat">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">{t("primary.chatTitle")}</h2>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
                {t("primary.chatDesc")}
              </p>
            </div>
            <GetAppButton size="sm" label={t("primary.chatCta")} />
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[var(--line)] shadow-soft flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[var(--amber)]/10 text-amber-600 flex items-center justify-center shadow-flat">
                <LifeBuoy className="w-7 h-7" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--navy)]">{t("primary.helpTitle")}</h2>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
                {t("primary.helpDesc")}
              </p>
            </div>
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--blue)] hover:underline w-fit"
            >
              <span>{t("primary.helpCta")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Urgent: fraud / lost card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-8 bg-[var(--red)]/5 border border-[var(--red)]/20 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[var(--red)]/10 text-[var(--red)] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-[var(--navy)]">{t("urgent.title")}</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{t("urgent.desc")}</p>
            </div>
            <a
              href="mailto:support@getly.app"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-[var(--red)] hover:opacity-90 text-white text-sm font-bold shadow-flat transition-all shrink-0 w-full sm:w-auto"
            >
              <span>{t("urgent.cta")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Account & Security recovery FAQ */}
        <ProductFAQ
          badge={t("recovery.badge")}
          title={t("recovery.title")}
          subtitle={t("recovery.subtitle")}
          items={t.raw("recovery.items")}
          viewAllLabel={t("recovery.viewAll")}
          viewAllHref="/faq"
          className="pt-2"
        />

        {/* Quick access */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-lg font-bold text-[var(--navy)] text-center">{t("quickAccess.title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${t("quickAccess.business.email")}`}
              className="p-5 rounded-2xl bg-white border border-[var(--line)] shadow-flat hover:shadow-soft transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--canvas)] text-[var(--blue)] flex items-center justify-center shrink-0 border border-[var(--line)]">
                <Handshake className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="text-sm font-bold text-[var(--navy)]">{t("quickAccess.business.title")}</p>
                <p className="text-xs text-[var(--mist)]">{t("quickAccess.business.email")}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--mist)] group-hover:text-[var(--blue)] transition-colors shrink-0" />
            </a>

            <a
              href={`mailto:${t("quickAccess.press.email")}`}
              className="p-5 rounded-2xl bg-white border border-[var(--line)] shadow-flat hover:shadow-soft transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--canvas)] text-[var(--blue)] flex items-center justify-center shrink-0 border border-[var(--line)]">
                <Megaphone className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="text-sm font-bold text-[var(--navy)]">{t("quickAccess.press.title")}</p>
                <p className="text-xs text-[var(--mist)]">{t("quickAccess.press.email")}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--mist)] group-hover:text-[var(--blue)] transition-colors shrink-0" />
            </a>

            <Link
              href="/legal/complaints"
              className="p-5 rounded-2xl bg-white border border-[var(--line)] shadow-flat hover:shadow-soft transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--canvas)] text-amber-600 flex items-center justify-center shrink-0 border border-[var(--line)]">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="text-sm font-bold text-[var(--navy)]">{t("quickAccess.complaints.title")}</p>
                <p className="text-xs text-[var(--mist)]">{t("quickAccess.complaints.email")} · {t("quickAccess.complaints.desc")}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[var(--mist)] group-hover:text-[var(--blue)] transition-colors shrink-0" />
            </Link>

            <div className="p-5 rounded-2xl bg-white border border-[var(--line)] shadow-flat flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--canvas)] text-emerald-600 flex items-center justify-center shrink-0 border border-[var(--line)]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-bold text-[var(--navy)]">{t("quickAccess.phone.title")}</p>
                <div className="flex flex-wrap gap-x-3 text-xs text-[var(--mist)]">
                  <a href="tel:+2348131296333" className="hover:text-[var(--blue)] transition-colors">
                    NG: {t("quickAccess.phone.ng")}
                  </a>
                  <a href="tel:+97450690946" className="hover:text-[var(--blue)] transition-colors">
                    QA: {t("quickAccess.phone.qa")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prefer to write in? */}
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-[var(--mist)] max-w-2xl mx-auto leading-relaxed">
          {t("footer.hq")}
        </p>
        </div>
      </div>
    </>
  );
}
