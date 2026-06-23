import React, { useState, useEffect } from 'react';
import { PageConfig } from './types';
import VslPlayer from './components/VslPlayer';
import DelayButtonManager from './components/DelayButtonManager';
import { motion, AnimatePresence } from 'motion/react';
import { AlertOctagon, ChevronRight, HelpCircle } from 'lucide-react';

const STORAGE_KEY = 'vsl_ia_page_config';

const DEFAULTS: PageConfig = {
  vslUrl: 'https://scripts.converteai.net/2d124ecc-04ba-4b3a-a61d-0504955992be/players/6a39904861b3e1e42dd72069/v4/player.js',
  vslType: 'vturb',
  delayMinutes: 17,
  delaySeconds: 25, // Unlocks 10 seconds before video end (17:35 duration)
  checkoutUrl: 'https://pay.hub.la/wNBTtbUQaufF8Jc28iRn?ref=6VyMbziLGRuhExLwOTSu',
  price: 97.00,
  originalPrice: 297.00,
  whatsappSupportNumber: '5511999999999',
};

export default function App() {
  const [config, setConfig] = useState<PageConfig>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Force the requested delay (17:25) and Hubla checkout URL
        parsed.delaySeconds = 25;
        parsed.delayMinutes = 17;
        parsed.checkoutUrl = 'https://pay.hub.la/wNBTtbUQaufF8Jc28iRn?ref=6VyMbziLGRuhExLwOTSu';
        return parsed;
      } catch (e) {
        return DEFAULTS;
      }
    }
    return DEFAULTS;
  });

  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);
  const [checkoutSimulated, setCheckoutSimulated] = useState(false);
  const [currentDateFormatted, setCurrentDateFormatted] = useState('');

  // Capitalize and format dynamic Portuguese date
  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    const formatted = today.toLocaleDateString('pt-BR', options);
    const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    setCurrentDateFormatted(capitalized);
  }, []);

  const handleCheckout = () => {
    if (config.checkoutUrl === 'https://pay.kiwify.com.br/vsl-ia-mock-checkout') {
      setCheckoutSimulated(true);
    } else {
      window.open(config.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-amber-400 selection:text-black flex flex-col justify-between">
      
      {/* 🔮 TOP ANNOUNCEMENT BAR WITH DYNAMIC DATE & URGENCY (NETFLIX RED WITH WHITE & YELLOW POPPINS TEXT) */}
      <div className="bg-[#E50914] border-b border-red-700 py-3 px-4 text-center">
        <p className="font-poppins text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-white flex flex-wrap items-center justify-center gap-1.5 uppercase">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-300 animate-ping shrink-0" />
          <span>Oferta exclusiva garantida apenas para hoje: </span>
          <strong className="text-yellow-300 underline underline-offset-4 decoration-2 font-black">{currentDateFormatted || 'Hoje'}</strong>
        </p>
      </div>

      {/* ⚠️ HIGH CONVERTING ULTRA-PROMINENT PULSING WARNING BAR */}
      <div className="bg-red-950/30 border-b border-red-500/40 py-3 px-4 text-center relative overflow-hidden">
        {/* Animated intense threat background glow */}
        <div className="absolute inset-0 bg-red-600/5 animate-pulse" />
        <p className="relative flex items-center justify-center gap-3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black tracking-wider text-white uppercase text-center leading-tight">
          <AlertOctagon className="h-5 w-5 sm:h-7 sm:w-7 shrink-0 text-red-500 animate-bounce" />
          <span className="inline-block bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent font-black drop-shadow-[0_2px_15px_rgba(239,68,68,0.6)]">
            ⚠️ ATENÇÃO: Esta apresentação pode ficar indisponível sem aviso prévio.
          </span>
        </p>
      </div>

      {/* CONTENT CENTER CARD AREA (Clean, pure VSL focus) */}
      <main className="flex-grow flex flex-col items-center justify-center py-8 sm:py-12">
        <div className="w-full max-w-lg flex flex-col items-center">
          
          {/* Vertical 9:16 Video Player wrapper */}
          <div className="w-full mb-6">
            <VslPlayer />
          </div>

          {/* DELAYED BUTTON AND FEEDBACK */}
          <DelayButtonManager 
            checkoutUrl={config.checkoutUrl} 
            initialSeconds={1045} 
          />

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black py-10 border-t border-neutral-900/60 text-center font-sans">
        <div className="mx-auto max-w-md px-6 text-neutral-600 space-y-4 text-[10px]">
          
          <div className="flex justify-center gap-4 text-[11px] text-neutral-500">
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </button>
          </div>

          <p className="leading-relaxed">
            Este site não é afiliado ao Facebook, Google, YouTube ou Meta Platforms. Os resultados variam de pessoa para pessoa.
          </p>
          <p 
            className="text-[9px] cursor-pointer hover:text-neutral-500 transition-colors select-none"
            onDoubleClick={() => window.dispatchEvent(new CustomEvent('force-unlock-vsl'))}
            title="Dica de Teste: Dê um duplo clique aqui para liberar o botão instantaneamente!"
          >
            © 2026 VSL IA • Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Compliant Popup Dialogs */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-white"
            >
              <h3 className="font-display text-base font-bold text-amber-500 mb-3">
                {activeModal === 'terms' ? "Termos de Uso" : "Política de Privacidade"}
              </h3>
              <div className="max-h-48 overflow-y-auto text-[11px] text-neutral-400 leading-relaxed space-y-2 pr-1">
                {activeModal === 'terms' ? (
                  <p>O conteúdo disponibilizado destina-se ao aprendizado prático e aplicação individual de automações com inteligência artificial, sendo vedada a reprodução não autorizada do material.</p>
                ) : (
                  <p>Seus dados estão protegidos sob as diretrizes de privacidade aplicáveis. Não comercializamos dados pessoais com terceiros.</p>
                )}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="rounded-lg bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 text-xs font-semibold hover:bg-neutral-800 text-neutral-300"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CHECKOUT POPUP PREVIEW */}
      <AnimatePresence>
        {checkoutSimulated && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setCheckoutSimulated(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-xs rounded-2xl border border-neutral-800 bg-neutral-950 p-5 text-center text-white"
            >
              <Lock className="h-6 w-6 text-emerald-400 mx-auto mb-2 animate-bounce" />
              <h3 className="font-display text-sm font-bold text-neutral-100">Checkout Redirecionando...</h3>
              <p className="mt-1 text-[11px] text-neutral-400">
                Você seria direcionado com segurança para comprar o Sistema IA.
              </p>
              <div className="mt-4 flex flex-col gap-1.5">
                <a
                  href={config.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-emerald-500 py-2.5 text-xs font-bold text-black hover:bg-emerald-400 inline-flex items-center justify-center gap-1"
                >
                  Acessar Link Real <ChevronRight className="h-3.5 w-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setCheckoutSimulated(false)}
                  className="rounded-lg bg-neutral-900 border border-neutral-800 py-2 text-xs font-semibold hover:bg-neutral-800 text-neutral-400"
                >
                  Voltar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
