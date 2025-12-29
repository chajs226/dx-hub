import CategoryFilter from '../filters/CategoryFilter';
import YearSelector from '../filters/YearSelector';
import DxHubLogo from '../ui/DxHubLogo';

export default function FilterBar() {
  return (
    <header className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-xl px-6 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <DxHubLogo />
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
