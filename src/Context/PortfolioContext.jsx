import React, { createContext, useState, useEffect, useMemo } from 'react';


export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const themes = useMemo(() => ['dark', 'light', 'blue', 'green', 'red', 'purple', 'yellow'], []);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && themes.includes(storedTheme)) {
      setTheme(storedTheme);
    }
  }, [themes]);

  useEffect(() => {
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
  }, [theme, themes]);

  return (
    <PortfolioContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </PortfolioContext.Provider>
  );
};
