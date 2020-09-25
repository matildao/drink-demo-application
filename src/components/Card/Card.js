import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Card.scss';
import { setFavorites } from 'reduxStore/favoriteActions';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.favorites);

  const favoriteOrUnfavoriteDrink = (drinkId) => {
    let alreadyFavorited = false;
    let copyStateFavorites = store.favorites !== undefined ? store.favorites : [];

    copyStateFavorites.forEach((id) => {
      if (id === drinkId) {
        alreadyFavorited = true;
        copyStateFavorites.splice(store.favorites.indexOf(id), 1);
      }
    });

    if (!alreadyFavorited) {
      copyStateFavorites.push(drinkId);
    }

    dispatch(setFavorites(copyStateFavorites));
  };

  const isFavorited = (id) => {
    if (store.favorites !== undefined && store.favorites.includes(id)) {
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
              <FontAwesomeIcon icon={['far', 'star']} size="2x" />
            </Link>
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
