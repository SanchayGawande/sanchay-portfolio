import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import ContactDrawer from './ContactDrawer';

const NavContactButton = () => {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Navigation Contact Button */}
      <motion.button
        onClick={openDrawer}
        className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-40 group px-3 py-2 sm:px-4 sm:py-3 rounded-full backdrop-blur-sm border transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
          theme === 'dark' 
            ? 'bg-gray-900/80 border-gray-700/50 hover:bg-gray-800/90 text-white' 
            : 'bg-white/80 border-gray-200/50 hover:bg-white/90 text-gray-900'
        } shadow-lg hover:shadow-xl`}
        initial={{ 
          opacity: 0, 
          y: -20
        }}
        animate={{ 
          opacity: 1,
          y: 0
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 25,
          delay: 0.5
        }}
        whileHover={{ 
          scale: 1.05,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base">Contact</span>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.button>

      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default NavContactButton;