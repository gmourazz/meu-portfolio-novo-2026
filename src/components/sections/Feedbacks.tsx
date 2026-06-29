import { motion } from 'motion/react';
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { SpaceBackground } from '../shared/SpaceBackground';
import { fadeUp } from '../../utils/animations';
import { testimonials } from '../../data/about';
import { useCarousel } from '../../hooks/useCarousel';

const track = [...testimonials, ...testimonials];
const GAP = 16;

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#c8956a] text-[#c8956a]" />
      ))}
    </div>
  );
}

export function Feedbacks() {
  const { containerRef, cardW, cols, dotIdx, xMV, goNext, goPrev, goTo } = useCarousel({
    total: testimonials.length,
    gap: GAP,
    autoPlayInterval: 6000,
  });

  return (
    <section id="feedbacks" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#060606]">
      <SpaceBackground variant="a" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-16 text-left md:text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
            <MessageSquare className="w-4 h-4 text-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Feedbacks</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">O que clientes </span>
            <br />
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">dizem sobre mim</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-gray-400 md:max-w-3xl md:mx-auto leading-relaxed">
            Avaliações reais de clientes reais. Nota <span className="text-[#c8956a] font-bold">5.0 ★</span> em todos os projetos entregues.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div {...fadeUp(0.3)}>
          <div ref={containerRef} className="overflow-hidden">
            <motion.div className="flex items-stretch" style={{ x: xMV, gap: `${GAP}px` }}>
              {track.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-between text-center p-5 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/30 transition-colors duration-300 flex-shrink-0"
                  style={{ width: cardW > 0 ? cardW : `calc((100% - ${GAP * (cols - 1)}px) / ${cols})`, minHeight: '220px' }}
                >
                  {/* Stars + Text agrupados */}
                  <div className="flex flex-col items-center gap-3">
                    <StarRating />
                    <p className="text-gray-400 text-xs leading-relaxed italic line-clamp-5">"{t.text}"</p>
                  </div>

                  {/* Author sempre na base */}
                  <div className="mt-4 pt-3 border-t border-[#1a1a1a] w-full flex flex-col items-center gap-2">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-xs font-black text-white shadow-lg`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{t.name}</p>
                      <p className="text-xs text-[#c8956a]/80 font-medium truncate">{t.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={goPrev} className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c8956a]/50 hover:text-[#c8956a] transition-all duration-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === dotIdx ? 'bg-[#c8956a] w-6' : 'bg-[#2a2a2a] w-2 hover:bg-[#c8956a]/40'}`}
                />
              ))}
            </div>
            <button onClick={goNext} className="w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-[#c8956a]/50 hover:text-[#c8956a] transition-all duration-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
