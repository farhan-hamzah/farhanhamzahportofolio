export interface ProjectLink {
  label: string;
  url: string;
}

export type ProjectColor = "violet" | "teal" | "peach" | "sky" | "sage" | "rose";

export interface ProjectMeta {
  role: string;
  team?: string[];
  duration: string;
  context: string;
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  color: ProjectColor;
  images?: string[];
  links?: ProjectLink[];
  details?: string[];
  overview?: string;
  challenge?: string;
  impact?: string;
  repo?: string;
  live?: string;
  meta?: ProjectMeta;
}

export interface InProgressProject {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
}

export interface Experience {
  hash: string;
  org: string;
  role: string;
  period: string;
  description: string;
  color?: ProjectColor;
  images?: string[];
  highlights?: string[];
  skills?: string[];
}

export interface Competition {
  id: string;
  title: string;
  event: string;
  organizer: string;
  award: string;
  period: string;
  teamName: string;
  teammates: string[];
  description: string;
  highlights: string[];
  metrics: string[];
  skills: string[];
  color: ProjectColor;
  repo: string;
  images: string[];
}