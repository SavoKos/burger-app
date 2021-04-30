import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  userId: null,
  token: null,
  signupError: null,
  loginError: null,
  isLogged: false,
};

const reducer = (
  state = initialState,
  { type, errorType, errorMessage, authData }
) => {
  switch (type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true, signupError: null, loginError: null };
    case actionTypes.AUTH_FAIL:
      return { ...state, loading: false, [errorType]: errorMessage };
    case actionTypes.LOGOUT:
      return { ...state, userId: null, token: null, isLogged: false };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: authData.idToken,
        loading: false,
        userId: authData.localId,
      };

    default:
      return state;
  }
};

export default reducer;
