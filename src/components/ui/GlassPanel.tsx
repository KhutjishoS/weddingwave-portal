
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'heavy';
  children: React.ReactNode;
  className?: string;
}

const GlassPanel = ({
  intensity = 'medium',
  children,
  className,
  ...props
}: GlassPanelProps) => {
  const getGlassClass = () => {
    switch (intensity) {
      case 'light':
        return 'glass-light';
      case 'heavy':
        return 'glass-heavy';
      default:
        return 'glass';
    }
  };

  return (
    <div
      className={cn(getGlassClass(), 'rounded-xl transition-all duration-300', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
