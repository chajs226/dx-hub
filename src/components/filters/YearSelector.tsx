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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all
              ${isActive
                ? 'bg-blue-500 text-white shadow-glow-blue border-blue-400'
                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 border-slate-600'
              }
              border
            `}
          >
            {year}
          </motion.button>
        );
      })}
    </div>
  );
}
