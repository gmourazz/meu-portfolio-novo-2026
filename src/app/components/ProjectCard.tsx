import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

export function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      {...fadeUp(i * 0.05)}
      className="group relative rounded-2xl overflow-hidden bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/40 transition-colors duration-500"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Thumbnail */}
      <div className="relative w-full bg-[#0d0d0d]" style={{ aspectRatio: '16/9' }}>
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover object-top"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs text-[#c8956a] font-semibold">
            {p.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-[#c8956a] transition-colors duration-300">
            {p.title}
          </h3>
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#c8956a] text-white text-xs font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver projeto
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {p.metrics.length > 0 && (
          <div className="flex gap-4 mb-5 p-4 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
            {p.metrics.map((m) => (
              <div key={m.label} className="text-center flex-1">
                <p className="text-[#c8956a] font-bold">{m.value}</p>
                <p className="text-xs text-gray-600 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-500 text-xs border border-[#252525] hover:border-[#c8956a]/30 hover:text-[#c8956a] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
