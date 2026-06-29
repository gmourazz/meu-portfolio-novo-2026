import { fadeUp } from '../../utils/animations';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useT } from '../../hooks/useT';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ExternalLink, Sparkles, Smartphone, Search, TrendingUp } from 'lucide-react';
import { SpaceBackground } from '../shared/SpaceBackground';
import { ProjectCard } from '../shared/ProjectCard';
import { projects } from '../../data/projects';

const featured = projects.filter((p) => p.featured);

export function Projects() {
  const isMobile = useIsMobile(768);
  const t = useT();

  const visibleProjects = isMobile ? featured.slice(0, 6) : featured;

  return (
    <section id="projetos" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
      <SpaceBackground variant="b" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-24 text-left md:text-center">
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{t('projects.title1')}</span>
            <br />
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">{t('projects.title2')}</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 md:max-w-3xl md:mx-auto leading-relaxed">
            {t('projects.desc')}
          </motion.p>
        </div>

        {/* Pills — sempre em linha, scroll horizontal no mobile */}
        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2 md:gap-4 mb-10 md:mb-16"
        >
          {[
            { icon: Smartphone, label: t('projects.pill.responsive') },
            { icon: Search,     label: t('projects.pill.seo') },
            { icon: TrendingUp, label: t('projects.pill.indexed'), labelMobile: t('projects.pill.indexed.mobile') },
          ].map(({ icon: Icon, label, labelMobile }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-1.5 md:gap-2 px-2 md:px-5 py-2 md:py-2.5 rounded-full bg-[#111] border border-[#c8956a]/25 text-[10px] md:text-sm font-medium text-gray-300 text-center min-w-0"
            >
              <Icon className="w-3 h-3 md:w-4 md:h-4 text-[#c8956a] flex-shrink-0" />
              <span className="truncate">
                <span className="md:hidden">{labelMobile ?? label}</span>
                <span className="hidden md:inline">{label}</span>
              </span>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {visibleProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="text-center">
          <Link to="/projects">
            <motion.button
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-[#c8956a]/30 text-white font-bold hover:bg-[#c8956a]/10 hover:border-[#c8956a] transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles className="w-5 h-5 text-[#c8956a]" />
              {t('projects.cta')}
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
