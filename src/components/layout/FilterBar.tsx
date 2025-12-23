import CategoryFilter from '../filters/CategoryFilter';
import YearSelector from '../filters/YearSelector';

export default function FilterBar() {
  return (
    <header className="bg-slate-800/50 border-b border-slate-700 px-6 py-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-400">
              DX Hub
            </h1>
            <p className="text-sm text-slate-400">
              디지털정보혁신본부 AI 아카이브
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-400 mb-2 block">기술 영역</label>
            <CategoryFilter />
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-2 block">연도</label>
            <YearSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
