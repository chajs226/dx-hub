// Content block types
export interface TextBlock {
  type: 'text';
  value: string;
}

export interface ImageBlock {
  type: 'image';
  url: string;
  caption?: string;
}

export interface VideoBlock {
  type: 'video';
  url: string;
  caption?: string;
}

export type ContentBlock = TextBlock | ImageBlock | VideoBlock;

// Project interface
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  categories: string[];
  thumbnail: string;
  kpi: string;
  content_blocks: ContentBlock[];
}

// App state interface
export interface AppState {
  projects: Project[];
  selectedCategory: string;
  selectedYear: string | null;
  selectedProjectId: string | null;
  expandedMedia: ExpandedMedia | null;
}

// Media modal state
export interface ExpandedMedia {
  type: 'image' | 'video';
  url: string;
}

// Category theme
export interface CategoryTheme {
  primary: string;
  border: string;
  gradient: string;
  glow: string;
  text: string;
}
