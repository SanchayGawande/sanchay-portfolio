import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { 
  CodeBracketIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { ref: titleRef, inView: titleInView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "PeerGenius – AI-Powered Study Chat Platform",
      company: "Personal Project",
      description: "Full-stack app with LLM-powered group chats, summaries, and thread-based learning. Built with React, Tailwind, Firebase, MongoDB, LLaMA, LangChain, Node.js, and Express.js for intelligent peer-to-peer learning.",
      impact: "AI-Powered Learning • Thread-Based Discussions",
      tech: ["React", "Tailwind", "Firebase", "MongoDB", "LLaMA", "LangChain", "Node.js", "Express.js"],
      icon: <UserGroupIcon className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
      riveFile: "peer-genius.riv",
      featured: true,
      github: "https://github.com/SanchayGawande/PeerGenius"
    },
    {
      title: "IConcern – Healthcare AI Chatbot",
      company: "Anthem Inc.",
      description: "LLM-based triage system using GPT-4 and LangChain for 10,000+ patient interactions. Enabled 50% better follow-up compliance, reduced latency by 30%. Built with React, Next.js, Flask, Node.js, FastAPI, GraphQL, AWS Lambda, and Firebase.",
      impact: "10K+ Patients • 50% Better Compliance • 30% Latency Reduction",
      tech: ["React", "Next.js", "Flask", "Node.js", "FastAPI", "GraphQL", "AWS Lambda", "Firebase", "GPT-4", "LangChain"],
      icon: <SparklesIcon className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/10",
      riveFile: "healthcare-chatbot.riv",
      featured: true
    },
    {
      title: "Churn Prediction Platform",
      company: "Infosys Ltd.",
      description: "ML-powered churn and fraud prediction dashboard with explainable insights. Boosted customer retention by 25%, used by 100K+ concurrent users. Built with Flask, React.js, PostgreSQL, D3.js, AWS EC2, Docker, BERT, and XGBoost.",
      impact: "100K+ Users • 25% Retention Boost • Real-time Predictions",
      tech: ["Flask", "React.js", "PostgreSQL", "D3.js", "AWS EC2", "Docker", "BERT", "XGBoost"],
      icon: <ChartBarIcon className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      riveFile: "churn-prediction.riv",
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-dark-bg dark:via-dark-surface/50 dark:to-dark-card/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(236, 72, 153, 0.1))',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          variants={headerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm border border-white/30 dark:border-dark-border/30 rounded-full mb-6 shadow-lg dark:shadow-dark-soft"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <RocketLaunchIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-dark-text">Featured Work</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-dark-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Production-Ready
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Impact Projects
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-600 dark:text-dark-text-muted max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Enterprise applications serving <span className="font-semibold text-blue-600 dark:text-blue-400">100K+ users</span> with 
            measurable business outcomes. Built at Fortune 500 companies and scaled in production.
          </motion.p>

          {/* Animated Statistics */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { icon: <SparklesIcon className="w-5 h-5" />, value: "3", label: "Major Projects" },
              { icon: <ChartBarIcon className="w-5 h-5" />, value: "100K+", label: "Users Served" },
              { icon: <StarIcon className="w-5 h-5" />, value: "2", label: "Fortune 500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-white/40 dark:bg-dark-card/40 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-dark-border/30 shadow-lg dark:shadow-dark-soft"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={titleInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="text-blue-600 dark:text-blue-400">{stat.icon}</div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-dark-text">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-dark-text-muted">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              className={`transition-all duration-500 ${
                hoveredIndex !== null && hoveredIndex !== index 
                  ? 'opacity-60 scale-95' 
                  : 'opacity-100 scale-100'
              }`}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <motion.a
              href="https://github.com/SanchayGawande"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm border border-white/30 dark:border-dark-border/30 text-gray-700 dark:text-dark-text font-semibold rounded-2xl shadow-lg dark:shadow-dark-soft hover:shadow-xl dark:hover:shadow-dark-strong transition-all duration-300 overflow-hidden"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CodeBracketIcon className="w-5 h-5 relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <span className="relative z-10">Explore All Projects</span>
              <motion.div
                className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full relative z-10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>

            <motion.div
              className="text-sm text-gray-500 dark:text-dark-text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              20+ repositories • Open source contributions
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;