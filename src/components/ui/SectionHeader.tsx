import { ReactNode } from 'react';
import { SectionBadge } from './SectionBadge';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function SectionHeader({ 
  badge,
  badgeIcon,
  title,
  description,
  className = '',
  centered = true,
  size = 'lg'
}: SectionHeaderProps) {
  const titleSizes = {
    sm: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    md: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
  };

  const descriptionSizes = {
    sm: 'text-base sm:text-lg lg:text-xl',
    md: 'text-lg sm:text-xl lg:text-2xl',
    lg: 'text-xl sm:text-2xl lg:text-3xl'
  };

  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="mb-4 sm:mb-6">
          <SectionBadge icon={badgeIcon}>
            {badge}
          </SectionBadge>
        </div>
      )}
      
      <h2 className={`${titleSizes[size]} font-bold mb-4 sm:mb-6 leading-tight`}>
        {title}
      </h2>
      
      {description && (
        <p className={`${descriptionSizes[size]} text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0`}>
          {description}
        </p>
      )}
    </div>
  );
}

