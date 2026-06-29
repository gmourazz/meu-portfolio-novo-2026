import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { fadeUp } from '../../utils/animations';
import { SpaceBackground } from '../shared/SpaceBackground';
import { CertificateCard } from '../ui/CertificateCard';
import { useIsMobile } from '../../hooks/useIsMobile';
import { certificates } from '../../data/certificates';

export function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile(640);

  const initialCount = isMobile ? 3 : 8;
  const visible = showAll ? certificates : certificates.slice(0, initialCount);

  return (
    <section id="certificados" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
      <SpaceBackground variant="a" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-24 text-left md:text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
            <GraduationCap className="w-4 h-4 text-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Educação Continuada</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Aprendizado </span>
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">constante</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 md:max-w-3xl md:mx-auto leading-relaxed">
            Investimento contínuo em conhecimento para entregar sempre soluções atualizadas e de qualidade.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          <AnimatePresence>
            {visible.map((cert, i) => (
              <CertificateCard key={cert.credential} cert={cert} index={i} initialCount={initialCount} />
            ))}
          </AnimatePresence>
        </div>

        {/* Ver mais / Ver menos */}
        {certificates.length > initialCount && (
          <motion.div {...fadeUp(0.1)} className="flex justify-center mb-16">
            <button
              onClick={() => setShowAll(v => !v)}
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#c8956a]/30 text-[#c8956a] text-sm font-semibold hover:bg-[#c8956a]/10 transition-all duration-300"
            >
              {showAll ? (
                <><ChevronUp className="w-4 h-4" /> Ver menos</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Ver todos os certificados</>
              )}
            </button>
          </motion.div>
        )}

        {/* Banner */}
        <motion.div {...fadeUp(0.2)} className="relative p-10 rounded-2xl bg-[#111] border border-[#1e1e1e] overflow-hidden text-center">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#c8956a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-[#c8956a]" />
              </div>
              <div className="text-left">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">55+</p>
                <p className="text-gray-400 font-semibold">Certificados concluídos</p>
              </div>
            </div>
            <div className="w-px h-12 bg-[#1e1e1e] hidden md:block" />
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center">
                <Award className="w-7 h-7 text-[#c8956a]" />
              </div>
              <div className="text-left">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">200+</p>
                <p className="text-gray-400 font-semibold">Horas de cursos concluídos</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6 max-w-md mx-auto">
            Comprometida com a excelência e atualização constante nas melhores práticas do mercado.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
