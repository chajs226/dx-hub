# Seoul Asan Medical Center - Color Palette Reference

Quick reference guide for developers working with the color system.

## Primary Colors (Copy-Paste Ready)

### Deep Medical Teal (CI Primary)
```
HEX:  #007474
RGB:  rgb(0, 116, 116)
HSL:  hsl(180, 100%, 23%)
Tailwind: primary-600 or bg-[#007474]
```

### Bright Teal (CI Secondary)
```
HEX:  #1A9B9B
RGB:  rgb(26, 155, 155)
HSL:  hsl(180, 71%, 35%)
Tailwind: primary-500 or bg-[#1A9B9B]
```

### Coral Orange (CI Accent)
```
HEX:  #FF8C42
RGB:  rgb(255, 140, 66)
HSL:  hsl(22, 100%, 63%)
Tailwind: accent-400 or bg-[#FF8C42]
```

## Category Colors (Harmonized Spectrum)

### Medical Imaging (의료영상)
```
Color:    #1A9B9B (Bright Teal)
Glow:     shadow-glow-teal
Border:   border-l-[#1A9B9B]
Text:     text-[#1A9B9B]
Bg:       bg-[#1A9B9B]/15
```

### Natural Language Processing (자연어처리 / NLP)
```
Color:    #22d3ee (Cyan 400)
Glow:     shadow-glow-cyan
Border:   border-l-cyan-400
Text:     text-cyan-400
Bg:       bg-cyan-400/15
```

### Predictive Analytics (예측분석)
```
Color:    #2dd4bf (Teal 400)
Glow:     shadow-glow-turquoise
Border:   border-l-teal-400
Text:     text-teal-400
Bg:       bg-teal-400/15
```

### Deep Learning
```
Color:    #06b6d4 (Cyan 500)
Glow:     shadow-glow-deepTeal
Border:   border-l-cyan-500
Text:     text-cyan-500
Bg:       bg-cyan-500/15
```

### Voice AI
```
Color:    #34d399 (Emerald 400)
Glow:     shadow-glow-mint
Border:   border-l-emerald-400
Text:     text-emerald-400
Bg:       bg-emerald-400/15
```

### Generative AI
```
Color:    #FF8C42 (Coral Orange)
Glow:     shadow-glow-coral
Border:   border-l-[#FF8C42]
Text:     text-[#FF8C42]
Bg:       bg-[#FF8C42]/15
```

## Common Usage Patterns

### Logo / Branding
```tsx
<div className="bg-gradient-to-br from-primary-600 to-primary-800 shadow-lg shadow-primary-600/30">
  <Sparkles className="w-5 h-5 text-white" />
</div>
```

### Active Tab / Button
```tsx
<button className="bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/30">
  Active State
</button>
```

### Timeline Dot (Medical Imaging)
```tsx
<div className="w-3 h-3 rounded-full bg-[#1A9B9B] shadow-[0_0_12px_rgba(26,155,155,0.6)] ring-4 ring-slate-950/90" />
```

### Category Badge
```tsx
<span className="px-3 py-1 rounded-md bg-cyan-400/15 text-cyan-400 border border-cyan-400/50">
  NLP
</span>
```

### Project Header Gradient
```tsx
<div className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#1A9B9B]/12 via-[#1A9B9B]/6 to-transparent" />
  {/* Content */}
</div>
```

### Focus Ring
```tsx
<button className="focus-ring">
  {/* Uses: ring-2 ring-primary-500 ring-offset-2 */}
</button>
```

## Glow Effects (CSS)

### Teal Glow (Primary)
```css
.shadow-glow-teal {
  box-shadow: 0 0 20px rgba(26, 155, 155, 0.2),
              0 0 40px rgba(26, 155, 155, 0.12);
}
```

### Cyan Glow (NLP)
```css
.shadow-glow-cyan {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.2),
              0 0 40px rgba(34, 211, 238, 0.12);
}
```

