import TimelineSidebar from './TimelineSidebar';
import ContentViewer from './ContentViewer';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] h-full gap-0">
      {/* Left: Timeline Sidebar */}
      <TimelineSidebar />

      {/* Right: Content Viewer */}
      <ContentViewer />
    </div>
  );
}
