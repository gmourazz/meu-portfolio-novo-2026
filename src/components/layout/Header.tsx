import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { navItems } from '../../data/navigation';
import { WA_LINK } from '../../data/contact';
import { useScrolled } from '../../hooks/useScrolled';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLang, type Lang } from '../../context/LanguageContext';
import { useT } from '../../hooks/useT';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
  const activeSection = useActiveSection(navItems);
  const { lang, setLang } = useLang();
  const t = useT();

  const langs: Lang[] = ['pt', 'en', 'es'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? 'bg-[#0a0a0a] backdrop-blur-xl border-b border-[#1a1a1a]/80 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="w-20" />

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              const key = item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                    isActive ? 'text-[#c8956a]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t(`nav.${key}`)}
                  <span className={`absolute bottom-0 left-4 right-4 h-px bg-[#c8956a] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="hidden md:flex items-center gap-0.5 bg-[#111] border border-[#2a2a2a] rounded-full px-1 py-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase transition-all duration-200 ${
                    lang === l
                      ? 'bg-[#c8956a] text-white'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white text-sm font-bold"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(200,149,106,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-4 h-4" />
              {t('header.hire')}
            </motion.a>
            <button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu" aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1 border-t border-[#1a1a1a] mt-4">
                {navItems.map((item, i) => {
                  const key = item.href.replace('#', '');
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`block px-2 py-2.5 font-medium transition-colors ${
                        activeSection === item.href ? 'text-[#c8956a]' : 'text-gray-400 hover:text-[#c8956a]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(`nav.${key}`)}
                    </motion.a>
                  );
                })}
                {/* Mobile language switcher */}
                <div className="flex items-center gap-1 pt-2 pb-1">
                  {langs.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase border transition-all duration-200 ${
                        lang === l
                          ? 'bg-[#c8956a] border-[#c8956a] text-white'
                          : 'border-[#2a2a2a] text-gray-500 hover:text-white'
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  {t('header.hire')}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
