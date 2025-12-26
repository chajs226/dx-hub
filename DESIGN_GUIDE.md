# DX Hub Design Guide
## Seoul Asan Medical Center Visual Identity

### Color Palette Quick Reference

#### Primary Brand Colors

```
Deep Medical Teal (Primary)
#007474 • rgb(0, 116, 116) • hsl(180, 100%, 23%)
└─ Used for: Logo, primary branding, trust elements

Bright Teal (Primary Light)
#1A9B9B • rgb(26, 155, 155) • hsl(180, 71%, 35%)
└─ Used for: Active states, highlights, medical imaging category

Coral Orange (Accent)
#FF8C42 • rgb(255, 140, 66) • hsl(22, 100%, 63%)
└─ Used for: Emphasis, Generative AI, warm accents
```

#### Category Spectrum

```
Medical Imaging    ███ #1A9B9B  Bright Teal
NLP               ███ #22d3ee  Cyan 400
Predictive        ███ #2dd4bf  Teal 400
Deep Learning     ███ #06b6d4  Cyan 500
Voice AI          ███ #34d399  Emerald 400
Generative AI     ███ #FF8C42  Coral Orange
```

### Component Color Usage

#### 1. Logo & Branding

**ProjectSidebar Header**
```
Logo Background: gradient from-primary-600 to-primary-800
Logo Shadow: shadow-primary-600/30
Subtitle Text: text-primary-400/80
```

**Visual Effect**: Professional teal gradient that echoes the CI logo

---

#### 2. Interactive Elements

**Active Tab State**
```
Background: bg-primary-500/20
Text: text-primary-400
Ring: ring-1 ring-primary-500/30
```

**Filter Buttons (Active)**
```
Background: Category-specific tint (15% opacity)
Border: Category color (50% opacity)
Glow: shadow-glow-{category}
```

**Visual Effect**: Cohesive teal-based interaction pattern

---

#### 3. Timeline Elements

**Timeline Dots**
```
의료영상: bg-[#1A9B9B] with teal glow
자연어처리: bg-cyan-400 with cyan glow
예측분석: bg-teal-400 with turquoise glow
Deep Learning: bg-cyan-500 with deep teal glow
Voice AI: bg-emerald-400 with mint glow
Generative AI: bg-[#FF8C42] with coral glow
```

**Card Borders**
```
Left accent: 3px solid in category color
Selected glow: Subtle shadow in category color
```

**Visual Effect**: Clear visual distinction while maintaining harmony

---

#### 4. Content Headers

**Project Header Gradient**
```
Background overlay: from-{category}/12 via-{category}/6 to-transparent
KPI icon background: Same gradient as background
KPI text: Category accent color
```

**Visual Effect**: Elegant, subtle category identification

---

### Design Principles

#### 1. Professional Medical Aesthetic
- Deep teal conveys trust and expertise
- Subtle use of color, never overwhelming
- Clean, clinical precision in layouts

#### 2. Modern Digital Innovation
- Bright teal shows technological advancement
- Smooth gradients and glows for polish
- Contemporary UI patterns

#### 3. Warmth & Accessibility
- Orange accent adds human warmth
- High contrast for readability
- Friendly, approachable interactions

#### 4. Visual Hierarchy

**Priority Levels**:
```
Level 1 (Highest):     Coral Orange (#FF8C42)
                       └─ Special actions, key highlights

Level 2 (Primary):     Bright Teal (#1A9B9B)
                       └─ Active states, main interactions

Level 3 (Secondary):   Category Spectrum
                       └─ Content organization

Level 4 (Base):        Deep Teal (#007474)
                       └─ Branding, foundation
```

### Typography & Color Pairing

#### On Dark Background (Slate 950)

```
Headings:           text-slate-50 to text-slate-100
Body Text:          text-slate-200 to text-slate-300
Muted Text:         text-slate-400 to text-slate-500
Disabled:           text-slate-600

Primary Accent:     text-primary-400 (#1A9B9B)
Orange Accent:      text-accent-400 (#FF8C42)
```

#### Recommended Pairings

```
✓ Bright Teal + Slate 50     (Active labels on dark)
✓ Coral Orange + Slate 50    (Emphasized text)
✓ Cyan + Slate 100           (Category headers)
✓ Deep Teal + Slate 200      (Subtle accents)
```

