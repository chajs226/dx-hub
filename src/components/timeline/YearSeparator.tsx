interface YearSeparatorProps {
  year: string;
}

export default function YearSeparator({ year }: YearSeparatorProps) {
  return (
    <div className="flex items-center gap-3 my-6">
      <span className="text-lg font-bold text-slate-300">{year}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent" />
    </div>
  );
}
