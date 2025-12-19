# WEX Brand Exploration 2026 — Design Token Reference

> Extracted: December 19, 2025  
> Source: `wex-design-system-2026/`

---

## Theme Summary

The **WEX Brand 2026** design system represents a **glass/gradient-forward** aesthetic evolution. The visual language combines:

- **Bold hero gradients** spanning purple → blue → red
- **Frosted glass surfaces** with subtle transparency and backdrop blur
- **Blue-tinted shadows** creating depth without heaviness  
- **Rounded, approachable shapes** (0.75rem–1.5rem radius)
- **Inter typography** for a clean, modern interface feel

### Palette Intent

| Role | Colors | Philosophy |
|------|--------|------------|
| **Brand Red** | `#C8102E` → `#FF032B` | Primary action color, CTAs, links. Warm and energetic. |
| **Brand Blue** | `#172DA1` (main), `#1C6EFF` (accent) | Trust, stability. Used for text, headings, data viz. |
| **Deep Purple** | `#2E0055`, `#25146F`, `#1E105A` | Hero backgrounds, footer, dark mode surfaces. Luxurious depth. |
| **Accent Yellow** | `#FFBC00` | Warmth, attention, data visualization accent. |
| **Success Green** | `#00C48C` | Positive states, status indicators. |
| **Neutrals** | `#FDFDFF` → `#EDF1FF` | Soft blue-tinted whites. Never pure white backgrounds. |

### Elevation Model

The system uses **blue-tinted shadows** to maintain color consistency:

```
shadow-sm:  0 2px 4px rgba(23, 45, 161, 0.08)     — Subtle lift
shadow:     0 4px 12px rgba(23, 45, 161, 0.12)    — Cards, inputs
shadow-md:  0 8px 24px rgba(23, 45, 161, 0.15)    — Modals, popovers
shadow-lg:  0 12px 40px rgba(23, 45, 161, 0.18)   — Hero elements

wex-ombre:  0 8px 30px -8px rgba(23, 45, 161, 0.18),  — Special "WEX Ombre"
            0 4px 20px -4px rgba(200, 16, 46, 0.12)     (blue + red dual-glow)
```

### Surface Model

Surfaces follow a **gradient-first** approach:

| Surface | Value | Usage |
|---------|-------|-------|
| `surface-ground` | `#FDFDFF` | Page background base |
| `surface-section` | `#F5F8FF` | Section backgrounds |
| `surface-card` | `#FFFFFF` | Card backgrounds (often with gradient) |
| Card Gradient | `linear-gradient(135deg, #FFFFFF, #F5F8FF)` | Default card treatment |
| Glass | `bg-white/50 backdrop-blur-sm` | Overlay cards, modals |
| Hero | `linear-gradient(to BR, #2E0055, #172DA1, #C8102E)` | Primary hero sections |

### Border & Radius Philosophy

- **Default border**: `#E1E8FF` — Soft blue tint, never harsh grays
- **Input border**: `#B1C0EE` — Slightly stronger for form fields
- **Glass borders**: `rgba(255, 255, 255, 0.3)` — Subtle on dark backgrounds
- **Border radius**: Generally `0.75rem`–`1.5rem` for containers, `full` for buttons/pills

### Typography Hierarchy

| Element | Weight | Color | Size Range |
|---------|--------|-------|------------|
| Headlines | Bold (700) | `#172DA1` | 2xl–7xl |
| Body | Medium (500) | `#5D688C` | base–lg |
| Muted/Labels | Bold (700) | `#7A87B2` | xs–sm |
| Links | Bold (700) | `#C8102E` | Inherit |
| On Dark | Normal–Bold | `#FFFFFF` or `rgba(255,255,255,0.7)` | Any |

---

## Palette → Semantic Mapping

| Palette Token | Semantic Usage |
|---------------|----------------|
| `brand.red.DEFAULT` (`#C8102E`) | `semantic.primary.DEFAULT`, `semantic.danger.DEFAULT`, `semantic.text.link` |
| `brand.red.light` (`#FF032B`) | Gradient end for primary buttons, hover states |
| `brand.blue.main` (`#172DA1`) | `semantic.text.primary`, `semantic.secondary.DEFAULT`, `semantic.foreground.DEFAULT` |
| `brand.blue.accent` (`#1C6EFF`) | `semantic.info.DEFAULT`, focus rings, interactive highlights |
| `brand.blue.deep` (`#25146F`) | Dark mode backgrounds, footer gradient start |
| `brand.yellow.DEFAULT` (`#FFBC00`) | `semantic.warning.DEFAULT`, data viz accent |
| `accent.success` (`#00C48C`) | `semantic.success.DEFAULT`, status badges |
| `neutral.pale` (`#FDFDFF`) | `semantic.surface.ground`, `semantic.background.page` |
| `neutral.light` (`#EDF1FF`) | `semantic.muted.background`, hover states |

---

## Do's and Don'ts

### Colors

| Do | Don't |
|----|-------|
| Use `#172DA1` for primary text and headings | Use pure black (`#000000`) for text |
| Use gradient buttons for primary CTAs | Use flat red buttons without gradient |
| Use `#FDFDFF` or `#F5F8FF` for backgrounds | Use pure white (`#FFFFFF`) for page backgrounds |
| Use blue-tinted shadows | Use gray or black shadows |
| Use `#C8102E` for links and action text | Use blue for links (blue is for body text) |

