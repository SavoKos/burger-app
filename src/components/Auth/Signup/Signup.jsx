import React, { Component } from 'react';

import './signup.scss';

class Signup extends Component {
  state = {
    password: '',
    email: '',
    name: '',
    error: [],
  };

  updateInputValueHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkErrors = () => {
    const isError = this.props.trySignup(this.state);
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
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            onChange={event => this.updateInputValueHandler(event)}
          />
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
      </div>
    );
  }
}

export default Signup;
