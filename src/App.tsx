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
    <div className="bg-background text-primary-text">
      <Navbar isScrolled={isScrolled} />
      
      {/* Fixed Resume Button */}
      <div className="fixed top-6 right-6 z-[60] hidden md:block">
        <ResumeButton />
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
