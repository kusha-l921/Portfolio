export interface ProjectResult {
  metric: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  tags: string[];
  category: 'AI / ML' | 'Computer Vision' | 'Systems';
  period: string;
  image?: string;
  githubUrl: string;
  demoUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  dataset?: string;
  architecture: string[];
  results: ProjectResult[];
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  id: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organizer: string;
  date: string;
  badge: string;
  description: string;
}
