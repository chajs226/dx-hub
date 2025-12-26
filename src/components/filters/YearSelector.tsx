import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export default function YearSelector() {
  const { selectedYear, setSelectedYear, availableYears } = useApp();

  const years = ['전체', ...availableYears];

  return (
    <div className="flex gap-2 flex-wrap">
      {years.map((year) => {
        const isActive = (year === '전체' && !selectedYear) || selectedYear === year;

        return (
          <motion.button
            key={year}
            onClick={() => setSelectedYear(year === '전체' ? null : year)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus-ring
              ${isActive
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/50 shadow-glow-blue'
                : 'bg-slate-800/40 text-slate-400 border border-slate-700/50 hover:bg-slate-800/60 hover:text-slate-300'
              }
            `}
          >
            {year}
          </motion.button>
        );
      })}
    </div>
  );
}
