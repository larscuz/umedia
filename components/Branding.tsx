
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative h-full aspect-square group">
        <svg viewBox="0 0 100 100" className="h-full w-auto transition-transform duration-500 group-hover:rotate-90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <path d="M25 50L50 25L75 50L50 75L25 50" stroke="#22d3ee" strokeWidth="4" strokeLinecap="square" />
            <path d="M50 25V75" stroke="#d946ef" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="6" fill="white" className="animate-pulse" />
        </svg>
    </div>
    <span className="font-display font-black text-2xl tracking-tighter text-white">
        Cuz<span className="text-cyan-400">Media</span>
    </span>
  </div>
);

export const LogoLarge: React.FC = () => (
  <svg viewBox="0 0 512 512" width="512" height="512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="512" height="512" fill="#020617"/>
    <path d="M100 256L256 100L412 256L256 412L100 256" stroke="#22d3ee" strokeWidth="20" strokeLinecap="square" />
    <circle cx="256" cy="256" r="40" fill="white"/>
    <text x="50" y="470" fontFamily="Space Grotesk" fontSize="50" fontWeight="900" fill="white" letterSpacing="-2">CUZ MEDIA AI-BYRÅ</text>
  </svg>
);

export const FaviconSVG = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#020617"/>
    <path d="M8 16L16 8L24 16L16 24L8 16" stroke="#22d3ee" strokeWidth="3" />
    <text x="12" y="21" fontFamily="Space Grotesk" fontSize="14" fontWeight="900" fill="white" className="glitch-effect">C</text>
  </svg>
);
