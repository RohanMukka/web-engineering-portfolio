import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const [words, setWords] = useState([
    [
      { char: 'R', id: 'swap-1', needsShake: true }, // Starts as Rohan
      { char: 'o', id: 'o-1' },
      { char: 'h', id: 'h-1' },
      { char: 'a', id: 'a-1' },
      { char: 'n', id: 'n-1' },
    ],
    [
      { char: 'M', id: 'swap-2', needsShake: true }, // Starts as Mukka
      { char: 'u', id: 'u-1' },
      { char: 'k', id: 'k-1' },
      { char: 'k', id: 'k-2' },
      { char: 'a', id: 'a-2' },
    ]
  ]);

  const [stage, setStage] = useState('initial'); // initial -> entry -> shake -> swap

  useEffect(() => {
    const sequence = async () => {
      // 1. Just show entry animation
      setStage('swapped');
    };

    sequence();
  }, []);

  const letterAnimation = {
    whileHover: { 
      scaleY: 1.5,
      scaleX: 0.9,
      y: -10,
      color: "var(--accent)"
    }
  };

  const variants = {
    initial: (i: number) => {
       const startX = (i % 2 === 0 ? -150 : 150) + (i * 10);
       const startY = (i % 3 === 0 ? -150 : 150) + (i * 5);
       const startRotate = (i % 2 === 0 ? -45 : 45);
       return { opacity: 0, x: startX, y: startY, scale: 2, rotate: startRotate, filter: "blur(10px)" };
    },
    entry: (i: number) => ({
      opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)",
      transition: { duration: 0.8, delay: 0.1 + (i * 0.08), type: "spring", bounce: 0.5 }
    }),
    shake: (i: number) => ({
      x: [0, -5, 5, -5, 5, 0],
      opacity: 1, // Ensure visibility
      color: "#ef4444",
      filter: "blur(0px)",
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5 }
    }),
    swapped: {
      x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)", opacity: 1, // Ensure visibility
      color: "var(--text-primary)", // Use theme variable for visibility
      transition: { duration: 0.5 }
    }
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
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 z-10 w-full">
          <motion.p
            className="text-primary-secondary text-sm uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full Stack Developer
          </motion.p>
          
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[7rem] font-display font-bold tracking-tighter text-primary-text leading-[0.9] mb-8 flex flex-wrap justify-center md:justify-start gap-x-4 w-full"
            layout // Enable layout animation for the container
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.map((item, letterIndex) => {
                  const uniqueIndex = wordIndex * 10 + letterIndex;
                  const isSwapper = item.needsShake;
                  
                  // Determine which variant to animate to
                  let animateState = 'entry';
                  if (stage === 'initial') animateState = 'initial';
                  else if (stage === 'shake' && isSwapper) animateState = 'shake';
                  else if (stage === 'swapped') animateState = 'swapped';
                  else animateState = 'entry'; // Default idle state

                  // For the shaking items, we want to animate specifically when stage is shake
                  // But for normal items, we just want them to hold their 'entry' position (x:0, y:0)

                  return (
                    <motion.span
                      layoutId={item.id} // Critical: allows animation across different parents
                      key={item.id} // Key must track the identity of the letter, not the index
                      className="inline-block cursor-default relative"
                      custom={uniqueIndex} // Pass index to variants
                      initial="initial"
                      animate={animateState}
                      variants={variants}
                      whileHover={letterAnimation.whileHover}
                      transition={{ 
                         layout: { duration: 0.8, type: "spring", bounce: 0.2 } // Smooths the swap
                      }}
                    >
                      {item.char}
                    </motion.span>
                  );
                })}
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-text glass-card hover:border-accent/40 shadow-none hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-base"
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
