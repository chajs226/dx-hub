import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import ProjectHeader from '../content/ProjectHeader';
import ContentRenderer from '../content/ContentRenderer';

export default function ContentViewer() {
  const { projects, selectedProjectId, loading } = useApp();

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  if (loading) {
    return (
      <main className="h-full overflow-y-auto custom-scrollbar bg-slate-900">
        <div className="flex items-center justify-center h-full">
          <div className="text-slate-400 text-center">
            <div className="animate-pulse">
              <div className="text-2xl mb-2">로딩 중...</div>
              <p>프로젝트 데이터를 불러오고 있습니다.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!selectedProject) {
    return (
      <main className="h-full overflow-y-auto custom-scrollbar bg-slate-900">
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-center"
          >
            <div className="text-2xl mb-2">프로젝트를 선택하세요</div>
            <p>왼쪽 타임라인에서 프로젝트를 선택하면 상세 정보가 표시됩니다.</p>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="h-full overflow-y-auto custom-scrollbar bg-slate-900">
      <div className="max-w-5xl mx-auto p-6 lg:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Header */}
            <ProjectHeader project={selectedProject} />

            {/* Content Blocks */}
            <ContentRenderer contentBlocks={selectedProject.content_blocks} />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
