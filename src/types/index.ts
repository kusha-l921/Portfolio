export interface ProjectResult {
  metric: string;
  value: string;
  detail: string;
}

export interface SystemFlowStep {
  step: string;
  label: string;
  detail: string;
}

export interface ExecutionTraceStep {
  phase: string;
  action: string;
  status: string;
  duration?: string;
}

export interface ProjectSpecItem {
  label: string;
  value: string;
}

export interface TechnicalSnapshotItem {
  label: string;
  value: string;
}

export interface RunSummaryItem {
  label: string;
  value: string;
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
  githubUrl?: string;
  isPrivate?: boolean;
  demoUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  dataset?: string;
  architecture: string[];
  results: ProjectResult[];
  highlights: string[];
  systemFlow?: SystemFlowStep[];
  specGrid?: ProjectSpecItem[];
  executionTrace?: ExecutionTraceStep[];
  technicalSnapshot?: TechnicalSnapshotItem[];
  runSummary?: RunSummaryItem[];
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

export interface Experience {
  id: string;
  number?: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  current: boolean;
  statusText?: string;
  focus?: string[];
  department?: string;
}

