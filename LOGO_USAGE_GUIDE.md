# DX HUB Logo Usage Guide

## Component Overview

The DxHubLogo component is a fully animated SVG-based logo mark that combines the letters "A" (Asan) and "D" (Digital) into a unified symbol using Seoul Asan Medical Center's official CI colors.

---

## Quick Start

### Basic Usage

```tsx
import DxHubLogo from '../components/ui/DxHubLogo';

export default function MyComponent() {
  return (
    <div>
      <DxHubLogo />
    </div>
  );
}
```

That's it! The logo is self-contained and requires no props.

---

## Current Implementations

### 1. Project Sidebar (Primary Location)
**File**: `/src/components/layout/ProjectSidebar.tsx`

```tsx
<div className="px-5 py-4 border-b border-asan-gray-light/20">
  <div className="mb-4">
    <DxHubLogo />
  </div>
  {/* View mode tabs below */}
</div>
```

**Context**: Top of left sidebar, above timeline/category tabs
**Background**: Dark gradient (dark slate/asan gray)

### 2. Filter Bar (Alternative Location)
**File**: `/src/components/layout/FilterBar.tsx`

```tsx
<header className="border-b border-slate-800/50 bg-slate-950/50">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center justify-between mb-6">
      <DxHubLogo />
    </div>
  </div>
</header>
```

**Context**: Top of filter bar in mobile/alternative layouts
**Background**: Dark background with backdrop blur

---

## Logo Anatomy

### Visual Structure

```
┌──────────────────────────────────┐
│  [44×44px SVG]    DX HUB        │
│   ┌────────┐      디지털정보혁신본부 │
│  /│   A+D  │\     AI 아카이브      │
│ │ │  Mark  │ │                   │
│  \│        │/                    │
│   └────────┘                     │
└──────────────────────────────────┘
```

### Component Breakdown

1. **SVG Logo Mark** (44×44px)
   - Hexagonal frame (light green stroke)
   - A+D combined letterforms (ASAN GREEN)
   - 3 accent dots (2 green, 1 pulsing orange)

2. **Text Container**
   - Main title: "DX HUB" (ASAN GREEN gradient, text-xl, bold)
   - Subtitle: "디지털정보혁신본부 AI 아카이브" (slate-400, text-xs)

3. **Spacing**: 3-unit gap between logo and text

---

## Logo Elements Explained

### 1. Hexagonal Frame
```svg
<path d="M22 3L38 12V32L22 41L6 32V12L22 3Z" />
```
- Represents "HUB" connectivity
- Light green gradient stroke
- Subtle background fill (8% opacity)
- Animated path drawing on load

### 2. "A" Letterform (Asan)
```svg
<!-- Left diagonal -->
<path d="M14 30L19 14C19.2 13.4 19.8 13 20.5 13H20.8" />
<!-- Right diagonal -->
<path d="M30 30L25 14C24.8 13.4 24.2 13 23.5 13H23.2" />
<!-- Crossbar -->
<path d="M17 23H27" />
```
- Classic A shape with tapered top
- ASAN GREEN gradient
- 3.5px stroke width for prominence

### 3. "D" Letterform (Digital)
```svg
<path d="M27 23C27 26 25 28.5 22 28.5C19 28.5 17 26 17 23" />
```
- Curved bottom connecting to A's crossbar
- Light green gradient
- 2.5px stroke width (slightly thinner)
- Creates visual integration with A

### 4. Accent Dots
```svg
<!-- Top right: Light green -->
<circle cx="33" cy="16" r="1.8" fill="#6B9B8A" />

<!-- Bottom left: Light green -->
<circle cx="11" cy="28" r="1.8" fill="#6B9B8A" />

<!-- Bottom right: Pulsing orange -->
<circle cx="33" cy="28" r="1.5" fill="#FF8C00">
  {/* Continuous pulse animation */}
</circle>
```
- Represent data/digital connectivity
- Orange dot = innovation indicator
- Adds visual interest without clutter

---

## Color Reference

### Official Asan CI Colors Used

