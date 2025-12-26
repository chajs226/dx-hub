import { motion } from 'framer-motion';

interface YearSeparatorProps {
  year: string;
}

export default function YearSeparator({ year }: YearSeparatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4 mb-4 mt-6 first:mt-0"
    >
      {/* Year Badge - Seoul Asan Medical Center Teal Accent */}
      <div className="relative">
        <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-primary-700/40 shadow-lg">
          <span className="text-sm font-bold text-slate-100 tracking-wide">{year}</span>
        </div>
        {/* Teal-based glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary-600/12 to-primary-800/8 blur-xl -z-10" />
      </div>

      {/* Decorative Line */}
      <div className="flex-1 h-px bg-gradient-to-r from-slate-700/60 via-slate-700/30 to-transparent" />
    </motion.div>
  );
}
