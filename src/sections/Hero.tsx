import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white/90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rohan Mukka
          <span className="block text-4xl md:text-6xl text-white/60 mt-2 font-medium">
            Web Engineering in Practice
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          From semantic markup to scalable frontend systems.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
            <Button href="#foundations" variant="primary">
            Explore My Work
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
