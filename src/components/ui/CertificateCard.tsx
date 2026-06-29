import { motion } from 'motion/react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import type { Certificate } from '../../types';

type Props = { cert: Certificate; index: number; initialCount: number };

export function CertificateCard({ cert, index: i, initialCount }: Props) {
  return (
    <motion.div
      key={cert.credential}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.4, delay: i < initialCount ? i * 0.05 : 0 }}
      className="group relative rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/40 transition-colors duration-400 overflow-hidden"
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {cert.image ? (
        <div className="w-full h-40 overflow-hidden">
          <img src={cert.image} alt={`Certificado: ${cert.title} — ${cert.institution}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-[#c8956a]/10 to-[#111] flex items-center justify-center border-b border-[#1e1e1e]">
          <Award className="w-12 h-12 text-[#c8956a]/30" />
        </div>
      )}

      <div className="relative z-10 p-6">
        <div className="mb-4 min-h-[4.5rem]">
          <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-[#c8956a] transition-colors duration-300 line-clamp-3">
            {cert.title}
          </h3>
          <p className="text-xs text-gray-500 font-semibold">{cert.institution}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 p-4 rounded-xl bg-[#0a0a0a] border border-[#151515]">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Calendar className="w-3 h-3 text-[#c8956a]" />
              <span className="text-xs text-gray-600 font-medium">Conclusão</span>
            </div>
            <p className="text-sm text-[#c8956a] font-bold">{cert.date}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Carga horária</p>
            <p className="text-sm text-white font-bold">{cert.hours}</p>
          </div>
        </div>

        <a
          href={cert.link ?? '#'}
          target={cert.link ? '_blank' : undefined}
          rel="noopener noreferrer"
          onClick={(e) => !cert.link && e.preventDefault()}
          className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a0a] border border-[#151515] group-hover:border-[#c8956a]/20 transition-colors duration-300"
        >
          <div>
            <p className="text-xs text-gray-600 mb-0.5">ID Credencial</p>
            <p className="text-xs text-gray-400 font-mono truncate max-w-[180px]" title={cert.credential}>{cert.credential}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-[#c8956a] transition-colors flex-shrink-0" />
        </a>
      </div>
    </motion.div>
  );
}
