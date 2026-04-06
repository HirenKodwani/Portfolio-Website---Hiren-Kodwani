import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // High-performance motion values for x and y
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for organic trailing effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    // Hide animation if cursor leaves the window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        // Centering the blob over the cursor
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 0, // Behind content but over absolute background
        opacity: isVisible ? 0.08 : 0, // Extremely subtle so it's not distracting
        background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 60%)',
        filter: 'blur(60px)',
        transition: 'opacity 0.5s ease'
      }}
    />
  );
};

export default CursorBackground;
