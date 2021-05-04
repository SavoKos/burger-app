import * as actionTypes from './actionTypes';

export const closeSlider = () => {
  return {
    type: actionTypes.CLOSE_SLIDER,
  };
};

export const openSlider = () => {
  return {
    type: actionTypes.OPEN_SLIDER,
  };
};
