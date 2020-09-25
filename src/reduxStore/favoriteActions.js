import { SET_FAVORITES } from './favoriteReducer';
import store from './store';

export const setFavorites = (favorites) => {
  //   let updatedState = store;

  //   updatedState.push(favorites);

  return {
    type: SET_FAVORITES,
    payload: favorites,
  };
};
