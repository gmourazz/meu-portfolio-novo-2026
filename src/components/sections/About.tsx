import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import { useT } from '../../hooks/useT';
import { SpaceBackground } from '../shared/SpaceBackground';
import { TestimonialsCarousel } from '../shared/TestimonialsCarousel';
import { ServiceCard } from '../ui/ServiceCard';
import { PerkCard } from '../ui/PerkCard';
import { BioCard } from '../ui/BioCard';
import { services, perks } from '../../data/about';

export function About() {
  const t = useT();

  return (
    <section id="sobre" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#111]">
      <SpaceBackground variant="a" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-20 text-left md:text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">{t('about.badge')}</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t('about.title1')}</span>
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">{t('about.title2')}</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-lg text-gray-400 md:max-w-2xl md:mx-auto leading-relaxed">
            {t('about.desc1')}{' '}
            <span className="text-white font-semibold">{t('about.desc2')}</span>{' '}
            {t('about.desc3')}
          </motion.p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-20">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>

        {/* Bio + Perks */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10 md:mb-20">
          <BioCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {perks.map((p, i) => <PerkCard key={p.title} perk={p} index={i} />)}
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialsCarousel />

      </div>
    </section>
  );
}
