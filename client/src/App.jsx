// client/src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import CodeReviewTool from './components/CodeReviewTool';
import PricingPage from './components/PricingPage';

import BlogPage from './components/BlogPage';
import './App.css'; 

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const { colors, theme } = useTheme();

  // Apply CSS variables to the root element for theme switching
  React.useEffect(() => {
    const root = document.documentElement;
    for (const key in colors) {
      root.style.setProperty(`--color-${key}`, colors[key]);
    }
    root.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [colors, theme]);

  return (
    <div className="app-container">
      <Header setCurrentPage={setCurrentPage} />
      
      <main>
        {/* Conditional rendering based on the currentPage state */}
        {currentPage === 'home' && <LandingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'review' && <CodeReviewTool />}
        {currentPage === 'pricing' && <PricingPage />}
        {currentPage === 'blog' && <BlogPage />}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;