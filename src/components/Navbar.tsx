import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const links = [
    { name: 'About', href: '#architecture' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Global Glassmorphism Overlay */}
      <AnimatePresence>
        {isNavHovered && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 bg-white/10 dark:bg-black/10 z-40 pointer-events-none"
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      <motion.nav
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          scale: isNavHovered ? 1.05 : 1 
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div
          className={`w-full max-w-5xl transition-all duration-500 bg-glass-bg backdrop-blur-xl rounded-full border border-glass-border shadow-2xl shadow-glass-shadow mx-4 px-6 flex justify-between items-center ${
            isScrolled ? 'py-3' : 'py-5'
          } ${isNavHovered ? 'shadow-accent/20 border-accent/20' : ''}`}
        >
        <a href="#" className="text-lg font-display font-semibold text-primary-text hover:opacity-80 transition-opacity tracking-tight">
          Rohan Mukka
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-primary-secondary hover:text-primary-text transition-colors"
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {hovered === link.name && (
                <motion.span
                  layoutId="nav-item-hover"
                  className="absolute inset-0 bg-surface-subtle border border-glass-border rounded-full -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {link.name}
            </motion.a>
          ))}
          
          <div className="ml-4 flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile Menu Button Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            className="p-2 text-primary-text"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-4 right-4 mt-2 py-4 px-4 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md flex flex-col gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-primary-text py-2 px-2 hover:bg-surface-subtle rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
                {link.name}
              </a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
