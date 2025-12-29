import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import ProjectHeader from '../content/ProjectHeader';
import ContentRenderer from '../content/ContentRenderer';
import Footer from './Footer';
import { FileSearch } from 'lucide-react';

export default function ContentViewer() {
  const { projects, selectedProjectId, loading } = useApp();

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  if (loading) {
    return (
      <main className="h-full overflow-y-auto custom-scrollbar bg-slate-950/50">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-pulse space-y-3">
              <div className="w-12 h-12 bg-slate-800 rounded-lg mx-auto" />
              <div className="h-4 bg-slate-800 rounded w-32 mx-auto" />
              <div className="h-3 bg-slate-800 rounded w-48 mx-auto" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!selectedProject) {
    return (
      <main className="h-full overflow-y-auto custom-scrollbar bg-slate-950/50">
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileSearch className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-lg font-medium text-slate-300 mb-2">프로젝트를 선택하세요</h3>
            <p className="text-sm text-slate-500">왼쪽 타임라인에서 프로젝트를 선택하면 상세 정보가 표시됩니다.</p>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="h-full overflow-y-auto custom-scrollbar bg-slate-950/50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-6 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Project Header */}
              <ProjectHeader project={selectedProject} />

              {/* Content Blocks */}
              <ContentRenderer contentBlocks={selectedProject.content_blocks} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
