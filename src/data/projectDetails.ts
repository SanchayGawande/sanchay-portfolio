import { ProjectDetails } from '../types';

export const projectDetailsData: ProjectDetails[] = [
  {
    id: "peer-genius",
    title: "PeerGenius – AI-Powered Student Collaboration Platform",
    company: "Personal Project",
    description: "Context-aware AI response system with 95% accuracy in academic query detection, implementing logic to differentiate solo vs group study modes. Built with React 19, Vite, Express, MongoDB, Firebase Auth, and Radix UI.",
    impact: "95% Accuracy • AI-Powered Learning • CI/CD Pipeline",
    tech: ["React 19", "Vite", "Express", "MongoDB", "Firebase Auth", "Radix UI", "JWT", "CI/CD"],
    icon: 'UserGroupIcon',
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    riveFile: "peer-genius.riv",
    featured: true,
    github: "https://github.com/SanchayGawande/PeerGenius",
    overview: "PeerGenius is an AI-powered student collaboration platform that revolutionizes how students work together. It features context-aware AI responses with 95% accuracy in academic query detection, intelligent differentiation between solo and group study modes, and fast AI responses through secure Firebase Authentication and JWT security.",
    architecture: {
      title: "System Architecture",
      description: "Full-stack architecture with modern React frontend and secure backend",
      components: [
        "React 19 with Vite Frontend",
        "Express.js API Backend",
        "MongoDB Database",
        "Firebase Authentication",
        "Radix UI Component System",
        "CI/CD Pipeline with Production Standards"
      ]
    },
    stackDecisions: {
      title: "Technology Stack Decisions",
      decisions: [
        {
          technology: "React 19 with Vite",
          reasoning: "Cutting-edge React features with fast build times and HMR",
          alternatives: ["Next.js", "Create React App", "Remix"]
        },
        {
          technology: "Firebase Auth + JWT",
          reasoning: "Secure authentication with token-based session handling for fast responses",
          alternatives: ["Auth0", "Clerk", "Custom OAuth"]
        },
        {
          technology: "Radix UI",
          reasoning: "Accessible, unstyled components for custom design while maintaining a11y",
          alternatives: ["Shadcn", "Chakra UI", "Material UI"]
        }
      ]
    },
    challenges: {
      title: "Technical Challenges & Solutions",
      items: [
        {
          challenge: "Academic Query Detection",
          solution: "Engineered context-aware AI response system with specialized academic detection logic",
          outcome: "Achieved 95% accuracy in academic query detection"
        },
        {
          challenge: "Study Mode Differentiation",
          solution: "Built intelligent logic to differentiate solo vs group study modes",
          outcome: "Seamless user experience across different study contexts"
        },
        {
          challenge: "Production Deployment",
          solution: "Developed full CI/CD pipeline with security standards",
          outcome: "Reliable production deployments with automated testing"
        }
      ]
    },
    aiIntegration: {
      title: "AI Integration",
      description: "Context-aware AI for intelligent academic assistance",
      models: ["GPT-based APIs"],
      techniques: ["Context-Aware Responses", "Query Classification", "Mode Detection"],
      performance: [
        { metric: "Query Accuracy", value: "95%" },
        { metric: "Response Time", value: "Fast" },
        { metric: "Study Modes", value: "2 (Solo/Group)" }
      ]
    },
    metrics: {
      title: "Performance Metrics",
      items: [
        { metric: "Query Accuracy", value: "95%", description: "Accuracy in academic query detection" },
        { metric: "Study Modes", value: "2", description: "Solo and group study mode support" },
        { metric: "Security", value: "JWT + Firebase", description: "Production-grade authentication" },
        { metric: "CI/CD", value: "Full Pipeline", description: "Automated testing and deployment" }
      ]
    }
  },
  {
    id: "lifelens",
    title: "LifeLens – Microservices-Based AI Daily Decision Engine",
    company: "Personal Project",
    description: "Full-stack microservices platform with Node.js/TypeScript backend, React Native mobile app, and FastAPI ML service. Integrates 5+ AI APIs with fallback mechanisms achieving 95%+ uptime.",
    impact: "5+ AI APIs • 95%+ Uptime • 30-50% Performance Boost",
    tech: ["Node.js", "TypeScript", "React Native", "FastAPI", "PostgreSQL", "Redis", "OpenRouter", "Google Vision", "DistilBERT"],
    icon: 'SparklesIcon',
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/10",
    riveFile: "lifelens.riv",
    featured: true,
    github: "https://github.com/SanchayGawande/LifeLens",
    overview: "LifeLens is a microservices-based AI daily decision engine that helps users make better daily decisions by processing real-time factors like mood, weather, and history. Built with a modern tech stack including Node.js, TypeScript, React Native, FastAPI, and multiple AI integrations.",
    architecture: {
      title: "Microservices Architecture",
      description: "Full-stack platform with mobile app, ML services, and AI API integrations",
      components: [
        "Node.js/TypeScript Backend",
        "React Native Mobile App",
        "FastAPI ML Service",
        "PostgreSQL with Row-Level Security",
        "Redis Caching Layer",
        "5+ AI API Integrations (OpenRouter, Google Vision, DistilBERT)"
      ]
    },
    stackDecisions: {
      title: "Technology Stack Decisions",
      decisions: [
        {
          technology: "Microservices with TypeScript",
          reasoning: "Type safety across services with independent scaling capabilities",
          alternatives: ["Monolith", "Serverless", "Python-only"]
        },
        {
          technology: "PostgreSQL with RLS",
          reasoning: "Row-Level Security for data isolation with optimized indexing",
          alternatives: ["MongoDB", "DynamoDB", "CockroachDB"]
        },
        {
          technology: "Multi-AI API Strategy",
          reasoning: "Fallback mechanisms ensure 95%+ uptime across diverse AI needs",
          alternatives: ["Single Provider", "Self-hosted Models"]
        }
      ]
    },
    challenges: {
      title: "Technical Challenges & Solutions",
      items: [
        {
          challenge: "Multi-AI Integration",
          solution: "Integrated 5+ AI APIs (OpenRouter, Google Vision, DistilBERT) with fallback mechanisms",
          outcome: "Achieved 95%+ uptime with graceful degradation"
        },
        {
          challenge: "Database Performance",
          solution: "Engineered PostgreSQL with Row-Level Security and optimized indexing, plus Redis caching",
          outcome: "30-50% performance boost with sub-200ms query times"
        },
        {
          challenge: "Contextual Decision Making",
          solution: "Built contextual AI nudge engine processing 7+ real-time factors with rule-based system",
          outcome: "Reduced user decision fatigue significantly"
        }
      ]
    },
    aiIntegration: {
      title: "AI/ML Integration",
      description: "Multi-model AI integration for contextual daily decision support",
      models: ["OpenRouter APIs", "Google Vision", "DistilBERT"],
      techniques: ["Real-time Factor Processing", "Rule-based Systems", "Token Optimization", "Cache Invalidation"],
      performance: [
        { metric: "AI APIs", value: "5+" },
        { metric: "Uptime", value: "95%+" },
        { metric: "Query Time", value: "<200ms" }
      ]
    },
    metrics: {
      title: "Performance Metrics",
      items: [
        { metric: "AI APIs Integrated", value: "5+", description: "OpenRouter, Google Vision, DistilBERT, and more" },
        { metric: "System Uptime", value: "95%+", description: "High availability with fallback mechanisms" },
        { metric: "Performance Boost", value: "30-50%", description: "Via token optimization and cache invalidation" },
        { metric: "Query Time", value: "<200ms", description: "Sub-200ms query times with Redis caching" }
      ]
    }
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction Platform",
    company: "Personal Project",
    description: "ML-powered churn prediction dashboard with explainable insights using XGBoost and BERT. Features real-time predictions, D3.js visualizations, and comprehensive model interpretability via SHAP values.",
    impact: "91% Accuracy • Real-time Predictions • Explainable AI",
    tech: ["Flask", "React.js", "PostgreSQL", "D3.js", "AWS EC2", "Docker", "BERT", "XGBoost", "SHAP"],
    icon: 'ChartBarIcon',
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    riveFile: "churn-prediction.riv",
    featured: true,
    overview: "Machine learning platform that predicts customer churn with explainable AI insights. The system provides real-time predictions and actionable recommendations using XGBoost for predictions and SHAP for model interpretability.",
    architecture: {
      title: "ML Platform Architecture",
      description: "Scalable machine learning pipeline with real-time inference and batch processing",
      components: [
        "React.js Analytics Dashboard",
        "Flask ML API Services",
        "PostgreSQL Data Warehouse",
        "XGBoost Model Training Pipeline",
        "BERT Feature Extraction",
        "D3.js Visualization Engine",
        "Docker Containerization",
        "AWS EC2 Deployment"
      ]
    },
    stackDecisions: {
      title: "Technology Stack Decisions",
      decisions: [
        {
          technology: "XGBoost for Predictions",
          reasoning: "Superior performance on tabular data with built-in feature importance",
          alternatives: ["Random Forest", "LightGBM", "Neural Networks"]
        },
        {
          technology: "BERT for Text Analysis",
          reasoning: "Needed to analyze customer support tickets and feedback for churn indicators",
          alternatives: ["Word2Vec", "TF-IDF", "fastText"]
        },
        {
          technology: "D3.js for Visualizations",
          reasoning: "Required custom, interactive visualizations for ML model explanations",
          alternatives: ["Chart.js", "Plotly", "Recharts"]
        }
      ]
    },
    challenges: {
      title: "Technical Challenges & Solutions",
      items: [
        {
          challenge: "Model Interpretability",
          solution: "Implemented SHAP values and LIME explanations for model decisions",
          outcome: "Clear explanations for business stakeholders"
        },
        {
          challenge: "Real-time Inference",
          solution: "Built model serving infrastructure with caching and load balancing",
          outcome: "Sub-100ms prediction latency"
        },
        {
          challenge: "Data Quality Issues",
          solution: "Developed automated data validation and cleansing pipelines",
          outcome: "Improved model accuracy to 91%"
        }
      ]
    },
    aiIntegration: {
      title: "ML/AI Integration",
      description: "Advanced machine learning pipeline with natural language processing capabilities",
      models: ["XGBoost", "BERT-base"],
      techniques: ["Feature Engineering", "Hyperparameter Tuning", "SHAP Explanations"],
      performance: [
        { metric: "Prediction Accuracy", value: "91%" },
        { metric: "Precision", value: "89%" },
        { metric: "Recall", value: "87%" }
      ]
    },
    metrics: {
      title: "Performance Metrics",
      items: [
        { metric: "Prediction Accuracy", value: "91%", description: "Model accuracy on test data" },
        { metric: "Precision", value: "89%", description: "True positive rate" },
        { metric: "Recall", value: "87%", description: "Sensitivity of churn detection" },
        { metric: "Inference Time", value: "<100ms", description: "Real-time prediction latency" }
      ]
    }
  }
];

export const getProjectById = (id: string): ProjectDetails | undefined => {
  return projectDetailsData.find(project => project.id === id);
};

export const getFeaturedProjects = (): ProjectDetails[] => {
  return projectDetailsData.filter(project => project.featured);
};

export const getProjectsByTechnology = (tech: string): ProjectDetails[] => {
  return projectDetailsData.filter(project => 
    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};