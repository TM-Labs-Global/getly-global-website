"use client";

import { useState } from "react";
import { ChevronDown, Smartphone, CheckCircle, HelpCircle } from "lucide-react";

interface DeviceCategory {
  brand: string;
  models: string;
}

interface FAQItem {
  q: string;
  badge?: string;
  a?: string;
  devices?: DeviceCategory[];
}

const FAQS: FAQItem[] = [
  {
    q: "What is an eSIM and how does it work?",
    a: "An eSIM (embedded SIM) is a digital SIM card built directly into your smartphone's hardware. Instead of inserting a physical plastic SIM chip, you simply download and install a digital network profile from the Getly app to connect to local mobile carriers immediately.",
  },
  {
    q: "Is your phone eSIM compatible?",
    badge: "Device Check",
    a: "Nearly all smartphones manufactured since 2018 natively support eSIM profiles alongside your regular physical SIM card.",
    devices: [
      {
        brand: "Apple iPhone",
        models: "iPhone XS, XR, 11, 12, 13, 14, 15, 16 Series & iPhone SE (2nd gen+)",
      },
      {
        brand: "Samsung Galaxy",
        models: "Galaxy S20, S21, S22, S23, S24 Series, Z Flip, Z Fold & Note 20",
      },
      {
        brand: "Google Pixel",
        models: "Pixel 3, 3a, 4, 5, 6, 7, 8, 9 Series & Pixel Fold",
      },
      {
        brand: "Other Manufacturers",
        models: "Recent flagship models from Xiaomi, Motorola, Sony, OnePlus & Huawei",
      },
    ],
  },
  {
    q: "When should I install my Getly eSIM profile?",
    a: "We recommend purchasing and installing your eSIM profile shortly before your trip while you still have Wi-Fi at home or the departure airport. You can keep the line turned off until your flight lands, at which point you turn on the eSIM line and enjoy instant local data.",
  },
  {
    q: "Do I lose my regular phone number or WhatsApp?",
    a: "No! Modern phones support Dual SIM functionality. Your primary physical SIM stays active for free incoming SMS verification codes, phone calls, and WhatsApp, while Getly eSIM powers high-speed mobile data.",
  },
  {
    q: "Can I use mobile hotspot / personal tethering?",
    a: "Yes, all Getly eSIM packages support personal hotspot tethering. You can connect your laptop, tablet, or companions' devices with full 5G/LTE speeds.",
  },
  {
    q: "What happens if I run out of data while abroad?",
    a: "You can check your live balance anytime in the Getly app. If you need more gigabytes, simply tap 'Top Up' to add extra data in seconds directly from your Getly wallet balance.",
  },
];

export default function EsimCompatibilityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open device check by default or when clicked

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[var(--line)]">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Unified FAQ Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--blue)]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] tracking-tight">
            Everything you need to know about Getly eSIM
          </h2>
          <p className="text-sm sm:text-base text-[var(--ink-soft)] font-medium max-w-xl mx-auto leading-relaxed">
            Quick answers regarding device compatibility, installation, and global roaming coverage.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--line)] bg-white overflow-hidden transition-all shadow-flat hover:border-slate-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[var(--navy)] hover:text-[var(--blue)] transition-colors"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span>{faq.q}</span>
                    {faq.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[var(--blue)]">
                        <Smartphone className="w-3 h-3" />
                        {faq.badge}
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--blue)] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed border-t border-slate-100 space-y-4">
                    {faq.a && <p>{faq.a}</p>}

                    {/* Integrated Device Compatibility Breakdown */}
                    {faq.devices && (
                      <div className="space-y-4 pt-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {faq.devices.map((dev, dIdx) => (
                            <div
                              key={dIdx}
                              className="bg-[#f6f8fb] rounded-xl p-4 border border-[var(--line)] space-y-1.5"
                            >
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                <h3 className="text-sm font-bold text-[var(--navy)]">
                                  {dev.brand}
                                </h3>
                              </div>
                              <p className="text-xs text-[var(--ink-soft)] leading-relaxed font-medium">
                                {dev.models}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Fast USSD/Settings dial tip */}
                        <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5 text-xs text-blue-950 font-medium">
                          <Smartphone className="w-4 h-4 text-[var(--blue)] shrink-0 mt-0.5" />
                          <span>
                            <strong>Quick check:</strong> Dial <code className="bg-white px-1.5 py-0.5 rounded text-blue-700 font-mono font-bold border border-blue-200">*#06#</code> on your device. If an <strong>EID</strong> number or barcode appears, your device is 100% eSIM ready.
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
