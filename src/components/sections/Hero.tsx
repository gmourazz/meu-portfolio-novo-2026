import { motion } from 'motion/react';
import { MessageCircle, ArrowUpRight, Download } from 'lucide-react';
import { OrbitalSystem } from '../shared/OrbitalSystem';
import { useT } from '../../hooks/useT';

const imgGeovanna = '/eu.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const WA_HREF = 'https://wa.me/5534999865512?text=Ol%C3%A1%20Geovanna%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!';

export function Hero() {
  const t = useT();

  const ctaButtons = (
    <>
      <motion.a href={WA_HREF} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-sm sm:text-base"
        whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(200,149,106,0.45)' }} whileTap={{ scale: 0.97 }}>
        <MessageCircle className="w-4 h-4" /> {t('hero.cta.main')} <ArrowUpRight className="w-4 h-4" />
      </motion.a>
      <motion.a href="/curriculo.pdf" download="Geovanna_Moura_Curriculo.pdf"
        className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#2a2a2a] text-gray-400 font-medium text-sm sm:text-base hover:border-[#c8956a]/30 hover:text-white transition-colors"
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        <Download className="w-4 h-4" /> {t('hero.cta.resume')}
      </motion.a>
    </>
  );

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-20">
      <motion.div className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#c8956a] blur-[160px] opacity-10 pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-[#d4a882] blur-[160px] opacity-10 pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <motion.div
                className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/40 cursor-default select-none"
                animate={{ boxShadow: ['0 0 0px rgba(200,149,106,0)', '0 0 18px rgba(200,149,106,0.45)', '0 0 0px rgba(200,149,106,0)'], borderColor: ['rgba(200,149,106,0.4)', 'rgba(200,149,106,0.9)', 'rgba(200,149,106,0.4)'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8956a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8956a]" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#c8956a] tracking-wide">{t('hero.badge')}</span>
                <span className="w-px h-4 bg-[#c8956a]/30 hidden sm:block" />
                <span className="text-xs sm:text-sm font-medium text-[#c8956a]/70 tracking-wide hidden sm:inline">{t('hero.response')}</span>
              </motion.div>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="space-y-2 sm:space-y-3">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">
                <span className="text-white block">Geovanna</span>
                <span className="block bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">Moura</span>
              </h1>
              <p className="text-gray-500 text-xs sm:text-sm font-light tracking-[0.35em] sm:tracking-[0.45em] uppercase mt-1">{t('hero.role')}</p>
            </motion.div>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              {t('hero.desc1')}{' '}
              <span className="text-[#c8956a] font-semibold">{t('hero.desc2')}</span>.{' '}
              {t('hero.desc3')}
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex gap-6 sm:gap-10 py-2">
              {[
                { value: '4+',   key: 'hero.stat.experience' },
                { value: '38+',  key: 'hero.stat.projects'   },
                { value: '5.0★', key: 'hero.stat.rating'     },
              ].map((stat) => (
                <div key={stat.key}>
                  <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">{t(stat.key)}</p>
                </div>
              ))}
            </motion.div>

            {/* Botões — visíveis só no desktop */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="hidden lg:flex gap-4">
              {ctaButtons}
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div className="relative flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' as const }}>
            {/* Mobile foto */}
            <div className="lg:hidden relative flex items-center justify-center">
              <div className="absolute pointer-events-none w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(ellipse, rgba(200,149,106,0.18) 0%, transparent 70%)', filter: 'blur(30px)' }} />
              <div className="relative z-10 w-52 h-52 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#c8956a]/40"
                style={{ boxShadow: '0 0 50px rgba(200,149,106,0.3), 0 0 100px rgba(200,149,106,0.1)' }}>
                <img src={imgGeovanna} alt="Geovanna Moura" className="w-full h-full object-cover object-top" fetchPriority="high" decoding="async" />
              </div>
            </div>

            {/* Botões — visíveis só no mobile, abaixo da foto */}
            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="lg:hidden flex gap-3"
            >
              {ctaButtons}
            </motion.div>

            {/* Desktop */}
            <div className="hidden lg:block">
              <OrbitalSystem />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
