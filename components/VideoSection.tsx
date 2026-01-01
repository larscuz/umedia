
import React from 'react';

const videos = [
  {
    title: "AI-teaservideo for kampanje",
    desc: "En visuelt slående teaser skapt utelukkende med generative videoverktøy.",
    tags: ["#AI-video", "#Kampanje", "#Cinematisk"],
    id: "v1"
  },
  {
    title: "KI-klipp fra UB-prosjekt",
    desc: "Dokumentasjon av arbeidsprosesser støttet av AI-motion graphics.",
    tags: ["#Ungdomsbedrift", "#MotionGraphics"],
    id: "v2"
  },
  {
    title: "Same-Day SoMe fra live-event",
    desc: "Lynrask produksjon av høykvalitetsinnhold under et større arrangement.",
    tags: ["#Live", "#SameDaySoMe", "#Event"],
    id: "v3"
  },
  {
    title: "AI-lyddesign testcase",
    desc: "Demonstrasjon av hvordan vi kombinerer generert lyd og bilde.",
    tags: ["#Lyddesign", "#AudioAI"],
    id: "v4"
  }
];

const VideoSection: React.FC = () => {
  return (
    <section id="videoer" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">AI-videoer vi har skapt</h2>
            <p className="text-slate-400 text-lg">
              Her ser du eksempler på hvordan vi bruker KI til å kombinere film, grafikk, tekst og lyd. 
              Alle videoene er generert eller tungt støttet av våre avanserte KI-verktøy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((vid) => (
            <div key={vid.id} className="group">
              <div className="aspect-video bg-slate-800 rounded-3xl overflow-hidden mb-6 relative flex items-center justify-center border border-white/5 hover:border-cyan-500/40 transition-all">
                <img src={`https://picsum.photos/seed/${vid.id}/800/450`} alt={vid.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"/></svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Video kommer her</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{vid.title}</h3>
              <p className="text-slate-400 mb-4">{vid.desc}</p>
              <div className="flex flex-wrap gap-2">
                {vid.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-slate-800 text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-slate-500 text-sm">
          Alle videoene er eksempler og kan erstattes med faktiske prosjekter i en produksjonssetting.
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
