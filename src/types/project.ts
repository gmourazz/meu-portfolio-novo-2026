export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  gradient: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  link: string;
  testimonials: { text: string; author: string }[];
  featured: boolean;
}
