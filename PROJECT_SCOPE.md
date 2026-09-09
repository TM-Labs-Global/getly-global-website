# Getly Website — Project Scope & Build Brief

**Purpose of this document:** brief a coding agent (Antigravity) that has no prior context on Getly, so it can scaffold the marketing website's project folder correctly on the first pass. Read this in full before generating any files.

---

## 1. What Getly Is

Getly is a fintech "super app" for modern travellers, immigrants, and professionals. Every user gets one hidden multi-currency wallet; virtual cards, global eSIMs, and airline booking are layered on top of it. It is **not** a generic marketplace or order-catalogue product — every page should read as one connected travel companion, not a list of unrelated features.

Under the hood the wallet runs on a stablecoin settlement layer, but that is strictly an implementation detail — see the compliance rule below. The product is positioned globally, competing with Revolut, Wise, Jeton, Raenest, and Timon, not as an Africa-only or single-region app.

**Approved brand positioning copy (use verbatim, do not rewrite):**
- Headline: **"The Super App For Modern Traveller"**
- Slogan: **"Turning unfamiliar places into unforgettable experiences."**

---

## 2. Brand & Compliance Guardrails — non-negotiable

These apply to every page, every component, every placeholder string the agent generates. Do not invent copy that breaks these rules, even in lorem-ipsum-style placeholder content — placeholder copy gets forgotten and shipped.

