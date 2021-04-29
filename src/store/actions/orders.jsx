import * as actionTypes from './actionTypes';
import axios from '../../root/axios-orders';

export const startOrdering = () => {
  return {
    type: actionTypes.INIT_LOADING,
  };
};

export const sendOrderBurgerRequest = orderData => {
  return dispatch => {
    dispatch(startOrdering());
    axios
      .post('orders.json', orderData)
      .then(response => {
        return dispatch(orderBurger(response.data.name, orderData));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const orderBurger = (id, orderData) => {
  return {
    type: actionTypes.ORDER_BURGER,
    id: id,
    orderData: orderData,
  };
};

export const initPurchase = () => {
  return {
    type: actionTypes.INIT_PURCHASE,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.INIT_LOADING,
  };
};

export const fetchOrders = order => {
  return {
    type: actionTypes.FETCH_ORDERS,
    fetchedOrders: order,
  };
};

export const fetchOrdersFailed = () => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
  };
};

export const startFetchingOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get('orders.json')
      .then(res => {
        console.log(res);
        if (!res.data) return dispatch(fetchOrdersFailed());
        return dispatch(fetchOrders(res.data));
      })
      .catch(error => console.log(error));
  };
};
