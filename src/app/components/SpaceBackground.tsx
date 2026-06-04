import { motion } from 'motion/react';

const VARIANTS = {
  a: {
    stars: [
      { s: 2, t: '6%',  l: '8%',  dur: 2.4, d: 0 },
      { s: 1, t: '14%', l: '65%', dur: 3.1, d: 0.7 },
      { s: 2, t: '22%', l: '88%', dur: 2.8, d: 1.4 },
      { s: 1, t: '38%', l: '3%',  dur: 4.0, d: 0.3 },
      { s: 3, t: '50%', l: '92%', dur: 2.2, d: 1.9 },
      { s: 1, t: '64%', l: '12%', dur: 3.5, d: 0.9 },
      { s: 2, t: '74%', l: '78%', dur: 2.6, d: 0.5 },
      { s: 1, t: '84%', l: '22%', dur: 3.8, d: 1.6 },
      { s: 2, t: '91%', l: '55%', dur: 2.9, d: 0.8 },
      { s: 1, t: '10%', l: '42%', dur: 3.3, d: 2.1 },
      { s: 2, t: '48%', l: '2%',  dur: 2.7, d: 1.2 },
      { s: 1, t: '30%', l: '58%', dur: 4.1, d: 0.2 },
      { s: 2, t: '79%', l: '40%', dur: 2.3, d: 1.7 },
      { s: 1, t: '18%', l: '96%', dur: 3.6, d: 0.4 },
      { s: 3, t: '57%', l: '48%', dur: 2.1, d: 2.5 },
    ],
    nebulas: [
      { color: 'rgba(100,50,200,0.14)', w: 380, h: 300, t: '-5%', l: '-5%' },
      { color: 'rgba(40,90,210,0.12)', w: 320, h: 320, t: '55%', l: '70%' },
      { color: 'rgba(200,149,106,0.08)', w: 250, h: 250, t: '30%', l: '40%' },
    ],
    shooting: { delay: 4, repeatDelay: 8, top: '8%', left: '-5%' },
  },
  b: {
    stars: [
      { s: 1, t: '4%',  l: '22%', dur: 3.0, d: 0.5 },
      { s: 2, t: '11%', l: '80%', dur: 2.5, d: 1.1 },
      { s: 1, t: '25%', l: '5%',  dur: 3.8, d: 0 },
      { s: 3, t: '36%', l: '90%', dur: 2.2, d: 1.8 },
      { s: 1, t: '52%', l: '15%', dur: 4.2, d: 0.6 },
      { s: 2, t: '60%', l: '68%', dur: 2.7, d: 1.3 },
      { s: 1, t: '70%', l: '35%', dur: 3.4, d: 0.2 },
      { s: 2, t: '82%', l: '85%', dur: 2.9, d: 2.0 },
      { s: 1, t: '90%', l: '48%', dur: 3.1, d: 0.9 },
      { s: 2, t: '15%', l: '50%', dur: 2.4, d: 1.5 },
      { s: 1, t: '44%', l: '98%', dur: 3.7, d: 0.3 },
      { s: 3, t: '66%', l: '2%',  dur: 2.1, d: 2.3 },
      { s: 1, t: '78%', l: '60%', dur: 3.9, d: 0.7 },
      { s: 2, t: '95%', l: '28%', dur: 2.6, d: 1.0 },
      { s: 1, t: '33%', l: '72%', dur: 4.0, d: 1.8 },
    ],
    nebulas: [
      { color: 'rgba(30,100,200,0.13)', w: 400, h: 280, t: '60%', l: '-8%' },
      { color: 'rgba(150,60,200,0.11)', w: 300, h: 350, t: '-8%', l: '60%' },
      { color: 'rgba(200,149,106,0.07)', w: 280, h: 280, t: '25%', l: '30%' },
    ],
    shooting: { delay: 2, repeatDelay: 10, top: '5%', left: '20%' },
  },
  c: {
    stars: [
      { s: 2, t: '8%',  l: '30%', dur: 2.8, d: 1.0 },
      { s: 1, t: '18%', l: '75%', dur: 3.5, d: 0.3 },
      { s: 3, t: '28%', l: '10%', dur: 2.3, d: 2.0 },
      { s: 1, t: '42%', l: '85%', dur: 4.1, d: 0.8 },
      { s: 2, t: '55%', l: '5%',  dur: 2.6, d: 1.6 },
      { s: 1, t: '65%', l: '55%', dur: 3.2, d: 0.1 },
      { s: 2, t: '75%', l: '92%', dur: 2.9, d: 1.4 },
      { s: 1, t: '88%', l: '18%', dur: 3.7, d: 0.6 },
      { s: 3, t: '95%', l: '70%', dur: 2.2, d: 2.2 },
      { s: 1, t: '12%', l: '58%', dur: 3.9, d: 0.4 },
      { s: 2, t: '35%', l: '48%', dur: 2.5, d: 1.8 },
      { s: 1, t: '48%', l: '22%', dur: 4.3, d: 0.9 },
      { s: 2, t: '60%', l: '78%', dur: 2.1, d: 2.4 },
      { s: 1, t: '80%', l: '42%', dur: 3.4, d: 0.5 },
      { s: 2, t: '22%', l: '95%', dur: 2.7, d: 1.2 },
    ],
    nebulas: [
      { color: 'rgba(80,160,200,0.12)', w: 360, h: 360, t: '-10%', l: '30%' },
      { color: 'rgba(200,80,120,0.09)', w: 300, h: 250, t: '65%', l: '55%' },
      { color: 'rgba(200,149,106,0.08)', w: 260, h: 260, t: '40%', l: '5%' },
    ],
    shooting: { delay: 6, repeatDelay: 12, top: '15%', left: '-8%' },
  },
};

type Variant = keyof typeof VARIANTS;

export function SpaceBackground({ variant = 'a' }: { variant?: Variant }) {
  const v = VARIANTS[variant];
  return (
    <>
      {/* Nebulosas */}
      {v.nebulas.map((n, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            width: n.w, height: n.h,
            top: n.t, left: n.l,
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${n.color} 0%, transparent 70%)`,
            filter: 'blur(45px)',
          }}
        />
      ))}

      {/* Estrelas */}
      {v.stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ width: s.s, height: s.s, top: s.t, left: s.l }}
          animate={{ opacity: [0.1, 0.95, 0.1] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.d }}
        />
      ))}

      {/* Estrela cadente */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: v.shooting.top, left: v.shooting.left, rotate: 28, zIndex: 1 }}
        animate={{ x: [0, 550], y: [0, 230], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          repeatDelay: v.shooting.repeatDelay,
          delay: v.shooting.delay,
          ease: 'easeIn',
          times: [0, 0.08, 0.85, 1],
        }}
      >
        <div style={{
          width: 110, height: 2,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), rgba(200,220,255,0.5), transparent)',
          borderRadius: 2,
          filter: 'blur(0.5px)',
        }} />
      </motion.div>
    </>
  );
}
