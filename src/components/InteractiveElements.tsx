'use client';

import { useEffect, useState, useRef } from 'react';

// Scroll Progress Indicator
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

// Animated Counter
export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  className = "" 
}: { 
  end: number; 
  duration?: number; 
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className={`stat-counter ${className}`}>
      {count}+
    </span>
  );
}

// Interactive Card with Hover Effects
export function InteractiveCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Check if the mouse is over a form element
      const target = e.target as HTMLElement;
      const isFormElement = target.tagName === 'INPUT' || 
                           target.tagName === 'SELECT' || 
                           target.tagName === 'TEXTAREA' ||
                           target.closest('input, select, textarea');
      
      // Don't apply hover effects if mouse is over form elements
      if (isFormElement) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`card-3d interactive-card ${className}`}
      style={{ transition: 'transform 0.1s ease' }}
    >
      {children}
    </div>
  );
}

// Scroll-triggered Animation Wrapper
export function ScrollAnimation({ 
  children, 
  animation = "fade-in",
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode; 
  animation?: "fade-in" | "slide-in-up" | "slide-in-left" | "slide-in-right" | "scale-in" | "bounce-in";
  delay?: number;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref}
      className={`${isVisible ? animation : 'opacity-0'} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: isVisible ? 'none' : 'translateY(30px)',
        opacity: isVisible ? 1 : 0
      }}
    >
      {children}
    </div>
  );
}

// Interactive Button with Ripple Effect
export function InteractiveButton({ 
  children, 
  onClick,
  className = "",
  ...props 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`btn-interactive relative overflow-hidden ${className}`}
      {...props}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s'
          }}
        />
      ))}
      {children}
    </button>
  );
}

// Interactive Tooltip
export function Tooltip({ 
  children, 
  content,
  className = ""
}: { 
  children: React.ReactNode; 
  content: string;
  className?: string;
}) {
  return (
    <div className={`tooltip ${className}`} data-tooltip={content}>
      {children}
    </div>
  );
}

// Interactive Modal
export function Modal({ 
  isOpen, 
  onClose, 
  children,
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode;
  title?: string;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {title && (
          <h2 className="text-xl font-bold mb-4">{title}</h2>
        )}
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// Interactive Tabs
export function Tabs({ 
  tabs, 
  defaultTab = 0 
}: { 
  tabs: Array<{ label: string; content: React.ReactNode }>;
  defaultTab?: number;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="tab-container">
      <div className="flex border-b mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tab-button px-4 py-2 ${activeTab === index ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content active">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

// Interactive Timeline
export function Timeline({ 
  items 
}: { 
  items: Array<{ title: string; description: string; date: string }>;
}) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// Interactive Progress Bar
export function ProgressBar({ 
  progress, 
  label,
  className = ""
}: { 
  progress: number; 
  label?: string;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex justify-between text-sm">
          <span>{label}</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className="progress-bar h-2">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

// Interactive Loading Spinner
export function LoadingSpinner({ 
  size = "md",
  className = ""
}: { 
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]} ${className}`} />
  );
}

// Interactive Image with Zoom
export function InteractiveImage({ 
  src, 
  alt,
  className = ""
}: { 
  src: string; 
  alt: string;
  className?: string;
}) {
  return (
    <div className={`image-hover rounded-lg overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// Interactive Form Input
export function InteractiveInput({ 
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 ${props.className || ''}`}
    />
  );
}

// Interactive Navigation Link
export function InteractiveNavLink({ 
  children, 
  href,
  className = ""
}: { 
  children: React.ReactNode; 
  href: string;
  className?: string;
}) {
  return (
    <a 
      href={href}
      className={`nav-interactive ${className}`}
    >
      {children}
    </a>
  );
}







