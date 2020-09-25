export const fetchDrinks = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

// export const fetchDrinksByCategory = (category) => {
//   return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('DISPATCHED fetchDrinkByCategory');
//       //   dispatch({ type: FETCH_RECIPES_SUCCESS, payload: data.drinks });
//       return data;
//     })
//     .catch((error) => console.log(error));
// };

export const fetchDrinksByCategory = (category) => {
  return (dispatch) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('DISPATCHED fetchDrinkByCategory');
        dispatch(fetchRecipesSuccess(data.drinks));
        return data;
      })
      .catch((error) => console.log(error));
  };
};

export const fetchSpecificDrink = (drinkId) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
