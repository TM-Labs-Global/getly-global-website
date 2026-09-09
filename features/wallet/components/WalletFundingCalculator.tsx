"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Calculator, ArrowRightLeft, Zap, ShieldCheck, Check } from "lucide-react";
import { APP_STORE_URL } from "@/shared/utils/appLinks";

interface CurrencyOption {
  code: string;
  name: string;
  flag: string;
  rateToUsd: number; // 1 USD = rate units of local currency
  symbol: string;
}

const CURRENCIES: CurrencyOption[] = [
  { code: "NGN", name: "Nigerian Naira", flag: "/flags/64/NG.png", rateToUsd: 1520.0, symbol: "₦" },
  { code: "GHS", name: "Ghanaian Cedi", flag: "/flags/64/GH.png", rateToUsd: 15.6, symbol: "GH₵" },
  { code: "KES", name: "Kenyan Shilling", flag: "/flags/64/KE.png", rateToUsd: 129.5, symbol: "KSh" },
  { code: "ZAR", name: "South African Rand", flag: "/flags/64/ZA.png", rateToUsd: 18.2, symbol: "R" },
  { code: "EUR", name: "Euro", flag: "/flags/64/EU.png", rateToUsd: 0.92, symbol: "€" },
  { code: "GBP", name: "British Pound", flag: "/flags/64/GB.png", rateToUsd: 0.79, symbol: "£" },
  { code: "CAD", name: "Canadian Dollar", flag: "/flags/64/CA.png", rateToUsd: 1.36, symbol: "CA$" },
  { code: "AED", name: "UAE Dirham", flag: "/flags/64/AE.png", rateToUsd: 3.67, symbol: "AED" },
  { code: "BRL", name: "Brazilian Real", flag: "/flags/64/BR.png", rateToUsd: 5.45, symbol: "R$" },
  { code: "INR", name: "Indian Rupee", flag: "/flags/64/IN.png", rateToUsd: 83.5, symbol: "₹" },
];

export default function WalletFundingCalculator() {
  const t = useTranslations("wallet.calculator");

  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyOption>(CURRENCIES[0]);
  const [usdAmount, setUsdAmount] = useState<number>(100);

  const localAmount = (usdAmount * selectedCurrency.rateToUsd).toLocaleString(undefined, {
    minimumFractionDigits: selectedCurrency.rateToUsd < 5 ? 2 : 0,
    maximumFractionDigits: 2,
  });

  const handleUsdChange = (val: string) => {
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed >= 0) {
      setUsdAmount(parsed);
    } else if (val === "") {
      setUsdAmount(0);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[var(--blue)]">
            <Calculator className="w-4 h-4 text-[var(--blue)]" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink-soft)] font-medium">
            {t("subtitle")}
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="max-w-4xl mx-auto bg-[var(--canvas)] rounded-[32px] p-6 sm:p-10 md:p-12 border border-[var(--line)] shadow-soft space-y-8">
          
          {/* Quick Currency Selector Grid */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--mist)]">
              Choose Your Payment Currency:
            </span>
            <div className="flex flex-wrap gap-2">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => setSelectedCurrency(curr)}
                  className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all border ${
                    selectedCurrency.code === curr.code
                      ? "bg-[var(--navy)] text-white border-[var(--navy)] shadow-sm"
                      : "bg-white text-[var(--navy)] border-[var(--line)] hover:bg-black/5"
                  }`}
                >
                  <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0">
                    <Image src={curr.flag} alt={curr.code} fill className="object-cover" />
                  </div>
                  <span>{curr.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Side by Side Conversion Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Input 1: Local Currency Debit Amount */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[var(--line)] space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[var(--mist)] uppercase tracking-wider">
                <span>{t("youPay")}</span>
                <span className="text-[var(--navy)]">{selectedCurrency.name}</span>
              </div>
              
              <div className="flex items-center justify-between gap-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight">
                  {selectedCurrency.symbol} {localAmount}
                </div>
                <div className="flex items-center gap-2 bg-[var(--canvas)] px-3 py-1.5 rounded-xl border border-[var(--line)]">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image src={selectedCurrency.flag} alt="" fill className="object-cover" />
                  </div>
                  <span className="font-bold text-sm text-[var(--navy)]">{selectedCurrency.code}</span>
                </div>
              </div>

              <div className="text-xs text-[var(--mist)] flex items-center gap-1.5 pt-1 border-t border-[var(--line)]">
                <span>Pay via domestic Visa or Mastercard</span>
              </div>
            </div>

            {/* Input 2: USD Balance Credited */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[var(--blue)] space-y-3 relative shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-[var(--blue)] uppercase tracking-wider">
                <span>{t("youReceive")}</span>
                <span className="bg-blue-50 text-[var(--blue)] px-2 py-0.5 rounded-md text-[10px]">Instant Credit</span>
              </div>
              
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight w-full">
                  <span>$</span>
                  <input
                    type="number"
                    min="10"
                    max="10000"
                    value={usdAmount || ""}
                    onChange={(e) => handleUsdChange(e.target.value)}
                    className="w-full bg-transparent font-extrabold text-[var(--navy)] outline-none border-b border-transparent focus:border-[var(--blue)] transition-colors"
                  />
                </div>
                <div className="flex items-center gap-2 bg-[var(--canvas)] px-3 py-1.5 rounded-xl border border-[var(--line)] shrink-0">
                  <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0">
                    <Image src="/flags/64/US.png" alt="USD" fill className="object-cover" />
                  </div>
                  <span className="font-bold text-sm text-[var(--navy)]">USD</span>
                </div>
              </div>

              <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 pt-1 border-t border-[var(--line)]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ready for cards, flights, hotels & eSIM</span>
              </div>
            </div>

          </div>

          {/* Live Breakdown Details Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white rounded-xl p-4 border border-[var(--line)] space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--mist)]">
                {t("exchangeRate")}
              </span>
              <p className="text-sm sm:text-base font-extrabold text-[var(--navy)]">
                1 USD = {selectedCurrency.rateToUsd.toLocaleString()} {selectedCurrency.code}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[var(--line)] space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--mist)]">
                {t("fundingFee")}
              </span>
              <p className="text-sm sm:text-base font-extrabold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                {t("fundingFeeValue")}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[var(--line)] space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--mist)]">
                {t("instantSettle")}
              </span>
              <p className="text-sm sm:text-base font-extrabold text-[var(--blue)] flex items-center gap-1">
                <Zap className="w-4 h-4 text-[var(--amber)]" />
                {t("instantSettleValue")}
              </p>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--line)]">
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] font-medium text-center sm:text-left">
              Download Getly to load your USD wallet with any domestic card today.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[var(--navy)] hover:bg-[var(--blue)] text-white font-bold text-sm rounded-full transition-all shadow-md text-center"
            >
              {t("cta")}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
