import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState('');
  const [particles, setParticles] = useState([]);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  // Mouse position with smooth spring animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 28 });
  
  // Trailing dots positions
  const [trailDots, setTrailDots] = useState([]);
  const trailLength = 20;
  const trailRef = useRef([]);
  
  // Particle system
  const particleId = useRef(0);
  const maxParticles = 15;

  // Generate particles
  const generateParticle = useCallback((x, y) => {
    if (particles.length >= maxParticles) return;
    
    const particle = {
      id: particleId.current++,
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      size: Math.random() * 4 + 2,
      life: 1,
      decay: 0.015 + Math.random() * 0.01,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: (Math.random() - 0.5) * 2,
      color: theme === 'dark' 
        ? `hsl(${210 + Math.random() * 60}, 70%, ${60 + Math.random() * 20}%)`
        : `hsl(${240 + Math.random() * 60}, 80%, ${50 + Math.random() * 30}%)`,
    };
    
    setParticles(prev => [...prev, particle]);
  }, [particles.length, theme]);

  // Update particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev
        .map(particle => ({
          ...particle,
          x: particle.x + particle.velocityX,
          y: particle.y + particle.velocityY,
          life: particle.life - particle.decay,
          velocityX: particle.velocityX * 0.99,
          velocityY: particle.velocityY * 0.99,
        }))
        .filter(particle => particle.life > 0)
      );
    }, 16);
    
    return () => clearInterval(interval);
  }, []);

  // Mouse move handler
  const handleMouseMove = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    mouseX.set(x);
    mouseY.set(y);
    
    // Update trail
    trailRef.current.unshift({ x, y });
    if (trailRef.current.length > trailLength) {
      trailRef.current.pop();
    }
    setTrailDots([...trailRef.current]);
    
    // Generate particles occasionally
    if (Math.random() < 0.1) {
      generateParticle(x, y);
    }
  }, [mouseX, mouseY, generateParticle]);

  // Mouse enter/leave handlers
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  // Hover detection
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const tagName = target.tagName.toLowerCase();
      
      if (tagName === 'button' || tagName === 'a' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
        setHoverType('button');
        setCursorVariant('button');
      } else if (target.closest('[data-cursor="text"]') || tagName === 'input' || tagName === 'textarea') {
        setIsHovering(true);
        setHoverType('text');
        setCursorVariant('text');
      } else if (target.closest('[data-cursor="view"]')) {
        setIsHovering(true);
        setHoverType('view');
        setCursorVariant('view');
      } else {
        setIsHovering(false);
        setHoverType('');
        setCursorVariant('default');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  // Cursor variants
  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(99, 102, 241, 0.8)',
      borderColor: theme === 'dark' ? 'rgba(147, 197, 253, 0.6)' : 'rgba(165, 180, 252, 0.6)',
    },
    button: {
      scale: 1.8,
      backgroundColor: theme === 'dark' ? 'rgba(168, 85, 247, 0.9)' : 'rgba(147, 51, 234, 0.9)',
      borderColor: theme === 'dark' ? 'rgba(196, 181, 253, 0.8)' : 'rgba(196, 181, 253, 0.8)',
    },
    text: {
      scale: 1.2,
      backgroundColor: theme === 'dark' ? 'rgba(34, 197, 94, 0.8)' : 'rgba(22, 163, 74, 0.8)',
      borderColor: theme === 'dark' ? 'rgba(134, 239, 172, 0.6)' : 'rgba(134, 239, 172, 0.6)',
    },
    view: {
      scale: 2.2,
      backgroundColor: theme === 'dark' ? 'rgba(236, 72, 153, 0.9)' : 'rgba(219, 39, 119, 0.9)',
      borderColor: theme === 'dark' ? 'rgba(251, 207, 232, 0.8)' : 'rgba(251, 207, 232, 0.8)',
    },
  };

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null; // Hide on mobile devices
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Main Cursor */}
            <motion.div
              className="fixed w-6 h-6 rounded-full border-2 backdrop-blur-sm"
              style={{
                left: cursorX,
                top: cursorY,
                x: -12,
                y: -12,
              }}
              variants={cursorVariants}
              animate={cursorVariant}
              initial="default"
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Outer Ring */}
            <motion.div
              className="fixed w-10 h-10 rounded-full border opacity-30"
              style={{
                left: cursorX,
                top: cursorY,
                x: -20,
                y: -20,
                borderColor: theme === 'dark' ? 'rgba(147, 197, 253, 0.4)' : 'rgba(99, 102, 241, 0.4)',
              }}
              animate={{
                scale: isHovering ? 1.5 : 1,
                opacity: isHovering ? 0.6 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Trailing Dots */}
            {trailDots.map((dot, index) => (
              <motion.div
                key={index}
                className="fixed w-2 h-2 rounded-full"
                style={{
                  left: dot.x,
                  top: dot.y,
                  x: -4,
                  y: -4,
                  backgroundColor: theme === 'dark' 
                    ? `rgba(59, 130, 246, ${0.8 - (index * 0.04)})` 
                    : `rgba(99, 102, 241, ${0.8 - (index * 0.04)})`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 - (index * 0.05) }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              />
            ))}

            {/* Particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="fixed rounded-full"
                style={{
                  left: particle.x,
                  top: particle.y,
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                  x: -particle.size / 2,
                  y: -particle.size / 2,
                }}
                animate={{
                  opacity: particle.life,
                  scale: particle.life,
                }}
                transition={{ duration: 0.1 }}
              />
            ))}

            {/* Hover Text */}
            <AnimatePresence>
              {hoverType && (
                <motion.div
                  className="fixed text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm"
                  style={{
                    left: cursorX,
                    top: cursorY,
                    x: 30,
                    y: -10,
                    backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {hoverType === 'button' && 'Click'}
                  {hoverType === 'text' && 'Type'}
                  {hoverType === 'view' && 'View'}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glow Effect */}
            <motion.div
              className="fixed w-20 h-20 rounded-full"
              style={{
                left: cursorX,
                top: cursorY,
                x: -40,
                y: -40,
                background: theme === 'dark' 
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: isHovering ? 1.5 : 1,
                opacity: isHovering ? 0.8 : 0.4,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;