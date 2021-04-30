import React, { Component } from 'react';

import './login.scss';
class Login extends Component {
  state = {
    password: '',
    email: '',
    error: [],
  };

  updateInputValueHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkErrors = () => {
    const isError = this.props.tryLogin(this.state);
    if (isError !== []) this.setState({ error: isError });
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
        </div>
      </div>
    );
  }
}

export default Login;
