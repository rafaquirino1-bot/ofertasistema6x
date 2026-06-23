import React, { useEffect } from 'react';

export default function VslPlayer() {
  useEffect(() => {
    // Dynamically inject VTurb player script
    const scriptId = 'vturb-player-script-6a39904861b3e1e42dd72069';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://scripts.converteai.net/2d124ecc-04ba-4b3a-a61d-0504955992be/players/6a39904861b3e1e42dd72069/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-[360px] sm:max-w-[400px] px-4">
      {/* 9:16 Aspect Ratio Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-2xl shadow-emerald-500/5 aspect-[9/16]">
        
        {/* VTurb Video Embed Wrapper */}
        <div 
          id="vid_6a39904861b3e1e42dd72069" 
          className="absolute inset-0 w-full h-full"
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          {/* Backdrop blurring thumb placeholder */}
          <img 
            id="thumb_6a39904861b3e1e42dd72069" 
            src="https://images.converteai.net/2d124ecc-04ba-4b3a-a61d-0504955992be/players/6a39904861b3e1e42dd72069/thumbnail.jpg" 
            className="absolute top-0 left-0 w-full h-full object-cover block"
            alt="Thumbnail"
          />
          <div 
            id="backdrop_6a39904861b3e1e42dd72069" 
            className="absolute top-0 left-0 w-full h-full backdrop-blur-2xl bg-black/40"
          />
          
          {/* Robust Fallback Iframe if direct script injection gets blocked in container environments */}
          <iframe 
            src="https://scripts.converteai.net/2d124ecc-04ba-4b3a-a61d-0504955992be/players/6a39904861b3e1e42dd72069/embed.html" 
            id="iframe_6a39904861b3e1e42dd72069" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }} 
            allowFullScreen={true} 
            allow="autoplay" 
            referrerPolicy="origin"
            title="VTurb Player VSL"
          />
        </div>
        
      </div>
    </div>
  );
}
