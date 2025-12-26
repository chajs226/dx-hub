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

// Seoul Asan Medical Center - Harmonized Teal Spectrum
const categoryBorderColors: Record<string, string> = {
  '의료영상': 'border-l-[#1A9B9B]', // Bright teal
  '자연어처리': 'border-l-cyan-400',
  'NLP': 'border-l-cyan-400',
  '예측분석': 'border-l-teal-400',
  'Deep Learning': 'border-l-cyan-500',
  'Voice AI': 'border-l-emerald-400',
  'Generative AI': 'border-l-[#FF8C42]', // Accent coral orange
};

const categoryGlowColors: Record<string, string> = {
  '의료영상': 'shadow-glow-teal',
  '자연어처리': 'shadow-glow-cyan',
  'NLP': 'shadow-glow-cyan',
  '예측분석': 'shadow-glow-turquoise',
  'Deep Learning': 'shadow-glow-deepTeal',
  'Voice AI': 'shadow-glow-mint',
  'Generative AI': 'shadow-glow-coral',
};

const categoryDotColors: Record<string, string> = {
  '의료영상': 'bg-[#1A9B9B]', // Bright teal
  '자연어처리': 'bg-cyan-400',
  'NLP': 'bg-cyan-400',
  '예측분석': 'bg-teal-400',
  'Deep Learning': 'bg-cyan-500',
  'Voice AI': 'bg-emerald-400',
  'Generative AI': 'bg-[#FF8C42]', // Accent coral orange
};

const categoryDotGlow: Record<string, string> = {
  '의료영상': 'shadow-[0_0_12px_rgba(26,155,155,0.6)]', // Teal glow
  '자연어처리': 'shadow-[0_0_12px_rgba(34,211,238,0.6)]', // Cyan glow
  'NLP': 'shadow-[0_0_12px_rgba(34,211,238,0.6)]',
  '예측분석': 'shadow-[0_0_12px_rgba(45,212,191,0.6)]', // Turquoise glow
  'Deep Learning': 'shadow-[0_0_12px_rgba(6,182,212,0.6)]', // Deep teal glow
  'Voice AI': 'shadow-[0_0_12px_rgba(52,211,153,0.6)]', // Mint glow
  'Generative AI': 'shadow-[0_0_12px_rgba(255,140,66,0.6)]', // Coral glow
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
