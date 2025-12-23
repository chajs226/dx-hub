/**
 * Application constants
 */

export const CATEGORY_OPTIONS = [
  '전체',
  '의료영상',
  '자연어처리',
  '예측분석',
] as const;

export const DEFAULT_CATEGORY = '전체';

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;
