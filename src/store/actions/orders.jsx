import * as actionTypes from './actionTypes';
import axios from '../../root/axios-orders';

export const startOrdering = () => {
  return {
    type: actionTypes.INIT_LOADING,
  };
};

export const sendOrderBurgerRequest = (orderData, token) => {
  return dispatch => {
    dispatch(startOrdering());

    axios
      .post(`orders.json?auth=${token}`, orderData)
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

export const initRedirected = () => {
  return {
    type: actionTypes.INIT_REDIRECTED,
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

export const reinitializeOrderState = () => {
  return {
    type: actionTypes.REINITIALIZE_ORDER_STATE,
  };
};

export const fetchOrdersFailed = () => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
  };
};

export const startFetchingOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());

    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get(`orders.json${queryParams}`)
      .then(res => {
        if (!res.data || Object.keys(res.data).length < 1)
          return dispatch(fetchOrdersFailed());

        return dispatch(fetchOrders(res.data));
      })
      .catch(error => console.log(error));
  };
};
