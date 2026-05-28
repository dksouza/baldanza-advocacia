import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface ReadonlyFadeInProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<ReadonlyFadeInProps> = ({ children, delay = 0, direction = 'up' }) => {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        delay: delay, 
        type: "spring", 
        bounce: 0.15 
      }}
    >
      {children}
    </motion.div>
  );
};
