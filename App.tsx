
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Foundations } from './sections/Foundations';
import { Systems } from './sections/Systems';
import { Architecture } from './sections/Architecture';
import { Performance } from './sections/Performance';
import { Footer } from './sections/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#0050FF]/30">
      <Navbar isScrolled={isScrolled} />
      
      <main className="relative">
        <Hero />
        <Foundations />
        <Systems />
        <Architecture />
        <Performance />
        <Footer />
      </main>
    </div>
  );
};

export default App;
