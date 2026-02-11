import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Foundations from './sections/Foundations';
import Interactive from './sections/Interactive';
import Architecture from './sections/Architecture';
import Projects from './sections/Projects';
import Performance from './sections/Performance';
import FinalCTA from './sections/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary-blue/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Foundations />
        <Interactive />
        <Architecture />
        <Projects />
        <Performance />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
