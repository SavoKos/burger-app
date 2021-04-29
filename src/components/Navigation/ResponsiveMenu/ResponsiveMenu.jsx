import React from 'react';

import Logo from '../Logo/Logo';
import HamburgerMenuSlider from './HamburgerMenuSlider/HamburgerMenuSlider';

import './responsiveMenu.scss';

const ResponsiveMenu = props => {
  return (
    <div className="hamburger-menu">
      <Logo />
      <i className="fas fa-bars fa-lg" onClick={props.openSlider}></i>
      <HamburgerMenuSlider
        closeSlider={props.closeSlider}
        active={props.active}
      />
    </div>
  );
};

export default ResponsiveMenu;