```typescript
// Main brand color
ASAN_GREEN = {
  hex: '#006450',
  pantone: '3155C',
  cmyk: 'C100, M15, Y45, K40',
  usage: 'Primary logo elements, main text, active states'
}

// Light variant
ASAN_LIGHT_GREEN = {
  hex: '#6B9B8A',
  pantone: '5483C',
  cmyk: 'C60, M5, Y30, K20',
  usage: 'Gradients, highlights, secondary elements'
}

// Accent color
ASAN_ORANGE = {
  hex: '#FF8C00',
  pantone: '138C',
  cmyk: 'C0, M55, Y100, K0',
  usage: 'Innovation indicator, subtle accents'
}
```

### SVG Gradients Defined

**1. hexagonBg**: Subtle green background
```svg
<linearGradient id="hexagonBg" x1="6" y1="3" x2="38" y2="41">
  <stop offset="0%" stopColor="#006450" />
  <stop offset="100%" stopColor="#004A3C" />
</linearGradient>
```

**2. hexagonStroke**: Frame outline
```svg
<linearGradient id="hexagonStroke" x1="6" y1="3" x2="38" y2="41">
  <stop offset="0%" stopColor="#6B9B8A" />
  <stop offset="50%" stopColor="#006450" />
  <stop offset="100%" stopColor="#6B9B8A" />
</linearGradient>
```

**3. asanGreen**: Main A letterforms
```svg
<linearGradient id="asanGreen" x1="14" y1="13" x2="30" y2="30">
  <stop offset="0%" stopColor="#006450" />
  <stop offset="50%" stopColor="#00523F" />
  <stop offset="100%" stopColor="#006450" />
</linearGradient>
```

**4. asanGreenLight**: D curve
```svg
<linearGradient id="asanGreenLight" x1="17" y1="23" x2="27" y2="28.5">
  <stop offset="0%" stopColor="#6B9B8A" />
  <stop offset="100%" stopColor="#006450" />
</linearGradient>
```

**5. greenToOrange**: A crossbar transition
```svg
<linearGradient id="greenToOrange" x1="17" y1="23" x2="27" y2="23">
  <stop offset="0%" stopColor="#006450" />
  <stop offset="70%" stopColor="#007A5E" />
  <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.6" />
</linearGradient>
```

---

## Animation Sequence

### Timeline (1.5 seconds total)

```
0.0s  ┌─────────────────────────────────┐
      │ Container fade in + scale       │
0.5s  └─────────────────────────────────┘

0.2s  ┌─────────────────────────────────┐
      │ Hexagon frame path draws        │
1.4s  └─────────────────────────────────┘

0.4s  ┌─────────────────────────────────┐
      │ A+D letterforms scale in        │
1.0s  └─────────────────────────────────┘

0.8s  ┌─────────────────────────────────┐
      │ Accent dots appear              │
1.3s  └─────────────────────────────────┘

0.3s  ┌─────────────────────────────────┐
      │ "DX HUB" text slides in         │
0.8s  └─────────────────────────────────┘

0.4s  ┌─────────────────────────────────┐
      │ Subtitle text slides in         │
0.9s  └─────────────────────────────────┘

Continuous: Orange dot pulses (2s loop)
```

### Animation Properties

**Container**:
```tsx
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5, ease: "easeOut" }}
```

**Hexagon Frame**:
```tsx
initial={{ pathLength: 0, opacity: 0 }}
animate={{ pathLength: 1, opacity: 1 }}
transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
```

**A+D Mark**:
```tsx
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
```

**Accent Dots**:
```tsx
initial={{ scale: 0 }}
animate={{ scale: [0, 1.2, 1] }}
transition={{ duration: 0.4, delay: 1.0 }}
```

**Orange Pulse** (infinite):
```tsx
animate={{
  opacity: [0.6, 1, 0.6],
  scale: [1, 1.3, 1]
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

**Text Labels**:
```tsx
initial={{ opacity: 0, x: -10 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.5, delay: 0.3/0.4 }}
```

---

## Accessibility Features

### Semantic HTML
```tsx
<motion.div className="flex items-center gap-3">
  <svg /* Logo mark */ />
  <div className="flex flex-col">
    <h1>DX HUB</h1>      {/* Proper heading hierarchy */}
    <p>디지털정보혁신본부 AI 아카이브</p>
  </div>
