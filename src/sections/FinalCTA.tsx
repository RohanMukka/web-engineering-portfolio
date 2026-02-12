import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <SectionContainer id="contact" className="!py-0 pb-24">
      <motion.div 
        className="max-w-4xl mx-auto p-12 md:p-20 rounded-3xl glass-card text-center relative overflow-hidden group"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl group-hover:bg-primary-blue/20 transition-colors duration-700"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-text mb-6">
            Let’s work together
          </h2>
          <p className="text-xl text-primary-secondary mb-12 max-w-xl mx-auto">
            Have a project in mind or want to chat? I’m open to new opportunities and interesting collaborations.
          </p>
          <a
            href="mailto:rohanmukka@gmail.com"
            className="btn-cta inline-flex items-center gap-3 px-10 py-5 rounded-xl text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20 active:shadow-none"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default FinalCTA;
