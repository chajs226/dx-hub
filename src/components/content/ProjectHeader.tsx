import { motion } from 'framer-motion';
import { Calendar, TrendingUp } from 'lucide-react';
import { formatDate } from '../../utils/dateHelpers';
import { getPrimaryCategory } from '../../utils/categoryThemes';
import type { Project } from '../../types';

interface ProjectHeaderProps {
  project: Project;
}

// Seoul Asan Medical Center - Harmonized Teal Gradients
const categoryGradients: Record<string, string> = {
  '의료영상': 'from-[#1A9B9B]/12 via-[#1A9B9B]/6 to-transparent',
  '자연어처리': 'from-cyan-400/12 via-cyan-400/6 to-transparent',
  'NLP': 'from-cyan-400/12 via-cyan-400/6 to-transparent',
  '예측분석': 'from-teal-400/12 via-teal-400/6 to-transparent',
  'Deep Learning': 'from-cyan-500/12 via-cyan-500/6 to-transparent',
  'Voice AI': 'from-emerald-400/12 via-emerald-400/6 to-transparent',
  'Generative AI': 'from-[#FF8C42]/12 via-[#FF8C42]/6 to-transparent',
};

const categoryAccentColors: Record<string, string> = {
  '의료영상': 'text-[#1A9B9B]',
  '자연어처리': 'text-cyan-400',
  'NLP': 'text-cyan-400',
  '예측분석': 'text-teal-400',
  'Deep Learning': 'text-cyan-500',
  'Voice AI': 'text-emerald-400',
  'Generative AI': 'text-[#FF8C42]',
};

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const primaryCategory = getPrimaryCategory(project.categories);
  const gradient = categoryGradients[primaryCategory] || 'from-slate-500/10 via-slate-500/5 to-transparent';
  const accentColor = categoryAccentColors[primaryCategory] || 'text-slate-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-xl border border-slate-800/50 bg-slate-900/50 p-8 mb-8"
    >
      {/* Subtle background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Content */}
      <div className="relative z-10">
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 mb-4">
          <Calendar size={14} className="text-slate-400" />
          <span className="text-xs text-slate-400">{formatDate(project.date)}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-3 leading-tight">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-3xl">
          {project.subtitle}
        </p>

        {/* KPI Card */}
        <div className="inline-flex items-start gap-3 px-5 py-4 rounded-lg bg-slate-800/40 border border-slate-700/50 mb-6">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
            <TrendingUp size={20} className={accentColor} />
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-0.5 uppercase tracking-wider">핵심 성과</div>
            <div className={`text-xl font-semibold ${accentColor}`}>
              {project.kpi}
            </div>
          </div>
        </div>

        {/* Category Badges */}
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat, index) => {
            const catColor = categoryAccentColors[cat] || 'text-slate-400';

            return (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`px-3 py-1 rounded-md bg-slate-800/40 ${catColor} text-xs font-medium border border-slate-700/50`}
              >
                {cat}
              </motion.span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
