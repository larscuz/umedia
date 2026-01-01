
import React, { useState } from 'react';

interface SettingsModalProps {
  currentGithubUser: string;
  onUpdateGithubUser: (user: string) => void;
  onClose: () => void;
  onOpenApiKey: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  currentGithubUser, 
  onUpdateGithubUser, 
  onClose,
  onOpenApiKey 
}) => {
  const [tempUser, setTempUser] = useState(currentGithubUser);

  const handleSave = () => {
    onUpdateGithubUser(tempUser.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-sm glass rounded-3xl p-8 animate-in zoom-in-95 duration-200">
        <h2 className="text-xl font-semibold mb-6">Innstillinger</h2>
        
        <div className="space-y-6">
          {/* GitHub Section */}
          <div>
            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block font-medium">
              GitHub Brukernavn
            </label>
            <div className="relative">
              <input
                type="text"
                value={tempUser}
                onChange={(e) => setTempUser(e.target.value)}
                placeholder="f.eks. github-bruker"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-5 h-5 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </div>
          </div>

          {/* API Key Section */}
          <div className="pt-4 border-t border-white/5">
            <button 
              onClick={onOpenApiKey}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className="text-left">
                <span className="block text-sm font-medium">Gemini API Nøkkel</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">Sikker tilkobling</span>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium transition-colors"
          >
            Avbryt
          </button>
          <button 
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-white text-black text-sm font-bold transition-transform active:scale-95"
          >
            Lagre
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
