import { FETCH_RECIPES_SUCCESS, STORE_FROM_CACHE } from './recipeReducer';

export const fetchRecipes = (drinkCategory, recipes) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes,
    category: drinkCategory,
  };
};

export const storeFromCache = (recipes) => {
  return {
    type: STORE_FROM_CACHE,
    payload: recipes,
  };
};
