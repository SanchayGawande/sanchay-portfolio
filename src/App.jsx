import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import HeroSection from './components/HeroSection';
import About from './components/About';
import InteractiveSkills from './components/InteractiveSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlogRouter from './components/blog/BlogRouter';
import Navigation from './components/Navigation';
import CreativeThemeToggle from './components/CreativeThemeToggle';
import CursorTrail from './components/CursorTrail';
import ContactButton from './components/ContactButton';
import NavContactButton from './components/NavContactButton';

// Home page component
const HomePage = () => (
  <>
    <HeroSection />
    <About />
    <Experience />
    <Projects />
    <InteractiveSkills />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300 cursor-none">
          <CursorTrail />
          <Navigation />
          <CreativeThemeToggle />
          <NavContactButton />
          <ContactButton />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogRouter />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;