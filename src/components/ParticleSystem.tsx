'use client';

import { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  targetScale: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
  colors?: string[];
  speed?: number;
  sizeRange?: [number, number];
  opacityRange?: [number, number];
  lifeRange?: [number, number];
  physics?: {
    gravity?: number;
    friction?: number;
    attraction?: number;
    repulsion?: number;
  };
}

export default function ParticleSystem({
  particleCount = 150,
  className = "",
  colors = ['#00d4ff', '#0099ff', '#ff00ff', '#00ff88', '#ffaa00', '#ff6b6b', '#4ecdc4', '#45b7d1'],
  speed = 0.8,
  sizeRange = [1, 6],
  opacityRange = [0.1, 0.9],
  lifeRange = [100, 400],
  physics = {
    gravity: 0.0001,
    friction: 0.98,
    attraction: 0.0002,
    repulsion: 0.0001
  }
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  
  // Mouse tracking for interactive particles with ultra-smooth physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 50, restDelta: 0.001 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 50, restDelta: 0.001 });

  // Performance optimization: use object pooling for particles
  const particlePool = useMemo(() => {
    const pool: Particle[] = [];
    for (let i = 0; i < particleCount * 2; i++) {
      pool.push({
        x: 0, y: 0, vx: 0, vy: 0, size: 0, opacity: 0, color: '', life: 0, maxLife: 0,
        rotation: 0, rotationSpeed: 0, scale: 0, targetScale: 0
      });
    }
    return pool;
  }, [particleCount]);

  // Initialize particles with enhanced physics
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = particlePool[i] || {
        x: 0, y: 0, vx: 0, vy: 0, size: 0, opacity: 0, color: '', life: 0, maxLife: 0,
        rotation: 0, rotationSpeed: 0, scale: 0, targetScale: 0
      };
      
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
      particle.vx = (Math.random() - 0.5) * speed * 2;
      particle.vy = (Math.random() - 0.5) * speed * 2;
      particle.size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
      particle.opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
      particle.color = colors[Math.floor(Math.random() * colors.length)];
      particle.life = Math.random() * (lifeRange[1] - lifeRange[0]) + lifeRange[0];
      particle.maxLife = particle.life;
      particle.rotation = Math.random() * Math.PI * 2;
      particle.rotationSpeed = (Math.random() - 0.5) * 0.02;
      particle.scale = Math.random() * 0.5 + 0.5;
      particle.targetScale = Math.random() * 0.5 + 0.5;
      
      particles.push(particle);
    }
    
    particlesRef.current = particles;
  }, [particleCount, colors, speed, sizeRange, opacityRange, lifeRange, particlePool]);

  // Ultra-smooth particle update with advanced physics
  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with ultra-smooth fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    const mousePos = { x: smoothMouseX.get(), y: smoothMouseY.get() };

    // Performance optimization: batch rendering
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    particles.forEach((particle, index) => {
      // Update particle physics
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Apply gravity
      particle.vy += physics.gravity || 0;
      
      // Apply friction
      particle.vx *= physics.friction || 0.98;
      particle.vy *= physics.friction || 0.98;
      
      // Mouse interaction with enhanced physics
      const dx = mousePos.x - particle.x;
      const dy = mousePos.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 200 && distance > 0) {
        const force = (200 - distance) / 200;
        const attractionForce = force * (physics.attraction || 0.0002);
        const repulsionForce = force * (physics.repulsion || 0.0001);
        
        // Attraction to mouse
        particle.vx += (dx / distance) * attractionForce;
        particle.vy += (dy / distance) * attractionForce;
        
        // Repulsion from other particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const otherDx = otherParticle.x - particle.x;
            const otherDy = otherParticle.y - particle.y;
            const otherDistance = Math.sqrt(otherDx * otherDx + otherDy * otherDy);
            
            if (otherDistance < 50 && otherDistance > 0) {
              const repulsion = (50 - otherDistance) / 50;
              particle.vx -= (otherDx / otherDistance) * repulsion * repulsionForce;
              particle.vy -= (otherDy / otherDistance) * repulsion * repulsionForce;
            }
          }
        });
      }

      // Enhanced boundary handling with bounce physics
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Update particle life and rotation
      particle.life--;
      particle.rotation += particle.rotationSpeed;
      particle.scale += (particle.targetScale - particle.scale) * 0.1;
      
      // Regenerate dead particles with smooth transitions
      if (particle.life <= 0) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.vx = (Math.random() - 0.5) * speed * 2;
        particle.vy = (Math.random() - 0.5) * speed * 2;
        particle.life = particle.maxLife;
        particle.opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
        particle.targetScale = Math.random() * 0.5 + 0.5;
      }

      // Draw particle with enhanced effects
      const lifeRatio = particle.life / particle.maxLife;
      const finalOpacity = particle.opacity * lifeRatio;
      
      if (finalOpacity > 0.01) {
        ctx.globalAlpha = finalOpacity;
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * particle.scale
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.7, particle.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.scale(particle.scale, particle.scale);
        
        // Draw particle with rotation
        ctx.beginPath();
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw particle trail with enhanced physics
        if (lifeRatio > 0.3) {
          ctx.globalAlpha = finalOpacity * 0.4;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = particle.size * 0.3;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-particle.vx * 5, -particle.vy * 5);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    });

    // Draw connections between nearby particles with enhanced physics
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const opacity = (120 - distance) / 120;
          ctx.globalAlpha = opacity * 0.15;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    ctx.restore();
    animationRef.current = requestAnimationFrame(updateParticles);
  }, [speed, opacityRange, physics, smoothMouseX, smoothMouseY]);

  // Handle mouse movement with performance optimization
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  // Handle canvas resize with performance optimization
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      const newSize = { width: rect.width, height: rect.height };
      if (newSize.width !== canvasSize.width || newSize.height !== canvasSize.height) {
        setCanvasSize(newSize);
        canvas.width = newSize.width;
        canvas.height = newSize.height;
        initParticles();
      }
    }
  }, [canvasSize, initParticles]);

  // Initialize and start animation with performance optimization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set initial size
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      const size = { width: rect.width, height: rect.height };
      setCanvasSize(size);
      canvas.width = size.width;
      canvas.height = size.height;
    }

    initParticles();
    setIsVisible(true);

    // Start animation loop with performance monitoring
    let lastTime = performance.now();
    let frameCount = 0;
    
    const animate = (currentTime: number) => {
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        if (fps < 50) {
          // Reduce particle count for better performance
          if (particlesRef.current.length > particleCount * 0.7) {
            particlesRef.current = particlesRef.current.slice(0, Math.floor(particlesRef.current.length * 0.9));
          }
        }
        frameCount = 0;
        lastTime = currentTime;
      }
      
      updateParticles();
    };

    animationRef.current = requestAnimationFrame(animate);

    // Handle resize with throttling
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', throttledResize);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimeout);
    };
  }, [initParticles, updateParticles, handleResize, particleCount]);

  return (
    <motion.div
      className={`particle-system ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 pointer-events-none"
        style={{
          filter: 'blur(0.3px)',
          mixBlendMode: 'screen',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* Interactive overlay for mouse tracking */}
      <div className="absolute inset-0 pointer-events-none" />
    </motion.div>
  );
}

// Ultra-smooth floating particles component for specific areas
export function FloatingParticles({ 
  count = 30, 
  className = "",
  colors = ['#00d4ff', '#ff00ff', '#00ff88', '#ffaa00'],
  physics = { stiffness: 100, damping: 30, mass: 1 }
}: {
  count?: number;
  className?: string;
  colors?: string[];
  physics?: { stiffness: number; damping: number; mass: number };
}) {
  return (
    <div className={`floating-particles ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(0.5px)',
            willChange: 'transform'
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.3, 1.2, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
            type: "spring",
            ...physics
          }}
        />
      ))}
    </div>
  );
}

// Ultra-smooth glowing orbs component with enhanced physics
export function GlowingOrbs({ 
  count = 8, 
  className = "",
  sizeRange = [60, 200],
  physics = { stiffness: 80, damping: 40, mass: 1.2 }
}: {
  count?: number;
  className?: string;
  sizeRange?: [number, number];
  physics?: { stiffness: number; damping: number; mass: number };
}) {
  return (
    <div className={`glowing-orbs ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none blur-2xl"
          style={{
            width: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
            height: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 255, 0.08) 50%, transparent 100%)`,
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8,
            type: "spring",
            ...physics
          }}
        />
      ))}
    </div>
  );
}
