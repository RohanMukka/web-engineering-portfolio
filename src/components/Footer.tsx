import React from 'react';
import SectionContainer from './SectionContainer';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/10 bg-background-secondary">
      <SectionContainer className="!py-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <p className="text-sm text-white/40">
                © {currentYear} Rohan Mukka. All rights reserved.
             </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/rohanmukka" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">
                GitHub
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                LinkedIn
            </a>
             <a href="mailto:contact@rohanmukka.com" className="text-sm text-white/40 hover:text-white transition-colors">
                Email
            </a>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
