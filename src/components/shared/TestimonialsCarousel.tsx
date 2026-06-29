import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { fadeUp } from '../../utils/animations';
import { testimonials } from '../../data/about';
import { useCarousel } from '../../hooks/useCarousel';

const track = [...testimonials, ...testimonials];
const GAP = 16;

export function TestimonialsCarousel() {
  const { containerRef, cardW, cols, dotIdx, xMV, goNext, goPrev, goTo } = useCarousel({
    total: testimonials.length,
    gap: GAP,
    autoPlayInterval: 6000,
  });

  return (
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
        <p className="text-gray-500 text-sm">38+ projetos entregues · todos com nota máxima</p>
      </motion.div>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div className="flex" style={{ x: xMV, gap: `${GAP}px` }}>
          {track.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-5 rounded-2xl bg-[#0d0d0d] border border-[#1e1e1e] flex-shrink-0"
              style={{ width: cardW > 0 ? cardW : `calc((100% - ${GAP * (cols - 1)}px) / ${cols})` }}
            >
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
              <p className="text-gray-400 text-xs leading-relaxed italic flex-1">"{t.text}"</p>
              <div className="mt-4 pt-3 border-t border-[#1a1a1a]">
                <p className="text-xs text-[#c8956a]/80 font-medium truncate">{t.project}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

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
    </div>
  );
}
