import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../../store/actions/auth';

import './login.scss';
class Login extends Component {
  state = {
    password: '',
    email: '',
    authType: 'signInWithPassword',
    error: [],
  };

  updateInputValueHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkErrors = () => {
    const isError = this.props.tryLogin(this.state);
    if (isError.length > 0) return this.setState({ error: isError });
    this.props.onAuth(
      this.state.email,
      this.state.password,
      this.state.authType
    );
  };

  render() {
    let error = '';
    if (this.state.error !== [])
      error = this.state.error.map(errorMessage => (
        <p key={errorMessage} className="error-message">
          {errorMessage}
        </p>
      ));

    return (
      <div className={this.props.loginClass}>
        <div className="center">
          <h2
            className="form-title"
            id="login"
            onClick={this.props.loginActive}
          >
            <span>or</span>Log in
          </h2>
          <div className="form-holder">
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              onChange={event => this.updateInputValueHandler(event)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              onChange={event => this.updateInputValueHandler(event)}
            />
          </div>
          {error}
          <button className="submit-btn" onClick={this.checkErrors}>
            Log in
          </button>
          <p className="error-message">{this.props.backendError}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, authType) =>
      dispatch(auth(email, password, authType)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
