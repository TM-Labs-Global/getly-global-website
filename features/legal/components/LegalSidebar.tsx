"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface LegalLink {
  href: string;
  key: string;
}

const GENERAL_LINKS: LegalLink[] = [
  { href: "/legal/terms", key: "terms.title" },
  { href: "/legal/privacy-policy", key: "privacy.title" },
  { href: "/legal/cookie-policy", key: "cookie.title" },
];

const COMPLIANCE_LINKS: LegalLink[] = [
  { href: "/legal/aml-policy", key: "aml.title" },
  { href: "/legal/complaints", key: "complaints.title" },
];

/**
 * The "sidebar helper" from Grey's legal hub (grey.co/legal/terms-of-service):
 * a persistent, sticky list of every legal document grouped by category, with
 * the current page picked out by a blue left border — so a reader on the
 * Terms of Use page can jump straight to the Privacy Policy or AML Policy
 * without going back through the footer. Lives in app/[locale]/legal/layout.tsx
 * so it's shared across all five /legal/* pages, not just Terms and Privacy.
 */
export default function LegalSidebar() {
  const t = useTranslations("legal");
  const pathname = usePathname();

  const isActive = (href: string) => pathname?.includes(href) ?? false;

  const renderLink = ({ href, key }: LegalLink) => {
    const active = isActive(href);
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={`block pl-4 pr-3 py-2.5 text-sm rounded-r-lg border-l-2 transition-colors ${
          active
            ? "border-[var(--blue)] bg-[var(--blue)]/5 text-[var(--navy)] font-bold"
            : "border-transparent text-[var(--ink-soft)] hover:text-[var(--navy)] hover:border-[var(--line-strong)]"
        }`}
      >
        {t(key)}
      </Link>
    );
  };

  return (
    <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-32 space-y-8">
      <div className="space-y-1.5">
        <p className="px-4 text-xs font-bold uppercase tracking-wider text-[var(--mist)]">
          {t("navGeneral")}
        </p>
        <nav className="space-y-0.5">{GENERAL_LINKS.map(renderLink)}</nav>
      </div>

      <div className="space-y-1.5">
        <p className="px-4 text-xs font-bold uppercase tracking-wider text-[var(--mist)]">
          {t("navCompliance")}
        </p>
        <nav className="space-y-0.5">{COMPLIANCE_LINKS.map(renderLink)}</nav>
      </div>
    </aside>
  );
}
