
import React, { useEffect, useState } from 'react';

const Hero: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#010409]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-cyan-950/20 via-slate-950 to-fuchsia-950/10"></div>
        <div className="scanline"></div>
      </div>

      {/* Floating 3D/AI Assets (Parallax Layers) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      >
        {/* Abstract Sphere 1 */}
        <div 
          className="absolute top-[15%] left-[10%] w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] floating-asset"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        
        {/* AI Construct 1 (Neural/Data Flow) */}
        <div 
          className="absolute top-[15%] right-[10%] w-56 h-80 lg:w-72 lg:h-[30rem] glass rounded-2xl overflow-hidden transform rotate-3 border border-cyan-500/30 floating-asset"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(3deg)`, animationDelay: '1s' }}
        >
          <img src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" alt="AI Neural Flow" />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
        </div>

        {/* AI Construct 2 (The "CUZ" Sculpture) */}
        <div 
          className="absolute top-[10%] left-[15%] w-64 h-64 lg:w-[28rem] lg:h-[28rem] glass rounded-full overflow-hidden border border-fuchsia-500/30 floating-asset"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, animationDelay: '0.5s' }}
        >
          {/* Futuristic sculptural image representing the CUZ entity */}
          <img src="https://images.unsplash.com/photo-1614850523296-e8c1d4832a27?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-40 brightness-110" alt="CUZ Abstract Sculpture" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/10 to-slate-950/60"></div>
        </div>

        {/* Small UI Fragments */}
        <div className="absolute top-[60%] right-[15%] w-32 h-32 border-t-2 border-r-2 border-cyan-500/40 animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[20%] w-16 h-16 rounded-full border border-fuchsia-500/50 animate-bounce" style={{animationDuration: '4s'}}></div>
      </div>

      {/* Main Content (Lowered and Textless for maximum visual impact) */}
      <div className="container mx-auto px-6 absolute bottom-36 left-0 right-0 z-20 pointer-events-none">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pointer-events-auto">
            <a 
              href="#kontakt" 
              className="group relative px-12 py-5 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <span className="relative z-10 uppercase tracking-[0.2em] text-xs">Book et møte</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <a 
              href="#tjenester" 
              className="group flex items-center gap-5 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:text-cyan-400 transition-colors bg-slate-950/60 backdrop-blur-xl px-8 py-5 rounded-full border border-white/10"
            >
              <span>Utforsk universet</span>
              <div className="w-10 h-[1px] bg-white/30 group-hover:w-16 group-hover:bg-cyan-400 transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Ambient Data Ticker */}
      <div className="absolute bottom-0 left-0 w-full z-30 overflow-hidden py-6 border-t border-white/5 bg-slate-950/40 backdrop-blur-md">
        <div className="animate-ticker whitespace-nowrap flex gap-20 text-slate-500 uppercase tracking-[0.3em] text-[10px] font-black opacity-40">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-6">KI-REKLAME <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span></span>
              <span className="flex items-center gap-6">SAME-DAY SOME <span className="w-2 h-2 rounded-full bg-cyan-400"></span></span>
              <span className="flex items-center gap-6">UNGDOMSBEDRIFTER <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span></span>
              <span className="flex items-center gap-6">STRATEGI <span className="w-2 h-2 rounded-full bg-cyan-400"></span></span>
              <span className="flex items-center gap-6">AI-FILM <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span></span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Dynamic Background Noise Overlay */}
      <div className="absolute inset-0 z-40 bg-noise pointer-events-none opacity-20"></div>
    </section>
  );
};

export default Hero;
