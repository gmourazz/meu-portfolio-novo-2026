import { motion } from 'motion/react';
import { ArrowRight, Code2, Sparkles, Zap, Download } from 'lucide-react';
import imgGeovanna from '../../imports/Image__11_.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#c8956a 1px, transparent 1px), linear-gradient(90deg, #c8956a 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient orbs */}
      <motion.div
        className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#c8956a] blur-[160px] opacity-10 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#d4a882] blur-[160px] opacity-10 pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: content ── */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/25 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8956a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8956a]" />
                </span>
                <span className="text-sm text-[#c8956a] font-semibold tracking-wide">
                  Disponível para projetos · Resposta em 24h
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="space-y-1">
              <p className="text-gray-500 text-lg font-medium">Olá, eu sou</p>
              <h1 className="text-7xl md:text-8xl font-extrabold leading-none tracking-tight">
                <span className="text-white block">Geovanna</span>
                <span className="block bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">
                  Moura
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 text-gray-300 text-xl font-semibold"
            >
              <Code2 className="w-6 h-6 text-[#c8956a] flex-shrink-0" />
              <span>Desenvolvedora Front-End</span>
              <Sparkles className="w-5 h-5 text-[#c8956a]/60" />
            </motion.div>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              Transformo ideias em{' '}
              <span className="text-[#c8956a] font-semibold">experiências digitais premium</span> —
              interfaces modernas, rápidas e que encantam do primeiro clique.
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-10 py-6 border-y border-[#1e1e1e]"
            >
              {[
                { value: '4+', label: 'Anos de experiência' },
                { value: '46+', label: 'Projetos entregues' },
                { value: '5.0★', label: 'Avaliação média' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-base"
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(200,149,106,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Iniciar Projeto <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#projetos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#c8956a]/30 text-white font-semibold text-base hover:bg-[#c8956a]/5 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Zap className="w-4 h-4 text-[#c8956a]" /> Ver Projetos
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#2a2a2a] text-gray-400 font-medium text-base hover:border-[#c8956a]/30 hover:text-white transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" /> Currículo
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right: photo ── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' as const }}
          >
            {/* Outer rotating rings */}
            <motion.div
              className="absolute w-[480px] h-[480px] rounded-full border border-[#c8956a]/15"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full border border-[#d4a882]/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glow behind photo */}
            <div className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#c8956a]/20 via-[#d4a882]/10 to-transparent blur-3xl" />

            {/* Photo */}
            <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden border-2 border-[#c8956a]/30 shadow-2xl shadow-[#c8956a]/20">
              <img
                src={imgGeovanna}
                alt="Geovanna Moura"
                className="w-full h-full object-cover"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent" />
            </div>

            {/* Corner accent dots */}
            {[
              { top: '8%', left: '12%' },
              { top: '10%', right: '10%' },
              { bottom: '10%', left: '10%' },
              { bottom: '8%', right: '12%' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full bg-[#c8956a]"
                style={pos as React.CSSProperties}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
