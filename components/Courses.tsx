
import React from 'react';

const courseCards = [
  {
    title: "Introkurs: KI i kreativ produksjon",
    points: ["Gjennomgang av de viktigste verktøyene", "Fra idé til ferdig produkt på minutter", "Inspirasjon og praktiske eksempler"]
  },
  {
    title: "AI-workflow for innholdsproduksjon",
    points: ["Oppsett av effektive arbeidsflyter", "Prompt engineering for proffer", "Automatisering av tunge prosesser"]
  },
  {
    title: "For ledere: strategi og etikk",
    points: ["Hvordan implementere KI i organisasjonen", "Opphavsrett og etiske retningslinjer", "KI som konkurransefortrinn"]
  }
];

const Courses: React.FC = () => {
  return (
    <section id="kurs" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Kurs og foredrag om KI</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Vi holder kurs og foredrag for skoler, byråer og offentlige aktører som vil ta steget inn i KI-alderen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courseCards.map((card) => (
            <div key={card.title} className="glass p-10 rounded-3xl group hover:border-fuchsia-500 transition-colors">
              <h3 className="text-xl font-bold mb-6 group-hover:text-fuchsia-400 transition-colors">{card.title}</h3>
              <ul className="space-y-4 mb-8">
                {card.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 italic mb-6">Tilpasses deres nivå og behov.</p>
                <button className="text-fuchsia-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Be om PDF-meny <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
