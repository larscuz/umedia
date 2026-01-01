
import React from 'react';

const mockPartners = [
  "Neon Grid Studio", "Nordic Signal Lab", "FutureFrame EDU", 
  "Pixelkraft UB", "Urban Echo Media", "Signal & Noise Agency"
];

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl font-black mb-4">Partnere og samarbeid</h2>
        <p className="text-slate-400 text-lg">
          Vi samarbeider med byråer, skoler og organisasjoner som vil utforske KI i praksis.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden border-y border-white/5 py-10 bg-slate-900/20">
        <div className="animate-ticker whitespace-nowrap flex items-center gap-16 px-8">
          {/* First set */}
          {mockPartners.map((p, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-white/10 rounded lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className="text-xl font-display font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-tight">{p}</span>
            </div>
          ))}
          {/* Duplicate set for infinite loop */}
          {mockPartners.map((p, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-white/10 rounded lg flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <span className="text-xl font-display font-bold text-slate-500 group-hover:text-slate-200 transition-colors uppercase tracking-tight">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
