import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  const favoriteDrink = (drinkId) => {
    let savedFavorites = window.localStorage.getItem('favorites')
      ? JSON.parse(window.localStorage.getItem('favorites'))
      : null;

    //if exists in localstorage then fetch it and parse -> add -> put back
    //else create storage/name and add object
    if (!savedFavorites) {
    } else {
      savedFavorites.push(drinkId);
      window.localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }
  };

  let test = false;

  const checkFavorite = (drinkId) => {
    let favorites = window.localStorage.getItem('favorites')
      ? JSON.parse(window.localStorage.getItem('favorites'))
      : null;

    console.log('fav', favorites);

    if (favorites.include(drinkId)) {
      return (test = true);
    }
    return test;
  };

  return (
    <div className="card-wrapper">
      <p className="card-title">{props.cardItem.strDrink}</p>
      <img className="card-image" src={props.cardItem.strDrinkThumb}></img>
      <div className="card-content">
        <div className="card-actions">
          <button className="like-button">
            {test ? (
              <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
            ) : (
              <FontAwesomeIcon icon={['far', 'heart']} size="2x" />
            )}
          </button>
          <button className="like-button">
            <Link to={`/recipes/${props.cardItem.idDrink}`}>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} size="2x" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
