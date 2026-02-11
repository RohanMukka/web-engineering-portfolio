
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Foundations', href: '#foundations' },
    { label: 'Systems', href: '#systems' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Performance', href: '#performance' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-xl border-white/5 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#" className="text-white/90 font-bold tracking-tight text-xl">
            Rohan Mukka
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-white/60 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/90 text-sm font-medium hover:bg-[#0050FF] hover:border-[#0050FF] transition-all duration-300 group"
          >
            <Github size={16} className="group-hover:scale-110 transition-transform" />
            <span>View GitHub</span>
          </a>
          
          <button 
            className="md:hidden text-white/90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/60 text-lg font-medium hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://github.com" 
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-white border border-white/10"
              >
                <Github size={18} />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
