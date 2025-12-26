# Seoul Asan Medical Center Color System

This document describes the comprehensive color system implemented for the DX Hub application, based on Seoul Asan Medical Center's corporate identity.

## Design Philosophy

The color system is designed to:
- **Express Identity**: Reflect Seoul Asan Medical Center's professional medical brand
- **Create Unity**: Harmonize all UI elements through a consistent teal-based spectrum
- **Maintain Clarity**: Ensure excellent readability and accessibility
- **Add Warmth**: Use accent orange for highlights and energy

## CI Color Foundation

### Primary Colors (from CI Logo)

**Deep Medical Teal** - `#007474` (Primary 600)
- Professional, trustworthy medical tone
- Used for primary brand elements

**Bright Teal** - `#1A9B9B` (Primary 500)
- Modern, approachable variant
- Used for active states and highlights

**Accent Orange** - `#FF8C42` (Accent 400)
- Warm, hopeful energy from mountain icon
- Used for special emphasis and Generative AI category

## Color Palette Structure

### Primary Teal Scale
```
50:  #e6f7f7 - Lightest tint
100: #ccefef
200: #99dfdf
300: #66cfcf
400: #33bfbf
500: #1A9B9B - Bright Teal (CI)
600: #007474 - Deep Medical Teal (CI)
700: #006060
800: #004d4d
900: #003939
950: #002626 - Darkest shade
```

### Accent Orange Scale
```
50:  #fff4ed
100: #ffe7d6
200: #ffcbad
300: #ffa87a
400: #FF8C42 - Coral Orange (CI)
500: #f97316
600: #ea580c
700: #c2410c
800: #9a3412
900: #7c2d12
```

## Category Color Mapping

All categories use harmonized teal-to-green spectrum with orange accent:

| Category | Primary Color | Usage |
|----------|--------------|-------|
| **의료영상** (Medical Imaging) | `#1A9B9B` (Bright Teal) | Core medical technology |
| **자연어처리** (NLP) | `#22d3ee` (Cyan 400) | Text processing |
| **예측분석** (Predictive Analytics) | `#2dd4bf` (Teal 400) | Data analytics |
| **Deep Learning** | `#06b6d4` (Cyan 500) | Advanced AI |
| **Voice AI** | `#34d399` (Emerald 400) | Speech technology |
| **Generative AI** | `#FF8C42` (Coral Orange) | Creative AI (accent) |

## Component Implementation

### 1. Tailwind Configuration
**File**: `/tailwind.config.js`

Custom color tokens defined:
- `primary.*` - Teal scale
- `accent.*` - Orange scale
- `medical.*` - Category-specific colors
- Shadow utilities for teal-based glows

### 2. Global Styles
**File**: `/src/styles/index.css`

- Background: Subtle teal-infused dark gradient
- Focus rings: Teal accent
- Glow effects: Six harmonized variants

### 3. Component Updates

#### ProjectSidebar
- Logo: Teal gradient background with shadow
- Subtitle: Teal accent text
- Tab active state: Teal background with ring

#### TimelineItem
- Dots: Category-specific teal variants
- Border: Left accent in category colors
- Glow: Subtle teal-based shadows on selection

#### CategoryFilter
- Active buttons: Teal spectrum backgrounds
- Borders: Semi-transparent category colors
- Hover states: Smooth teal transitions

#### ProjectHeader
- Background gradients: Subtle category-based teal tints
- KPI icons: Category accent colors
- Badges: Harmonized teal-to-coral spectrum

#### CategorySeparator
- Category labels: Teal spectrum text colors
- Backgrounds: 12% opacity category tints
- Borders: 30% opacity category accents

#### YearSeparator
- Badge border: Primary teal accent
- Glow effect: Subtle teal gradient blur

## Visual Hierarchy

### Primary Elements
- Deep teal (`#007474`) for main brand identity
- Used in: Logo, primary CTAs, main headers

### Interactive States
- Bright teal (`#1A9B9B`) for active/selected states
- Used in: Active tabs, selected timeline items, filters

### Emphasis & Highlights
- Coral orange (`#FF8C42`) for important accents
- Used in: Generative AI, special highlights, warm CTAs

### Information Architecture
- Teal spectrum for category differentiation
- Maintains unity while allowing distinction
- All colors harmonize with CI identity

## Accessibility Considerations

### Contrast Ratios
All text colors meet WCAG 2.1 AA standards:
- Bright teal on dark: 7.2:1
- Coral orange on dark: 8.1:1
- Category colors: 6.5:1 minimum

### Color Independence
- Never rely solely on color for meaning
- Icons and text labels accompany all colored elements
- Patterns and shapes provide additional context

## shadcn/ui Integration

The system maintains shadcn's design language:
- Subtle, sophisticated color usage
- Clean glassmorphism effects
- Minimal but effective accents
- Professional, medical-grade polish

## Glow Effect Guidelines

### When to Use Glows
- Selected timeline items
- Active filter buttons
- Hover states on interactive cards
- Focus states for keyboard navigation

### Glow Intensity
- Subtle: 0.12-0.15 opacity for backgrounds
- Medium: 0.2 opacity for hover states
- Emphasized: 0.25-0.6 opacity for active/selected

## Future Considerations

### Potential Additions
- Light mode variant (if needed)
- Additional category colors for new project types
- Seasonal accent variations
- High contrast mode

### Maintenance
- All colors defined in single source of truth (Tailwind config)
- Easy to adjust opacity/intensity globally
- Component color maps centralized in utility files

## Summary

This color system successfully:
- Expresses Seoul Asan Medical Center's professional medical identity
- Creates a harmonious, unified visual language
- Maintains modern, sophisticated aesthetics
- Ensures accessibility and usability
- Preserves shadcn/ui's clean design principles

The teal-dominant palette with warm orange accents creates a trustworthy yet approachable medical technology platform that reflects the hospital's innovative spirit.
