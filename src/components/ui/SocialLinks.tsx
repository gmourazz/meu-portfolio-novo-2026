import { socials } from '../../data/contact';
import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import { ArrowRight } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...fadeUp(i * 0.08)}
          className="group flex items-center gap-4 p-5 rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] hover:border-[#c8956a]/40 transition-all duration-300"
          whileHover={{ y: -3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="w-11 h-11 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c8956a]/20 transition-colors duration-300">
            <s.icon className="w-5 h-5 text-[#c8956a]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm group-hover:text-[#c8956a] transition-colors">{s.label}</p>
            <p className="text-gray-500 text-xs truncate">{s.value}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#c8956a] group-hover:translate-x-1 transition-all duration-300" />
        </motion.a>
      ))}
    </div>
  );
}
