export interface Project {
  id: string;
  slug: string;
  number: string; // e.g. "01", "02"
  title: string;
  tagline: string;
  category: 'AI/ML' | 'Computer Vision' | 'Distributed Systems';
  featured?: boolean;
  gridSpan?: string;
  overview: string;
  problem: string;
  approach: string;
  dataset: string;
  architecture?: string[];
  model: string;
  results: { metric: string; value: string; detail: string }[];
  techStack: string[];
  challenges: string[];
  futureWork: string[];
  githubUrl: string;
  demoUrl?: string;
  illustrationType: 'solar' | 'fleet' | 'rewear' | 'vision' | 'swarm' | 'pipeline';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming' | 'AI / ML' | 'Web & Backend' | 'Systems & DevOps' | 'Web' | 'Tools' | string;
  description: string;
  relatedProjects: string[];
  relatedTech: string[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
}
