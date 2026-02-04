import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, CloudIcon, StarIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

const CreativeThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === 'dark';

  return (
    <motion.div
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        delay: 0.5, 
        type: 'spring', 
        stiffness: 300, 
        damping: 25,
        duration: 0.8
      }}
    >
      {/* Main Orb Container */}
      <motion.button
        onClick={toggleTheme}
        className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Sky Background */}
        <motion.div
          className={`absolute inset-0 rounded-full overflow-hidden transition-all duration-700 ${
            isDark 
              ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900' 
              : 'bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200'
          }`}
          animate={{
            background: isDark 
              ? 'linear-gradient(to bottom, #312e81, #581c87, #111827)' 
              : 'linear-gradient(to bottom, #60a5fa, #93c5fd, #bfdbfe)'
          }}
          transition={{ duration: 0.7 }}
        />

        {/* Clouds */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-2 rounded-full ${
                isDark ? 'bg-gray-600/40' : 'bg-white/60'
              }`}
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                x: [0, 10, 0],
                opacity: isDark ? [0.4, 0.1, 0.4] : [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Stars (Night Mode) */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sun/Moon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: isDark ? 180 : 0,
            y: isDark ? 8 : -8,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                className="relative"
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <MoonIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200" />
                {/* Moon glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gray-200/30 blur-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                className="relative"
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 90 }}
                transition={{ duration: 0.5 }}
              >
                <SunIcon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                {/* Sun rays */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-3 bg-yellow-400/60 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: '50% 16px',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                      }}
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>
                {/* Sun glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-400/40 blur-md"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Horizon Line */}
        <motion.div
          className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-0.5 rounded-full transition-all duration-700 ${
            isDark ? 'bg-gray-600' : 'bg-blue-500/30'
          }`}
          animate={{
            y: isDark ? '60%' : '40%',
            opacity: isDark ? 0.6 : 0.8,
          }}
          transition={{ duration: 0.7 }}
        />

        {/* Outer Ring */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 transition-all duration-700 ${
            isDark 
              ? 'border-purple-400/30' 
              : 'border-yellow-400/30'
          }`}
          animate={{
            borderColor: isDark ? 'rgba(196, 181, 253, 0.3)' : 'rgba(251, 191, 36, 0.3)',
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Interaction Ripples */}
        <motion.div
          className={`absolute inset-0 rounded-full border-2 ${
            isDark ? 'border-purple-400/50' : 'border-yellow-400/50'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
              isDark 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-lg backdrop-blur-sm`}
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                {isDark ? (
                  <SunIcon className="w-4 h-4 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-4 h-4 text-indigo-400" />
                )}
              </motion.div>
              Switch to {isDark ? 'Light' : 'Dark'} Mode
            </div>
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent ${
              isDark ? 'border-b-gray-800' : 'border-b-white'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-purple-400/60' : 'bg-yellow-400/60'
            }`}
            style={{
              left: `${Math.random() * 200 - 50}%`,
              top: `${Math.random() * 200 - 50}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CreativeThemeToggle;