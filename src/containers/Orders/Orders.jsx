import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import NoOrders from '../../components/Order/NoOrders/NoOrders';
import { startFetchingOrders } from '../../store/actions/orders';
import { Redirect } from 'react-router';

class Orders extends Component {
  componentDidMount() {
    if (this.props.token)
      this.props.onFetchOrder(this.props.token, this.props.userId);
  }

  render() {
    if (!this.props.token) return <Redirect to="/auth" />;

    if (
      (Object.keys(this.props.order).length === 0 &&
        !this.props.noOrdersFound) ||
      this.props.loading
    )
      return <Spinner />;
    if (this.props.noOrdersFound) return <NoOrders />;

    return Object.values(this.props.order).map(order => {
      return (
        <Order
          ingredients={order.ingredients}
          price={order.price}
          key={uniqid()}
        />
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    order: state.orders.orders,
    noOrdersFound: state.orders.noOrdersFound,
    loading: state.orders.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrder: (token, userId) =>
      dispatch(startFetchingOrders(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
