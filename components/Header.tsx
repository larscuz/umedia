
import React, { useState, useEffect } from 'react';
import { Logo } from './Branding';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Tjenester', href: '#tjenester' },
    { label: 'AI-videoer', href: '#videoer' },
    { label: 'Ungdomsbedrifter', href: '#ungdom' },
    { label: 'Kurs', href: '#kurs' },
    { label: 'Prosjekter', href: '#prosjekter' },
    { label: 'Om oss', href: '#om-oss' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#kontakt" 
            className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-full transition-all neon-glow-cyan transform hover:scale-105 active:scale-95 text-sm"
          >
            Book et møte
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 flex flex-col items-center py-8 gap-6 animate-fadeIn">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#kontakt" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-full"
          >
            Book et møte
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
