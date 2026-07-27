# Northline Commercial

Landing page for a Nairobi commercial real estate firm. React 18 + Vite + Tailwind CSS v4,
with Framer Motion for scroll and load transitions and lucide-react for icons.

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

## Structure

```
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
