import { fetchRecipes } from './recipeReducer';

export const fetchCategory = (category) => {
  return (dispatch) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(fetchRecipes(category, data.drinks));
      })
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };
};
