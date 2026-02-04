import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface TechStackVisualizerProps {
  technologies: string[];
  stackDecisions: {
    title: string;
    decisions: {
      technology: string;
      reasoning: string;
      alternatives: string[];
    }[];
  };
}

const TechStackVisualizer: React.FC<TechStackVisualizerProps> = ({ 
  technologies, 
  stackDecisions 
}) => {
  const { theme } = useTheme();
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const techCategories = {
    'Frontend': ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind'],
    'Backend': ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'GraphQL'],
    'Database': ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
    'AI/ML': ['GPT-4', 'LLaMA', 'LangChain', 'BERT', 'XGBoost'],
    'Cloud': ['AWS Lambda', 'AWS EC2', 'Docker', 'Kubernetes'],
    'Other': []
  };

  const categorizeTechnologies = () => {
    const categorized: { [key: string]: string[] } = {};
    
    Object.keys(techCategories).forEach(category => {
      categorized[category] = [];
    });

    technologies.forEach(tech => {
      let assigned = false;
      
      Object.entries(techCategories).forEach(([category, categoryTechs]) => {
        if (categoryTechs.some(ct => tech.toLowerCase().includes(ct.toLowerCase()))) {
          categorized[category].push(tech);
          assigned = true;
        }
      });

      if (!assigned) {
        categorized['Other'].push(tech);
      }
    });

    return categorized;
  };

  const categorizedTech = categorizeTechnologies();
  
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'from-blue-500 to-cyan-500',
      'Backend': 'from-green-500 to-emerald-500',
      'Database': 'from-orange-500 to-red-500',
      'AI/ML': 'from-purple-500 to-pink-500',
      'Cloud': 'from-indigo-500 to-blue-500',
      'Other': 'from-gray-500 to-slate-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const getDecisionForTech = (tech: string) => {
    return stackDecisions.decisions.find(decision => 
      decision.technology.toLowerCase().includes(tech.toLowerCase()) ||
      tech.toLowerCase().includes(decision.technology.toLowerCase())
    );
  };

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Technology Stack Visualization
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Interactive overview of technologies used in this project. Click on any technology to see implementation details.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {Object.entries(categorizedTech).map(([category, techs]) => {
          if (techs.length === 0) return null;

          return (
            <motion.div
              key={category}
              variants={categoryVariants}
              className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`} />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {category}
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({techs.length} technologies)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => {
                  const decision = getDecisionForTech(tech);
                  const isSelected = selectedTech === tech;

                  return (
                    <motion.button
                      key={index}
                      variants={techVariants}
                      onClick={() => setSelectedTech(isSelected ? null : tech)}
                      className={`px-3 py-2 rounded-lg border transition-all duration-200 ${
                        isSelected
                          ? `bg-gradient-to-r ${getCategoryColor(category)} text-white border-transparent shadow-lg`
                          : `${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'}`
                      } ${decision ? 'cursor-pointer' : 'cursor-default'}`}
                      whileHover={{ scale: decision ? 1.05 : 1 }}
                      whileTap={{ scale: decision ? 0.95 : 1 }}
                      disabled={!decision}
                    >
                      <span className="text-sm font-medium">{tech}</span>
                      {decision && (
                        <span className="ml-2 text-xs opacity-70">ⓘ</span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Selected Technology Details */}
      {selectedTech && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg`}
        >
          {(() => {
            const decision = getDecisionForTech(selectedTech);
            if (!decision) return null;

            return (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {selectedTech.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {decision.technology}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                      Why we chose this technology:
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {decision.reasoning}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                      Alternatives considered:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {decision.alternatives.map((alt, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-md"
                        >
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={() => setSelectedTech(null)}
                  className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Close details
                </motion.button>
              </div>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
};

export default TechStackVisualizer;