import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Foundations from './sections/Foundations';
import Interactive from './sections/Interactive';
import Architecture from './sections/Architecture';
import Projects from './sections/Projects';
import Performance from './sections/Performance';
import FinalCTA from './sections/FinalCTA';

import WeatherSystem from './components/WeatherSystem';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-primary-text selection:bg-cosmic-purple/30 selection:text-white transition-colors duration-1000">
      <WeatherSystem />
      <Navbar isScrolled={isScrolled} />
      
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <Foundations />
        <Interactive />
        <Architecture />
        <Projects />
        <Performance />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
