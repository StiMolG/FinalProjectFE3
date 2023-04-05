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
  const [theme, setTheme] = useState(false);
  const [favs, setFavs] = useState(false);

  const toggleTheme = () => {
    console.log('theme:', theme)
    setTheme(!theme);
  };
  const toggleFavs = () => {
    console.log('favs:', favs)
    setFavs(!favs);
  };

  const providerValue = {store, setStore};

  return (
    <AppContext.Provider value={{providerValue, theme, toggleTheme, favs, toggleFavs}}>
      {children}
    </AppContext.Provider>
  )
}

