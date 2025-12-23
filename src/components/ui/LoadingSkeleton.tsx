interface LoadingSkeletonProps {
  className?: string;
}

export default function LoadingSkeleton({ className = '' }: LoadingSkeletonProps) {
  return (
    <div className={`animate-pulse bg-slate-700 rounded ${className}`} />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600 space-y-3">
      <LoadingSkeleton className="h-5 w-3/4" />
      <LoadingSkeleton className="h-4 w-full" />
      <div className="flex gap-2">
        <LoadingSkeleton className="h-6 w-16" />
        <LoadingSkeleton className="h-6 w-20" />
      </div>
    </div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <LoadingSkeleton className="h-10 w-3/4" />
        <LoadingSkeleton className="h-6 w-full" />
        <LoadingSkeleton className="h-24 w-full" />
      </div>
      <LoadingSkeleton className="h-64 w-full" />
      <div className="space-y-2">
        <LoadingSkeleton className="h-4 w-full" />
        <LoadingSkeleton className="h-4 w-5/6" />
        <LoadingSkeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}
