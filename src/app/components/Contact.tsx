import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, Linkedin, Github, Send, Calendar, Sparkles, ArrowRight, Globe, Zap, Shield, BadgePercent, Gift } from 'lucide-react';
import { SpaceBackground } from './SpaceBackground';
import { AgendarModal } from './AgendarModal';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const socials = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'geovannamouradeveloper@gmail.com',
    href: 'mailto:geovannamouradeveloper@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/geovanna-moura',
    href: 'https://linkedin.com/in/geovanna-moura-23472b216',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@gmourazz',
    href: 'https://github.com/gmourazz',
  },
];

export function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <AgendarModal onClose={() => setShowModal(false)} />}

      <section id="contato" className="pt-16 pb-0 px-6 relative overflow-hidden bg-black">
        <SpaceBackground variant="c" />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#c8956a] blur-[160px] opacity-10 pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-left md:text-center mb-10">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8956a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8956a]" />
              </span>
              <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Vamos trabalhar juntos</span>
            </motion.div>

            <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Pronta para </span>
              <br />
              <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">transformar sua visão</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">em realidade</span>
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Vamos conversar sobre seu projeto e criar soluções digitais que geram resultados reais.
            </motion.p>
          </div>

          {/* Main CTA card */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-r from-[#c8956a] via-[#e0bc9a] to-[#c8956a] rounded-3xl opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#c8956a]/20 via-transparent to-[#c8956a]/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl bg-[#0d0d0d] p-6 md:p-10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'radial-gradient(circle, #c8956a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
                />
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
                      href="https://wa.me/5534999865512?text=Ol%C3%A1%20Geovanna%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
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
                      onClick={() => setShowModal(true)}
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

          {/* Social links */}
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

          {/* Hostinger referral */}
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
                        { icon: Zap, label: 'Carregamento rápido' },
                        { icon: Shield, label: 'SSL grátis incluso' },
                        { icon: Globe, label: 'Domínio gratuito' },
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
                      href="https://www.hostinger.com/br?REFERRALCODE=HMIGEOVANRFZ"
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

        </div>

        {/* Footer — full width */}
        <div className="border-t border-[#1a1a1a] mt-0">
          <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-white font-bold text-sm">Geovanna Moura</p>
            <p className="text-xs text-gray-600">© 2026 Geovanna Moura. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </>
  );
}
