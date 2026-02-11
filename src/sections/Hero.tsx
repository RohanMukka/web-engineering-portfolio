import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import Constellation from '../components/Constellation';
import HyperText from '../components/HyperText';
import CustomCursor from '../components/CustomCursor';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden bg-transparent">
      <Constellation />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[90vw] mx-auto mt-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="mb-8"
        >
             <div className="inline-block px-4 py-2 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md text-sm text-electric-cyan font-mono tracking-widest uppercase mb-4 shadow-[0_0_20px_var(--glass-shadow)]">
                 Available for opportunities
             </div>
        </motion.div>

        <motion.h1
          className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter mb-4 text-primary-text leading-[0.85] font-display"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          ROHAN <br /> MUKKA
        </motion.h1>

        <motion.h2
            className="text-2xl md:text-4xl text-primary-secondary mb-12 tracking-wide font-light uppercase letter-spacing-[0.2em] flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
            <HyperText text="Full Stack Developer" />
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
           className="flex flex-col sm:flex-row items-center gap-6"
        >
            <MagneticButton href="#projects" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                 View Recent Work
            </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-primary-blue/20 rounded-full blur-[150px] pointer-events-none opacity-40 mix-blend-screen" />
    </section>
  );
};

export default Hero;

