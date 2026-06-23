import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "O sistema realmente funciona para iniciantes?",
      answer: "Sim! O sistema foi desenhado especificamente pensando em quem está começando do absoluto zero. Não é necessário nenhum tipo de conhecimento técnico anterior, programação ou experiência com marketing digital. Você receberá um passo a passo em vídeo mostrando exatamente onde clicar para obter seus primeiros resultados aplicando Inteligência Artificial."
    },
    {
      question: "Preciso aparecer nas redes sociais?",
      answer: "Absolutamente não! Todo o processo é feito de forma 100% oculta (sem aparecer). Você utilizará as ferramentas baseadas em IA para estruturar, executar e comercializar os ativos digitais sem necessitar expor sua imagem, nome ou voz."
    },
    {
      question: "Preciso investir dinheiro em anúncios?",
      answer: "Não! Mostramos métodos detalhados para começar de forma totalmente orgânica (sem gastar um centavo com anúncios). À medida que você obtiver retornos, poderá opcionalmente reinvestir uma fatia em tráfego pago caso queira acelerar e escalar drasticamente suas operações, mas o investimento inicial exigido é zero."
    },
    {
      question: "Eu recebo suporte se tiver dúvidas?",
      answer: "Sim, oferecemos um canal de suporte especializado disponível para esclarecer qualquer dúvida de aplicação das ferramentas, prompts e estratégias. Nossa equipe acompanha você passo a passo na jornada de aprendizagem e implementação do sistema."
    },
    {
      question: "Quanto tempo leva para aprender e aplicar?",
      answer: "Os processos com Inteligência Artificial são dinâmicos e rápidos de configurar. Geralmente, as aulas do treinamento principal são curtas, direto ao ponto e práticas. Nossos alunos conseguem configurar a estrutura inteira em poucas horas e iniciar as aplicações logo no primeiro ou segundo dia."
    },
    {
      question: "Como e quando eu recebo o meu acesso?",
      answer: "Imediatamente após a confirmação do pagamento! Pagamentos realizados via Cartão de Crédito ou PIX possuem aprovação instantânea. Assim que aprovado, você receberá automaticamente em seu e-mail cadastrado os dados de login e link de acesso exclusivo para a nossa plataforma de membros premium externa."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="border-t border-neutral-900 bg-neutral-950 py-20 px-4 md:px-0">
      <div className="mx-auto max-w-3xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Perguntas <span className="text-amber-400 font-black">Frequentes</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Tire suas principais dúvidas sobre o funcionamento do sistema e o acesso imediato.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-900 bg-neutral-900/45 transition-colors hover:border-neutral-800"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-5 py-4.5 text-left font-display text-sm font-semibold text-neutral-100 hover:text-white focus:outline-none md:text-base"
                >
                  <span className="pr-4">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-500 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-neutral-900 px-5 py-4 font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed bg-neutral-900/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