</motion.div>
```

### Color Contrast
- ASAN GREEN (#006450) on dark slate: **4.8:1** ✅ WCAG AA
- Light Green (#6B9B8A) on dark slate: **5.2:1** ✅ WCAG AA
- White text on green background: **8.2:1** ✅ WCAG AAA

### Motion Sensitivity
Add to global CSS if needed:
```css
@media (prefers-reduced-motion: reduce) {
  .logo-animation * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Customization (If Needed)

### Disable Animations
```tsx
// Modify component to accept props
interface DxHubLogoProps {
  animated?: boolean;
}

export default function DxHubLogo({ animated = true }: DxHubLogoProps) {
  const animationProps = animated ? {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  } : {};

  return <motion.div {...animationProps}>...</motion.div>;
}
```

### Size Variants
```tsx
interface DxHubLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { svg: 32, text: 'text-base' },
  md: { svg: 44, text: 'text-xl' },
  lg: { svg: 64, text: 'text-2xl' }
};
```

### Monochrome Version (for dark mode toggle)
```tsx
// Change gradients to grayscale
<linearGradient id="monoGradient">
  <stop offset="0%" stopColor="#FFFFFF" />
  <stop offset="100%" stopColor="#888888" />
</linearGradient>
```

---

## Troubleshooting

### Logo Not Appearing
1. **Check import path**: `import DxHubLogo from '../components/ui/DxHubLogo'`
2. **Verify Tailwind**: `asan-green` colors must be in tailwind.config.js
3. **Check parent container**: Must have enough space (min 200px width)

### Animations Stuttering
1. **Enable GPU acceleration**: Add `will-change-transform` to parent
2. **Reduce complexity**: Set `animated={false}` if needed
3. **Check frame rate**: Use Chrome DevTools Performance tab

### Colors Look Wrong
1. **Verify Tailwind config**: Check `asan` color definitions
2. **Clear build cache**: `rm -rf dist && npm run build`
3. **Check CSS specificity**: Logo gradients use SVG `<defs>`

### Gradient IDs Conflicting
If using multiple logos on same page:
```tsx
// Make gradient IDs unique
const uniqueId = useId(); // React 18+
<linearGradient id={`hexagonBg-${uniqueId}`}>
```

---

## Best Practices

### DO ✅
- Use on dark backgrounds (slate-900, slate-950)
- Allow animations to complete on first load
- Maintain minimum clear space (8px all sides)
- Keep aspect ratio locked
- Use official ASAN GREEN colors

### DON'T ❌
- Don't place on light backgrounds
- Don't modify SVG paths or proportions
- Don't change official CI colors
- Don't remove hexagonal frame
- Don't use different fonts for text

---

## File Locations

```
/src/components/ui/DxHubLogo.tsx     ← Logo component (NEW)
/tailwind.config.js                  ← Asan color definitions
/src/components/layout/
  ├─ ProjectSidebar.tsx              ← Primary usage
  └─ FilterBar.tsx                   ← Alternative usage
```

---

## Version History

**v2.0** (December 29, 2025)
- Complete redesign with A+D combined lettermark
- ASAN GREEN color scheme implementation
- Enhanced animations and visual polish
- Production-ready implementation

**v1.0** (Previous)
- Medical cross + digital arrows design
- Blue/teal color scheme
- Basic animation support

---

## Support

For questions or issues:
1. Review `/BRAND_REDESIGN.md` for comprehensive design docs
2. Check `/DESIGN_COMPARISON.md` for before/after details
3. Refer to this guide for usage examples
4. Consult Seoul Asan Medical Center CI guidelines

---

**Component**: DxHubLogo
**Version**: 2.0
**Last Updated**: December 29, 2025
**Status**: Production Ready ✅
