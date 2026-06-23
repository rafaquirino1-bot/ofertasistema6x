import React from 'react';

const VslPlayer = React.memo(function VslPlayer() {
  return (
    <div className="mx-auto w-full max-w-[360px] sm:max-w-[400px] px-4">
      {/* 9:16 Aspect Ratio Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-black shadow-2xl shadow-emerald-500/5 aspect-[9/16]">
        {/* Robust embed player */}
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
  );
});

export default VslPlayer;


