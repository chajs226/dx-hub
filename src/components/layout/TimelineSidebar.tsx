import { useApp } from '../../context/AppContext';
import { groupByYear } from '../../utils/dateHelpers';
import TimelineItem from '../timeline/TimelineItem';
import YearSeparator from '../timeline/YearSeparator';

export default function TimelineSidebar() {
  const { filteredProjects, loading } = useApp();

  const groupedProjects = groupByYear(filteredProjects);
  const years = Object.keys(groupedProjects).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <aside className="h-full bg-slate-950/30 border-r border-slate-800/50 overflow-y-auto custom-scrollbar">
      <div className="p-5">
        <div className="mb-5">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
            프로젝트 타임라인
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {filteredProjects.length}개 프로젝트
          </p>
        </div>

        {loading ? (
          <div className="text-slate-400 text-center py-8">
            <div className="animate-pulse space-y-3">
              <div className="h-20 bg-slate-800/50 rounded-lg" />
              <div className="h-20 bg-slate-800/50 rounded-lg" />
              <div className="h-20 bg-slate-800/50 rounded-lg" />
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm text-slate-400 mb-1">프로젝트가 없습니다</p>
            <p className="text-xs text-slate-500">다른 필터를 선택해보세요</p>
          </div>
        ) : (
          <div className="space-y-6">
            {years.map((year) => (
              <div key={year}>
                <YearSeparator year={year} />
                <div className="space-y-2">
                  {groupedProjects[year].map((project) => (
                    <TimelineItem key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
