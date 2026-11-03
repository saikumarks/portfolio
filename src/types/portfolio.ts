export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  highlight?: boolean;
  appliedIn?: string[];
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface ArchitectureStep {
  stepNumber: number;
  label: string;
  technology: string;
  description: string;
  dataDetail: string;
}

export interface ProjectData {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  organization: string;
  clientDomain: string;
  duration: string;
  status: string;
  impactBadge: string;
  overview: string;
  businessImpact: string;
  keyMetrics: { label: string; value: string; detail: string }[];
  technologies: string[];
  keyResponsibilities: string[];
  backendHighlights: string[];
  architectureDiagram: {
    title: string;
    description: string;
    nodes: {
      id: string;
      title: string;
      subtitle: string;
      tag: string;
      color: 'blue' | 'indigo' | 'emerald' | 'amber' | 'purple' | 'cyan';
      details: string[];
    }[];
  };
  sampleEndpoint?: {
    method: 'GET' | 'POST' | 'PUT';
    path: string;
    description: string;
    requestBody?: string;
    responseBody: string;
    controllerSnippet: string;
  };
}

export interface TechnicalChallenge {
  id: string;
  title: string;
  category: 'Migration' | 'Performance' | 'Security' | 'DevOps & Quality';
  context: string;
  problem: string;
  rootCause: string;
  engineeringSolution: string[];
  codeArchitectureConcept?: string;
  outcome: string;
  metrics: string[];
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  summary: string;
  coreResponsibilities: string[];
  achievements: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score?: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  duration: string;
  topics: string[];
}

