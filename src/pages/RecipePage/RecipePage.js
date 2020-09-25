import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { drinkCategoriesWithIcons } from 'utils/categories';
import { useSelector } from 'react-redux';
import Card from 'components/Card/Card';
import 'style/pages.scss';

function RecipePage() {
  const allCategories = useSelector((store) => store.drinks);
  const firstCategory = useSelector((store) => store.drinks.ordinary_drink);

  const initialState = {
    displayCategory: [],
    active: 0,
  };

  const [state, setState] = useState(initialState);

  const sortByCategory = (index, drinkCategory, categories) => {
    for (const key in categories) {
      if (key === drinkCategory) {
        setState({
          ...state,
          displayCategory: categories[key],
          active: index,
        });
      }
    }
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
        </div>

        <div className="recipes-container">
          {firstCategory &&
            state.displayCategory.length === 0 &&
            firstCategory.map((drink) => {
              return <Card key={drink.strDrink} cardItem={drink} />;
            })}

          {firstCategory &&
            state.displayCategory.length !== 0 &&
            state.displayCategory.map((drink) => {
              return <Card key={drink.strDrink} cardItem={drink} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
