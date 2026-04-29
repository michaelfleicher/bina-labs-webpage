// Bina Labs — Design System
// Palette: navy ground, cyan-bone surface, lime + teal accents
// Type: Geist (sans display) + Fraunces (serif italics) + JetBrains Mono (technical)
// Mood: confident, premium, technically-credible, slightly editorial

const ink = '#0a1628';
const bone = '#e8f1f7';

const hexToRgba = (hex, a) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
};

const mixHex = (a, b, t) => {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.slice(0, 2), 16);
  const ag = parseInt(ah.slice(2, 4), 16);
  const ab = parseInt(ah.slice(4, 6), 16);
  const br = parseInt(bh.slice(0, 2), 16);
  const bg = parseInt(bh.slice(2, 4), 16);
  const bb = parseInt(bh.slice(4, 6), 16);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${bl.toString(16).padStart(2, '0')}`;
};

export const BL = {
  // Surfaces
  ink,
  inkSoft: mixHex(ink, bone, 0.06),
  inkLine: hexToRgba(bone, 0.10),
  inkLineStrong: hexToRgba(bone, 0.18),

  bone,
  boneSoft: '#dbe4eb',
  boneLine: hexToRgba(ink, 0.12),
  boneLineStrong: hexToRgba(ink, 0.22),

  // Type colors
  inkText: bone,
  inkMuted: hexToRgba(bone, 0.62),
  inkDim: hexToRgba(bone, 0.42),
  boneText: ink,
  boneMuted: hexToRgba(ink, 0.62),
  boneDim: hexToRgba(ink, 0.42),

  // Accents (note: variable names are kept from prototype; the saved palette
  // recolors them from arterial-red to lime + teal)
  red: '#9dff4d',     // primary accent — lime
  copper: '#24e5bf',  // secondary accent — teal
  amber: '#d8a649',

  // Type
  serif: 'Fraunces, "Times New Roman", serif',
  sans: 'Geist, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',

  // Radii
  r: { sm: 4, md: 8, lg: 14, pill: 999 },

  // 4-pt spacing scale
  space: { 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 24, 6: 32, 7: 48, 8: 64, 9: 96 },

  // Minimum tap target (Apple HIG 44, Material 48)
  tap: 44,

  // Type scale - mobile cap / desktop fluid clamp
  type: {
    h1:    { mobile: 56, desktop: 'clamp(72px, 9vw, 156px)' },
    h2:    { mobile: 40, desktop: 'clamp(48px, 6vw, 96px)' },
    h3:    { mobile: 28, desktop: 'clamp(32px, 4vw, 56px)' },
    body:  { mobile: 15, desktop: 16 },
    small: { mobile: 13, desktop: 14 },
    mono:  { mobile: 12, desktop: 13 },
  },
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 1024,
};

export const MQ = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(max-width: ${BREAKPOINTS.tablet}px)`,
};
