import React, { Component } from 'react';
import Login from '../../components/Auth/Login/Login';
import Signup from '../../components/Auth/Signup/Signup';

class Auth extends Component {
  state = { isSignupActive: true };

  signupActiveHandler = () => {
    this.setState({ isSignupActive: true });
  };

  loginActiveHandler = () => {
    this.setState({ isSignupActive: false });
  };

  checkErrors = info => {
    const errorMessage = [];

    const doesNameExists = Object.keys(info).find(key => key === 'name');
    const emailValidateRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (doesNameExists && info.name.replace(/\s/g, '').length < 5)
      errorMessage.push('Enter Full Name');

    if (info.password.length < 7)
      errorMessage.push('Password must be at least 7 characters long!');

    if (!emailValidateRegex.test(String(info.email).toLowerCase()))
      errorMessage.push('Enter Valid Email!');

    return errorMessage;
  };

  signupHandler = info => {
    const error = this.checkErrors(info);
    if (error !== []) return error;
  };

  render() {
    const signupClass = ['signup'];
    const loginClass = ['login'];

    this.state.isSignupActive
      ? loginClass.push('slide-up')
      : signupClass.push('slide-up');

    return (
      <div className="form-structor">
        <Signup
          signupClass={signupClass.join(' ')}
          signupActive={this.signupActiveHandler}
          trySignup={info => this.signupHandler(info)}
        />
        <Login
          loginClass={loginClass.join(' ')}
          loginActive={this.loginActiveHandler}
          tryLogin={info => this.signupHandler(info)}
        />
      </div>
    );
  }
}

export default Auth;
