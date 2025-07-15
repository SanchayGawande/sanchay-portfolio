import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';
import { 
  StarIcon,
  CalendarIcon,
  BriefcaseIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface SkillTooltipProps {
  skill: Skill;
  theme: string;
}

const SkillTooltip: React.FC<SkillTooltipProps> = ({ skill, theme }) => {
  const getConfidenceColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-600 dark:text-green-400';
      case 'Advanced': return 'text-blue-600 dark:text-blue-400';
      case 'Proficient': return 'text-yellow-600 dark:text-yellow-400';
      case 'Learning': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getConfidenceIcon = (level: string) => {
    switch (level) {
      case 'Expert': return '⭐⭐⭐⭐⭐';
      case 'Advanced': return '⭐⭐⭐⭐';
      case 'Proficient': return '⭐⭐⭐';
      case 'Learning': return '⭐⭐';
      default: return '⭐';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-4 rounded-lg shadow-xl border max-w-sm ${
        theme === 'dark' 
          ? 'bg-gray-800 border-gray-700 text-white' 
          : 'bg-white border-gray-200 text-gray-900'
      } backdrop-blur-sm`}
    >
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{skill.name}</h3>
          <div className="flex items-center gap-1">
            <ChartBarIcon className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">{skill.level}%</span>
          </div>
        </div>

        {/* Category */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {skill.category}
        </div>

        {/* Description */}
        {skill.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {skill.description}
          </p>
        )}

        {/* Confidence Level */}
        <div className="flex items-center gap-2">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <span className={`text-sm font-medium ${getConfidenceColor(skill.confidenceLevel)}`}>
            {skill.confidenceLevel}
          </span>
          <span className="text-xs">{getConfidenceIcon(skill.confidenceLevel)}</span>
        </div>

        {/* Years of Experience */}
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {skill.yearsOfExperience} years experience
          </span>
        </div>

        {/* Project Examples */}
        {skill.projectExamples && skill.projectExamples.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BriefcaseIcon className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Used in:
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {skill.projectExamples.slice(0, 3).map((project, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">Proficiency</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillTooltip;