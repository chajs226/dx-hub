import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { getPrimaryCategory } from '../../utils/categoryThemes';
import { ChevronRight, Calendar } from 'lucide-react';
import type { Project } from '../../types';

interface TimelineItemProps {
  project: Project;
  isFirst?: boolean;
  isLast?: boolean;
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

const categoryDotColors: Record<string, string> = {
  '의료영상': 'bg-blue-500',
  '자연어처리': 'bg-green-500',
  'NLP': 'bg-green-500',
  '예측분석': 'bg-purple-500',
  'Deep Learning': 'bg-indigo-500',
  'Voice AI': 'bg-teal-500',
  'Generative AI': 'bg-pink-500',
};

const categoryDotGlow: Record<string, string> = {
  '의료영상': 'shadow-[0_0_12px_rgba(59,130,246,0.5)]',
  '자연어처리': 'shadow-[0_0_12px_rgba(34,197,94,0.5)]',
  'NLP': 'shadow-[0_0_12px_rgba(34,197,94,0.5)]',
  '예측분석': 'shadow-[0_0_12px_rgba(168,85,247,0.5)]',
  'Deep Learning': 'shadow-[0_0_12px_rgba(99,102,241,0.5)]',
  'Voice AI': 'shadow-[0_0_12px_rgba(20,184,166,0.5)]',
  'Generative AI': 'shadow-[0_0_12px_rgba(236,72,153,0.5)]',
};

export default function TimelineItem({ project, isFirst = false, isLast = false }: TimelineItemProps) {
  const { selectedProjectId, setSelectedProjectId } = useApp();

  const isSelected = selectedProjectId === project.id;
  const primaryCategory = getPrimaryCategory(project.categories);
  const borderColor = categoryBorderColors[primaryCategory] || 'border-l-slate-500';
  const glowColor = categoryGlowColors[primaryCategory] || '';
  const dotColor = categoryDotColors[primaryCategory] || 'bg-slate-500';
  const dotGlowColor = categoryDotGlow[primaryCategory] || '';

  // Format date: "2024-01-15" -> "01.15"
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}.${day}`;
  };

  return (
    <div className="relative flex gap-4">
      {/* Timeline Dot and Line */}
      <div className="relative flex flex-col items-center pt-1.5">
        {/* Top connecting line */}
        {!isFirst && (
          <div className="absolute top-0 w-px h-1.5 bg-gradient-to-b from-slate-700/50 to-transparent" />
        )}

        {/* Timeline Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
          className={`
            relative z-10 w-3 h-3 rounded-full ${dotColor} ${isSelected ? dotGlowColor : ''}
            transition-all duration-300 ring-4 ring-slate-950/90
            ${isSelected ? 'scale-125' : 'scale-100'}
          `}
        />

        {/* Bottom connecting line */}
        {!isLast && (
          <div className="flex-1 w-px bg-gradient-to-b from-slate-700/50 via-slate-700/30 to-slate-800/20 mt-1.5"
               style={{ minHeight: '24px' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className="inline-flex items-center gap-1.5 mb-2 px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700/50"
        >
          <Calendar className="w-3 h-3 text-slate-400" />
          <span className="text-xs font-medium text-slate-300">
            {formatDate(project.date)}
          </span>
        </motion.div>

        {/* Project Card */}
        <motion.div
          layout
          onClick={() => setSelectedProjectId(project.id)}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.99 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
      </div>
    </div>
  );
}
