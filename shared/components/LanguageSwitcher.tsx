"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Check, Search, X } from "lucide-react";
import { locales, localeDetails, Locale, defaultLocale } from "@/i18n";
import { getFlagUrl } from "@/shared/utils/flags";

interface LanguageSwitcherProps {
  isDark?: boolean;
  className?: string;
  variant?: "dropdown" | "modal" | "compact";
  direction?: "down" | "up" | "auto";
}

export default function LanguageSwitcher({
  isDark = false,
  className = "",
  direction = "down",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Separately tracks the mobile portal's modal content (see below for why).
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      return (
        option.nativeName.toLowerCase().includes(q) ||
        option.label.toLowerCase().includes(q) ||
        loc.toLowerCase().includes(q)
      );
    });
  }, [query]);

  // Handle outside click & escape key to close.
  //
  // The mobile picker renders through a React portal straight onto
  // document.body (so it can never be clipped by the navbar's own
  // overflow) — which means its DOM nodes sit OUTSIDE dropdownRef's own
  // subtree even though they're still inside this component in React's
  // tree. dropdownRef.current.contains(...) is a real DOM check, so it
  // was always false for anything tapped inside the portal, meaning
  // every tap in there — including on a language row — was treated as
  // an "outside" click. Because this listens on "mousedown" (fires
  // before "click"), that closed the modal and unmounted the portal
  // BEFORE the row's own onClick/switchLocale could run, so the tap
  // just closed the sheet with no language change — the "stuck, nothing
  // happens" symptom. modalContentRef marks the portal's own content box
  // as "inside" too, so only a genuine tap on the backdrop (handled
  // separately below, with stopPropagation on the content box) closes it.
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const insideTrigger = dropdownRef.current?.contains(target);
      const insideMobileModal = modalContentRef.current?.contains(target);
      if (!insideTrigger && !insideMobileModal) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      setQuery("");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
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

      {/* Desktop Dropdown: Positioned relative to button */}
      {isOpen && (
        <div
          className={`hidden md:block absolute right-0 ${
            direction === "up" ? "bottom-full mb-3" : "top-full mt-3"
          } w-[300px] rounded-[28px] bg-white border border-[var(--line)] shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150 text-[var(--navy)]`}
        >
          <div className="relative mb-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--mist)]" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[var(--canvas)] text-sm text-[var(--navy)] placeholder:text-[var(--mist)] outline-none focus:ring-2 focus:ring-[var(--blue)]/30"
            />
          </div>

          <div className="max-h-72 overflow-y-auto space-y-0.5" data-lenis-prevent>
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
                  <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 ring-1 ring-black/5">
                    <Image src={getFlagUrl(option.flag, 32)} alt="" fill className="object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col min-w-0">
                    <span
                      className={`text-sm leading-tight truncate ${
                        isSelected ? "font-bold text-[var(--blue)]" : "font-medium text-[var(--navy)]"
                      }`}
                    >
                      {option.nativeName}
                    </span>
                    <span className="text-[11px] text-[var(--mist)] truncate">{option.label}</span>
                  </div>
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

      {/* Mobile Portal Modal: Rendered to document.body so it can NEVER be clipped by mobile drawer/navbar frame */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] bg-black/65 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 md:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          >
            <div
              ref={modalContentRef}
              className="w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl flex flex-col max-h-[82vh] border border-slate-200 text-[var(--navy)] animate-in slide-in-from-bottom-6 duration-200"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-[var(--navy)]">Select Language</span>
                  <span className="text-xs text-[var(--mist)] uppercase font-semibold">
                    ({locales.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--mist)]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search language or country..."
                  autoFocus
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[var(--canvas)] text-sm text-[var(--navy)] placeholder:text-[var(--mist)] outline-none focus:ring-2 focus:ring-[var(--blue)]/30"
                />
              </div>

              {/* Languages List */}
              <div
                className="flex-1 overflow-y-auto space-y-1 pr-1 overscroll-contain"
                data-lenis-prevent
              >
                {filteredLocales.map((loc) => {
                  const option = localeDetails[loc];
                  const isSelected = loc === currentLocale;

                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => switchLocale(loc)}
                      className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-left transition-colors ${
                        isSelected
                          ? "bg-[var(--canvas)] ring-1 ring-[var(--blue)]/20"
                          : "hover:bg-[var(--canvas)] active:bg-slate-100"
                      }`}
                    >
                      <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-black/10">
                        <Image src={getFlagUrl(option.flag, 32)} alt="" fill className="object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col min-w-0">
                        <span
                          className={`text-sm leading-tight truncate ${
                            isSelected
                              ? "font-bold text-[var(--blue)]"
                              : "font-semibold text-[var(--navy)]"
                          }`}
                        >
                          {option.nativeName}
                        </span>
                        <span className="text-xs text-[var(--mist)] truncate">{option.label}</span>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[var(--blue)] shrink-0" strokeWidth={2.5} />
                      )}
                    </button>
                  );
                })}

                {filteredLocales.length === 0 && (
                  <p className="px-3 py-8 text-center text-sm text-[var(--ink-soft)]">
                    No languages found
                  </p>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
