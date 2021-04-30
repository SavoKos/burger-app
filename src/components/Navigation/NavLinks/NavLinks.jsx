import React from 'react';
import { connect } from 'react-redux';

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
        {props.isLogged ? 'Logout' : 'Login'}
      </NavLink>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged,
  };
};

export default connect(mapStateToProps)(NavLinks);
