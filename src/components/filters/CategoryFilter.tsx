import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

// Seoul Asan Medical Center - Harmonized Teal Spectrum for Categories
const categoryStyles: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  '의료영상': {
    bg: 'bg-[#1A9B9B]/15',
    text: 'text-[#1A9B9B]',
    border: 'border-[#1A9B9B]/50',
    glow: 'shadow-glow-teal',
  },
  '자연어처리': {
    bg: 'bg-cyan-400/15',
    text: 'text-cyan-400',
    border: 'border-cyan-400/50',
    glow: 'shadow-glow-cyan',
  },
  'NLP': {
    bg: 'bg-cyan-400/15',
    text: 'text-cyan-400',
    border: 'border-cyan-400/50',
    glow: 'shadow-glow-cyan',
  },
  '예측분석': {
    bg: 'bg-teal-400/15',
    text: 'text-teal-400',
    border: 'border-teal-400/50',
    glow: 'shadow-glow-turquoise',
  },
  'Deep Learning': {
    bg: 'bg-cyan-500/15',
    text: 'text-cyan-500',
    border: 'border-cyan-500/50',
    glow: 'shadow-glow-deepTeal',
  },
  'Voice AI': {
    bg: 'bg-emerald-400/15',
    text: 'text-emerald-400',
    border: 'border-emerald-400/50',
    glow: 'shadow-glow-mint',
  },
  'Generative AI': {
    bg: 'bg-[#FF8C42]/15',
    text: 'text-[#FF8C42]',
    border: 'border-[#FF8C42]/50',
    glow: 'shadow-glow-coral',
  },
  '전체': {
    bg: 'bg-primary-500/15',
    text: 'text-primary-400',
    border: 'border-primary-500/50',
    glow: 'shadow-glow-teal',
  },
};

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, availableCategories } = useApp();

  return (
    <div className="flex gap-2 flex-wrap">
      {availableCategories.map((category) => {
        const isActive = selectedCategory === category;
        const style = categoryStyles[category] || categoryStyles['전체'];

        return (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus-ring
              ${isActive
                ? `${style.bg} ${style.text} border ${style.border} ${style.glow}`
                : 'bg-slate-800/40 text-slate-400 border border-slate-700/50 hover:bg-slate-800/60 hover:text-slate-300'
              }
            `}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
