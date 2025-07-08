import { useCallback } from 'react';

export const useCursorVariant = () => {
  const setCursorVariant = useCallback((element, variant) => {
    if (!element) return;
    
    element.setAttribute('data-cursor', variant);
    
    // Add hover event listeners for custom cursor effects
    const handleMouseEnter = () => {
      element.setAttribute('data-cursor-active', 'true');
    };
    
    const handleMouseLeave = () => {
      element.removeAttribute('data-cursor-active');
    };
    
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    // Return cleanup function
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return { setCursorVariant };
};