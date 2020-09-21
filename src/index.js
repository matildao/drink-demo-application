import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import fontawesomeIcons from './icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fontawesomeIcons);

reactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
