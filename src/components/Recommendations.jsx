import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../contexts/ThemeContext';
import { 
  StarIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/solid';

const Recommendations = () => {
  const { theme } = useTheme();
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const recommendations = [
    {
      id: 1,
      name: "Apoorva Sharma",
      role: "CEO",
      company: "Suno Analytics",
      relationship: "Worked with Sanchay on the same team",
      date: "January 26, 2026",
      image: null, // Can add profile image URL later
      content: `Sanchay worked with us at Suno Analytics as a Founding Machine Learning Engineer during a critical build phase. He took real ownership, moved fast without breaking things, and consistently delivered end to end features. He was strong at turning ambiguous requirements into clear execution, communicating progress, and unblocking himself with minimal oversight.

On the technical side, Sanchay built and improved core AI product workflows and backend services using Python, FastAPI, and PostgreSQL, and he handled edge cases with the kind of care you want in early stage product development. He was dependable, proactive, and deeply committed to the work. I would gladly work with Sanchay again and strongly recommend him for ML engineering and backend focused roles.`,
      highlight: "I would gladly work with Sanchay again and strongly recommend him for ML engineering and backend focused roles."
    },
    {
      id: 2,
      name: "Deven Shah",
      role: "Co-Founder & CTO",
      company: "Suno Analytics",
      relationship: "Managed Sanchay directly",
      date: "January 22, 2026",
      image: null,
      content: `I worked closely with Sanchay at Suno Analytics, where he served as a Founding Machine Learning Engineer. He ramped up quickly, asked the right questions, and consistently delivered production quality work across multiple parts of the system.

Sanchay built and refined ML driven product workflows and backend services using Python, FastAPI, and PostgreSQL. He thought through trade offs, handled debugging and edge cases well, and improved systems with a strong engineering mindset rather than quick patches. What stood out most was his ownership. He could take an ambiguous problem, break it down, drive it to completion, and communicate clearly throughout.

I would absolutely recommend Sanchay for ML engineering, platform, or backend roles where execution, system thinking, and accountability matter.`,
      highlight: "I would absolutely recommend Sanchay for ML engineering, platform, or backend roles where execution, system thinking, and accountability matter."
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  return (
    <section id="recommendations" className="relative py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 dark:from-dark-bg dark:via-dark-surface/50 dark:to-dark-card/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-dark-card/60 backdrop-blur-sm border border-white/30 dark:border-dark-border/30 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-dark-text">LinkedIn Recommendations</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            What Leaders Say
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-dark-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Recommendations from executives I've worked closely with at Suno Analytics
          </motion.p>
        </motion.div>

        {/* Recommendations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {recommendations.map((rec) => (
            <motion.div
              key={rec.id}
              variants={cardVariants}
              className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 group hover:scale-[1.02] ${
                theme === 'dark'
                  ? 'bg-dark-card/80 border-dark-border/50 hover:border-purple-500/50 shadow-dark-soft hover:shadow-dark-strong'
                  : 'bg-white/80 border-gray-200/50 hover:border-purple-300 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-6xl text-purple-500/20 dark:text-purple-400/20 font-serif">
                "
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {rec.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {rec.name}
                  </h3>
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {rec.role} @ {rec.company}
                  </p>
                  <p className={`text-xs mt-1 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {rec.relationship} • {rec.date}
                  </p>
                </div>

                {/* LinkedIn Badge */}
                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className={`text-sm leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {rec.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlight Quote */}
              <div className={`p-4 rounded-xl border-l-4 border-purple-500 ${
                theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-50'
              }`}>
                <div className="flex items-start gap-2">
                  <StarIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm font-medium italic ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                  }`}>
                    "{rec.highlight}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/sanchay-gawande/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View All Recommendations on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
