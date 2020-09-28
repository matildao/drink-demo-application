import React, { useEffect, useState } from 'react';
import 'style/pages.scss';
import './SingleDrinkPage.scss';
import { fetchSpecificDrink } from 'actions/recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';

function SingleDrinkPage(props) {
  const parseIngredientsAndMeasurements = (drinkObject) => {
    let ingredients = [];

    Object.entries(drinkObject).forEach((item) => {
      if (item[0].startsWith('strIngredient') && item[1] !== null) {
        let ingredient = item[1];

        ingredients.push({ ingredient: ingredient });
      } else if (item[0].startsWith('strMeasure') && item[1] !== null) {
        let position = item[0].replace('strMeasure', '') - 1;
        ingredients[position].measure = item[1];
      }
    });

    return ingredients;
  };

  const initialState = {
    drink: {},
  };
  const [state, setState] = useState(initialState);
  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const getDrink = () => {
    fetchSpecificDrink(props.match.params.drink).then((res) => {
      handleChange('drink', res.drinks[0]);
    });
  };

  useEffect(() => {
    if (state.drink && Object.keys(state.drink).length === 0) {
      getDrink();
    }
  });

  const ingredientsAndMeasurements = parseIngredientsAndMeasurements(state.drink);

  const returnToRoute = () => {
    props.history.push('/recipes');
  };

  return (
    <div>
      <button onClick={() => returnToRoute()} className="back-icon">
        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} size="2x" />{' '}
      </button>

      <div className="single-drink-page">
        <div className="full-cover-drink-image"></div>
        <div className="drink-wrapper">
          <div className="drink-list">
            <h1>{state.drink.strDrink}</h1>

            <p className="alcoholic-tag">{state.drink.strAlcoholic}</p>
            <div className="drink-instructions">{state.drink.strInstructions}</div>
            <div className="ingredient-list">
              {ingredientsAndMeasurements.map(({ ingredient, measure }) => {
                return (
                  <div className="ingredient-list-row" key={ingredient}>
                    <b>{ingredient}</b>
                    <div>{measure}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="drink-information">
            <img className="drink-image" src={state.drink.strDrinkThumb}></img>
          </div>
        </div>
        <div>
          <div className="icon-label-container">
            <FontAwesomeIcon icon={['fas', 'glass-whiskey']} size="2x" />
            <p className="icon-label">{state.drink.strGlass}</p>
          </div>

          {state.drink.strIBA !== null && (
            <div className="icon-label-container">
              <FontAwesomeIcon icon={['fas', 'graduation-cap']} size="2x" />
              <p className="icon-label">IBA</p>
            </div>
          )}
        </div>
        <div className="drink-tag-wrapper">
          {state.drink.strTags &&
            state.drink.strTags.split(',').map((tag) => {
              return <div className="drink-tag">{tag}</div>;
            })}
        </div>
      </div>
    </div>
  );
}

export default SingleDrinkPage;
