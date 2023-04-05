import { useContext } from 'react';
import dentistApi from '../api/dentistApi';
import { AppContext } from '../context/AppContext';

export const useAppContext = () => {
  const context = useContext(AppContext);

  console.log('context:', context);
  if (!context) {
    throw new Error(`useAppContext debe ser usado con ContextGlobal`);
  }

  const [state, dispatch] = context;

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  const fetchData = async () => {
    try {
      
      dispatch({type: 'START_FETCH'});
      const { data } = await dentistApi.get();
      dispatch({ type: 'ADD_DATA', payload: data });
      
    } catch (error) {
      
      console.log(error)
      throw new Error('No pudimos cargar la información. Intenta luego nuevamente.')

    }finally {
      
      dispatch({type: 'FINISH_FETCH'})
      
    }
   
  };

  const addFavorite = (data) => {
    dispatch({ type: 'ADD_FAVORITE', payload: data });
  };

  const removeFavorite = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return {
    addFavorite,
    changeTheme,
    dispatch,
    fetchData,
    removeFavorite,
    state,
  };
};