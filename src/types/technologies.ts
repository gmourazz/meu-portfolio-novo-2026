import type { LucideIcon } from 'lucide-react';

export type SkillCategory = {
  label: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
};

export type Highlight = {
  icon: LucideIcon;
  label: string;
  value: string;
  desc: string;
};

export type Extra = {
  label: string;
  value: string;
};
