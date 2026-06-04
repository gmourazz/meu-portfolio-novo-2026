import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Palette, Zap, Target, Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Aplicações React modernas com TypeScript, otimizadas para performance e escalabilidade.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Interfaces que equilibram estética e usabilidade — cada pixel tem propósito.',
  },
  {
    icon: Zap,
    title: 'Landing Pages',
    description: 'Páginas de alta conversão, rápidas e focadas em resultado para o seu negócio.',
  },
  {
    icon: Target,
    title: 'Consultoria',
    description: 'Estratégia técnica e de design para elevar a presença digital da sua marca.',
  },
];

const differentials = [
  'Caprichosa por natureza: cada detalhe importa, cada pixel tem propósito',
  'Comunicativa e acessível — parceria de verdade durante todo o projeto',
  'Cumpro prazos rigorosamente, sem enrolação',
  'Visão técnica + design: código sólido com experiência que encanta',
  'Não entrego nada pela metade — só quando está exatamente do jeito que você precisa',
];

const testimonials = [
  {
    name: 'Melina F.',
    initials: 'MF',
    avatarColor: 'from-[#c8956a] to-[#a07850]',
    text: 'Geovanna foi muito atenciosa e profissional, trabalharia com ela novamente e indico seu trabalho.',
    project: 'Site institucional cartão de visita',
  },
  {
    name: 'Roberto D.',
    initials: 'RD',
    avatarColor: 'from-[#d4a882] to-[#c8956a]',
    text: 'Excelente profissional.',
    project: 'Recriação de site GoDaddy',
  },
  {
    name: 'Gabriel B.',
    initials: 'GB',
    avatarColor: 'from-[#b5844f] to-[#8b6340]',
    text: 'Muito bom, entrega ágil e rápida! Com bastante qualidade, recomendo.',
    project: 'Landing page para planner de futebol',
  },
  {
    name: 'Andrios G.',
    initials: 'AG',
    avatarColor: 'from-[#c8956a] to-[#d4a882]',
    text: 'Desenvolvimento impecável, site ficou exatamente como eu precisava.',
    project: 'Site Mundo Pro Viagens (WordPress)',
  },
  {
    name: 'Cadu P.',
    initials: 'CP',
    avatarColor: 'from-[#a07850] to-[#c8956a]',
    text: 'Sem palavras pra ela — super educada, disposta a entender o projeto em cada detalhe. Voltaria a fazer outros projetos com ela. Obrigado Geovanna, ganhou um cliente!',
    project: 'Blog para nicho de finanças',
  },
  {
    name: 'Rafael B.',
    initials: 'RB',
    avatarColor: 'from-[#e0bc9a] to-[#c8956a]',
    text: 'A Geovanna é super profissional e muito acessível. Cumpriu com rigor os prazos. Muito satisfeito com o resultado.',
    project: 'Landing page com questionário integrado',
  },
  {
    name: 'Douglas S.',
    initials: 'DS',
    avatarColor: 'from-[#8b6340] to-[#c8956a]',
    text: 'Muito empenhada no trabalho, atingiu as expectativas!',
    project: 'Site para gráfica rápida',
  },
  {
    name: 'Debora N.',
    initials: 'DN',
    avatarColor: 'from-[#d4a882] to-[#b5844f]',
    text: 'Excelente profissional, muito rápida e competente! Irei trabalhar com ela novamente.',
    project: 'Landing page para curso presencial',
  },
];

const CHUNK_SIZE = 4;
const testimonialChunks = Array.from(
  { length: Math.ceil(testimonials.length / CHUNK_SIZE) },
  (_, i) => testimonials.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE)
);

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

