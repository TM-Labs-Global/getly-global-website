import Image from "next/image";
import { getTranslations } from "next-intl/server";

/**
 * Full-bleed-photo + centered-text split, alternating sides — a direct
 * structural match for the pattern used twice on revolut.com/joint-accounts
 * ("Spend in sync" and "Money talk, encrypted"), measured live via
 * getBoundingClientRect at 1440px: a 1000px content row holds a 450x600
 * rounded-corner photo on one side and a vertically-centered text column
 * (H2 + P + one pill CTA) on the other, with sides alternating per section.
 * Reproduced here with a 2-col grid (photo column fixed-ish width via
 * aspect ratio, text column centered), items-center for the vertical
 * centering Revolut's own flex row uses, and order-* to alternate sides
 * without duplicating markup.
 */
export default async function FlightsPhotoFeature() {
  const t = await getTranslations("flights.photoFeature");

  const entries = [
    {
      key: "entry1",
      image: "/imagery/mobile-woman-phone-call-walking-steps-suitcase-overhead.png",
      imageAlt: "Traveler checking flight details on Getly while walking through the airport",
      imageSide: "left" as const,
    },
    {
      key: "entry2",
      image: "/imagery/man-hands-phone-rolling-suitcase-street.png",
      imageAlt: "Traveler paying for a flight straight from the Getly wallet",
      imageSide: "right" as const,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20">
      {entries.map((entry) => (
        <div
          key={entry.key}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div
            className={`relative w-full aspect-[3/4] max-h-[600px] rounded-[32px] overflow-hidden ${
              entry.imageSide === "right" ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={entry.image}
              alt={entry.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>

          <div
            className={`space-y-4 ${entry.imageSide === "right" ? "lg:order-1" : ""}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--navy)] tracking-tight">
              {t(`${entry.key}.title`)}
            </h2>
            <p className="text-base text-[var(--ink-soft)] leading-relaxed max-w-md">
              {t(`${entry.key}.desc`)}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--navy)] text-white text-sm font-bold">
                {t(`${entry.key}.tag`)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
