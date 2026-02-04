import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import BlogCard from './BlogCard';
import TagFilter from './TagFilter';
import { BlogPost } from '../../types';
import { getAllBlogPosts, getAllTags, searchBlogPosts } from '../../data/blogPosts';
import { 
  MagnifyingGlassIcon,
  BookOpenIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface BlogLayoutProps {
  onPostSelect: (slug: string) => void;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ onPostSelect }) => {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogData = () => {
      try {
        const allPosts = getAllBlogPosts();
        const allTags = getAllTags();
        
        setPosts(allPosts);
        setFilteredPosts(allPosts);
        setTags(allTags);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading blog data:', error);
        setIsLoading(false);
      }
    };

    loadBlogData();
  }, []);

  useEffect(() => {
    const filterPosts = () => {
      let filtered = [...posts];

      // Filter by search query
      if (searchQuery.trim()) {
        filtered = searchBlogPosts(searchQuery);
      }

      // Filter by selected tags
      if (selectedTags.length > 0) {
        filtered = filtered.filter(post =>
          selectedTags.every(tag => post.tags.includes(tag))
        );
      }

      setFilteredPosts(filtered);
    };

    filterPosts();
  }, [posts, searchQuery, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchQuery('');
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              <BookOpenIcon className="w-4 h-4" />
              Technical Blog
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Engineering
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Deep Dives</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Insights from building production AI systems, scalable architectures, and modern web applications.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              {/* Clear Filters */}
              {(selectedTags.length > 0 || searchQuery) && (
                <motion.button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XMarkIcon className="w-4 h-4" />
                  Clear Filters
                </motion.button>
              )}
            </div>

            {/* Tag Filter */}
            <div className="mt-6">
              <TagFilter
                tags={tags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
              />
            </div>
          </motion.div>

          {/* Results Info */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </p>
              
              {selectedTags.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Filtered by:</span>
                  <div className="flex gap-2">
                    {selectedTags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                  onRead={onPostSelect}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <BookOpenIcon className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">No articles found</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogLayout;