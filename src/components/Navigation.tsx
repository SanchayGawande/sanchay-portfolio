import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  HomeIcon, 
  BookOpenIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
    { path: '/blog', label: 'Blog', icon: <BookOpenIcon className="w-5 h-5" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const homeNavItems = [
    { id: 'about', label: 'About', icon: <UserIcon className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <BriefcaseIcon className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <CpuChipIcon className="w-5 h-5" /> }
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-30 ${
      theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
    } backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border ${
      theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'
    }`}>
      <div className="flex items-center gap-2">
        {/* Main Navigation */}
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
              location.pathname === item.path
                ? 'bg-blue-600 text-white shadow-lg'
                : `${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
            }`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}

        {/* Section Navigation (only on home page) */}
        {location.pathname === '/' && (
          <>
            <div className={`w-px h-6 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`} />
            {homeNavItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;