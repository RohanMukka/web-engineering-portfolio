import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';

const Architecture = () => {
  return (
    <SectionContainer id="architecture">
      <div className="max-w-4xl mx-auto overflow-hidden py-10"> {/* Added overflow-hidden to contain the slide */}
        <motion.div
          initial={{ opacity: 0, y: 150 }} // Increased distance for a more dramatic slide
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }} // Trigger a bit later
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing for the slide
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-6">
            About Me
          </h2>
        </motion.div>
        
        <div className="space-y-6 text-lg text-primary-secondary leading-relaxed text-justify">
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Back in 2020, I started my journey into the world of computer science, quickly discovering a passion for building things that solve real-world problems. What began with simple command-line tools has since evolved into developing full-stack applications and exploring the fascinating realm of machine learning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Currently pursuing my Master's in Computer Science, I am focused on building scalable and intelligent applications. I thrive on the challenge of transforming complex requirements into user-friendly solutions, whether it's developing a decentralized fitness app or an intelligent diagnostic system. My goal is to not only write clean code but also to build products that make a meaningful impact.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            I also participate in hackathons – you can check out my projects on <a href="https://devpost.com/rohan-mukka-1" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Devpost</a>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            When I'm not at my computer, I play chess and cricket. I believe that a balanced life fuels creativity, and I'm always looking for new experiences to inspire my next project.
          </motion.p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Architecture;
