
import React from 'react';

const universeItems = [
  {
    title: 'kireklame.no',
    desc: 'Register over norske aktører som lager reklame med KI. En samlingsplass for bransjen.',
    btn: 'Gå til kireklame.no',
    color: 'border-cyan-500'
  },
  {
    title: 'umedia.no',
    desc: 'Ungdomsmedier drevet av elever og ungdomsbedrifter – innhold laget med KI.',
    btn: 'Gå til umedia.no',
    color: 'border-fuchsia-500'
  },
  {
    title: 'intelligenspartiet.no',
    desc: 'Kunst- og idéprosjekt om erstattningsangst, politikk og kunstig intelligens.',
    btn: 'Gå til intelligenspartiet.no',
    color: 'border-purple-500'
  }
];

const Universe: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Universet rundt Cuz Media</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Vi bygger et økosystem av prosjekter som gjør KI konkret for både bransjen og unge skapere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {universeItems.map((item) => (
            <div key={item.title} className={`glass p-10 rounded-3xl border-l-4 ${item.color} flex flex-col justify-between h-full`}>
              <div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-bold text-sm">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universe;
