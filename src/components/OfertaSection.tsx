import React from 'react';
import { Check, ShieldCheck, CreditCard, Sparkles, Award, Lock, Milestone } from 'lucide-react';
import { PageConfig } from '../types';

interface OfertaSectionProps {
  config: PageConfig;
  onCheckoutClick: () => void;
  isButtonVisible: boolean;
}

export default function OfertaSection({ config, onCheckoutClick, isButtonVisible }: OfertaSectionProps) {
  const benefits = [
    { title: "Método completo", desc: "Passo a passo teórico e prático detalhando a operação de ponta a ponta com IA." },
    { title: "Estrutura pronta", desc: "Modelos de páginas, funis e criativos de copy testados e aprovados para replicação." },
    { title: "Prompts organizados", desc: "Biblioteca premium de comandos precisos para extrair o máximo de velocidade do ChatGPT/Claude." },
    { title: "Ferramentas recomendadas", desc: "Links e tutoriais simples das melhores ferramentas gratuitas do mercado para otimizar processos." },
    { title: "Atualizações futuras", desc: "Acesso vitalício ou anual a todas as melhorias e novos módulos adicionados sem cobranças extras." },
    { title: "Suporte especializado", desc: "Canal aberto direto com profissionais para sanar dúvidas operacionais e técnicas de imediato." }
  ];

  const includesList = [
    "Treinamento Principal de IA Operacional",
    "Atualizações e Novos Módulos Inclusos",
    "Pacote Secreto de Bônus Exclusivos",
    "Acesso à nossa Comunidade Privada"
  ];

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="space-y-4">
      {/* SEÇÃO BENEFÍCIOS */}
      <section id="beneficios" className="border-t border-neutral-900 bg-neutral-950 py-24 px-4 md:px-0 relative">
        <div className="mx-auto max-w-5xl">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-400/20 uppercase tracking-widest font-mono">
              O Que Esperar
            </span>
            <h2 className="mt-4 font-display text-2xl font-black tracking-tight text-white md:text-4xl uppercase">
              O que você <span className="text-amber-400 font-black">receberá imediatamente</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-400 font-sans">
              Um ecossistema completo e simplificado para você começar a faturar utilizando ferramentas inteligentes.
            </p>
          </div>

          {/* Benefits list layout */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((bef, i) => (
              <div 
                key={i}
                className="rounded-xl border border-neutral-900 bg-black p-6 hover:border-amber-400/15 transition-all"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-display text-sm font-bold text-neutral-100">{bef.title}</h3>
                <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed font-sans">{bef.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO OFERTA PRINCIPAL */}
      <section id="oferta" className="border-t border-neutral-900 bg-black py-24 px-4 md:px-0 relative overflow-hidden">
        {/* Subtle decorative lights representing premium pitch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl relative z-10">
          
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-400/20 uppercase tracking-widest font-mono">
              Condição Única de Lançamento
            </span>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white md:text-5xl uppercase">
              ACESSO IMEDIATO <span className="text-amber-400 font-black">E COMPLETO</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-neutral-400">
              Desbloqueie todo o sistema com Inteligência Artificial e comece a gerar novas oportunidades hoje mesmo.
            </p>
          </div>

          {/* Pricing Box Container */}
          <div className="mx-auto max-w-md rounded-3xl border border-neutral-800 bg-neutral-950 p-6 md:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 px-3 py-1 text-[10px] font-bold text-black uppercase tracking-wider shadow-lg">
              Melhor Opção (Lançamento)
            </div>

            {/* List items Included */}
            <div className="mb-8 space-y-3.5">
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 font-display">
                O que está incluso:
              </span>
              {includesList.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-400">
                    <Check className="h-3.5 w-3.5 stroke-[3px]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-neutral-100 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Price stack */}
            <div className="border-t border-neutral-900 pt-6 text-center">
              <span className="text-xs text-neutral-500 line-through">
                De {formatCurrency(config.originalPrice)}
              </span>
              <div className="mt-1 flex items-baseline justify-center gap-1">
                <span className="font-sans text-xs font-semibold text-neutral-400">Por apenas</span>
                <span className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {formatCurrency(config.price)}
                </span>
              </div>
              <span className="mt-1 block text-[10px] text-emerald-400 font-medium font-mono">
                Ou em até 12x no cartão de crédito
              </span>
            </div>

            {/* Pulsating buying button */}
            <div className="mt-8">
              {!isButtonVisible ? (
                /* Hidden/Delayed placeholder locked card to keep VSL mechanics perfect */
                <div className="rounded-xl border border-dashed border-neutral-800 bg-neutral-900/10 p-5 text-center">
                  <Lock className="h-5 w-5 text-neutral-600 mx-auto mb-2 animate-bounce" />
                  <p className="font-display text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Oferta de Acesso Bloqueada
                  </p>
                  <p className="font-sans text-[11px] text-neutral-500 max-w-xs mx-auto mt-1 leading-relaxed">
                    Assista à apresentação de VSL acima para receber a oferta e desbloquear o botão de compras de forma instantânea.
                  </p>
                </div>
              ) : (
                /* Beautiful pulsating green button */
                <button
                  type="button"
                  id="btn-buy-offer"
                  onClick={onCheckoutClick}
                  className="w-full rounded-xl bg-emerald-500 py-4.5 text-center font-display text-base font-extrabold text-black uppercase tracking-wider hover:bg-emerald-400 shadow-xl shadow-emerald-500/10 transition-all hover:scale-103 active:scale-97 cursor-pointer animate-pulse-slow"
                >
                  QUERO ACESSAR AGORA
                </button>
              )}
            </div>

            {/* Badges footer */}
            <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-neutral-500 font-mono">
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5" /> Compra Segura
              </span>
              <span className="h-3.5 w-px bg-neutral-900" />
              <span className="flex items-center gap-1">
                <CreditCard className="h-3.5 w-3.5" /> Acesso Imediato
              </span>
            </div>
          </div>

          {/* SEÇÃO GARANTIA */}
          <div id="garantia" className="mt-14 mx-auto max-w-2xl rounded-2xl border border-neutral-900/60 bg-neutral-950 py-8 px-6 sm:px-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="bg-amber-400/5 text-amber-400 h-20 w-20 shrink-0 rounded-full flex items-center justify-center border border-amber-400/10">
              <Award className="h-11 w-11" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-base font-extrabold text-neutral-200 uppercase tracking-wide">
                GARANTIA DE SATISFAÇÃO INCONDICIONAL (7 DIAS)
              </h3>
              <p className="mt-2 font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Nós confiamos tanto em nosso método e na estrutura preparada que oferecemos risco zero. Caso o conteúdo não seja adequado às suas necessidades ou você não goste do suporte, basta seguir as condições de garantia informadas na oferta dentro do período regulamentar de 100% de reembolso sem burocracia.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
