import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'style/pages.scss';
import { fetchDrinks, fetchDrinksByCategory } from 'actions/recipes';
import Card from 'components/Card/Card';

function RecipePage() {
  const initialState = {
    recipes: [],
    active: 0,
  };
  const [state, setState] = useState(initialState);
  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleMultiple = (change) => {
    setState(change);
  };

  const getRecipies = () => {
    fetchDrinks().then((res) => {
      handleChange('recipes', res.drinks);
    });
  };

  const getCategory = (index, category) => {
    fetchDrinksByCategory(category).then((res) => {
      handleMultiple({ recipes: res.drinks, active: index });
    });
  };

  useEffect(() => {
    if (state.recipes && state.recipes.length === 0) {
      getRecipies();
    }
  });

  console.log(state);

  const drinkCategories = [
    { category: 'ordinary_drink', icon: ['fas', 'glass-martini-alt'] },
    { category: 'cocktail', icon: ['fas', 'cocktail'] },
    { category: 'punch / party_drink', icon: ['fas', 'wine-glass-alt'] },
    { category: 'milk / Float / Shake', icon: ['fas', 'blender'] },
    { category: 'shot', icon: ['fas', 'glass-whiskey'] },
    { category: 'homemade liqueur', icon: ['fas', 'flask'] },
    { category: 'beer', icon: ['fas', 'beer'] },
    { category: 'coffee / tea', icon: ['fas', 'coffee'] },
    { category: 'cocoa', icon: ['fas', 'mug-hot'] },
  ];

  return (
    <div className="right-content recipe-page">
      <div className="content">
        <h1>Drink Recipes</h1>
        <div className="action-toolbar ">
          {drinkCategories.map(({ icon, category }, index) => (
            <button
              key={index}
              onClick={() => getCategory(index, category)}
              className={`food-category-button ${state.active === index ? 'active' : ''}`}
            >
              <FontAwesomeIcon icon={[icon[0], icon[1]]} size="2x" />
            </button>
          ))}
        </div>
        {state.recipes && (
          <div className="recipes-container">
            {state.recipes.map((drink) => {
              return <Card key={drink.strDrink} cardItem={drink} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipePage;
