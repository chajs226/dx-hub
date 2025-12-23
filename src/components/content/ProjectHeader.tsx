import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { formatDate } from '../../utils/dateHelpers';
import { getPrimaryCategory } from '../../utils/categoryThemes';
import type { Project } from '../../types';

interface ProjectHeaderProps {
  project: Project;
}

const categoryGradients: Record<string, string> = {
  '의료영상': 'from-blue-500/20 to-blue-600/20',
  '자연어처리': 'from-green-500/20 to-green-600/20',
  'NLP': 'from-green-500/20 to-green-600/20',
  '예측분석': 'from-purple-500/20 to-purple-600/20',
  'Deep Learning': 'from-indigo-500/20 to-indigo-600/20',
  'Voice AI': 'from-teal-500/20 to-teal-600/20',
  'Generative AI': 'from-pink-500/20 to-pink-600/20',
};

const categoryTextColors: Record<string, string> = {
  '의료영상': 'text-blue-300',
  '자연어처리': 'text-green-300',
  'NLP': 'text-green-300',
  '예측분석': 'text-purple-300',
  'Deep Learning': 'text-indigo-300',
  'Voice AI': 'text-teal-300',
  'Generative AI': 'text-pink-300',
};

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  const primaryCategory = getPrimaryCategory(project.categories);
  const gradient = categoryGradients[primaryCategory] || 'from-slate-500/20 to-slate-600/20';
  const textColor = categoryTextColors[primaryCategory] || 'text-slate-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-xl p-8 mb-8"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-3 leading-tight">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-slate-300 mb-4 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 text-slate-400 mb-6">
          <Calendar size={16} />
          <span className="text-sm">{formatDate(project.date)}</span>
        </div>

        {/* KPI Highlight Box */}
        <div className="glassmorphism inline-block px-6 py-4 rounded-xl mb-6 border border-white/20">
          <div className="text-sm text-slate-400 mb-1">핵심 성과</div>
          <div className={`text-2xl lg:text-3xl font-bold ${textColor}`}>
            {project.kpi}
          </div>
        </div>

        {/* Category Badges */}
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat, index) => {
            const catTextColor = categoryTextColors[cat] || 'text-slate-300';
            const catGradient = categoryGradients[cat] || 'from-slate-500/20 to-slate-600/20';

            return (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${catGradient} ${catTextColor} text-sm font-medium border border-white/20`}
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
