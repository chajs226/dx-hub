import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Layers, ChevronDown, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { groupByYear } from '../../utils/dateHelpers';
import { groupByCategory } from '../../utils/filterHelpers';
import TimelineItem from '../timeline/TimelineItem';
import YearSeparator from '../timeline/YearSeparator';
import CategorySeparator from '../timeline/CategorySeparator';
import CategoryFilter from '../filters/CategoryFilter';
import YearSelector from '../filters/YearSelector';

export default function ProjectSidebar() {
  const { filteredProjects, loading, viewMode, setViewMode } = useApp();
  const [filterExpanded, setFilterExpanded] = useState(true);

  const groupedByYear = groupByYear(filteredProjects);
  const years = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const groupedByCategory = groupByCategory(filteredProjects);
  const categories = Object.keys(groupedByCategory).sort();

  return (
    <aside className="h-full bg-slate-950/30 border-r border-slate-800/50 flex flex-col overflow-hidden">
      {/* Header with Logo */}
      <div className="px-5 py-4 border-b border-slate-800/50 bg-slate-950/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-100">DX Hub</h1>
            <p className="text-xs text-slate-400">디지털정보혁신본부 AI 아카이브</p>
          </div>
        </div>

        {/* View Mode Tabs */}
        <div className="flex gap-1 p-1 bg-slate-900/50 rounded-lg border border-slate-800/50">
          <button
            onClick={() => setViewMode('timeline')}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all
              ${viewMode === 'timeline'
                ? 'bg-blue-500/20 text-blue-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/40'
              }
            `}
          >
            <Clock className="w-4 h-4" />
            <span>타임라인</span>
          </button>
          <button
            onClick={() => setViewMode('category')}
            className={`
              flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all
              ${viewMode === 'category'
                ? 'bg-blue-500/20 text-blue-400 shadow-sm'
                : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800/40'
              }
            `}
          >
            <Layers className="w-4 h-4" />
            <span>기술영역</span>
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="px-5 py-3 border-b border-slate-800/50 bg-slate-950/20">
        <button
          onClick={() => setFilterExpanded(!filterExpanded)}
          className="flex items-center justify-between w-full mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-slate-300 transition-colors"
        >
          <span>필터</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${filterExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {filterExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden space-y-3"
            >
              <div>
                <label className="text-xs font-medium text-slate-500 mb-2 block">
                  기술 영역
                </label>
                <CategoryFilter />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-500 mb-2 block">
                  연도
                </label>
                <YearSelector />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Projects List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-5">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              {viewMode === 'timeline' ? '프로젝트 타임라인' : '기술영역별 보기'}
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
              {viewMode === 'timeline' ? (
                // Timeline View: Group by Year
                years.map((year, yearIndex) => {
                  const yearProjects = groupedByYear[year];
                  const isFirstYear = yearIndex === 0;

                  return (
                    <div key={year}>
                      <YearSeparator year={year} />
                      <div className="space-y-0">
                        {yearProjects.map((project, projectIndex) => {
                          const isFirst = isFirstYear && projectIndex === 0;
                          const isLast = yearIndex === years.length - 1 && projectIndex === yearProjects.length - 1;

                          return (
                            <TimelineItem
                              key={project.id}
                              project={project}
                              isFirst={isFirst}
                              isLast={isLast}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                // Category View: Group by Category
                categories.map((category) => (
                  <div key={category}>
                    <CategorySeparator
                      category={category}
                      count={groupedByCategory[category].length}
                    />
                    <div className="space-y-2">
                      {groupedByCategory[category].map((project) => (
                        <TimelineItem key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
