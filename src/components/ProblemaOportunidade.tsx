import React from 'react';
import { XCircle, RefreshCw, Clock, AlertTriangle, ShieldX, Cpu, Zap, TrendingUp, Layers, Rocket, CheckCircle2 } from 'lucide-react';

export default function ProblemaOportunidade() {
  const problems = [
    {
      id: 1,
      title: "Métodos complicados",
      desc: "Estratégias mirabolantes que exigem conhecimento avançado em vendas, programação ou tráfego pago complexo.",
      icon: ShieldX
    },
    {
      id: 2,
      title: "Falta de conhecimento técnico",
      desc: "Sentir block por não saber criar sites, configurar servidores, integrar APIs ou mexer com ferramentas difíceis.",
      icon: XCircle
    },
    {
      id: 3,
      title: "Pouco tempo disponível",
      desc: "Conciliar a rotina de trabalho ou estudos atual com métodos que exigem dedicação exclusiva e horas de foco.",
      icon: Clock
    },
    {
      id: 4,
      title: "Ferramentas confusas",
      desc: "Assinaturas mensais caras de plataformas de e-mail, construtores e dezenas de ferramentas que não se integram.",
      icon: RefreshCw
    },
    {
      id: 5,
      title: "Informações desencontradas",
      desc: "Achar-se perdido com excesso de conteúdo gratuito no YouTube que não ensina uma metodologia estruturada passo a passo.",
      icon: AlertTriangle
    }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Automatiza tarefas repetitivas",
      desc: "A IA executa o trabalho pesado de pesquisa, design estrutural, redação de textos e coleta de dados por você em segundos.",
      icon: Cpu
    },
    {
      id: 2,
      title: "Aumenta drasticamente a produtividade",
      desc: "Faça em 10 minutos o que profissionais comuns levam semanas inteiras para entregar, sem perder a qualidade premium.",
      icon: Zap
    },
    {
      id: 3,
      title: "Escala operações sem custos fixos",
      desc: "Atenda múltiplos clientes ou crie diversas fontes produtivas simultaneamente, sem a necessidade de contratar funcionários.",
      icon: TrendingUp
    },
    {
      id: 4,
      title: "Cria ativos digitais de alta conversão",
      desc: "Gere ebooks, criativos, páginas de vendas, roteiros de vídeo e soluções completas apenas enviando os comandos (prompts) certos.",
      icon: Layers
    },
    {
      id: 5,
      title: "Reduz drasticamente o tempo de execução",
      desc: "Diga adeus à folha em branco. Com o método certo, a IA fornece rascunhos, revisões e estrutura de alta conversão instantaneamente.",
      icon: Rocket
    }
  ];

  return (
    <div className="space-y-4">
      {/* SEÇÃO PROBLEMA */}
      <section id="problema" className="border-t border-neutral-900 bg-black py-24 px-4 md:px-0 relative overflow-hidden">
        {/* Subtle radial overlay for premium deep dark gradient look */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.03),transparent_50%)]" />

        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 border border-red-500/20 uppercase tracking-widest font-mono">
              O Grande Obstáculo
            </span>
            <h2 className="mt-4 font-display text-2xl font-black tracking-tight text-white md:text-4xl uppercase max-w-3xl mx-auto leading-tight">
              A maioria das pessoas tenta ganhar dinheiro online <span className="text-red-500">da forma errada</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 font-sans">
              É por isso que 95% dos iniciantes desistem antes dos primeiros 30 dias. Eles tentam lutar contra o mercado usando métodos antigos.
            </p>
          </div>

          {/* Grid problems list */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((prob) => {
              const IconComp = prob.icon;
              return (
                <div
                  key={prob.id}
                  className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6 hover:border-red-500/20 transition-all duration-300 hover:translate-y-[-2px] relative overflow-hidden group"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-neutral-200 group-hover:text-white transition-colors">
                    {prob.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans">
                    {prob.desc}
                  </p>
                </div>
              );
            })}
            
            {/* Dark callout CTA warning card in grid */}
            <div className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-dashed border-red-500/30 bg-red-500/5 p-6 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase text-red-400 font-bold tracking-widest mb-1.5">Conclusão Crítica</span>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                Insistir nesses modelos exige meses de estudos exaustivos e muito capital de risco para testes. Felizmente, existe um atalho revolucionário...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO OPORTUNIDADE */}
      <section id="oportunidade" className="border-t border-neutral-900 bg-neutral-950 py-24 px-4 md:px-0 relative overflow-hidden">
        {/* Subtle glowing yellow gradient background overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.03),transparent_50%)]" />

        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-400/20 uppercase tracking-widest font-mono">
              A Nova Realidade
            </span>
            <h2 className="mt-4 font-display text-2xl font-black tracking-tight text-white md:text-4xl uppercase max-w-3xl mx-auto leading-tight">
              A Inteligência Artificial <span className="text-amber-400">mudou o jogo</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 font-sans">
              O que antes exigia equipes de 5 pessoas e milhares de reais em ferramentas, hoje é feito em segundos por robôs de IA totalmente gratuitos.
            </p>
          </div>

          {/* Grid opportunities list */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opp) => {
              const IconComp = opp.icon;
              return (
                <div
                  key={opp.id}
                  className="rounded-2xl border border-neutral-900 bg-black p-6 hover:border-amber-400/20 transition-all duration-300 hover:translate-y-[-2px] relative overflow-hidden group"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:bg-amber-400/20 transition-colors">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-neutral-200 group-hover:text-white transition-colors">
                    {opp.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans">
                    {opp.desc}
                  </p>
                </div>
              );
            })}

            {/* Glowing gold card inside the opportunity grid */}
            <div className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 text-amber-400/10 font-bold text-7xl select-none font-display">
                IA
              </div>
              <span className="font-display text-xs uppercase font-extrabold text-amber-400 tracking-wider mb-2">VANTAGEM EXCLUSIVA</span>
              <p className="font-sans text-xs text-neutral-200 leading-relaxed">
                Você não precisa inventar nada do zero. Nós preparamos uma estrutura pré-otimizada que permite copiar e aplicar esses ativos em minutos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
