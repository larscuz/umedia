
import React, { useState } from 'react';
import { generateAIVideo, pollVideoOperation, downloadVideoUrl } from '../services/geminiService';
import { GenerationStatus, VideoItem } from '../types';

interface UploadViewProps {
  onSuccess: (video: VideoItem) => void;
  onCancel: () => void;
}

const UploadView: React.FC<UploadViewProps> = ({ onSuccess, onCancel }) => {
  const [mode, setMode] = useState<'generate' | 'url'>('url');
  const [prompt, setPrompt] = useState('');
  const [directUrl, setDirectUrl] = useState('');
  const [processDesc, setProcessDesc] = useState('');
  const [status, setStatus] = useState<GenerationStatus>({ status: 'idle', message: '' });

  const handleSave = async () => {
    if (mode === 'url') {
      if (!directUrl) return;
      const newVideo: VideoItem = {
        id: Math.random().toString(36).substr(2, 9),
        url: directUrl,
        prompt: prompt || 'Direct Upload',
        description: processDesc,
        timestamp: Date.now()
      };
      onSuccess(newVideo);
      return;
    }

    if (!prompt) return;

    try {
      setStatus({ status: 'generating', message: 'Starter generering...' });
      const apiKey = process.env.API_KEY || '';
      const op = await generateAIVideo(prompt, apiKey);
      let currentOp = op;

      setStatus({ status: 'polling', message: 'Gemini tenker... Dette kan ta et par minutter.' });

      while (!currentOp.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        currentOp = await pollVideoOperation(currentOp, apiKey);
      }

      const videoUri = currentOp.response?.generatedVideos?.[0]?.video?.uri;
      if (videoUri) {
        const localUrl = await downloadVideoUrl(videoUri, apiKey);
        const newVideo: VideoItem = {
          id: Math.random().toString(36).substr(2, 9),
          url: localUrl,
          prompt: prompt,
          description: processDesc,
          timestamp: Date.now()
        };
        onSuccess(newVideo);
      } else {
        throw new Error("Fant ingen video i svaret.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus({ status: 'error', message: err.message || 'Noe gikk galt under generering.' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95" />
      
      <div className="relative w-full max-w-lg glass rounded-3xl p-8 flex flex-col gap-6 animate-in slide-in-from-bottom duration-500">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-white">Ny uMedia</h2>
          <button onClick={onCancel} className="text-white/40 hover:text-white">Avbryt</button>
        </div>

        <div className="flex p-1 bg-white/5 rounded-xl">
          <button 
            onClick={() => setMode('url')}
            className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold rounded-lg transition-all ${mode === 'url' ? 'bg-white text-black' : 'text-white/40'}`}
          >
            URL
          </button>
          <button 
            onClick={() => setMode('generate')}
            className={`flex-1 py-2 text-xs uppercase tracking-widest font-bold rounded-lg transition-all ${mode === 'generate' ? 'bg-white text-black' : 'text-white/40'}`}
          >
            AI Generer
          </button>
        </div>

        <div className="space-y-4">
          {mode === 'url' ? (
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Video URL (.mp4)</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="https://larscuzner.com/video.mp4"
                value={directUrl}
                onChange={(e) => setDirectUrl(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">AI Prompt</label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors h-24 resize-none"
                placeholder="Beskriv videoen du vil skape..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={status.status !== 'idle' && status.status !== 'error'}
              />
            </div>
          )}

          <div>
            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Beskrivelse / Tittel</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Hva handler dette om?"
              value={prompt && mode === 'url' ? prompt : (mode === 'url' ? '' : prompt)}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest text-white/40 mb-2 block">Prosess & Undervisning</label>
            <textarea
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors h-24 resize-none"
              placeholder="Context for denne videoen..."
              value={processDesc}
              onChange={(e) => setProcessDesc(e.target.value)}
            />
          </div>
        </div>

        {status.status === 'idle' || status.status === 'error' || mode === 'url' ? (
          <button
            onClick={handleSave}
            disabled={mode === 'url' ? !directUrl : !prompt}
            className="w-full bg-white text-black font-bold py-4 rounded-full transition-transform active:scale-95 disabled:opacity-50 disabled:active:scale-100 uppercase tracking-widest text-xs"
          >
            {mode === 'url' ? 'Legg til video' : 'Generer Video'}
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-sm text-white/70 animate-pulse">{status.message}</p>
          </div>
        )}

        {status.status === 'error' && (
          <p className="text-red-400 text-xs text-center">{status.message}</p>
        )}
      </div>
    </div>
  );
};

export default UploadView;
