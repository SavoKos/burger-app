import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { closeSlider, openSlider } from '../../store/actions/navigation';

import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from '../Navigation/ResponsiveMenu/ResponsiveMenu';

import './content.scss';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <ResponsiveMenu />
        <main className="content">{this.props.children}</main>
      </Fragment>
    );
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
