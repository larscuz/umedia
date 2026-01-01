
import React from 'react';

const values = [
  "Åpenhet om bruk av KI",
  "Læring i praksis",
  "Ungdom først",
  "Kreativitet foran hype"
];

const About: React.FC = () => {
  return (
    <section id="om-oss" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-10">Om Cuz Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Cuz Media ble startet av folk med bakgrunn fra kunst, media og utdanning som så hvordan teknologien endret alt.
              </p>
              <p>
                Vi jobber både kommersielt og med viktige samfunnsoppdrag for å sikre at den neste generasjonen får tilgang til de samme verktøyene som de store aktørene.
              </p>
            </div>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Vårt mål er å jevne ut forskjellene mellom etablerte byråer og nye stemmer. Vi tror på kraften i å kombinere menneskelig empati med maskinell effektivitet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-center">
                <span className="font-display font-bold text-sm text-cyan-400">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
