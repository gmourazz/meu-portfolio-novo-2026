import { useState } from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import { useT } from '../../hooks/useT';
import { SpaceBackground } from '../shared/SpaceBackground';
import { AgendarModal } from '../shared/AgendarModal';
import { ContactCTA } from '../ui/ContactCTA';
import { SocialLinks } from '../ui/SocialLinks';
import { HostingerCard } from '../ui/HostingerCard';

export function Contact() {
  const [showModal, setShowModal] = useState(false);
  const t = useT();

  return (
    <>
      {showModal && <AgendarModal onClose={() => setShowModal(false)} />}

      <section id="contato" className="pt-16 pb-0 px-6 relative overflow-hidden bg-black">
        <SpaceBackground variant="c" />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#c8956a] blur-[160px] opacity-10 pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-left md:text-center mb-10">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8956a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8956a]" />
              </span>
              <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">{t('contact.badge')}</span>
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t('contact.title1')}</span>
              <br />
              <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">{t('contact.title2')}</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t('contact.title3')}</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('contact.desc')}
            </motion.p>
          </div>

          <ContactCTA onSchedule={() => setShowModal(true)} />
          <SocialLinks />
          <HostingerCard />

        </div>

        {/* Footer */}
        <div className="border-t border-[#1a1a1a] mt-0">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-white font-bold text-sm">Geovanna Moura</p>
            <p className="text-xs text-gray-600">{t('contact.footer')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
