import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { skillsData } from '../data/skills';
import SkillsRadarChart from './skills/SkillsRadarChart';
import SkillsFilter from './skills/SkillsFilter';
import SkillTooltip from './skills/SkillTooltip';
import { Skill } from '../types';
import { 
  CpuChipIcon,
  ChartBarIcon,
  StarIcon,
  CalendarIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const InteractiveSkills: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [viewMode, setViewMode] = useState<'radar' | 'grid'>('radar');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredSkills = React.useMemo(() => {
    let skills = skillsData.categories.flatMap(category => category.skills);
    
    if (selectedCategory) {
      const category = skillsData.categories.find(c => c.id === selectedCategory);
      if (category) {
        skills = category.skills;
      }
    }
    
    if (searchQuery) {
      skills = skills.filter(skill => 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return skills;
  }, [selectedCategory, searchQuery]);

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
      className="relative py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50/30 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))'
              : 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.15))',
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              <CpuChipIcon className="w-4 h-4" />
              Interactive Skills
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Technical Expertise
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Visualization</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Explore my technical skills through an interactive radar chart and detailed breakdowns
            of experience, proficiency levels, and project applications.
          </motion.p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-2 p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <motion.button
              onClick={() => setViewMode('radar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                viewMode === 'radar'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChartBarIcon className="w-5 h-5" />
              Radar View
            </motion.button>
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CpuChipIcon className="w-5 h-5" />
              Grid View
            </motion.button>
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div variants={itemVariants} className="mb-12">
          <SkillsFilter
            categories={skillsData.categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skills Visualization */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            } shadow-xl`}>
              {viewMode === 'radar' ? (
                <SkillsRadarChart
                  selectedCategory={selectedCategory}
                  onCategorySelect={setSelectedCategory}
                />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {filteredSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                          : 'bg-white border-gray-200 hover:bg-gray-50'
                      } hover:shadow-lg`}
                      onClick={() => setSelectedSkill(skill)}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.yearsOfExperience} years
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Skills Details */}
          <motion.div variants={itemVariants}>
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white/80 border-gray-200/50'
            } shadow-xl`}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Skills Overview
              </h3>
              
              {selectedSkill ? (
                <SkillTooltip skill={selectedSkill} theme={theme} />
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {skillsData.categories.length}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {skillsData.categories.reduce((sum, cat) => sum + cat.skills.length, 0)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Total Skills</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click on a skill in the grid view or select a category to view detailed information
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                icon: <StarIcon className="w-10 h-10 text-yellow-500" />, 
                value: "50+", 
                label: "Technologies",
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-500/20"
              },
              { 
                icon: <CalendarIcon className="w-10 h-10 text-blue-500" />, 
                value: "3+", 
                label: "Years Experience",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/20"
              },
              { 
                icon: <BriefcaseIcon className="w-10 h-10 text-green-500" />, 
                value: "12+", 
                label: "Projects",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500/20"
              },
              { 
                icon: <CpuChipIcon className="w-10 h-10 text-purple-500" />, 
                value: "7", 
                label: "Specializations",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700/50' 
                    : 'bg-white/80 border-gray-200/50'
                } shadow-xl text-center`}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-2xl ${stat.bgColor} border-2 border-current/20 shadow-lg`}>
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
      </div>
    </section>
  );
};

export default InteractiveSkills;