export function About() {
  const [activeChunk, setActiveChunk] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    setDirection(idx > activeChunk ? 1 : -1);
    setActiveChunk(idx);
  };

  const prev = () => goTo((activeChunk - 1 + testimonialChunks.length) % testimonialChunks.length);
  const next = () => goTo((activeChunk + 1) % testimonialChunks.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveChunk(prev => (prev + 1) % testimonialChunks.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sobre" className="py-32 px-6 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #c8956a40, transparent)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-24 text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Sobre & Serviços</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Por que trabalhar </span>
            <br />
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">comigo?</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedora Frontend com 4 anos de experiência e especialista em UI/UX — código sólido com design que encanta.
          </motion.p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-28">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.08)}
              className="group relative p-7 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/40 transition-colors duration-500 overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#c8956a]/20 transition-all duration-300">
                  <s.icon className="w-7 h-7 text-[#c8956a]" />
                </div>
                <h3 className="text-base font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio + Differentials */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">

          {/* Bio */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="absolute -inset-px bg-gradient-to-br from-[#c8956a]/15 to-transparent rounded-2xl blur-2xl" />
            <div className="relative p-10 rounded-2xl bg-[#111] border border-[#1e1e1e]">
              <div className="text-5xl text-[#c8956a]/20 font-serif leading-none mb-4">"</div>
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                Sou apaixonada por transformar ideias em experiências digitais que as pessoas adoram usar.
                Pra mim, um site bom é aquele que o usuário abre e{' '}
                <span className="text-[#c8956a] font-semibold">já entende tudo sem precisar pensar</span>.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Sou caprichosa por natureza: cada detalhe importa, cada pixel tem propósito e cada projeto
                recebe o mesmo cuidado que eu gostaria de receber se fosse a cliente.{' '}
                <span className="text-white font-semibold">Não entrego nada pela metade.</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                Curso Engenharia de Software e levo isso a sério: cada projeto tem estrutura, planejamento
                e dedicação de verdade. Atualmente atuo como dev CLT em empresa GPTW e atendo clientes
                freelancer pelo CNPJ.
              </p>
              <div className="mt-8 pt-6 border-t border-[#1e1e1e] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] flex items-center justify-center text-xs font-black text-white">G</div>
                <div>
                  <p className="text-white font-bold text-sm">Geovanna Moura</p>
                  <p className="text-xs text-gray-500">Desenvolvedora Frontend & UI/UX · 4 anos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Differentials */}
          <div>
            <motion.h3 {...fadeUp(0)} className="text-3xl font-extrabold mb-8 tracking-tight">
              <span className="text-white">O que você pode </span>
              <span className="bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">esperar de mim</span>
            </motion.h3>
            <div className="space-y-3">
              {differentials.map((d, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/25 transition-colors duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-[#c8956a]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-3 h-3 text-[#c8956a]" fill="currentColor" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-4">
              <MessageSquare className="w-4 h-4 text-[#c8956a]" />
              <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Avaliações de Clientes</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-2">
              Todos os projetos com{' '}
              <span className="bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">5.0 ★</span>
            </h3>
            <p className="text-gray-500 text-sm">46+ projetos entregues · todos com nota máxima</p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeChunk}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: 'easeInOut' as const }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {testimonialChunks[activeChunk].map((t, i) => (
                    <div
                      key={i}
                      className="group flex flex-col p-5 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/30 transition-colors duration-300"
                    >
                      {/* Avatar + name */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-black text-white flex-shrink-0 shadow-lg`}>
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">{t.name}</p>
                          <div className="flex gap-0.5 mt-0.5">
                            {[...Array(5)].map((_, si) => (
                              <Star key={si} className="w-3 h-3 text-[#c8956a]" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-gray-400 text-xs leading-relaxed italic flex-1">"{t.text}"</p>

                      {/* Project */}
                      <div className="mt-4 pt-3 border-t border-[#1a1a1a]">
                        <p className="text-xs text-[#c8956a]/80 font-medium truncate">{t.project}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c8956a]/50 hover:text-[#c8956a] transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {testimonialChunks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeChunk ? 'bg-[#c8956a] w-6' : 'bg-[#2a2a2a] w-2 hover:bg-[#c8956a]/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c8956a]/50 hover:text-[#c8956a] transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
