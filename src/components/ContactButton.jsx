import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import ContactDrawer from './ContactDrawer';

const ContactButton = () => {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Floating Contact Button */}
      <motion.button
        onClick={openDrawer}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        } text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
        initial={{ 
          opacity: 0, 
          scale: 0,
          y: 100
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          y: isVisible ? 0 : 100
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 25,
          delay: isVisible ? 0.2 : 0
        }}
        whileHover={{ 
          scale: 1.1,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>

        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Tooltip */}
        <motion.div
          className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none ${
            theme === 'dark' 
              ? 'bg-gray-800 text-white border border-gray-700' 
              : 'bg-white text-gray-900 border border-gray-200'
          } shadow-lg`}
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          Contact Me
          <div className={`absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-b-4 border-transparent ${
            theme === 'dark' ? 'border-l-gray-800' : 'border-l-white'
          }`} />
        </motion.div>
      </motion.button>

      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default ContactButton;