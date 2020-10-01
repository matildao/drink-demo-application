import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategory } from 'reduxStore';
import { categoryLabels } from 'utils/categories';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';
import Lab from './pages/Lab';
import SingleDrinkPage from 'pages/SingleDrinkPage/SingleDrinkPage';
import './App.scss';
import RandomPage from './pages/RandomPage/RandomPage';
import SuggestPage from './pages/SuggestPage/SuggestPage';

const routes = [
  { label: 'Home', link: '/', icon: ['fas', 'home'] },
  { label: 'Recipes', link: '/recipes', icon: ['fas', 'glass-martini-alt'] },
  { label: 'Blend Me A Drink', link: '/random-drink', icon: ['fas', 'glass-cheers'] },
  { label: 'Date A Drink', link: '/suggest-me', icon: ['fas', 'glass-whiskey'] },
];

function App() {
  const dispatch = useDispatch();

  const getEveryDrinkCategoryAndStore = (categories) => {
    categories.forEach((category) => {
      dispatch(fetchCategory(category));
    });
  };

  const checkStorageExistsElseFetch = () => {
    let existingStorage = localStorage.getItem('state')
      ? JSON.parse(localStorage.getItem('state')).drinks
      : null;

    if (!existingStorage) {
      console.log('Fetched and store to cache');

      getEveryDrinkCategoryAndStore(categoryLabels);
    }
  };

  checkStorageExistsElseFetch();

  return (
    <div id="app">
      <Router>
        <div className="app-container">
          <NavigationBar navItems={routes} />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/recipes" component={RecipePage} />
              <Route exact path="/random-drink" component={RandomPage} />
              <Route exact path="/recipes/:drink" component={SingleDrinkPage} />
              <Route exact path="/suggest-me" component={SuggestPage} />
              <Route exact path="/lab" component={Lab} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
