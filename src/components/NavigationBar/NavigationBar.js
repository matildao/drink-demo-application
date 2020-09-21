import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationBar.scss';

function NavigationBar({ navItems }) {
  function checkPath(path) {
    if (location.pathname === path) {
      return 'selected';
    }
    return null;
  }

  return (
    <div className="nav-list">
      <img className="nav-image" src={require('../../images/orange_drinks.jpg')} />

      {navItems.map(({ label, link, icon }) => (
        <NavLink
          key={label}
          to={link}
          className="nav-item"
          isActive={() => checkPath(link)}
          activeClassName="selected"
        >
          <FontAwesomeIcon icon={[icon[0], icon[1]]} size="2x" />
          <p>{label}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationBar;
