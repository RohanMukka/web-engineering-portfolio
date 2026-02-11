import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';

const Architecture = () => {
    const cards = [
        { title: "Component Systems", desc: "Atomic design principles for scalable UI libraries." },
        { title: "Reusable UI", desc: "Props-driven components with flexible variants." },
        { title: "Type-Safe Architecture", desc: "End-to-end type safety with TypeScript interfaces." },
        { title: "Modular Structure", desc: "Feature-based organization for maintainable codebases." },
    ];

  return (
    <SectionContainer id="architecture">
        <div className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
                Built with modern architecture.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
                I don't just write code; I design systems. My approach prioritizes maintainability, 
                scalability, and developer experience through strict component composition and utility-first styling.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center mb-4 text-primary-blue">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white/90 mb-2">{card.title}</h3>
                    <p className="text-sm text-white/50">{card.desc}</p>
                </motion.div>
            ))}
        </div>
    </SectionContainer>
  );
};

export default Architecture;
