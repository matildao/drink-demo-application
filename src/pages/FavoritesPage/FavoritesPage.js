import React, { useEffect, useState } from 'react';
import './FavoritesPage.scss';
import { fetchSpecificDrink } from 'actions/recipes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'components/Card/Card';

function FavoritesPage() {
  return (
    <div className="right-content favorites-page">
      <h1>Favorites</h1>
    </div>
  );
}

export default FavoritesPage;
