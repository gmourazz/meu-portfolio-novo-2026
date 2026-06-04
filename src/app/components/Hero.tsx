import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight, Download } from 'lucide-react';
const imgGeovanna = '/eu.jpeg';

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: content ── */}
          <div className="space-y-6 sm:space-y-8">

            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <motion.div
                className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/40 cursor-default select-none"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(200,149,106,0)',
                    '0 0 18px rgba(200,149,106,0.45)',
                    '0 0 0px rgba(200,149,106,0)',
                  ],
                  borderColor: [
                    'rgba(200,149,106,0.4)',
                    'rgba(200,149,106,0.9)',
                    'rgba(200,149,106,0.4)',
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8956a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8956a]" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#c8956a] tracking-wide">
                  Disponível para projetos
                </span>
                <span className="w-px h-4 bg-[#c8956a]/30 hidden sm:block" />
                <span className="text-xs sm:text-sm font-medium text-[#c8956a]/70 tracking-wide hidden sm:inline">
                  Resposta em até 2h
                </span>
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="space-y-2 sm:space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
                <span className="text-white block">Geovanna</span>
                <span className="block bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">
                  Moura
                </span>
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm font-light tracking-[0.35em] sm:tracking-[0.45em] uppercase mt-1">
                Desenvolvedora Web
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              Transformo ideias em experiências digitais que impressionam.{' '}
              <span className="text-[#c8956a] font-semibold">Crio sites perfomáticos, atraentes e que convertem</span>.{' '}
              Cada detalhe pensado para o seu negócio crescer.
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-6 sm:gap-10 py-2"
            >
              {[
                { value: '4+', label: 'Anos de experiência' },
                { value: '38+', label: 'Projetos entregues' },
                { value: '5.0★', label: 'Avaliação média' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="https://wa.me/5534999865512?text=Ol%C3%A1%20Geovanna%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-sm sm:text-base"
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(200,149,106,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4" />
                Falar comigo
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/curriculo.pdf"
                download="Geovanna_Moura_Curriculo.pdf"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#2a2a2a] text-gray-400 font-medium text-sm sm:text-base hover:border-[#c8956a]/30 hover:text-white transition-colors"
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
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' as const }}
          >
            {/* Mobile: só a foto, sem sistema orbital */}
            <div className="lg:hidden relative flex items-center justify-center">
              {/* Nebulosa âmbar mobile */}
              <div className="absolute pointer-events-none w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(ellipse, rgba(200,149,106,0.18) 0%, transparent 70%)', filter: 'blur(30px)' }}
              />
              <div
                className="relative z-10 w-52 h-52 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#c8956a]/40"
                style={{ boxShadow: '0 0 50px rgba(200,149,106,0.3), 0 0 100px rgba(200,149,106,0.1)' }}
              >
                <img src={imgGeovanna} alt="Geovanna Moura" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Desktop: sistema orbital completo */}
            <div className="hidden lg:block relative" style={{ width: 680, height: 680 }}>
              {/* Nebulosa roxa */}
              <div className="absolute pointer-events-none" style={{
                width: 400, height: 400, top: '5%', left: '5%',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(120,60,200,0.18) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }} />
              {/* Nebulosa azul */}
              <div className="absolute pointer-events-none" style={{
                width: 350, height: 350, bottom: '5%', right: '5%',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(50,100,220,0.15) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }} />
              {/* Nebulosa âmbar */}
              <div className="absolute pointer-events-none" style={{
                width: 300, height: 300,
                top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(200,149,106,0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }} />

              {/* Estrelas */}
              {[
                { size: 2, top: '6%',  left: '12%', dur: 2.1, delay: 0 },
                { size: 1, top: '13%', left: '70%', dur: 3.4, delay: 0.6 },
                { size: 3, top: '20%', left: '86%', dur: 2.8, delay: 1.2 },
                { size: 1, top: '32%', left: '4%',  dur: 4.0, delay: 0.3 },
                { size: 2, top: '45%', left: '94%', dur: 2.5, delay: 1.8 },
                { size: 1, top: '60%', left: '8%',  dur: 3.1, delay: 0.9 },
                { size: 2, top: '70%', left: '82%', dur: 2.3, delay: 0.4 },
                { size: 1, top: '80%', left: '18%', dur: 3.8, delay: 1.5 },
                { size: 2, top: '88%', left: '54%', dur: 2.6, delay: 0.7 },
                { size: 1, top: '4%',  left: '44%', dur: 3.3, delay: 2.0 },
                { size: 3, top: '52%', left: '2%',  dur: 2.9, delay: 1.1 },
                { size: 1, top: '26%', left: '58%', dur: 4.2, delay: 0.2 },
                { size: 2, top: '76%', left: '40%', dur: 2.2, delay: 1.6 },
                { size: 1, top: '38%', left: '97%', dur: 3.5, delay: 0.8 },
                { size: 2, top: '16%', left: '28%', dur: 3.0, delay: 2.3 },
                { size: 1, top: '92%', left: '75%', dur: 2.7, delay: 1.0 },
                { size: 2, top: '50%', left: '97%', dur: 3.6, delay: 0.5 },
                { size: 1, top: '74%', left: '62%', dur: 2.4, delay: 1.9 },
                { size: 3, top: '10%', left: '50%', dur: 4.1, delay: 0.1 },
                { size: 1, top: '84%', left: '35%', dur: 2.9, delay: 2.1 },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white pointer-events-none"
                  style={{ width: s.size, height: s.size, top: s.top, left: s.left }}
                  animate={{ opacity: [0.1, 1, 0.1] }}
                  transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
                />
              ))}

              {/* Estrela cadente 1 */}
              <motion.div
                className="absolute pointer-events-none"
                style={{ zIndex: 2, top: '10%', left: '-10%', rotate: 30 }}
                animate={{ x: [0, 600], y: [0, 260], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 6, ease: 'easeIn', times: [0, 0.1, 0.8, 1] }}
              >
                <div style={{ width: 120, height: 2, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)', borderRadius: 2, filter: 'blur(0.5px)' }} />
              </motion.div>

              {/* Estrela cadente 2 */}
              <motion.div
                className="absolute pointer-events-none"
                style={{ zIndex: 2, top: '5%', left: '30%', rotate: 25 }}
                animate={{ x: [0, 500], y: [0, 220], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 9, delay: 3.5, ease: 'easeIn', times: [0, 0.1, 0.8, 1] }}
              >
                <div style={{ width: 80, height: 1.5, background: 'linear-gradient(to right, transparent, rgba(200,220,255,0.95), transparent)', borderRadius: 2 }} />
              </motion.div>

              {/* Anéis de órbita */}
              {[230, 285, 330].map((r) => (
                <div
                  key={r}
                  className="absolute rounded-full pointer-events-none"
                  style={{ width: r * 2, height: r * 2, top: '50%', left: '50%', marginTop: -r, marginLeft: -r, border: '1px solid rgba(255,255,255,0.05)' }}
                />
              ))}

              {/* Planetas orbitando */}
              {[
                { orbit: 230, size: 10, color: '#6aa5c8', dur: 8,  start: 0 },
                { orbit: 230, size: 6,  color: '#c86a6a', dur: 8,  start: 180 },
                { orbit: 285, size: 14, color: '#c8956a', dur: 15, start: 60 },
                { orbit: 285, size: 7,  color: '#8ac86a', dur: 15, start: 240 },
                { orbit: 330, size: 9,  color: '#a06ac8', dur: 24, start: 120 },
                { orbit: 330, size: 5,  color: '#c8c06a', dur: 24, start: 300 },
              ].map((planet, i) => (
                <motion.div
                  key={i}
                  className="absolute pointer-events-none"
                  style={{ width: planet.orbit * 2, height: planet.orbit * 2, top: '50%', left: '50%', marginTop: -planet.orbit, marginLeft: -planet.orbit, borderRadius: '50%', rotate: planet.start }}
                  animate={{ rotate: planet.start + 360 }}
                  transition={{ duration: planet.dur, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute rounded-full" style={{
                    width: planet.size, height: planet.size,
                    top: 0, left: '50%',
                    marginLeft: -planet.size / 2, marginTop: -planet.size / 2,
                    background: planet.color,
                    boxShadow: `0 0 ${planet.size * 2}px ${planet.color}bb`,
                  }} />
                </motion.div>
              ))}

              {/* Foto circular desktop */}
              <div
                className="absolute z-10 w-[450px] h-[450px] rounded-full overflow-hidden border-2 border-[#c8956a]/40"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', boxShadow: '0 0 50px rgba(200,149,106,0.3), 0 0 100px rgba(200,149,106,0.1)' }}
              >
                <img src={imgGeovanna} alt="Geovanna Moura" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
