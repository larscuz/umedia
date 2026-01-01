
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[4rem] border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-black mb-8">Ta kontakt</h2>
              <p className="text-xl text-slate-400 mb-12">
                Fortell oss hva du vil få til – så viser vi hvordan KI kan hjelpe deg å nå målet.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">E-post</h4>
                  <a href="mailto:post@cuzmedia.no" className="text-2xl font-bold hover:text-cyan-400 transition-colors">post@cuzmedia.no</a>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Telefon</h4>
                  <a href="tel:+4799999999" className="text-2xl font-bold hover:text-cyan-400 transition-colors">+47 99 99 99 99</a>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Navn</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 text-white" placeholder="Ditt navn" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">E-post</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 text-white" placeholder="navn@epost.no" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Organisasjon</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 text-white" placeholder="Din bedrift eller skole" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Melding</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 text-white h-32" placeholder="Hva kan vi hjelpe deg med?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-white text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all text-lg">
                Send forespørsel
              </button>
              <p className="text-center text-sm text-slate-500">
                Vi svarer som regel innen én arbeidsdag.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
