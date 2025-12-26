import CategoryFilter from '../filters/CategoryFilter';
import YearSelector from '../filters/YearSelector';
import { Sparkles } from 'lucide-react';

export default function FilterBar() {
  return (
    <header className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-xl px-6 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-100">
                DX Hub
              </h1>
              <p className="text-xs text-slate-400">
                디지털정보혁신본부 AI 아카이브
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-400 mb-2.5 block uppercase tracking-wider">
              기술 영역
            </label>
            <CategoryFilter />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-400 mb-2.5 block uppercase tracking-wider">
              연도
            </label>
            <YearSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
