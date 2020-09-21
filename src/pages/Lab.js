import React from 'react';
import 'style/pages.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'components/Card/Card';
import SingleDrinkPage from 'pages/SingleDrinkPage/SingleDrinkPage';

function Lab() {
  const tempCardItem = {
    id: 235567,
    strDrinkThumb: 'https://spoonacular.com/recipeImages/18112-312x231.jpg',
    strDrink: 'Green Peas',
  };

  return (
    <div className="right-content lab">
      <h1>Lab Page</h1>
      <Card cardItem={tempCardItem} />
      <SingleDrinkPage />
    </div>
  );
}

export default Lab;
