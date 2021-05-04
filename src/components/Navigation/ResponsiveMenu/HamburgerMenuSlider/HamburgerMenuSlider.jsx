import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import NavLinks from '../../NavLinks/NavLinks';
import Logo from '../../Logo/Logo';
import Overlay from '../../../UI/Overlay/Overlay';

import './hamburgerMenuSlider.scss';

import { closeSlider, openSlider } from '../../../../store/actions/navigation';

const HamburgerMenuSlider = props => {
  let sliderClasses = ['slider'];
  if (props.sliderOpened) sliderClasses.push('slider-active');
  return (
    <Fragment>
      <Overlay active={props.sliderOpened} clicked={props.onSliderClose} />
      <div className={sliderClasses.join(' ')}>
        <i className="fas fa-times fa-2x" onClick={props.onSliderClose}></i>
        <Logo closeSlider={props.onSliderClose} />
        <NavLinks closeSlider={props.onSliderClose} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    sliderOpened: state.navigation.sliderOpened,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSliderClose: () => dispatch(closeSlider()),
    onSliderOpen: () => dispatch(openSlider()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HamburgerMenuSlider);
