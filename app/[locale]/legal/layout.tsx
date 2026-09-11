import { getTranslations } from "next-intl/server";
import LegalHero from "@/features/legal/components/LegalHero";
import LegalSidebar from "@/features/legal/components/LegalSidebar";

/**
 * Shared shell for every /legal/* page (Terms of Use, Data Privacy Policy,
 * Cookie Policy, AML Policy, Complaints) — styled after Grey's own legal
 * hub (grey.co/legal/terms-of-service): one dark hero + a persistent
 * sidebar linking every legal document, with the page's own content
 * rendered beside it. See LegalHero.tsx / LegalSidebar.tsx for the pieces.
 */
export default async function LegalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <>
      <LegalHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />

      <div className="bg-[var(--canvas)] min-h-screen pb-24">
        <div className="max-w-6xl mx-auto px-6 pt-12 lg:pt-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <LegalSidebar />
          <div className="flex-1 min-w-0 w-full">{children}</div>
        </div>
      </div>
    </>
  );
}
