import { motion } from 'motion/react';
import { fadeUp } from '../../utils/animations';

export function BioCard() {
  return (
    <motion.div {...fadeUp(0)} className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/8 via-transparent to-transparent" />
      <div className="relative p-6 md:p-10 border border-[#c8956a]/20 rounded-2xl h-full flex flex-col justify-between gap-8">
        <div>
          <p className="text-4xl text-[#c8956a]/20 font-serif leading-none mb-3">"</p>
          <p className="text-white text-2xl font-bold leading-snug mb-4">
            Enquanto outros entregam código, eu entrego resultado.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm mb-4">
            Sou desenvolvedora Frontend com 4 anos de experiência, caprichosa por natureza: cada detalhe importa,
            cada pixel tem propósito. Cada projeto recebe o mesmo cuidado que eu gostaria de ter se fosse a cliente.
            Nada fica pela metade.
          </p>
          <p className="text-gray-500 leading-relaxed text-sm">
            Curso Engenharia de Software, atuo como dev CLT e atendo clientes pelo CNPJ.
            Código que sustenta, design que encanta e dedicação do início ao fim.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1e1e1e]">
          {[
            { value: '4+',   label: 'anos de exp.' },
            { value: '38+',  label: 'projetos' },
            { value: '5.0★', label: 'avaliação' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-xs text-gray-600 mt-0.5 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
