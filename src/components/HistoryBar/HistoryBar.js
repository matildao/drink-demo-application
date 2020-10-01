import React, { useEffect, useState } from 'react';
import './HistoryBar.scss';

function HistoryBar(props) {
  const redirectToSinglePage = (drinkId) => {
    props.history.push(`/recipes/${drinkId}`);
  };

  return (
    <div className="history-bar">
      {props.historyBarList.map((drink, index) => {
        return (
          <div
            onClick={() => redirectToSinglePage(drink.drinkId)}
            key={index}
            className="history-bar-item"
          >
            <h3>{drink.strDrink}</h3>
            <img className="history-bar-image" src={drink.drinkImage}></img>
          </div>
        );
      })}
    </div>
  );
}

export default HistoryBar;
