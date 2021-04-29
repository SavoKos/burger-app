import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  orders: [],
  purchased: false,
  noOrdersFound: true,
};

const orderBurger = (state, id, orderData) => {
  const newOrder = {
    id: id,
    orderData: orderData,
  };

  const updatedOrders = state.orders.concat(newOrder);
  return {
    ...state,
    loading: false,
    orders: updatedOrders,
    purchased: true,
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

export default (
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
    case actionTypes.FETCH_ORDERS_FAILED:
      return { ...state, loading: false, noOrdersFound: true };
    case actionTypes.FETCH_ORDERS:
      return fetchOrders(state, fetchedOrders);
    default:
      return state;
  }
};
