// Project-related types
export interface ProjectDetails {
  id: string;
  title: string;
  company: string;
  description: string;
  impact: string;
  tech: string[];
  icon: string | React.ReactElement;
  gradient: string;
  bgColor: string;
  riveFile?: string;
  featured: boolean;
  github?: string;
  demo?: string;
  
  // Detailed information
  overview: string;
  architecture: {
    title: string;
    description: string;
    diagram?: string;
    components: string[];
  };
  stackDecisions: {
    title: string;
    decisions: {
      technology: string;
      reasoning: string;
      alternatives: string[];
    }[];
  };
  challenges: {
    title: string;
    items: {
      challenge: string;
      solution: string;
      outcome: string;
    }[];
  };
  aiIntegration?: {
    title: string;
    description: string;
    models: string[];
    techniques: string[];
    performance: {
      metric: string;
      value: string;
    }[];
  };
  metrics: {
    title: string;
    items: {
      metric: string;
      value: string;
      description: string;
    }[];
  };
}

// Blog-related types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags: string[];
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  views?: number;
  featured?: boolean;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  featured?: boolean;
}

// Skills-related types
export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  yearsOfExperience: number;
  confidenceLevel: 'Learning' | 'Proficient' | 'Advanced' | 'Expert';
  projectExamples: string[];
  description?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  color: string;
  icon: string | React.ReactElement;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
  radarData: {
    subject: string;
    score: number;
    fullMark: 100;
  }[];
}

// UI-related types
export interface TabItem {
  id: string;
  label: string;
  icon: string | React.ReactElement;
  content?: string;
}

export interface FilterOption {
  id: string;
  label: string;
  count: number;
}

// Animation types
export interface AnimationVariant {
  hidden: object;
  visible: object;
}

// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
}