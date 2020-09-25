import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer.js';
import favoriteReducer from './favoriteReducer.js';

const rootReducer = combineReducers({
  drinks: recipeReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
