import { ProjectDetails } from '../types';

export const projectDetailsData: ProjectDetails[] = [
  {
    id: "peer-genius",
    title: "PeerGenius – AI-Powered Study Chat Platform",
    company: "Personal Project",
    description: "Full-stack app with LLM-powered group chats, summaries, and thread-based learning. Built with React, Tailwind, Firebase, MongoDB, LLaMA, LangChain, Node.js, and Express.js for intelligent peer-to-peer learning.",
    impact: "AI-Powered Learning • Thread-Based Discussions",
    tech: ["React", "Tailwind", "Firebase", "MongoDB", "LLaMA", "LangChain", "Node.js", "Express.js"],
    icon: 'UserGroupIcon',
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    riveFile: "peer-genius.riv",
    featured: true,
    github: "https://github.com/SanchayGawande/PeerGenius",
    overview: "PeerGenius revolutionizes collaborative learning by combining real-time chat with AI-powered study assistance. The platform enables students to form study groups, share resources, and receive intelligent summaries and explanations powered by LLaMA and LangChain.",
    architecture: {
      title: "System Architecture",
      description: "Microservices architecture with real-time capabilities and AI integration",
      components: [
        "React Frontend with TypeScript",
        "Node.js/Express.js API Gateway",
        "Firebase Authentication & Real-time Database",
        "MongoDB for Persistent Storage",
        "LangChain AI Processing Pipeline",
        "LLaMA Model Integration",
        "Socket.io for Real-time Communication"
      ]
    },
    stackDecisions: {
      title: "Technology Stack Decisions",
      decisions: [
        {
          technology: "LLaMA vs GPT-4",
          reasoning: "Chose LLaMA for cost-effectiveness and ability to fine-tune for educational content",
          alternatives: ["GPT-4", "Claude", "Gemini"]
        },
        {
          technology: "Firebase + MongoDB Hybrid",
          reasoning: "Firebase for real-time chat and MongoDB for structured study materials and user profiles",
          alternatives: ["Pure MongoDB", "PostgreSQL", "Supabase"]
        },
        {
          technology: "LangChain Framework",
          reasoning: "Simplified LLM integration with built-in memory and prompt management",
          alternatives: ["Direct API calls", "Custom RAG implementation", "Semantic Kernel"]
        }
      ]
    },
    challenges: {
      title: "Technical Challenges & Solutions",
      items: [
        {
          challenge: "Real-time AI Processing",
          solution: "Implemented streaming responses with WebSocket connections and queue management",
          outcome: "Reduced perceived latency by 60% with progressive response rendering"
        },
        {
          challenge: "Context Management",
          solution: "Built conversation memory system using LangChain's ConversationBufferMemory",
          outcome: "Maintained context across 20+ message exchanges effectively"
        },
        {
          challenge: "Scalability Concerns",
          solution: "Implemented connection pooling and horizontal scaling with Node.js clusters",
          outcome: "Successfully handled 100+ concurrent users in testing"
        }
      ]
    },
    aiIntegration: {
      title: "AI/LLM Integration",
      description: "Advanced AI integration for intelligent study assistance and content generation",
      models: ["LLaMA 2 7B", "Sentence-BERT for embeddings"],
      techniques: ["Retrieval Augmented Generation (RAG)", "Conversation Memory", "Prompt Engineering", "Stream Processing"],
      performance: [
        { metric: "Response Time", value: "< 2s" },
        { metric: "Context Accuracy", value: "87%" },
        { metric: "User Satisfaction", value: "4.2/5" }
      ]
    },
    metrics: {
      title: "Performance Metrics",
      items: [
        { metric: "Active Users", value: "250+", description: "Monthly active users during beta testing" },
        { metric: "Study Sessions", value: "1,200+", description: "Completed collaborative study sessions" },
        { metric: "AI Interactions", value: "5,000+", description: "Successful AI-powered explanations generated" },
        { metric: "Performance", value: "98.5%", description: "Uptime during 3-month beta period" }
      ]
    }
  },
  {
    id: "iconcern",
    title: "IConcern – Healthcare AI Chatbot",
    company: "Anthem Inc.",
    description: "LLM-based triage system using GPT-4 and LangChain for 10,000+ patient interactions. Enabled 50% better follow-up compliance, reduced latency by 30%. Built with React, Next.js, Flask, Node.js, FastAPI, GraphQL, AWS Lambda, and Firebase.",
    impact: "10K+ Patients • 50% Better Compliance • 30% Latency Reduction",
    tech: ["React", "Next.js", "Flask", "Node.js", "FastAPI", "GraphQL", "AWS Lambda", "Firebase", "GPT-4", "LangChain"],
    icon: 'SparklesIcon',
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/10",
    riveFile: "healthcare-chatbot.riv",
    featured: true,
    overview: "IConcern is an enterprise-grade AI-powered healthcare triage system that assists patients with symptom assessment and care recommendations. The platform processes over 10,000 patient interactions monthly while maintaining HIPAA compliance and clinical accuracy.",
    architecture: {
      title: "Enterprise Architecture",
      description: "Highly scalable, HIPAA-compliant healthcare AI system with enterprise integrations",
      components: [
        "Next.js Frontend with Server-Side Rendering",
        "GraphQL API Gateway",
        "FastAPI Microservices",
        "GPT-4 Integration Layer",
        "AWS Lambda Functions",
        "HIPAA-Compliant Data Storage",
        "Real-time Monitoring & Logging",
        "Electronic Health Record (EHR) Integration"
      ]
    },
    stackDecisions: {
      title: "Technology Stack Decisions",
      decisions: [
        {
          technology: "GPT-4 over GPT-3.5",
          reasoning: "Required higher accuracy for medical reasoning and better instruction following",
          alternatives: ["GPT-3.5", "Claude", "PaLM"]
        },
        {
          technology: "FastAPI for AI Services",
          reasoning: "Needed high-performance async processing for AI workloads with automatic API docs",
          alternatives: ["Flask", "Django", "Express.js"]
        },
        {
          technology: "GraphQL over REST",
          reasoning: "Complex healthcare data relationships and need for efficient client-server communication",
          alternatives: ["REST API", "tRPC", "gRPC"]
        }
      ]
    },
    challenges: {
      title: "Technical Challenges & Solutions",
      items: [
        {
          challenge: "HIPAA Compliance",
          solution: "Implemented end-to-end encryption, audit logging, and data anonymization",
          outcome: "Achieved full HIPAA compliance with zero security incidents"
        },
        {
          challenge: "AI Hallucination Prevention",
          solution: "Built multi-layer validation with medical knowledge base cross-referencing",
          outcome: "Reduced false positive recommendations by 73%"
        },
        {
          challenge: "High Availability Requirements",
          solution: "Implemented auto-scaling, circuit breakers, and multi-region deployment",
          outcome: "Achieved 99.97% uptime across 12 months"
        }
      ]
    },
    aiIntegration: {
      title: "AI/LLM Integration",
      description: "Sophisticated AI pipeline for medical triage and patient interaction",
      models: ["GPT-4", "Medical BERT", "BioBERT"],
      techniques: ["Few-shot Learning", "Chain-of-Thought Prompting", "Medical Knowledge Graphs", "Symptom Classification"],
      performance: [
        { metric: "Triage Accuracy", value: "94%" },
        { metric: "Patient Satisfaction", value: "4.6/5" },
        { metric: "Response Time", value: "< 3s" }
      ]
    },
    metrics: {
      title: "Impact Metrics",
      items: [
        { metric: "Patient Interactions", value: "10,000+", description: "Monthly patient conversations processed" },
        { metric: "Compliance Improvement", value: "50%", description: "Better follow-up appointment adherence" },
        { metric: "Latency Reduction", value: "30%", description: "Faster response times vs. previous system" },
        { metric: "Cost Savings", value: "$2.3M", description: "Annual healthcare cost reduction" }
      ]
    }
  },
  {
    id: "churn-prediction",
    title: "Churn Prediction Platform",
    company: "Infosys Ltd.",
    description: "ML-powered churn and fraud prediction dashboard with explainable insights. Boosted customer retention by 25%, used by 100K+ concurrent users. Built with Flask, React.js, PostgreSQL, D3.js, AWS EC2, Docker, BERT, and XGBoost.",
    impact: "100K+ Users • 25% Retention Boost • Real-time Predictions",
    tech: ["Flask", "React.js", "PostgreSQL", "D3.js", "AWS EC2", "Docker", "BERT", "XGBoost"],
    icon: 'ChartBarIcon',
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    riveFile: "churn-prediction.riv",
    featured: true,
    overview: "Enterprise-scale machine learning platform that predicts customer churn and fraudulent activities with explainable AI insights. The system processes millions of transactions daily and provides actionable recommendations to business teams.",
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
        "AWS EC2 Auto-scaling Groups"
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
          outcome: "Increased business team adoption by 300% with clear explanations"
        },
        {
          challenge: "Real-time Inference",
          solution: "Built model serving infrastructure with caching and load balancing",
          outcome: "Achieved sub-100ms prediction latency at scale"
        },
        {
          challenge: "Data Quality Issues",
          solution: "Developed automated data validation and cleansing pipelines",
          outcome: "Improved model accuracy from 78% to 91%"
        }
      ]
    },
    aiIntegration: {
      title: "ML/AI Integration",
      description: "Advanced machine learning pipeline with natural language processing capabilities",
      models: ["XGBoost", "BERT-base", "Random Forest Ensemble"],
      techniques: ["Feature Engineering", "Hyperparameter Tuning", "Model Ensembling", "SHAP Explanations"],
      performance: [
        { metric: "Prediction Accuracy", value: "91%" },
        { metric: "Precision", value: "89%" },
        { metric: "Recall", value: "87%" }
      ]
    },
    metrics: {
      title: "Business Impact",
      items: [
        { metric: "Concurrent Users", value: "100K+", description: "Peak simultaneous dashboard users" },
        { metric: "Retention Improvement", value: "25%", description: "Customer retention rate increase" },
        { metric: "Fraud Detection", value: "96%", description: "Fraudulent transaction detection rate" },
        { metric: "Cost Avoidance", value: "$4.1M", description: "Annual fraud prevention savings" }
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