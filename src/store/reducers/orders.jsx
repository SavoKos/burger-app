import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  orders: [],
  purchased: false,
  noOrdersFound: true,
  isRedirected: false,
};

const orderBurger = (state, id, orderData) => {
  const newOrder = {
    id: id,
    orderData: orderData,
  };

  let updatedOrders = null;
  if (state.orders && newOrder.id && newOrder.orderData)
    updatedOrders = Object.assign(state.orders, newOrder);

  return {
    ...state,
    loading: false,
    orders: updatedOrders ? updatedOrders : state.orders,
    purchased: true,
    isRedirected: true,
  };
};

const fetchOrders = (state, orders) => {
  return {
    ...state,
    loading: false,
    orders: orders,
    noOrdersFound: false,
  };
};

const reinitializeState = state => {
  return {
    ...state,
    loading: false,
    purchased: false,
    noOrdersFound: true,
    isRedirected: false,
  };
};

const reducer = (
  state = initialState,
  { type, id, orderData, fetchedOrders }
) => {
  switch (type) {
    case actionTypes.INIT_LOADING:
      return { ...state, loading: true };
    case actionTypes.ORDER_BURGER:
      return orderBurger(state, id, orderData);
    case actionTypes.INIT_PURCHASE:
      return { ...state, purchased: false };
    case actionTypes.REINITIALIZE_ORDER_STATE:
      return reinitializeState(state);
    case actionTypes.INIT_REDIRECTED:
      return { ...state, isRedirected: false };
    case actionTypes.FETCH_ORDERS_FAILED:
      return { ...state, loading: false, noOrdersFound: true };
    case actionTypes.FETCH_ORDERS:
      return fetchOrders(state, fetchedOrders);
    default:
      return state;
  }
};

export default reducer;
