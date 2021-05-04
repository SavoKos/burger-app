import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeSlider } from '../../../store/actions/navigation';

import { NavLink } from 'react-router-dom';
import Logout from '../../Auth/Logout/Logout';

class NavLinks extends Component {
  state = { logout: false };

  authClickHandler = () => {
    if (this.props.isLogged) this.setState({ logout: true });
    this.props.onSliderClose();
  };

  render() {
    if (this.props.logout) return <Logout />;

    return (
      <div className="nav-links">
        <NavLink
          to="/"
          exact
          activeClassName="active"
          onClick={this.props.onSliderClose}
        >
          Builder
        </NavLink>
        <NavLink
          to="/orders"
          exact
          activeClassName="active"
          onClick={this.props.onSliderClose}
        >
          Orders
        </NavLink>
        <NavLink
          to="/auth"
          exact
          activeClassName="active"
          onClick={this.authClickHandler}
        >
          {this.props.isLogged ? 'Logout' : 'Login'}
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSliderClose: () => dispatch(closeSlider()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
