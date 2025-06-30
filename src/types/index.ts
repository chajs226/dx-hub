export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  publishDate: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}