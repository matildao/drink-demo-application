export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const INCREMENT = 'INCREMENT';
export const STORE_FROM_CACHE = 'STORE_FROM_CACHE';

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

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS: {
      return { ...state, [action.category]: action.payload };
    }
    case STORE_FROM_CACHE: {
      return { ...state, allRecipes: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
