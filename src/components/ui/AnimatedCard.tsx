
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover3D?: boolean;
  hoverScale?: boolean;
  className?: string;
}

const AnimatedCard = ({
  children,
  hover3D = true,
  hoverScale = true,
  className,
  ...props
}: AnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle 3D hover effect
  useEffect(() => {
    setIsMounted(true);
    
    if (!hover3D || !cardRef.current) return;
    
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };
    
    if (hover3D) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (hover3D) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [hover3D]);

  const hoverClasses = cn(
    'transition-all duration-300 ease-out',
    hoverScale && 'hover:scale-[1.02]',
    hover3D && 'transform-gpu'
  );

  return (
    <div
      ref={cardRef}
      className={cn(
        'bg-card text-card-foreground rounded-xl shadow-soft overflow-hidden',
        hoverClasses,
        'animate-scale-in',
        className
      )}
      style={{ 
        opacity: isMounted ? 1 : 0,
        transitionDuration: '0.5s',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
