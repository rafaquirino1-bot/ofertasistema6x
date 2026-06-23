import React, { useState } from 'react';
import { PageConfig } from '../types';
import { Settings, X, Eye, EyeOff, RotateCcw, Save, Trash2, Check, Video, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AdminPanelProps {
  config: PageConfig;
  onUpdateConfig: (newConfig: PageConfig) => void;
  onResetTimer: () => void;
  onForceShowButton: () => void;
  isButtonVisible: boolean;
  timeLeft: number; // in seconds
}

export default function AdminPanel({
  config,
  onUpdateConfig,
  onResetTimer,
  onForceShowButton,
  isButtonVisible,
  timeLeft,
}: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localConfig, setLocalConfig] = useState<PageConfig>({ ...config });
  const [saved, setSaved] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(localConfig);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleResetDefaults = () => {
    const defaults: PageConfig = {
      vslUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Default fallback video
      vslType: 'youtube',
      delayMinutes: 0,
      delaySeconds: 15, // Low default for testing
      checkoutUrl: 'https://pay.kiwify.com.br/vsl-ia-mock-checkout',
      price: 97.00,
      originalPrice: 297.00,
      whatsappSupportNumber: '5511999999999',
    };
    setLocalConfig(defaults);
    onUpdateConfig(defaults);
    setTimeout(() => onResetTimer(), 100);
  };

  return (
    <>
      {/* Drawer Toggle Button */}
      <button
        type="button"
        id="btn-admin-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-amber-400 px-4 py-3 font-display text-sm font-bold text-black shadow-lg shadow-amber-500/20 hover:bg-amber-500 hover:scale-105 active:scale-95 transition-all"
        title="Painel de Edição"
      >
        <Settings className={`h-4 w-4 ${isOpen ? 'animate-spin' : ''}`} />
        <span>Configurar VSL</span>
        {timeLeft > 0 && !isButtonVisible && (
          <span className="ml-1 rounded bg-black/10 px-1.5 py-0.5 text-xs text-black/80 font-mono font-medium">
            {formatTime(timeLeft)}
          </span>
        )}
      </button>

      {/* Drawer Overlay & Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed bottom-0 left-0 top-0 z-40 w-full max-w-sm border-r border-neutral-800 bg-neutral-950 p-6 text-white shadow-2xl overflow-y-auto"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-amber-400">
                    Painel do Produtor
                  </h3>
                  <p className="font-sans text-xs text-neutral-400">
                    Ajuste recursos e links em tempo real
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Instant Controls */}
              <div className="mb-6 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4">
                <span className="mb-2 block font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Ações Rápidas de Teste
                </span>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-300">Botão de Compra:</span>
                    <span className={isButtonVisible ? 'text-emerald-400 font-bold' : 'text-amber-400'}>
                      {isButtonVisible ? 'LIBERADO (Visível)' : 'OCULTO'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={onForceShowButton}
                      disabled={isButtonVisible}
                      className={`flex items-center justify-center gap-1 rounded bg-neutral-800 px-3 py-2 text-xs font-medium text-white transition-all ${
                        isButtonVisible ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-700 hover:text-emerald-300'
                      }`}
                    >
                      <Eye className="h-3 w-3" />
                      Forçar Botão
                    </button>
                    <button
                      type="button"
                      onClick={onResetTimer}
                      className="flex items-center justify-center gap-1 rounded border border-neutral-800 bg-neutral-950 px-3 py-2 text-xs font-medium text-neutral-300 hover:bg-neutral-900 transition-all"
                    >
                      <RotateCcw className="h-3 w-3" />
                      Reiniciar Timer
                    </button>
                  </div>
                </div>
              </div>

              {/* Settings Form */}
              <form onSubmit={handleSave} className="space-y-4">
                {/* Video Settings */}
                <div>
                  <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Endereço de Vídeo (VSL)
                  </label>
                  <input
                    type="text"
                    required
                    value={localConfig.vslUrl}
                    onChange={(e) => setLocalConfig({ ...localConfig, vslUrl: e.target.value })}
                    placeholder="Link do vídeo (Ex: YouTube ou VTurb embed)"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-amber-400 focus:outline-none transition-colors"
                  />
                  <span className="mt-1 block text-[10px] text-neutral-500">
                    Aceita links do YouTube embed (ex: youtube.com/embed/ID), Vimeo ou VTurb embed.
                  </span>
                </div>

                {/* Video Source Type */}
                <div>
                  <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Tipo de Player
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(['youtube', 'vimeo', 'vturb', 'custom'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setLocalConfig({ ...localConfig, vslType: type })}
                        className={`rounded-lg border px-3 py-1.5 text-xs font-medium capitalize transition-all ${
                          localConfig.vslType === type
                            ? 'border-amber-400 bg-amber-400/10 text-amber-400'
                            : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-850'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delay configuration */}
                <div>
                  <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Tempo de Atraso do Botão
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-neutral-500">Minutos</span>
                      <input
                        type="number"
                        min="0"
                        max="120"
                        value={localConfig.delayMinutes}
                        onChange={(e) =>
                          setLocalConfig({ ...localConfig, delayMinutes: parseInt(e.target.value) || 0 })
                        }
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-center focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500">Segundos</span>
                      <input
                        type="number"
                        min="0"
                        max="59"
                        value={localConfig.delaySeconds}
                        onChange={(e) =>
                          setLocalConfig({ ...localConfig, delaySeconds: parseInt(e.target.value) || 0 })
                        }
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm text-center focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <span className="mt-1 block text-[10px] text-neutral-500">
                    O botão aparecerá automaticamente após este intervalo.
                  </span>
                </div>

                {/* Pricing settings */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="mb-1 block font-display text-xs font-bold uppercase text-neutral-400">
                      Preço (R$)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={localConfig.price}
                      onChange={(e) => setLocalConfig({ ...localConfig, price: parseFloat(e.target.value) || 0 })}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block font-display text-xs font-bold uppercase text-neutral-400">
                      De (R$)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={localConfig.originalPrice}
                      onChange={(e) =>
                        setLocalConfig({ ...localConfig, originalPrice: parseFloat(e.target.value) || 0 })
                      }
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Checkout URL */}
                <div>
                  <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Link de Checkout
                  </label>
                  <input
                    type="text"
                    required
                    value={localConfig.checkoutUrl}
                    onChange={(e) => setLocalConfig({ ...localConfig, checkoutUrl: e.target.value })}
                    placeholder="Link da Kiwify ou outra plataforma"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Whatsapp Support */}
                <div>
                  <label className="mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-neutral-400">
                    WhatsApp de Suporte
                  </label>
                  <input
                    type="text"
                    required
                    value={localConfig.whatsappSupportNumber}
                    onChange={(e) => setLocalConfig({ ...localConfig, whatsappSupportNumber: e.target.value })}
                    placeholder="Número internacional EX: 5511999999999"
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 font-display text-sm font-bold text-black hover:bg-emerald-400 active:scale-98 transition-all"
                  >
                    {saved ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>Salvo com Sucesso!</span>
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        <span>Aplicar Alterações</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Reset to defaults */}
              <div className="mt-8 border-t border-neutral-900 pt-4">
                <button
                  type="button"
                  onClick={handleResetDefaults}
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/5 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/15 transition-all"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Restaurar Valores Originais
                </button>
              </div>

              {/* Testing disclaimer */}
              <div className="mt-6 rounded border border-neutral-900 bg-neutral-950 p-3 text-[11px] text-neutral-500 leading-relaxed">
                💡 <strong>Tempo de teste sugerido:</strong> o atraso inicial vem configurado de forma curta (15s) para você testar sem esperar. Clique em <strong>"Forçar Botão"</strong> para ignorar ou altere o tempo para simular os <strong>17 min e 35s</strong> de VSL no tráfego frio real.
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
