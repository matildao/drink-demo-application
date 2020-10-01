import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RandomPage.scss';
import { fetchAllIngredients } from 'actions/recipes';

function RandomPage() {
  const initialState = {
    ingredients: [],
    randomDrink: [],
    noDrink: true,
  };

  const [state, setState] = useState(initialState);

  const createRandomDrink = (ingredients) => {
    let newDrink = [];
    let amount = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < amount; i++) {
      const random = Math.floor(Math.random() * ingredients.length);
      const randomMeasure = Math.floor(Math.random() * 6) + 1;

      newDrink.push({ ingredient: ingredients[random], measure: randomMeasure });
    }

    setState({ ...state, randomDrink: newDrink });
  };

  useEffect(() => {
    if (state.ingredients.length === 0) {
      fetchAllIngredients().then((res) => {
        let drinks = [];
        res.drinks.forEach((ingredient) => {
          drinks.push(ingredient.strIngredient1);
        });

        setState({ ...state, ingredients: drinks });
      });
    }
  });

  return (
    <div className="right-content random-page">
      {
        <div className="random-drink-list-container">
          <div className="side-image"></div>
          <div className="random-drink-ingredient-list">
            <button
              className="blend-drink-button"
              onClick={() => createRandomDrink(state.ingredients)}
            >
              Blend Me A Drink
            </button>
            <div className="random-drink-container">
              {state.randomDrink.length === 0 && <div>Matildas drink illustration</div>}
              {state.randomDrink &&
                state.randomDrink.map((drink, index) => {
                  return (
                    <div className="ingredient-measure" key={index}>
                      <div>{drink.ingredient}</div>
                      <div>{drink.measure} cl</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default RandomPage;
