import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { name: 'About', href: '#architecture' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`max-w-5xl mx-auto flex justify-between items-center transition-all duration-300 bg-glass-bg backdrop-blur-md rounded-2xl border border-glass-border mx-4 px-6 ${
          isScrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <a href="#" className="text-lg font-display font-semibold text-primary-text hover:opacity-80 transition-opacity">
          Rohan Mukka
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-primary-secondary hover:text-primary-text transition-colors"
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
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
            </a>
          ))}
          
          <a
            href="https://github.com/rohanmukka"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-2 text-sm font-medium text-primary-secondary hover:text-primary-text transition-colors"
            onMouseEnter={() => setHovered('github')}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === 'github' && (
              <motion.span
                layoutId="nav-item-hover"
                className="absolute inset-0 bg-surface-subtle border border-glass-border rounded-full -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              />
            )}
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-primary-text"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
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
            <a href="https://github.com/rohanmukka" target="_blank" rel="noopener noreferrer" className="text-primary-text py-2 px-2 hover:bg-surface-subtle rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
