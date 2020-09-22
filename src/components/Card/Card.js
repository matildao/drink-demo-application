import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  const [favorites, setFavorites] = useState([]);

  const favoriteOrUnfavoriteDrink = (drinkId) => {
    let savedFavorites = localStorage.getItem('favorites')
      ? JSON.parse(localStorage.getItem('favorites'))
      : favorites;
    let alreadyFavorited = false;

    savedFavorites.forEach((id) => {
      if (id === drinkId) {
        alreadyFavorited = true;
        savedFavorites.splice(favorites.indexOf(id), 1);
      }
    });

    if (!alreadyFavorited) {
      savedFavorites.push(drinkId);
    }

    setFavorites([...savedFavorites]);
    localStorage.setItem('favorites', JSON.stringify(savedFavorites));
  };

  const isFavorited = (id) => {
    let favorited = JSON.parse(window.localStorage.getItem('favorites')) || null;

    if (favorited && favorited.includes(id)) {
      return true;
    }
    return false;
  };

  return (
    <div className="card-wrapper">
      <p className="card-title">{props.cardItem.strDrink}</p>
      <img className="card-image" src={props.cardItem.strDrinkThumb}></img>
      <div className="card-content">
        <div className="card-actions">
          <button
            className="like-button"
            onClick={() => favoriteOrUnfavoriteDrink(props.cardItem.idDrink)}
          >
            {isFavorited(props.cardItem.idDrink) ? (
              <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
            ) : (
              <FontAwesomeIcon icon={['far', 'heart']} size="2x" />
            )}
          </button>
          <button className="like-button">
            <Link className="single-recipe-link" to={`/recipes/${props.cardItem.idDrink}`}>
              <FontAwesomeIcon icon={['fas', 'book-open']} size="2x" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
