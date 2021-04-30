import React, { Component } from 'react';
import { connect } from 'react-redux';

import { auth } from '../../../store/actions/auth';

import './signup.scss';

class Signup extends Component {
  state = {
    password: '',
    email: '',
    authType: 'signUp',
    error: [],
  };

  updateInputValueHandler = event => {
    this.setState({ [event.target.type]: event.target.value });
  };

  checkErrors = () => {
    const isError = this.props.trySignup(this.state);
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
      <div className={this.props.signupClass}>
        <h2
          className="form-title"
          id="signup"
          onClick={this.props.signupActive}
        >
          <span>or</span>Sign up
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
          Sign up
        </button>
        <p className="error-message">{this.props.backendError}</p>
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

export default connect(null, mapDispatchToProps)(Signup);
