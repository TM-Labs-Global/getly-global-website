"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { APP_STORE_URL } from "@/shared/utils/appLinks";
import LanguageSwitcher from "@/shared/components/LanguageSwitcher";

type NavItem = { href: string; label: string; icon: string };
type MenuKey = "products" | "company" | "resources";

export default function Navbar() {
  const t = useTranslations("common.nav");
  const tFooter = useTranslations("common.footer");
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if top hero is dark (Homepage + Product pages with full-bleed dark hero at scrollY <= 24)
  const isHomePage = pathname === "/" || /^\/[a-z]{2}$/.test(pathname);
  const isProductPageWithDarkHero = [
    "/cards",
    "/esim",
    "/flights",
    "/hotels",
    "/insurance",
    "/visa",
    "/ai-trip-planner",
  ].some((route) => pathname.endsWith(route));
  const isDarkHeader = (isHomePage || isProductPageWithDarkHero) && !isScrolled;

  // Active link helper
  const isActiveLink = (href: string) => {
    if (href === "/") return isHomePage;
    return pathname.endsWith(href);
  };

  // Categorized nav — a flat 8-link list (plus footer-only pages) replaced
  // with three grouped menus so the bar reads as "Products / Company /
  // Resources" instead of one long row. Routes and labels are the same
  // ones already used site-wide (common.nav, common.footer, Footer.tsx's
  // own Product/Company groupings) — no new pages or copy invented, just
  // reorganized and given a matching lucide icon per row.
  const productItems: NavItem[] = [
    { href: "/wallet", label: t("wallet"), icon: "/3d/wallet/wallet-flat.png" },
    { href: "/cards", label: t("cards"), icon: "/3d/card/card-single.png" },
    { href: "/esim", label: t("esim"), icon: "/3d/connectivity/signal.png" },
    { href: "/flights", label: t("flights"), icon: "/3d/action/send.png" },
    { href: "/hotels", label: t("hotels"), icon: "/3d/travel/hotel.png" },
    { href: "/insurance", label: t("insurance"), icon: "/3d/protection/insurance.png" },
    { href: "/visa", label: t("visa"), icon: "/3d/travel/passport.png" },
    { href: "/ai-trip-planner", label: t("aiTripPlanner"), icon: "/3d/brand/getly-ai.png" },
  ];

  const companyItems: NavItem[] = [
    { href: "/about", label: tFooter("aboutUs"), icon: "/3d/people/users.png" },
    { href: "/coverage", label: t("coverage"), icon: "/3d/travel/planet-ring.png" },
    { href: "/security", label: t("security"), icon: "/3d/security/shield.png" },
    { href: "/press", label: tFooter("press"), icon: "/3d/people/announce.png" },
  ];

  const resourceItems: NavItem[] = [
    { href: "/how-it-works", label: t("howItWorks"), icon: "/3d/status/speed.png" },
    { href: "/blog", label: tFooter("blog"), icon: "/3d/system/document.png" },
    { href: "/faq", label: tFooter("faq"), icon: "/3d/support/agent.png" },
  ];

  const menus: { key: MenuKey; label: string; items: NavItem[] }[] = [
    { key: "products", label: t("products"), items: productItems },
    { key: "company", label: t("company"), items: companyItems },
    { key: "resources", label: t("resources"), items: resourceItems },
  ];

  const isMenuActive = (items: NavItem[]) => items.some((item) => isActiveLink(item.href));

  // Close on route change, outside click, and Escape.
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const triggerColorClass = (active: boolean) =>
    isDarkHeader
      ? active
        ? "text-white font-bold"
        : "text-white/80 hover:text-white"
      : active
      ? "text-[var(--blue)] font-extrabold"
      : "text-slate-700 hover:text-[var(--blue)]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        ref={navRef}
        className={`pointer-events-auto w-full transition-all duration-300 ${
          isDarkHeader
            ? "py-6 bg-transparent border-b border-transparent"
            : "py-3 bg-white/90 backdrop-blur-xl backdrop-saturate-150 border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-28 h-8 flex items-center">
              <Image
                src={isDarkHeader ? "/brand/getly-logo.svg" : "/brand/getly-logo-dark.svg"}
                alt="Getly"
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav — categorized dropdowns */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13.5px] xl:text-[14.5px] font-semibold">
            {menus.map((menu) => {
              const active = isMenuActive(menu.items);
              const isOpen = openMenu === menu.key;
              return (
                <div
                  key={menu.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu.key)}
                  onMouseLeave={() => setOpenMenu((current) => (current === menu.key ? null : current))}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu((current) => (current === menu.key ? null : menu.key))}
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${triggerColorClass(
                      active
                    )}`}
                  >
                    {menu.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className={`absolute top-full pt-3 left-1/2 -translate-x-1/2 ${
                        menu.items.length > 4 ? "w-[520px]" : "w-[280px]"
                      }`}
                    >
                      <div className="bg-white rounded-3xl border border-[var(--line)] shadow-2xl p-3">
                        <div className={menu.items.length > 4 ? "grid grid-cols-2 gap-1" : "flex flex-col gap-1"}>
                          {menu.items.map((item) => {
                            const itemActive = isActiveLink(item.href);
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors ${
                                  itemActive
                                    ? "bg-[var(--canvas)] text-[var(--blue)]"
                                    : "text-slate-700 hover:bg-[var(--canvas)] hover:text-[var(--blue)]"
                                }`}
                              >
                                <span
                                  className={`relative flex items-center justify-center w-11 h-11 rounded-full shrink-0 overflow-hidden ${
                                    itemActive ? "bg-white" : "bg-[var(--canvas)]"
                                  }`}
                                >
                                  <Image src={item.icon} alt="" fill className="object-contain p-1.5" />
                                </span>
                                <span className="text-sm font-semibold whitespace-nowrap">{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Controls & Locale Switcher */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Global Language Selector */}
            <LanguageSwitcher isDark={isDarkHeader} />

            {/* Primary CTA */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 bg-[var(--blue)] hover:bg-[var(--blue-600)] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-glow transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
            >
              <span>{t("downloadApp")}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border transition-colors ${
              isDarkHeader
                ? "text-white bg-white/10 hover:bg-white/20 border-white/15"
                : "text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu — three collapsible sections instead of one
          long flat list. */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-[var(--navy)]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-2 text-white z-50 lg:hidden max-h-[85vh] overflow-y-auto">
          {menus.map((menu) => {
            const expanded = mobileSection === menu.key;
            return (
              <div key={menu.key} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setMobileSection((current) => (current === menu.key ? null : menu.key))}
                  className="w-full flex items-center justify-between py-3 font-bold"
                >
                  {menu.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
                {expanded && (
                  <div className="pb-3 flex flex-col gap-1">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 py-2 px-2 rounded-xl text-white/85 hover:text-white hover:bg-white/5"
                      >
                        <span className="relative w-7 h-7 shrink-0">
                          <Image src={item.icon} alt="" fill className="object-contain" />
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex items-center justify-between pt-4">
            <LanguageSwitcher isDark={true} />

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--blue)] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-glow flex items-center gap-1.5"
            >
              <span>{t("downloadApp")}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
