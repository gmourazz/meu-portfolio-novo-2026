import type { LucideIcon } from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  num: string;
  title: string;
  description: string;
};

export type Perk = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type Testimonial = {
  name: string;
  initials: string;
  avatarColor: string;
  text: string;
  project: string;
};
