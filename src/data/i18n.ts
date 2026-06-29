import type { Lang } from '../context/LanguageContext';

const translations: Record<Lang, Record<string, string>> = {
  pt: {
    // nav
    'nav.inicio': 'Início',
    'nav.sobre': 'Sobre',
    'nav.projetos': 'Projetos',
    'nav.tecnologias': 'Tecnologias',
    'nav.certificados': 'Certificados',
    'nav.feedbacks': 'Feedbacks',
    'nav.contato': 'Contato',
    'header.hire': 'Contratar',

    // hero
    'hero.badge': 'Disponível para projetos',
    'hero.response': 'Resposta em até 2h',
    'hero.role': 'Desenvolvedora Web',
    'hero.desc1': 'Transformo ideias em experiências digitais que impressionam.',
    'hero.desc2': 'Crio sites performáticos, atraentes e que convertem',
    'hero.desc3': 'Cada detalhe pensado para o seu negócio crescer.',
    'hero.stat.experience': 'Anos de experiência',
    'hero.stat.projects': 'Projetos entregues',
    'hero.stat.rating': 'Avaliação média',
    'hero.cta.main': 'Falar comigo',
    'hero.cta.resume': 'Currículo',

    // about
    'about.badge': 'Sobre & Serviços',
    'about.title1': 'Por que trabalhar ',
    'about.title2': 'comigo?',
    'about.desc1': 'Não apenas um site bonito construo',
    'about.desc2': 'uma solução digital completa',
    'about.desc3': 'feita pra crescer com o seu negócio.',

    // projects
    'projects.title1': 'Projetos que geram ',
    'projects.title2': 'resultados reais',
    'projects.desc': 'Cada projeto é desenvolvido com atenção aos detalhes, foco em performance e UX excepcional.',
    'projects.pill.responsive': 'Responsivo',
    'projects.pill.seo': 'SEO otimizado',
    'projects.pill.indexed': 'Indexado no Google',
    'projects.pill.indexed.mobile': 'Indexado',
    'projects.cta': 'Ver todos os projetos',
    'projects.viewProject': 'Ver projeto',

    // technologies
    'tech.badge': 'Stack Técnica',
    'tech.title1': 'Tecnologias que ',
    'tech.title2': 'uso no dia a dia',
    'tech.desc': 'Ferramentas modernas escolhidas para entregar performance, escalabilidade e experiências excepcionais.',

    // certificates
    'certs.badge': 'Formação',
    'certs.title1': 'Certificados & ',
    'certs.title2': 'Cursos',
    'certs.desc': 'Aprendizado contínuo para entregar sempre o melhor.',
    'certs.showMore': 'Ver mais certificados',
    'certs.showLess': 'Ver menos',

    // feedbacks
    'feedbacks.badge': 'Depoimentos',
    'feedbacks.title1': 'O que dizem ',
    'feedbacks.title2': 'meus clientes',
    'feedbacks.desc': 'Satisfação real de quem já confiou no meu trabalho.',

    // contact
    'contact.badge': 'Vamos trabalhar juntos',
    'contact.title1': 'Pronta para ',
    'contact.title2': 'transformar sua visão',
    'contact.title3': 'em realidade',
    'contact.desc': 'Vamos conversar sobre seu projeto e criar soluções digitais que geram resultados reais.',
    'contact.footer': '© 2026 Geovanna Moura. Todos os direitos reservados.',

    // common
    'common.backToPortfolio': 'Voltar ao portfólio',
    'common.backToTop': 'Voltar ao topo',

    // all projects page
    'allProjects.title': 'Todos os projetos',
    'allProjects.desc': 'Cada projeto entregue com atenção aos detalhes, foco em performance e resultados reais.',
    'allProjects.count': '{n} projetos',
  },

  en: {
    // nav
    'nav.inicio': 'Home',
    'nav.sobre': 'About',
    'nav.projetos': 'Projects',
    'nav.tecnologias': 'Technologies',
    'nav.certificados': 'Certificates',
    'nav.feedbacks': 'Feedbacks',
    'nav.contato': 'Contact',
    'header.hire': 'Hire me',

    // hero
    'hero.badge': 'Available for projects',
    'hero.response': 'Reply within 2h',
    'hero.role': 'Web Developer',
    'hero.desc1': 'I turn ideas into digital experiences that impress.',
    'hero.desc2': 'I build fast, attractive websites that convert',
    'hero.desc3': 'Every detail crafted for your business to grow.',
    'hero.stat.experience': 'Years of experience',
    'hero.stat.projects': 'Projects delivered',
    'hero.stat.rating': 'Average rating',
    'hero.cta.main': 'Talk to me',
    'hero.cta.resume': 'Resume',

    // about
    'about.badge': 'About & Services',
    'about.title1': 'Why work ',
    'about.title2': 'with me?',
    'about.desc1': 'Not just a pretty website — I build',
    'about.desc2': 'a complete digital solution',
    'about.desc3': 'made to grow with your business.',

    // projects
    'projects.title1': 'Projects that deliver ',
    'projects.title2': 'real results',
    'projects.desc': 'Every project built with attention to detail, performance focus, and exceptional UX.',
    'projects.pill.responsive': 'Responsive',
    'projects.pill.seo': 'SEO optimized',
    'projects.pill.indexed': 'Indexed on Google',
    'projects.pill.indexed.mobile': 'Indexed',
    'projects.cta': 'View all projects',
    'projects.viewProject': 'View project',

    // technologies
    'tech.badge': 'Tech Stack',
    'tech.title1': 'Technologies I use ',
    'tech.title2': 'every day',
    'tech.desc': 'Modern tools chosen to deliver performance, scalability, and exceptional experiences.',

    // certificates
    'certs.badge': 'Education',
    'certs.title1': 'Certificates & ',
    'certs.title2': 'Courses',
    'certs.desc': 'Continuous learning to always deliver the best.',
    'certs.showMore': 'Show more certificates',
    'certs.showLess': 'Show less',

    // feedbacks
    'feedbacks.badge': 'Testimonials',
    'feedbacks.title1': 'What my ',
    'feedbacks.title2': 'clients say',
    'feedbacks.desc': 'Real satisfaction from those who trusted my work.',

    // contact
    'contact.badge': "Let's work together",
    'contact.title1': 'Ready to ',
    'contact.title2': 'bring your vision',
    'contact.title3': 'to life',
    'contact.desc': "Let's talk about your project and create digital solutions that deliver real results.",
    'contact.footer': '© 2026 Geovanna Moura. All rights reserved.',

    // common
    'common.backToPortfolio': 'Back to portfolio',
    'common.backToTop': 'Back to top',

    // all projects page
    'allProjects.title': 'All projects',
    'allProjects.desc': 'Every project delivered with attention to detail, performance focus, and real results.',
    'allProjects.count': '{n} projects',
  },

  es: {
    // nav
    'nav.inicio': 'Inicio',
    'nav.sobre': 'Sobre mí',
    'nav.projetos': 'Proyectos',
    'nav.tecnologias': 'Tecnologías',
    'nav.certificados': 'Certificados',
    'nav.feedbacks': 'Feedbacks',
    'nav.contato': 'Contacto',
    'header.hire': 'Contratar',

    // hero
    'hero.badge': 'Disponible para proyectos',
    'hero.response': 'Respuesta en máx. 2h',
    'hero.role': 'Desarrolladora Web',
    'hero.desc1': 'Convierto ideas en experiencias digitales que impresionan.',
    'hero.desc2': 'Creo sitios rápidos, atractivos y que convierten',
    'hero.desc3': 'Cada detalle pensado para que tu negocio crezca.',
    'hero.stat.experience': 'Años de experiencia',
    'hero.stat.projects': 'Proyectos entregados',
    'hero.stat.rating': 'Calificación promedio',
    'hero.cta.main': 'Hablar conmigo',
    'hero.cta.resume': 'Currículum',

    // about
    'about.badge': 'Sobre mí & Servicios',
    'about.title1': '¿Por qué trabajar ',
    'about.title2': 'conmigo?',
    'about.desc1': 'No solo un sitio bonito — construyo',
    'about.desc2': 'una solución digital completa',
    'about.desc3': 'hecha para crecer con tu negocio.',

    // projects
    'projects.title1': 'Proyectos que generan ',
    'projects.title2': 'resultados reales',
    'projects.desc': 'Cada proyecto desarrollado con atención al detalle, foco en rendimiento y UX excepcional.',
    'projects.pill.responsive': 'Responsivo',
    'projects.pill.seo': 'SEO optimizado',
    'projects.pill.indexed': 'Indexado en Google',
    'projects.pill.indexed.mobile': 'Indexado',
    'projects.cta': 'Ver todos los proyectos',
    'projects.viewProject': 'Ver proyecto',

    // technologies
    'tech.badge': 'Stack Técnico',
    'tech.title1': 'Tecnologías que uso ',
    'tech.title2': 'a diario',
    'tech.desc': 'Herramientas modernas elegidas para entregar rendimiento, escalabilidad y experiencias excepcionales.',

    // certificates
    'certs.badge': 'Formación',
    'certs.title1': 'Certificados & ',
    'certs.title2': 'Cursos',
    'certs.desc': 'Aprendizaje continuo para siempre entregar lo mejor.',
    'certs.showMore': 'Ver más certificados',
    'certs.showLess': 'Ver menos',

    // feedbacks
    'feedbacks.badge': 'Testimonios',
    'feedbacks.title1': 'Lo que dicen ',
    'feedbacks.title2': 'mis clientes',
    'feedbacks.desc': 'Satisfacción real de quienes confiaron en mi trabajo.',

    // contact
    'contact.badge': 'Trabajemos juntos',
    'contact.title1': 'Lista para ',
    'contact.title2': 'transformar tu visión',
    'contact.title3': 'en realidad',
    'contact.desc': 'Hablemos sobre tu proyecto y creemos soluciones digitales que generen resultados reales.',
    'contact.footer': '© 2026 Geovanna Moura. Todos los derechos reservados.',

    // common
    'common.backToPortfolio': 'Volver al portafolio',
    'common.backToTop': 'Volver al inicio',

    // all projects page
    'allProjects.title': 'Todos los proyectos',
    'allProjects.desc': 'Cada proyecto entregado con atención al detalle, foco en rendimiento y resultados reales.',
    'allProjects.count': '{n} proyectos',
  },
};

export function getT(lang: Lang) {
  return (key: string, vars?: Record<string, string | number>) => {
    const str = translations[lang]?.[key] ?? translations.pt[key] ?? key;
    if (!vars) return str;
    return Object.entries(vars).reduce(
      (s, [k, v]) => s.replace(`{${k}}`, String(v)),
      str,
    );
  };
}