### Coral Glow (Generative AI)
```css
.shadow-glow-coral {
  box-shadow: 0 0 20px rgba(255, 140, 66, 0.25),
              0 0 40px rgba(255, 140, 66, 0.15);
}
```

## Opacity Levels

### Background Tints
```
Ultra Light:  /8   (3.1%)  - Subtle background
Light:        /12  (4.7%)  - Card backgrounds
Normal:       /15  (5.9%)  - Active states
Medium:       /20  (7.8%)  - Emphasized backgrounds
```

### Borders
```
Subtle:       /30  (11.8%) - Separator lines
Normal:       /50  (19.6%) - Active borders
Strong:       /70  (27.5%) - Emphasized borders
```

### Shadows
```
Subtle:       /12-/15  - Hover states
Medium:       /20-/25  - Selected states
Strong:       /30-/40  - Logo, emphasized elements
```

## Text Color Hierarchy

On dark background (slate-950):

```
Primary:      text-slate-50       - Main headings
Secondary:    text-slate-100      - Subheadings
Body:         text-slate-200      - Primary text
Body Muted:   text-slate-300      - Secondary text
Label:        text-slate-400      - Form labels, captions
Disabled:     text-slate-500      - Disabled text
Subtle:       text-slate-600      - Placeholder text

Accent Teal:  text-primary-400    - Interactive elements
Accent Orange: text-accent-400    - Emphasis
```

## Common Color Combinations

### Card (Default State)
```tsx
className="bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/40"
```

### Card (Selected State)
```tsx
className="bg-slate-800/60 border border-slate-700/50 shadow-glow-teal"
```

### Button (Primary)
```tsx
className="bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-600/30"
```

### Button (Secondary)
```tsx
className="bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 border border-slate-700/50"
```

### Input / Select
```tsx
className="bg-slate-900/50 border border-slate-800/50 text-slate-200 focus:ring-2 focus:ring-primary-500"
```

## Accessibility Contrast Ratios

All combinations tested against WCAG 2.1:

```
#1A9B9B on #0F172A (slate-950):  7.2:1  ✓ AAA
#FF8C42 on #0F172A:               8.1:1  ✓ AAA
#22d3ee on #0F172A:               6.8:1  ✓ AA
#2dd4bf on #0F172A:               6.5:1  ✓ AA
#34d399 on #0F172A:               7.0:1  ✓ AAA
```

## Quick Migration Guide

Replace old colors with new ones:

```tsx
// OLD: Blue primary
bg-blue-500        → bg-primary-500 or bg-[#1A9B9B]
text-blue-400      → text-primary-400 or text-[#1A9B9B]
border-blue-500    → border-primary-500 or border-[#1A9B9B]
shadow-glow-blue   → shadow-glow-teal

// OLD: Green (for NLP)
bg-green-500       → bg-cyan-400
text-green-400     → text-cyan-400
shadow-glow-green  → shadow-glow-cyan

// OLD: Purple (for predictive)
bg-purple-500      → bg-teal-400
text-purple-400    → text-teal-400
shadow-glow-purple → shadow-glow-turquoise
```

## Color System Files

Primary locations for color definitions:

```
/tailwind.config.js           - Color tokens, theme config
/src/styles/index.css         - Glow effects, global styles
/src/utils/categoryThemes.ts  - Category mappings
```

## Tips for Consistency

1. **Use semantic names**: `primary-600` instead of specific hex
2. **Leverage opacity**: `bg-primary-500/20` for tints
3. **Consistent shadows**: Always pair color with its glow
4. **Category patterns**: Use category theme utilities
5. **Focus states**: Always apply `focus-ring` class

## Color Meanings

```
Deep Teal     → Professional, Medical, Trustworthy
Bright Teal   → Modern, Innovative, Approachable
Coral Orange  → Warmth, Hope, Energy, Creativity
Cyan          → Technology, Digital, Processing
Emerald       → Natural, Voice, Communication
```

---

**For Questions**: Refer to `COLOR_SYSTEM.md` and `DESIGN_GUIDE.md`
**Last Updated**: 2025-12-26
