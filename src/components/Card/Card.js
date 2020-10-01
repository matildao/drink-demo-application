import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setFavorites } from 'reduxStore/favoritesReducer';
import { setTested } from 'reduxStore/testedReducer';
import { useDispatch } from 'react-redux';
import './Card.scss';

const Card = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const setTestedOrFavorites = (drinkId, type) => {
    let exists = false;
    let storeCopy = store[type][type] !== undefined ? store[type][type] : [];

    storeCopy.forEach((id) => {
      if (id === drinkId) {
        exists = true;
        storeCopy.splice(store[type][type].indexOf(id), 1);
      }
    });

    if (!exists) {
      storeCopy.push(drinkId);
    }

    if (type === 'tested') {
      dispatch(setTested(storeCopy));
    } else if (type === 'favorites') {
      dispatch(setFavorites(storeCopy));
    }
  };

  const checkIfFavoritedOrTested = (id, type) => {
    if (store[type][type] !== undefined && store[type][type].includes(id)) {
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
            onClick={() => setTestedOrFavorites(props.cardItem.idDrink, 'favorites')}
          >
            {checkIfFavoritedOrTested(props.cardItem.idDrink, 'favorites') ? (
              <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
            ) : (
              <FontAwesomeIcon icon={['far', 'heart']} size="2x" />
            )}
          </button>

          <button
            className="like-button"
            onClick={() => setTestedOrFavorites(props.cardItem.idDrink, 'tested')}
          >
            {checkIfFavoritedOrTested(props.cardItem.idDrink, 'tested') ? (
              <FontAwesomeIcon className="testedIcon" icon={['fas', 'star']} size="2x" />
            ) : (
              <FontAwesomeIcon className="testedIcon" icon={['far', 'star']} size="2x" />
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
