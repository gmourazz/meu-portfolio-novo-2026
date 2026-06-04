import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const about = document.getElementById('sobre');
    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );

    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#inicio"
          aria-label="Voltar ao topo"
          className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full bg-black border border-[#2a2a2a] flex items-center justify-center shadow-lg shadow-black/40 hover:border-[#c8956a]/50 hover:bg-[#0d0d0d] transition-colors duration-300"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.93 }}
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
