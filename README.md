# Northline Commercial

Landing page for a Nairobi commercial real estate firm. React 18 + Vite + Tailwind CSS v4,
with Framer Motion for scroll and load transitions and lucide-react for icons.

Live: <https://elijahmugo-lab.github.io/northline-commercial/>

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

`npm run build` writes plain HTML, CSS and JS to `dist/`. That folder can be dropped on any
static host (Netlify, Vercel, Cloudflare Pages, or a normal Apache/Nginx box). No server
runtime required.

## Deploying

```bash
npm run deploy
```

That builds and force-pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

The one thing to watch is `base` in `vite.config.js`. GitHub project sites live under
`/<repo>/`, so it is set to `/northline-commercial/` and the built asset URLs carry that
prefix. Two cases need it changed:

- **Custom domain** (say `northlinecommercial.co.ke`) or any host serving from the root:
  build with `BASE_PATH=/ npm run build`.
- **Renamed repo**: update the default in `vite.config.js` to match the new name.

Get this wrong and the page loads a blank white screen, because the HTML resolves but the JS
and CSS 404. If that happens, view source and check the `src` and `href` prefixes.

The `<link rel="canonical">` in `index.html` points at `northlinecommercial.co.ke`, the intended
production domain. Update or remove it if that domain changes.

## Structure

```text
index.html                     title, meta description, Open Graph, preconnects
src/main.jsx                   entry point, loads self-hosted Inter
src/index.css                  Tailwind import, design tokens, reduced-motion block
src/lib/motion.js              shared easing curve and viewport settings
src/App.jsx                    section order
src/components/
  BrandMark.jsx                three-bar logo, used in nav and footer
  Navbar.jsx                   absolute nav, desktop links, mobile dropdown
  Hero.jsx                     video background, load-in animation
  FeatureStrip.jsx             glass panel that overlaps the hero on desktop
  TrustedBy.jsx                client logo row
  About.jsx                    split layout, stats, contact CTA
  Services.jsx                 four service cards
  FeaturedProperties.jsx       three listings
  Insights.jsx                 three articles
  CallToAction.jsx             full-width closing CTA
  Footer.jsx                   five column footer
```

## Design tokens

Defined once in `src/index.css` under `@theme`. Change them there and the whole page follows.

| Token | Value | Used for |
| --- | --- | --- |
| `--color-gold` | `#d4af37` | accent on dark surfaces, buttons, icons |
| `--color-gold-soft` | `#e0c463` | gold button hover |
| `--color-gold-ink` | `#7d5e12` | gold TEXT on white and gray-50 |
| `--color-gold-wash` | `#faf5e6` | circular icon wells in service cards |
| `--color-dark` | `#0b0e14` | dark section backgrounds |
| `--color-dark-raised` | `#162032` | property card info blocks |
| `--color-dark-line` | `#1e2a3d` | hairlines on dark |

Two gold values exist for one reason: `#d4af37` on white is roughly 2:1 contrast and fails
WCAG AA. Any gold text sitting on a light background uses `--color-gold-ink` instead, which
measures about 6:1. Keep that split if you retheme.

Corner radius is `rounded-lg` everywhere. The only exception is circular icon wells and social
buttons, which are `rounded-full`.

**The hero is deliberately white, not gold.** A saturated gold sitting on dark video reads as
neon, so the hero eyebrow, the hero CTA and the navbar CTA are white. Gold starts at the
feature strip and carries the rest of the page. If you move gold back into the hero, check it
against the video at full brightness first.

## Responsive rules

Verified at 320, 360, 390, 430, 744, 768, 820 landscape, 932 landscape, 1280 and 1440: no
horizontal overflow, no text under 11px, no CTA wrapping to two lines, no tap target under
44px, and the hero CTA above the fold at every one.

Two rules are easy to break by accident:

- **Landscape phones need a height query, not a width query.** Between roughly 640px and 900px
  wide the `md:` breakpoint fires a 72px hero headline. A phone held sideways is that wide but
  only ~375px tall, so the headline pushes the CTA off screen. `src/index.css` gates the hero's
  type and spacing on `@media (max-height: 520px)` to catch this. Width breakpoints cannot see it.
- **Inline text links need `min-h-11`.** "Learn More", "View Details", "Read More" and the footer
  links are 20px tall as plain text, well under the 44px minimum touch target. They carry
  `inline-flex min-h-11 items-center` with reduced top margin so the hit area grows without
  changing the visual rhythm.

The property and insight grids stay three-up from `md` (768px). At exactly 768px the cards are
tight, around 220px wide with titles over two lines. Dropping to two columns would strand the
third card alone in the second row, so three-up is the better of the two.

## Accessibility notes

- Skip link to `#main` as the first focusable element.
- Visible gold focus ring on every interactive element.
- Background video is `aria-hidden` and `tabIndex={-1}`, with a poster image so the first
  paint is not blank.
- All motion collapses under `prefers-reduced-motion`, both in CSS and via Framer Motion's
  `useReducedMotion` inside each animated component.
- Repeated link labels ("Learn More", "View Details", "Read More") carry a visually hidden
  suffix naming the item, so a screen reader link list stays unambiguous.

## Content to replace before launch

Placeholder content is marked here rather than in the markup so it is easy to hand to a client.

- Photography: currently Unsplash stock. Swap for real building photography.
- Hero video: currently a CDN sample clip. Replace the `HERO_VIDEO` constant in `Hero.jsx`.
- Client logos in `TrustedBy.jsx` are icon plus wordmark placeholders. Replace with real SVG
  logos once permissions are in place.
- Property listings, article copy, stats, phone number and email are illustrative.
- Footer legal links point at `#contact` and need real Privacy Policy and Terms pages.
