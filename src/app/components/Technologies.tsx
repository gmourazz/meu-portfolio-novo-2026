import { motion } from 'motion/react';
import { Zap, CheckCircle2, TrendingUp, Code2, Monitor, Palette, Database, Wrench } from 'lucide-react';
import { SpaceBackground } from './SpaceBackground';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

const categories = [
  {
    label: 'Front-End',
    icon: Monitor,
    color: 'from-[#c8956a] to-[#d4a882]',
    skills: ['React.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'Vite'],
  },
  {
    label: 'Estilização & UI',
    icon: Palette,
    color: 'from-[#d4a882] to-[#e0bc9a]',
    skills: ['Tailwind CSS', 'CSS3 / Sass', 'Framer Motion', 'Figma', 'shadcn/ui'],
  },
  {
    label: 'Back-end & Banco',
    icon: Database,
    color: 'from-[#a07850] to-[#c8956a]',
    skills: ['Node.js', 'PostgreSQL', 'MySQL', 'REST APIs', 'Supabase'],
  },
  {
    label: 'Ferramentas',
    icon: Wrench,
    color: 'from-[#e0bc9a] to-[#eacfb4]',
    skills: ['Git & GitHub', 'React Native', 'Python', 'Docker', 'Postman'],
  },
];

const highlights = [
  { icon: CheckCircle2, label: 'Clean Code', value: '100%', desc: 'Código limpo e documentado' },
  { icon: Zap, label: 'Performance', value: '98/100', desc: 'Otimizado para Core Web Vitals' },
  { icon: TrendingUp, label: 'SEO Ready', value: 'A+', desc: 'Estrutura otimizada para busca' },
];

const extras = [
  { label: 'Mobile First', value: 'Sempre' },
  { label: 'Acessibilidade', value: 'WCAG 2.1' },
  { label: 'Cross-browser', value: '100%' },
  { label: 'Responsivo', value: 'Total' },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#111]">
      <SpaceBackground variant="c" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-24 text-left md:text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
            <Code2 className="w-4 h-4 text-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Stack Técnico</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Ferramentas que </span>
            <br />
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">domino com maestria</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 md:max-w-3xl md:mx-auto leading-relaxed">
            Tecnologias modernas para criar soluções web escaláveis e de alta performance.
          </motion.p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 md:mb-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              {...fadeUp(ci * 0.08)}
              className="p-6 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/30 transition-colors duration-300"
            >
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-5`}>
                <cat.icon className="w-4 h-4 flex-shrink-0 text-[#c8956a]" />
                {cat.label}
              </div>
              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.06 + si * 0.05, duration: 0.4 }}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color} flex-shrink-0`} />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              {...fadeUp(i * 0.1)}
              className="group p-8 rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/40 transition-colors duration-500 overflow-hidden relative"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <h.icon className="w-6 h-6 text-[#c8956a]" />
                </div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent mb-2">
                  {h.value}
                </div>
                <h4 className="font-bold text-white mb-1">{h.label}</h4>
                <p className="text-gray-500 text-sm">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extras grid */}
        <motion.div
          {...fadeUp(0.2)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {extras.map((e, i) => (
            <motion.div
              key={e.label}
              {...fadeUp(i * 0.05)}
              className="p-5 rounded-xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/25 transition-colors duration-300 text-center group"
            >
              <p className="text-[#c8956a] font-bold mb-1">{e.value}</p>
              <p className="text-xs text-gray-600 font-medium">{e.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
