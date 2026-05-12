import { useEffect, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import NeuralNetworks from './sections/NeuralNetworks';
import MissionDataGrid from './sections/MissionDataGrid';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navigation scrollY={scrollY} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <NeuralNetworks />
        <MissionDataGrid />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
