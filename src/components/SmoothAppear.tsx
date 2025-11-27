'use client';

import { motion, AnimatePresence } from "framer-motion";

interface SmoothAppearProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export default function SmoothAppear({ isVisible, children }: SmoothAppearProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ 
            opacity: 0, 
            y: 30, 
            scale: 0.95,
            filter: "blur(8px)"
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94], // smooth ease-out curve
              opacity: { duration: 0.6 },
              y: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
              scale: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
              filter: { duration: 0.5, ease: "easeOut" }
            },
          }}
          exit={{
            opacity: 0,
            y: 15,
            scale: 0.98,
            filter: "blur(4px)",
            transition: { 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            },
          }}
          style={{ 
            willChange: "transform, opacity, filter",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
