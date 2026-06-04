import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SpaceBackground } from './SpaceBackground';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

type Certificate = {
  title: string;
  institution: string;
  date: string;
  hours: string;
  credential: string;
  image?: string;
  link?: string;
};

const certificates: Certificate[] = [
  // Janeiro 2026 — Santander Bootcamp + AWS
  { title: 'Santander 2025 - Ciência de Dados com Python', institution: 'DIO', date: '21/01/2026', hours: '63h', credential: '44AEHQHE', image: '/certificados/Ciencia-de-dados-santander.pdf.png', link: 'https://www.dio.me/certificate/44AEHQHE' },
  { title: 'Fundamentos e Técnicas de Machine Learning', institution: 'DIO', date: '21/01/2026', hours: '11h', credential: 'M3IJ2C1K', image: '/certificados/fundamentos-e-tecnicas-machine-learning.pdf.png', link: 'https://www.dio.me/certificate/M3IJ2C1K' },
  { title: 'Noções de Computação em Nuvem', institution: 'DIO', date: '21/01/2026', hours: '7h', credential: 'WTVXO8JE', image: '/certificados/nocoes-computacao-em-nuvem.pdf.png', link: 'https://www.dio.me/certificate/WTVXO8JE' },
  { title: 'Armazenamento e Banco de Dados AWS', institution: 'DIO', date: '21/01/2026', hours: '2h', credential: 'UPOKS1AN', image: '/certificados/armazenamento-e-banco-de-dados-aws.pdf.png', link: 'https://www.dio.me/certificate/UPOKS1AN' },
  { title: 'Introdução ao Machine Learning', institution: 'DIO', date: '21/01/2026', hours: '2h', credential: 'HGI1TGCQ', image: '/certificados/introducao-machine-learning.pdf.png', link: 'https://www.dio.me/certificate/HGI1TGCQ' },
  { title: 'Python para Machine Learning na Prática', institution: 'DIO', date: '21/01/2026', hours: '2h', credential: 'CM2PL3PD', image: '/certificados/pyhton-para-machine-learning.pdf.png', link: 'https://www.dio.me/certificate/CM2PL3PD' },
  { title: 'Computação em AWS', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: '14QE2DOY', image: '/certificados/computacao-em-aws.pdf.png', link: 'https://www.dio.me/certificate/14QE2DOY' },
  { title: 'Infraestrutura Global AWS', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'EJMZXVFO', image: '/certificados/infraestrutura-global-aws.pdf.png', link: 'https://www.dio.me/certificate/EJMZXVFO' },
  { title: 'Redes em AWS', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'NYIIVZGZ', image: '/certificados/redes-em-aws.pdf.png', link: 'https://www.dio.me/certificate/NYIIVZGZ' },
  { title: 'Redução dos Custos em Farmácias com AWS', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'VKPWZE93', image: '/certificados/reducao-custos-aws.pdf.png', link: 'https://www.dio.me/certificate/VKPWZE93' },
  { title: 'Métodos de Machine Learning Bioinspirados', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'NCU8WHBV', image: '/certificados/metodos-machine-learning-bioinspirados.pdf.png', link: 'https://www.dio.me/certificate/NCU8WHBV' },
  { title: 'Redes Neurais Artificiais', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'CZINGM18', image: '/certificados/redes-neurais-artificais.pdf.png', link: 'https://www.dio.me/certificate/CZINGM18' },
  { title: 'Linguagens de Programação para Machine Learning', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: '8GAJLNYD', image: '/certificados/linguagens-de-programacao-para-machine-learning.pdf.png', link: 'https://www.dio.me/certificate/8GAJLNYD' },
  { title: 'Classificação de Problemas: Explorando Datasets', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'HGYVVATN', image: '/certificados/explorando-datasets.pdf.png', link: 'https://www.dio.me/certificate/HGYVVATN' },
  { title: 'Algoritmos de SVM (Support Vector Machine)', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'ERFTZWKM', image: '/certificados/algoritmos-de-swm.pdf.png', link: 'https://www.dio.me/certificate/ERFTZWKM' },
  { title: 'Algoritmos Genéticos', institution: 'DIO', date: '21/01/2026', hours: '1h', credential: 'GOBPVJKW', image: '/certificados/algoritmos-genericos.pdf.png', link: 'https://www.dio.me/certificate/GOBPVJKW' },
  // Janeiro 17, 2026 — Banco de Dados + ETL
  { title: 'Introdução a Banco de Dados Relacionais e ETL', institution: 'DIO', date: '17/01/2026', hours: '13h', credential: 'NHECSBU9', image: '/certificados/banco-de-dados-relacionais-etl.pdf.png', link: 'https://www.dio.me/certificate/NHECSBU9' },
  { title: 'Análise de Dados com Excel e Copilot', institution: 'DIO', date: '17/01/2026', hours: '9h', credential: '7ONT66Q3', image: '/certificados/analise-de-dados-excel-e-copilot.pdf.png', link: 'https://www.dio.me/certificate/7ONT66Q3' },
  { title: 'Introdução a Banco de Dados NoSQL', institution: 'DIO', date: '17/01/2026', hours: '3h', credential: 'QEYB7GYZ', image: '/certificados/banco-de-dados-nosql.pdf.png', link: 'https://www.dio.me/certificate/QEYB7GYZ' },
  { title: 'Introdução a Banco de Dados Relacionais (SQL)', institution: 'DIO', date: '17/01/2026', hours: '3h', credential: 'SSPECBTS', image: '/certificados/banco-de-dados-relacionais-sql.pdf.png', link: 'https://www.dio.me/certificate/SSPECBTS' },
  { title: 'Fundamentos de ETL com Python', institution: 'DIO', date: '17/01/2026', hours: '3h', credential: 'IFAT1IPF', image: '/certificados/fundamentos-de-etl.pdf.png', link: 'https://www.dio.me/certificate/IFAT1IPF' },
  { title: 'Explorando IA Generativa em um Pipeline de ETL com Python', institution: 'DIO', date: '17/01/2026', hours: '2h', credential: 'JKZVZO9D', image: '/certificados/ia-generativa-em-pipeline-de-etl-com-python.pdf.png', link: 'https://www.dio.me/certificate/JKZVZO9D' },
  { title: 'Como a Computação em Nuvem Funciona', institution: 'DIO', date: '17/01/2026', hours: '1h', credential: '08HC9U6G', image: '/certificados/funcionamento-computacao-em-nuvem.pdf.png', link: 'https://www.dio.me/certificate/08HC9U6G' },
  // Janeiro 3, 2026 — Python
  { title: 'Introdução à Ciência de Dados e Python', institution: 'DIO', date: '03/01/2026', hours: '13h', credential: 'KO7KNJHG', image: '/certificados/ciencia-de-dados-python.pdf.png', link: 'https://www.dio.me/certificate/KO7KNJHG' },
  { title: 'Manipulando Strings com Python', institution: 'DIO', date: '03/01/2026', hours: '2h', credential: 'Z6FJL6ZI', image: '/certificados/manipulando-strings-em-python.pdf.png', link: 'https://www.dio.me/certificate/Z6FJL6ZI' },
  { title: 'Dominando Funções Python', institution: 'DIO', date: '03/01/2026', hours: '1h', credential: 'MRJ2PF2Q', image: '/certificados/funcoes-em-pyhton.pdf.png', link: 'https://www.dio.me/certificate/MRJ2PF2Q' },
  // Dezembro 2025
  { title: 'Introdução ao Excel 365', institution: 'DIO', date: '09/12/2025', hours: '1h', credential: 'MLGWCKZX', image: '/certificados/excel-365.pdf.png', link: 'https://www.dio.me/certificate/MLGWCKZX' },
  { title: 'Princípios de Python e Versionamento de Código com Git e GitHub', institution: 'DIO', date: '08/12/2025', hours: '7h', credential: 'ORWNF2VQ', image: '/certificados/versionamento-de-codigo-git-github.pdf.png', link: 'https://www.dio.me/certificate/ORWNF2VQ' },
  // Setembro 2025
  { title: 'Primeiros Passos com Acesso Seguro e Controle de Custos na AWS', institution: 'DIO', date: '05/09/2025', hours: '1h', credential: 'ODXXM4KF', image: '/certificados/controle-de-custos-aws.pdf.png', link: 'https://www.dio.me/certificate/ODXXM4KF' },
  { title: 'Introdução à AWS e ao Universo da Computação em Nuvem', institution: 'DIO', date: '04/09/2025', hours: '1h', credential: 'GLS6J3OI', image: '/certificados/aws-e-computacao-em-nuvem.pdf.png', link: 'https://www.dio.me/certificate/GLS6J3OI' },
  { title: 'Introdução ao Santander Code Girls 2025 - AWS Cloud Foundations', institution: 'DIO + Santander', date: '03/09/2025', hours: '1h', credential: 'BRAMNRGX', image: '/certificados/AWS-Cloud-Foundations.pdf.png', link: 'https://www.dio.me/certificate/BRAMNRGX' },
  { title: 'Introdução a Computação em Nuvem', institution: 'DIO', date: '03/09/2025', hours: '2h', credential: 'LFBUWZVT', image: '/certificados/computacao-em-nuvem.pdf.png', link: 'https://www.dio.me/certificate/LFBUWZVT' },
  { title: 'Introdução ao AZ-900 com a Microsoft', institution: 'DIO + Microsoft', date: '02/09/2025', hours: '1h', credential: 'YK22KKZ5', image: '/certificados/az-900-microsoft.pdf.png', link: 'https://www.dio.me/certificate/YK22KKZ5' },
  // Dezembro 2024 — Udemy
  { title: 'Algoritmos e Lógica de Programação - O Curso COMPLETO', institution: 'Udemy', date: '22/12/2024', hours: '30.5h', credential: 'UC-ed3cfade-c402-471e-a879-ab62c039c9eb', image: '/certificados/algoritmos-logica-udemy.jpg', link: 'https://ude.my/UC-ed3cfade-c402-471e-a879-ab62c039c9eb' },
  // Setembro 2024 — Rocketseat
  { title: 'NLW Pocket: Javascript - Programação Iniciante', institution: 'Rocketseat', date: '15/09/2024', hours: '5h', credential: '2e0d7f40-026b-4c0b', image: '/certificados/nlw-pocket-javascript.pdf.png' },
];

