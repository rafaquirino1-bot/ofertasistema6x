import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

interface DelayButtonManagerProps {
  checkoutUrl: string;
  initialSeconds: number;
}

export default function DelayButtonManager({ checkoutUrl, initialSeconds }: DelayButtonManagerProps) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const buyButtonRef = useRef<HTMLDivElement>(null);
  const timerTextRef = useRef<HTMLSpanElement>(null);
  const isSyncedWithVideo = useRef(false);
  const lastUpdatedSecond = useRef<number>(-1);
  const currentTimeLeft = useRef<number>(initialSeconds);

  // Store the initial checkout URL with initial query parameters on mount.
  // This state is set once and never changed, ensuring React never overwrites the href modified by UTMfy script!
  const [initialCheckoutUrl] = useState(() => {
    if (!checkoutUrl) return '';
    try {
      const url = new URL(checkoutUrl);
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      return url.toString();
    } catch (e) {
      if (window.location.search) {
        const separator = checkoutUrl.includes('?') ? '&' : '?';
        return `${checkoutUrl}${separator}${window.location.search.replace(/^\?/, '')}`;
      }
      return checkoutUrl;
    }
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isButtonVisible) return;

    // Direct DOM manipulation helper to prevent React virtual DOM rendering overhead
    const updateTimeLeftDOM = (seconds: number) => {
      currentTimeLeft.current = seconds;
      if (timerTextRef.current) {
        timerTextRef.current.textContent = `Aguarde ${formatTime(seconds)} para liberar o acesso especial...`;
      }
    };

    // Initialize display content immediately
    updateTimeLeftDOM(currentTimeLeft.current);

    // Start fallback countdown interval
    const interval = setInterval(() => {
      if (isSyncedWithVideo.current) return;

      const nextVal = currentTimeLeft.current - 1;
      if (nextVal <= 0) {
        setIsButtonVisible(true);
        clearInterval(interval);
      } else {
        updateTimeLeftDOM(nextVal);
      }
    }, 1000);

    // Listen to video postMessage events (VTurb / Panda)
    const handleMessage = (event: MessageEvent) => {
      try {
        let parsedData = event.data;
        if (typeof parsedData === 'string') {
          if (parsedData.includes('panda_') || parsedData.includes('pandas_') || parsedData.includes('timeupdate')) {
            try {
              parsedData = JSON.parse(parsedData);
            } catch (err) {
              // Not JSON
            }
          }
        }

        if (parsedData && typeof parsedData === 'object') {
          const messageType = parsedData.message || parsedData.event || parsedData.type;
          
          if (messageType && typeof messageType === 'string') {
            if (messageType.includes('timeupdate') || messageType.includes('TimeUpdate')) {
              const currentTime = parsedData.currentTime ?? parsedData.current_time ?? parsedData.time;
              const duration = parsedData.duration ?? parsedData.totalTime ?? parsedData.total_time;

              if (typeof currentTime === 'number' && typeof duration === 'number' && duration > 0) {
                const currentSecond = Math.floor(currentTime);
                if (lastUpdatedSecond.current === currentSecond) {
                  return;
                }
                lastUpdatedSecond.current = currentSecond;

                // Mark as synced with live video feed
                isSyncedWithVideo.current = true;
                
                const secondsFromEnd = duration - currentTime;
                const unlockThreshold = Math.min(480, duration); // Reveal during the last 8 minutes (480s) or immediately if shorter
                
                if (secondsFromEnd <= unlockThreshold && secondsFromEnd >= 0) {
                  setIsButtonVisible(true);
                } else if (secondsFromEnd > unlockThreshold) {
                  setIsButtonVisible(false);
                  const newTimeLeft = Math.ceil(secondsFromEnd - unlockThreshold);
                  updateTimeLeftDOM(newTimeLeft);
                }
              }
            }
          }
        }
      } catch (error) {
        // Soft error handle
      }
    };

    // Global listener for cheat code / force unlock
    const handleForceUnlock = () => {
      setIsButtonVisible(true);
    };

    window.addEventListener('message', handleMessage);
    window.addEventListener('force-unlock-vsl', handleForceUnlock);

    return () => {
      clearInterval(interval);
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('force-unlock-vsl', handleForceUnlock);
    };
  }, [isButtonVisible]);

  // Smooth scroll into view when unlocked
  useEffect(() => {
    if (isButtonVisible && buyButtonRef.current) {
      const timer = setTimeout(() => {
        buyButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isButtonVisible]);

  return (
    <div ref={buyButtonRef} className="w-full max-w-[360px] sm:max-w-[400px] px-4 text-center min-h-[90px] flex flex-col items-center justify-center relative">
      
      {/* LOCKED STATE CONTAINER: Always in DOM, but visually hidden when unlocked */}
      <div 
        className={`w-full flex flex-col items-center justify-center py-2 shrink-0 transition-all duration-500 ${
          isButtonVisible 
            ? 'opacity-0 pointer-events-none select-none h-0 overflow-hidden absolute' 
            : 'opacity-60 scale-100 relative'
        }`}
      >
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-neutral-500 font-mono tracking-wider uppercase font-semibold">
          <Lock className="h-3 w-3 animate-pulse text-amber-500" />
          <span ref={timerTextRef}>
            Aguarde {formatTime(initialSeconds)} para liberar o acesso especial...
          </span>
        </div>
      </div>

      {/* UNLOCKED STATE CONTAINER (Checkout Button): Always in DOM so trackers like UTMfy can find it and track the page view instantly! */}
      <div
        className={`w-full transition-all duration-500 transform ${
          isButtonVisible
            ? 'opacity-100 scale-100 pointer-events-auto relative block space-y-4 pt-1'
            : 'opacity-0 scale-95 pointer-events-none select-none h-0 overflow-hidden absolute'
        }`}
      >
        <a
          href={initialCheckoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer-swipe block w-full rounded-xl bg-emerald-500 py-4.5 text-center font-display text-base sm:text-lg font-black text-black uppercase tracking-wider hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-emerald-500/15 cursor-pointer no-underline"
        >
          QUERO ACESSAR AGORA
        </a>

        <div className="flex items-center justify-center gap-3.5 text-[10px] text-neutral-500 font-mono">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Compra Garantida
          </span>
          <span className="h-3 w-px bg-neutral-800" />
          <span>Garantia de 7 dias</span>
        </div>
      </div>

    </div>
  );
}
