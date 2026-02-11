import React from 'react';
import SectionContainer from '../components/SectionContainer';

const Foundations = () => {
  return (
    <SectionContainer id="foundations" className="bg-background-secondary/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
            Structured from the ground up.
          </h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            Building robust web applications starts with a strong foundation. 
            I prioritize semantic HTML, accessibility principles, and responsive design 
            to ensure systems are usable by everyone, everywhere.
          </p>
          
          <ul className="space-y-4">
            {[
              "Semantic HTML5 Markup",
              "CSS Flexbox & Grid Layouts",
              "Mobile-First Responsive Design",
              "WCAG Accessibility Compliance"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Demo of Grid/Layout */}
        <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
             <div className="absolute inset-0 bg-grid-white/[0.02]" />
             <div className="grid grid-cols-3 gap-4 h-64 w-full">
                  <div className="col-span-2 row-span-2 rounded-lg bg-primary-blue/20 border border-primary-blue/30 animate-pulse" />
                  <div className="rounded-lg bg-white/10 border border-white/10" />
                  <div className="rounded-lg bg-white/10 border border-white/10" />
                  <div className="col-span-3 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20" />
             </div>
             <div className="mt-4 flex justify-between text-xs font-mono text-white/40">
                <span>display: grid</span>
                <span>gap: 1rem</span>
             </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Foundations;
