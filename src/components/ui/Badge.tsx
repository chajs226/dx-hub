interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

const variantStyles = {
  default: 'bg-slate-600/50 text-slate-300',
  primary: 'bg-blue-500/20 text-blue-300 border border-blue-400/30',
  success: 'bg-green-500/20 text-green-300 border border-green-400/30',
  warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
