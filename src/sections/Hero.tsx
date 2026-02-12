import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const name = "Rohan Mukka";

  const letterAnimation = {
    whileHover: { 
      scaleY: 1.5,
      scaleX: 0.9,
      y: -10,
      color: "var(--accent)"
    },
    transition: { type: "spring", stiffness: 300, damping: 10 }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden py-24 md:py-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Image */}
        <motion.div 
          className="relative order-2 md:order-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
             {/* Main Image */}
             <img 
               src="/hero-profile.png" 
               alt="Rohan Mukka"
               className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
             />
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-6 -left-6 w-full h-full border-2 border-primary-text/20 rounded-2xl"></div>
             <div className="absolute -z-20 top-12 -left-12 w-full h-full bg-surface-subtle rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 z-10">
          <motion.p
            className="text-primary-secondary text-sm uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[7rem] font-display font-bold tracking-tighter text-primary-text leading-[0.9] mb-8 flex flex-wrap justify-center md:justify-start gap-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            {name.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {Array.from(word).map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    className="inline-block cursor-default"
                    {...letterAnimation}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-secondary max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build web applications with a focus on clean architecture, performance, and thoughtful UX. Transforming complex problems into elegant solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-text border border-glass-border hover:bg-surface-subtle transition-colors text-base"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
