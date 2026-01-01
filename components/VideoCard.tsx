
import React, { useRef, useState } from 'react';
import { VideoItem } from '../types';

interface VideoCardProps {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
  onDelete?: (e: React.MouseEvent) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick, onDelete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current?.pause();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="relative aspect-[9/16] group cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 shadow-2xl transition-all duration-300 hover:border-white/20 active:scale-95"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(video)}
    >
      <video
        ref={videoRef}
        src={video.url}
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm font-medium text-white/90 line-clamp-1">{video.prompt}</p>
          <p className="text-[10px] text-white/50 mt-1 uppercase tracking-widest">uMedia #{(video.id.slice(0, 4))}</p>
        </div>
      </div>
      
      {/* Delete Button (Visible on Hover) */}
      {onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/40 hover:text-red-400 hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100 z-10"
          title="Slett video"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      )}

      {/* Play Indicator */}
      {!isHovering && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/10">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
