import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { BlogPost } from '../../types';
import { 
  ClockIcon, 
  TagIcon, 
  StarIcon,
  ArrowRightIcon,
  UserIcon
} from '@heroicons/react/24/outline';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onRead: (slug: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onRead }) => {
  const { theme } = useTheme();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  const getTagColor = (tag: string) => {
    const colors = {
      'AI': 'from-purple-500 to-pink-500',
      'Python': 'from-green-500 to-emerald-500',
      'JavaScript': 'from-yellow-500 to-orange-500',
      'React': 'from-blue-500 to-cyan-500',
      'TypeScript': 'from-blue-600 to-indigo-600',
      'Performance': 'from-red-500 to-pink-500',
      'Healthcare': 'from-green-600 to-teal-600',
      'Production': 'from-gray-600 to-slate-600',
      'LLM': 'from-violet-500 to-purple-500',
      'RAG': 'from-indigo-500 to-blue-500'
    };
    
    return colors[tag] || 'from-gray-500 to-gray-600';
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      className={`group relative rounded-2xl overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gray-800/50 border-gray-700/50' 
          : 'bg-white/80 border-gray-200/50'
      } backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
            <StarIcon className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <UserIcon className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <ClockIcon className="w-4 h-4" />
            <span>{Math.ceil(post.readingTime)} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTagColor(tag)} text-white`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {tag}
            </motion.span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(post.date)}
          </div>
          
          <motion.button
            onClick={() => onRead(post.slug)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Read More</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
          transform: 'translateX(-100%)'
        }}
        animate={{
          transform: 'translateX(100%)'
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3
        }}
      />
    </motion.article>
  );
};

export default BlogCard;