### Surfaces & Cards

| Do | Don't |
|----|-------|
| Apply `linear-gradient(135deg, #FFFFFF, #F5F8FF)` to cards | Use flat white cards |
| Use `backdrop-blur-sm` with translucent backgrounds | Overuse blur (performance) |
| Add hover glow effect with accent blue | Use opacity-only hover effects |
| Use `rounded-3xl` (1.5rem) for major cards | Use sharp corners anywhere |

### Gradients

| Do | Don't |
|----|-------|
| Use hero gradient (`purple → blue → red`) for main hero sections | Use the hero gradient for small UI elements |
| Layer decorative glow blobs on hero backgrounds | Leave hero backgrounds flat |
| Use red gradient (`#C8102E → #FF032B`) for buttons | Mix button gradient direction |
| Add glow shadows (`shadow-[#C8102E]/30`) on hover | Forget hover state enhancement |

### Typography

| Do | Don't |
|----|-------|
| Use Inter for all UI text | Mix font families |
| Use tight letter-spacing for headlines | Use loose letter-spacing for headlines |
| Use bold (700) for interactive text | Use light weights |
| Use uppercase + extra tracking for labels | Use sentence case for small labels |

### Dark Contexts (Footer, Hero, Mobile Menu)

| Do | Don't |
|----|-------|
| Use `#FFFFFF` for primary text | Use off-whites for primary text |
| Use `rgba(255,255,255,0.7)` for secondary text | Use gray text on dark |
| Use `rgba(255,255,255,0.1)` for subtle backgrounds | Use pure black overlays |
| Add colored glow blobs (blue/red) in backgrounds | Leave dark backgrounds completely flat |

---

## Key Gradients Reference

### Hero Backgrounds

```css
/* Default Hero (Purple → Blue → Red) */
background: linear-gradient(to bottom right, #2E0055, #172DA1, #C8102E);

/* Light Hero */
background: linear-gradient(to bottom, #FDFDFF, #F0F4FF);

/* Dark Hero / Footer */
background: linear-gradient(to bottom right, #25146F, #1E105A);
```

### Buttons

```css
/* Primary Button */
background: linear-gradient(to right, #C8102E, #FF032B);

/* Primary Button Hover */
background: linear-gradient(to right, #FF032B, #FF3355);
box-shadow: 0 4px 12px rgba(200, 16, 46, 0.3);
```

### Cards & Surfaces

```css
/* Card Default */
background: linear-gradient(135deg, #FFFFFF, #F5F8FF);

/* Card Hover Overlay */
background: linear-gradient(135deg, transparent, rgba(28, 110, 255, 0.05), transparent);
```

### Decorative Glow Blobs

```css
/* Yellow glow (hero corners) */
background: linear-gradient(to bottom left, rgba(255, 188, 0, 0.2), transparent);
filter: blur(100px);

/* Red glow (hero corners) */
background: linear-gradient(to top right, rgba(200, 16, 46, 0.3), transparent);
filter: blur(80px);

/* Blue glow (footer) */
background: linear-gradient(to top left, rgba(28, 110, 255, 0.3), transparent);
filter: blur(100px);
```

---

## Motion Guidelines

| Property | Value | Usage |
|----------|-------|-------|
| `transition-all` | `200ms ease` | Default for most interactions |
| `transition-transform` | `200ms ease` | Icon/button hover transforms |
| `transition-colors` | `200ms ease` | Color changes on hover |
| `duration-300` | `300ms` | Card/surface hover effects |
| `duration-500` | `500ms` | Staggered reveal animations |
| `duration-1000` | `1000ms` | Chart/gauge animations |

### Animation Patterns

- **Staggered reveals**: Use `transitionDelay` with 100ms increments
- **Hover transforms**: `group-hover:scale-110`, `group-hover:translate-x-1`
- **Pulse effects**: For status indicators (success badge)
- **Intersection Observer**: Trigger animations when elements enter viewport

---

## Files Used as Sources of Truth

1. **`wex-design-system-2026/tailwind.config.js`**  
   — Custom colors (`wex.*`), shadows (`wex-ombre`), border radius (`wex-frame`)

2. **`wex-design-system-2026/src/themes/wex-prime-theme.css`**  
   — CSS custom properties for PrimeReact: primary scale, surfaces, text, shadows, radius

3. **`wex-design-system-2026/src/index.css`**  
   — Scrollbar styling colors

4. **Component files (inline patterns)**:
   - `WexHero.jsx` — Hero gradient variants
   - `WexFooter.jsx` — Dark gradient, decorative blobs
   - `WexFeatureCard.jsx` — Card gradients, hover effects
   - `WexAccountCard.jsx` — Glass card pattern
   - `WexDashboardShell.jsx` — Surface gradients, nav styling
   - `WexBalanceGauge.jsx` — Chart gradient definitions
   - `WexAIComposer.jsx` — AI component styling
   - `moving-border.jsx` — AI glow border gradients

---

## Implementation Notes

- **No dark mode toggle exists** in this codebase; dark surfaces are used contextually (hero, footer)
- **PrimeReact** is the component library; CSS variables in `wex-prime-theme.css` override defaults
- **Tailwind CSS** handles utility classes; `addVariablesForColors` plugin exposes colors as CSS vars
- Gradients and complex effects are primarily **inline** in component JSX, not abstracted to CSS
- **HSL values** provided in JSON for ShadCN compatibility (they prefer HSL format)

