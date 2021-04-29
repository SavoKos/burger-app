import React, { Fragment, Component } from 'react';

import Navigation from '../Navigation/Navigation';
import ResponsiveMenu from '../Navigation/ResponsiveMenu/ResponsiveMenu';

import './content.scss';

class Layout extends Component {
  state = {
    sliderOpened: false,
  };

  closeSlider = () => {
    this.setState({ sliderOpened: false });
  };

  openSlider = () => {
    this.setState({ sliderOpened: true });
  };

  sliderHandler = () => {};

  render() {
    return (
      <Fragment>
        <Navigation />
        <ResponsiveMenu
          openSlider={this.openSlider}
          closeSlider={this.closeSlider}
          active={this.state.sliderOpened}
        />
        <main className="content">{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
