import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  purchasedIngredients: 0,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, ingName) => {
  const updatedIngredients = { ...state.ingredients };
  if (state.purchasedIngredients > 3) return state;
  updatedIngredients[ingName] = state.ingredients[ingName] + 1;

  // update purchased ingredients count
  const purchasedIngredients = Object.values({
    ...updatedIngredients,
  }).reduce((a, b) => a + b);

  // update price
  const updatedTotalPrice = state.totalPrice + INGREDIENT_PRICES[ingName];

  return {
    ...state,
    ingredients: updatedIngredients,
    totalPrice: updatedTotalPrice,
    purchasedIngredients: purchasedIngredients,
  };
};

const removeIngredient = (state, ingName) => {
  const updatedIngredients = { ...state.ingredients };
  if (updatedIngredients[ingName] === 0) return state;

  updatedIngredients[ingName] = state.ingredients[ingName] - 1;

  // update price
  const updatedTotalPrice = state.totalPrice - INGREDIENT_PRICES[ingName];

  // update purchased ingredients count
  const purchasedIngredients = Object.values({
    ...updatedIngredients,
  }).reduce((a, b) => a + b);

  return {
    ingredients: updatedIngredients,
    totalPrice: updatedTotalPrice,
    purchasedIngredients: purchasedIngredients,
  };
};

const reducer = (
  state = initialState,
  { type, ingredientName, fetchedIngredients }
) => {
  switch (type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, ingredientName);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, ingredientName);
    case actionTypes.SET_INGREDIENTS:
      return { ...state, ingredients: fetchedIngredients };
    case actionTypes.REINITIALIZE_BURGER_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
