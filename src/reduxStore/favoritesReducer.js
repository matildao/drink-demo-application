export const SET_FAVORITES = 'SET_FAVORITES';
export const SET_TESTED = 'SET_TESTED';

export const setFavorites = (favorites) => {
  return {
    type: SET_FAVORITES,
    payload: favorites,
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
