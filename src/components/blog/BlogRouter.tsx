import React, { useState } from 'react';
import BlogLayout from './BlogLayout';
import BlogPost from './BlogPost';

const BlogRouter: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'post'>('list');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const handlePostSelect = (slug: string) => {
    setSelectedPost(slug);
    setCurrentView('post');
  };

  const handleBackToBlog = () => {
    setCurrentView('list');
    setSelectedPost(null);
  };

  const handleNavigateToPost = (slug: string) => {
    setSelectedPost(slug);
    setCurrentView('post');
  };

  if (currentView === 'post' && selectedPost) {
    return (
      <BlogPost
        slug={selectedPost}
        onBack={handleBackToBlog}
        onNavigateToPost={handleNavigateToPost}
      />
    );
  }

  return (
    <BlogLayout onPostSelect={handlePostSelect} />
  );
};

export default BlogRouter;