import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CursorTrail = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState('');
  const [trail, setTrail] = useState([]);
  
  // Mouse position with smooth spring animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });
  
  // Trail configuration
  const trailLength = 12;
  const trailRef = useRef([]);
  
  // Check if device supports hover (not touch-only)
  const [supportsHover, setSupportsHover] = useState(false);
  
  useEffect(() => {
    setSupportsHover(window.matchMedia('(hover: hover)').matches);
  }, []);

  // Mouse move handler with unique ID generation
  const handleMouseMove = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    mouseX.set(x);
    mouseY.set(y);
    
    // Update trail with smooth interpolation and unique ID
    trailRef.current.unshift({ x, y, id: `${Date.now()}-${Math.random()}` });
    if (trailRef.current.length > trailLength) {
      trailRef.current.pop();
    }
    setTrail([...trailRef.current]);
  }, [mouseX, mouseY]);

  // Mouse enter/leave handlers
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  // Hover detection with improved performance
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check for interactive elements
      if (target.closest('button') || target.closest('a') || target.closest('[role="button"]')) {
        setIsHovering(true);
        setHoverType('button');
      } else if (target.closest('input') || target.closest('textarea') || target.closest('[contenteditable]')) {
        setIsHovering(true);
        setHoverType('text');
      } else if (target.closest('[data-cursor="view"]') || target.closest('.project-card')) {
        setIsHovering(true);
        setHoverType('view');
      } else {
        setIsHovering(false);
        setHoverType('');
      }
    };

    if (supportsHover) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      document.addEventListener('mouseover', handleMouseOver, { passive: true });
    }

    return () => {
      if (supportsHover) {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, supportsHover]);

  // Don't render on touch devices or small screens
  if (!supportsHover || window.innerWidth <= 768) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Main Cursor Dot */}
            <motion.div
              className="fixed w-3 h-3 rounded-full mix-blend-difference"
              style={{
                left: cursorX,
                top: cursorY,
                x: -6,
                y: -6,
                backgroundColor: theme === 'dark' ? '#ffffff' : '#000000',
              }}
              initial={{ scale: 0 }}
              animate={{ 
                scale: isHovering ? 0.5 : 1,
                opacity: isHovering ? 0.8 : 1,
              }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Outer Ring */}
            <motion.div
              className="fixed rounded-full border-2 mix-blend-difference"
              style={{
                left: cursorX,
                top: cursorY,
                x: -20,
                y: -20,
                width: 40,
                height: 40,
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
              }}
              animate={{
                scale: isHovering ? 1.5 : 1,
                opacity: isHovering ? 0.6 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Colorful Trail */}
            {trail.map((point, index) => (
              <motion.div
                key={point.id || `trail-${index}`}
                className="fixed rounded-full"
                style={{
                  left: point.x,
                  top: point.y,
                  width: Math.max(2, 8 - index * 0.5),
                  height: Math.max(2, 8 - index * 0.5),
                  x: -Math.max(1, 4 - index * 0.25),
                  y: -Math.max(1, 4 - index * 0.25),
                  backgroundColor: theme === 'dark' 
                    ? `hsl(${220 + index * 10}, 70%, ${70 - index * 2}%)` 
                    : `hsl(${240 + index * 15}, 80%, ${60 - index * 3}%)`,
                }}
                animate={{
                  opacity: Math.max(0.1, 1 - index * 0.1),
                  scale: Math.max(0.2, 1 - index * 0.08),
                }}
                transition={{ duration: 0.2 }}
              />
            ))}

            {/* Gradient Glow */}
            <motion.div
              className="fixed w-24 h-24 rounded-full"
              style={{
                left: cursorX,
                top: cursorY,
                x: -48,
                y: -48,
                background: theme === 'dark' 
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
              animate={{
                scale: isHovering ? 1.5 : 1,
                opacity: isHovering ? 0.8 : 0.4,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Hover Text Indicator */}
            <AnimatePresence>
              {hoverType && (
                <motion.div
                  className="fixed text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm border"
                  style={{
                    left: cursorX,
                    top: cursorY,
                    x: 30,
                    y: -10,
                    backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                  }}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {hoverType === 'button' && '👆 Click'}
                  {hoverType === 'text' && '✏️ Type'}
                  {hoverType === 'view' && '👀 View'}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ripple Effect on Click */}
            <motion.div
              className="fixed w-8 h-8 rounded-full border-2"
              style={{
                left: cursorX,
                top: cursorY,
                x: -16,
                y: -16,
                borderColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(99, 102, 241, 0.5)',
              }}
              animate={{
                scale: isHovering ? [1, 1.5, 1] : 1,
                opacity: isHovering ? [0.5, 0.2, 0.5] : 0,
              }}
              transition={{ 
                duration: 1.5, 
                repeat: isHovering ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;