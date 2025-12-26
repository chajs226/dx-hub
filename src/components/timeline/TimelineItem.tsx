import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { getPrimaryCategory } from '../../utils/categoryThemes';
import { ChevronRight } from 'lucide-react';
import type { Project } from '../../types';

interface TimelineItemProps {
  project: Project;
}

const categoryBorderColors: Record<string, string> = {
  '의료영상': 'border-l-blue-500',
  '자연어처리': 'border-l-green-500',
  'NLP': 'border-l-green-500',
  '예측분석': 'border-l-purple-500',
  'Deep Learning': 'border-l-indigo-500',
  'Voice AI': 'border-l-teal-500',
  'Generative AI': 'border-l-pink-500',
};

const categoryGlowColors: Record<string, string> = {
  '의료영상': 'shadow-glow-blue',
  '자연어처리': 'shadow-glow-green',
  'NLP': 'shadow-glow-green',
  '예측분석': 'shadow-glow-purple',
  'Deep Learning': 'shadow-glow-blue',
  'Voice AI': 'shadow-glow-green',
  'Generative AI': 'shadow-glow-purple',
};

export default function TimelineItem({ project }: TimelineItemProps) {
  const { selectedProjectId, setSelectedProjectId } = useApp();

  const isSelected = selectedProjectId === project.id;
  const primaryCategory = getPrimaryCategory(project.categories);
  const borderColor = categoryBorderColors[primaryCategory] || 'border-l-slate-500';
  const glowColor = categoryGlowColors[primaryCategory] || '';

  return (
    <motion.div
      layout
      onClick={() => setSelectedProjectId(project.id)}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.99 }}
      className={`
        group relative p-4 rounded-lg cursor-pointer transition-all
        border-l-[3px] ${borderColor}
        ${isSelected
          ? `bg-slate-800/60 border border-slate-700/50 ${glowColor}`
          : 'bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/40 hover:border-slate-700/50'
        }
      `}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold mb-1 line-clamp-2 ${isSelected ? 'text-slate-50' : 'text-slate-200 group-hover:text-slate-100'}`}>
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 mb-3 line-clamp-2">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="text-[10px] px-2 py-0.5 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            {project.kpi}
          </div>
        </div>

        <ChevronRight
          className={`w-4 h-4 transition-all flex-shrink-0 mt-1 ${
            isSelected ? 'text-slate-400' : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5'
          }`}
        />
      </div>
    </motion.div>
  );
}
