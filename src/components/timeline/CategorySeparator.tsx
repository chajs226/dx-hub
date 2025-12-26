import { Layers } from 'lucide-react';

interface CategorySeparatorProps {
  category: string;
  count: number;
}

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  '의료영상': {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
  },
  '자연어처리': {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/30',
  },
  'NLP': {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/30',
  },
  '예측분석': {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
  },
};

export default function CategorySeparator({ category, count }: CategorySeparatorProps) {
  const style = categoryStyles[category] || {
    bg: 'bg-slate-500/10',
    text: 'text-slate-300',
    border: 'border-slate-500/30',
  };

  return (
    <div className={`flex items-center gap-2 mb-3 mt-1 px-2 py-1.5 rounded-lg border ${style.bg} ${style.border}`}>
      <Layers className={`w-3.5 h-3.5 ${style.text}`} />
      <span className={`text-xs font-semibold ${style.text} uppercase tracking-wider flex-1`}>
        {category}
      </span>
      <span className={`text-xs ${style.text} opacity-60`}>
        {count}
      </span>
    </div>
  );
}
