import { createContext, useReducer, useMemo } from 'react';
import dentistReducer from '../hooks/dentistReducer';

export const initialState = {
  isFetching: false,
  stateDark: false,
  data: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};
export const AppContext = createContext(initialState);

export function AppProvider({children}) {
  
  const [state, dispatch] = useReducer(dentistReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

