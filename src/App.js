import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RecipePage from './pages/RecipePage/RecipePage';
import Lab from './pages/Lab';
import SingleDrinkPage from 'pages/SingleDrinkPage/SingleDrinkPage';

const routes = [
  { label: 'Home', link: '/', icon: ['fas', 'home'] },
  { label: 'Recipes', link: '/recipes', icon: ['fas', 'glass-martini-alt'] },
  { label: 'Favorites', link: '/test4', icon: ['fas', 'heart'] },
  { label: 'Random', link: '/test2', icon: ['fas', 'glass-cheers'] },
  { label: 'Bars', link: '/test1', icon: ['fas', 'glass-whiskey'] },
];

function App() {
  return (
    <div id="app">
      <Router>
        <div className="app-container">
          <NavigationBar navItems={routes} />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/recipes" component={RecipePage} />
              <Route exact path="/recipes" component={RecipePage} />
              <Route exact path="/recipes" component={RecipePage} />
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
