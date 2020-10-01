import React from 'react';
import Card from 'components/Card/Card';
import HistoryBar from 'components/HistoryBar/HistoryBar';

import SingleDrinkPage from 'pages/SingleDrinkPage/SingleDrinkPage';
import 'style/pages.scss';

function Lab() {
  const tempCardItem = {
    id: 235567,
    strDrinkThumb: 'https://spoonacular.com/recipeImages/18112-312x231.jpg',
    strDrink: 'Green Peas',
  };

  const temp = {
    idDrink: '11007',
    strDrink: 'Margarita',
    strDrinkAlternate: null,
    strDrinkES: null,
    strDrinkDE: null,
    strDrinkFR: null,
    'strDrinkZH-HANS': null,
    'strDrinkZH-HANT': null,
    strTags: 'IBA,ContemporaryClassic',
    strVideo: null,
    strCategory: 'Ordinary Drink',
    strIBA: 'Contemporary Classics',
    strAlcoholic: 'Alcoholic',
    strGlass: 'Cocktail glass',
    strInstructions:
      'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
    strInstructionsES: null,
    strInstructionsDE:
      'Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.',
    strInstructionsFR: null,
    'strInstructionsZH-HANS': null,
    'strInstructionsZH-HANT': null,
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    strIngredient1: 'Tequila',
    strIngredient2: 'Triple sec',
    strIngredient3: 'Lime juice',
    strIngredient4: 'Salt',
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '1 1/2 oz ',
    strMeasure2: '1/2 oz ',
    strMeasure3: '1 oz ',
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strCreativeCommonsConfirmed: 'Yes',
    dateModified: '2015-08-18 14:42:59',
  };

  let historyBarList = [
    {
      strDrink: 'Juice',
      drinkImage: 'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
    },
    {
      strDrink: 'Juice',
      drinkImage: 'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
    },
  ];

  return (
    <div className="right-content lab">
      <h1>Lab Page</h1>
      <Card cardItem={tempCardItem} />
      {/* <SingleDrinkPage drink={temp} /> */}
      <HistoryBar historyBarList={historyBarList} />
    </div>
  );
}

export default Lab;
