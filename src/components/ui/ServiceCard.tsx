import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import type { Service } from '../../types';

type Props = { service: Service; index: number };

export function ServiceCard({ service: s, index: i }: Props) {
  return (
    <motion.div
      {...fadeUp(i * 0.08)}
      className="group relative p-7 rounded-2xl bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#c8956a]/50 transition-colors duration-500 overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
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
        <h3 className="text-base font-bold mb-2 text-white">{s.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
      </div>
    </motion.div>
  );
}
