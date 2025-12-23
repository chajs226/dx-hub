import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { getPrimaryCategory } from '../../utils/categoryThemes';
import type { Project } from '../../types';

interface TimelineItemProps {
  project: Project;
}

const categoryBorderColors: Record<string, string> = {
  '의료영상': 'border-l-blue-400',
  '자연어처리': 'border-l-green-400',
  'NLP': 'border-l-green-400',
  '예측분석': 'border-l-purple-400',
  'Deep Learning': 'border-l-indigo-400',
  'Voice AI': 'border-l-teal-400',
  'Generative AI': 'border-l-pink-400',
};

const categoryGlowColors: Record<string, string> = {
  '의료영상': 'shadow-blue-500/50',
  '자연어처리': 'shadow-green-500/50',
  'NLP': 'shadow-green-500/50',
  '예측분석': 'shadow-purple-500/50',
  'Deep Learning': 'shadow-indigo-500/50',
  'Voice AI': 'shadow-teal-500/50',
  'Generative AI': 'shadow-pink-500/50',
};

export default function TimelineItem({ project }: TimelineItemProps) {
  const { selectedProjectId, setSelectedProjectId } = useApp();

  const isSelected = selectedProjectId === project.id;
  const primaryCategory = getPrimaryCategory(project.categories);
  const borderColor = categoryBorderColors[primaryCategory] || 'border-l-slate-400';
  const glowColor = categoryGlowColors[primaryCategory] || 'shadow-slate-500/50';

  return (
    <motion.div
      layout
      onClick={() => setSelectedProjectId(project.id)}
      whileHover={{ scale: 1.02 }}
      className={`
        p-4 rounded-lg cursor-pointer transition-all
        border-l-4 ${borderColor}
        ${isSelected
          ? `glassmorphism scale-[1.02] shadow-xl ${glowColor}`
          : 'bg-slate-700/30 border border-slate-600 hover:bg-slate-700/50'
        }
      `}
    >
      <h3 className={`font-semibold mb-1 ${isSelected ? 'text-slate-50' : 'text-slate-200'}`}>
        {project.title}
      </h3>
      <p className="text-sm text-slate-400 mb-2 line-clamp-2">
        {project.subtitle}
      </p>

      <div className="flex flex-wrap gap-1 mb-2">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="text-xs px-2 py-0.5 rounded bg-slate-600/50 text-slate-300"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="text-xs text-slate-500 font-medium">
        {project.kpi}
      </div>
    </motion.div>
  );
}
