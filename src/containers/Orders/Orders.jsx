import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import NoOrders from '../../components/Order/NoOrders/NoOrders';
import { startFetchingOrders } from '../../store/actions/orders';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrder();
  }

  render() {
    if (
      (Object.keys(this.props.order).length === 0 &&
        !this.props.noOrdersFound) ||
      this.props.loading
    )
      return <Spinner />;
    if (this.props.noOrdersFound) return <NoOrders />;

    return Object.values(this.props.order).map(order => {
      console.log(order);
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrder: () => dispatch(startFetchingOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
