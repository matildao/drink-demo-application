import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.scss';

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <p className="card-title">{props.cardItem.strDrink}</p>
      <img className="card-image" src={props.cardItem.strDrinkThumb}></img>
      <div className="card-content">
        <div className="card-actions">
          <button className="like-button">
            <FontAwesomeIcon icon={['far', 'heart']} size="2x" />
          </button>
          <button className="like-button ">
            <FontAwesomeIcon icon={['fas', 'chevron-right']} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
