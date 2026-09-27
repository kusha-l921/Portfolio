export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'AI/ML' | 'Computer Vision' | 'Distributed Systems' | 'Robotics & IoT';
  featured?: boolean;
  gridSpan?: string; // e.g. 'col-span-12 lg:col-span-8'
  overview: string;
  problem: string;
  approach: string;
  dataset: string;
  architecture: string[];
  model: string;
  results: { metric: string; value: string; detail: string }[];
  techStack: string[];
  challenges: string[];
  futureWork: string[];
  githubUrl: string;
  demoUrl?: string;
  stats: { label: string; value: string }[];
  sceneType: 'solar' | 'fleet' | 'rewear' | 'vision' | 'swarm';
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'PROGRAMMING' | 'AI / ML' | 'BACKEND' | 'SYSTEMS' | 'TOOLS';
  orbitRadius: number;
  speed: number;
  color: string;
  size: number;
  proficiency: number;
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
  status?: 'COMPLETED' | 'IN_PROGRESS' | 'UPCOMING';
  description: string;
  achievements: string[];
  technologies: string[];
  signalStrength: number; // 0 to 100
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'HACKATHON' | 'CERTIFICATION' | 'RESEARCH' | 'ACADEMIC';
  credentialId?: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface NavLink {
  label: string;
  path: string;
  id: string;
}
