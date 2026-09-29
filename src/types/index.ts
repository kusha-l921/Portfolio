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

export interface AchievementSubsection {
  title: string;
  content?: string;
  bullets?: string[];
}

export interface AchievementTechnicalSection {
  heading: string;
  description?: string;
  pipeline?: string[];
  subsections?: AchievementSubsection[];
  bullets?: string[];
}

export interface Achievement {
  id: string;
  number: string;
  projectName: string;
  title: string;
  competition: string;
  award: string;
  organizer: string;
  date: string;
  badge: string;
  collapsedSummary: string;
  description: string;
  whatWeBuilt: string;
  whatWeBuiltBullets?: string[];
  pipeline?: string[];
  technicalSections: AchievementTechnicalSection[];
  resultSummary: string;
  resultBullets?: string[];
}
