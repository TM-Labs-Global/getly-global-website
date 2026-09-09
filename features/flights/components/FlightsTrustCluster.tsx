import Image from "next/image";
import { getTranslations } from "next-intl/server";

/**
 * "Your money, protected" pattern — measured live on revolut.com/joint-accounts:
 * the heading/subtitle/CTA sit centered on their own full-width row, and the
 * card cluster below spans the full section width as a 3-up row with the
 * center card ~1.11x the size of the two flanking ones (342x482 vs 308x434
 * at 1440px, via getBoundingClientRect). CardsProtected.tsx already reproduced
 * that exact ratio as a 1fr/1.1fr/1fr grid for the Cards page — this reuses
 * the same proven grid/spacing rather than re-deriving it, with Flights-
 * specific copy and icons so the two sections don't read as duplicates.
 */
export default async function FlightsTrustCluster() {
  const t = await getTranslations("flights.trustCluster");

  const cards = [
    {
      icon: "/3d/support/agent.png",
      alt: "24/7 support for your booking",
      copy: t("item1"),
      className: "bg-[#0B0E14]",
      featured: false,
    },
    {
      icon: "/3d/security/shield-biometric.png",
      alt: "Encrypted booking and payment details",
      copy: t("item2"),
      className: "bg-[var(--navy)]",
      featured: true,
    },
    {
      icon: "/3d/security/shield.png",
      alt: "Monitoring for unusual card activity",
      copy: t("item3"),
      className: "bg-gradient-navy-blue",
      featured: false,
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr_1fr] sm:items-center gap-5 sm:gap-5 lg:gap-6">
        {cards.map((card) => (
          <div
            key={card.icon}
            className={`${card.className} ${
              card.featured
                ? "p-8 min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]"
                : "p-7 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]"
            } rounded-[28px] flex flex-col shadow-soft`}
          >
            <h3
              className={`${
                card.featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
              } font-bold text-white leading-snug max-w-[16ch]`}
            >
              {card.copy}
            </h3>

            <div
              className={`mt-auto pt-10 relative flex items-center justify-center rounded-[20px] bg-white/5 border border-white/10 ${
                card.featured
                  ? "h-[240px] sm:h-[300px] lg:h-[340px]"
                  : "h-[212px] sm:h-[260px] lg:h-[300px]"
              }`}
            >
              <Image
                src={card.icon}
                alt={card.alt}
                width={200}
                height={200}
                className={`${
                  card.featured
                    ? "h-[190px] sm:h-[230px] lg:h-[260px]"
                    : "h-[168px] sm:h-[204px] lg:h-[236px]"
                } w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,105,255,0.35)]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
