import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/5 bg-background/60 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center space-x-2">
        <a href="#" className="text-xl font-bold tracking-tight text-white/90 hover:text-white transition-colors">
          Rohan Mukka
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-white/60 hover:text-white hover:underline hover:decoration-white/20 hover:underline-offset-4 transition-all duration-200"
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
            className="px-4 py-2 text-sm font-medium text-white transition-all border rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            View GitHub
          </a>
      </div>
          
      {/* Mobile Menu Button (Placeholder for now) */}
      <div className="md:hidden">
         <button className="text-white/60 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
