import type { Service, Perk, Testimonial } from '../types';
import { Code, Palette, Zap, Target, Star, MessageSquare, CheckCircle2, Clock, TrendingUp } from 'lucide-react';

export const services: Service[] = [
  { icon: Code,    num: '01', title: 'Desenvolvimento Web',  description: 'Sites e aplicações React modernas com TypeScript sendo rápidos, responsivos e escaláveis.' },
  { icon: Palette, num: '02', title: 'UI/UX Design',         description: 'Interfaces que equilibram estética e usabilidade. Cada tela pensada para o usuário.' },
  { icon: Zap,     num: '03', title: 'Landing Pages',        description: 'Páginas de alta conversão para campanhas, lançamentos e captação de clientes.' },
  { icon: Target,  num: '04', title: 'Consultoria',          description: 'Estratégia técnica e de design para elevar a presença digital da sua marca.' },
];

export const perks: Perk[] = [
  { icon: Star,         title: 'Caprichosa por natureza', desc: 'Cada detalhe importa. Não entrego nada que eu mesma não aprovaria como cliente.' },
  { icon: MessageSquare,title: 'Comunicação real',        desc: 'Você sabe o que está acontecendo em cada etapa. Sem sumiço, sem surpresas.' },
  { icon: Clock,        title: 'Prazo é prazo',           desc: 'Cumpro datas com rigor. Seu projeto entregue no tempo combinado, sempre.' },
  { icon: Code,         title: 'Código + Design',         desc: 'Site bonito E bem construído. Performance, acessibilidade e usabilidade juntos.' },
  { icon: CheckCircle2, title: 'Entrega completa',        desc: 'Só finalizo quando está exatamente do jeito que você precisa e idealizou, sem meio-termo.' },
  { icon: TrendingUp,   title: 'Foco em resultado',       desc: 'Sites feitos pra converter e crescer, não só pra impressionar visualmente.' },
];

export const testimonials: Testimonial[] = [
  { name: 'Melina F.',  initials: 'MF', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Geovanna foi muito atenciosa e profissional, trabalharia com ela novamente e indico seu trabalho.', project: 'Site institucional cartão de visita' },
  { name: 'Roberto D.', initials: 'RD', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Excelente profissional.', project: 'Recriação de site GoDaddy' },
  { name: 'Gabriel B.', initials: 'GB', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Muito bom, entrega ágil e rápida! Com bastante qualidade, recomendo.', project: 'Landing page para planner de futebol' },
  { name: 'Andrios G.', initials: 'AG', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Desenvolvimento impecável, site ficou exatamente como eu precisava.', project: 'Site Mundo Pro Viagens (WordPress)' },
  { name: 'Cadu P.',    initials: 'CP', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Sem palavras pra ela — super educada, disposta a entender o projeto em cada detalhe. Voltaria a fazer outros projetos com ela. Obrigado Geovanna, ganhou um cliente!', project: 'Blog para nicho de finanças' },
  { name: 'Rafael B.',  initials: 'RB', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'A Geovanna é super profissional e muito acessível. Cumpriu com rigor os prazos. Muito satisfeito com o resultado.', project: 'Landing page com questionário integrado' },
  { name: 'Douglas S.', initials: 'DS', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Muito empenhada no trabalho, atingiu as expectativas!', project: 'Site para gráfica rápida' },
  { name: 'Debora N.',  initials: 'DN', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Excelente profissional, muito rápida e competente! Irei trabalhar com ela novamente.', project: 'Landing page para curso presencial' },
  { name: 'Henrique M.',initials: 'HM', avatarColor: 'from-[#a07850] to-[#d4a882]', text: 'Super competente e rápida.', project: 'Landing page para campanha no Google ADS' },
  { name: 'Larissa',    initials: 'LA', avatarColor: 'from-[#c8956a] to-[#b5844f]', text: 'Atenciosa e talentosa, sempre atendeu a minhas dúvidas.', project: 'Criar site de notícias com painel de gerenciamento simples' },
  { name: 'Raiane Fonseca',          initials: 'RF', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Geovanna, muito competente e profissional de altíssimo nível! Entregou nosso site do jeitinho que a gente queria. Ficou perfeito! Atendeu todas as nossas mensagens sempre em prontidão, mesmo não estando bem de saúde! Sucesso Geovanna e obrigado mais uma vez! Recomendo demais a profissional.', project: 'Site para Dra. Raiane Fonseca — Cardiologista' },
  { name: 'Dra. Marcela Z.',         initials: 'MZ', avatarColor: 'from-[#c8956a] to-[#d4a882]', text: 'Muito obrigada querida, eu amei!!', project: 'Site para Dra. Marcela Zukeran — Psiquiatra' },
];
