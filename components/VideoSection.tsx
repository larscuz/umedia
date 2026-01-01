
import React, { useState, useRef } from 'react';

interface VideoItem {
  title: string;
  desc: string;
  tags: string[];
  id: string;
  thumbnail: string;
  videoUrl?: string; // YouTube/Vimeo
  videoSrc?: string; // Direct MP4
}

const videos: VideoItem[] = [
  {
    title: "AI-teaservideo for kampanje",
    desc: "En visuelt slående teaser skapt utelukkende med generative videoverktøy.",
    tags: ["#AI-video", "#Kampanje", "#Cinematisk"],
    id: "v1",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    videoSrc: "https://larscuzner.com/CuzStethoscope.mp4"
  },
  {
    title: "KI-klipp fra UB-prosjekt",
    desc: "Dokumentasjon av arbeidsprosesser støttet av AI-motion graphics.",
    tags: ["#Ungdomsbedrift", "#MotionGraphics"],
    id: "v2",
    thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-animation-4451-large.mp4"
  },
  {
    title: "Same-Day SoMe fra live-event",
    desc: "Lynrask produksjon av høykvalitetsinnhold under et større arrangement.",
    tags: ["#Live", "#SameDaySoMe", "#Event"],
    id: "v3",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-jumping-and-shouting-4161-large.mp4"
  },
  {
    title: "AI-lyddesign testcase",
    desc: "Demonstrasjon av hvordan vi kombinerer generert lyd og bilde.",
    tags: ["#Lyddesign", "#AudioAI"],
    id: "v4",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-humanoid-head-with-neon-lights-42994-large.mp4"
  }
];

const VideoCard: React.FC<{ vid: VideoItem; onSelect: (v: VideoItem) => void }> = ({ vid, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="group">
      <div 
        className="aspect-video bg-slate-900 rounded-3xl overflow-hidden mb-6 relative flex items-center justify-center border border-white/5 hover:border-cyan-500/40 transition-all cursor-pointer shadow-2xl"
        onClick={() => onSelect(vid)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static Thumbnail - Fades out on hover */}
        <img 
          src={vid.thumbnail} 
          alt={vid.title} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${isHovered ? 'opacity-0' : 'opacity-40'}`} 
        />
        
        {/* Video Preview - Clean view, no text or playhead */}
        {vid.videoSrc && (
          <video
            ref={videoRef}
            src={vid.videoSrc}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-0 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />
        )}
        
        {/* UI Overlays - Fades out completely when video is playing on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-60'}`}></div>

        <div className={`relative z-30 flex flex-col items-center transition-all duration-300 ${isHovered ? 'opacity-0 scale-90 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white mb-4 shadow-2xl">
            <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z"/>
            </svg>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400/80">
            Spill av video
          </span>
        </div>
      </div>

      <div className="px-2">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{vid.title}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed">{vid.desc}</p>
        <div className="flex flex-wrap gap-2">
          {vid.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

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
            <VideoCard key={vid.id} vid={vid} onSelect={setActiveVideo} />
          ))}
        </div>

        <div className="mt-16 text-center text-slate-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          Bio-Digital Media Portfolio • Cuz Media AS
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
            onClick={() => setActiveVideo(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(34,211,238,0.2)] border border-white/10">
            <button 
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all shadow-xl"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activeVideo.videoUrl ? (
              <iframe 
                src={`${activeVideo.videoUrl}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={activeVideo.videoSrc} 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full"
                /* Audio is ON by default in popup */
              ></video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
