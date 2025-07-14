import { SkillsData, SkillCategory } from '../types';
import { 
  DevicePhoneMobileIcon,
  ServerIcon,
  SparklesIcon,
  ChartBarIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export const skillsData: SkillsData = {
  categories: [
    {
      id: 'frontend',
      name: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      icon: 'DevicePhoneMobileIcon',
      skills: [
        {
          name: 'React.js',
          level: 95,
          category: 'Framework',
          yearsOfExperience: 3,
          confidenceLevel: 'Expert',
          projectExamples: ['PeerGenius', 'IConcern', 'Churn Prediction Platform'],
          description: 'Advanced React patterns, hooks, context, and performance optimization'
        },
        {
          name: 'TypeScript',
          level: 88,
          category: 'Language',
          yearsOfExperience: 2.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern', 'Portfolio Website'],
          description: 'Type-safe development with advanced generics and utility types'
        },
        {
          name: 'Next.js',
          level: 90,
          category: 'Framework',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'SSR, SSG, API routes, and performance optimization'
        },
        {
          name: 'Tailwind CSS',
          level: 95,
          category: 'Styling',
          yearsOfExperience: 3,
          confidenceLevel: 'Expert',
          projectExamples: ['PeerGenius', 'Portfolio Website'],
          description: 'Utility-first CSS with custom design systems'
        },
        {
          name: 'JavaScript (ES6+)',
          level: 95,
          category: 'Language',
          yearsOfExperience: 4,
          confidenceLevel: 'Expert',
          projectExamples: ['All Projects'],
          description: 'Modern JavaScript with async/await, modules, and advanced features'
        },
        {
          name: 'Vue.js',
          level: 75,
          category: 'Framework',
          yearsOfExperience: 1.5,
          confidenceLevel: 'Proficient',
          projectExamples: ['Internal Tools'],
          description: 'Component-based development with Composition API'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      icon: 'ServerIcon',
      skills: [
        {
          name: 'Node.js',
          level: 95,
          category: 'Runtime',
          yearsOfExperience: 3,
          confidenceLevel: 'Expert',
          projectExamples: ['PeerGenius', 'IConcern'],
          description: 'Scalable server-side applications with Express and async patterns'
        },
        {
          name: 'Python',
          level: 95,
          category: 'Language',
          yearsOfExperience: 4,
          confidenceLevel: 'Expert',
          projectExamples: ['IConcern', 'Churn Prediction Platform'],
          description: 'Data science, web development, and automation scripting'
        },
        {
          name: 'FastAPI',
          level: 88,
          category: 'Framework',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'High-performance API development with automatic documentation'
        },
        {
          name: 'Flask',
          level: 92,
          category: 'Framework',
          yearsOfExperience: 2.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['Churn Prediction Platform'],
          description: 'Lightweight web framework for ML applications'
        },
        {
          name: 'Express.js',
          level: 90,
          category: 'Framework',
          yearsOfExperience: 3,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius'],
          description: 'RESTful APIs and middleware development'
        },
        {
          name: 'GraphQL',
          level: 85,
          category: 'API',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'Schema design and resolver implementation'
        }
      ]
    },
    {
      id: 'ai',
      name: 'AI/ML/LLM',
      color: 'from-purple-500 to-pink-500',
      icon: 'SparklesIcon',
      skills: [
        {
          name: 'GPT-4',
          level: 95,
          category: 'LLM',
          yearsOfExperience: 1.5,
          confidenceLevel: 'Expert',
          projectExamples: ['IConcern'],
          description: 'Prompt engineering and API integration for healthcare applications'
        },
        {
          name: 'LangChain',
          level: 92,
          category: 'Framework',
          yearsOfExperience: 1.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius', 'IConcern'],
          description: 'Building LLM applications with memory and tool integration'
        },
        {
          name: 'LLaMA',
          level: 85,
          category: 'LLM',
          yearsOfExperience: 1,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius'],
          description: 'Local LLM deployment and fine-tuning'
        },
        {
          name: 'RAG Systems',
          level: 90,
          category: 'Architecture',
          yearsOfExperience: 1.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius', 'IConcern'],
          description: 'Retrieval-Augmented Generation for knowledge-based applications'
        },
        {
          name: 'BERT',
          level: 80,
          category: 'Model',
          yearsOfExperience: 2,
          confidenceLevel: 'Proficient',
          projectExamples: ['Churn Prediction Platform'],
          description: 'Text classification and sentiment analysis'
        },
        {
          name: 'XGBoost',
          level: 85,
          category: 'ML',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['Churn Prediction Platform'],
          description: 'Gradient boosting for structured data predictions'
        }
      ]
    },
    {
      id: 'data',
      name: 'Database & Data',
      color: 'from-orange-500 to-red-500',
      icon: 'ChartBarIcon',
      skills: [
        {
          name: 'PostgreSQL',
          level: 90,
          category: 'Relational',
          yearsOfExperience: 3,
          confidenceLevel: 'Advanced',
          projectExamples: ['Churn Prediction Platform'],
          description: 'Complex queries, indexing, and performance optimization'
        },
        {
          name: 'MongoDB',
          level: 88,
          category: 'NoSQL',
          yearsOfExperience: 2.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius'],
          description: 'Document-based data modeling and aggregation pipelines'
        },
        {
          name: 'Firebase',
          level: 85,
          category: 'BaaS',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius', 'IConcern'],
          description: 'Real-time database and authentication services'
        },
        {
          name: 'Redis',
          level: 80,
          category: 'Cache',
          yearsOfExperience: 2,
          confidenceLevel: 'Proficient',
          projectExamples: ['IConcern'],
          description: 'Caching and session management'
        },
        {
          name: 'D3.js',
          level: 85,
          category: 'Visualization',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['Churn Prediction Platform'],
          description: 'Interactive data visualizations and dashboards'
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      color: 'from-indigo-500 to-blue-500',
      icon: 'CloudIcon',
      skills: [
        {
          name: 'AWS Lambda',
          level: 90,
          category: 'Serverless',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'Serverless function development and deployment'
        },
        {
          name: 'AWS EC2',
          level: 88,
          category: 'Compute',
          yearsOfExperience: 2.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['Churn Prediction Platform'],
          description: 'Virtual machine management and auto-scaling'
        },
        {
          name: 'Docker',
          level: 92,
          category: 'Container',
          yearsOfExperience: 3,
          confidenceLevel: 'Advanced',
          projectExamples: ['All Projects'],
          description: 'Containerization and orchestration'
        },
        {
          name: 'Kubernetes',
          level: 85,
          category: 'Orchestration',
          yearsOfExperience: 1.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'Container orchestration and service mesh'
        },
        {
          name: 'GitHub Actions',
          level: 88,
          category: 'CI/CD',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['All Projects'],
          description: 'Automated testing and deployment pipelines'
        }
      ]
    },
    {
      id: 'testing',
      name: 'Testing & Security',
      color: 'from-teal-500 to-green-500',
      icon: 'ShieldCheckIcon',
      skills: [
        {
          name: 'Jest',
          level: 85,
          category: 'Testing',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius'],
          description: 'Unit testing and test-driven development'
        },
        {
          name: 'Cypress',
          level: 80,
          category: 'E2E Testing',
          yearsOfExperience: 1.5,
          confidenceLevel: 'Proficient',
          projectExamples: ['IConcern'],
          description: 'End-to-end testing and integration testing'
        },
        {
          name: 'OAuth',
          level: 85,
          category: 'Auth',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'Authentication and authorization systems'
        },
        {
          name: 'JWT',
          level: 90,
          category: 'Auth',
          yearsOfExperience: 2.5,
          confidenceLevel: 'Advanced',
          projectExamples: ['PeerGenius', 'IConcern'],
          description: 'Token-based authentication and security'
        }
      ]
    },
    {
      id: 'practices',
      name: 'Practices & Methods',
      color: 'from-gray-500 to-slate-500',
      icon: 'CogIcon',
      skills: [
        {
          name: 'Agile',
          level: 92,
          category: 'Methodology',
          yearsOfExperience: 3,
          confidenceLevel: 'Advanced',
          projectExamples: ['All Projects'],
          description: 'Scrum and Kanban methodologies'
        },
        {
          name: 'Microservices',
          level: 90,
          category: 'Architecture',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'Distributed system design and implementation'
        },
        {
          name: 'CI/CD',
          level: 88,
          category: 'DevOps',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['All Projects'],
          description: 'Continuous integration and deployment pipelines'
        },
        {
          name: 'Observability',
          level: 85,
          category: 'Monitoring',
          yearsOfExperience: 2,
          confidenceLevel: 'Advanced',
          projectExamples: ['IConcern'],
          description: 'Monitoring, logging, and alerting systems'
        }
      ]
    }
  ],
  radarData: [
    { subject: 'Frontend', score: 92, fullMark: 100 },
    { subject: 'Backend', score: 91, fullMark: 100 },
    { subject: 'AI/ML', score: 89, fullMark: 100 },
    { subject: 'Database', score: 86, fullMark: 100 },
    { subject: 'Cloud', score: 88, fullMark: 100 },
    { subject: 'Security', score: 85, fullMark: 100 }
  ]
};

export const getSkillsByCategory = (categoryId: string) => {
  return skillsData.categories.find(cat => cat.id === categoryId)?.skills || [];
};

export const getTopSkills = (limit: number = 10) => {
  return skillsData.categories
    .flatMap(cat => cat.skills)
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

export const getSkillsByTechnology = (tech: string) => {
  return skillsData.categories
    .flatMap(cat => cat.skills)
    .filter(skill => skill.name.toLowerCase().includes(tech.toLowerCase()));
};