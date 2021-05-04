import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { openSlider } from '../../../store/actions/navigation';

import Logo from '../Logo/Logo';
import HamburgerMenuSlider from './HamburgerMenuSlider/HamburgerMenuSlider';

import './responsiveMenu.scss';

const ResponsiveMenu = props => {
  const history = useHistory();

  const redirectToAuthHandler = () => {
    history.push('/auth');
  };

  let authIconClassName = props.token
    ? 'fas fa-sign-out-alt fa-lg'
    : 'fas fa-sign-in-alt fa-lg';

  return (
    <div className="hamburger-menu">
      <Logo />
      <i className="fas fa-bars fa-lg" onClick={props.onSliderOpen}></i>
      <i className={authIconClassName} onClick={redirectToAuthHandler}></i>
      <HamburgerMenuSlider />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSliderOpen: () => dispatch(openSlider()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveMenu);
