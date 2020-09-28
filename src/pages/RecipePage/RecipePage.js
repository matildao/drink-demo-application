import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { drinkCategoriesWithIcons } from 'utils/categories';
import { useSelector } from 'react-redux';
import Card from 'components/Card/Card';
import 'style/pages.scss';
import './RecipePage.scss';

function RecipePage() {
  const allCategories = useSelector((store) => store.drinks);
  const firstCategory = useSelector((store) => store.drinks.ordinary_drink);
  const favoriteId = useSelector((store) => store.favorites.favorites);

  const initialState = {
    displayCategory: [],
    favorites: false,
    active: 0,
  };

  const [state, setState] = useState(initialState);

  const sortByCategory = (index, drinkCategory, categories) => {
    for (const key in categories) {
      if (key === drinkCategory) {
        setState({
          ...state,
          displayCategory: categories[key],
          favorites: false,
          active: index,
        });
      }
    }
  };

  const sortByFavorites = (index, recipes, favorites) => {
    let favoriteDrinkItems = [];

    if (favorites !== undefined) {
      let categories = Object.values(recipes);

      for (const key in categories) {
        categories[key].forEach((drink) => {
          if (favorites.includes(drink.idDrink)) {
            favoriteDrinkItems.push(drink);
          }
        });
      }
    }
    setState({
      ...state,
      displayCategory: favoriteDrinkItems,
      favorites: true,
      active: index,
    });
  };

  return (
    <div className="right-content recipe-page">
      <div className="content">
        <h1>Drink Recipes</h1>
        <div className="action-toolbar ">
          {drinkCategoriesWithIcons.map(({ icon, category }, index) => (
            <button
              key={index}
              onClick={() => sortByCategory(index, category, allCategories)}
              className={`food-category-button ${state.active === index ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={[icon[0], icon[1]]} size="2x" />
            </button>
          ))}
          <button
            key="favorites"
            onClick={() =>
              sortByFavorites(drinkCategoriesWithIcons.length + 1, allCategories, favoriteId)
            }
            className={`food-category-button favorite-category-button ${
              state.active === drinkCategoriesWithIcons.length + 1 ? 'active' : ''
            }`}
          >
            <FontAwesomeIcon icon={('fas', 'heart')} size="2x" />
          </button>
        </div>

        <div className="recipes-container">
          {firstCategory &&
            state.displayCategory.length === 0 &&
            !state.favorites &&
            firstCategory.map((drink) => {
              return <Card key={drink.strDrink} cardItem={drink} />;
            })}

          {firstCategory &&
            state.displayCategory.length !== 0 &&
            state.displayCategory.map((drink) => {
              return <Card key={drink.strDrink} cardItem={drink} />;
            })}
          {firstCategory && state.displayCategory.length === 0 && state.favorites && (
            <div className="no-favorites">No Favorites</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
