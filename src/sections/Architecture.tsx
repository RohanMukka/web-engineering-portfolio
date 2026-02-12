import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';

const Architecture = () => {
  return (
    <SectionContainer id="architecture">
      <motion.div
        className="max-w-4xl mx-auto p-10 md:p-14 rounded-3xl glass-card backdrop-blur-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        animate={{ y: [0, -10, 0] }} // Gentle floating animation (this will run after whileInView if not careful, but continuous float is better handled separately)
      >
         {/* Separate floating animation to avoid conflict with entry animation */}
         <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
         >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-8">
                About Me
            </h2>
            
            <div className="space-y-6 text-lg text-primary-secondary leading-relaxed text-justify">
                <p>
                    Back in 2020, I started my journey into the world of computer science, quickly discovering a passion for building things that solve real-world problems. What began with simple command-line tools has since evolved into developing full-stack applications and exploring the fascinating realm of machine learning.
                </p>

                <p>
                    Currently pursuing my Master's in Computer Science, I am focused on building scalable and intelligent applications. I thrive on the challenge of transforming complex requirements into user-friendly solutions, whether it's developing a decentralized fitness app or an intelligent diagnostic system. My goal is to not only write clean code but also to build products that make a meaningful impact.
                </p>
                
                <p>
                    I also participate in hackathons – you can check out my projects on <a href="https://devpost.com/rohan-mukka-1" target="_blank" rel="noopener noreferrer" className="text-electric-cyan hover:underline font-medium">Devpost</a>.
                </p>

                <p>
                    When I'm not at my computer, I play chess and cricket. I believe that a balanced life fuels creativity, and I'm always looking for new experiences to inspire my next project.
                </p>
            </div>
         </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default Architecture;
