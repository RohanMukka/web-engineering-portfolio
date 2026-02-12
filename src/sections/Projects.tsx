import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links: { github?: string; demo?: string };
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'BEneFIT',
    tagline: 'Succeed or Pay the Price',
    description: 'Decentralized fitness accountability with ETH staking and smart contracts. Users stake ETH and earn it back by completing workout goals verified by oracles.',
    tags: ['Ethereum', 'Web3', 'React', 'Solidity'],
    links: { github: 'https://github.com/RohanMukka/BEneFIT' },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    color: '#627EEA'
  },
  {
    title: 'Spend Smart',
    tagline: 'Master Your Money',
    description: 'Personal finance tracker with TypeScript and Firebase. Features real-time visualization of spending habits and budget categorization.',
    tags: ['TypeScript', 'Firebase', 'React'],
    links: { github: 'https://github.com/RohanMukka/spendsmart' },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1626&auto=format&fit=crop',
    color: '#2ecc71'
  },
  {
    title: 'Emotion Recog',
    tagline: 'AI That Feels',
    description: 'ML-based emotion classification from EEG signals using deep learning techniques to interpret brainwave patterns.',
    tags: ['Python', 'ML', 'EEG'],
    links: { github: 'https://github.com/RohanMukka/Multiclass-Emotion-Recognition-from-EEG-Signals' },
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop',
    color: '#9b59b6'
  },
  {
    title: 'Patient Network',
    tagline: 'Healthcare Streamlined',
    description: 'Database system for patient management and complex queries. Optimized for hospital workflows and data integrity.',
    tags: ['Java', 'SQL'],
    links: { github: 'https://github.com/RohanMukka/Patient-Assistant-Network-Database-System' },
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop',
    color: '#e74c3c'
  },
  {
    title: 'Poly Detect',
    tagline: 'Uncovering Bias',
    description: 'NLP model for polarization detection in multilingual text. Analyzes sentiment and bias across different languages.',
    tags: ['NLP', 'Python'],
    links: { github: 'https://github.com/RohanMukka/Multilingual-Polarization-Detection' },
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1470&auto=format&fit=crop',
    color: '#e67e22'
  },
  {
    title: 'FitPrep',
    tagline: 'Plan. Eat. Lift.',
    description: 'Fitness planning and tracking for workouts and nutrition. Generates personalized meal and workout plans.',
    tags: ['Web', 'Health'],
    links: { github: 'https://github.com/RohanMukka/fitprep' },
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop',
    color: '#1abc9c'
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full cursor-pointer group perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500 rounded-2xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ 
          y: -12,
          boxShadow: "0 20px 40px -15px var(--glass-shadow), 0 0 20px 1px var(--accent-dim)"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden glass-card">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex flex-col justify-end p-8">
            <h3 className="text-3xl font-display font-bold text-primary-text mb-1">{project.title}</h3>
            <p className="text-primary-secondary text-sm font-medium tracking-wide uppercase mb-3">{project.tagline}</p>
            <div className="h-1 w-12 rounded-full" style={{ backgroundColor: project.color }}></div>
          </div>
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden glass-card p-8 flex flex-col"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-display font-bold" style={{ color: project.color }}>
              {project.title}
            </h3>
            <div className="flex gap-3">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/20 transition-colors text-primary-text"
                  title="View GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/20 transition-colors text-primary-text"
                  title="View Source"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-primary-secondary mb-8 leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-primary-text border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Get the width of the first card, default to 400 if not found
      const cardWidth = container.firstElementChild?.clientWidth || 400;
      const gap = 24; // gap-6 corresponds to 1.5rem or 24px
      const scrollAmount = cardWidth + gap;
      
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 flex justify-between items-end"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-text mb-4">
              Projects
            </h2>
            <p className="text-primary-secondary max-w-xl">
              A selection of things I’ve built — from full-stack apps to ML and systems work.
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-primary-secondary/20 hover:bg-surface-subtle hover:border-accent transition-all text-primary-text hover:scale-110 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-primary-secondary/20 hover:bg-surface-subtle hover:border-accent transition-all text-primary-text hover:scale-110 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 px-6 -mx-6 snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="min-w-[85vw] md:min-w-[400px] snap-center flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
