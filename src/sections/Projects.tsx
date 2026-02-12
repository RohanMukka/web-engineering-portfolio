import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'Web' | 'ML' | 'System' | 'Blockchain';
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
    category: 'Blockchain',
    links: { github: 'https://github.com/RohanMukka/BEneFIT' },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    color: '#627EEA'
  },
  {
    title: 'Spend Smart',
    tagline: 'Master Your Money',
    description: 'Personal finance tracker with TypeScript and Firebase. Features real-time visualization of spending habits and budget categorization.',
    tags: ['TypeScript', 'Firebase', 'React'],
    category: 'Web',
    links: { github: 'https://github.com/RohanMukka/spendsmart', demo: '#' },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1626&auto=format&fit=crop',
    color: '#2ecc71'
  },
  {
    title: 'Emotion Recog',
    tagline: 'AI That Feels',
    description: 'ML-based emotion classification from EEG signals using deep learning techniques to interpret brainwave patterns.',
    tags: ['Python', 'ML', 'EEG'],
    category: 'ML',
    links: { github: 'https://github.com/RohanMukka/Multiclass-Emotion-Recognition-from-EEG-Signals' },
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1530&auto=format&fit=crop',
    color: '#9b59b6'
  },
  {
    title: 'Patient Network',
    tagline: 'Healthcare Streamlined',
    description: 'Database system for patient management and complex queries. Optimized for hospital workflows and data integrity.',
    tags: ['Java', 'SQL'],
    category: 'System',
    links: { github: 'https://github.com/RohanMukka/Patient-Assistant-Network-Database-System' },
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop',
    color: '#e74c3c'
  },
  {
    title: 'Poly Detect',
    tagline: 'Uncovering Bias',
    description: 'NLP model for polarization detection in multilingual text. Analyzes sentiment and bias across different languages.',
    tags: ['NLP', 'Python'],
    category: 'ML',
    links: { github: 'https://github.com/RohanMukka/Multilingual-Polarization-Detection' },
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1470&auto=format&fit=crop',
    color: '#e67e22'
  },
  {
    title: 'FitPrep',
    tagline: 'Plan. Eat. Lift.',
    description: 'Fitness planning and tracking for workouts and nutrition. Generates personalized meal and workout plans.',
    tags: ['Web', 'Health'],
    category: 'Web',
    links: { github: 'https://github.com/RohanMukka/fitprep', demo: '#' },
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
            <div className="flex gap-2">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-text text-white hover:bg-primary-text/90 transition-all font-medium text-sm shadow-lg shadow-primary-text/10 group/btn"
                  title="View GitHub"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
              )}
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white hover:bg-accent/90 transition-all font-medium text-sm shadow-lg shadow-accent/10 group/btn"
                  title="Live Demo"
                >
                  <ExternalLink size={18} />
                  <span>Demo</span>
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
                className="px-3 py-1 text-xs font-semibold rounded-full bg-surface-subtle text-primary-text border border-glass-border"
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
  const [filter, setFilter] = useState<'All' | 'Web' | 'ML' | 'System' | 'Blockchain'>('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild?.clientWidth || 400;
      const gap = 24;
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
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-text mb-4">
              Featured Projects
            </h2>
            <p className="text-primary-secondary max-w-xl text-lg">
              Experimental work, open source contributions, and personal tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-surface-subtle p-1.5 rounded-2xl border border-glass-border">
            {['All', 'Web', 'ML', 'System', 'Blockchain'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-primary-text text-white shadow-lg shadow-primary-text/20' : 'text-primary-secondary hover:text-primary-text hover:bg-white/5'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="hidden lg:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md hover:border-accent transition-all text-primary-text hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-glass-border bg-glass-bg backdrop-blur-md hover:border-accent transition-all text-primary-text hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div className="relative w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-8 pb-12 px-6 -mx-6 snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              layout
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  className="min-w-[85vw] md:min-w-[450px] snap-center flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
