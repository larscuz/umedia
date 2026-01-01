
import React, { useState, useEffect, useRef } from 'react';
import { Logo, LogoLarge } from './components/Branding';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Universe from './components/Universe';
import YouthSection from './components/YouthSection';
import Courses from './components/Courses';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Noise & Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-900/20 blur-[120px] rounded-full"></div>
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <Services />
        <VideoSection />
        <Universe />
        <YouthSection />
        <Courses />
        <Projects />
        <About />
        <Contact />
        <Partners />
      </main>

      <Footer />
    </div>
  );
};

export default App;
