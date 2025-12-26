interface YearSeparatorProps {
  year: string;
}

export default function YearSeparator({ year }: YearSeparatorProps) {
  return (
    <div className="flex items-center gap-3 mb-3 mt-1">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{year}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-700/50 to-transparent" />
    </div>
  );
}
