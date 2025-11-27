'use client';

import { createContext, useContext, ReactNode, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';

// Simple smooth scroll context
interface SmoothScrollContextType {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  smoothScroll: (target: string | Element) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);
  const ticking = useRef(false);

  // Optimized scroll tracking with requestAnimationFrame
  useEffect(() => {
    const updateScrollValues = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      scrollY.set(scrollTop);
      scrollYProgress.set(progress);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollValues);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, scrollYProgress]);

  // Enhanced smooth scroll with better performance
  const smoothScroll = (target: string | Element) => {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const contextValue: SmoothScrollContextType = {
    scrollY,
    scrollYProgress,
    smoothScroll
  };

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

// Enhanced scroll-triggered animation
export function ScrollTriggeredAnimation({ 
  children, 
  trigger = 0.1, 
  className = "",
  stagger = 0,
  delay = 0,
  physics = { stiffness: 200, damping: 40, mass: 0.8 }
}: {
  children: ReactNode;
  trigger?: number;
  className?: string;
  stagger?: number;
  delay?: number;
  physics?: { stiffness: number; damping: number; mass: number };
}) {
  const { scrollYProgress } = useSmoothScroll();
  
  const opacity = useTransform(scrollYProgress, [0, trigger], [0, 1]);
  const y = useTransform(scrollYProgress, [0, trigger], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, trigger], [0.8, 1]);
  const rotateX = useTransform(scrollYProgress, [0, trigger], [15, 0]);
  
  // Ultra-smooth spring animations
  const smoothOpacity = useSpring(opacity, { ...physics, restDelta: 0.001 });
  const smoothY = useSpring(y, { ...physics, restDelta: 0.001 });
  const smoothScale = useSpring(scale, { ...physics, restDelta: 0.001 });
  const smoothRotateX = useSpring(rotateX, { ...physics, restDelta: 0.001 });
  
  return (
    <motion.div
      className={className}
      style={{
        opacity: smoothOpacity,
        y: smoothY,
        scale: smoothScale,
        rotateX: smoothRotateX,
        transformOrigin: 'center',
        willChange: 'transform, opacity'
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay + stagger
      }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced parallax element
export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = "",
  physics = { stiffness: 200, damping: 40, mass: 0.8 }
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  physics?: { stiffness: number; damping: number; mass: number };
}) {
  const { scrollY } = useSmoothScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);
  const smoothY = useSpring(y, { ...physics, restDelta: 0.001 });
  
  return (
    <motion.div
      className={className}
      style={{
        y: smoothY,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced floating element
export function FloatingElement({ 
  children, 
  className = "",
  intensity = 20,
  duration = 3,
  physics = { stiffness: 200, damping: 40, mass: 0.8 }
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  duration?: number;
  physics?: { stiffness: number; damping: number; mass: number };
}) {
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { ...physics, restDelta: 0.001 });
  
  // Simple floating animation
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced magnetic element
export function MagneticElement({ 
  children, 
  className = "",
  intensity = 0.3,
  physics = { stiffness: 400, damping: 50, mass: 1 }
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  physics?: { stiffness: number; damping: number; mass: number };
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { ...physics, restDelta: 0.001 });
  const smoothMouseY = useSpring(mouseY, { ...physics, restDelta: 0.001 });
  
  const x = useTransform(smoothMouseX, [-1, 1], [-intensity * 100, intensity * 100]);
  const y = useTransform(smoothMouseY, [-1, 1], [-intensity * 100, intensity * 100]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseXPos = e.clientX - centerX;
    const mouseYPos = e.clientY - centerY;
    
    const normalizedX = mouseXPos / (rect.width / 2);
    const normalizedY = mouseYPos / (rect.height / 2);
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  return (
    <motion.div
      className={className}
      style={{
        x,
        y,
        willChange: 'transform'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
