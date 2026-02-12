import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Background = () => {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };

    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const springMouseX = useSpring(mousePos.x, { stiffness: 30, damping: 20 });
  const springMouseY = useSpring(mousePos.y, { stiffness: 30, damping: 20 });

  const scrollYDelayed = useSpring(scrollY, { stiffness: 50, damping: 30 });
  const yParallax = useTransform(scrollYDelayed, [0, 1000], [0, -200]);
  
  // Parallax multipliers for deeper effect
  const springMouseXInverse = useTransform(springMouseX, (val) => val * -0.5);
  const springMouseYInverse = useTransform(springMouseY, (val) => val * -0.5);
  const springMouseXDeep = useTransform(springMouseX, (val) => val * 1.5);
  const springMouseYDeep = useTransform(springMouseY, (val) => val * -1.2);
  const yParallaxHalf = useTransform(yParallax, (val) => val * 0.5);

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-bg-primary transition-colors duration-1000">
      {/* Abstract Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Main Accent Orb (Top Right) */}
        <motion.div
          className={`absolute -top-[10%] -right-[10%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.5]`}
          style={{ 
            background: isDark 
              ? 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)' // Dark Blue
              : 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)', // More visible Blue for Light
            x: springMouseX,
            y: springMouseY,
            translateY: yParallax
          }}
        />

        {/* Secondary Accent Orb (Bottom Left) */}
        <motion.div
          className={`absolute -bottom-[20%] -left-[10%] w-[90vw] h-[90vw] rounded-full blur-[150px] opacity-[0.4]`}
          style={{ 
            background: isDark 
              ? 'radial-gradient(circle, #312e81 0%, transparent 70%)' // Deep Indigo
              : 'radial-gradient(circle, #fef3c7 0%, transparent 70%)', // Pale Gold/Cream for Light warmth
            x: springMouseXInverse,
            y: springMouseYInverse,
            translateY: yParallaxHalf
          }}
        />

        {/* Center Dynamic Glow */}
        <motion.div
          className={`absolute top-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[180px] opacity-[0.15]`}
          style={{ 
            background: isDark 
              ? 'radial-gradient(circle, #5b21b6 0%, transparent 70%)' // Purple
              : 'radial-gradient(circle, #002366 0%, transparent 70%)', // Royal Blue Hue for Light
            x: springMouseXDeep,
            y: springMouseYDeep,
          }}
        />
      </div>

      {/* Subtle Texture/Grain */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Very faint structural lines */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: 'radial-gradient(var(--text-tertiary) 0.5px, transparent 0.5px)',
             backgroundSize: '80px 80px'
           }}>
      </div>
    </div>
  );
};

export default Background;
