import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  BriefcaseIcon,
  CalendarDaysIcon,
  MapPinIcon,
  SparklesIcon,
  ChartBarIcon,
  CloudIcon,
  CodeBracketIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Experience = () => {
  const { theme } = useTheme();
  const [activeExperience] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 0,
      company: "Anthem Inc.",
      role: "Software Engineer",
      duration: "Oct 2023 – Present",
      location: "Remote, USA",
      type: "Full-time",
      logo: "/anthem-logo.png",
      color: "from-blue-500 to-indigo-600",
      achievements: [
        "Designed and deployed an AI reasoning chatbot (GPT-4, LangChain, FAISS) used by 50+ clinicians",
        "Re-architected backend with Node.js + FastAPI, improving latency by 30%",
        "Deployed WCAG-compliant UI with React + TypeScript",
        "Built end-to-end CI/CD with Docker + GitHub Actions",
        "Conducted A/B testing on prompts to boost factual grounding",
        "Integrated AWS CloudWatch for AI observability"
      ],
      technologies: ["GPT-4", "LangChain", "FAISS", "React", "Node.js", "FastAPI", "TypeScript", "Docker", "AWS", "GitHub Actions"],
      highlights: [
        { icon: <UserGroupIcon className="w-5 h-5 text-blue-500" />, text: "50+ clinicians using AI tools" },
        { icon: <ChartBarIcon className="w-5 h-5 text-green-500" />, text: "30% latency improvement" },
        { icon: <SparklesIcon className="w-5 h-5 text-purple-500" />, text: "AI reasoning platform" }
      ]
    },
    {
      id: 1,
      company: "Infosys Ltd.",
      role: "Software Engineer",
      duration: "Jun 2021 – Aug 2022",
      location: "Bengaluru, India",
      type: "Full-time",
      logo: "/infosys-logo.png",
      color: "from-green-500 to-emerald-600",
      achievements: [
        "Developed churn and fraud detection systems using XGBoost, BERT, and Flask",
        "Created real-time dashboards (React + D3.js) used by marketing teams",
        "Reduced model iteration time by 40% with containerized pipelines (Docker, Lambda)",
        "Supported 100K+ users with 99.9% uptime via AWS-hosted infra"
      ],
      technologies: ["XGBoost", "BERT", "Flask", "React", "D3.js", "Docker", "AWS Lambda", "PostgreSQL", "Python"],
      highlights: [
        { icon: <UserGroupIcon className="w-5 h-5 text-green-500" />, text: "100K+ users served" },
        { icon: <ChartBarIcon className="w-5 h-5 text-blue-500" />, text: "99.9% uptime achieved" },
        { icon: <RocketLaunchIcon className="w-5 h-5 text-purple-500" />, text: "40% faster iterations" }
      ]
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

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-64 h-64 rounded-full"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))'
              : 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.15))',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 16,
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
              <BriefcaseIcon className="w-4 h-4" />
              Work Experience
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Professional Journey &
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Impact</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Building scalable AI systems and full-stack applications at Fortune 500 companies, 
            delivering measurable business value and technical excellence.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
                
                {/* Content */}
                <div className="ml-20">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                      <motion.div
                        className={`p-6 rounded-2xl backdrop-blur-sm border ${
                          theme === 'dark' 
                            ? 'bg-gray-800/50 border-gray-700/50' 
                            : 'bg-white/80 border-gray-200/50'
                        } shadow-xl`}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Company Logo Placeholder */}
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${experience.color} flex items-center justify-center mb-4`}>
                          <BriefcaseIcon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.company}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                          {experience.role}
                        </p>
                        
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mt-6 space-y-3">
                          {experience.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              {highlight.icon}
                              <span className="text-gray-700 dark:text-gray-300">{highlight.text}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Achievements & Technologies */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Achievements */}
                      <motion.div
                        className={`p-6 rounded-2xl backdrop-blur-sm border ${
                          theme === 'dark' 
                            ? 'bg-gray-800/50 border-gray-700/50' 
                            : 'bg-white/80 border-gray-200/50'
                        } shadow-xl`}
                        whileHover={{ scale: 1.01, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {experience.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.2) + (i * 0.1) }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        className={`p-6 rounded-2xl backdrop-blur-sm border ${
                          theme === 'dark' 
                            ? 'bg-gray-800/50 border-gray-700/50' 
                            : 'bg-white/80 border-gray-200/50'
                        } shadow-xl`}
                        whileHover={{ scale: 1.01, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <CodeBracketIcon className="w-5 h-5 text-purple-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (index * 0.2) + (i * 0.05) }}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                theme === 'dark'
                                  ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                                  : 'bg-blue-500/10 text-blue-700 border border-blue-500/30'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                icon: <BriefcaseIcon className="w-8 h-8 text-blue-500" />, 
                value: "3+", 
                label: "Years Experience",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: <UserGroupIcon className="w-8 h-8 text-green-500" />, 
                value: "100K+", 
                label: "Users Impacted",
                color: "from-green-500 to-emerald-500"
              },
              { 
                icon: <SparklesIcon className="w-8 h-8 text-purple-500" />, 
                value: "50+", 
                label: "AI Tools Built",
                color: "from-purple-500 to-pink-500"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700/50' 
                    : 'bg-white/80 border-gray-200/50'
                } shadow-xl text-center`}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-20`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <RocketLaunchIcon className="w-5 h-5" />
            View My Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;