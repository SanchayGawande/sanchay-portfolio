import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  SparklesIcon, 
  CodeBracketIcon, 
  ChartBarIcon, 
  CloudIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <LightBulbIcon className="w-5 h-5" /> },
    { id: 'expertise', label: 'Expertise', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { id: 'passion', label: 'Passion', icon: <RocketLaunchIcon className="w-5 h-5" /> }
  ];

  const tabContent = {
    overview: {
      title: "Building AI-Enhanced Systems",
      content: "I'm a Software Engineer with 3+ years of experience designing AI-enhanced web systems, full-stack microservices, and cloud-native applications. I specialize in building interpretable, reasoning-based AI platforms and scalable backend APIs using tools like GPT-4, LangChain, Flask, Node.js, and AWS.",
      highlights: [
        "3+ years in AI/ML and full-stack development",
        "Expertise in LLM integration and RAG systems",
        "Experience with healthcare and financial domains",
        "Strong background in cloud-native architecture"
      ]
    },
    expertise: {
      title: "Technical Excellence",
      content: "With a strong background in both traditional software engineering and applied machine learning, I've shipped LLM-integrated tools, observability dashboards, and real-time data platforms. My work focuses on creating systems that are not just functional, but interpretable and scalable.",
      highlights: [
        "AI/LLM: GPT-4, LangChain, RAG Systems, FAISS",
        "Backend: Node.js, Python, Flask, FastAPI, GraphQL",
        "Frontend: React.js, Next.js, TypeScript, Vue.js",
        "Cloud: AWS, Docker, Kubernetes, Terraform"
      ]
    },
    passion: {
      title: "Innovation & Impact",
      content: "I'm passionate about creating technology that makes a real difference. Whether it's building AI systems that help healthcare professionals make better decisions or developing platforms that improve user experiences, I thrive on solving complex problems with elegant solutions.",
      highlights: [
        "Healthcare AI: 50+ clinicians using my tools",
        "Performance: 30% latency reduction achieved",
        "Scale: Systems serving 100K+ users",
        "Innovation: Cutting-edge AI reasoning platforms"
      ]
    }
  };

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              <AcademicCapIcon className="w-4 h-4" />
              About Me
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Crafting Digital Solutions with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI & Innovation</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Passionate about building intelligent systems that bridge the gap between 
            cutting-edge AI and practical business solutions.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Tabs */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700/50' 
                  : 'bg-white/80 border-gray-200/50'
              } shadow-xl`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {tabContent[activeTab].content}
                </p>
                
                {/* Highlights */}
                <div className="space-y-3">
                  {tabContent[activeTab].highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: <SparklesIcon className="w-6 h-6 text-blue-500" />, 
                  number: "50+", 
                  label: "AI Tools Built",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: <ChartBarIcon className="w-6 h-6 text-green-500" />, 
                  number: "100K+", 
                  label: "Users Served",
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  icon: <CloudIcon className="w-6 h-6 text-purple-500" />, 
                  number: "30%", 
                  label: "Latency Reduced",
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  icon: <BriefcaseIcon className="w-6 h-6 text-orange-500" />, 
                  number: "3+", 
                  label: "Years Experience",
                  color: "from-orange-500 to-red-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${
                    theme === 'dark' 
                      ? 'bg-gray-800/50 border-gray-700/50' 
                      : 'bg-white/80 border-gray-200/50'
                  } shadow-xl text-center group`}
                >
                  <div className="mb-3 flex justify-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            } shadow-xl`}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'GPT-4', 'LangChain', 'React.js', 'Node.js', 'Flask', 'AWS', 
                  'Docker', 'PostgreSQL', 'TypeScript', 'Python'
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <motion.button
                onClick={() => {
                  const skillsSection = document.getElementById('skills');
                  if (skillsSection) {
                    skillsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CodeBracketIcon className="w-5 h-5" />
                Explore My Skills
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;