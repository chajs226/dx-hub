import type { CategoryTheme } from '../types';

/**
 * Category theme mapping for visual styling
 */
export const categoryThemes: Record<string, CategoryTheme> = {
  '의료영상': {
    primary: 'blue-500',
    border: 'border-blue-400',
    gradient: 'from-blue-500/20 to-blue-600/20',
    glow: 'shadow-glow-blue',
    text: 'text-blue-300'
  },
  '자연어처리': {
    primary: 'green-500',
    border: 'border-green-400',
    gradient: 'from-green-500/20 to-green-600/20',
    glow: 'shadow-glow-green',
    text: 'text-green-300'
  },
  'NLP': {
    primary: 'green-500',
    border: 'border-green-400',
    gradient: 'from-green-500/20 to-green-600/20',
    glow: 'shadow-glow-green',
    text: 'text-green-300'
  },
  '예측분석': {
    primary: 'purple-500',
    border: 'border-purple-400',
    gradient: 'from-purple-500/20 to-purple-600/20',
    glow: 'shadow-glow-purple',
    text: 'text-purple-300'
  },
  'Deep Learning': {
    primary: 'indigo-500',
    border: 'border-indigo-400',
    gradient: 'from-indigo-500/20 to-indigo-600/20',
    glow: 'shadow-glow-blue',
    text: 'text-indigo-300'
  },
  'Voice AI': {
    primary: 'teal-500',
    border: 'border-teal-400',
    gradient: 'from-teal-500/20 to-teal-600/20',
    glow: 'shadow-glow-green',
    text: 'text-teal-300'
  },
  'Generative AI': {
    primary: 'pink-500',
    border: 'border-pink-400',
    gradient: 'from-pink-500/20 to-pink-600/20',
    glow: 'shadow-glow-purple',
    text: 'text-pink-300'
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
