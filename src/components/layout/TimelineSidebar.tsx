import { useApp } from '../../context/AppContext';
import { groupByYear } from '../../utils/dateHelpers';
import TimelineItem from '../timeline/TimelineItem';
import YearSeparator from '../timeline/YearSeparator';

export default function TimelineSidebar() {
  const { filteredProjects, loading } = useApp();

  const groupedProjects = groupByYear(filteredProjects);
  const years = Object.keys(groupedProjects).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <aside className="h-full bg-slate-800/50 border-r border-slate-700 overflow-y-auto custom-scrollbar">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-200 mb-4">
          프로젝트 타임라인
        </h2>

        {loading ? (
          <div className="text-slate-400 text-center py-8">
            <div className="animate-pulse">
              <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto mb-2" />
              <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto" />
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-slate-400 text-center py-8">
            <p className="text-lg mb-2">프로젝트가 없습니다.</p>
            <p className="text-sm">다른 필터를 선택해보세요.</p>
          </div>
        ) : (
          <div>
            {years.map((year) => (
              <div key={year}>
                <YearSeparator year={year} />
                <div className="space-y-3">
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
