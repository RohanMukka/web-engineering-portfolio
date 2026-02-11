import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Interactive = () => {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('demo');

  return (
    <SectionContainer id="interactive">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
            Interfaces that respond.
          </h2>
          <p className="text-lg text-white/60 mb-6 leading-relaxed">
             Beyond static content, I engineer interactive systems using React's event-driven architecture.
             From simple DOM manipulation to complex state management, I ensure every interaction is smooth and predictable.
          </p>

          <div className="space-y-6 text-white/60">
             <p>Core concepts applied:</p>
             <div className="flex flex-wrap gap-3">
                {['useState', 'useEffect', 'Event Handling', 'Async/Await', 'DOM Manipulation'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5">
                        {tag}
                    </span>
                ))}
             </div>
          </div>
        </div>

        <div className="lg:w-1/2">
             <div className="p-1 rounded-2xl bg-white/5 border border-white/10 mb-8 inline-flex">
                 <button 
                    onClick={() => setActiveTab('demo')}
                    className={`px-4 py-2 text-sm rounded-xl transition-all ${activeTab === 'demo' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'}`}
                >
                    Live Demo
                 </button>
                 <button 
                    onClick={() => setActiveTab('code')}
                    className={`px-4 py-2 text-sm rounded-xl transition-all ${activeTab === 'code' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'}`}
                >
                    Code Logic
                 </button>
             </div>

             <AnimatePresence mode="wait">
                 {activeTab === 'demo' ? (
                     <motion.div 
                        key="demo"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-8 rounded-3xl border border-white/10 bg-background-secondary flex flex-col items-center justify-center min-h-[300px]"
                    >
                        <div className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-electric-cyan font-mono">
                            {count}
                        </div>
                        <div className="flex gap-4">
                            <Button onClick={() => setCount(c => c - 1)} variant="outline" className="w-12 h-12 !px-0 rounded-full">-</Button>
                            <Button onClick={() => setCount(c => c + 1)} variant="outline" className="w-12 h-12 !px-0 rounded-full">+</Button>
                        </div>
                        <p className="mt-8 text-sm text-white/40">Interactive State Component</p>
                    </motion.div>
                 ) : (
                     <motion.div 
                        key="code"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-6 rounded-3xl border border-white/10 bg-[#0d0d0d] font-mono text-sm overflow-x-auto min-h-[300px]"
                    >
                        <pre className="text-white/70">
{`const [count, setCount] = useState(0);

// Increment Handler
const handleIncrement = () => {
  setCount(prev => prev + 1);
};

return (
  <button onClick={handleIncrement}>
    Count: {count}
  </button>
);`}
                        </pre>
                    </motion.div>
                 )}
             </AnimatePresence>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Interactive;
