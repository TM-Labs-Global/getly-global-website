"use client";

export default function TokenGallery() {
  const colors = [
    { name: "Getly Blue", hex: "#0069FF", var: "var(--blue)" },
    { name: "Blue 600", hex: "#0057D6", var: "var(--blue-600)" },
    { name: "Blue 700", hex: "#0044AD", var: "var(--blue-700)" },
    { name: "Getly Navy", hex: "#0F184C", var: "var(--navy)" },
    { name: "Canvas", hex: "#EFF6FF", var: "var(--canvas)" },
    { name: "Surface", hex: "#FFFFFF", var: "var(--surface)" },
    { name: "Surface 2", hex: "#F5F9FF", var: "var(--surface-2)" },
    { name: "Ink", hex: "#0F184C", var: "var(--ink)" },
    { name: "Ink Soft", hex: "#494C4F", var: "var(--ink-soft)" },
    { name: "Mist", hex: "#7E868C", var: "var(--mist)" },
    { name: "Line", hex: "#D7E6FB", var: "var(--line)" },
    { name: "Line Strong", hex: "#B7D1F5", var: "var(--line-strong)" },
  ];

  const radiuses = [
    { name: "Radius Small (--r-sm)", value: "8px", class: "rounded-[var(--r-sm)]" },
    { name: "Radius Medium (--r-md)", value: "12px", class: "rounded-[var(--r-md)]" },
    { name: "Radius Large (--r-lg)", value: "20px", class: "rounded-[var(--r-lg)]" },
    { name: "Radius XL (--r-xl)", value: "28px", class: "rounded-[var(--r-xl)]" },
    { name: "Radius Full (--r-full)", value: "999px", class: "rounded-[var(--r-full)]" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-32 space-y-16">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-extrabold text-[var(--navy)] tracking-tight">
          Horizon Design System — Tokens & Spec
        </h1>
        <p className="text-[var(--ink-soft)] mt-2 text-lg">
          Live rendered token gallery confirming Getly design standards.
        </p>
      </div>

      {/* Colors Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--navy)] border-b border-[var(--line)] pb-3">
          1. Brand & Surface Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div
              key={c.name}
              className="p-4 rounded-2xl bg-white border border-[var(--line)] shadow-flat flex flex-col justify-between h-32"
            >
              <div
                className="w-full h-12 rounded-lg border border-black/5"
                style={{ backgroundColor: c.hex }}
              />
              <div>
                <div className="text-sm font-bold text-[var(--navy)]">{c.name}</div>
                <div className="text-xs text-[var(--mist)] font-mono">{c.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Scale */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--navy)] border-b border-[var(--line)] pb-3">
          2. Type Scale (Cairo Font)
        </h2>
        <div className="space-y-4 p-6 bg-white rounded-3xl border border-[var(--line)]">
          <div>
            <span className="text-xs font-mono text-[var(--mist)]">Display H1 (3.5rem / 56px)</span>
            <p className="text-5xl font-extrabold text-[var(--navy)] leading-tight">
              The Super App For Modern Traveller
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-[var(--mist)]">Heading H2 (2.25rem / 36px)</span>
            <p className="text-3xl font-bold text-[var(--navy)]">
              Turning unfamiliar places into unforgettable experiences.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-[var(--mist)]">Subhead (1.25rem / 20px)</span>
            <p className="text-xl font-medium text-[var(--ink-soft)]">
              One hidden multi-currency wallet, virtual cards, global eSIM, and flights.
            </p>
          </div>
          <div>
            <span className="text-xs font-mono text-[var(--mist)]">Body Regular (1rem / 16px)</span>
            <p className="text-base text-[var(--ink-soft)]">
              Every page reads as one connected travel companion, built for seamless borderless journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Radius Scale */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--navy)] border-b border-[var(--line)] pb-3">
          3. Radius Scale
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {radiuses.map((r) => (
            <div
              key={r.name}
              className={`p-6 bg-[var(--blue)] text-white font-semibold text-center text-sm ${r.class} shadow-soft`}
            >
              <div>{r.value}</div>
              <div className="text-xs opacity-80 font-mono mt-1">{r.name.split(" ")[0]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation & Shadows */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--navy)] border-b border-[var(--line)] pb-3">
          4. Elevation & Shadow Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-2xl shadow-flat border border-[var(--line)]">
            <h3 className="font-bold text-[var(--navy)]">Shadow Flat</h3>
            <p className="text-xs text-[var(--mist)] mt-1">Subtle border/card depth</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-soft border border-[var(--line)]">
            <h3 className="font-bold text-[var(--navy)]">Shadow Soft</h3>
            <p className="text-xs text-[var(--mist)] mt-1">Elevated card & hero moments</p>
          </div>
          <div className="p-8 bg-[var(--blue)] text-white rounded-2xl shadow-glow">
            <h3 className="font-bold">Shadow Glow</h3>
            <p className="text-xs text-white/80 mt-1">Getly interactive button treatment</p>
          </div>
        </div>
      </section>

      {/* Button Gallery */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--navy)] border-b border-[var(--line)] pb-3">
          5. Button Variants
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-3 bg-[var(--blue)] text-white font-semibold text-sm rounded-[8px] shadow-glow hover:bg-[var(--blue-600)] transition-all">
            Primary Button (Glow)
          </button>
          <button className="px-6 py-3 bg-[var(--navy)] text-white font-semibold text-sm rounded-[8px] hover:bg-black transition-all">
            Secondary Navy
          </button>
          <button className="px-6 py-3 bg-white text-[var(--navy)] border border-[var(--line-strong)] font-semibold text-sm rounded-[8px] hover:bg-[var(--surface-2)] transition-all">
            Outline Button
          </button>
        </div>
      </section>
    </div>
  );
}
