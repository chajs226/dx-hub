import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  '의료영상': {
    bg: 'bg-blue-500',
    text: 'text-white',
    border: 'border-blue-400',
  },
  '자연어처리': {
    bg: 'bg-green-500',
    text: 'text-white',
    border: 'border-green-400',
  },
  'NLP': {
    bg: 'bg-green-500',
    text: 'text-white',
    border: 'border-green-400',
  },
  '예측분석': {
    bg: 'bg-purple-500',
    text: 'text-white',
    border: 'border-purple-400',
  },
  '전체': {
    bg: 'bg-slate-500',
    text: 'text-white',
    border: 'border-slate-400',
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all border
              ${isActive
                ? `${style.bg} ${style.text} ${style.border} shadow-lg`
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border-slate-600'
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
