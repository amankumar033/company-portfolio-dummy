import { ReactNode } from 'react';

interface BackgroundPatternProps {
  children: ReactNode;
  showGrid?: boolean;
  showFloatingOrbs?: boolean;
  className?: string;
}

export function BackgroundPattern({ 
  children, 
  showGrid = true,
  showFloatingOrbs = true,
  className = ''
}: BackgroundPatternProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating Orbs */}
      {showFloatingOrbs && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Grid Pattern */}
      {showGrid && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

