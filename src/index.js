import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import fontawesomeIcons from './icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import store from 'reduxStore/store';

library.add(fontawesomeIcons);

reactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
