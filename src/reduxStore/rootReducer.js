import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer.js';
import favoriteReducer from './favoritesReducer.js';
import testedReducer from './testedReducer.js';

const rootReducer = combineReducers({
  drinks: recipeReducer,
  favorites: favoriteReducer,
  tested: testedReducer,
});

export default rootReducer;
