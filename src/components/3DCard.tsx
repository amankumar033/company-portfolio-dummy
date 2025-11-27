'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  title?: string;
  description?: string;
  gradient?: string;
  features?: string[];
  onClick?: () => void;
  delay?: number;
  interactive?: boolean;
}

export default function Card3D({
  children,
  className = "",
  icon: Icon,
  title,
  description,
  gradient = "from-cyan-500 to-blue-500",
  features = [],
  onClick,
  delay = 0,
  interactive = true
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Motion values for smooth 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  // Smooth spring animations
  const smoothRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 30 });

  // Transform values for 3D rotation
  const cardRotateX = useTransform(smoothRotateX, [-1, 1], [15, -15]);
  const cardRotateY = useTransform(smoothRotateY, [-1, 1], [-15, 15]);

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseXPos = e.clientX - centerX;
    const mouseYPos = e.clientY - centerY;
    
    // Normalize mouse position to -1 to 1 range
    const normalizedX = mouseXPos / (rect.width / 2);
    const normalizedY = mouseYPos / (rect.height / 2);
    
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    
    // Update rotation based on mouse position
    rotateX.set(normalizedY);
    rotateY.set(normalizedX);
    
    setMousePosition({ x: mouseXPos, y: mouseYPos });
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    if (!interactive) return;
    
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  // Handle mouse enter
  const handleMouseEnter = () => {
    if (!interactive) return;
    
    setIsHovered(true);
    scale.set(1.05);
  };

  // Handle mouse down
  const handleMouseDown = () => {
    if (!interactive) return;
    
    setIsPressed(true);
    scale.set(0.98);
  };

  // Handle mouse up
  const handleMouseUp = () => {
    if (!interactive) return;
    
    setIsPressed(false);
    scale.set(isHovered ? 1.05 : 1);
  };

  // Auto-rotation effect when not hovered
  useEffect(() => {
    if (!interactive) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      if (!isHovered && !isPressed) {
        time += 0.01;
        const autoRotateX = Math.sin(time) * 0.1;
        const autoRotateY = Math.cos(time) * 0.1;
        
        rotateX.set(autoRotateX);
        rotateY.set(autoRotateY);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered, isPressed, rotateX, rotateY, interactive]);

  return (
    <motion.div
      ref={cardRef}
      className={`3d-card group relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay
      }}
      whileHover={interactive ? { scale: 1.05 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
    >
      {/* 3D Transform Container */}
      <motion.div
        className="w-full h-full"
        style={{
          rotateX: cardRotateX,
          rotateY: cardRotateY,
          scale: smoothScale,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Main Card Content */}
        <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 overflow-hidden">
          
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5 }}
          />
          
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.5 }}
          />
          
          {/* Particle Effects */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-full h-full bg-cyan-400 rounded-full animate-ping" />
                </motion.div>
                <motion.div
                  className="absolute top-6 right-6 w-2 h-2 bg-blue-400 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="w-full h-full bg-blue-400 rounded-full animate-ping" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-6 w-2 h-2 bg-purple-400 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="w-full h-full bg-purple-400 rounded-full animate-ping" />
                </motion.div>
                <motion.div
                  className="absolute bottom-6 right-4 w-2 h-2 bg-pink-400 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <div className="w-full h-full bg-pink-400 rounded-full animate-ping" />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Floating Elements */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-full h-full bg-white rounded-full animate-bounce" />
                </motion.div>
                <motion.div
                  className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="w-full h-full bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                </motion.div>
                <motion.div
                  className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="w-full h-full bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Icon Container */}
          {Icon && (
            <motion.div
              className={`relative w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-cyan-500/50`}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-8 h-8 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          )}

          {/* Title */}
          {title && (
            <motion.h3
              className="text-white font-bold text-xl mb-4 relative group-hover:text-cyan-400 group-hover:scale-110"
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h3>
          )}

          {/* Description */}
          {description && (
            <motion.p
              className="text-gray-400 text-base mb-4 relative group-hover:text-white group-hover:scale-105"
              transition={{ duration: 0.5 }}
            >
              {description}
            </motion.p>
          )}

          {/* Features */}
          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 relative">
              {features.map((feature, index) => (
                <motion.span
                  key={feature}
                  className="text-xs bg-white/10 backdrop-blur-sm text-gray-300 px-2 py-1 rounded-full border border-white/20 hover:scale-125 hover:bg-cyan-500/30 hover:text-white hover:border-cyan-400 cursor-pointer group/feature"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                  whileHover={{ scale: 1.25 }}
                >
                  <span className="relative z-10">{feature}</span>
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/20 rounded-full opacity-0 group-hover/feature:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              ))}
            </div>
          )}

          {/* Custom Content */}
          <div className="relative z-10">
            {children}
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12"
            transition={{ duration: 1 }}
            animate={isHovered ? { x: ['-100%', '100%'] } : {}}
          />
        </div>

        {/* 3D Shadow */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-black/20 transform translate-z-[-20px] blur-xl"
          style={{
            opacity: useTransform(smoothScale, [1, 1.05], [0.2, 0.4])
          }}
        />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-2xl"
        transition={{ duration: 0.5 }}
        style={{
          scale: useTransform(smoothScale, [1, 1.05], [1, 1.2])
        }}
      />
    </motion.div>
  );
}

// Specialized card variants
export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  delay = 0
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient?: string;
  delay?: number;
}) {
  return (
    <Card3D
      icon={Icon}
      title={title}
      description={description}
      features={features}
      gradient={gradient}
      delay={delay}
      className="h-full"
    >
      <div></div>
    </Card3D>
  );
}

export function StatCard({
  icon: Icon,
  number,
  label,
  unit = "+",
  gradient = "from-cyan-500 to-blue-500",
  delay = 0
}: {
  icon: LucideIcon;
  number: string;
  label: string;
  unit?: string;
  gradient?: string;
  delay?: number;
}) {
  return (
    <Card3D
      icon={Icon}
      delay={delay}
      className="h-full text-center"
    >
      <div className={`relative w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-cyan-500/50 transition-all duration-500`}>
        <Icon className="w-8 h-8 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="relative text-5xl font-black text-white mb-1 group-hover:scale-125 group-hover:text-cyan-400 transition-all duration-500">
        {number}
        <span className="text-3xl text-cyan-400 group-hover:text-white transition-colors duration-500">{unit}</span>
      </div>
      
      <div className="relative text-gray-300 font-bold text-lg group-hover:text-white group-hover:scale-110 transition-all duration-500">
        {label}
      </div>
    </Card3D>
  );
}
