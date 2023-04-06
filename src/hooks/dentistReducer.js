const dentistReducer = (state, action) => {
    switch (action.type) {

      case 'CHANGE_THEME': {
        return {
          ...state,
          stateDark: !state.stateDark,
        };
      }
  
      case 'ADD_DATA': {
        return {
          ...state,
          data: action.payload,
        };
      }
  
      case 'ADD_FAVORITE': {
        console.log("Entro", state);
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }

      case 'START_FETCH': {
        return {
          ...state,
          isFetching: true
        }
      }
      
      case 'FINISH_FETCH': {
        return {
          ...state,
          isFetching: false
        }
      }
  
      case 'REMOVE_FAVORITE': {
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav.id !== action.payload),
        };
      }
  
      default: {
        throw new Error(`La accion de tipo ${action.type} no existe.`);
      }
    }
  };
  export default dentistReducer;