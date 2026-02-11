import React, { useRef } from 'react';
import SectionContainer from '../components/SectionContainer';
import GravityElement from '../components/GravityElement';
import { motion } from 'framer-motion';

const tags = [
    "React", "Three.js", "Physics", "Creative", "Interactive", 
    "Animation", "WebGL", "Next.js", "TypeScript", "UI/UX",
    "Tailwind", "Framer", "Design", "Node.js", "Systems"
];

const Interactive = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="interactive" className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 overflow-hidden">
        <SectionContainer className="text-center mb-10 z-10 pointer-events-none">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-cosmic-purple">
                    Play
                </span> with the Tech.
             </h2>
             <p className="text-white/60 text-xl max-w-2xl mx-auto">
                Web development isn't just static text. It's fluid, interactive, and fun. 
                <br /><span className="text-electric-cyan font-bold">Throw these tags around.</span>
             </p>
        </SectionContainer>
        
        <div 
            ref={containerRef} 
            className="relative w-full max-w-5xl h-[60vh] bg-glass-bg rounded-3xl border border-glass-border backdrop-blur-sm overflow-hidden flex flex-wrap content-center justify-center gap-4 p-10 cursor-default shadow-lg shadow-glass-shadow"
        >
             {/* Physics Area */}
             {tags.map((tag, i) => (
                 <GravityElement 
                    key={tag} 
                    constraintsRef={containerRef}
                    className="px-6 py-3 rounded-full bg-background-secondary/80 border border-glass-border backdrop-blur-md text-primary-text font-mono text-sm shadow-lg hover:bg-glass-bg hover:border-glass-border hover:shadow-glass-shadow transition-colors"
                 >
                    {tag}
                 </GravityElement>
             ))}

             <div className="absolute bottom-4 right-6 text-white/20 text-sm font-mono pointer-events-none">
                Powered by Framer Motion
             </div>
        </div>
    </section>
  );
};

export default Interactive;
