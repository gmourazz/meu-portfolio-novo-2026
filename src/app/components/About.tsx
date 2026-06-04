import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, animate as motionAnimate } from "motion/react";
import { SpaceBackground } from "./SpaceBackground";
import {
  Code,
  Palette,
  Zap,
  Target,
  Star,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const services = [
  {
    icon: Code,
    num: "01",
    title: "Desenvolvimento Web",
    description:
      "Sites e aplicações React modernas com TypeScript sendo rápidos, responsivos e escaláveis.",
  },
  {
    icon: Palette,
    num: "02",
    title: "UI/UX Design",
    description:
      "Interfaces que equilibram estética e usabilidade. Cada tela pensada para o usuário.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de clientes.",
  },
  {
    icon: Target,
    num: "04",
    title: "Consultoria",
    description:
      "Estratégia técnica e de design para elevar a presença digital da sua marca.",
  },
];

const perks = [
  {
    icon: Star,
    title: "Caprichosa por natureza",
    desc: "Cada detalhe importa. Não entrego nada que eu mesma não aprovaria como cliente.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação real",
    desc: "Você sabe o que está acontecendo em cada etapa. Sem sumiço, sem surpresas.",
  },
  {
    icon: Clock,
    title: "Prazo é prazo",
    desc: "Cumpro datas com rigor. Seu projeto entregue no tempo combinado, sempre.",
  },
  {
    icon: Code,
    title: "Código + Design",
    desc: "Site bonito E bem construído. Performance, acessibilidade e usabilidade juntos.",
  },
  {
    icon: CheckCircle2,
    title: "Entrega completa",
    desc: "Só finalizo quando está exatamente do jeito que você precisa e idealizou, sem meio-termo.",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado",
    desc: "Sites feitos pra converter e crescer, não só pra impressionar visualmente.",
  },
];

const testimonials = [
  {
    name: "Melina F.",
    initials: "MF",
    avatarColor: "from-[#c8956a] to-[#a07850]",
    text: "Geovanna foi muito atenciosa e profissional, trabalharia com ela novamente e indico seu trabalho.",
    project: "Site institucional cartão de visita",
  },
  {
    name: "Roberto D.",
    initials: "RD",
    avatarColor: "from-[#d4a882] to-[#c8956a]",
    text: "Excelente profissional.",
    project: "Recriação de site GoDaddy",
  },
  {
    name: "Gabriel B.",
    initials: "GB",
    avatarColor: "from-[#b5844f] to-[#8b6340]",
    text: "Muito bom, entrega ágil e rápida! Com bastante qualidade, recomendo.",
    project: "Landing page para planner de futebol",
  },
  {
    name: "Andrios G.",
    initials: "AG",
    avatarColor: "from-[#c8956a] to-[#d4a882]",
    text: "Desenvolvimento impecável, site ficou exatamente como eu precisava.",
    project: "Site Mundo Pro Viagens (WordPress)",
  },
  {
    name: "Cadu P.",
    initials: "CP",
    avatarColor: "from-[#a07850] to-[#c8956a]",
    text: "Sem palavras pra ela — super educada, disposta a entender o projeto em cada detalhe. Voltaria a fazer outros projetos com ela. Obrigado Geovanna, ganhou um cliente!",
    project: "Blog para nicho de finanças",
  },
  {
    name: "Rafael B.",
    initials: "RB",
    avatarColor: "from-[#e0bc9a] to-[#c8956a]",
    text: "A Geovanna é super profissional e muito acessível. Cumpriu com rigor os prazos. Muito satisfeito com o resultado.",
    project: "Landing page com questionário integrado",
  },
  {
    name: "Douglas S.",
    initials: "DS",
    avatarColor: "from-[#8b6340] to-[#c8956a]",
    text: "Muito empenhada no trabalho, atingiu as expectativas!",
    project: "Site para gráfica rápida",
  },
  {
    name: "Debora N.",
    initials: "DN",
    avatarColor: "from-[#d4a882] to-[#b5844f]",
    text: "Excelente profissional, muito rápida e competente! Irei trabalhar com ela novamente.",
    project: "Landing page para curso presencial",
  },
  {
    name: "Henrique M.",
    initials: "HM",
    avatarColor: "from-[#a07850] to-[#d4a882]",
    text: "Super competente e rápida.",
    project: "Landing page para campanha no Google ADS",
  },
  {
    name: "Larissa",
    initials: "LA",
    avatarColor: "from-[#c8956a] to-[#b5844f]",
    text: "Atenciosa e talentosa, sempre atendeu a minhas dúvidas.",
    project: "Criar site de notícias com painel de gerenciamento simples",
  },
];

const track = [...testimonials, ...testimonials];
const N = testimonials.length;
const GAP = 16;

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardW, setCardW] = useState(0);
  const [cols, setCols] = useState(4);
  const [dotIdx, setDotIdx] = useState(0);
  const xMV = useMotionValue(0);
  const idxRef = useRef(0);
  const busyRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const c = w < 640 ? 1 : w < 1024 ? 2 : 4;
      setCols(c);
      setCardW((w - GAP * (c - 1)) / c);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const slide = useCallback(
    (toIdx: number) => {
      const sw = cardW + GAP;
      motionAnimate(xMV, -(toIdx * sw), {
        duration: 0.72,
        ease: "easeInOut" as const,
        onComplete: () => {
          const real = ((toIdx % N) + N) % N;
          if (toIdx !== real) {
            xMV.set(-(real * sw));
            idxRef.current = real;
          } else {
            idxRef.current = toIdx;
          }
          setDotIdx(real);
          busyRef.current = false;
        },
      });
    },
    [xMV, cardW],
  );

  const goNext = useCallback(() => {
    if (busyRef.current || cardW === 0) return;
    busyRef.current = true;
    slide(idxRef.current + 1);
  }, [slide, cardW]);

  const goPrev = useCallback(() => {
    if (busyRef.current || cardW === 0) return;
    busyRef.current = true;
    if (idxRef.current === 0) {
      xMV.set(-(N * (cardW + GAP)));
      idxRef.current = N;
    }
    slide(idxRef.current - 1);
  }, [slide, xMV, cardW]);

  const goTo = useCallback(
    (idx: number) => {
      if (busyRef.current || cardW === 0 || idx === dotIdx) return;
      busyRef.current = true;
      idxRef.current = dotIdx;
      slide(idx);
    },
    [slide, cardW, dotIdx],
  );

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <section
      id="sobre"
      className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#111]"
    >
      <SpaceBackground variant="a" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="mb-10 md:mb-20 text-left md:text-center">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">
              Sobre & Serviços
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl font-extrabold mb-5 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Por que trabalhar{" "}
            </span>
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">
              comigo?
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-lg text-gray-400 md:max-w-2xl md:mx-auto leading-relaxed"
          >
            Não apenas um site bonito construo{" "}
            <span className="text-white font-semibold">
              uma solução digital completa
            </span>{" "}
            feita pra crescer com o seu negócio.
          </motion.p>
        </div>

        {/* ── Services ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp(i * 0.08)}
              className="group relative p-7 rounded-2xl bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#c8956a]/50 transition-colors duration-500 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c8956a] to-[#d4a882] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center group-hover:bg-[#c8956a]/20 group-hover:scale-110 transition-all duration-300">
                    <s.icon className="w-6 h-6 text-[#c8956a]" />
                  </div>
                  <span className="text-2xl font-black text-[#c8956a]/15 group-hover:text-[#c8956a]/30 transition-colors duration-300">
                    {s.num}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2 text-white">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Main pitch ── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10 md:mb-20">
          {/* Bio card */}
          <motion.div
            {...fadeUp(0)}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/8 via-transparent to-transparent" />
            <div className="relative p-6 md:p-10 border border-[#c8956a]/20 rounded-2xl h-full flex flex-col justify-between gap-8">
              <div>
                <p className="text-4xl text-[#c8956a]/20 font-serif leading-none mb-3">
                  "
                </p>
                <p className="text-white text-2xl font-bold leading-snug mb-4">
                  Enquanto outros entregam código, eu entrego resultado.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm mb-4">
                  Sou desenvolvedora Frontend com 4 anos de experiência,
                  caprichosa por natureza: cada detalhe importa, cada pixel tem
                  propósito. Cada projeto recebe o mesmo cuidado que eu gostaria
                  de ter se fosse a cliente. Nada fica pela metade.
                </p>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Curso Engenharia de Software, atuo como dev CLT e atendo
                  clientes pelo CNPJ. Código que sustenta, design que encanta e
                  dedicação do início ao fim.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1e1e1e]">
                {[
                  { value: "4+", label: "anos de exp." },
                  { value: "38+", label: "projetos" },
                  { value: "5.0★", label: "avaliação" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5 uppercase tracking-wider">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Perks grid */}
          <div className="grid grid-cols-2 gap-3">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp(i * 0.07)}
                className="group p-5 rounded-2xl bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#c8956a]/30 transition-colors duration-300"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center mb-3 group-hover:bg-[#c8956a]/20 transition-colors duration-300">
                  <p.icon className="w-4 h-4 text-[#c8956a]" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{p.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div>
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-4">
              <MessageSquare className="w-4 h-4 text-[#c8956a]" />
              <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">
                Avaliações de Clientes
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-2">
              Todos os projetos com{" "}
              <span className="bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">
                5.0 ★
              </span>
            </h3>
            <p className="text-gray-500 text-sm">
              38+ projetos entregues · todos com nota máxima
            </p>
          </motion.div>

          {/* Carousel track */}
          <div ref={containerRef} className="overflow-hidden">
            <motion.div className="flex" style={{ x: xMV, gap: `${GAP}px` }}>
              {track.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col p-5 rounded-2xl bg-[#0d0d0d] border border-[#1e1e1e] flex-shrink-0"
                  style={{
                    width:
                      cardW > 0
                        ? cardW
                        : `calc((100% - ${GAP * (cols - 1)}px) / ${cols})`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-black text-white flex-shrink-0 shadow-lg`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{t.name}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, si) => (
                          <Star
                            key={si}
                            className="w-3 h-3 text-[#c8956a]"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed italic flex-1">
                    "{t.text}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#1a1a1a]">
                    <p className="text-xs text-[#c8956a]/80 font-medium truncate">
                      {t.project}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c8956a]/50 hover:text-[#c8956a] transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === dotIdx
                      ? "bg-[#c8956a] w-6"
                      : "bg-[#2a2a2a] w-2 hover:bg-[#c8956a]/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c8956a]/50 hover:text-[#c8956a] transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
