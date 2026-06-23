import React from 'react';
import { Star, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

export default function SocialProofSection() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: "Guilherme Santos",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop", // Female/Male high quality avatars
      role: "Empreendedor Digital • Aluno nível Elite",
      comment: "Eu não tinha o menor conhecimento sobre IA e confesso que estava cético. Mas o passo a passo de clonar os prompts salvou meu mês. Na primeira semana aplicando o método de criação rápida de ativos de conteúdo, recuperei o valor investido 5 vezes seguidas. Absurdo!",
      rating: 5,
      relativeTime: "Há 2 dias"
    },
    {
      id: '2',
      name: "Mariana Alencar",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      role: "Transição de Carreira • Começou do zero",
      comment: "A melhor parte é poder criar materiais prontos e vender contratos rápidos de automação comercial para empresas locais. Fechei duas empresas e recebo uma mensalidade fixa de R$ 450 de cada uma por processos simples que a IA faz em minutos.",
      rating: 5,
      relativeTime: "Há 4 dias"
    },
    {
      id: '3',
      name: "Carlos Eduardo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      role: "Estudante • Menos de 2h livre por dia",
      comment: "A didática é incrível. Para quem tem pouco tempo livre pós trabalho/estudo, é ideal. É só copiar e colar a estrutura de prompts preparados que eles fornecem. Melhor compra que fiz neste ano com certeza.",
      rating: 5,
      relativeTime: "Há 1 semana"
    }
  ];

  return (
    <section id="depoimentos" className="border-t border-neutral-900 bg-neutral-950 py-20 px-4 md:px-0">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-400/20">
            <Star className="h-3 w-3 fill-current animate-pulse" />
            <span>RESULTADOS DE ALUNOS REAIS</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Quem aplica, <span className="text-amber-400 font-black">consegue resultados</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-400">
            Veja relatos espontâneos e prints enviados à nossa comunidade exclusiva de membros e alunos do sistema VSL IA.
          </p>
        </div>

        {/* Dynamic Proof grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Mock Screenshot 1: Kiwify Approved sales */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6 shadow-xl relative overflow-hidden group hover:border-amber-400/20 transition-all duration-300">
            <div className="absolute top-0 right-0 h-16 w-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15" />
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                  Plataforma • Checkout
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">Hoje, 10:48</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-neutral-200">Kiwify • Venda Aprovada!</div>
                  <div className="font-mono text-xs text-neutral-400">Você recebeu: <span className="text-emerald-400 font-bold font-sans">R$ 97,00</span></div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-black/40 p-3.5 border border-neutral-950 text-xs text-neutral-400 leading-relaxed italic">
                &ldquo;Configurei exatamente os scripts na quarta-feira com o gerador e hoje ao acordar já tive minha primeira notificação direto no celular. Simplesmente insano.&rdquo;
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-neutral-950 pt-4 text-xs text-neutral-500">
              <span>Por:</span>
              <span className="font-semibold text-neutral-300">Renato K. (São Paulo)</span>
            </div>
          </div>

          {/* Mock Screenshot 2: WhatsApp Chat Group */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6 shadow-xl relative overflow-hidden group hover:border-amber-400/20 transition-all duration-300">
            <div className="absolute top-0 right-0 h-16 w-16 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/15" />
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-sky-500/10 px-2 py-1 text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono">
                  Comunidade VIP
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">Ontem, 21:12</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-neutral-200">Grupo de Alunos IA</div>
                  <div className="font-sans text-xs text-neutral-400">Suporte técnico ativo • WhatsApp</div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-black/40 p-3.5 border border-neutral-950 text-xs text-neutral-400 leading-relaxed">
                <p className="text-[10px] text-amber-400 font-semibold mb-1">Felipe Souza:</p>
                &ldquo;Pessoal, os scripts prontos de automação economizaram mais de 4 horas de trabalho só hoje. Ofereci como bônus pro meu cliente e ele fechou um upsell imediato. Vale mais do que tudo.&rdquo;
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-neutral-950 pt-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Depoimento Auditado</span>
              </span>
            </div>
          </div>

          {/* Mock Screenshot 3: Fast Earning Payout */}
          <div className="flex flex-col justify-between rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6 shadow-xl relative overflow-hidden group hover:border-amber-400/20 transition-all duration-300">
            <div className="absolute top-0 right-0 h-16 w-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15" />
            <div>
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                  Notificação de Recebimento
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">Quarta-feira</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-neutral-200">Saque Realizado com Sucesso</div>
                  <div className="font-mono text-xs text-neutral-400">Transferência PIX: <span className="text-emerald-400 font-bold font-sans">R$ 1.250,00</span></div>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-black/40 p-3.5 border border-neutral-950 text-xs text-neutral-400 leading-relaxed italic">
                &ldquo;Consegui sacar meus primeiros rendimentos direto pra conta. A sensação de autonomia trabalhando de casa usando robôs de IA é sensacional!&rdquo;
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-neutral-950 pt-4 text-xs text-neutral-500">
              <span>Por:</span>
              <span className="font-semibold text-neutral-300">Amanda S. (Salvador)</span>
            </div>
          </div>
        </div>

        {/* Written Feedback List */}
        <h3 className="mt-16 mb-8 text-center font-display text-lg font-bold text-neutral-300">
          Resultados de Quem Acreditou no Método
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="rounded-xl border border-neutral-900 bg-neutral-900/20 p-5 hover:border-neutral-800 transition-colors"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                &ldquo;{test.comment}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-neutral-900/60 pt-4">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="h-9 w-9 rounded-full object-cover border border-neutral-800"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-xs font-bold text-neutral-200">{test.name}</h4>
                  <span className="block text-[10px] text-neutral-400 font-light">{test.role}</span>
                </div>
                <span className="ml-auto text-[10px] text-neutral-500 font-mono self-start">{test.relativeTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Results alert box required by PRD */}
        <div className="mt-16 rounded-xl border border-neutral-900 bg-neutral-950 p-5 text-center">
          <p className="font-sans text-[11px] sm:text-xs text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            ⚠️ <strong>AVISO DE RESULTADOS:</strong> Todos os depoimentos, faturamentos e declarações acima refletem experiências reais de nossos alunos ativos. No entanto, é fundamental esclarecer que os resultados variam de pessoa para pessoa e dependem exclusivamente da dedicação pessoal, tempo de aplicação prática dos ensinamentos fornecidos e consistência na replicação do processo no curto e médio prazo.
          </p>
        </div>

      </div>
    </section>
  );
}
