import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import './SuggestPage.scss';
import { fetchRandomDrink } from 'actions/recipes';
import HistoryBar from 'components/HistoryBar/HistoryBar';

function SuggestPage(props) {
  const [drink, setDrink] = useState({});
  const [history, setHistory] = useState([]);

  const likeDrink = (drink) => {
    let addToHistory = history;

    addToHistory.push(drink);
    setHistory(addToHistory);
    fetchRandomDrink().then((res) => {
      setDrink(res.drinks[0]);
    });
  };

  const dislikeDrink = () => {
    fetchRandomDrink().then((res) => {
      setDrink(res.drinks[0]);
    });
  };

  useEffect(() => {
    if (Object.keys(drink).length === 0) {
      fetchRandomDrink().then((res) => {
        setDrink(res.drinks[0]);
      });
    }
  });

  return (
    <div className="right-content suggest-background">
      <div className="suggest-container-wrapper">
        <h1 className="suggest-title">{drink.strDrink}</h1>

        <div className="suggest-container-content">
          <div className="suggest-drink-container">
            <div className="image-description-wrapper">
              <img className="suggest-drink-card-image" src={drink.strDrinkThumb}></img>
              <div className="">
                <h4>{drink.strCategory}</h4>
                <div>{drink.strInstructions}</div>
              </div>
            </div>
            <div className="suggest-drink-action-bar">
              <button
                className="suggest-drink-button"
                onClick={() =>
                  likeDrink({
                    strDrink: drink.strDrink,
                    drinkId: drink.idDrink,
                    drinkImage: drink.strDrinkThumb,
                  })
                }
              >
                <FontAwesomeIcon color="blue" icon={('fas', 'heart')} size="3x" />
              </button>
              <button className="suggest-drink-button" onClick={() => dislikeDrink()}>
                <FontAwesomeIcon color="red" icon={('fas', 'times')} size="3x" />
              </button>
            </div>
          </div>
          <HistoryBar historyBarList={history} history={props.history} />
        </div>
      </div>
      {/* <div className="suggest-drink-container">
        <div className="suggest-drink-card">
          <h1>{drink.strDrink}</h1>

          <div className="image-description-wrapper">
            <img className="suggest-drink-card-image" src={drink.strDrinkThumb}></img>
            <div className="suggest-card-description">
              <h4>{drink.strCategory}</h4>
              <div>{drink.strInstructions}</div>
            </div>
          </div>
          <div className="suggest-drink-action-bar">
            <button
              className="suggest-drink-button"
              onClick={() =>
                likeDrink({
                  strDrink: drink.strDrink,
                  drinkId: drink.idDrink,
                  drinkImage: drink.strDrinkThumb,
                })
              }
            >
              <FontAwesomeIcon color="blue" icon={('fas', 'heart')} size="3x" />
            </button>
            <button className="suggest-drink-button" onClick={() => dislikeDrink()}>
              <FontAwesomeIcon color="red" icon={('fas', 'times')} size="3x" />
            </button>
          </div>
        </div>
        <HistoryBar historyBarList={history} history={props.history} />
      </div> */}
    </div>
  );
}

export default SuggestPage;
