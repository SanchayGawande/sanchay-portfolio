import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
  ServerIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Skills = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <DevicePhoneMobileIcon className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, category: "Framework" },
        { name: "Next.js", level: 90, category: "Framework" },
        { name: "TypeScript", level: 88, category: "Language" },
        { name: "Redux", level: 85, category: "State Management" },
        { name: "JavaScript (ES6+)", level: 95, category: "Language" },
        { name: "Vue.js", level: 75, category: "Framework" },
        { name: "HTML5", level: 98, category: "Markup" },
        { name: "CSS3", level: 92, category: "Styling" },
        { name: "Tailwind CSS", level: 95, category: "Styling" },
        { name: "Bootstrap", level: 85, category: "Styling" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <ServerIcon className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 95, category: "Runtime" },
        { name: "Express.js", level: 90, category: "Framework" },
        { name: "Nest.js", level: 85, category: "Framework" },
        { name: "Python", level: 95, category: "Language" },
        { name: "Flask", level: 92, category: "Framework" },
        { name: "FastAPI", level: 88, category: "Framework" },
        { name: "Java", level: 80, category: "Language" },
        { name: "Spring Boot", level: 75, category: "Framework" },
        { name: "GraphQL", level: 85, category: "API" },
        { name: "REST APIs", level: 95, category: "API" }
      ]
    },
    ai: {
      title: "AI/LLM/NLP",
      icon: <SparklesIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "GPT-4", level: 95, category: "LLM" },
        { name: "LLaMA", level: 85, category: "LLM" },
        { name: "LangChain", level: 92, category: "Framework" },
        { name: "RAG Systems", level: 90, category: "Architecture" },
        { name: "FAISS", level: 85, category: "Vector DB" },
        { name: "BERT", level: 80, category: "Model" },
        { name: "XGBoost", level: 85, category: "ML" },
        { name: "Hugging Face", level: 88, category: "Platform" },
        { name: "Transformers", level: 85, category: "Library" },
        { name: "RAG", level: 90, category: "Architecture" }
      ]
    },
    data: {
      title: "Database & Data",
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 90, category: "Relational" },
        { name: "MongoDB", level: 88, category: "NoSQL" },
        { name: "Firebase", level: 85, category: "BaaS" },
        { name: "Redis", level: 80, category: "Cache" },
        { name: "D3.js", level: 85, category: "Visualization" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <CloudIcon className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "AWS Lambda", level: 90, category: "Serverless" },
        { name: "AWS EC2", level: 88, category: "Compute" },
        { name: "AWS S3", level: 95, category: "Storage" },
        { name: "API Gateway", level: 85, category: "API" },
        { name: "CloudFront", level: 80, category: "CDN" },
        { name: "Docker", level: 92, category: "Container" },
        { name: "Kubernetes", level: 85, category: "Orchestration" },
        { name: "Terraform", level: 80, category: "IaC" },
        { name: "GitHub Actions", level: 88, category: "CI/CD" }
      ]
    },
    testing: {
      title: "Testing & Security",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      color: "from-teal-500 to-green-500",
      skills: [
        { name: "Jest", level: 85, category: "Testing" },
        { name: "Cypress", level: 80, category: "E2E Testing" },
        { name: "Postman", level: 90, category: "API Testing" },
        { name: "OAuth", level: 85, category: "Auth" },
        { name: "JWT", level: 90, category: "Auth" },
        { name: "Web Security", level: 88, category: "Security" }
      ]
    },
    practices: {
      title: "Practices & Methods",
      icon: <CogIcon className="w-6 h-6" />,
      color: "from-gray-500 to-slate-500",
      skills: [
        { name: "Agile", level: 92, category: "Methodology" },
        { name: "Microservices", level: 90, category: "Architecture" },
        { name: "CI/CD", level: 88, category: "DevOps" },
        { name: "Observability", level: 85, category: "Monitoring" },
        { name: "CloudWatch", level: 80, category: "Monitoring" },
        { name: "Accessibility", level: 85, category: "Standards" },
        { name: "WCAG 2.1", level: 82, category: "Standards" }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))'
              : 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15))',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              <CpuChipIcon className="w-4 h-4" />
              Technical Skills
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Full-Stack & AI
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Technology Stack</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive expertise across modern web technologies, AI/ML frameworks, 
            and cloud infrastructure for building scalable solutions.
          </motion.p>
        </motion.div>

        {/* Skills Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80'
                } backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span className="text-sm">{category.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700/50' 
                  : 'bg-white/80 border-gray-200/50'
              } shadow-xl hover:shadow-2xl transition-all duration-300 group`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skill.level}%
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl backdrop-blur-sm border ${
            theme === 'dark' 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50'
          } shadow-xl`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => {
              const experienceSection = document.getElementById('experience');
              if (experienceSection) {
                experienceSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <CommandLineIcon className="w-5 h-5" />
            See My Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;