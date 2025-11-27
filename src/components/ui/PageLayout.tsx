import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  theme?: 'dark' | 'light' | 'gradient';
  showFloatingElements?: boolean;
}

export function PageLayout({ 
  children, 
  className = '',
  theme = 'dark',
  showFloatingElements = false
}: PageLayoutProps) {
  const themeClasses = {
    dark: 'bg-black text-white',
    light: 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 text-gray-900',
    gradient: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'
  };

  return (
    <div className={cn(
      'min-h-screen overflow-hidden',
      themeClasses[theme],
      className
    )}>
      {showFloatingElements && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      )}
      {children}
    </div>
  );
}

