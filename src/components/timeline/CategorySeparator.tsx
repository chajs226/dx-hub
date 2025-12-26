import { Layers } from 'lucide-react';

interface CategorySeparatorProps {
  category: string;
  count: number;
}

// Seoul Asan Medical Center - Harmonized Teal Spectrum
const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  '의료영상': {
    bg: 'bg-[#1A9B9B]/12',
    text: 'text-[#1A9B9B]',
    border: 'border-[#1A9B9B]/30',
  },
  '자연어처리': {
    bg: 'bg-cyan-400/12',
    text: 'text-cyan-400',
    border: 'border-cyan-400/30',
  },
  'NLP': {
    bg: 'bg-cyan-400/12',
    text: 'text-cyan-400',
    border: 'border-cyan-400/30',
  },
  '예측분석': {
    bg: 'bg-teal-400/12',
    text: 'text-teal-400',
    border: 'border-teal-400/30',
  },
  'Deep Learning': {
    bg: 'bg-cyan-500/12',
    text: 'text-cyan-500',
    border: 'border-cyan-500/30',
  },
  'Voice AI': {
    bg: 'bg-emerald-400/12',
    text: 'text-emerald-400',
    border: 'border-emerald-400/30',
  },
  'Generative AI': {
    bg: 'bg-[#FF8C42]/12',
    text: 'text-[#FF8C42]',
    border: 'border-[#FF8C42]/30',
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
