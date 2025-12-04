// client/src/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    primary: '#FFC72C', 
    primaryText: '#101010', 
    background: '#F7F7F7', 
    cardBackground: '#FFFFFF', 
    text: '#333333', 
    header: '#FFFFFF', 
    secondary: '#4A4A4A',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  dark: {
    primary: '#FFC72C', 
    primaryText: '#101010', 
    background: '#1D1D1D', 
    cardBackground: '#2A2A2A', 
    text: '#EFEFEF', 
    header: '#2A2A2A', 
    secondary: '#A0A0A0',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default to Dark Theme as per the image
  
  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themes[theme];
  
  const contextValue = { 
    theme, 
    toggleTheme, 
    colors: currentTheme 
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);