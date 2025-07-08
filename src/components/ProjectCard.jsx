import React, { useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useRive } from '@rive-app/react-canvas';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ArrowTopRightOnSquareIcon, 
  StarIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const ProjectCard = ({ project, index }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Mouse position for 3D tilt effect
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  
  // Transform values for 3D tilt
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]);
  
  // Rive animation for project icons (with proper error handling)
  const [riveLoaded, setRiveLoaded] = useState(false);
  const [riveError] = useState(false);
  
  const { RiveComponent: ProjectRive, rive } = useRive({
    src: `/projects/${project.riveFile || 'default-project.riv'}`,
    autoplay: isHovered,
    stateMachines: 'State Machine 1',
    onLoad: () => {
      setRiveLoaded(true);
    },
    onLoadError: () => {
      console.warn(`Rive project animation not found: ${project.riveFile} - using fallback icon`);
      setRiveLoaded(false);
    }
  });

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  const cardVariants = {
    rest: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    },
    hover: {
      scale: 1.02,
      z: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative h-full ${project.featured ? 'lg:col-span-2' : ''} perspective-1000 project-card`}
      variants={itemVariants}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className={`relative h-full min-h-[420px] ${project.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl dark:shadow-gray-900/20 transition-all duration-500 group cursor-pointer`}
        variants={cardVariants}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated Gradient Overlay */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 dark:opacity-20`}
          animate={{
            opacity: isHovered ? 0.25 : (theme === 'dark' ? 0.2 : 0.1)
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0
              }}
              animate={{
                y: isHovered ? "-100%" : Math.random() * 100 + "%",
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? [0, 1, 0] : 0
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: isHovered ? Infinity : 0,
                ease: "easeOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <motion.div 
              className="relative p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Rive Animation Container */}
              <div className="w-6 h-6 relative">
                {riveLoaded && ProjectRive && rive ? (
                  <ProjectRive className="w-full h-full absolute inset-0" />
                ) : (
                  /* Fallback to regular icon when Rive fails to load */
                  <div className="w-full h-full flex items-center justify-center">
                    {project.icon}
                  </div>
                )}
              </div>
              
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 blur-xl`}
                animate={{
                  opacity: isHovered ? 0.3 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <div className="flex items-center gap-2">
              {project.featured && (
                <motion.span 
                  className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs font-semibold rounded-full flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <StarIcon className="w-3 h-3" />
                  Featured
                </motion.span>
              )}
              
              {/* Progress Bar for Impact */}
              <div className="flex flex-col items-end">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Impact</div>
                <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${project.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : "80%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="flex-1">
            <motion.div 
              className="mb-2"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                <BuildingOfficeIcon className="w-4 h-4" />
                {project.company}
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              animate={{
                opacity: isHovered ? 1 : 0.9
              }}
            >
              {project.description}
            </motion.p>
            
            {/* Impact Badge with Animation */}
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full shadow-sm">
                <motion.div
                  className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"
                  animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                />
                {project.impact}
              </span>
            </motion.div>
            
            {/* Tech Stack with Staggered Animation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: theme === 'dark' ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)",
                    borderColor: theme === 'dark' ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.3)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Action Button with Magnetic Effect */}
          <motion.div className="flex items-center justify-between">
            {project.github ? (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold rounded-xl shadow-md hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: theme === 'dark' ? "rgba(31, 41, 55, 0.95)" : "rgba(255, 255, 255, 0.95)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>View on GitHub</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            ) : (
              <motion.button 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold rounded-xl shadow-md hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: theme === 'dark' ? "rgba(31, 41, 55, 0.95)" : "rgba(255, 255, 255, 0.95)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>View Details</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            )}
            
            {/* Floating Metrics */}
            <motion.div 
              className="text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-xs text-gray-500 dark:text-gray-400">Success Rate</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">98%</div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Hover Effect Border with Gradient */}
        <motion.div 
          className={`absolute inset-0 rounded-3xl border-2 border-transparent`}
          style={{
            background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace('to-', '')}) border-box`,
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude'
          }}
          animate={{
            opacity: isHovered ? 0.6 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            transform: 'translateX(-100%)'
          }}
          animate={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;