import { ReactNode } from 'react';

interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function SectionBadge({ children, className = '', icon }: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-cyan-400 border border-white/20 ${className}`}>
      {icon && icon}
      <span>{children}</span>
    </div>
  );
}

