
import React from 'react';

const cases = [
  {
    title: "Same-Day SoMe for nasjonalt arrangement",
    desc: "Vi leverte innhold løpende gjennom hele dagen til over 100 000 følgere.",
    img: "https://picsum.photos/seed/case1/600/400"
  },
  {
    title: "UB-kampanje til offentlig aktør",
    desc: "En ungdomsbedrift vi veiledet vant anbudet hos en statlig instans ved hjelp av våre KI-metoder.",
    img: "https://picsum.photos/seed/case2/600/400"
  },
  {
    title: "Testkampanje med KI-video og lyd",
    desc: "Vår pilot-kampanje som beviste at KI-innhold kan prestere 40% bedre enn tradisjonelt innhold.",
    img: "https://picsum.photos/seed/case3/600/400"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="prosjekter" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-16">Utvalgte prosjekter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase text-white">Case Study</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{c.desc}</p>
              <button className="text-white font-bold text-sm underline underline-offset-8 hover:text-cyan-400 transition-colors">Les mer</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
