import React from 'react';

import { NavLink } from 'react-router-dom';

const NavLinks = props => {
  return (
    <div className="nav-links">
      <NavLink
        to="/"
        exact
        activeClassName="active"
        onClick={props.closeSlider}
      >
        Builder
      </NavLink>
      <NavLink
        to="orders"
        exact
        activeClassName="active"
        onClick={props.closeSlider}
      >
        Orders
      </NavLink>
      <NavLink
        to="/auth"
        exact
        activeClassName="active"
        onClick={props.closeSlider}
      >
        Login
      </NavLink>
    </div>
  );
};

export default NavLinks;
