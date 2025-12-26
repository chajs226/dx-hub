import ProjectSidebar from './ProjectSidebar';
import ContentViewer from './ContentViewer';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] h-full gap-0">
      {/* Left: Project Sidebar */}
      <ProjectSidebar />

      {/* Right: Content Viewer */}
      <ContentViewer />
    </div>
  );
}
