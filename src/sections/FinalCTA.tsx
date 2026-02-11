import React from 'react';
import SectionContainer from '../components/SectionContainer';
import MagneticButton from '../components/MagneticButton';
import SpotlightCard from '../components/SpotlightCard';
import { Github, Linkedin, Mail } from 'lucide-react';

const FinalCTA = () => {
  return (
    <SectionContainer id="contact" className="!py-0 pb-32">
        <SpotlightCard className="w-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-12 md:p-24 text-center overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight font-display">
                    Ready to build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-electric-cyan">something exceptional?</span>
                </h2>
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                    Whether you have a project in mind or just want to chat about web technologies, I'm always open to new opportunities.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <MagneticButton href="mailto:rohanmukka@gmail.com" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-3">
                        <Mail size={20} />
                        Get in Touch
                    </MagneticButton>
                    <div className="flex gap-4">
                        <MagneticButton href="https://github.com/rohanmukka" className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                            <Github size={24} />
                        </MagneticButton>
                        <MagneticButton href="https://www.linkedin.com/in/rohanmukka" className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                            <Linkedin size={24} />
                        </MagneticButton>
                    </div>
                </div>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-[100px]" />
            </div>
        </SpotlightCard>
    </SectionContainer>
  );
};

export default FinalCTA;
