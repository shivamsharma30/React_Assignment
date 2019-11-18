import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const navBar = props => {
  const { navigationLinks } = props;
  return (
    <div className="navBar">
      {navigationLinks.map((nav, index) => {
        return (
          <Link to={nav.navLink} key={index} className="navigationLink">
            {nav.navName}
          </Link>
        );
      })}
    </div>
  );
};

export default navBar;
