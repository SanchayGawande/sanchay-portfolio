import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { TagIcon } from '@heroicons/react/24/outline';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTags, onTagToggle }) => {
  const { theme } = useTheme();

  const getTagColor = (tag: string, isSelected: boolean) => {
    const baseColors = {
      'AI': 'purple',
      'Python': 'green',
      'JavaScript': 'yellow',
      'React': 'blue',
      'TypeScript': 'indigo',
      'Performance': 'red',
      'Healthcare': 'emerald',
      'Production': 'slate',
      'LLM': 'violet',
      'RAG': 'blue',
      'API': 'cyan',
      'FastAPI': 'teal',
      'Flask': 'orange',
      'DevOps': 'gray'
    };

    const color = baseColors[tag] || 'gray';
    
    if (isSelected) {
      return {
        bg: `bg-${color}-600`,
        text: 'text-white',
        border: `border-${color}-600`,
        hover: `hover:bg-${color}-700`
      };
    }

    return {
      bg: theme === 'dark' ? 'bg-gray-800' : 'bg-white',
      text: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
      border: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
      hover: theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <TagIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filter by topics:
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          const colors = getTagColor(tag, isSelected);

          return (
            <motion.button
              key={tag}
              variants={tagVariants}
              onClick={() => onTagToggle(tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${colors.bg} ${colors.text} ${colors.border} ${colors.hover} ${
                isSelected
                  ? 'shadow-lg transform scale-105'
                  : 'hover:shadow-md'
              }`}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-1">
                {tag}
                {isSelected && (
                  <span className="text-xs">✓</span>
                )}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {selectedTags.length > 0 && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {selectedTags.length} {selectedTags.length === 1 ? 'tag' : 'tags'} selected
        </div>
      )}
    </div>
  );
};

export default TagFilter;