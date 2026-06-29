import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import type { Perk } from '../../types';

type Props = { perk: Perk; index: number };

export function PerkCard({ perk: p, index: i }: Props) {
  return (
    <motion.div
      {...fadeUp(i * 0.07)}
      className="group p-5 rounded-2xl bg-[#0d0d0d] border border-[#1e1e1e] hover:border-[#c8956a]/30 transition-colors duration-300"
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-8 h-8 rounded-lg bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center mb-3 group-hover:bg-[#c8956a]/20 transition-colors duration-300">
        <p.icon className="w-4 h-4 text-[#c8956a]" />
      </div>
      <p className="text-white font-bold text-sm mb-1">{p.title}</p>
      <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
    </motion.div>
  );
}
