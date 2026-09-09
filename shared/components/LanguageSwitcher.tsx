"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Check, Search } from "lucide-react";
import { locales, localeDetails, Locale, defaultLocale } from "@/i18n";
import { getFlagUrl } from "@/shared/utils/flags";

interface LanguageSwitcherProps {
  isDark?: boolean;
  className?: string;
  variant?: "dropdown" | "modal" | "compact";
}

export default function LanguageSwitcher({
  isDark = false,
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine active locale from current URL pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0] as Locale | undefined;
  const currentLocale: Locale = firstSegment && locales.includes(firstSegment) ? firstSegment : defaultLocale;
  const activeOption = localeDetails[currentLocale] || localeDetails.en;

  const filteredLocales = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return locales;
    return locales.filter((loc) => {
      const option = localeDetails[loc];
      return option.nativeName.toLowerCase().includes(q) || option.label.toLowerCase().includes(q);
    });
  }, [query]);

  // Handle outside click to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setQuery("");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const switchLocale = (newLocale: Locale) => {
    setIsOpen(false);
    if (newLocale === currentLocale) return;

    let targetPath = pathname;
    // Strip old non-default locale prefix if present
    if (currentLocale !== defaultLocale && pathname.startsWith(`/${currentLocale}`)) {
      targetPath = pathname.substring(currentLocale.length + 1) || "/";
    }

    if (newLocale === defaultLocale) {
      router.push(targetPath);
    } else {
      const cleanPath = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;
      router.push(`/${newLocale}${cleanPath === "/" ? "" : cleanPath}`);
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          isDark
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "bg-[var(--canvas)] hover:bg-[var(--surface-2)] text-[var(--navy)]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-black/5">
          <Image src={getFlagUrl(activeOption.flag, 32)} alt={activeOption.label} fill className="object-cover" />
        </div>
        <span className="uppercase font-bold tracking-wider">{activeOption.code}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""} ${
            isDark ? "text-white/70" : "text-[var(--mist)]"
          }`}
        />
      </button>

      {/* Language picker — modeled directly on revolut.com's own region
          switcher (inspected live): a pill search field at the top, then a
          plain single-column list of circular flag + name rows, no card
          header, no second line of text per row. Adapted into Getly's
          light theme (Revolut's is on their black footer) using the same
          --canvas / --navy / --blue tokens as the rest of the site. */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-[300px] rounded-[28px] bg-white border border-[var(--line)] shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="relative mb-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--mist)]" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[var(--canvas)] text-sm text-[var(--navy)] placeholder:text-[var(--mist)] outline-none focus:ring-2 focus:ring-[var(--blue)]/30"
            />
          </div>

          <div className="max-h-72 overflow-y-auto" data-lenis-prevent>
            {filteredLocales.map((loc) => {
              const option = localeDetails[loc];
              const isSelected = loc === currentLocale;

              return (
                <button
                  key={loc}
                  type="button"
                  onClick={() => switchLocale(loc)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left transition-colors ${
                    isSelected ? "bg-[var(--canvas)]" : "hover:bg-[var(--canvas)]"
                  }`}
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-black/5">
                    <Image src={getFlagUrl(option.flag, 32)} alt="" fill className="object-cover" />
                  </div>
                  <span
                    className={`flex-1 text-sm ${
                      isSelected ? "font-bold text-[var(--blue)]" : "font-medium text-[var(--navy)]"
                    }`}
                  >
                    {option.nativeName}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[var(--blue)] shrink-0" strokeWidth={2.5} />}
                </button>
              );
            })}

            {filteredLocales.length === 0 && (
              <p className="px-3 py-6 text-center text-sm text-[var(--ink-soft)]">No matches</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