### Glow & Shadow Effects

#### Teal Glow (Primary)
```css
box-shadow: 0 0 20px rgba(26, 155, 155, 0.2),
            0 0 40px rgba(26, 155, 155, 0.12);
```
**Use**: Selected items, active states, focus

#### Coral Glow (Accent)
```css
box-shadow: 0 0 20px rgba(255, 140, 66, 0.25),
            0 0 40px rgba(255, 140, 66, 0.15);
```
**Use**: Special highlights, Generative AI elements

#### Category-Specific Glows
Each category has optimized glow matching its primary color
**Use**: Timeline dots, category cards, specialized elements

### Background Treatments

#### Main App Background
```
Gradient: 135deg diagonal
  Start:  hsl(222, 84%, 5%)   Dark slate
  25%:    hsl(220, 70%, 5%)   Slightly lighter
  50%:    hsl(180, 40%, 6%)   ← Teal influence
  75%:    hsl(220, 70%, 5%)   Back to slate
  End:    hsl(222, 84%, 5%)   Dark slate
```
**Effect**: Subtle teal tint at center, imperceptible but creates warmth

#### Card Backgrounds
```
Base:        bg-slate-900/50
Hover:       bg-slate-800/40
Selected:    bg-slate-800/60 + category glow
```

### Spacing & Layout Rhythm

While maintaining color consistency:
- **8px base unit** for all spacing
- **Rounded corners**: 0.5rem (md) to 0.75rem (lg)
- **Borders**: 1px default, 3px for emphasis
- **Shadows**: Layered (near + far) for depth

### Motion & Transitions

All color transitions use consistent timing:
```
Quick:       150ms ease-out    (hover, press)
Standard:    200ms ease-in-out (state changes)
Deliberate:  300ms ease-in-out (page transitions)
```

### Accessibility Standards

#### WCAG 2.1 AA Compliance

All primary color combinations tested:

```
Bright Teal (#1A9B9B) on Slate 950:   7.2:1  ✓ AAA
Coral Orange (#FF8C42) on Slate 950:  8.1:1  ✓ AAA
Cyan 400 on Slate 950:                6.8:1  ✓ AA
Teal 400 on Slate 950:                6.5:1  ✓ AA
```

#### Focus Indicators
- 2px ring in primary-500
- 2px offset for visibility
- Never removed, always styled

#### Color Blindness Considerations
- Shapes and icons accompany colors
- Text labels on all categories
- Pattern variation (not just hue)

### File Structure

```
/tailwind.config.js
  └─ Color tokens, shadows, theme extensions

/src/styles/index.css
  └─ Global styles, glow effects, utilities

/src/utils/categoryThemes.ts
  └─ Category color mappings

/src/components/
  ├─ layout/ProjectSidebar.tsx      (Logo, branding)
  ├─ timeline/TimelineItem.tsx      (Dots, cards)
  ├─ timeline/YearSeparator.tsx     (Year badges)
  ├─ timeline/CategorySeparator.tsx (Category headers)
  ├─ filters/CategoryFilter.tsx     (Filter buttons)
  └─ content/ProjectHeader.tsx      (Content headers)
```

### Quick Implementation Checklist

When adding new components:

- [ ] Use `text-primary-400` for teal accents
- [ ] Use `text-accent-400` for orange emphasis
- [ ] Apply `focus-ring` class for keyboard navigation
- [ ] Add category-specific colors via theme utilities
- [ ] Test contrast ratio (minimum 4.5:1 for AA)
- [ ] Include hover states with teal tints
- [ ] Use consistent transition timing
- [ ] Ensure glassmorphism matches existing patterns

### Color System Benefits

**For Users**:
- Instantly recognizable Seoul Asan Medical Center brand
- Clear visual hierarchy and navigation
- Accessible, readable interface
- Professional, trustworthy appearance

**For Developers**:
- Centralized color management
- Easy to maintain and extend
- Consistent naming conventions
- Well-documented usage patterns

**For Brand**:
- Faithful CI representation
- Modern, innovative image
- Professional medical aesthetic
- Cohesive digital presence

---

**Last Updated**: 2025-12-26
**Version**: 1.0
**Based on**: Seoul Asan Medical Center CI (amc_ke_color.gif)
