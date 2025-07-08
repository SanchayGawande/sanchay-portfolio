import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ArrowDownIcon, 
  DocumentArrowDownIcon, 
  EyeIcon,
  SparklesIcon,
  ChartBarIcon,
  CloudIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const HeroSection = () => {
  const { theme } = useTheme();
  const [isHoveringResume, setIsHoveringResume] = useState(false);
  const [isHoveringWork, setIsHoveringWork] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  
  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Scroll-based parallax
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, -400]);
  const contentY = useTransform(scrollY, [0, 800], [0, -200]);
  const floatingY = useTransform(scrollY, [0, 800], [0, -100]);

  // Rive animation setup - Hero Background (with proper error handling)
  const [riveLoaded, setRiveLoaded] = useState(false);
  const [riveError] = useState(false);
  
  const { RiveComponent: HeroRive, rive } = useRive({
    src: '/hero_animation.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: () => {
      setRiveLoaded(true);
    },
    onLoadError: (error) => {
      console.warn('Rive hero animation not found - using fallback:', error);
      setRiveLoaded(false);
    }
  });
  
  // Developer profile Rive animation (with proper error handling)
  const [developerRiveLoaded, setDeveloperRiveLoaded] = useState(false);
  const [developerRiveError] = useState(false);
  
  const { RiveComponent: DeveloperRive, rive: developerRive } = useRive({
    src: '/developer.riv',
    autoplay: true,
    stateMachines: 'State Machine 1',
    onLoad: () => {
      setDeveloperRiveLoaded(true);
    },
    onLoadError: (error) => {
      console.warn('Rive developer animation not found - using fallback:', error);
      setDeveloperRiveLoaded(false);
    }
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.5,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  // Magnetic hover effect
  const handleMouseMove = (e, setHover) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    setHover(true);
  };

  const handleMouseLeave = (setHover) => {
    setHover(false);
  };

  // Handle smooth scroll to projects
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle resume download
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sanchay_Gawande_Resume.pdf';
    link.download = 'Sanchay_Gawande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden"
    >
      {/* Layer 1: Background with Rive Animation */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Rive Hero Background Animation */}
        <div className="absolute inset-0 z-0">
          {riveLoaded && HeroRive && rive ? (
            <div className="w-full h-full opacity-20">
              <HeroRive className="w-full h-full object-cover" />
            </div>
          ) : (
            /* Fallback Animated Gradient - Always show if Rive isn't loaded */
            <motion.div
              className="w-full h-full"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(16, 185, 129, 0.1))'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(16, 185, 129, 0.2))',
                filter: 'blur(80px)',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </div>

        {/* Parallax Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </motion.div>

        {/* Floating Gradient Orbs with Parallax */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))',
            filter: 'blur(60px)',
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.9, 1],
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
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(236, 72, 153, 0.15))',
            filter: 'blur(50px)',
            transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`
          }}
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Layer 2: Foreground Content with Parallax */}
      <motion.div 
        className="relative z-10"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
            }}
          >
            {/* Layer 3: Floating Badge with Enhanced Animation */}
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 dark:bg-emerald-500/10 backdrop-blur-xl border border-emerald-200 dark:border-emerald-400/20 rounded-full shadow-2xl mb-8"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                y: -4,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                backgroundColor: theme === 'dark' ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.1)"
              }}
              style={{
                transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`
              }}
            >
              <motion.div 
                className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                animate={{ 
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(16, 185, 129, 0.7)",
                    "0 0 0 10px rgba(16, 185, 129, 0)",
                    "0 0 0 0 rgba(16, 185, 129, 0.7)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                Open to Remote Opportunities
              </span>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.div
                className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Rive Animation Container */}
                {developerRiveLoaded && DeveloperRive && developerRive ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DeveloperRive className="w-full h-full object-cover" />
                  </div>
                ) : (
                  /* Fallback Profile Image or Initials */
                  <>
                    <img 
                      src="/profile.jpg" 
                      alt="Sanchay Gawande - Software Engineer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full hidden items-center justify-center text-white text-3xl font-bold"
                      style={{ display: 'none' }}
                    >
                      SG
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* Main Heading with Enhanced Parallax */}
            <motion.div 
              className="space-y-6 mb-8" 
              variants={itemVariants}
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                Hi, I'm{' '}
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% auto',
                    filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))'
                  }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 30px rgba(147, 51, 234, 0.8)"
                  }}
                >
                  Sanchay Gawande
                </motion.span>
              </h1>
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200"
                style={{
                  transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                }}
              >
                Software Engineer
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium"
                style={{
                  transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
                }}
              >
                📍 Boston, MA • Open to Remote
              </motion.p>
            </motion.div>

            {/* Updated Tagline with AI/LLM focus */}
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              variants={itemVariants}
              style={{
                transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px)`
              }}
            >
              I design AI-enhanced web systems, full-stack microservices, and cloud-native applications. 
              With 3+ years of experience, I specialize in building interpretable, reasoning-based AI platforms 
              and scalable backend APIs using GPT-4, LangChain, Flask, Node.js, and AWS.
            </motion.p>

            {/* Updated Impact Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
              variants={itemVariants}
              style={{
                transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
              }}
            >
              {[
                { number: '50+', label: 'AI Tools Deployed' },
                { number: '30%', label: 'Latency Reduction' },
                { number: '25%', label: 'Retention Boost' },
                { number: '3+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group backdrop-blur-sm bg-white/90 dark:bg-white/5 rounded-2xl p-4 border border-gray-200/50 dark:border-white/10"
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    transform: `translate(${mousePosition.x * (index % 2 === 0 ? 0.3 : -0.3)}px, ${mousePosition.y * (index % 2 === 0 ? 0.3 : -0.3)}px)`
                  }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Enhanced Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={itemVariants}
              style={{
                transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
              }}
            >
              <motion.button
                onClick={downloadResume}
                onMouseMove={(e) => handleMouseMove(e, setIsHoveringResume)}
                onMouseLeave={() => handleMouseLeave(setIsHoveringResume)}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white font-semibold rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.5)",
                  filter: "brightness(1.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                    transform: 'translateX(-100%)'
                  }}
                  animate={{
                    transform: isHoveringResume ? 'translateX(100%)' : 'translateX(-100%)'
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <DocumentArrowDownIcon className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>

              <motion.button
                onClick={scrollToProjects}
                onMouseMove={(e) => handleMouseMove(e, setIsHoveringWork)}
                onMouseLeave={() => handleMouseLeave(setIsHoveringWork)}
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-xl hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-2xl"
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <EyeIcon className="w-5 h-5 mr-2 group-hover:text-blue-400 transition-colors" />
                View My Work
              </motion.button>
            </motion.div>

            {/* Updated Tech Stack */}
            <motion.div 
              variants={itemVariants} 
              className="mb-12"
              style={{
                transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
              }}
            >
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium">AI/ML & Full-Stack Technologies</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  'GPT-4', 'LangChain', 'React.js', 'Node.js', 'Flask', 'FastAPI', 
                  'Python', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 
                  'Kubernetes', 'GraphQL', 'FAISS', 'Transformers'
                ].map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-xl rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200/50 dark:border-white/20 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                      color: "rgba(59, 130, 246, 1)"
                    }}
                    style={{
                      transform: `translate(${mousePosition.x * (index % 2 === 0 ? 0.2 : -0.2)}px, ${mousePosition.y * (index % 2 === 0 ? 0.2 : -0.2)}px)`
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Updated Social Links */}
            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
              style={{
                transform: `translate(${mousePosition.x * -0.7}px, ${mousePosition.y * -0.7}px)`
              }}
            >
              {[
                {
                  href: "https://www.linkedin.com/in/sanchay-gawande/",
                  label: "LinkedIn Profile",
                  hoverColor: "hover:text-blue-400",
                  icon: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  )
                },
                {
                  href: "https://github.com/SanchayGawande",
                  label: "GitHub Profile",
                  hoverColor: "hover:text-gray-100",
                  icon: (
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                  )
                },
                {
                  href: "mailto:sanchay@work-mail.net",
                  label: "Email Contact",
                  hoverColor: "hover:text-red-400",
                  icon: (
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.832L12 11.367l9.532-7.546h.832c.904 0 1.636.732 1.636 1.636z"/>
                  )
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 text-gray-400 dark:text-gray-400 ${social.hoverColor} shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.12, 
                    y: -6,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transform: `translate(${mousePosition.x * (index % 2 === 0 ? 0.4 : -0.4)}px, ${mousePosition.y * (index % 2 === 0 ? 0.4 : -0.4)}px)`
                  }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Achievement Cards with Enhanced Parallax */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ y: floatingY }}
        >
          <motion.div
            className="absolute top-1/4 left-8 lg:left-16"
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08, rotate: 3, y: -5 }}
            style={{
              transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`
            }}
          >
            <div className="bg-white/80 dark:bg-white/10 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-gray-200/50 dark:border-white/20 pointer-events-auto max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <SparklesIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">AI Reasoning Platform</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">GPT-4 + LangChain</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-8 lg:right-16"
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.7 }}
            whileHover={{ scale: 1.08, rotate: -3, y: -5 }}
            style={{
              transform: `translate(${mousePosition.x * -1.2}px, ${mousePosition.y * -1.2}px)`
            }}
          >
            <div className="bg-white/80 dark:bg-white/10 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-gray-200/50 dark:border-white/20 pointer-events-auto max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <ChartBarIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">ML Platform</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">100K+ Users</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Enhanced Effect */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          style={{
            transform: `translateX(-50%) translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 shadow-2xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
            }}
          >
            <ArrowDownIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" />
          </motion.div>
        </motion.div>
    </section>
  );
};

export default HeroSection;