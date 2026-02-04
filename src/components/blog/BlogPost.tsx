import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { BlogPost as BlogPostType } from '../../types';
import { getBlogPost, getRelatedPosts } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  ArrowLeftIcon,
  ClockIcon,
  CalendarIcon,
  TagIcon,
  ShareIcon,
  BookOpenIcon,
  UserIcon
} from '@heroicons/react/24/outline';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
  onNavigateToPost: (slug: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, onBack, onNavigateToPost }) => {
  const { theme } = useTheme();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const loadPost = () => {
      try {
        const postData = getBlogPost(slug);
        if (postData) {
          setPost(postData);
          const related = getRelatedPosts(postData, 3);
          setRelatedPosts(related);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href
        });
      } catch (error) {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could show a toast notification here
  };

  const components = {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter
          style={theme === 'dark' ? vscDarkPlus : oneLight}
          language={match[1]}
          PreTag="div"
          className="rounded-lg"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={`${className} px-1 py-0.5 rounded text-sm ${
          theme === 'dark' 
            ? 'bg-gray-800 text-blue-400' 
            : 'bg-gray-100 text-blue-600'
        }`} {...props}>
          {children}
        </code>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-5">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className={`border-l-4 border-blue-500 pl-4 italic my-4 ${
        theme === 'dark' ? 'bg-gray-800/50' : 'bg-blue-50'
      } p-4 rounded-r-lg`}>
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
      >
        {children}
      </a>
    )
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Post not found
            </h1>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Blog
        </motion.button>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {post.featured && (
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded-full mb-4">
              <BookOpenIcon className="w-4 h-4" />
              Featured Article
            </div>
          )}

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>{Math.ceil(post.readingTime)} min read</span>
            </div>

            <motion.button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShareIcon className="w-4 h-4" />
              Share
            </motion.button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`prose prose-lg max-w-none ${
            theme === 'dark' ? 'prose-invert' : ''
          }`}
        >
          <ReactMarkdown components={components}>
            {post.content}
          </ReactMarkdown>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => onNavigateToPost(relatedPost.slug)}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {relatedPost.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <ClockIcon className="w-3 h-3" />
                    <span>{Math.ceil(relatedPost.readingTime)} min read</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;