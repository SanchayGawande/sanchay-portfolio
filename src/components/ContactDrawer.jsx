import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  XMarkIcon, 
  CalendarDaysIcon, 
  EnvelopeIcon, 
  GlobeAltIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const ContactDrawer = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  // Handle ESC key press to close drawer
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const drawerVariants = {
    hidden: { 
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    visible: { 
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: { 
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.1,
        duration: 0.4,
        staggerChildren: 0.1 
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            className={`fixed top-0 right-0 h-full w-full sm:max-w-md z-50 ${
              theme === 'dark' 
                ? 'bg-gray-900/95 sm:border-l border-gray-700/50' 
                : 'bg-white/95 sm:border-l border-gray-200/50'
            } backdrop-blur-xl shadow-2xl`}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="h-full flex flex-col p-4 sm:p-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <motion.div 
                className="flex items-center justify-between mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Let's Connect
                  </h2>
                </div>
                
                <motion.button
                  onClick={onClose}
                  className={`p-2 rounded-full transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                      : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Description */}
              <motion.p 
                className={`text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                I'm available for collaborations and new opportunities.
              </motion.p>

              {/* Contact Options */}
              <motion.div 
                className="space-y-6 flex-1"
                variants={itemVariants}
              >
                {/* Schedule Call */}
                <motion.a
                  href="mailto:sanchay@work-mail.net?subject=Schedule%20a%20Meeting&body=Hi%20Sanchay,%0D%0A%0D%0AI'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%20potential%20opportunities.%0D%0A%0D%0APlease%20let%20me%20know%20your%20availability.%0D%0A%0D%0AThank%20you!"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                    theme === 'dark' 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                      : 'bg-gray-50/50 hover:bg-gray-50 border border-gray-200/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CalendarDaysIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Schedule a Call
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Email me to schedule a meeting
                    </p>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:sanchay@work-mail.net"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                    theme === 'dark' 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                      : 'bg-gray-50/50 hover:bg-gray-50 border border-gray-200/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      sanchay@work-mail.net
                    </p>
                  </div>
                </motion.a>

                {/* Website */}
                <motion.a
                  href="https://sanchaygawande.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                    theme === 'dark' 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' 
                      : 'bg-gray-50/50 hover:bg-gray-50 border border-gray-200/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Portfolio
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      sanchaygawande.com
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  className={`flex items-center gap-4 p-4 rounded-2xl ${
                    theme === 'dark' 
                      ? 'bg-gray-800/30 border border-gray-700/30' 
                      : 'bg-gray-50/30 border border-gray-200/30'
                  }`}
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Location
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Boston, MA (Open to Remote)
                    </p>
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  className={`flex items-center gap-4 p-4 rounded-2xl ${
                    theme === 'dark' 
                      ? 'bg-gray-800/30 border border-gray-700/30' 
                      : 'bg-gray-50/30 border border-gray-200/30'
                  }`}
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Availability
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      EST Time | Available Now
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Footer */}
              <motion.div 
                className={`mt-8 pt-6 border-t ${
                  theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'
                }`}
                variants={itemVariants}
              >
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Usually responds within 24 hours
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactDrawer;