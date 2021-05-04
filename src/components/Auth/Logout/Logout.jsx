import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../../store/actions/auth';
import Modal from '../../UI/Modal/Modal';

class Logout extends Component {
  state = { modalActive: true, cancelLogout: false };

  closeModalHandler = () => {
    this.setState({ modalActive: false, cancelLogout: true });
  };

  render() {
    if (this.state.cancelLogout) return <Redirect to="/" />;

    return (
      <Modal
        active={this.state.modalActive}
        closeModal={this.closeModalHandler}
      >
        <h1>Are you sure you want to log out?</h1>
        <button className="cancel" onClick={this.closeModalHandler}>
          Cancel
        </button>
        <button className="continue" onClick={this.props.onLogout}>
          Logout
        </button>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
