import * as actionTypes from './actionTypes';
import axios from '../../root/axios-orders';

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    fetchedIngredients: ingredients,
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get('ingredients.json')
      .then(response => {
        return dispatch(setIngredients(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const reinitializeState = () => {
  return {
    type: actionTypes.REINITIALIZE_STATE,
  };
};
