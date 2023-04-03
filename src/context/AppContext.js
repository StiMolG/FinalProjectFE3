/**
 * Dependencies
 */
import { createContext, useState } from 'react';

/**
 * Context
 */
export const AppContext = createContext();

/**
 * Provider Wrapper
 */
export function AppProvider({children}) {
  const [store, setStore] = useState({
    user: '',
    password: '',
  });
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeConfig = {
    light: {
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
    },
    dark: {
      backgroundColor: '#000000',
      textColor: '#FFFFFF',
    },
  };

  const providerValue = {store, setStore};

  return (
    <AppContext.Provider value={{providerValue, theme, themeConfig, toggleTheme}}>
      {children}
    </AppContext.Provider>
  )
}

