import type { Social } from '../types';
import { Mail, Linkedin, Github } from 'lucide-react';

export const socials: Social[] = [
  { icon: Mail,     label: 'E-mail',   value: 'geovannamouradeveloper@gmail.com', href: 'mailto:geovannamouradeveloper@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: '/geovanna-moura',                  href: 'https://linkedin.com/in/geovanna-moura-23472b216' },
  { icon: Github,   label: 'GitHub',   value: '@gmourazz',                        href: 'https://github.com/gmourazz' },
];

export { WA_URL as WA_LINK } from '../services/whatsapp';
export { HOSTINGER_URL as HOSTINGER_LINK } from '../services/hostinger';
