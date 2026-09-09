import Image from "next/image";

/**
 * Framed image — a soft translucent "mat" behind a near-white inner
 * frame holding the picture, with a consistent 4px reveal between the
 * two. Lifted from studying grey.co/cards (their product renders sit in
 * exactly this nested double-frame rather than a plain bordered box),
 * rebuilt with Getly's own tokens: --surface-2 as the inner mat,
 * --navy at low opacity as the outer one. `dark` swaps both to
 * translucent white for use on dark/navy surfaces.
 */
export default function FramedImage({
  src,
  alt,
  heightClass,
  dark = false,
  priority = false,
}: {
  src: string;
  alt: string;
  heightClass: string;
  dark?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`rounded-[24px] p-1 ${dark ? "bg-white/10" : ""}`}
      style={dark ? undefined : { background: "color-mix(in srgb, var(--navy) 6%, transparent)" }}
    >
      <div
        className={`relative ${heightClass} rounded-[20px] overflow-hidden flex items-center justify-center p-6 ${
          dark ? "bg-white/5" : "bg-[var(--surface-2)]"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-contain p-4"
          sizes="(min-width: 1024px) 480px, 90vw"
        />
      </div>
    </div>
  );
}
