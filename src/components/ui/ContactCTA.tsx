import { WA_LINK } from '../../data/contact';
import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';
import { MessageCircle, Send, Calendar, Zap, Sparkles } from 'lucide-react';

type Props = { onSchedule: () => void };

export function ContactCTA({ onSchedule }: Props) {
  return (
    <motion.div {...fadeUp(0.1)} className="mb-8">
      <div className="relative rounded-3xl overflow-hidden">
        <div className="absolute -inset-px bg-gradient-to-r from-[#c8956a] via-[#e0bc9a] to-[#c8956a] rounded-3xl opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#c8956a]/20 via-transparent to-[#c8956a]/10 rounded-3xl blur-2xl" />
        <div className="relative rounded-3xl bg-[#0d0d0d] p-6 md:p-10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #c8956a 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#c8956a]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/30 mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8956a] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8956a]" />
                </span>
                <span className="text-xs text-[#c8956a] font-semibold uppercase tracking-widest">Disponível agora</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
                Vamos começar<br />
                <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">seu projeto?</span>
              </h3>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-[#c8956a]" />
                  Resposta em até 2h
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Sparkles className="w-4 h-4 text-[#c8956a]" />
                  Orçamento grátis
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-sm shadow-lg shadow-[#c8956a]/20 whitespace-nowrap"
                whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(200,149,106,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
                <Send className="w-4 h-4" />
              </motion.a>
              <motion.button
                onClick={onSchedule}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-[#c8956a]/30 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar className="w-5 h-5 text-[#c8956a]" />
                Agendar reunião
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
