import { HOSTINGER_LINK } from '../../data/contact';
import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import { Globe, Zap, Shield, BadgePercent, Gift, ArrowRight } from 'lucide-react';

export function HostingerCard() {
  return (
    <motion.div {...fadeUp(0.3)} className="mb-8">
      <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8956a]/40 to-transparent" />
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-4">
                <Globe className="w-3.5 h-3.5 text-[#c8956a]" />
                <span className="text-xs text-[#c8956a] font-semibold uppercase tracking-wider">Ainda não tem hospedagem?</span>
              </div>
              <h4 className="text-white font-bold text-xl mb-2">
                Eu indico a{' '}
                <span className="bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">Hostinger</span>
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-lg">
                É a hospedagem que eu uso e recomendo para meus clientes: rápida, confiável, com suporte 24h em português e domínio grátis no plano.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { icon: Zap,          label: 'Carregamento rápido' },
                  { icon: Shield,       label: 'SSL grátis incluso' },
                  { icon: Globe,        label: 'Domínio gratuito' },
                  { icon: BadgePercent, label: '20% off com meu link' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs text-gray-500">
                    <item.icon className="w-3.5 h-3.5 text-[#c8956a] flex-shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <motion.a
                href={HOSTINGER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-sm whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(200,149,106,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Globe className="w-4 h-4" />
                Acessar com desconto
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <p className="inline-flex items-center gap-1.5 text-xs text-[#c8956a]/70 font-medium">
                <Gift className="w-3.5 h-3.5" />
                20% de desconto com meu cupom
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
