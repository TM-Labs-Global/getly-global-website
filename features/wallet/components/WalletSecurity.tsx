import Image from "next/image";
import { useTranslations } from "next-intl";

const PILLARS = [
  {
    img: "/3d/card/card-single.png",
    label: "PCI-DSS Level 1 certified card processing",
  },
  {
    img: "/3d/security/shield-biometric.png",
    label: "3D Secure biometric verification on every transaction",
  },
  {
    img: "/3d/security/padlock.png",
    label: "Your funds held in segregated, regulated accounts",
  },
];

export default function WalletSecurity() {
  const t = useTranslations("wallet.security");

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — left-aligned like the inspiration */}
        <div className="max-w-xl space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight leading-[1.1]">
            {t("title")}
          </h2>
          <p className="text-base text-[var(--ink-soft)] font-medium leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#f5f7fa] rounded-3xl overflow-hidden border border-slate-100"
            >
              {/* Image area */}
              <div className="w-full flex items-center justify-center px-6 pt-12 pb-8 min-h-[320px]">
                <div className="relative w-full h-64">
                  <Image
                    src={p.img}
                    alt={p.label}
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="(max-width: 640px) 80vw, 30vw"
                  />
                </div>
              </div>

              {/* Label */}
              <div className="w-full px-6 pb-8 pt-2 text-center">
                <p className="text-sm sm:text-base font-semibold text-[var(--navy)] leading-snug">
                  {p.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
