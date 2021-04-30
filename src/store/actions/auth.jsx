import axios from 'axios';
import * as actionTypes from './actionTypes';

export const startAuth = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authFail = authType => {
  const error = {
    type: 'loginError',
    message: 'Email or Password is invalid. Try again.',
  };

  if (authType === 'signUp') {
    error.type = 'signupError';
    error.message = 'Try signing up with another email, or try again later';
  }

  return {
    type: actionTypes.AUTH_FAIL,
    errorType: error.type,
    errorMessage: error.message,
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const logoutTimer = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const auth = (email, password, authType) => {
  return dispatch => {
    dispatch(startAuth());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const firebaseApiKey = 'AIzaSyCMm-9pd2jLFdhKS3foaGF3wygPXdiha_Y';

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${authType}?key=${firebaseApiKey}`,
        authData
      )
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
        dispatch(logoutTimer(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(authType));
      });
  };
};
