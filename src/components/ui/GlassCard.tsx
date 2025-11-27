import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  rounded?: 'xl' | '2xl' | '3xl';
}

export function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  rounded = '2xl'
}: GlassCardProps) {
  const paddingClasses = {
    sm: 'p-3 sm:p-4 lg:p-6',
    md: 'p-4 sm:p-6 lg:p-8',
    lg: 'p-6 sm:p-8 lg:p-12'
  };

  const roundedClasses = {
    xl: 'rounded-xl',
    '2xl': 'rounded-xl sm:rounded-2xl',
    '3xl': 'rounded-2xl sm:rounded-3xl'
  };

  return (
    <div className={cn(
      'bg-white/10 backdrop-blur-sm border border-white/20',
      paddingClasses[padding],
      roundedClasses[rounded],
      hover && 'hover:bg-white/20 transition-all duration-500 hover:scale-105',
      className
    )}>
      {children}
    </div>
  );
}

