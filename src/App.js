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
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import './App.scss';

const routes = [
  { label: 'Home', link: '/', icon: ['fas', 'home'] },
  { label: 'Recipes', link: '/recipes', icon: ['fas', 'glass-martini-alt'] },
  { label: 'Favorites', link: '/favorites', icon: ['fas', 'heart'] },
  { label: 'Random', link: '/random', icon: ['fas', 'glass-cheers'] },
  { label: 'Bar', link: '/bar', icon: ['fas', 'glass-whiskey'] },
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
              <Route exact path="/favorites" component={FavoritesPage} />
              <Route exact path="/bars" component={RecipePage} />
              <Route exact path="/recipes/:drink" component={SingleDrinkPage} />
              <Route exact path="/lab" component={Lab} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
