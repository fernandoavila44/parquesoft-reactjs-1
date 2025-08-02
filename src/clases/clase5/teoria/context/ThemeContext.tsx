// ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';

type Theme = 'light' | 'dark'; //union types

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const initThemeContext: ThemeContextType = {
  theme: 'dark',
  toggleTheme: () => { }
}

export const ThemeContext = createContext<ThemeContextType>(initThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //Children es una palabra reservada de react y hace referencia a los componentes que van a ser envueltos por el componente
  //padre
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevValue) => prevValue === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};