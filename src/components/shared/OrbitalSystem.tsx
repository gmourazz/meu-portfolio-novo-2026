import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const imgGeovanna = '/eu.jpeg';

const stars = [
  { size: 2, top: '6%',  left: '12%', dur: 2.1, delay: 0 },
  { size: 1, top: '13%', left: '70%', dur: 3.4, delay: 0.6 },
  { size: 3, top: '20%', left: '86%', dur: 2.8, delay: 1.2 },
  { size: 1, top: '32%', left: '4%',  dur: 4.0, delay: 0.3 },
  { size: 2, top: '45%', left: '94%', dur: 2.5, delay: 1.8 },
  { size: 1, top: '60%', left: '8%',  dur: 3.1, delay: 0.9 },
  { size: 2, top: '70%', left: '82%', dur: 2.3, delay: 0.4 },
  { size: 1, top: '80%', left: '18%', dur: 3.8, delay: 1.5 },
  { size: 2, top: '88%', left: '54%', dur: 2.6, delay: 0.7 },
  { size: 1, top: '4%',  left: '44%', dur: 3.3, delay: 2.0 },
];

const planets = [
  { orbit: 230, size: 10, color: '#6aa5c8', dur: 8,  start: 0 },
  { orbit: 230, size: 6,  color: '#c86a6a', dur: 8,  start: 180 },
  { orbit: 285, size: 14, color: '#c8956a', dur: 15, start: 60 },
  { orbit: 285, size: 7,  color: '#8ac86a', dur: 15, start: 240 },
  { orbit: 330, size: 9,  color: '#a06ac8', dur: 24, start: 120 },
  { orbit: 330, size: 5,  color: '#c8c06a', dur: 24, start: 300 },
];

export function OrbitalSystem() {
  const reduced = useReducedMotion();

  return (
    <div className="relative" style={{ width: 680, height: 680 }}>
      {/* Nebulosas */}
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, top: '5%', left: '5%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(120,60,200,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute pointer-events-none" style={{ width: 350, height: 350, bottom: '5%', right: '5%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(50,100,220,0.15) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="absolute pointer-events-none" style={{ width: 300, height: 300, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(200,149,106,0.12) 0%, transparent 70%)', filter: 'blur(30px)' }} />

      {/* Estrelas */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ width: s.size, height: s.size, top: s.top, left: s.left, opacity: reduced ? 0.5 : undefined }}
          animate={reduced ? {} : { opacity: [0.1, 1, 0.1] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      {/* Estrelas cadentes — ocultas se reduced motion */}
      {!reduced && (
        <>
          <motion.div className="absolute pointer-events-none" style={{ zIndex: 2, top: '10%', left: '-10%', rotate: 30 }}
            animate={{ x: [0, 600], y: [0, 260], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 6, ease: 'easeIn', times: [0, 0.1, 0.8, 1] }}>
            <div style={{ width: 120, height: 2, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)', borderRadius: 2, filter: 'blur(0.5px)' }} />
          </motion.div>
          <motion.div className="absolute pointer-events-none" style={{ zIndex: 2, top: '5%', left: '30%', rotate: 25 }}
            animate={{ x: [0, 500], y: [0, 220], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 9, delay: 3.5, ease: 'easeIn', times: [0, 0.1, 0.8, 1] }}>
            <div style={{ width: 80, height: 1.5, background: 'linear-gradient(to right, transparent, rgba(200,220,255,0.95), transparent)', borderRadius: 2 }} />
          </motion.div>
        </>
      )}

      {/* Anéis de órbita */}
      {[230, 285, 330].map((r) => (
        <div key={r} className="absolute rounded-full pointer-events-none"
          style={{ width: r * 2, height: r * 2, top: '50%', left: '50%', marginTop: -r, marginLeft: -r, border: '1px solid rgba(255,255,255,0.05)' }} />
      ))}

      {/* Planetas */}
      {planets.map((planet, i) => (
        <motion.div key={i} className="absolute pointer-events-none"
          style={{ width: planet.orbit * 2, height: planet.orbit * 2, top: '50%', left: '50%', marginTop: -planet.orbit, marginLeft: -planet.orbit, borderRadius: '50%', rotate: planet.start }}
          animate={reduced ? {} : { rotate: planet.start + 360 }}
          transition={{ duration: planet.dur, repeat: Infinity, ease: 'linear' }}>
          <div className="absolute rounded-full" style={{
            width: planet.size, height: planet.size,
            top: 0, left: '50%', marginLeft: -planet.size / 2, marginTop: -planet.size / 2,
            background: planet.color, boxShadow: `0 0 ${planet.size * 2}px ${planet.color}bb`,
          }} />
        </motion.div>
      ))}

      {/* Foto */}
      <div className="absolute z-10 w-[450px] h-[450px] rounded-full overflow-hidden border-2 border-[#c8956a]/40"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', boxShadow: '0 0 50px rgba(200,149,106,0.3), 0 0 100px rgba(200,149,106,0.1)' }}>
        <img src={imgGeovanna} alt="Geovanna Moura, desenvolvedora web" className="w-full h-full object-cover object-top" fetchPriority="high" />
      </div>
    </div>
  );
}
