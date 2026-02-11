import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled: isScrolledProp }: NavbarProps) => {
  const [isScrolledLocal, setIsScrolledLocal] = useState(false);
  const isScrolled = isScrolledProp ?? isScrolledLocal;

  useEffect(() => {
    if (isScrolledProp !== undefined) return;
    const handleScroll = () => setIsScrolledLocal(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolledProp]);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Foundations', href: '#foundations' },
    { name: 'Systems', href: '#interactive' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Projects', href: '#projects' },
    { name: 'Performance', href: '#performance' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 
            ${isScrolled 
                ? 'bg-glass-bg backdrop-blur-md rounded-full border border-glass-border shadow-lg shadow-glass-shadow mx-4 py-3' 
                : 'bg-transparent py-2'
            }`}
      >
        <a href="#" className="text-xl font-bold tracking-tight text-primary-text hover:text-electric-cyan transition-colors font-display">
          Rohan Mukka
        </a>

        <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
            <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary-secondary hover:text-primary-text hover:underline hover:decoration-primary-text/20 hover:underline-offset-4 transition-all duration-200"
            >
                {link.name}
            </a>
            ))}
        </div>

        <div className="hidden md:flex items-center">
            <a
                href="https://github.com/rohanmukka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-primary-text transition-all border rounded-full border-glass-border bg-glass-bg hover:bg-glass-shadow hover:scale-105 active:scale-95"
            >
                View GitHub
            </a>
        </div>
            
        {/* Mobile Menu Button (Placeholder for now) */}
        <div className="md:hidden">
            <button className="text-primary-secondary hover:text-primary-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