export function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const initialCount = isMobile ? 3 : 8;
  const visible = showAll ? certificates : certificates.slice(0, initialCount);

  return (
    <section id="certificados" className="py-16 md:py-32 px-6 relative overflow-hidden bg-[#0a0a0a]">
      <SpaceBackground variant="a" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-24 text-left md:text-center">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8956a]/10 border border-[#c8956a]/20 mb-6">
            <GraduationCap className="w-4 h-4 text-[#c8956a]" />
            <span className="text-sm text-[#c8956a] uppercase tracking-widest font-semibold">Educação Continuada</span>
          </motion.div>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Aprendizado </span>
            <span className="bg-gradient-to-r from-[#c8956a] via-[#d4a882] to-[#e0bc9a] bg-clip-text text-transparent">constante</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-xl text-gray-400 md:max-w-3xl md:mx-auto leading-relaxed">
            Investimento contínuo em conhecimento para entregar sempre soluções atualizadas e de qualidade.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          <AnimatePresence>
            {visible.map((cert, i) => (
              <motion.div
                key={cert.credential}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.4, delay: i < initialCount ? i * 0.05 : 0 }}
                className="group relative rounded-2xl bg-[#111] border border-[#1e1e1e] hover:border-[#c8956a]/40 transition-colors duration-400 overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8956a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {cert.image ? (
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-[#c8956a]/10 to-[#111] flex items-center justify-center border-b border-[#1e1e1e]">
                    <Award className="w-12 h-12 text-[#c8956a]/30" />
                  </div>
                )}

                <div className="relative z-10 p-6">
                  <div className="mb-4 min-h-[4.5rem]">
                    <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-[#c8956a] transition-colors duration-300 line-clamp-3">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-semibold">{cert.institution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 p-4 rounded-xl bg-[#0a0a0a] border border-[#151515]">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Calendar className="w-3 h-3 text-[#c8956a]" />
                        <span className="text-xs text-gray-600 font-medium">Conclusão</span>
                      </div>
                      <p className="text-sm text-[#c8956a] font-bold">{cert.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium mb-1">Carga horária</p>
                      <p className="text-sm text-white font-bold">{cert.hours}</p>
                    </div>
                  </div>

                  <a
                    href={cert.link ?? '#'}
                    target={cert.link ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={e => !cert.link && e.preventDefault()}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0a0a0a] border border-[#151515] group-hover:border-[#c8956a]/20 transition-colors duration-300"
                  >
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">ID Credencial</p>
                      <p className="text-xs text-gray-400 font-mono truncate max-w-[180px]">{cert.credential}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-[#c8956a] transition-colors flex-shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Ver mais / Ver menos */}
        {certificates.length > initialCount && (
          <motion.div {...fadeUp(0.1)} className="flex justify-center mb-16">
            <button
              onClick={() => setShowAll(v => !v)}
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#c8956a]/30 text-[#c8956a] text-sm font-semibold hover:bg-[#c8956a]/10 transition-all duration-300"
            >
              {showAll ? (
                <><ChevronUp className="w-4 h-4" /> Ver menos</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Ver todos os certificados</>
              )}
            </button>
          </motion.div>
        )}

        {/* Banner */}
        <motion.div
          {...fadeUp(0.2)}
          className="relative p-10 rounded-2xl bg-[#111] border border-[#1e1e1e] overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#c8956a 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-[#c8956a]" />
              </div>
              <div className="text-left">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">55+</p>
                <p className="text-gray-400 font-semibold">Certificados concluídos</p>
              </div>
            </div>
            <div className="w-px h-12 bg-[#1e1e1e] hidden md:block" />
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center">
                <Award className="w-7 h-7 text-[#c8956a]" />
              </div>
              <div className="text-left">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-[#c8956a] to-[#d4a882] bg-clip-text text-transparent">200+</p>
                <p className="text-gray-400 font-semibold">Horas de cursos concluídos</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6 max-w-md mx-auto">
            Comprometida com a excelência e atualização constante nas melhores práticas do mercado.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
