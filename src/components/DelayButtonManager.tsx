import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock } from 'lucide-react';

interface DelayButtonManagerProps {
  checkoutUrl: string;
  initialSeconds: number;
}

export default function DelayButtonManager({ checkoutUrl, initialSeconds }: DelayButtonManagerProps) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const buyButtonRef = useRef<HTMLDivElement>(null);
  const isSyncedWithVideo = useRef(false);
  const lastUpdatedSecond = useRef<number>(-1);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isButtonVisible) return;

    // Start fallback countdown interval
    const interval = setInterval(() => {
      if (isSyncedWithVideo.current) return;

      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsButtonVisible(true);
          return 0;
        }
        return prev - 1;
      });
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
                
                // Unlock 10 seconds before video end
                if (secondsFromEnd <= 10 && secondsFromEnd >= 0) {
                  setIsButtonVisible(true);
                  setTimeLeft(0);
                } else if (secondsFromEnd > 10) {
                  setIsButtonVisible(false);
                  const newTimeLeft = Math.ceil(secondsFromEnd - 10);
                  setTimeLeft(newTimeLeft);
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
      setTimeLeft(0);
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
    <div ref={buyButtonRef} className="w-full max-w-[360px] sm:max-w-[400px] px-4 text-center min-h-[90px]">
      <AnimatePresence mode="wait">
        {!isButtonVisible ? (
          <motion.div 
            key="locked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-2 shrink-0"
          >
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-neutral-500 font-mono tracking-wider uppercase font-semibold">
              <Lock className="h-3 w-3 animate-pulse text-amber-500" />
              <span>Aguarde {formatTime(timeLeft)} para liberar o acesso especial...</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-full space-y-4 pt-1"
          >
            <a
              href={checkoutUrl}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
