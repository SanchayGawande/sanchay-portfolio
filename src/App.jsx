import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CreativeThemeToggle from './components/CreativeThemeToggle';
import CursorTrail from './components/CursorTrail';
import ContactButton from './components/ContactButton';
import NavContactButton from './components/NavContactButton';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300 cursor-none">
        <CursorTrail />
        <CreativeThemeToggle />
        <NavContactButton />
        <ContactButton />
        <HeroSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;