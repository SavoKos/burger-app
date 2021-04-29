import React, { Fragment } from 'react';

import NavLinks from '../../NavLinks/NavLinks';
import Logo from '../../Logo/Logo';
import Overlay from '../../../UI/Overlay/Overlay';

import './hamburgerMenuSlider.scss';

const HamburgerMenuSlider = props => {
  let sliderClasses = ['slider'];
  if (props.active) sliderClasses.push('slider-active');
  return (
    <Fragment>
      <Overlay active={props.active} clicked={props.closeSlider} />
      <div className={sliderClasses.join(' ')}>
        <i className="fas fa-times fa-2x" onClick={props.closeSlider}></i>
        <Logo closeSlider={props.closeSlider} />
        <NavLinks closeSlider={props.closeSlider} />
      </div>
    </Fragment>
  );
};

export default HamburgerMenuSlider;
