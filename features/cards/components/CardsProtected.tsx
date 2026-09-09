import Image from "next/image";
import { getTranslations } from "next-intl/server";
import GetAppButton from "@/shared/components/GetAppButton";

/**
 * "Your card, protected" — a centered trust/security section, modeled on
 * revolut.com/cards' own "Your cards, protected" block: big centered
 * headline + subtitle + CTA, then a row of dark cards each pairing one
 * protection claim with a visual. Rebuilt in Getly's own navy/black
 * palette rather than Revolut's neutral grayscale, and the CTA is the
 * site's existing GetAppButton (a real destination) rather than a
 * "Learn more" link to a page that doesn't exist yet. Every claim below
 * is a restatement of copy already approved elsewhere on this page
 * (features.item1/item2/desc) — no new features or figures invented.
 *
 * The middle-card-in-front effect: inspecting revolut.com/cards' own
 * "Your cards, protected" row live (getComputedStyle on the three visible
 * card boxes) shows the center card at 342x482 vs 308x434 for the two
 * flanking cards — a ~1.11x ratio on both axes — laid out in a row with
 * cross-axis centering, so the taller middle card simply pokes out above
 * and below the shorter side ones. Reproduced here with a 1fr/1.1fr/1fr
 * grid track (not a CSS transform: scale, which wouldn't reflow layout)
 * plus items-center, rather than copying Revolut's carousel/drag
 * machinery, which this static section doesn't need.
 */
export default async function CardsProtected() {
  const t = await getTranslations("cards.protected");

  const cards = [
    {
      icon: "/3d/security/padlock.png",
      alt: "Freeze your Getly card",
      copy: t("item1"),
      className: "bg-gradient-navy-blue",
      featured: false,
    },
    {
      icon: "/3d/security/shield.png",
      alt: "Set spending limits on your Getly card",
      copy: t("item2"),
      className: "bg-[var(--navy)]",
      featured: true,
    },
    {
      icon: "/3d/system/notification.png",
      alt: "Real-time alerts on your Getly card",
      copy: t("item3"),
      className: "bg-[#0B0E14]",
      featured: false,
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-12 pt-10">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="pt-2 flex justify-center">
          <GetAppButton size="md" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr_1fr] sm:items-center gap-5 sm:gap-5 lg:gap-6">
        {cards.map((card) => (
          <div
            key={card.icon}
            className={`${card.className} ${
              card.featured
                ? "p-8 min-h-[460px] sm:min-h-[560px] lg:min-h-[640px]"
                : "p-7 min-h-[420px] sm:min-h-[500px] lg:min-h-[576px]"
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
                  ? "h-[280px] sm:h-[360px] lg:h-[410px]"
                  : "h-[252px] sm:h-[320px] lg:h-[364px]"
              }`}
            >
              <Image
                src={card.icon}
                alt={card.alt}
                width={200}
                height={200}
                className={`${
                  card.featured
                    ? "h-[220px] sm:h-[280px] lg:h-[320px]"
                    : "h-[198px] sm:h-[250px] lg:h-[288px]"
                } w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,105,255,0.35)]`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
