import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface ProjectDetailsSectionProps {
  title: string;
  description?: string;
  items: any[];
  type: 'list' | 'decisions' | 'challenges' | 'metrics';
}

const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({ 
  title, 
  description, 
  items, 
  type 
}) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const getIcon = (itemType: string) => {
    switch (itemType) {
      case 'challenges':
        return <ExclamationTriangleIcon className="w-5 h-5 text-orange-500" />;
      case 'decisions':
        return <LightBulbIcon className="w-5 h-5 text-blue-500" />;
      case 'metrics':
        return <ChartBarIcon className="w-5 h-5 text-green-500" />;
      default:
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
    }
  };

  const renderItem = (item: any, index: number) => {
    switch (type) {
      case 'list':
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          </motion.div>
        );

      case 'decisions':
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
          >
            <div className="flex items-start gap-4">
              {getIcon('decisions')}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.technology}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {item.reasoning}
                </p>
                <div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Alternatives considered:
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.alternatives.map((alt: string, altIndex: number) => (
                      <span
                        key={altIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-md"
                      >
                        {alt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'challenges':
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
          >
            <div className="flex items-start gap-4">
              {getIcon('challenges')}
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.challenge}
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Solution:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {item.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Outcome:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'metrics':
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
          >
            <div className="flex items-start gap-4">
              {getIcon('metrics')}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.metric}
                  </h4>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {item.value}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {description}
          </p>
        )}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {items.map((item, index) => renderItem(item, index))}
      </motion.div>
    </div>
  );
};

export default ProjectDetailsSection;