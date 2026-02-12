import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Architecture from './sections/Architecture';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import FinalCTA from './sections/FinalCTA';
import Loader from './components/Loader';
import ResumeButton from './components/ResumeButton';
import Background from './components/Background';

function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-background text-primary-text relative min-h-screen">
      <Background />
      <Navbar isScrolled={isScrolled} />
      
      {/* Fixed Resume FAB */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60]">
        <ResumeButton isCompact={isScrolled} />
      </div>

      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <Architecture />
        <Projects />
        <Skills />
        <Education />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
