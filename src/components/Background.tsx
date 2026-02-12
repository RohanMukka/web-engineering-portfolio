import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Background = () => {
  const { scrollY } = useScroll();
  // Opacity goes from 0 to 1 between 300px and 800px of scroll
  // This keeps the Hero section clean (mostly white) and fades in the background for content below
  const opacity = useTransform(scrollY, [300, 800], [0, 1]);

  return (
    <motion.div 
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      {/* Base texture/noise - optional, keeps it tangible */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Primary Blue Orb - Moving Top Left */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#021e62] opacity-5 mix-blend-multiply blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent Orange Orb - Moving Center Right */}
      <motion.div
        className="absolute top-[20%] -right-[5%] w-[35vw] h-[35vw] rounded-full bg-[#c45c26] opacity-[0.04] mix-blend-multiply blur-3xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Purple/Secondary Orb - Moving Bottom Left */}
      <motion.div
        className="absolute bottom-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#8b5cf6] opacity-[0.04] mix-blend-multiply blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
    </motion.div>
  );
};

export default Background;
