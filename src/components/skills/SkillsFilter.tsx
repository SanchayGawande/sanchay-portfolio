import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { SkillCategory } from '../../types';
import { 
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  SparklesIcon,
  ChartBarIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';

interface SkillsFilterProps {
  categories: SkillCategory[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SkillsFilter: React.FC<SkillsFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  searchQuery,
  onSearchChange
}) => {
  const { theme } = useTheme();

  // Icon mapping for string to component conversion
  const iconMap: { [key: string]: React.ReactElement } = {
    'DevicePhoneMobileIcon': <DevicePhoneMobileIcon className="w-5 h-5" />,
    'ServerIcon': <ServerIcon className="w-5 h-5" />,
    'SparklesIcon': <SparklesIcon className="w-5 h-5" />,
    'ChartBarIcon': <ChartBarIcon className="w-5 h-5" />,
    'CloudIcon': <CloudIcon className="w-5 h-5" />,
    'ShieldCheckIcon': <ShieldCheckIcon className="w-5 h-5" />,
    'CogIcon': <CogIcon className="w-5 h-5" />
  };

  const getCategoryIcon = (iconName: string | React.ReactElement) => {
    if (typeof iconName === 'string') {
      return iconMap[iconName] || <CogIcon className="w-5 h-5" />;
    }
    return iconName;
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Search */}
      <motion.div variants={itemVariants}>
        <div className="relative">
          <AdjustmentsHorizontalIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div variants={itemVariants} className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filter by Category
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {/* All Categories Button */}
          <motion.button
            onClick={() => onCategorySelect(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === null
                ? 'bg-blue-600 text-white shadow-lg'
                : theme === 'dark'
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
            } border ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>

          {/* Category Buttons */}
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
              } border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {getCategoryIcon(category.icon)}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Clear Filters */}
      {(selectedCategory || searchQuery) && (
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {selectedCategory && searchQuery 
              ? `Showing ${selectedCategory} skills matching "${searchQuery}"`
              : selectedCategory
              ? `Showing ${categories.find(c => c.id === selectedCategory)?.name} skills`
              : `Searching for "${searchQuery}"`
            }
          </div>
          
          <motion.button
            onClick={() => {
              onCategorySelect(null);
              onSearchChange('');
            }}
            className="inline-flex items-center gap-1 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <XMarkIcon className="w-4 h-4" />
            Clear Filters
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillsFilter;