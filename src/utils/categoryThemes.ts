import type { CategoryTheme } from '../types';

/**
 * Category theme mapping for visual styling
 * Based on Seoul Asan Medical Center CI - Harmonized Teal Spectrum
 */
export const categoryThemes: Record<string, CategoryTheme> = {
  '의료영상': {
    primary: 'medical-teal',
    border: 'border-medical-teal-light',
    gradient: 'from-medical-teal/20 to-medical-teal-dark/20',
    glow: 'shadow-glow-teal',
    text: 'text-[#1A9B9B]' // Bright teal for medical imaging
  },
  '자연어처리': {
    primary: 'medical-cyan',
    border: 'border-medical-cyan-light',
    gradient: 'from-medical-cyan/20 to-medical-cyan-dark/20',
    glow: 'shadow-glow-cyan',
    text: 'text-cyan-400' // Cyan for NLP
  },
  'NLP': {
    primary: 'medical-cyan',
    border: 'border-medical-cyan-light',
    gradient: 'from-medical-cyan/20 to-medical-cyan-dark/20',
    glow: 'shadow-glow-cyan',
    text: 'text-cyan-400'
  },
  '예측분석': {
    primary: 'medical-turquoise',
    border: 'border-medical-turquoise-light',
    gradient: 'from-medical-turquoise/20 to-medical-turquoise-dark/20',
    glow: 'shadow-glow-turquoise',
    text: 'text-teal-400' // Turquoise for predictive analytics
  },
  'Deep Learning': {
    primary: 'medical-deepTeal',
    border: 'border-medical-deepTeal-light',
    gradient: 'from-medical-deepTeal/20 to-medical-deepTeal-dark/20',
    glow: 'shadow-glow-deepTeal',
    text: 'text-cyan-500' // Deep teal for deep learning
  },
  'Voice AI': {
    primary: 'medical-mint',
    border: 'border-medical-mint-light',
    gradient: 'from-medical-mint/20 to-medical-mint-dark/20',
    glow: 'shadow-glow-mint',
    text: 'text-emerald-400' // Mint for voice AI
  },
  'Generative AI': {
    primary: 'medical-coral',
    border: 'border-medical-coral-light',
    gradient: 'from-medical-coral/20 to-medical-coral-dark/20',
    glow: 'shadow-glow-coral',
    text: 'text-[#FF8C42]' // Coral orange for generative AI (accent color)
  },
};

/**
 * Get theme for a category, with fallback to default
 */
export function getCategoryTheme(category: string): CategoryTheme {
  return categoryThemes[category] || {
    primary: 'slate-500',
    border: 'border-slate-400',
    gradient: 'from-slate-500/20 to-slate-600/20',
    glow: 'shadow-glass',
    text: 'text-slate-300'
  };
}

/**
 * Get primary category from a project (first category)
 */
export function getPrimaryCategory(categories: string[]): string {
  return categories[0] || '전체';
}

/**
 * Get Tailwind class names for a category
 */
export function getCategoryClasses(category: string): {
  primary: string;
  border: string;
  gradient: string;
  glow: string;
  text: string;
} {
  const theme = getCategoryTheme(category);
  return {
    primary: `bg-${theme.primary}`,
    border: theme.border,
    gradient: `bg-gradient-to-br ${theme.gradient}`,
    glow: theme.glow,
    text: theme.text
  };
}
