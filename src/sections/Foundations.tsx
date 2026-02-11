import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Marquee from '../components/Marquee';

const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "TailwindCSS", "Framer Motion", "Three.js", "GraphQL", "PostgreSQL", "Docker", "AWS", "Git", "Figma"
];

const Foundations = () => {
  return (
    <section id="foundations" className="relative py-24 bg-background overflow-hidden">
      <SectionContainer className="!py-0 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90 font-display">
                    Structured from the ground up.
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                    Building robust web applications starts with a strong foundation. 
                    I prioritize semantic HTML, accessibility principles, and responsive design 
                    to ensure systems are usable by everyone, everywhere.
                </p>
            </div>
             <div className="relative p-6 rounded-2xl border border-glass-border bg-glass-bg overflow-hidden shadow-2xl">
                 <div className="absolute inset-0 bg-grid-white/[0.02]" />
                 <div className="grid grid-cols-3 gap-4 h-48 w-full opacity-60">
                      <div className="col-span-2 row-span-2 rounded-lg bg-primary-blue/10 border border-primary-blue/20 animate-pulse flex items-center justify-center text-primary-blue font-mono text-xs shadow-[0_0_15px_rgba(42,72,209,0.1)]">Main</div>
                      <div className="rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center text-primary-secondary font-mono text-xs">Side</div>
                      <div className="rounded-lg bg-glass-bg border border-glass-border flex items-center justify-center text-primary-secondary font-mono text-xs">Widget</div>
                      <div className="col-span-3 rounded-lg bg-electric-cyan/5 border border-electric-cyan/10 flex items-center justify-center text-electric-cyan/50 font-mono text-xs">Footer</div>
                 </div>
            </div>
        </div>
      </SectionContainer>

      <div className="relative w-full">
           <Marquee speed={40}>
               {skills.map((skill) => (
                   <div key={skill} className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                       <span className="w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_10px_rgba(0,214,255,0.5)]" />
                       <span className="text-lg font-medium text-white/80 font-mono">{skill}</span>
                   </div>
               ))}
           </Marquee>
      </div>

    </section>
  );
};

export default Foundations;
