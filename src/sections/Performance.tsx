import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';

const Performance = () => {
    const metrics = [
        { label: "Performance", value: 100, color: "text-green-500" },
        { label: "Accessibility", value: 100, color: "text-green-500" },
        { label: "Best Practices", value: 100, color: "text-green-500" },
        { label: "SEO", value: 100, color: "text-green-500" },
    ];

  return (
    <SectionContainer id="performance">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white/90">
                    Performance is a feature.
                </h2>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                    I build for speed and efficiency. By optimizing assets, utilizing lazy loading, 
                    and maintaining a clean Git history, I ensure applications are not just functional 
                    but performant and deployable.
                </p>
                
                <ul className="space-y-4 text-white/70">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Optimized Asset Loading
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Vercel Deployment Workflow
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Lighthouse Audited
                    </li>
                </ul>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                {metrics.map((metric, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="aspect-square rounded-full border-4 border-white/5 bg-background-secondary flex flex-col items-center justify-center relative overflow-hidden"
                    >
                         <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                             <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/5" />
                             <motion.circle 
                                cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" 
                                className={metric.color}
                                strokeDasharray="283"
                                initial={{ strokeDashoffset: 283 }}
                                whileInView={{ strokeDashoffset: 0 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                             />
                         </svg>
                         <div className="text-3xl font-bold text-white relative z-10">{metric.value}</div>
                         <div className="text-xs text-white/40 uppercase tracking-wider relative z-10 font-medium mt-1">{metric.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </SectionContainer>
  );
};

export default Performance;
