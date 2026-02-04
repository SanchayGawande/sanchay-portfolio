import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { ProjectDetails } from '../../types';
import ProjectDetailsSection from './ProjectDetailsSection';
import TechStackVisualizer from './TechStackVisualizer';
import { 
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
  CogIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

interface ProjectDetailsPanelProps {
  project: ProjectDetails;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsPanel: React.FC<ProjectDetailsPanelProps> = ({ project, isOpen, onClose }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');

  // Icon mapping for string to component conversion
  const iconMap: { [key: string]: React.ReactElement } = {
    'UserGroupIcon': <UserGroupIcon className="w-6 h-6" />,
    'SparklesIcon': <SparklesIcon className="w-6 h-6" />,
    'ChartBarIcon': <ChartBarIcon className="w-6 h-6" />
  };

  const getProjectIcon = (iconName: string | React.ReactElement) => {
    if (typeof iconName === 'string') {
      return iconMap[iconName] || <ChartBarIcon className="w-6 h-6" />;
    }
    return iconName;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <PresentationChartLineIcon className="w-5 h-5" /> },
    { id: 'architecture', label: 'Architecture', icon: <CogIcon className="w-5 h-5" /> },
    { id: 'stack', label: 'Tech Stack', icon: <ChartBarIcon className="w-5 h-5" /> },
    { id: 'challenges', label: 'Challenges', icon: <ExclamationTriangleIcon className="w-5 h-5" /> },
    ...(project.aiIntegration ? [{ id: 'ai', label: 'AI Integration', icon: <SparklesIcon className="w-5 h-5" /> }] : []),
    { id: 'metrics', label: 'Metrics', icon: <ChartBarIcon className="w-5 h-5" /> }
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const panelVariants = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      x: '100%',
      opacity: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Project Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Company</h4>
                <p className="text-gray-600 dark:text-gray-300">{project.company}</p>
              </div>
              
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Impact</h4>
                <p className="text-gray-600 dark:text-gray-300">{project.impact}</p>
              </div>
            </div>

            {(project.github || project.demo) && (
              <div className="flex gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    View on GitHub
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                )}
              </div>
            )}
          </div>
        );

      case 'architecture':
        return (
          <ProjectDetailsSection
            title={project.architecture.title}
            description={project.architecture.description}
            items={project.architecture.components}
            type="list"
          />
        );

      case 'stack':
        return (
          <div className="space-y-6">
            <TechStackVisualizer 
              technologies={project.tech}
              stackDecisions={project.stackDecisions}
            />
            <ProjectDetailsSection
              title={project.stackDecisions.title}
              items={project.stackDecisions.decisions}
              type="decisions"
            />
          </div>
        );

      case 'challenges':
        return (
          <ProjectDetailsSection
            title={project.challenges.title}
            items={project.challenges.items}
            type="challenges"
          />
        );

      case 'ai':
        return project.aiIntegration ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {project.aiIntegration.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {project.aiIntegration.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Models Used</h4>
                <div className="space-y-2">
                  {project.aiIntegration.models.map((model, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-600 dark:text-gray-300">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques</h4>
                <div className="space-y-2">
                  {project.aiIntegration.techniques.map((technique, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-600 dark:text-gray-300">{technique}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performance Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.aiIntegration.performance.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {metric.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null;

      case 'metrics':
        return (
          <ProjectDetailsSection
            title={project.metrics.title}
            items={project.metrics.items}
            type="metrics"
          />
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-end"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className={`relative w-full max-w-4xl h-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-2xl overflow-hidden`}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className={`sticky top-0 z-10 p-6 border-b border-gray-200 dark:border-gray-700 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                    {getProjectIcon(project.icon)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.company}
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </motion.button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mt-6 overflow-x-auto scrollbar-thin">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${project.gradient} text-white shadow-lg`
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto h-full pb-20">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderTabContent()}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsPanel;