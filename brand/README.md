# Bina Labs - Brand assets

Logo lockups and favicons, built on the existing site palette
(navy `#0a1628` + lime `#9dff4d`, wordmark uppercase with wide tracking).

## For invoices

Use **`png/bina-labs-logo-600.png`** (transparent background) in the invoice header.
Most invoicing systems (Green Invoice / Morning, Icount, EZcount, Xero, QuickBooks)
want a PNG under ~1MB and render it at roughly 200-300px wide - the 600px file gives
a sharp result on printed PDFs too. Use the 1200px file if the system supports retina.

If the header area is short, `png/bina-labs-logo-simple-600.png` drops the tagline.

## Files

| File | Use |
|---|---|
| `bina-labs-logo.svg` | Primary lockup: mark + wordmark + tagline, dark ink on transparent |
| `bina-labs-logo-simple.svg` | Mark + wordmark, no tagline |
| `bina-labs-logo-on-dark.svg` | Light version, for navy/dark backgrounds |
| `bina-labs-mark.svg` | Icon only (avatars, stamps, social profiles) |
| `png/*.png` | Rasterized exports, transparent background |
| `png/*-white.png` | Same, flattened onto solid white |
| `png/*-on-dark-*.png` | Light wordmark for dark backgrounds (transparent) |
| `favicon/favicon.svg` | Scalable favicon |
| `favicon/favicon.ico` | Multi-size ICO (16/32/48) for legacy browsers |
| `favicon/favicon-{16,32,48,180,192,512}.png` | PNG favicons; 180 = apple-touch-icon, 192/512 = PWA manifest |

## Colors

| Token | Hex | Use |
|---|---|---|
| Ink (navy) | `#0a1628` | Mark tile, wordmark on light |
| Lime | `#9dff4d` | Accent square |
| Bone | `#e8f1f7` | Wordmark on dark |

## Clear space & minimum size

- Keep clear space around the lockup equal to the height of the lime square.
- Minimum width: 120px for the full lockup, 24px for the mark alone.
- Do not recolor, stretch, or add effects. On photos, use the dark version over a solid navy panel.

## Type

The wordmark is set in Helvetica Neue / Arial (weight 600, tracking 3), the tagline in
JetBrains Mono. Both fall back cleanly, but if you edit the SVG on a machine without
those fonts, export a fresh PNG from a machine that has them - or just use the PNGs.

## Favicon install (site)

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="apple-touch-icon" href="/favicon-180.png">
```

The live site currently ships a square (un-rounded) favicon at `public/favicon.svg`.
Copy `favicon/` into `public/` if you want the rounded version everywhere.
