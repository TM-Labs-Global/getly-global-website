# Getly Brand Overrides for the apple-design Review Skill

**This file is not part of the original `apple-design` skill** (`dickwu/apple-design-skill`) — it's
a Getly-specific addendum, added alongside it without editing any of its original files. **Read this
file before producing any review output from `.agents/apple-design/SKILL.md`**, and apply these
substitutions. Where anything below conflicts with a reference file in `references/hig/`, this file
wins for this project.

## Color

- Do not check against or recommend Apple's system colors (`systemBlue` `#007AFF`, `systemGray`,
  etc.). Getly's palette is defined in `PROJECT_SCOPE.md` §3: primary interactive color **Getly
  Blue `#0069FF`**, ink/dark-surface **Getly Navy `#0F184C`**, canvas `#EFF6FF`, plus the amber/
  green/red semantic colors listed there. Flag deviation from *those* tokens, not from Apple's.
- The contrast-ratio thresholds themselves (4.5:1 body text, 3:1 large/bold text) are brand-agnostic
  and still apply as-is. Verify Getly Blue against its actual usage per §10's specific guidance —
  small blue text/links need `--blue-700`, not the raw `--blue` token, to clear 4.5:1.
- Getly ships **light mode only** (§2/§3 — dark mode was explicitly removed). Do not flag "not using
  semantic/dynamic system colors for dark-mode adaptation" — there is no dark mode to adapt to.

## Typography

- Do not recommend San Francisco (SF Pro) or check for it. Getly's typeface is **Cairo, exclusively**
  (§2 rule 6). Flag any deviation from Cairo, not from SF.
- The font-size minimums (17pt/11pt mobile, 13pt/10pt desktop) and "avoid thin/ultralight weights"
  guidance are brand-agnostic accessibility rules and still apply.

## Icons

- Do not recommend SF Symbols. Getly's icon set is **`lucide-react`, exclusively** (§4). Flag mixed
  icon sets or off-brand icon styles, not "not using SF Symbols."
- Consistent stroke weight/size across the set, optical-vs-geometric centering for asymmetric icons,
  and preferring vector (SVG) format all still apply as-is.

## Materials / Liquid Glass

- **Do not recommend adopting Apple's Liquid Glass material system** for buttons, cards, or the
  elevation system. This was evaluated and explicitly deferred — see `PROJECT_SCOPE.md` §17.3. The
  existing `--shadow-glow` / `--shadow-soft` glow-and-glass treatment (§3) is the deliberate,
  confirmed direction, chosen after a prior flatter restyle was tried and reverted. Do not flag it as
  "not using Liquid Glass" or suggest replacing it.
- The nav is the one deliberate exception, by explicit direct user request (Sept 2026), not a
  skill-driven recommendation: `features/navigation/Navbar.tsx` now uses Liquid Glass's actual
  *Clear*-variant treatment — `backdrop-blur-2xl` + `backdrop-saturate-150`, a top-to-bottom
  gradient tint (bright specular highlight at the top rim, darkening toward the bottom — this *is*
  the ~35% dimming layer this file's own Materials section calls for over bright backgrounds,
  refined after the first pass skipped it and nav links washed out over the light sandy hero
  imagery), a bright inset top highlight plus a soft inset bottom shadow for glass "thickness", and
  a visible `border-white/20-25` edge. Do not flag this as "not using Liquid Glass" (it now does)
  or propose reverting it to a flat single-opacity fill. Do not use this as precedent to restyle
  buttons/cards toward Liquid Glass on your own — that decision (§17.3 in `PROJECT_SCOPE.md`)
  still stands as-is.
- **Further update, Sept 2026 — the nav no longer changes on scroll at all.** After directly
  inspecting plasma.org's real production nav (the site this whole build's hero/nav pattern is
  modeled on), it turned out Plasma's own nav stays permanently transparent/white-text at every
  scroll depth on their homepage — it never solidifies on scroll. Shown that finding, the user chose
  to match it: Getly's `isScrolled` state and scroll listener were removed from `Navbar.tsx`
  entirely, and the nav now renders one single static className (the Clear-variant recipe above)
  regardless of scroll position, while keeping Getly's own floating rounded-pill shape rather than
  Plasma's full-width bar. Do not flag the nav as "missing scroll-reactive behavior" — its current
  permanently-transparent state is the deliberate, confirmed design, not an oversight.

## Writing / Voice

- Do not adopt Apple's own example copy verbatim — most importantly, Apple's HIG uses **"Send" as a
  model button-label example; that example does not apply here.** Getly's banned-word list (§2 rule
  1: never "send"/"transfer") overrides any Apple writing example that conflicts with it. When citing
  the writing guideline, translate the underlying *principle* (short, clear, sentence-case labels)
  without importing Apple's specific example word.
- Also avoid "bank-grade"/"account" language per §2 rule 2, and never surface "USDC"/"stablecoin"
  per §2 rule 3 — even if a review lens would otherwise consider that language clear and plain.

## Platform scope — skip entirely

Getly's marketing site is a **responsive Next.js web app**, not a native iOS/macOS/Flutter/Tauri/
Electron app. Skip any check, reference-file load, or recommendation tied to platform surfaces that
don't exist here:
- Apple Pay, In-App Purchase, App Store review guidelines
- watchOS/tvOS/visionOS patterns, Apple Pencil/Scribble, augmented reality
- Native window chrome (title bars, `NSWindow`), multi-window desktop management
- Native OS settings integration, native push notifications, native file management
- SF Symbols specifically (see Icons above — `lucide-react` is the substitute)

Translate any remaining "platform convention" checks to **responsive web** conventions instead: a
persistent header/nav, not a bottom tab bar; standard `<nav>`/keyboard-focus patterns, not iOS
gesture navigation; viewport/breakpoint responsiveness, not device safe areas. Read the skill's own
Mobile/Desktop terminology table (in `SKILL.md`) as "Mobile" = small viewport and "Desktop" = large
viewport, not native app builds.

## Compliance guardrails always win

If anything in the `apple-design` skill's guidance ever conflicts with `PROJECT_SCOPE.md` §2 (brand &
compliance guardrails — banned words, no dark mode, Cairo typeface, Getly color tokens, global-not-
Africa-only positioning), **§2 wins without exception.** Flag the conflict in the review output
rather than silently following Apple's guidance.
