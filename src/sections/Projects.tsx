import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  color: string;
}

const projects: Project[] = [
  {
    title: "BEneFIT",
    description: "A decentralized fitness accountability framework using ETH staking, smart contracts, and fraud-resistant goal validation.",
    tags: ["Ethereum", "Web3", "React", "Solidity"],
    links: { github: "https://github.com/RohanMukka/BEneFIT" },
    color: "#7B2CBF" 
  },
  {
    title: "Spend Smart",
    description: "Comprehensive personal finance tracker built with TypeScript and Firebase. Features real-time data synchronization.",
    tags: ["TypeScript", "Firebase", "React", "Data Viz"],
    links: { github: "https://github.com/RohanMukka/spendsmart" },
    color: "#00D6FF"
  },
  {
    title: "Emotion Recog",
    description: "AI system for classifying emotions from EEG signals using machine learning algorithms.",
    tags: ["Python", "ML", "EEG", "Data Analysis"],
    links: { github: "https://github.com/RohanMukka/Multiclass-Emotion-Recognition-from-EEG-Signals" },
    color: "#FF0055"
  },
  {
    title: "Patient Network",
    description: "Robust database system for patient management handling complex queries and data relationships.",
    tags: ["Java", "SQL", "Database Design"],
    links: { github: "https://github.com/RohanMukka/Patient-Assistant-Network-Database-System" },
    color: "#00FF99"
  },
  {
    title: "Poly Detect",
    description: "NLP model for detecting polarization in multilingual text, analyzing sentiment and bias.",
    tags: ["NLP", "Python", "Deep Learning"],
    links: { github: "https://github.com/RohanMukka/Multilingual-Polarization-Detection" },
    color: "#FF9900"
  },
  {
    title: "FitPrep",
    description: "Fitness preparation and tracking tool for planning workouts and nutrition goals.",
    tags: ["Web Dev", "Health Tech"],
    links: { github: "https://github.com/RohanMukka/fitprep" },
    color: "#2A48D1"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-32 px-6">
       <div className="max-w-7xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <div className="inline-block px-3 py-1 rounded-full border border-primary-blue/30 bg-primary-blue/10 text-electric-cyan text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                  Selected Work
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-display">
                  Featured <br /> Projects.
                </h2>
                <p className="text-white/60 text-xl max-w-2xl">
                   A collection of experiments, products, and systems engineering.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`
                           ${idx === 0 || idx === 3 ? 'md:col-span-2' : 'md:col-span-1'}
                        `}
                    >
                         {/* Modified Version of ProjectPoster inline for Grid flexibility */}
                         <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:bg-white/[0.07]">
                            
                            {/* Gradient Blob */}
                            <div 
                                className="absolute top-[-20%] right-[-20%] w-[120%] h-[120%] rounded-full opacity-20 blur-[100px] transition-opacity duration-500 group-hover:opacity-40"
                                style={{ background: `radial-gradient(circle, ${project.color}, transparent)` }}
                            />

                            <div className="relative h-full flex flex-col justify-between p-10">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md">
                                            <Github size={20} />
                                        </div>
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors uppercase tracking-wider font-medium">
                                                View Code <ArrowRight size={14} />
                                            </a>
                                        )}
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-4 font-display leading-[0.9]">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-white/60 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold px-3 py-1.5 rounded-full bg-black/20 text-white/60 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </motion.div>
                ))}
            </div>
       </div>
    </section>
  );
};

export default Projects;
