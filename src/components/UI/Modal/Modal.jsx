import React, { Component, Fragment } from 'react';

import './modal.scss';

import Overlay from '../Overlay/Overlay';

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.active !== this.props.active ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const modalClassName = ['modal'];
    if (this.props.active) modalClassName.push('active');

    return (
      <Fragment>
        <div className={modalClassName.join(' ')}>{this.props.children}</div>
        <Overlay active={this.props.active} clicked={this.props.closeModal} />
      </Fragment>
    );
  }
}

export default Modal;
