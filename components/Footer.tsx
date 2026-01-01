
import React from 'react';
import { Logo } from './Branding';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Logo className="h-10 mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Cuz Media AS – Fremtidens innhold skapes her. Vi gir små aktører kraften til å vinne.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Meny</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#tjenester" className="hover:text-cyan-400 transition-colors">Tjenester</a></li>
              <li><a href="#videoer" className="hover:text-cyan-400 transition-colors">AI-videoer</a></li>
              <li><a href="#ungdom" className="hover:text-cyan-400 transition-colors">Ungdomsbedrifter</a></li>
              <li><a href="#kurs" className="hover:text-cyan-400 transition-colors">Kurs & foredrag</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Universet</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">kireklame.no</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">umedia.no</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">intelligenspartiet.no</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>post@cuzmedia.no</li>
              <li>+47 99 99 99 99</li>
              <li>Norge, Oslo</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Cuz Media AS – cuzmedia.no</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">Personvern</a>
            <a href="#" className="hover:text-slate-400">Cookies</a>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-slate-900/50 border border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Last ned profilfiler</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all text-slate-400 hover:text-white">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeWidth={2} strokeLinecap="round"/></svg>
              <span>cuzmedia-logo.svg</span>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all text-slate-400 hover:text-white">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeWidth={2} strokeLinecap="round"/></svg>
              <span>cuzmedia-logo.png</span>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all text-slate-400 hover:text-white">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeWidth={2} strokeLinecap="round"/></svg>
              <span>favicon.ico</span>
            </button>
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all text-slate-400 hover:text-white">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" strokeWidth={2} strokeLinecap="round"/></svg>
              <span>favicon.png</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
