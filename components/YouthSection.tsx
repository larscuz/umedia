
import React from 'react';

const YouthSection: React.FC = () => {
  return (
    <section id="ungdom" className="py-24 bg-gradient-to-r from-cyan-900/10 to-purple-900/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block">Framtidens skapere</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">KI som superkraft for ungdomsbedrifter</h2>
            <p className="text-lg text-slate-300 mb-8">
              Cuz Media hjelper Ungdomsbedrifter (UB) med å levere profesjonelt innhold på nivå med de største byråene ved bruk av smarte KI-verktøy.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Bygger visuell profil og KI-husmanual for ungdomsbedriften",
                "Trener elevene i KI-verktøy for tekst, bilde, video og lyd",
                "Setter opp Same-Day SoMe-produksjon til ekte kunder",
                "Hjelper dem å dokumentere arbeid mot fagprøve og arbeidsliv"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-slate-400 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#kontakt" className="inline-block px-10 py-4 bg-cyan-500 text-slate-950 font-black rounded-full hover:bg-cyan-400 transition-all neon-glow-cyan transform hover:scale-105">
              Samarbeid med oss om UB
            </a>
          </div>

          <div className="relative">
            <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden glass p-4 transform rotate-2">
              <img src="https://picsum.photos/seed/youth/800/800" alt="Youth Innovation" className="w-full h-full object-cover rounded-2xl opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-3xl font-black text-white italic">"Ubegrensede muligheter med AI"</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-500/30 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouthSection;
