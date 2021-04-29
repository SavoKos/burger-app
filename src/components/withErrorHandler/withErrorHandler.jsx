import React, { Component, Fragment } from 'react';

import Modal from '../UI/Modal/Modal';

const withErrorHandler = (WrappedContent, axios) => {
  return class extends Component {
    state = { error: null };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        res => res,
        error => this.setState({ error: error })
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    closeModal = () => {
      this.setState({ error: null });
    };

    render() {
      const buttonStyle = {
        margin: '30px auto 0 auto',
        display: 'block',
        background: 'transparent',
        border: '1px solid #fff',
        padding: '10px 20px',
      };

      return (
        <Fragment>
          <Modal active={this.state.error} closeModal={this.closeModal}>
            <i className="fas fa-times" onClick={this.closeModal}></i>
            {this.state.error ? this.state.error.message : null}
            <button style={buttonStyle} onClick={this.closeModal}>
              Ok
            </button>
          </Modal>
          <WrappedContent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