1. **Never use "send" or "transfer" in UI copy.** This is a regulatory constraint, not a style preference. Use "fund," "pay," "top up," "cash out," or "move money" instead.
2. **Avoid banking language generally.** Getly should read as a travel app, not a bank. Avoid "bank-grade," "account," and similar framing wherever a travel-native alternative exists.
3. **Never surface "USDC" or "stablecoin" in front-facing copy.** The wallet is described as a hidden, global, multi-currency wallet. The settlement layer is invisible to the user.
4. **Global positioning, not Africa-only.** Regional examples (e.g. "online within minutes in Lagos") are fine as illustrations, never as the scope of the product.
5. **Do not market Insurance or Government Services.** Both currently have zero providers behind them in the backend architecture — leave them off the site entirely until product ships them.
6. **Typeface: Cairo, throughout** — headings, body, UI, everything. No second display face. Load via `next/font/google` and self-host.
7. **Brand colors:** Getly Blue `#0069FF` (primary/interactive) and Getly Navy `#0F184C` (ink, dark surfaces). Canvas is Getly's own pale blue `#EFF6FF`, not white or an invented cream. Full token list in §3.
8. **Voice conventions** (borrowed from Apple's Human Interface Guidelines writing standards, filtered through rules 1–4 above — see §17): sentence case for headings, buttons, and nav labels (not Title Case); avoid "we" in error/empty-state copy — describe what happened to the user's action, not what "we" did; every error message states the fix, not just the problem ("Enter a valid email to continue," not "Something went wrong"); never use "Click here" or "Learn more" as standalone link text — the link text itself should describe the destination. **One explicit conflict to flag, don't silently adopt:** Apple's own writing guidance uses "Send" as a model example of a short, clear button label — that example does **not** apply here. Rule 1 above (never "send"/"transfer") stays absolute regardless of what any borrowed style guide recommends.

**Enforce rules 1–3 in code, not just in this prose.** A coding agent generating filler copy across dozens of components over a long build will eventually slip on "send"/"transfer"/"USDC" unless something actually blocks it. Add a small compliance-lint script — e.g. `scripts/check-brand-compliance.ts` — that:
- Scans every `.tsx`, `.ts`, `.mdx`, and i18n message JSON file under `app/`, `features/`, and the message directory from §12 for `/\bsend\b/i`, `/\btransfer\b/i`, `/\bbank-grade\b/i`, `/\busdc\b/i`, `/\bstablecoin\b/i` and **hard-fails** the check on a match.
- Flags `/\baccount\b/i` as a **warn-only** match (too many legitimate false positives — "Google Play account," code comments — to hard-fail on).
- Supports a small, human-reviewed allowlist file (`scripts/brand-lint-allowlist.json`) for genuine exceptions, such as naming a real external institution in example content (e.g. "GTBank" in a transaction mockup) — never a blanket ignore.
- Runs as an `npm run lint:brand` script wired into the Husky pre-commit hook (§4) and as a required CI check, so a violating PR physically cannot merge rather than relying on review catching it.

> **Note for whoever briefs Antigravity further:** one earlier project note (`horizon-design-direction.md` v0.2) says the brand sheet specifies Poppins. Every actual build artifact since — the live Horizon design-system spec, the Figma home page, and the reference `index.html`/`styles.css` in this handoff — uses Cairo exclusively, and the most recent IA document reaffirms Cairo as the guardrail. Treat **Cairo as current source of truth** and flag the Poppins note to design as a stale correction, not a live instruction.

---

## 3. Design System — Source of Truth

Do not invent a new visual language. The design system already exists and is confirmed against Getly's live product (getly.app) and the Figma design file. Full rendered spec (colors, type scale, radius scale, elevation recipes, a live component gallery) is published here:

**https://claude.ai/code/artifact/560fc43c-2723-4f53-99a7-d928b2aa15d6** ("Horizon" design direction)

Key tokens to seed `shared/styles/`:

```css
/* Brand */
--blue: #0069ff;        --blue-600: #0057d6;   --blue-700: #0044ad;
--navy: #0f184c;        --amber: #f0ad4e;      --green: #16a672;   --red: #e4463d;

/* Surfaces (light — the only theme; no dark mode) */
--ink: #0f184c;          --ink-soft: #494c4f;   --mist: #7e868c;
--canvas: #eff6ff;       --surface: #ffffff;    --surface-2: #f5f9ff;
--line: #d7e6fb;         --line-strong: #b7d1f5;

/* Radius scale */
--r-sm: 8px; --r-md: 12px; --r-lg: 20px; --r-xl: 28px; --r-full: 999px;

/* Elevation (getly.app's actual button treatment — keep it, don't flatten it) */
--shadow-flat: 0 1px 2px rgba(15,24,76,.07);
--shadow-soft: 0 1px 3px rgba(15,24,76,.05), 0 20px 40px -18px rgba(15,24,76,.20);
--shadow-glow: inset 0 1px 1px rgba(255,255,255,.35), 0 4px 15px rgba(0,105,255,.4);
```

Notes for implementation:
- The nav is a floating, fully-rounded pill with a navy-to-blue gradient fill — reuse this one gradient for the wallet card and the bottom tab-bar equivalents rather than inventing new fills.
- Buttons use 8px radius by default (not full pill); media/photo cards use 20px.
- getly.app's layout has a distinctive organic character — diagonal section dividers, curved "fan" photo arrangements — worth carrying into the marketing site's hero and gallery moments rather than defaulting to plain rectangles.
- `app/design-system/` (see §5) should render this token set live as an internal reference page — effectively a Next.js port of the published Horizon spec — so engineers never hardcode a color or shadow value directly in a component.

---

## 4. Tech Stack

**Framework**
- **Next.js 15** (App Router, React Server Components, `next/font` for Cairo)
- **React 19**
- **TypeScript**, strict mode on

**Styling**
- **Tailwind CSS v4** (CSS-first `@theme` config), mapped directly onto the CSS custom-property tokens in `shared/styles/` — Tailwind classes should resolve to the same variables the design-system page renders, never a second, drifting palette.

**Motion & interaction** (the reference sites — Revolut, Jeton, Raenest, usetimon.com — all lean on scroll-triggered reveals and a heavier, weighted scroll feel; this is how to get there)
- **GSAP 3** + **ScrollTrigger** — section reveals, pinned/sticky hero moments (see the Joby Aviation pattern in the reference research: headline recedes as supporting copy fades in), the ticker-strip marquee.
- **Lenis** — inertia smooth scroll, wired into GSAP's `ScrollTrigger.scrollerProxy` so scroll-linked animations stay in sync with the smoothed scroll position.
- ~~**@react-three/fiber** + **@react-three/drei**~~ — **removed from the build.** `public/3d/` turned out to be 56 flat, pre-rendered PNG icons (2508×2508px each — an isometric/3D-*rendered* look, but flat raster images), not `.glb`/`.gltf`/any real 3D model file — there is no actual 3D model asset anywhere in `public/`. The initial scaffold installed `@react-three/fiber`/`@react-three/drei`/`three` anyway with zero actual usage anywhere in the codebase, which was also silently causing `npm install` to need `--legacy-peer-deps` (`@react-three/fiber`@8 peer-deps on React 18, conflicting with this project's React 19). All three packages have been uninstalled from `package.json`/`node_modules`. If the team later wants a genuine hand-built, real-time 3D scene somewhere, treat that as a fresh decision and reintroduce R3F deliberately then — don't leave it installed unused.
- **motion** (Framer Motion) — optional, for React-state-driven micro-interactions (menu open/close, tab switches) where GSAP's imperative API is overkill. GSAP stays the system for scroll choreography; motion is for discrete UI transitions.

**Icons**
- **lucide-react** — the whole product should use one icon set, no mixed emoji/icon-font placeholders in production components.

**Forms & validation**
- **react-hook-form** + **zod** — missing-destination form, newsletter/press signup, any contact form on Help/FAQ.

**Internationalization**
- **next-intl** (App Router–native, supports Server Components). Per `getly-concepts.md`, the product's i18n model is origin-country / destination-country driven, not a simple browser-locale switch — mirror that model on the website's language switcher rather than defaulting to `Accept-Language` alone. No UI string should be hardcoded outside translation files, even in v1 English-only content — set up the i18n key structure from day one so additional locales are a content task, not a refactor. Full route/locale/RTL structure is in §12 — build to it from the start, since retrofitting locale routing or RTL after components exist is expensive.

**Content / CMS** *(open decision — see §9)*
- Blog/Newsroom and Press need a content source. Recommend a headless CMS (**Sanity.io** is a strong default for a Next.js App Router site — typed content, live preview, generous free tier) over hand-rolled MDX, since Press and Blog are explicitly flagged as ongoing/editorial content in the IA doc, not one-time pages. Confirm with the team before wiring this up — do not default silently.

**Utilities**
- `clsx` + `tailwind-merge` for conditional class composition
- `class-variance-authority` (cva) for component variants (button/card variants should be defined once, not scattered per usage)
- `zustand` (or plain React Context, if state stays this light) for nav-open state, active locale, and any cross-component UI state

**SEO / metadata**
- Next.js Metadata API (`generateMetadata` per route) + JSON-LD structured data on product and article pages. Revolut's reference pattern (a page per corridor/currency) is a strong long-term SEO play once Getly has traction, but is explicitly **not** in scope for this build — see §9. Full SEO + AEO (answer-engine optimization — llms.txt, AI-crawler-facing robots rules, structured Q&A content) spec is in §16 — build to it from the start rather than bolting it on after pages exist.

**Quality & tooling**
- ESLint (`next/core-web-vitals`), Prettier, Husky + lint-staged on commit
- Vitest + React Testing Library (unit/component), Playwright (e2e for the core funnel: hero → app-download CTA)
- Deployment target: Vercel (implied by the Next.js/App Router choice — confirm before scaffolding CI)

---

## 5. Project Structure

Use this exact top-level layout. Everything under `features/` and `shared/` is framework-agnostic business logic and presentation; `app/` stays thin — routing and composition only.

```
├── app/                  # Next.js App Router (Entry points & Routing)
│   ├── design-system/    # Design System Showcase page — renders the Horizon tokens live
│   ├── docs/             # Documentation site page
│   └── globals.css       # Global styles & Tailwind imports
├── features/             # Business logic & components grouped by feature
│   ├── design-system/    # Logic for the design system showcase
│   ├── docs/             # Logic for the documentation engine
│   └── home/             # Landing page components
├── shared/               # Shared utilities, styles, and types
│   ├── styles/           # CSS design tokens (colors, typography, etc.)
│   └── utils/            # Shared helper functions (CSS parsers, etc.)
└── public/               # Static assets
```

As the site grows past Home, add sibling feature folders following the same pattern — `features/wallet/`, `features/cards/`, `features/esim/`, `features/flights/`, `features/ai-trip-planner/`, `features/blog/`, `features/about/`, `features/faq/`, `features/legal/` — each paired with its `app/<route>/` entry point. Keep the one-feature-folder-per-pillar convention consistent rather than letting later pages sprawl directly into `app/`.

### Public assets — inventory before you build

`public/` already contains the real assets for this build: the hero video, 3D icons, mockups, and imagery. **Before writing any component that references an image, video, or 3D asset, recursively walk the entire `public/` directory tree — every sub-folder, sub-sub-folder, and beyond — and build a manifest of what actually exists** (path, filename, format, and for video/image assets, dimensions where feasible). Do not stop at the top level of `public/` and do not infer folder contents from naming conventions alone; go all the way down.

Once that manifest exists:
- Every asset a component needs must be pulled from this manifest by its real path. **Never invent a placeholder filename or path** (e.g. `hero-video.mp4`, `esim-mockup.png`) that doesn't correspond to something actually in `public/` — if an asset a page needs doesn't exist yet, flag it as missing rather than referencing a path that will 404.
- If multiple resolutions/formats of the same asset exist (e.g. a desktop and mobile hero video, `.mp4`/`.webm`/`.av1` variants, `@2x` imagery), record all of them — the hero video implementation in §6 needs the resolution-swap and format-fallback pattern, not just one file.
- Re-run this inventory whenever new assets are dropped into `public/` later in the build — treat it as a living manifest, not a one-time scan.

### Full inventory (updated after a first optimization pass — 214MB total, excluding `public/flags/`)

This is the actual recursive walk called for above. First done at 368MB; the team has since run a compression pass that brought it to 214MB. Treat this as the current manifest, not a substitute for re-checking if the folder changes again.

| Folder | Size | Contents | Flag |
|---|---|---|---|
| `3d/` | 165MB | 56 PNGs, still **2508×2508px each**, one per UI concept across 16 categories (`action/`, `card/`, `money/`, `security/`, `travel/`, `wallet/`, etc.) — e.g. `3d/wallet/wallet-fund.png`, `3d/security/shield-biometric.png`. | Flat raster images, **not** 3D models — see the §4 correction above. The recent optimization pass recompressed these (some individual files dropped by ~75%) but did **not resize them** — they're still full 2508px source dimension, which is why this folder barely moved (174MB → 165MB) while everything else dropped sharply. Icons render at maybe 48-200px in the UI; still needs an actual resize pass (not just recompression) plus WebP/AVIF export before shipping. |
| `hero/` | 8.6MB | `hero-image.jpg` (3.66MB, still **16156×10048px**), `hero-video.mp4` (4.98MB, 1280×720/720p, 26.3s, h264). | Same pattern as `3d/`: the poster image was recompressed (39.5MB → 3.66MB) but not resized — the browser still has to decode a 162-megapixel image before it can even show it, which works against its whole job of appearing instantly before the video loads. Resize to roughly the largest hero viewport width actually rendered (~2560px wide is generous); should land under 500KB at that size. The video is still only 720p — confirm with design whether that's intentional. **No mobile-specific hero asset exists yet** — §6 step 4 still calls for one; still an open gap. |
| `mockup/` | 26MB | `device/` (phone-in-hand/device photography — iPhone, Galaxy), `hand/` (hand-holding-phone shots), `lifestyle/` (sofa, airport, cabin, desk, city-street scenes, various aspect ratios). | Optimized well (112MB → 26MB). Genuine, usable device-mockup and lifestyle photography for the product grid (§6 step 5) and testimonial-style sections. |
| `imagery/` | 5.0MB | 11 files, **renamed to descriptive kebab-case** (was raw AI-tool export names) and confirmed as approved assets, not drafts: `woman-laughing-holding-phone-app-home-screen.png`, `man-hands-phone-rolling-suitcase-street.png`, `woman-phone-call-walking-steps-suitcase-overhead.png`, `tap-to-pay-getly-card-paid-checkmark.png`, `woman-laughing-tropical-hillside-golden-hour.jpg`, `tap-to-pay-restaurant-counter.png` (typo fixed), `man-rooftop-city-skyline-sunset.png`, `tap-to-pay-street-food-market-night.png`, `two-women-laughing-cafe-phone.png`, `couple-laughing-phone-outdoors.png`, `woman-airplane-window-seat-phone.png`. | Resolved — see §11, this item is no longer open. Two of these (`woman-laughing-holding-phone-app-home-screen.png`, `tap-to-pay-getly-card-paid-checkmark.png`) show the actual Getly app UI in-hand and are strong candidates for the product-grid/how-it-works sections (§6 steps 5–6), not just generic lifestyle filler. |
| `raw-app-screens/` | 5.2MB | Real product screenshots: `Home Screen/home-active-state.png`, `Getly AI/getly-ai-page.png`, `Cards/card-detail.png`, `add-money-to-wallet.png`, `travel-kit-page.png`, `Splash Screen.png` / `Splash Screen 2.png`. | Useful for an "as seen in the real app" section. Several folder/file names still contain spaces (`Home Screen/`, `Travel Kit/`, `Splash Screen.png`) — every other asset in `public/` is kebab-case; rename these to match (`home-screen/`, `splash-screen.png`) before referencing them, same treatment `imagery/` just got. |
| `brand/` | 24KB | `icon-blue.svg`, `icon-white.svg`, `getly-logo.svg`, `getly-logo-blue.svg`. | Clean and complete — this directly resolves §14's favicon/app-icon item (`icon-blue.svg`/`icon-white.svg` are exactly what `app/icon.tsx` needs) and gives the nav/footer real logo SVGs instead of a placeholder wordmark. Nothing to fix here. |
| `flags/` | 5.2MB | Documented separately above. | — |

**One repo-hygiene item across every folder**: `.DS_Store` files are present in 8 locations throughout `public/` (macOS Finder artifacts). Add `.DS_Store` to `.gitignore` and delete the existing ones before the first commit — they're not needed and shouldn't ship.

### Country flags — `public/flags/`

Country-flag PNGs are already staged at `public/flags/<size>/<ISO-3166-1-alpha-2-code>.png` — e.g. `public/flags/32/US.png`, `public/flags/64/NG.png`. Source: [gosquared/flags](https://github.com/gosquared/flags) (MIT — `public/flags/LICENSE.txt` is the original license, kept alongside the assets per the license's attribution requirement; do not remove it). Only the **`flags-iso/flat`** variant was pulled — ISO-code-keyed (not the repo's country-*name*-keyed folder, which is harder to look up programmatically) and flat style (the repo's alternate "shiny"/glossy style was left out as inconsistent with the flat, minimalist direction in §3/§15 — pull it in later only if a specific surface deliberately wants that look).

- **Sizes available:** 16 / 24 / 32 / 48 / 64px, ~263 codes each (standard ISO-3166-1 codes plus a handful of non-standard, underscore-prefixed entries for disputed/special territories — e.g. `_kosovo.png`, `_somaliland.png`; confirm with product whether any of those are relevant before using them, since some are politically sensitive).
- **Known limitation:** these are raster PNGs capped at 64px source resolution — fine for nav chips, list rows, and the language switcher, but will visibly pixelate if a component needs to display a flag larger than roughly 64px (e.g. a hero-sized country callout). Flag that case rather than upscaling; an SVG flag set would need to be sourced separately if a larger display size is ever needed.
- **Build a small helper**, `shared/utils/flags.ts`, exporting a `getFlagUrl(isoCode: string, size?: 16 | 24 | 32 | 48 | 64 = 24): string` function (returns `/flags/${size}/${isoCode.toUpperCase()}.png`) rather than letting components construct these paths inline — same pattern as `appLinks.ts` (§13) and `formatCurrency.ts` (§14).
- **Primary consumers:** the Countries & Coverage page (§7 — flag next to each supported country in the searchable list), the language/locale switcher (§12 — flag icon next to each locale, once a second locale ships), and any per-country context elsewhere (e.g. a destination picker in the AI Trip Planner or Flights pages).

---

## 6. Execution Flow — build in this order

This is the sequence to scaffold and build in, not a wishlist — later steps depend on earlier ones (tokens before components, components before pages).

1. **Design system & tokens** — populate `shared/styles/` from §3, wire Tailwind's `@theme` to those variables, stand up `app/design-system/` as a live-rendered token/component gallery (ports the Horizon spec).
2. **Core dependencies** — install and smoke-test Lenis, GSAP + ScrollTrigger, React Three Fiber, before any page work starts, so animation primitives exist as shared hooks/utilities in `shared/utils/` (e.g. a `useLenis()` hook, a `ScrollTrigger` provider) rather than being re-wired per page.
3. **Nav bar component** — persistent, shared across every route; floating pill treatment per §3.
4. **Home page — Hero section, full-bleed video background.** Reference: **plasma.org**. Pull the actual hero video (and any resolution/format variants) from the `public/` asset manifest built in §5 — do not use the reference build's flat CSS phone/orb mockup as anything more than a fallback while the real video is wired in. Implementation pattern, confirmed by inspecting plasma.org directly:
   - The video sits in an absolutely-positioned layer (`inset: 0`, `-z-10`, `object-fit: cover`) behind the hero content, not inline in the document flow — headline, subhead, CTA, and the trust-chip row all sit on top of it with light/white text for contrast.
   - `autoplay`, `loop`, `muted`, and `playsInline` are all required attributes — browsers block autoplaying video with sound, and `playsInline` stops it from forcing fullscreen on mobile Safari.
   - Load a **static poster image first**, absolutely-positioned in the same spot as the video, and cross-fade it out via an opacity transition once the video's `canplay`/`loadeddata` event fires (`data-ready="true"` → `opacity: 1`). The asset for this already exists at **`public/hero/`** (the "hero image") — use it directly as the poster/buffer frame, do not substitute a different image or generate a placeholder. This avoids a flash of empty/black hero while the video is still loading and doubles as the `prefers-reduced-motion` fallback frame below.
   - Respect `prefers-reduced-motion: reduce` by hiding the `<video>` element entirely for that media query and leaving the `public/hero/` poster image as the permanent background — do not autoplay video for users who've asked to reduce motion.
   - Serve a **different, purpose-built asset on mobile** rather than shrinking the desktop video — Plasma swaps to a smaller, rounded, inset video card on small screens instead of a full-bleed background. Check the asset manifest for whether a mobile-specific hero asset exists; if not, flag it as a missing asset rather than force-fitting the desktop file.
   - The nav sits transparent-over-video at the top of the hero. **Update, Sept 2026 (superseding the original "switches to solid/opaque on scroll" line below, and the interim Liquid-Glass-with-two-states description that replaced it):** direct DOM inspection of plasma.org's live production nav (`data-testid="marketing-header-shell"`, driven by explicit `data-surface`/`data-theme` attributes) showed it does **not** change on scroll on the homepage at all — it reads `data-surface="transparent" data-theme="dark"` (`bg-transparent text-white backdrop-blur-none`) at every scroll depth from `scrollY: 0` to the bottom of the page, because every section of their homepage sits on dark/video content that a permanently transparent white-text nav always reads fine over. Getly's nav now matches that: the scroll listener and the `isScrolled` state have been removed from `Navbar.tsx` entirely, and the nav renders one single, permanent Liquid-Glass-Clear treatment (`bg-gradient-to-b from-white/20 via-black/10 to-black/25`, `backdrop-blur-2xl backdrop-saturate-150`, `border-white/25`, the inset-highlight/scrim shadow) regardless of scroll position. This was a deliberate, confirmed choice (not a guess) — the user was shown the finding and explicitly chose "stay transparent always" over keeping a scroll-to-solid transition, and chose to keep Getly's floating rounded-pill shape rather than switching to Plasma's full-width bar.
   - Below the headline/subhead/CTA, a small row of trust chips (icon + short label) reinforces the value prop without competing with the video — Getly's equivalent is the existing ticker strip content (Global Wallet · Virtual Cards · Global eSIM · Flight Booking), condensed to 2–3 chips for the hero itself, with the full ticker as its own section per step 5.

   **Update, Sept 2026 — hero content alignment and CTA, as actually built and refined this session:**
   - The original bullets above never explicitly stated where headline/subhead/CTA should sit relative to the video frame — that gap is likely why the first build centered everything (`text-center mx-auto`) over the full video, which worked against "enough room for the video's characters to show." **Corrected spec: bottom-left anchored**, narrow column (`max-w-xl`), left-aligned text, `justify-end` on the section — leaving the right/upper frame clear for the video's human subject. The legibility gradient is bottom-anchored only (`from-black/75 via-black/15 to-transparent`, transparent through the top/middle) rather than a full-frame wash, matching Apple's product-page hero technique of localized darkening rather than a global dim.
   - The hero's primary CTA is now `shared/components/GetAppButton.tsx` — a three-segment store pill (Google Play icon — label — Apple icon), reused globally rather than being a hero-only pattern (also usable in nav/footer/pricing CTAs via its `size`/`label` props). Its exact structural spec was pulled live off **getly.app's own current production hero** (not redrawn from a screenshot): 64×56px icon segments, 56px bar height, `padding: 0 36px` on the label segment, 17px/700 label type, 20px radius on the outer corners only (`--r-lg`, square where segments meet), 6px gap between segments, a 1.5px `rgba(255,255,255,.45)` border on every segment, and the existing `--shadow-glow` token — using the real icon assets at `public/app-stores/apple-logo.png` / `playstore.png` via `next/image`, not hand-drawn glyphs. The old separate "App Store / Google Play" text-link row and the four-chip trust bar below the hero CTA were both removed as redundant once this pill shipped.
   - Default label is **"Get App"** (not "Download App"/"Sign In") — the middle segment links via the existing `getStoreLink("smart")` platform-detection helper (§13); the two icon segments link straight to their own store.
   - **Update, Sept 2026 — headline forces a hard two-line break, not natural wrap.** The approved headline (§1) now renders as two separate `<span className="block">` lines inside the one `<h1>` — "The Super App For" / "Modern Traveller" — via new `home.hero.headlineLine1`/`headlineLine2` message keys (added alongside the existing full-sentence `headline` key, which stays for any future non-visual use e.g. structured data) rather than letting the container wrap the single string naturally. This holds the exact two-line shape at every viewport width, mobile included, matching Apple's own hard-break hero headlines rather than a CSS-only wrap. The Arabic message file got its own sensible two-line split (different word count/order than English), not a mechanical mirror of the English break point.

5. **Core product offering grid — redesigned, Sept 2026, as an Apple-highlights-style carousel.** The original flat 2×2 bento grid described below has been replaced. By direct request, this section ("Everything you need in one app.") now replicates the layout **and interaction pattern** of Apple's own "Get the highlights." gallery (apple.com/apple-watch-series-11, inspected live via computed styles, not guessed from screenshots) — full findings and the resulting component:
   - **Reference spec pulled from Apple's live DOM:** a horizontal `scroll-snap-type: x mandatory` track (`.card-set { display: grid; grid-auto-flow: column; gap: 20px }` inside an `overflow-x: scroll` container), each card `scroll-snap-align: center` and sized to ~87.5% of the viewport (1260px card in a 1440px container) so the neighboring card peeks in ~90px on each side via symmetric track padding; a 56px circular play/pause button; a dot-nav where the inactive dots are plain 8px circles and the **active dot is a 48px pill whose fill animates left-to-right over the autoplay duration** (Apple's own `aap-animate-progress`, ~6.15s) via `animation-play-state: running/paused` — pausing freezes the fill in place rather than resetting it, and the fill completing is what advances to the next card.
   - **Getly's implementation** (`features/home/components/PillarGrid.tsx`, component name kept for import stability even though its contents were fully rewritten) reproduces this from scratch: a `flex overflow-x-auto snap-x snap-mandatory` track with a `.highlights-track` utility (scrollbar hidden, `app/globals.css`) sized `w-[88vw] sm:w-[80vw] lg:w-[87.5%] max-w-[1260px]` per card and `6vw`/`6.25%` edge padding for the peek; a `highlights-dot-progress` CSS `@keyframes` (also in `globals.css`) driving the same pill-fill dot, keyed on `activeIndex` so it remounts (restarts) on every slide change and otherwise just toggles `animationPlayState` for pause/resume; `onAnimationEnd` on the fill advances to the next card, so autoplay pacing and the visible progress bar can never drift apart; an `IntersectionObserver` (threshold 0.6) keeps the dot-nav in sync however the user actually got to a card — drag, wheel, keyboard, or the component's own `scrollIntoView` calls; autoplay defaults off for `prefers-reduced-motion: reduce` (same convention as the hero video) and pauses the moment the user touches the track themselves (`pointerdown`/`wheel`), leaving the play button as the way back in.
   - **Each card is a two-panel layout inside one `rounded-[28px]` white card** (not stacked top/bottom like the old bento tiles): a left text column (`##  · EYEBROW` overline, a hard-two-line headline via the same `block`-span pattern as the hero headline above, a description, and an `Explore <Pillar> →` link) and a right full-bleed photo panel with a small frosted-glass corner badge (icon + short label) — mirroring how Apple's cards pair a text zone with a large product-photography zone in one card rather than a generic icon-on-top-of-copy tile.
   - **Asset decision (asked and confirmed, not guessed):** Apple's own cards use real product photography, not flat icons. Getly's `public/` was audited for equivalents — real, on-brand matches exist for **Wallet** (`imagery/woman-laughing-holding-phone-app-home-screen.png`, the same actual balance-screen photo used elsewhere) and **Cards** (`imagery/tap-to-pay-getly-card-paid-checkmark.png`); no dedicated eSIM- or Flights-specific UI screenshot exists yet, so those two use the closest on-theme lifestyle photography instead (`imagery/woman-phone-call-walking-steps-suitcase-overhead.png` for eSIM's "stay connected" beat, `imagery/woman-airplane-window-seat-phone.png`, already in use elsewhere, for Flights) rather than falling back to the flat `3d/` icon set — keeping the whole row one consistent photographic system, closest to the Apple reference, instead of mixing photography and flat icons across the four cards. Revisit eSIM/Flights once real in-app screenshots for those two pillars exist.
   - **Copy** (`home.pillars.*` in both message locales) was rewritten to the eyebrow/two-line-headline/description/CTA shape the new layout needs — `01 · Global Wallet` / "One wallet. / Every currency you touch." and so on for Cards, eSIM, Flights — replacing the old single-sentence `title`/`desc` pairs. Checked against §2 rule 1 (no "send"/"transfer") and the rest of the compliance guardrails; all clear.
6. **Personalization section** — this is the "Getly AI" section in the reference build (AI-generated day plan, personalised suggestions).
7. **Countries we're available in** — coverage section/map, per the IA doc's dedicated "Countries & Coverage" page; the Home page gets a summary version that links out.
8. **FAQ section** — cross-cutting teaser on Home, linking to the full Help/FAQ page.
9. **Who Getly is for** — the "modern travellers, immigrants, and professionals" positioning; not present as its own section in the reference build, so this is net-new content to draft against the approved brand voice.
10. **Footer** — full site map, legal links, store badges.

Then extend the same design system to the remaining pages, in the order given: **eSIM, Flights, Travel Cards (Cards), AI Trip Planner, Blog, Privacy Policy, About Us, FAQs, Press**, plus the cross-cutting **CMS** and **language translation** infrastructure. See §7 for what each page needs to contain.

---

## 7. Full Site Map & Page Briefs

Cross-referenced against the approved information architecture (`design/website-information-architecture.md` in the Getly project). Full section-by-section copy direction for every page below already exists in that document — pull content from there, don't re-draft from scratch.

| Page | Route (unprefixed / default locale — see §12) | Status | Key sections |
|---|---|---|---|
| **Home** | `/` | Build first (§6) | Nav, Hero, ticker strip, four-pillar grid, How It Works, trust/stats band, Product Moment (personalization), testimonials, app-download CTA, FAQ teaser, footer |
| **Wallet** | `/wallet` | New build | Pillar switcher, hero ("One wallet. Every currency you touch."), how funding works, multi-currency display, cash out, security callout, FAQ |
| **Cards** ("Travel cards") | `/cards` | New build | Hero ("A card for every purchase."), feature grid, use cases, fees, security, FAQ |
| **eSIM** | `/esim` | Content already drafted in Figma — port, don't redraft | Shared hero, benefits grid, testimonial, 5-step how-it-works, FAQ, CTA |
| **Flights & Bookings** | `/flights` | New build, least existing content | Hero ("Book flights without leaving your wallet."), how it works, why book in Getly, coverage note (keep airline claims general until confirmed), FAQ |
| **AI Trip Planner** | `/ai-trip-planner` | New addition — not in the original IA doc | Extend the Home page's "Getly AI" / Product Moment concept into a standalone page: personalised itinerary generation, example day-plans, how it uses trip context. Confirm scope with product before drafting claims about model capability. |
| **How It Works** | `/how-it-works` | New build | Standalone deep version of the Home page's 4-step strip, plus a "why verification matters" explainer |
| **Pricing & Fees** | `/pricing` | New build | Fee table — **placeholder structure only**, do not publish invented figures; FAQ |
| **Countries & Coverage** | `/coverage` | New build | Searchable coverage view (wallet/cards/eSIM), missing-destination capture form |
| **Security & Trust** | `/security` | New build | Identity verification (consumer terms, no vendor names), fund safety, data privacy, lost-device/fraud reporting |
| **About Us** | `/about` | New build | Mission (brand slogan), traction/press if available |
| **Help / FAQ** | `/faq` | New build | Search + category hub (mirrors the four pillars + Account/Security), contact support |
| **Blog / Newsroom** | `/blog` (index), `/blog/[slug]` (article) | Flagged Phase 2 in the IA doc, but requested in this build order — confirm with product whether it ships at launch or is scaffolded empty | Filterable article grid, CMS-driven |
| **Press** | `/press` | New build, CMS-driven | Press mentions/coverage list |
| **Privacy Policy** + other legal (Terms, Cookie, AML, Complaints) | `/legal/privacy-policy`, `/legal/terms`, `/legal/cookie-policy`, `/legal/aml-policy`, `/legal/complaints` | Footer-only, content owned by legal/compliance | Do not draft legal copy — scaffold the route/template only |
| **404 / not-found** | Next.js `app/not-found.tsx` convention | New build | See §14 |

**CMS**: powers Blog and Press content (see §4 for the recommended tool and the confirm-first note).
**Language translation**: cross-cutting infrastructure via next-intl, not a page — see §4.

---

## 8. Reference Sites — what to take from each

| Site | Structural takeaway |
|---|---|
| **revolut.com** | Sprawling multi-product IA with per-corridor/per-currency landing pages — a strong long-term SEO play once Getly has traction, but **not launch scope**. What to borrow now: the density and confidence of its trust/security messaging. |
| **jeton.com** | A lean, single-scroll homepage (~6 sections) plus a fully transparent, standalone Fees page. Model Getly's Pricing & Fees page directly on this. |
| **raenest.com** | Closest in tone to a global super app — each product pillar gets its own full page (not just a homepage section), duplicated in intent across the four Getly pillars. Also the clearest example of naming a stablecoin layer outright, which Getly deliberately does **not** do — a real differentiator, not a gap. |
| **usetimon.com** | Getly's closest direct competitor — identical four-pillar product on a single-page site (hero, partner strip, pillar grid, trust stat, 3-step setup, FAQ, store badges, closing CTA). Validates the pillar set; Getly should graduate to dedicated pillar pages sooner since its surface area (flights + eSIM + wallet + cards) is broader than Timon's. |

Additional visual/technique references already logged in `design/reference-site-research.md` (supaste.com, runey.app, dock.cool, hyperagent.com, jobyaviation.com) cover the glass/shadow/radius technique library behind the Horizon design system in §3 — consult that doc for exact shadow/radius values if extending beyond what's already tokenized.

---

## 9. Reference Implementation Included in This Handoff

A static HTML/CSS/JS prototype (`index.html`, `styles.css`, `script.js`) is attached alongside this brief. It already implements the approved hero copy, the no-send/no-USDC-safe language, and a full Home-page section order matching §6 above (hero, ticker, four-pillar product grid, AI/personalization section, how-it-works, stats, security, coverage map, download CTA, footer).

**Treat it as a structural and copy reference, not production code.** Port its section order, copy tone, and layout intent into the Next.js architecture in §5 — do not lift its inline styles or vanilla-JS parallax script wholesale. In particular:
- Its CSS uses hardcoded hex values throughout; every color must be re-sourced from the §3 token set during the port.
- Its hero is a static photo + CSS phone/orb mockup — this is now superseded by the plasma.org-style full-bleed video hero specified in §6 step 4. Keep the `.hero-card`/`.phone` mockup concept as a secondary floating element over the video — real device-mockup photography now exists for this in `public/mockup/device/` (§5) — rather than the primary hero visual. This can stay a CSS/GSAP-driven parallax card; it doesn't need R3F unless the team specifically wants a real 3D scene here (§4).
- Its scroll-triggered reveals don't exist yet (plain static layout) — that's what GSAP + ScrollTrigger + Lenis add in this build.

---

## 10. Non-Functional Requirements

- **Accessibility:** WCAG 2.1 AA minimum, sharpened with Apple HIG's numeric standards (§17) so "AA" isn't left to interpretation:
  - **Contrast:** body/UI text at 17px-equivalent or smaller needs **4.5:1** against its background at any weight; text at 18px-equivalent and larger needs **3:1**; bold text needs **3:1**. Verify Getly Blue `#0069FF` on white/canvas against both thresholds — it's a mid-value blue and will fail 4.5:1 at small sizes on light backgrounds, so small blue text/links need the darker `--blue-700` or a navy pairing instead of the raw brand blue.
  - **Touch/click targets:** minimum **44×44px** on mobile (never below 28×28px), minimum **28×28px** on desktop (never below 20×20px) — applies to every tappable icon, chip, and nav item, not just primary buttons. Pad small icon-only controls out to the minimum hit area even if the visible icon itself is smaller.
  - **Keyboard navigation:** full support for the nav and any carousel/tab components, with visible focus states matching the token set in §3 (not the browser default outline).
  - **Reduced motion — specific techniques, not just an on/off switch:** for every GSAP/R3F/Lenis animation, honor `prefers-reduced-motion: reduce` by tightening or removing spring/bounce easing, avoiding animation on the z-axis or depth (no parallax/3D-rotation-in-space), replacing position/scale transitions with simple opacity fades, and never animating into or out of a blur. The hero video fallback in §6 step 4 is the reference implementation of this pattern — apply the same logic to every other scroll-triggered moment in §6, not just the hero.
- **Performance:** Core Web Vitals as the bar, not an afterthought — lazy-load the R3F hero scene, code-split per route, `next/image` for every asset, self-hosted Cairo via `next/font` (already covers font-display swap).
- **Responsive:** Mobile-first; the reference prototype's breakpoints (900px, 560px) are a reasonable starting point but should be re-validated against the actual component set as it's built, not copied blindly.
- **SEO & AEO:** Server-rendered metadata per route (§4), sitemap, structured data on Blog/Press articles once the CMS is wired up — full checklist in §16.

---

## 11. Open Decisions — do not guess, confirm with the team

- **CMS choice** for Blog/Press (§4) — recommendation given, not yet confirmed.
- **Blog/Newsroom launch scope** — the IA doc flags this Phase 2; this brief's build order includes it. Reconcile before committing engineering time.
- **Pricing & Fees figures** — no real numbers exist yet. Ship the table structure with placeholder styling, not invented figures.
- **Card network wording** ("wherever Visa/Mastercard is accepted") — confirm actual issuing networks (Bridge/Lithic) before publishing on the Cards page.
- **AI Trip Planner scope and claims** — this page is new relative to the approved IA; confirm what the feature actually does before drafting capability claims.
- **A Business vertical** (present on 3 of 4 reference sites) — explicitly flagged as a plausible Phase 2 addition, not current scope. Do not scaffold a `/business` route speculatively.
- **Poppins vs. Cairo** — flagged in §2; confirm Cairo is final before any typography work ships.
- ~~Production domain~~ — **resolved: `getly.app`**, confirmed by the team. §16's llms.txt/sitemap/canonical/OG references and §14's `NEXT_PUBLIC_SITE_URL` all use it as of the current build.
- **Hero poster/`3d/` icon dimensions (§5) — partially resolved.** A compression pass brought `public/` from 368MB to 214MB, but `hero-image.jpg` and all 56 `3d/` icons are still at their original (oversized) pixel dimensions — recompressed, not resized. Still needs an actual resize pass before shipping. The mobile-specific hero asset called for in §6 step 4 is still missing entirely — someone needs to supply one.
- ~~`imagery/` provenance~~ — **resolved.** Confirmed as approved production assets; renamed to descriptive kebab-case (§5).
- **Apple Liquid Glass material system (§17) — evaluated, adopted for the nav only, not for buttons.** This project already tried and explicitly reverted a flatter, "Apple-blue" button restyle (idle.space-inspired) back to getly.app's original glow/glass treatment. Liquid Glass is Apple's own current translucent-material language and could read as reopening that same debate — it remains deliberately **not** applied to buttons/cards in §3. It has since been applied, by explicit direct request (Sept 2026), to the nav bar specifically — see §17.3's update for the exact values, and §6 step 4's Sept 2026 update for the further decision to make it a single permanent state rather than a scroll-driven transition.

---

## 12. Routes, i18n File Structure & RTL

**Locale-prefixed routing.** Use next-intl's "as-needed" locale prefix: the default locale (English) is unprefixed (`/wallet`), every other locale is prefixed (`/ar/wallet`). This is the pattern most global fintechs use — it keeps the primary English URLs clean for SEO while making non-default locales explicit and linkable. The route table in §7 lists the unprefixed/default form; every route there gets an `[locale]` segment in the App Router folder structure (`app/[locale]/wallet/page.tsx`), even before a second locale actually ships, so adding one later is a content task, not a routing refactor.

**Message file structure.** Do not use one giant `messages/en.json`. Mirror the `features/` folder structure so translators and engineers can find strings by page:

```
shared/i18n/messages/
  en/
    common.json         # nav, footer, buttons, trust chips — shared across every page
    home.json
    wallet.json
    cards.json
    esim.json
    flights.json
    ai-trip-planner.json
    how-it-works.json
    pricing.json
    coverage.json
    security.json
    about.json
    faq.json
    blog.json
    press.json
    legal.json
  ar/                    # same filenames, once a second locale actually ships
    ...
```

Keys inside each file should mirror the component structure, not be a flat list — e.g. `home.hero.headline`, `home.hero.subhead`, `home.faqTeaser.cta`. Load only the namespaces a given route needs (next-intl supports per-route message loading) rather than shipping every locale's full string set to every page.

**RTL readiness.** Cairo was chosen partly for its native Arabic glyph support, for a wallet that rebinds locale by destination country (per `getly-concepts.md`). If an Arabic-reading destination is genuinely in scope for this site (confirm with product — don't build five locales speculatively), the RTL foundation needs to go in now, not after components exist:
- Use Tailwind's **logical properties** everywhere from day one — `ms-`/`me-` and `ps-`/`pe-` instead of `ml-`/`mr-`/`pl-`/`pr-` — so spacing flips automatically instead of needing an `rtl:` override on every element.
- Set `dir` on the root `<html>` in the locale layout (`dir={locale === 'ar' ? 'rtl' : 'ltr'}`), not per-component.
- Directional icons (arrows, chevrons — several already appear in the CTA/nav patterns in §6) need an `rtl:-scale-x-100`-style mirror rule, not a manually-swapped icon per usage.
- GSAP/Lenis-driven horizontal motion — the ticker-strip marquee in particular — needs direction-aware logic; a marquee that scrolls left-to-right in English should scroll right-to-left in Arabic, not stay fixed in the LTR direction.
- Treat this as infrastructure to build once, correctly, even if v1 ships English-only — retrofitting RTL after dozens of components exist means re-touching every one of them.

**Additional RTL detail rules** (borrowed from Apple HIG, §17 — these are the specific edge cases generic "add `dir=rtl`" guidance misses):
- **Numerals never reverse internally.** A phone number, price, or wallet balance keeps its digit order exactly as written in LTR even inside an RTL layout — never mirror the digits themselves. The one exception is a sequence of numerals that itself represents progression (e.g. step "1 → 2 → 3" indicators) — there, the *order of the steps* reverses in RTL, but each numeral glyph stays unflipped.
- **Controls that point somewhere real never flip; controls that represent an abstract sequence do.** A progress bar, a carousel's next/back arrows, and an onboarding step indicator all mirror in RTL (progress fills right-to-left, "next" points left). An icon pointing at a fixed real-world referent — a compass, a "scan this way" arrow tied to a physical device orientation — does not mirror.
- **Never flip logos, brand marks, or universal symbols** (checkmarks, warning triangles) regardless of direction. Avoid flipping photography/illustration (changes meaning, risks misrepresenting a real place or person) — but a *sequence* of multiple images where order carries meaning (e.g. a 3-step "before/during/after" strip) does reverse its order, even though each image stays unflipped.
- **Paragraph alignment follows content language, not layout context, once text runs 3+ lines** — a long-form English paragraph embedded in an otherwise-Arabic page still left-aligns. Short 1–2 line UI strings (button labels, chip text, nav items) follow the surrounding layout direction instead.
- **Bump adjacent-Latin type size slightly** — Arabic text sitting next to all-caps Latin text (a brand wordmark, an acronym like "USD") reads smaller at the same point size; increase the Arabic run by roughly 2pt in that specific context to keep the two feeling visually balanced.

---

## 13. App Download Links

Real store listings already exist — use them directly, do not placeholder these:
- **App Store:** `https://apps.apple.com/ng/app/getly/id6759157746`
- **Google Play:** `https://play.google.com/store/apps/details?id=com.getly.app&hl=en`

Centralize both in one place — `shared/utils/appLinks.ts` exporting the two URLs plus a small `getStoreLink(platform)` helper — rather than hardcoding them into every CTA/footer/download-section callsite. This is what makes §6's Home page download CTA, the footer store badges, and the hero's QR code (if Getly adds one, per the plasma.org pattern in §6 step 4) all point at one source of truth.

Two small things worth fixing before these ship on a **global** site, per the "global positioning, not Africa-only" guardrail in §2:
- The App Store URL carries an `/ng/` (Nigeria) storefront segment. A hardcoded Nigerian storefront path on every visitor's link is inconsistent with the global-positioning rule — prefer Apple's storefront-agnostic **Smart App Banner** or a universal link, or at minimum confirm with the team whether `/ng/` should be dropped/genericized for non-Nigerian visitors.
- The Google Play URL carries a hardcoded `hl=en`. On a site that's being built i18n-ready (§12), this should either be dropped (let Play Store detect the visitor's locale) or set dynamically from the active site locale rather than fixed to English.

No deep-link/smart-link service (Branch, AppsFlyer OneLink — the pattern plasma.org actually uses behind its own QR code) is required to launch, since real store listings already exist. Flag it as a future enhancement only if Getly wants single-link platform detection (one QR/link that resolves to the right store automatically) rather than showing both badges.

`shared/components/GetAppButton.tsx` (§6 step 4 update) is now the reusable component built on top of this: `getStoreLink("smart")` drives its middle label link, `APP_STORE_URL`/`PLAY_STORE_URL` drive its two icon segments directly.

---

## 14. Standard Next.js Hygiene — easy to forget, check before calling any page "done"

- **Favicon & social meta:** check the §5 asset inventory for an existing favicon/app-icon/OG-image in `public/` before generating placeholders. Wire into the App Router's native conventions — `app/icon.tsx` (or static `app/favicon.ico`), `app/opengraph-image.tsx` (or a static image per route via the Metadata API) — not a hand-rolled `<head>` tag.
- **404:** `app/not-found.tsx` — native App Router convention. (`robots.ts`, `sitemap.ts`, and `llms.txt` get the full AEO/SEO treatment in §16, not just a bare stub.)
- **Currency/number formatting utility:** `shared/utils/formatCurrency.ts` built on `Intl.NumberFormat`, locale-aware (ties into §12's i18n work), applied wherever a currency amount renders alongside the `.tabular` tabular-figures convention already established in the Horizon design system (§3) — one shared formatter, not ad hoc `toFixed(2)` calls scattered per component.
- **`.env.example`:** document every expected environment variable up front, even before real values exist — `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_APPSTORE_URL` / `NEXT_PUBLIC_PLAYSTORE_URL` (backing §13's `appLinks.ts`), the eventual CMS project ID/API token (§4, once chosen), an analytics ID, and a maps/geocoding key if the Countries & Coverage page (§7) ends up needing a real map rather than a static list. Never commit real secret values — `.env.example` documents the shape, `.env.local` (gitignored) holds real values.

---

## 15. Existing Agent Taste-Skills — `.agents/taste-skills/`

This repo already has a local skill library at `.agents/taste-skills/` that Antigravity should read and apply during the build — do not ignore it in favor of generic output, and do not treat every folder in it as equally applicable to this project:

**Apply these on every component/page, in this priority order:**
1. **`gpt-taste`** — the flagship taste skill for this build; read `gpt-taste/SKILL.md` in full before generating UI and follow it as the default quality bar.
2. **`minimalist-ui`** — the confirmed aesthetic direction for Getly specifically. This is what should govern layout density, ornamentation, and visual restraint — it's the closest existing local skill to the flat, saturated-blue, "Apple-blue/AI-native" direction already established in the Horizon design system (§3) and the idle.space-inspired button treatment referenced there. Apply it alongside `gpt-taste`, not as an alternative to it.
3. **`brandkit`** — cross-check this against the token set in §3 before using either as sole source of truth. If `brandkit` defines colors, type, or spacing that conflict with the confirmed Horizon tokens in §3 (which are themselves confirmed against live getly.app CSS), **flag the conflict rather than silently picking one** — §3 reflects what's actually shipping in the product today, so treat it as the tie-breaker unless told otherwise.
4. **`full-output-enforcement`** — run as a final QA gate on each page/component before considering it done, not just at the end of the whole build.

**Do not apply unless explicitly asked:** `industrial-brutalist-ui`, `design-taste-frontend`, `design-taste-frontend-v1`, `stitch-design-taste`, `high-end-visual-design`. These are other presets in the same library but are not the confirmed direction for this project — `industrial-brutalist-ui` in particular would actively conflict with the minimalist, rounded, glow-button direction already locked in. If a build step seems to call for one of these, stop and confirm rather than switching styles mid-project.

**Task-specific skills — apply when the matching task comes up, not globally:**
- **`redesign-existing-projects`** — use when porting the reference `index.html`/`styles.css`/`script.js` (§9) into the Next.js architecture; that's exactly the redesign-an-existing-static-site task this skill is for.
- **`image-to-code`** — use when turning a mockup/imagery asset from the `public/` inventory (§5) into a coded component.
- **`imagegen-frontend-web`** / **`imagegen-frontend-mobile`** — use only to generate a missing web/mobile asset that the §5 asset inventory flags as absent; never to replace a real asset that already exists in `public/`.

**Also see §17** — a separate local skill folder, `apple-design/`, exists alongside `.agents/taste-skills/` but serves a different purpose (design *review*, not taste/generation) and is documented on its own.

---

## 16. SEO & AEO — Search and Answer Engine Optimization

Build this in from the first page, not as a pass at the end — retrofitting metadata and structured data across 15+ routes is exactly the kind of mechanical rework that's expensive later and cheap now. This covers both **SEO** (ranking in Google/Bing) and **AEO** — Answer Engine Optimization: making Getly's content easy for LLM-based answer engines (ChatGPT, Perplexity, Google AI Overviews, Claude) to find, extract, and cite correctly. The two overlap heavily but aren't identical — a few items below exist only for AEO.

### 16.1 Traditional SEO — do this on every route

- **Metadata API, per route:** `generateMetadata` in every `app/[locale]/<route>/page.tsx` — unique `<title>`, meta description, canonical URL (self-referencing, and pointing at the default-locale version from any locale variant), Open Graph and Twitter Card tags with a real image (`app/opengraph-image.tsx` per route, or the §14 static default as fallback).
- **Structured data (JSON-LD)**, matched to content type, not applied generically:
  - `Organization` + `WebSite` schema, site-wide (name, logo, sameAs social links) — the entity definition every other schema references.
  - `MobileApplication`/`SoftwareApplication` schema on Home, pointing at the real App Store/Google Play URLs from §13.
  - `FAQPage` schema everywhere there's a real FAQ block — the Home FAQ teaser, the full `/faq` page, and any pillar-page FAQ section (Wallet, Cards, eSIM, Flights) per §7. This is also the single highest-leverage AEO item on this list — see §16.2.
  - `BreadcrumbList` on every non-Home page.
  - `Article` schema on Blog/Press content once the CMS (§4) is wired up.
  - `Offer`/`PriceSpecification` on the Pricing & Fees page **only once real figures exist** — do not emit structured pricing data around the placeholder table flagged in §7/§11.
- **`app/sitemap.ts`** — dynamically generated, not hand-maintained: every route from the §7 table, each with `lastModified`, a reasonable `changeFrequency`, and `priority` (Home and the four pillar pages highest; legal/footer pages lowest). Once a second locale ships (§12), emit `alternates.languages` (hreflang) entries per URL rather than separate sitemaps per locale.
- **`app/robots.ts`** — see §16.3, it's shared between SEO and AEO concerns.
- **Semantic HTML & accessibility as SEO:** one `<h1>` per page, a real heading hierarchy (not styled `<div>`s standing in for headings), descriptive `alt` text on every image pulled from the §5 asset manifest, landmark regions (`<nav>`, `<main>`, `<footer>`) — this is the same work as the §10 accessibility requirement, not a separate pass.
- **Internal linking:** every pillar page (Wallet/Cards/eSIM/Flights) links to the others and back to Home; the footer carries the full site map from §7 on every page — this is what lets crawlers (and answer engines) discover the full site depth from any entry point.
- **Core Web Vitals:** already required in §10 — it's also a direct Google ranking factor, not purely a UX nicety.

### 16.2 AEO — making Getly answerable, not just crawlable

Answer engines don't rank pages, they extract and cite specific facts and passages. The content itself has to be structured so a fact is extractable without ambiguity — this is a writing/content-architecture concern as much as a technical one.

- **`public/llms.txt`** — the emerging convention (llmstxt.org) for giving LLM-based tools a clean, high-signal map of the site, parallel to what `robots.txt` does for crawlers. Format is plain Markdown at the site root:

  ```markdown
  # Getly

  > The Super App For Modern Traveller — one hidden global wallet, virtual
  > cards, eSIM, and flight booking in a single app for travellers,
  > immigrants, and professionals.

  ## Product
  - [Wallet](https://getly.app/wallet): One wallet, every currency you touch.
  - [Cards](https://getly.app/cards): A virtual card for every purchase.
  - [eSIM](https://getly.app/esim): Global data plans, no physical SIM.
  - [Flights & Bookings](https://getly.app/flights): Book flights without leaving your wallet.
  - [AI Trip Planner](https://getly.app/ai-trip-planner): Personalised itineraries.

  ## Company
  - [About](https://getly.app/about): Mission and story.
  - [Security & Trust](https://getly.app/security): How Getly protects your money.
  - [Pricing & Fees](https://getly.app/pricing): Transparent cost breakdown.
  - [Countries & Coverage](https://getly.app/coverage): Where Getly works.

  ## Support
  - [FAQ](https://getly.app/faq): Common questions, by category.
  - [Help](https://getly.app/faq): Contact support.

  ## Optional
  - [Blog](https://getly.app/blog): Product updates and travel content.
  - [Press](https://getly.app/press): Press mentions and coverage.
  ```

  **Resolved: the production domain is `getly.app`**, confirmed by the team — the same domain the live product uses. Wired in throughout: `NEXT_PUBLIC_SITE_URL` in `.env.local`/`.env.example` (§14), the sitemap's URLs, canonical/OG tags (§16.1), and `public/llms.txt` all already use it as of the current build.

  Generate this file from the same route/content source used for `sitemap.ts` and the §7 table, not hand-maintained separately — the two will drift otherwise. Every line in it must obey the §2 compliance guardrails exactly like page copy does — this file is a direct, high-trust input to how an LLM describes Getly, so a slip here ("send money," exposed "USDC") is arguably higher-stakes than the same slip buried in page copy.

- **`public/llms-full.txt`** (optional, phase 2) — the same idea at full depth: every page's actual extracted text content concatenated into one file, for tools that fetch it directly rather than crawling the site. Lower priority than the summary `llms.txt` above; don't build this before the core site content is finalized, since it needs to reflect final copy, not drafts.

- **Answer-first content structure:** in every FAQ answer and every page's opening paragraph, lead with the direct, quotable answer in the first sentence, then elaborate — not the reverse. ("Getly's virtual card has no issuance fee." then supporting detail — not three sentences of scene-setting before the fact.) This is what makes a passage cleanly extractable by an answer engine, and it's good UX copy regardless (see the `ux-copy` skill for phrasing help on FAQ/CTA copy specifically).

- **Consistent entity description:** the sentence(s) describing what Getly *is* should be worded identically (or near-identically) everywhere it appears — the `Organization` schema `description`, the Home meta description, the About page's mission statement, and `llms.txt`'s summary blockquote. Answer engines build a model of an entity from repeated, consistent signals; a site that describes itself five different ways across five pages is harder to cite confidently than one that repeats the same precise description.

- **No JS-only critical content:** Next.js App Router with Server Components already renders real HTML by default, which is what both traditional crawlers and most answer-engine fetchers need — the risk is component-level, not framework-level. Any headline, FAQ answer, or fact that only appears after a GSAP scroll-trigger fires or only exists inside a React Three Fiber canvas is invisible to both. Rule for implementation: the animation may reveal/emphasize content, but the content itself must already be present in the server-rendered HTML, not injected by the animation.

### 16.3 `app/robots.ts` — shared SEO/AEO surface, one deliberate decision to make

Default to **allowing** both standard search crawlers and the major AI/answer-engine crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, and similar), rather than the increasingly common pattern of blocking AI crawlers by default — a website asking to be AEO-optimized is, by definition, asking to be found and cited by those same crawlers. Disallow nothing beyond what genuinely shouldn't be public (there's no `/admin` or authenticated app surface on this marketing site today — if one gets added later, disallow it then). Point the `sitemap` directive at `app/sitemap.ts`'s output. Revisit this stance only if the team makes a deliberate content-protection decision to exclude specific AI crawlers — don't block them by default while also asking for AEO work, the two goals contradict each other.

---

## 17. Apple HIG — Design Review Skill & Borrowed Rules

A second local skill folder, **`.agents/apple-design/`**, now lives alongside `.agents/taste-skills/` (§15) in the project root. It is a different kind of tool and should be used differently.

### 17.1 What it actually is

`apple-design/` is a packaged clone of `dickwu/apple-design-skill` — a **design-review methodology**, not a design system or a taste/generation preset. It doesn't hand the agent colors or components to use; it defines a process (understand context → load the relevant reference files from its 53-file HIG library via a lookup table → audit through five prioritized lenses: Accessibility [critical], Platform Conventions [high], Visual Design [high], Interaction Design [medium], Content & Writing [medium] → produce a severity-tiered report). It also ships a platform-terminology table that translates iOS/macOS HIG language into web/Next.js equivalents, and specialized modes (App Icon Review, Accessibility Audit, Dark Mode Review, Liquid Glass Review, Generative AI UX Review).

**How Antigravity should use it:** as a QA/review pass, the same role `full-output-enforcement` plays in §15 — run it against finished pages/components to catch accessibility, platform-convention, and content issues, rather than treating it as a source of visual direction. Do not let it drive layout, color, or component decisions on its own; §3's Horizon tokens and §15's `gpt-taste`/`minimalist-ui` stay the authority for what things look like.

**Before running any review from this skill, also read `.agents/apple-design/getly-overrides.md`.** It's a Getly-specific addendum sitting next to the skill (not an edit to the skill's own files) that substitutes Getly's actual tokens/typeface/icon set for Apple's defaults wherever the skill would otherwise cite them (e.g. flag deviation from Getly Blue/Cairo/lucide-react, not from Apple's system blue/San Francisco/SF Symbols), tells it to skip checks for native-app-only surfaces that don't apply to this responsive web build (Apple Pay, SF Symbols, native window chrome, etc.), and makes explicit that §2's compliance guardrails always win over any conflicting Apple guidance — including HIG's own "Send" button-label example, which must not be adopted here.

### 17.2 Concrete rules already folded into this brief

Rather than duplicating them here, the specific, non-controversial HIG rules worth borrowing have been threaded directly into the sections they sharpen:
- **Accessibility numerics** (contrast ratios by text size, touch-target minimums, specific reduced-motion techniques) — now in §10.
- **RTL edge cases** (numeral-order rules, which controls mirror vs. don't, paragraph-vs-short-text alignment, adjacent-Latin type sizing) — now in §12.
- **Voice/writing conventions** (sentence case, avoiding "we" in errors, actionable error copy, no "Click here" links) — now in §2, with the explicit flag that HIG's own "Send" example does **not** override the compliance guardrail.

### 17.3 The one judgment call — Liquid Glass — deliberately not adopted for buttons/cards; now adopted for the nav

`apple-design/materials.md` and `liquid-glass.md` describe Apple's current translucent-material system: a two-layer model (a static Content layer vs. a floating, blurred Functional layer for nav/toolbars/CTAs), two variants (Regular — blurred and legible, for text-heavy surfaces; Clear — highly translucent, for floating over media, needs a ~35% dimming layer over bright backgrounds), and a rule that only one primary action per screen gets full background-color emphasis.

This session already ran the equivalent debate once: an earlier pass restyled Horizon's buttons toward a flatter, idle.space-inspired "Apple blue" look, and that restyle was explicitly reverted back to getly.app's original glow/glass treatment (`--shadow-glow` in §3). Liquid Glass is itself a glass/blur/translucency system, so applying it now would effectively re-open a decision the team already made in the other direction.

**Decision for this brief: do not apply Liquid Glass to buttons, cards, or the elevation system in §3.** The existing `--shadow-glow`/`--shadow-soft` recipe stays as-is. The one place Liquid Glass's *Functional layer* concept is already consistent with what's specified elsewhere in this brief, without changing any visual treatment, is the nav bar — §3 already describes it as a floating pill, and §6 step 4 already gives it a transparent-over-video → opaque-on-scroll behavior, which is conceptually the same floating-functional-layer pattern Liquid Glass describes. If the team wants to deliberately explore Liquid Glass for buttons/cards later, that's a fresh design decision to make explicitly (§11) — not something to back into via this skill folder.

**Update, Sept 2026 — nav bar now does adopt Liquid Glass's actual visual treatment, by explicit direct request (not a skill-driven recommendation).** The Home navbar (`features/navigation/Navbar.tsx`) was restyled to the *Clear* variant, with a dimming/gradient layer added shortly after (per Liquid Glass Clear's own ~35% dimming requirement over bright backgrounds) once the first pass proved washed-out over light hero imagery: `bg-gradient-to-b from-white/20 via-black/10 to-black/25`, `backdrop-blur-2xl backdrop-saturate-150`, `border-white/25`, and an inset highlight/scrim shadow (`shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.2)]`) for legibility and a "drop of water" specular look. **This does not reopen the buttons/cards decision above** — `--shadow-glow` stays exactly as-is everywhere else (CTAs, cards, the `GetAppButton` pill). Treat the nav as the one deliberately-Liquid-Glass surface in the system, not a precedent for restyling other components without being asked.

**Further update, Sept 2026 — the nav is now a single permanent state, not a two-state scroll transition.** Direct DOM inspection of plasma.org's actual live production nav (see §6 step 4's Sept 2026 update for the full investigation) showed it stays permanently transparent/white-text at every scroll depth on their homepage — it never solidifies on scroll. Shown this finding, the user explicitly chose to make Getly's nav match (permanently transparent/glassy, no scroll-triggered state change) while keeping Getly's own floating rounded-pill shape rather than adopting Plasma's full-width bar. `Navbar.tsx`'s `isScrolled` state and its scroll-event listener have been removed entirely; the nav now renders one static className combining the Liquid-Glass-Clear treatment above with no scroll-conditional branch. Treat the two-state description elsewhere in this section as superseded by this update for the nav's *behavior* (not its visual recipe, which is unchanged).
