import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

const categoryStyles: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  '의료영상': {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/50',
    glow: 'shadow-glow-blue',
  },
  '자연어처리': {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/50',
    glow: 'shadow-glow-green',
  },
  'NLP': {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'border-green-500/50',
    glow: 'shadow-glow-green',
  },
  '예측분석': {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/50',
    glow: 'shadow-glow-purple',
  },
  '전체': {
    bg: 'bg-slate-500/10',
    text: 'text-slate-300',
    border: 'border-slate-500/50',
    glow: '',
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
