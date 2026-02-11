import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';

const projects = [
    {
        title: "JAI",
        description: "A highly modular TypeScript application leveraging structured code patterns for frontend interaction.",
        tags: ["TypeScript", "Frontend Architecture", "Modular Logic"],
        link: "https://github.com/rohanmukka/JAI"
    },
    {
        title: "SpendSmart",
        description: "Real-time expense tracking with Firebase backend, featuring live data synchronization and responsive UI.",
        tags: ["Firebase", "Real-time Data", "React State"],
        link: "https://github.com/rohanmukka/SpendSmart"
    },
    {
        title: "FitPrep",
        description: "Dynamic meal planning utility built with Vanilla JavaScript, focusing on DOM manipulation and event handling.",
        tags: ["Vanilla JS", "DOM API", "CSS Grid"],
        link: "https://github.com/rohanmukka/FitPrep"
    },
    {
        title: "BEneFIT",
        description: "Web3-integrated application handling async blockchain calls and providing immediate frontend feedback.",
        tags: ["Web3", "Async/Await", "Blockchain Interaction"],
        link: "https://github.com/rohanmukka/BEneFIT"
    }
];

const Projects = () => {
  return (
    <SectionContainer id="projects">
         <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
                Featured Projects.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                Real-world applications demonstrating my ability to ship production-ready code across various tech stacks.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-8 rounded-3xl border border-white/10 bg-background-secondary hover:border-primary-blue/50 transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-bold text-white/90 group-hover:text-primary-blue transition-colors">
                            {project.title}
                        </h3>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-blue">
                             ↗
                        </span>
                    </div>
                    
                    <p className="text-white/60 mb-8 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/50 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    </SectionContainer>
  );
};

export default Projects;
