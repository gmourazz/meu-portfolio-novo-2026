import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SpaceBackground } from '../components/SpaceBackground';

export function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <section className="py-24 px-6 relative overflow-hidden">
        <SpaceBackground variant="b" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c8956a] transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao portfólio
            </Link>
          </motion.div>

          {/* Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6"
            >
              <Code2 className="w-4 h-4 text-[#c8956a]" />
              <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">
                {projects.length} projetos
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Todos os </span>
              <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">projetos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Cada projeto entregue com atenção aos detalhes, foco em performance e resultado real para o cliente.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
