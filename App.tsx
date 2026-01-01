
import React, { useState, useEffect, useRef } from 'react';
import { VideoItem } from './types';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import UploadView from './components/UploadView';

// EDIT THESE TO CHANGE DEFAULT VIDEOS
const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'hero',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    prompt: '', 
    description: '',
    timestamp: Date.now()
  },
  {
    id: 'demo1',
    url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    prompt: 'Demo Video 1',
    description: 'Dette er en demo-video. Du kan slette denne ved å trykke på søppelbøtte-ikonet.',
    timestamp: Date.now() - 100000
  }
];

const App: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    const saved = localStorage.getItem('umedia_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_VIDEOS;
  });
  
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('umedia_portfolio', JSON.stringify(videos));
  }, [videos]);

  const handleNewVideo = (video: VideoItem) => {
    setVideos(prev => [video, ...prev]);
    setShowUpload(false);
  };

  const handleDeleteVideo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the modal
    if (confirm('Er du sikker på at du vil slette denne videoen?')) {
      setVideos(prev => prev.filter(v => v.id !== id));
    }
  };

  const handleOpenSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
    }
  };

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // The first video is always treated as the Hero
  const heroVideo = videos.length > 0 ? videos[0] : INITIAL_VIDEOS[0];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      
      {/* Hero 16:9 Section */}
      <section 
        className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden group"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        <div className="relative w-full aspect-video max-w-[1920px] shadow-2xl">
          <video 
            src={heroVideo.url}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Hero Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="space-y-2">
              {heroVideo.prompt && <h2 className="text-4xl font-bold tracking-tighter uppercase">{heroVideo.prompt}</h2>}
              {heroVideo.description && <p className="text-white/60 text-sm max-w-md line-clamp-2">{heroVideo.description}</p>}
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">uMedia Featured</span>
              <h1 className="text-2xl font-black tracking-tighter">uMedia.no</h1>
            </div>
          </div>
        </div>

        {/* Hover Side Arrows */}
        <div 
          className={`absolute left-8 top-1/2 -translate-y-1/2 transition-opacity duration-500 cursor-pointer p-4 group/arrow z-10 ${isHeroHovered ? 'opacity-100' : 'opacity-0'}`}
          onClick={scrollToGrid}
        >
          <div className="flex flex-col items-center gap-4">
             <div className="w-[1px] h-24 bg-gradient-to-t from-white to-transparent" />
             <svg className="w-8 h-8 text-white animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
          </div>
        </div>

        <div 
          className={`absolute right-8 top-1/2 -translate-y-1/2 transition-opacity duration-500 cursor-pointer p-4 group/arrow z-10 ${isHeroHovered ? 'opacity-100' : 'opacity-0'}`}
          onClick={scrollToGrid}
        >
          <div className="flex flex-col items-center gap-4">
             <div className="w-[1px] h-24 bg-gradient-to-t from-white to-transparent" />
             <svg className="w-8 h-8 text-white animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold tracking-tighter">uMedia.no</h1>
            <span className="text-[10px] uppercase tracking-widest text-white/40 hidden sm:block">Archive</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={handleOpenSelectKey}
              className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              Settings
            </button>
            <button 
              onClick={() => setShowUpload(true)}
              className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
            >
              Add Media
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main ref={gridRef} className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">Latest Submissions</h3>
          <div className="h-[1px] flex-1 bg-white/5 mx-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* We skip the first video as it's the hero, unless there's only one */}
          {videos.slice(videos.length > 1 ? 1 : 0).map(video => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={setSelectedVideo}
              onDelete={(e) => handleDeleteVideo(video.id, e)}
            />
          ))}
          
          <button 
            onClick={() => setShowUpload(true)}
            className="aspect-[9/16] rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-4 group hover:bg-white/5 transition-all"
          >
            <div className="p-4 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white/20 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">uMedia Learning Platform</p>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              En portefølje for eksperimentell AI-generert og kuratert media. Designet for undervisning i moderne kreative prosesser. 
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-12">
             <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/20">Links</span>
                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-xs hover:text-white/60">Billing</a>
                <button onClick={handleOpenSelectKey} className="text-xs hover:text-white/60 text-left">API Key</button>
             </div>
             <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-white/20">Credits</span>
                <a href="https://larscuzner.com" target="_blank" className="text-xs hover:text-white/60 italic">Lars Cuzner</a>
             </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}

      {showUpload && (
        <UploadView 
          onSuccess={handleNewVideo}
          onCancel={() => setShowUpload(false)}
        />
      )}
    </div>
  );
};

export default App;
