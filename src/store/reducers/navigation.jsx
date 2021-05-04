import * as actionTypes from '../actions/actionTypes';

const initialState = {
  sliderOpened: false,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.CLOSE_SLIDER:
      return { ...state, sliderOpened: false };
    case actionTypes.OPEN_SLIDER:
      return { ...state, sliderOpened: true };
    default:
      return state;
  }
};

export default reducer;
