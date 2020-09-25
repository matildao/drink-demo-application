export const FAVORITE = 'FAVORITE';
export const SET_FAVORITES = 'SET_FAVORITES';

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
