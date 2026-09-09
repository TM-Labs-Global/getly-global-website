import Image from "next/image";
import { getTranslations } from "next-intl/server";

/**
 * Capabilities grid — modeled on grey.co/cards' own "Create multiple
 * cards..." block. The bordered box is ONLY the image — it ends exactly
 * where the image ends — and the headline + description sit as plain
 * text below it, outside the card, no border or background behind them.
 *
 * Content: the four "Feature grid" facts the user asked to expand on
 * directly (instant creation + spending limits, freeze/unfreeze, global
 * acceptance, wallet funding) — the same facts already used in the
 * alternating panels and the Security section further down this page.
 * An earlier pass deliberately avoided that overlap in favor of a
 * separate "Use cases" angle; this content swap supersedes that on the
 * user's explicit instruction.
 *
 * Images are placeholders per the user's request — three of their own
 * /mockup/device/ files, with the first reused for the fourth slot since
 * only three were supplied for a four-panel grid. Swap all four once the
 * real card mockups exist; nothing else about the section depends on
 * which image is in which slot.
 */
export default async function CardCapabilities() {
  const t = await getTranslations("cards.capabilities");

  const items = [
    { key: "item1", image: "/mockup/device/getly-ai-chat.png" },
    { key: "item2", image: "/mockup/device/getly-ai-chat-recommendation.png" },
    { key: "item3", image: "/mockup/device/getly-ai-chat-interface-1.png" },
    { key: "item4", image: "/mockup/device/getly-ai-chat.png" },
  ] as const;

  return (
    <div className="space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
          {t("badge")}
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base text-[var(--ink-soft)] leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        {items.map((item) => (
          <div key={item.key} className="flex flex-col">
            <div className="relative h-72 sm:h-80 lg:h-[380px] rounded-[28px] border border-[var(--line)] bg-[var(--surface-2)] overflow-hidden flex items-center justify-center">
              <Image
                src={item.image}
                alt={t(`${item.key}.title`)}
                fill
                className="object-contain p-8"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>

            <div className="pt-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--navy)] tracking-tight">
                {t(`${item.key}.title`)}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
                {t(`${item.key}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
